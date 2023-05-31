import React from 'react';
import { View, Text } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import styled from '@emotion/native';
import RepositoryList from './RepositoryList';


const Main = () => {
  return (
    <Contenedor>
      <RepositoryList />
    </Contenedor>
  );
};

export default Main;

const Contenedor = styled(View)`
  background: #09245e;
  flex: 1;
`;
