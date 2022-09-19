import { useDispatch, useSelector } from 'react-redux';
import { bookAdded } from '../../modules/auth/reducer';
import * as messagesSelectors from '../../modules/auth/selectors';
import { useCallback, useState } from 'react';
import { getAllBooks, getChannelBooks } from '../../modules/auth/selectors';


export const CommunityPage = () => {
  const dispatch = useDispatch();
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const a = useSelector(getAllBooks);
  const b = useSelector(messagesSelectors.getMyBooks);

  const [name, setName] = useState<string>('');
  const handleSetState1 = () => {
    setState1(prevState => prevState + 1);
    console.log('state1');
  };
  const handleCallback = useCallback(() => {
    setState1(prevState => prevState + 1);
    console.log('state1');
  }, [])
  const handleSetState2 = () => {
    setState2(prevState => prevState + 1);
    console.log('state2');
  };
  const handleCLick = () => {
    console.log('click');
    dispatch(bookAdded(name));
    setName('');
  };
  return (
    <div>
      <div>BOOKS</div>
      <form onSubmit={handleCLick}>
        <input type='text' placeholder='Введи книгу' value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      {a.map(el => {
        return <div key={el.id}>{el.title}</div>;
      })}
      <button onClick={handleCLick}>FUNC</button>
      <button onClick={handleSetState1}>handleSetState1</button>
      <button onClick={handleCallback}>handleCallback1</button>
      <button onClick={handleSetState2}>handleSetState2</button>
      <div>state1:{state1}</div>
      <div>state2:{state2}</div>
    </div>
  );
};