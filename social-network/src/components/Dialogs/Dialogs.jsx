import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <main className={s.dialogs}>
            <section className={s.dialogItem}>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to='/dialogs/1'> Sasha </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to='/dialogs/2'> Andry </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active}to='/dialogs/3'> Artem </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to='/dialogs/4'> Alex </NavLink>
                </div>

            </section>
            <section className="messages">
                <article className="messsage">Hi</article>
                <article className="messsage">How are you?</article>
                <article className="messsage">Fine</article>
            </section>
        </main>
    );


};
export default Dialogs;