import { Experience } from '@/typing';

export const fetchExperience = async () => {
  const res = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`);
  const data = await (await res).json();
  const experiences: Experience[] = data.experiences;
  return experiences;
};
