import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.active} to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <article className="messsage">{props.message}</article>
    )
}
const Dialogs = (props) => {
    return (
        <main className={s.dialogs}>
            <section className={s.dialogItem}>
                <DialogItem name='Sasha' id='1'/>
                <DialogItem name='Inna' id='2'/>
                <DialogItem name='Artem' id='3'/>
                <DialogItem name='Alex' id='4'/>
            </section>
            <section className="messages">
                <Message message='How are you?'/>
                <Message message='Hi'/>
                <Message message='And you?'/>
            </section>
        </main>
    );
};
export default Dialogs;