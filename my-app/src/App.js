import React, {useMemo, useState} from 'react';
import PostFilter from './componets/PostFilter';
import PostForm from './componets/PostForm';
import PostList from './componets/PostList';
import MyButton from './componets/UI/button/MyButton';
import MyModal from './componets/UI/MyModal/MyModal';
import './styles/App.css'


const App = () => {
    const [posts, setPosts] = useState([
        { id: 1, title:"JavaScript", body: "мультипарадигменный язык программирования"},
        { id: 2, title:"Python", body: "высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью"},
        { id: 3, title:"Java", body: "строго типизированный объектно-ориентированный язык программирования общего назначения, разработанный компанией Sun Microsystems."}
    ]);
    const [filter, setFilter] = useState({
        sort: '',
        query: ''
    });
    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSorchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    }

    const removePost = (post) => {
        const newPosts = posts.filter(item => item.id !== post.id);
        setPosts([...newPosts]);
    }

    return (
       <div class="App">
           <MyButton style={{marginTop: '15px'}} onClick={() => setModal(true)}> Создать пост </MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <PostForm create={createPost}/>    
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter 
                filter={filter}
                setFilter={setFilter}
            />
            <PostList 
                posts={sortedAndSorchedPosts}
                title="Посты про языки программирования" 
                onRemove={removePost}
            />          
       </div>
    );
}

export default App;
