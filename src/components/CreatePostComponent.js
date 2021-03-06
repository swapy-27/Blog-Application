import '../css/createpost.css';

// in this way webpack give us uique class and the scope of that class is only limited to this js code only .
import classes from '../css/button.module.css'

import { collection, doc, setDoc, addDoc } from 'firebase/firestore/lite';
import useFormInput from './hooks';

import db from '../firebase'

const CreatePostComponent = () => {
    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "posts"), {
            title: title.value,
            subTitle: subTitle.value,
            content: content.value,
            createdAt: new Date()
        });
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

                <button className={classes.createPostBtn} onClick={handleSubmit}>Create-Post</button>
            </form>
        </div>
    )
}
export default CreatePostComponent;