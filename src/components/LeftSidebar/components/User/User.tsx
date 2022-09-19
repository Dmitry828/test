import { UserAvatar, UserName, Wrapper, WrapperUser } from './styled';
import { ReactComponent as AvatarIcon } from '../../../../assets/images/avatar.svg';

interface UserProps {
  isAuth: boolean;
}

export const User: React.FC<UserProps> = ({ isAuth }) => {

  if (!isAuth) {
    return (
      <Wrapper>
        <WrapperUser>

          <UserName>
            Войти
          </UserName>

        </WrapperUser>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <WrapperUser>

        <UserAvatar>
          <AvatarIcon />
        </UserAvatar>

        <UserName>
          Exxmon
        </UserName>

      </WrapperUser>
    </Wrapper>
  );
};