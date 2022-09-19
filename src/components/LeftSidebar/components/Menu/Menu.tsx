import { TitleMenu, Wrapper } from './styled';
import { MenuItem } from './components/MenuItem/MenuItem';
import { IMenu } from '../../types';

interface Props {
  arr:IMenu[],
  title:string
}

export const Menu:React.FC<Props> = ({arr, title}) => {
  return (
    <Wrapper>
      <TitleMenu>{title}</TitleMenu>
      {arr?.map((item:IMenu) => {
        return (
          <MenuItem text={item.text} route={item.route} icon={item.icon} key={item.id} />
        );
      })}
    </Wrapper>
  )
    ;
};