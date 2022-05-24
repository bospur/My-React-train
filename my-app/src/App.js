import React, {useState} from 'react';
import PostList from './componets/PostList';
import MyButton from './componets/UI/button/MyButton';
import MyInput from './componets/UI/Input/MyInput';
import './styles/App.css'


const App = () => {
    const [posts, setPosts] = useState([
        { id: 1, title:"JavaScript", body: "Description"},
        { id: 2, title:"JavaScript", body: "Description"},
        { id: 3, title:"JavaScript", body: "Description"}
    ]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')

    const addNewPost = (evt) => {
        evt.preventDefault();
        const newPost = {
            id: posts.length + 1,
            title,
            body
        }

        setPosts([...posts, newPost]);
        setTitle('');
        setBody('');
    };

    return (
       <div class="App">

           <form>
               <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder='Название поста'/>
               <MyInput
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    type="text" 
                    placeholder='Описание поста'/>
               <MyButton onClick={addNewPost}>Создать пост</MyButton>
           </form>
           <PostList posts={posts} title="Список постов"/>
           
           
       </div>
        
    );
}

export default App;
