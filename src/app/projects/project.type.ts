import { ProjectTechnologyProps } from './technology.component';

export type ProjectType = {
  _id: string;
  title: string;
  description: string;
  info: string;
  links: {
    webpage: string;
    repo: string;
  };
  images: {
    hq: string;
    mq: string;
    lq: string;
  };
  technologies: ProjectTechnologyProps[];
  isInitial: boolean;
  index: number;
};
