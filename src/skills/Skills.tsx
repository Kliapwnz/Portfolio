import React from 'react';
import s from "./Skills.module.css"
import sc from "../common/styles/Container.module.css"

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sc.container} ${s.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={s.skills}></div>
            </div>

        </div>
    );
};

