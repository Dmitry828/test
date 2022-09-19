import { Wrapper } from "./styled";
import { Search } from './components/Search/Search';

import React from 'react';
import { Genres } from './components/Genres/Genres';
import { SortBy } from './components/SortBy/SortBy';


const RightSidebar = () => {
  return (
    <Wrapper>
      <Search/>
      <Genres/>
      {/*<SortBy/>*/}
    </Wrapper>
  );
};
export default React.memo(RightSidebar);