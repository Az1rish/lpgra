import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: fixed;
  top: 4%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: inherit;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
  p {
    margin-top: 5px;
  }
  span {
    color: #E4F4FB;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;