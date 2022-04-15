import '../css/createpost.css';
import {useState} from 'react'
const CreatePostComponent = ()=>{
    const [title,setTitle]= useState();
    const [subTitle,setsubTitle]= useState();
    const [content,setcontent]= useState();
    const handleSubmit =(e)=>{
            e.preventDefault();
            console.log('hey')
            console.log(title,subTitle,content);
    }

    return (
        <div className="createPost_container">
            <h1>Create Post</h1>
            <form>
            <div className='form-field'>
                <label>Title</label>
                <input value={title} onChange={(e)=>{
                    setTitle(e.target.value);
                }}/>

            </div>
            <div className='form-field'>
                <label>Sub-Title</label>
                <input value={subTitle} onChange={(e)=>{
                    setsubTitle(e.target.value);
                }}/>
                
            </div>
            <div className='form-field'>
                <label>Content</label>
                <textarea value={content} onChange={(e)=>{
                    setcontent(e.target.value);
                }}></textarea>
                
            </div>

            <button className='create-post-btn' onClick={handleSubmit}>Create-Post</button>
            </form>
        </div>
    )
}
export default CreatePostComponent;