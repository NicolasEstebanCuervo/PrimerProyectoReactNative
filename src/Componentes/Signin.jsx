import React from 'react';
import { Text, FlatList, View } from 'react-native';
import repositories from '../Data/repositories.js';
import RepositoryItem from './RepositoryItem.jsx';
import styled from '@emotion/native';

const RepositoryList = () => {
  return (
    <ContenedorSignin>  
      <Titulo>Rate Repository Application</Titulo>
      <FlatList
        data={repositories}
        ItemSeparatorComponent={() => <Text></Text>}
        renderItem={({ item: repo }) => (
          <RepositoryItem {...repo} />
        )}
      />
    </ContenedorSignin>
  );
};

export default RepositoryList;

const ContenedorSignin = styled(View)`
  background: #09245e;
`

const Titulo = styled(Text)`
  margin: 20px auto;
  font-size: 25px;
  color: #fff;
`;
