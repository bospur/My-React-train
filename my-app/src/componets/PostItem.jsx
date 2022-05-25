import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = ({number, post, onRemove}) => {
    
    const removePost = () => {
        onRemove(post)
    };

    return (
        <div className="posts">
               <div className="posts__content">
                   <strong>{number}. {post.title}</strong>
                   <div>
                       {post.body}
                   </div>
               </div>
               <div className='posts__btns'>
                   <MyButton onClick={removePost}>Удалить</MyButton>
               </div>
           </div>
    );
}

export default PostItem;
