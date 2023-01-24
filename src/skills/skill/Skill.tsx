import React from 'react';
import s from "./Skill.module.css"

type PropsType ={
    title:string
}

export const Skill = (props:PropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <div className={s.description}></div>
        </div>
    );
};

