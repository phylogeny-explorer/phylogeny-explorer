import React, {
  useState,
  useEffect,
  PropsWithChildren,
  createContext,
  useContext,
  ReactNode,
} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Card from 'components/Card';
import { HeadingSmall, SubtitleSmall, SmallText } from 'components/Typography';
import {
  Wrapper,
  Nav,
  NavHeader,
  Subtitle,
  NavItems,
  LinkText,
  ElementWrapper,
  Info,
} from './VerticalNav.styled';

type InfoItem = { heading: string; text: string };

type VerticalNavContext = {
  setElement: (element: ReactNode) => void;
  setInfo: (items: InfoItem[]) => void;
};

const verticalNavContext = createContext<VerticalNavContext>({
  setElement: () => null,
  setInfo: () => null,
});

interface Props {
  heading: string;
  subheading?: string;
}

const VerticalNav = ({
  heading,
  subheading,
  children,
}: PropsWithChildren<Props>) => {
  const [element, setElement] = useState<ReactNode | null>(null);
  const [info, setInfo] = useState<InfoItem[]>([]);

  return (
    <Wrapper>
      <Nav>
        <NavHeader>
          <HeadingSmall>{heading}</HeadingSmall>
          {subheading && <Subtitle>{subheading}</Subtitle>}
        </NavHeader>
        <NavItems>
          <verticalNavContext.Provider value={{ setElement, setInfo }}>
            {children}
          </verticalNavContext.Provider>
        </NavItems>
      </Nav>
      <ElementWrapper>{element}</ElementWrapper>
      <Info>
        {info.map(item => (
          <Card key={item.heading}>
            <SubtitleSmall>{item.heading}</SubtitleSmall>
            <SmallText>{item.text}</SmallText>
          </Card>
        ))}
      </Info>
    </Wrapper>
  );
};

interface ItemProps {
  slug: string;
  label: string;
  info?: InfoItem[];
}

export const Item = ({
  slug,
  label,
  info,
  children,
}: PropsWithChildren<ItemProps>) => {
  const router = useRouter();
  const path = router.asPath.slice(0, router.asPath.lastIndexOf('/'));
  const selected = router.query.tab;

  const { setElement, setInfo } = useContext(verticalNavContext);

  useEffect(() => {
    if (slug === selected) {
      setElement(children);
      setInfo(info || []);
    }
  }, [slug, selected, setElement, children, setInfo, info]);

  return (
    <Link key={slug} href={`${path}/${slug}`} passHref>
      <LinkText key={slug} isActive={slug === selected}>
        {label}
      </LinkText>
    </Link>
  );
};

VerticalNav.Item = Item;
export default VerticalNav;
