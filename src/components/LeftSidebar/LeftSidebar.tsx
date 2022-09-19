import { Wrapper } from './styled';

import { User } from './components/User/User';
import { Menu } from './components/Menu/Menu';
import { ReactComponent as HomeIcon } from '../../assets/images/home.svg';
import { ReactComponent as BuildingIcon } from '../../assets/images/building.svg';
import { ReactComponent as StarIcon } from '../../assets/images/star.svg';
import { ReactComponent as AlarmIcon } from '../../assets/images/alarm.svg';
import { ReactComponent as FriendsIcon } from '../../assets/images/friends.svg';
import { ReactComponent as PartiesIcon } from '../../assets/images/parties.svg';
import { ReactComponent as MediaIcon } from '../../assets/images/media.svg';
import { ReactComponent as SettingsIcon } from '../../assets/images/settings.svg';
import { IMenu } from './types';
import React, { useCallback, useState } from 'react';


export const LeftSidebar: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const handleAuth = useCallback(() => {
    setIsAuth(!isAuth);
  }, [isAuth]);
  const titleArr = ['MENU', 'SOCIAL', 'GENERAL'];
  const mainMenu: IMenu[] = [
    { text: 'Home', route: '/', id: 1, icon: <HomeIcon /> },
    { text: 'Community', route: '/community', id: 2, icon: <BuildingIcon /> },
    { text: 'Favorites', route: '/favorites', id: 3, icon: <StarIcon/> },
    { text: 'Coming soon', route: '/coming-soon', id: 4, icon: <AlarmIcon /> },
  ];
  const socialMenu: IMenu[] = [
    { text: 'Friends', route: '/friends', id: 1, icon: <FriendsIcon /> },
    { text: 'Parties', route: '/parties', id: 2, icon: <PartiesIcon /> },
    { text: 'Media', route: '/media', id: 3, icon: <MediaIcon /> },
  ];
  const generalMenu: IMenu[] = [
    { text: 'Settings', route: '/setting', id: 1, icon: <SettingsIcon /> },
    { text: 'Log Out', route: '/', id: 2, icon: <BuildingIcon /> },
  ];
  if (!isAuth) {
    return (
      <Wrapper>
        <div onClick={handleAuth}>Войти</div>
        <User isAuth={isAuth} />
        <Menu arr={mainMenu} title={titleArr[0]} />
        <Menu arr={socialMenu} title={titleArr[1]} />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div onClick={handleAuth}>Выйтиии</div>
      <User isAuth={isAuth} />
      <Menu arr={mainMenu} title={titleArr[0]} />
      <Menu arr={socialMenu} title={titleArr[1]} />
      <Menu arr={generalMenu} title={titleArr[2]} />
    </Wrapper>
  );
};
