import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #000;
  border-bottom: 1px solid #000;
  box-sizing: border-box;
  width: 100%;
  top: 0;
  z-index: 10;
  position: fixed; 
  left: 0; 

  @media (min-width: 1024px) {
    padding: 10px 70px;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
`;

export const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

export const CenterSection = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;

  @media (max-width: 1370px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin: 0 15px;

  &:hover {
    transform: scale(105%);
    transition: all ease 0.5s;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #ffff;
  font-weight: bold;

  &:hover {
    border-bottom: 5px solid #C70B1D;
    transition: all ease;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & svg {
    position: absolute;
    left: 17px;
    pointer-events: none;
    color: #fff;
    opacity: 0.5;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  padding: 5px 5px 5px 45px;
  border: 1px solid transparent;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  background-color: #313036;
  font-size: 1rem;
  transition: 250ms ease;

  &:focus {
    width: 160px;
    outline: none;
    transition: 250ms ease;
    color: #fff;
  }

  &:not(:focus) {
    width: 140px;
    transition: 250ms ease;
  }

  &:hover {
    border: 3px solid #6F6F71;
    border-radius: 20px;
    transition: all ease 0.1s;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  margin-left: 20px;
  font-size: 1.5em;
  cursor: pointer;

  & svg {
    color: #ffff;
  }

  &:hover {
    transform: scale(108%);
    transition: all ease 0.2s;
  }
`;

export const CartContainer = styled.div`
  position: relative;
  margin-left: 20px;
  font-size: 1.5em;
  cursor: pointer;

  & svg {
    color: #ffff;
  }

  &:hover {
    transform: scale(108%);
    transition: all ease 0.2s;
  }
`;

export const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #cbff0f;
  color: #000;
  border-radius: 50%;
  width: 20px; 
  height: 20px; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5em;
  font-weight: 600;
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5em;
  margin-left: 20px;
  
  & svg {
    color: #ffff;
  }

  @media (max-width: 1370px) {
    display: block;
  }

  &:hover {
    transform: scale(105%);
    transition: all ease 0.5s;
  }
`;