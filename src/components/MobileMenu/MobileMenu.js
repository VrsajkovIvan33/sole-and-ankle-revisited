/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay>
      <DialogContent>
        <DialogLayout>
          <button onClick={onDismiss}>Dismiss menu</button>
          <DialogNav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </DialogNav>
          <DialogFooter>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </DialogFooter>
        </DialogLayout>
      </DialogContent>
    </DialogOverlay >
  );
};

const DialogLayout = styled.div`
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const DialogNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const DialogFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;

export default MobileMenu;
