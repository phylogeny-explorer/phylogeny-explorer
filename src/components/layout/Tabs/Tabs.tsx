import React from 'react';
import { useRouter } from 'next/router';
import { Wrapper, Nav, Tab } from './Tabs.styled';

interface TabItem {
  slug: string;
  label: string;
  element: JSX.Element;
}

interface Props {
  tabs: TabItem[];
}

const Tabs = ({ tabs }: Props) => {
  const router = useRouter();
  const selectedTab = router.query.tab;
  const element = tabs.find(tab => tab.slug === selectedTab)?.element;
  return (
    <Wrapper>
      <Nav>
        {tabs.map(tab => (
          <Tab
            key={tab.slug}
            isActive={tab.slug === selectedTab}
            onSelect={() => router.push(tab.slug)}
          >
            {tab.label}
          </Tab>
        ))}
      </Nav>
      {element}
    </Wrapper>
  );
};

export default Tabs;
