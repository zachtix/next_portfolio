export interface ProjectsState {
  projects: object[];
}
interface Tag {
  id: number;
  name: string;
}
interface Stack {
  id: number;
  name: string;
}
export interface Project {
  name: string;
  description: string;
  link: string;
  repoLink: string;
  thumbnailImage: string;
  content: string;
  stacks: Stack[];
  tags: Tag[];
}
