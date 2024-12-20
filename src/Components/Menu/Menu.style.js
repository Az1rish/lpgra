import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryDark};
  transform: ${({ open }) => open ? 'translate(0)' : 'translate(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 1.5rem;
  padding-top: 80px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  @media (max-height: 450px) {
    padding-top: 60px;
  }

  a {
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.2rem;
      text-align: center;
    }

    @media (max-height: 450px) {
      font-size: 1rem;
      padding: 5px;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  span {
    display: block;
  }

`;