import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <article className={s.item}>
            <img src='https://www.iphones.ru/wp-content/uploads/2017/12/0-29-1240x698.jpg' />
            <span>fjfj</span>
            <div>
                <span >like</span>
            </div>
        </article>
    )
}
export default Post;