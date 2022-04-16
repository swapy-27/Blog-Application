import { useState, useEffect } from 'react';
import db from '../firebase';
import { collection } from 'firebase/firestore/lite';
import { doc, getDoc } from 'firebase/firestore/lite';
import { getDocs } from 'firebase/firestore/lite';
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
            <h2>Home</h2>
        </div>
    )
}
export default Home;