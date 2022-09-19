import styled from 'styled-components';

interface Props {
  correctUrl: boolean;
}

export const Wrapper = styled.nav`
  a {
    text-decoration: none;
    color: #c0b9b9;
  }

  font-weight: 600;
`;
export const MenuOption = styled.div<Props>`
  & {
    margin-top: 20px;
  }

  display: flex;

  fill: ${p => p.correctUrl && '#c70808'};
  color: ${p => p.correctUrl && 'black'};
  border-right: ${p => p.correctUrl && '5px solid red'};


`;

export const OptionImg = styled.div`
  padding-right: 7px;

  svg {
    width: 20px;
    height: 20px;
  }
`;
export const OptionText = styled.div`

`;
