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
                    <Skill title={"HTML&CSS"}/>
                    <Skill title={"JS"}/>
                    <Skill title={"React"}/>
                </div>
            </div>

        </div>
    );
};

