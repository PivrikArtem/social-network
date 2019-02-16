import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <article className={s.posts}>
            <div>
                My posts
            </div>
            <div>
            <textarea className=''></textarea>
            <button>add post</button>
            </div>
            <div className=''>
            <Post />
            <Post />
            <Post />
            </div>
           
        </article>
    )
}
export default MyPosts;