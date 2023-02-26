import Head from 'next/head';
import logo from '../assets/favicon.png';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experiences from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Project';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { Experience, PageInfo, Project, Skill, Social } from '@/typing';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchExperience } from '@/utils/fetchExperiences';
import { fetchProject } from '@/utils/fetchProjects';
import { fetchSkill } from '@/utils/fetchSkills';
import { fetchSocial } from '@/utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden  z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>The 🖤 U Give | Créatif • Full-Stack Dev</title>
      </Head>

      <Header socials={socials} />
      <section id="intro" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <Experiences experiences={experiences} />
      </section>
      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#intro">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              width={10}
              height={10}
              src={logo}
              alt="logo"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const projects: Project[] = await fetchProject();
  const skills: Skill[] = await fetchSkill();
  const socials: Social[] = await fetchSocial();

  return {
    props: { pageInfo, socials, skills, projects, experiences },
    revalidate: 10,
  };
};
