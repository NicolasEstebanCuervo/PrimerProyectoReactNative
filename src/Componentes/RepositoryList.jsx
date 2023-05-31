import React from 'react';
import { Text, FlatList } from 'react-native';
import repositories from '../Data/repositories.js';
import RepositoryItem from './RepositoryItem.jsx';
import styled from '@emotion/native';

const RepositoryList = () => {
  return (
    <>
      <Titulo>Rate Repository Application</Titulo> {/* Título de la aplicación */}
      <FlatList
        data={repositories} 
        ItemSeparatorComponent={() => <Text></Text>}
        renderItem={({ item: repo }) => (
          <RepositoryItem {...repo} />
        )}
      />
    </>
  );
};

export default RepositoryList;

// Estilos con styled components

const Titulo = styled(Text)`
  margin: 20px auto; /* Márgenes superior e inferior de 20px y centrado horizontal */
  font-size: 25px;
  color: #fff; /* Color del texto */
`;
