import ReactDOM from 'react-dom';
import {  Wrapper } from './styled';
import { FC, ReactNode } from 'react';


interface props {
  children: ReactNode,
  isFavorite: boolean
}

export const Notification: FC<props> = ({ children, isFavorite }) => {


  return ReactDOM.createPortal(
    <Wrapper>
        {children}
    </Wrapper>,
    document.body,
  );
};