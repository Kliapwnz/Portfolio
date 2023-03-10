import React from 'react';
import s from "./Main.module.css"
import sc from "../common/styles/Container.module.css"


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sc.container}>
                <div className={s.greetings}>
                    <span>Hi There</span>
                    <h1>I am Evgeniy Klimovich</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

