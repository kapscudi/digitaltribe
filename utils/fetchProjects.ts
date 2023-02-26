import { Project } from '@/typing';

export const fetchProject = async () => {
  const res = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
  const data = await (await res).json();
  const projects: Project[] = data.projects;

  return projects;
};
