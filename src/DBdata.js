
import { useState, useEffect } from 'react'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from './Firebase';

const DBdata = () => {

    const [todos, setTodos] = useState([]);

    const fetchPost = async () => {

        await getDocs(collection(db, "contacts"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setTodos(newData);
                console.log(todos, newData);
            })
    }
    useEffect(() => {
        fetchPost();
    }, [])

    const updateUser = async (id, updates) => {
        await db.collection("contacts").doc(id).update(updates);
        // const doc = await db.collection("contacts").doc(id).get();

        // const user = {
        //     id: doc.id,
        //     ...doc.data(),
        // };
        fetchPost();
        // console.log(user);
        // return user;
    };


    return (
        <div >
            <table className="table">
                <thead class="thead-dark">
                    <tr>
                      
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Currency</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Location</th>
                        <th scope="col">Date & Time</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>  {
                    todos?.map((todo, i) => (
                        <tr>
                            <td>{todo.name}</td>
                            <td>{todo.email}</td>
                            <td>{todo.currency}</td>
                            <td>{todo.contact}</td>
                            <td>{todo.amount}</td>
                            <td>{todo.location}</td>
                            <td>{todo.date}&nbsp;- {todo.time}</td>
                            <td><strong>{todo.status}</strong></td>
                            <td className='text-center'>
                            
                                {todo.status == "Pending" &&
                                <button class="btn btn-danger"
                                    onClick={() =>
                                        updateUser(todo.id, { status: "In Process" })
                                    }
                                >
                                    Process
                                </button>}
                                
                                &nbsp;
                                {todo.status == "In Process" &&
                                <button type="button" class="btn btn-success"
                                    onClick={() =>
                                        updateUser(todo.id, { status: "Completed" })
                                    }
                                >Complete</button>}
                                </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );

}
export default DBdata;