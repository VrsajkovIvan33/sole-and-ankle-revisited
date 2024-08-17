/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  // if (!isOpen) {
  //   return null;
  // }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id={"close"} size={24} />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <FlexFiller />
        <DialogNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DialogNav>
        <FlexFiller>
          <DialogFooter>
            <UtiliyLink href="/terms">Terms and Conditions</UtiliyLink>
            <UtiliyLink href="/privacy">Privacy Policy</UtiliyLink>
            <UtiliyLink href="/contact">Contact Us</UtiliyLink>
          </DialogFooter>
        </FlexFiller>
      </Content>
    </Overlay >
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: hsl(220deg 5% 40% / 0.8);
`;

const Content = styled(DialogContent)`
  height: 100%;
  width: 80%;
  margin-left: auto;

  display: flex;
  flex-direction: column;

  background-color: ${COLORS.white};

  padding: 32px;

  position: relative;
`;

const DialogNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const DialogFooter = styled.footer`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
`;

const FlexFiller = styled.div`
  flex: 1;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 24px;
  right: 16px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &: first-of-type {
    color: ${COLORS.secondary};
  }
`;

const UtiliyLink = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.normal};
`;

export default MobileMenu;
