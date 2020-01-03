import React from 'react';

import { SkillType } from './skill.type';

import { SkillItemComponent } from './item.component';

import calgaryImage from '@img/skills-background.png';
import injectSheet from 'react-jss';
import './skills.styles.css';

export interface SkillListProps {
  skills: SkillType[];
  classes: any;
}

const skillListStyles = (theme: any) => ({
  skills: {
    backgroundColor: '#df3940',
  },
});

const SkillList = ({ skills, classes }: SkillListProps) => {
  const renderItemList = () => {
    return skills.map((skill: SkillType) => {
      if (!skill.isSoftSkill) {
        return <SkillItemComponent key={skill._id} skill={skill} />;
      }

      return null;
    });
  };

  const renderTools = (): any => {
    return skills.map((skill: SkillType) => {
      if (skill.isSoftSkill) {
        return (
          <i key={skill._id} className="btn btn__link btn--no-link mb-1">
            {skill.title}
          </i>
        );
      }

      return null;
    });
  };

  return (
    <section
      id="skills"
      className={`skills ${classes.skills} page-section`}
      data-matching-link="#link-skills"
    >
      <div className="container">
        <div className="skills__statistics col-xs-12 col-sm-6 col-lg-6">
          <h1 className="skills__title">SKILLS</h1>
          {renderItemList()}
          <div className="skills__item skills__item--others">
            <div className="col-xs-2 col-sm-4">
              <p className="skills__name">Other Technologies</p>
            </div>
            <div className="skills__more col-sm-10">{renderTools()}</div>
          </div>
        </div>
        <img
          className="skills__profile lazyload"
          src="https://i.ibb.co/Nj6L9q8/skills-background.png"
          alt="Anuar Jiménez"
        />
      </div>
    </section>
  );
};

export const SkillListComponent = injectSheet(skillListStyles)(SkillList);
