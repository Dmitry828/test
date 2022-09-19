import { Input, InputWrapper, Wrapper } from './styled';
import { FC, useState } from 'react';
import { ReactComponent as MagnifyingIcon } from '../../../../assets/images/magnifying-glass.svg';
import { useDispatch, useSelector } from 'react-redux';
import { REQUEST_SEARCH } from '../../../../modules/search/actions';
import { useNavigate } from 'react-router-dom';
import { clearSearchMovie } from '../../../../modules/search/reducer';
import { getSearchMovie } from '../../../../modules/search/selectors';

export const Search: FC = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchMovies = useSelector(getSearchMovie) || {};
  const handleSeacrh = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      dispatch(REQUEST_SEARCH(value));
      dispatch(clearSearchMovie());
      navigate('/searching');
      setValue('');
    }
  };


  return (
    <Wrapper onSubmit={handleSubmit}>
      <InputWrapper>
        <MagnifyingIcon />
        <Input type='text' placeholder='Поиск' value={value} onChange={handleSeacrh} />
      </InputWrapper>


    </Wrapper>
  );
};

