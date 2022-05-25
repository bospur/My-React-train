import React, {useState} from 'react';
import PostForm from './componets/PostForm';
import PostList from './componets/PostList';
import './styles/App.css'


const App = () => {
    const [posts, setPosts] = useState([
        { id: 1, title:"JavaScript", body: "Description"},
        { id: 2, title:"JavaScript", body: "Description"},
        { id: 3, title:"JavaScript", body: "Description"}
    ]);
    
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        const newPosts = posts.filter(item => item.id !== post.id);
        setPosts([...newPosts]);
    }

    return (
       <div class="App">           
            <PostForm create={createPost}/>
            {
                posts.length
                ? <PostList posts={posts} title="Посты про JS" onRemove={removePost}/>
                : <h1 style={{textAlign: 'center'}}>Постов не обнаруженно...</h1>
            }           
       </div>
    );
}

export default App;
