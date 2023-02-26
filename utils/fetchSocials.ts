import { Social } from '@/typing';

export const fetchSocial = async () => {
  const res = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  const data = await (await res).json();
  const socials: Social[] = data.socials;
  return socials;
};
