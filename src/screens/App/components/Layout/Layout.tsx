import { A, Content, Wrapper } from './styled';
import { Header } from './components/Header/Header';
import { LeftSidebar } from '../../../../components/LeftSidebar/LeftSidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import RightSidebar from '../../../../components/RightSidebar/RightSidebar';


const Layout = () => {
  return (
    <Wrapper>

      <Header />

      <Content>
        <LeftSidebar />
        <A>
          <Outlet />
        </A>
        <RightSidebar />
      </Content>

    </Wrapper>
  );
};
export default React.memo(Layout);