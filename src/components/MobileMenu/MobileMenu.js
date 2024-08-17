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
        <button onClick={onDismiss}>Dismiss menu</button>
        <FlexFiller />
        <DialogNav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </DialogNav>
        <FlexFiller>
          <DialogFooter>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
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
`;

const DialogNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const DialogFooter = styled.footer`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const FlexFiller = styled.div`
  flex: 1;
`;

export default MobileMenu;
