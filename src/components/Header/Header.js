import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>

      <SmallScreenMainHeader>
        <Logo />
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={2} />
        </UnstyledButton>
        <UnstyledButton>
          <Icon id="search" strokeWidth={2} />
        </UnstyledButton>
        <UnstyledButton onClick={() => setShowMobileMenu(true)}>
          <Icon id="menu" strokeWidth={2} />
        </UnstyledButton>
      </SmallScreenMainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-grey-300);

  overflow: scroll;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const SmallScreenMainHeader = styled.div`
  display: none;

  padding: 18px 32px;
  height: 72px;
  border-top: 4px solid var(--color-grey-900);
  border-bottom: 1px solid var(--color-grey-300);
  border-top: 4px solid var(--color-grey-900);
  border-bottom: 1px solid var(--color-grey-300);

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 4vw;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1.5rem, 5vw - 1.5rem, 3rem);
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-grey-900);
  font-weight: ${WEIGHTS.medium};

  &: first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
