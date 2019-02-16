import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <section className={s.content}>
            <article>
                <img src='https://images2.alphacoders.com/230/230080.jpg' />
            </article>
            <article>
                ava+description
            </article>
            <MyPosts />
        </section>
    )
}
export default Profile;