import { Wrapper } from './styled';
import { useCallback, useState } from 'react';

export const Auth = () => {
  const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState(state => !state), []);
    return [state, toggle];
  };
  return (
    <Wrapper>
      <div>22222222222</div>
      <div>33333333333333</div>
      <div>444444444444</div>
      <div>555 gdfh 555</div>
    </Wrapper>
  );
};
//Код измени, запушь изменения и попытайся изменить тот же код снова с ветки которая на 1 коммит отстает