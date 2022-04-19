import { useState, useEffect } from 'react';
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';
import '../css/home.css'
import {Link} from 'react-router-dom'
const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        getDocs(collection(db, 'posts'))
            .then(
                (snapshot) => {
                    const posts = snapshot.docs.map((doc) => {
                        return (
                            {
                                id: doc.id,
                                ...doc.data()
                            }
                        )
                    })

                    console.log(posts)

                    setPosts(posts)
                }
            );



    }, [])
    return (
        <div className="home_container">
            <div style={styles.header_container}>
            <h2 style={styles.heading}>Tech Blog </h2>
            <h3 className='blog-by'>By-Swapnil</h3>
            </div>
            {posts.map(
                (post,index) => {
                    return (
                        <div className='post_container' key={`post-${index}`}>
                            <Link  to={`/post/${post.id}`}> 
                            <p className='post_title'>{post.title}</p>
                            </Link >
                            <p className='post_subtitle'>{post.subTitle}</p>
                        </div>
                    )
                }
            )}
        </div>
    )
}

//inline styling 
const styles ={
    heading :{
        fontSize:56,
    },
    header_container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginBottom:10

    }
}
export default Home;