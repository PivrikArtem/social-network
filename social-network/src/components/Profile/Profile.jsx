import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <section className={s.content}>
            <article>
                <img src='https://images2.alphacoders.com/230/230080.jpg' />
            </article>
            <article>
                ava+description
            </article>
            <article>
                My posts
            </article>
            <article>
                New posts
         <article>
                    post1
             </article>
                <article>
                    post2
                    </article>
            </article>
        </section>
    )
}
export default Profile;