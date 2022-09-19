import styled from 'styled-components';
import exp from 'constants';

export const Wrapper = styled.form``;
export const InputWrapper = styled.div`

  position: relative;
  max-width: 250px;

  svg {
    width: 20px;
    position: absolute;
    left: 12px;
    top: 10px;
    fill: #9c9c9c;
  }
`;

export const Input = styled.input`
  color: #9c9c9c;
  height: 40px;
  width: 80%;
  border-radius: 20px;
  border: 1px solid #eaeaea;
  padding-left: 42px;
  padding-bottom: 3px;
  outline: none;

  &::placeholder {
    color: #9c9c9c;
  }
`;