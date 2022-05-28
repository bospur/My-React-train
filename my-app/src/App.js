import React, { useEffect, useState} from 'react';
import { useSortedPosts } from './hooks/useSortedPost';
import PostFilter from './componets/PostFilter';
import PostForm from './componets/PostForm';
import PostList from './componets/PostList';
import MyButton from './componets/UI/button/MyButton';
import MyModal from './componets/UI/MyModal/MyModal';
import './styles/App.css';
import PostService from './API/PostService';
import Loader from './componets/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';



const App = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({
        sort: '',
        query: ''
    });
    const [modal, setModal] = useState(false);
    const sortedAndSorchedPosts = useSortedPosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostLoading, postError] = useFetching(
        async () => {
            const posts = await PostService.getAll();
            setPosts(posts);
        }
    )

    useEffect(() => {
        fetchPosts();
    }, [])

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
            {postError &&
                <h1 style={{textAlign: 'center'}}>Ошибка {postError}</h1>
            }
            {
                isPostLoading
                    ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                        <Loader>Загрузка...</Loader>
                      </div>
                    : <PostList 
                        posts={sortedAndSorchedPosts}
                        title="Посты" 
                        onRemove={removePost}
                      />     
            }     
       </div>
    );
}

export default App;
