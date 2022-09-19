import { Wrapper } from './styled';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { REQUEST_DISCVOER } from '../../../../modules/movie/actions';

export const SortBy = () => {
  const [value, setValue] = useState<string>('popularity.desc');
  const dispatch = useDispatch();
  const sortList = [
    { value: 'popularity.desc', name: 'Популярные' },
    { value: 'original_title.desc', name: 'По алфавиту' },
    { value: 'vote_count.desc', name: 'По рейтингу' },
    { value: 'release_date.desc', name: 'По дате выхода' },
  ];
  useEffect(() => {
    dispatch(REQUEST_DISCVOER(value));
    console.log('sort');
  }, [dispatch, value]);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
  return (
    <Wrapper>
      <select onChange={handleChange} name='select' id='select'>
        {
          sortList.map((el, index) => {
            return (
              <option key={index} value={el.value}>{el.name}</option>
            );
          })
        }
      </select>
      <div>{value}</div>
    </Wrapper>
  );
};