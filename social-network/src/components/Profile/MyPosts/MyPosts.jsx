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
            <Post message='eeee'count='1'/>
            <Post message='It is a good day'count='2'/>
            <Post message='nnn' count='3'/>
            </div>
           
        </article>
    )
}
export default MyPosts;