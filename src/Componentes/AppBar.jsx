import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styled from '@emotion/native';
import { Link, useLocation } from 'react-router-native';
import Constants from 'expo-constants';

const AppBar = () => {
  const location = useLocation(); // Obtiene la ubicación actual de la ruta

  return (
    <AppBarContainer marginTop={Constants.statusBarHeight} padding={Constants.statusBarHeight}>
      <ScrollView horizontal> {/* ScrollView permite desplazarse horizontalmente */}
        <Link to="/" component={Container}> {/* Enlace a la ruta "/" */}
          <LinkNav active={location.pathname === '/'}>Repositorios</LinkNav> {/* Texto del enlace, se activa si la ubicación coincide con "/" */}
        </Link>
        <Link to="/Signin" component={Container}> {/* Enlace a la ruta "/Signin" */}
          <LinkNav active={location.pathname === '/Signin'}>Iniciar Sesion</LinkNav> {/* Texto del enlace, se activa si la ubicación coincide con "/Signin" */}
        </Link>
        <Link to="/" component={Container}> {/* Enlace a la ruta "/" */}
          <LinkNav active={location.pathname === '/'}>Registrarte</LinkNav> {/* Texto del enlace, se activa si la ubicación coincide con "/" */}
        </Link>
        <Link to="/Signin" component={Container}> {/* Enlace a la ruta "/Signin" */}
          <LinkNav active={location.pathname === '/Signin'}>Acerca de</LinkNav> {/* Texto del enlace, se activa si la ubicación coincide con "/Signin" */}
        </Link>
        <Link to="/" component={Container}> {/* Enlace a la ruta "/" */}
          <LinkNav active={location.pathname === '/'}>Configuraciones</LinkNav> {/* Texto del enlace, se activa si la ubicación coincide con "/" */}
        </Link>
      </ScrollView>
    </AppBarContainer>
  );
};

export default AppBar;

// Estilos con styled components

const AppBarContainer = styled.View`
  margin-top: ${({ marginTop }) => marginTop}px; /* Margen superior basado en el valor de marginTop */
  background: #0c1a44;
  padding-top: ${({ padding }) => padding + 10}px; /* Padding superior basado en el valor de padding */
`;

const Container = styled.TouchableOpacity`
  margin: 2px;
`;

const LinkNav = styled.Text`
  margin: 5px;
  font-size: 15px;
  color: ${({ active }) => (active ? '#99A6D4' : '#fff')}; /* Cambia el color del texto en función de si el enlace está activo o no */
  font-weight: bold;
`;
