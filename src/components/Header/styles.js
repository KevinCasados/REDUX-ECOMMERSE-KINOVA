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
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #ffff;
  font-weight: bold;

  &:hover {
    color: #cbff0f;
    border-bottom: 1px solid #cbff0f;
    transition: all ease 0.2s;
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
  margin-right: 20px;
  position: relative;

  & svg {
    position: absolute;
    left: 10px;
    pointer-events: none;
  }
`;

export const SearchInput = styled.input`
  padding: 5px 5px 5px 30px;
  border: 1px solid #ddd;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;

  &:focus {
    width: 160px;
    outline: none;
  }

  &:not(:focus) {
    width: 140px;
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
`;

export const CartContainer = styled.div`
  position: relative;
  margin-left: 20px;
  font-size: 1.5em;
  cursor: pointer;

  & svg {
    color: #ffff;
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
`;