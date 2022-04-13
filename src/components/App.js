
import '../css/App.css';
import {  Route, Routes } from 'react-router-dom';
import {Home,PostDetail,CreatePostComponent} from './index'

function App() {
  return (
    <div className="App">
   
      <Routes>

        <Route exact path='/' element={<Home/>} />
        <Route exact path='/post/:id' element={<PostDetail/>} />
        <Route exact path='/create-post' element={<CreatePostComponent/>} />

      </Routes>
    </div>
  );
}

export default App;
