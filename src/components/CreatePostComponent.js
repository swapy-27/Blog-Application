import '../css/createpost.css';

import { doc, setDoc } from 'firebase/firestore/lite';
import useFormInput from './hooks';

import db from '../firebase'

const CreatePostComponent = () => {
    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        const postRef = doc(db, 'posts', title.value);

        await setDoc(postRef,
            {
                title: title.value,
                subTitle: subTitle.value,
                content: content.value,
                createdAt: new Date()
            })



    }

    return (
        <div className="createPost_container">
            <h1>Create Post</h1>
            <form>
                <div className='form-field'>
                    <label>Title</label>
                    <input {...title}
                    />

                </div>
                <div className='form-field'>
                    <label>Sub-Title</label>
                    <input {...subTitle} />

                </div>
                <div className='form-field'>
                    <label>Content</label>
                    <textarea {...content}></textarea>

                </div>

                <button className='create-post-btn' onClick={handleSubmit}>Create-Post</button>
            </form>
        </div>
    )
}
export default CreatePostComponent;