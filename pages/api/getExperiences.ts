import { Experience } from '@/typing';
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity/sanity';

const query = groq`*[_type == "Experience"] {..., technologies[] ->}`;

type Data = { experiences: Experience[] };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experience[] = await sanityClient.fetch(query);
  res.status(200).json({ experiences });
}
