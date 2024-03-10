import { HeroProps } from 'components/landingPage/Hero';
import { PhylogenyProps } from 'components/landingPage/Phylogeny';
import { AboutProps } from 'components/landingPage/About';
import { ContactProps } from 'components/landingPage/Contact';
import { footerContent } from './footer';

const heroContent: HeroProps = {
  title: 'Explore The Beauty of Evolution',
  subtitle:
    'A navigable, online encyclopedia, of the entire evolutionary tree of life',
  cta: 'Get started!',
  background: '/images/barnacle.png',
};

const phylogenyContent: PhylogenyProps = {
  image: '/images/Phylogenetic_Tree_of_Life.png',
  title: 'What is Phylogeny?',
  text: 'Phylogeny concerns the evolutionary history and development of \
  organisms, how they diverge and evolve from each other, and the \
  relationships between them.',
  imgHeight: 585,
  imgWidth: 1024,
};

const contactContent: ContactProps = {
  title: 'Contact us',
  text: 'If you would like more information about the Phylogeny Explorer Project, please contact one of our admins, or apply to become a member in our Facebook group, [Phylogeny Explorer Development](https://www.facebook.com/groups/phylogenyexplorerdevelopment/). \
  \n\n At the moment we grant only access to the Explorer if you meet one of multiple conditions: \
  \n 1. You are volunteering with us. \
  \n 2. Have made a donation. \
  \n\n Granting access at this point in time costs the Phylogeny Explorer Project lots of money and infrastucture. Once we are fully running we will give limited access to all people. \
  \n Please note where in Alpha stage meaning we do not yet have the ability to edit the tree. Meaning not everything is in the correct order. ',
};

const aboutContent: AboutProps = {
  title: 'What is the Phylogeny Explorer?',
  text: 'The Phylogeny Explorer is a navigable, online encyclopedia of the entire \
  evolutionary tree of life. Navigate the cladogram, from root to tips, and \
  see ancestral lineages branching like a tree. Search for specific clades \
  or species, and interact with the nodes at each branch to find out more \
  information, including pictures, parent or child clades, and reference \
  material.',
  images: ['/images/feature_tree_info.png', '/images/feature_wiki.png'],
};

export const content = {
  hero: heroContent,
  phylogeny: phylogenyContent,
  about: aboutContent,
  contact: contactContent,
  footer: footerContent,
};
