import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Wrapper, Dot } from './DotNav.styled';

interface Props {
  sections: string[];
}

const DotNav = ({ sections }: Props) => {
  const router = useRouter();
  const { asPath, ...rest } = router;
  console.log(asPath, rest);
  return (
    <Wrapper>
      {sections.map(item => (
        <Link key={item} href={`#${item}`} passHref>
          <Dot active={asPath.includes(item)} />
        </Link>
      ))}
    </Wrapper>
  );
};

export default DotNav;
