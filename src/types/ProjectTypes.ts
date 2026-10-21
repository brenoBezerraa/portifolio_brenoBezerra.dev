export type Project = {
  title: string;
  category: string;
  description: string;
  longDescription: string;

  stack: string[];

  github: string;
  live: string;

  stats: {
    year: string;
    role: string;
    duration: string;
  };

  img: string;
};