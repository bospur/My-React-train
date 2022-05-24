import React from 'react';

const PostItem = (props) => {
    return (
        <div className="posts">
               <div className="posts__content">
                   <strong>{props.post.id}. {props.post.title}</strong>
                   <div>
                       {props.post.body}
                   </div>
               </div>
               <div className='posts__btns'>
                   <button>Удалить</button>
               </div>
           </div>
    );
}

export default PostItem;
