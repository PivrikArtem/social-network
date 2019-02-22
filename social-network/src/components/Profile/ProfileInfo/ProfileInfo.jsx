import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <article className={s.content}>
            <div>
                <img src='https://images2.alphacoders.com/230/230080.jpg'/>
            </div>
            <div>
                ava+description
            </div>
        </article>
    )
}
export default ProfileInfo;