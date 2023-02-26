import { Skill } from '@/typing';

export const fetchSkill = async () => {
  const res = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  const data = await (await res).json();
  const skills: Skill[] = data.skills;
  return skills;
};
