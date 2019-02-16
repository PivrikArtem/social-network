import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <article className={s.item}>
            <img src='https://www.iphones.ru/wp-content/uploads/2017/12/0-29-1240x698.jpg' />
            <span>
                {props.message}
            </span>
            <div>
                <span >like {props.count}</span>
            </div>
        </article>
    )
}
export default Post;