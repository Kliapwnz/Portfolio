import React from 'react';
import s from "./Skills.module.css"
import sc from "../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sc.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"HTML&CSS"} description={"text"}/>
                    <Skill title={"JS"} description={"text"}/>
                    <Skill title={"React"} description={"text"}/>
                </div>
            </div>

        </div>
    );
};

