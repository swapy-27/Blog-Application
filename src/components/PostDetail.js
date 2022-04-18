import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/createpost.css';
import db from '../firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore/lite';
const PostDetail = () => {
    const [post, setPost] = useState({});
    const { postId } = useParams();

    useEffect(
        () => {
            const docRef = doc(db, 'posts', postId)

            getDoc(docRef)
                .then(
                    (snapshot) => {
                         setPost (snapshot.data());
                    })
        }

        , [postId])

    return (
        <div className="postdetail_container">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    )
}
export default PostDetail;