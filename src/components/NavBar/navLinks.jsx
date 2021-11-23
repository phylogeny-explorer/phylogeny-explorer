import styled from 'styled-components'
import React from "react";

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
`;

const LinkItem = styled.div`
    height: 100%;
    padding: 0 1.1em;
    color: #222;
    font-weight: 500;
    font-height: 14px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 150ms ease-in-out;

    &:hover {
        border-top: 2px solid #2ecc71;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

export function NavLinks(props) {
    return <NavLinksContainer>
        <LinkWrapper>
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
        </LinkWrapper>
    </NavLinksContainer>
}