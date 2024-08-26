import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaSearch, FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
import { HeaderContainer, LeftSection, Logo, CenterSection, Nav, NavList, NavItem, NavLink, RightSection, SearchContainer, SearchInput, IconsContainer, Icon, CartContainer, CartCount, HamburgerMenu } from './styles';
import LogoKinova from '../../assets/logo-kinova-sin-fondo.png';

const Header = ({ toggleCart }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cart = useSelector(state => state.cart.cart);

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <Logo src={LogoKinova} alt="Logo" />
      </LeftSection>
      <CenterSection>
        <Nav>
          <NavList>
            <NavItem><NavLink href="#">Novedades y destacados</NavLink></NavItem>
            <NavItem><NavLink href="#">Hombre</NavLink></NavItem>
            <NavItem><NavLink href="#">Mujer</NavLink></NavItem>
            <NavItem><NavLink href="#">Niño/a</NavLink></NavItem>
            <NavItem><NavLink href="#">Ofertas</NavLink></NavItem>
          </NavList>
        </Nav>
      </CenterSection>
      <RightSection>
        <SearchContainer>
          <FaSearch />
          <SearchInput type="text" placeholder="Buscar" />
        </SearchContainer>
        <IconsContainer>
          <Icon>
            <FaUser />
          </Icon>
          <CartContainer onClick={toggleCart}>
            <FaShoppingCart />
            <CartCount>{getTotalItems()}</CartCount>
          </CartContainer>
          <HamburgerMenu onClick={toggleMenu} data-testid="hamburger-menu">
            <FaBars />
          </HamburgerMenu>
        </IconsContainer>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;