import React from 'react';

export interface ProjectTechnologyProps {
  title: string;
  url: string;
}

export const ProjectTechnologyComponent = ({ title, url }: ProjectTechnologyProps) => (
  <img className="project__technology-icon lazyload" src={url} alt={title} />
);
