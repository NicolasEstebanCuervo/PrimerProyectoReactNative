import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styled from '@emotion/native';
import { Link, useLocation } from 'react-router-native';
import Constants from 'expo-constants';

const AppBar = () => {
  const location = useLocation();

  return (
    <AppBarContainer marginTop={Constants.statusBarHeight} padding={Constants.statusBarHeight}>
      <ScrollView horizontal>
        <Link to="/" component={Container}>
          <LinkNav active={location.pathname === '/'}>Repositorios</LinkNav>
        </Link>
        <Link to="/Signin" component={Container}>
          <LinkNav active={location.pathname === '/Signin'}>Iniciar Sesion</LinkNav>
        </Link>
        <Link to="/" component={Container}>
          <LinkNav active={location.pathname === '/'}>Registrarte</LinkNav>
        </Link>
        <Link to="/Signin" component={Container}>
          <LinkNav active={location.pathname === '/Signin'}>Acerca de</LinkNav>
        </Link>
        <Link to="/" component={Container}>
          <LinkNav active={location.pathname === '/'}>Configuraciones</LinkNav>
        </Link>
      </ScrollView>
    </AppBarContainer>
  );
};

export default AppBar;


const AppBarContainer = styled.View`
  margin-top: ${({ marginTop }) => marginTop}px;
  background: #0c1a44;
  padding-top: ${({ padding }) => padding + 10}px;
`;

const Container = styled.TouchableOpacity`
  margin: 2px;
`;

const LinkNav = styled.Text`
  margin: 5px;
  font-size: 15px;
  color: ${({ active }) => (active ? '#99A6D4' : '#fff')};
  font-weight: bold;
`;