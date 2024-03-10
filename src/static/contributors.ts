import { HeaderProps } from 'components/contributorsPage/Header';
import { ManagementProps } from 'components/contributorsPage/Management';
import { DevTeamProps } from 'components/contributorsPage/DevTeam';
import { ProfileProps } from 'components/contributorsPage/Profile';
import { footerContent } from './footer';

const headerContent: HeaderProps = {
  title: 'About the Phylogeny Explorer Project',
  subtitle:
    'Building the Phylogeny Explorer is a massive project that is voluntary led, widely international, and is comprised of individuals of various vocational and educational backgrounds, all bringing their own skills, insights and creativity.',
  background: '/images/barnacle.png',
};

const profileManagementContent: ProfileProps[] = [
  {
    id: '1',
    image: '/images/barnacle.png',
    bio: 'Aron Ra is the creator and founder of the Phylogeny Explorer. He is a science educator, author, international speaker, political activist, and Texas State and US National Leader for American Atheists.',
    name: 'Aron Ra',
  },
  {
    id: '2',
    image: '/images/barnacle.png',
    bio: 'Project Manager',
    name: 'Steve Owen',
  },
  {
    id: '3',
    image: '/images/barnacle.png',
    bio: 'Operation Manager',
    name: 'Jeroen Pil',
  },
];
const managementContent: ManagementProps = {
  title: 'Project Management',
  text: '',
  profiles: profileManagementContent,
};

const profileDevTeamContent: ProfileProps[] = [
  {
    id: '4',
    image: '/images/barnacle.png',
    bio: 'Lead Developer',
    name: 'Isaac Raskin',
  },
  {
    id: '5',
    image: '/images/barnacle.png',
    bio: 'Chief Bit-twiddler',
    name: 'David Ihnen',
  },
  {
    id: '6',
    image: '/images/barnacle.png',
    bio: 'Data Scientist',
    name: 'Nikola Georgiev',
  },
  {
    id: '7',
    image: '/images/barnacle.png',
    bio: 'Front End Developer',
    name: 'Neill Hewitt',
  },
];

const devTeamContent: DevTeamProps = {
  title: 'Dev Team',
  text: 'We have a global team collaborating on the project, each person fulfilling one or multiple roles...',
  profiles: profileDevTeamContent,
};

export const content = {
  header: headerContent,
  devTeam: devTeamContent,
  management: managementContent,
  footer: footerContent,
};
