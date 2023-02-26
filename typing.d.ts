interface SanityBody {
  _CreatedAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  address: string;
  backgroundInformation: string;
  email: string;
  heroImage: string;
  name: string;
  role: string;
  phoneNumber: string;
  profilePic: string;
}

export interface Technology extends SanityBody {
  _type: 'skills';
  image: Image;
  progress: string;
  title: string;
}

export interface Skill extends SanityBody {
  _type: 'skills';
  image: Image;
  progress: string;
  title: string;
}

export interface Experience extends SanityBody {
  _type: 'experience';
  companyImage: Image;
  company: string;
  jobTitle: string;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorkingHere: boolean;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  _type: 'project';
  image: Image;
  Summary: string;
  link: string;
  title: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}
