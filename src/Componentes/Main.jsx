import React from 'react';
import { View } from 'react-native';
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

