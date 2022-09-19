
import { NavLink, useLocation } from 'react-router-dom';
import { MenuOption, OptionImg, OptionText, Wrapper } from './styled';
import { ReactElement } from 'react';

interface Props {
  route: string,
  text: string,
  icon:ReactElement
}


export const MenuItem:React.FC<Props> = ({ text, route, icon }) => {
  const getUrl = useLocation();
  return (
    <Wrapper>
      <NavLink to={route}>
        <MenuOption correctUrl={getUrl.pathname === route}>

          <OptionImg>
            {icon}
          </OptionImg>
          <OptionText>{text}</OptionText>

        </MenuOption>
      </NavLink>
    </Wrapper>
  );
};