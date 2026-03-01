import { useState } from 'react';
import './Card.css';
// type Param = {
//     name:string;
//     age:number;
// }
interface Post {
    title: string;
    content: string;
    owner: string;
    likes:number;
    comments:string[];
}
interface Param {
    post: Post
}
export default function Card({ post }: Param) {
    const [likes,setLikes] = useState(0);
    

    return (
        <div className="card">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>
                <small>Posted By : <code>{post.owner}</code></small>
            </p>
            <div className='rx'>
                <small onClick={()=>{setLikes(likes + 1)}}>❤️ {likes}</small>
                <small>✉️ {post.comments.length}</small>
            </div>
            <div>
                <button style={{ color: 'red' }}>Details</button>
            </div>
        </div>
    )
}

// interface Person { name: string, age: number }
// function sayHi({name,age}:Person) {
//     console.log(`Hello... ${name} how are u? U're ${age} years old`)
// }
// const person1 = {
//     name: 'Steeve',
//     age: 15,
//     level:"m2",
//     school:"ism",
//     married:"not yet",
//     inCouple:true,
//     numberChil:5678
// }
// sayHi(person1)
