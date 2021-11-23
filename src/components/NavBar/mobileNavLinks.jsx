import styled from 'styled-components'
import React from "react";
import { MenuToggle } from './menuToggle';
import { useState } from 'react';
import { Login } from './login';

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const LinkWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
    background-color: #fff;
    width: 100%;
    flex-direction: column;
    position: fixed;
    top: 65px;
    left: 0;

`;

const LinkItem = styled.div`
    width: 100%;
    padding: 0 1.1em;
    color: #222;
    font-weight: 500;
    font-height: 14px;
    font-size: 20px;
    display: flex;
    border-top: 2px solid transparent;
    margin-bottom: 15px;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

const KevinSpacer = styled.div`
    height: 1.7em;
`

export function MobileNavLinks(props) {
    const [isOpen, setOpen] = useState(false);

    return <NavLinksContainer>
        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        {isOpen &&<LinkWrapper>
            <LinkItem>
                <Link href ='#'>About</Link>
            </LinkItem>
            <LinkItem>
                <Link href ='#'>Explore</Link>
            </LinkItem>
            <LinkItem>
                <Link href ='#'>Discover</Link>
            </LinkItem>
            <LinkItem>
                <Link href ='#'>Contact</Link>
            </LinkItem>
            <KevinSpacer />
            <Login />
        </LinkWrapper>}
    </NavLinksContainer>
}