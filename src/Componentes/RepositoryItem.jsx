import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from '@emotion/native';

const parseThousands = value => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k` // Formatea los números mayores o iguales a 1000 como "xk" (por ejemplo, 1.5k)
    : String(value); // Convierte los números menores a 1000 en cadenas de texto
};

const RepositoryItem = (props) => {
  return (
    <Contenedorinfo key={props.id}>
      <ContenedorImagenTextos>
        <Imagen source={{ uri: props.ownerAvatarUrl }} /> {/* Imagen con la URL proporcionada */}
        <TextosImagen>
          <Titulo>Full Name: {props.fullName}</Titulo> {/* Nombre completo */}
          <DescripcionCard>Description: {props.descripcion}</DescripcionCard> {/* Descripción */}
          <TextoLenguaje>{props.language}</TextoLenguaje> {/* Lenguaje */}
        </TextosImagen>
      </ContenedorImagenTextos>
      <ContenedorExtra>
        <ContenedorExtraIndividual>
          <TituloExtra>Stars</TituloExtra>
          <TituloExtra2>{parseThousands(props.stargazersCount)}</TituloExtra2> {/* Número de estrellas */}
        </ContenedorExtraIndividual>

        <ContenedorExtraIndividual>
          <TituloExtra>Stars</TituloExtra>
          <TituloExtra2>{parseThousands(props.stargazersCount)}</TituloExtra2> {/* Número de estrellas (repetido en el código original) */}
        </ContenedorExtraIndividual>

        <ContenedorExtraIndividual>
          <TituloExtra>Review</TituloExtra>
          <TituloExtra2>{parseThousands(props.ratingAverage)}</TituloExtra2> {/* Promedio de calificaciones */}
        </ContenedorExtraIndividual>

        <ContenedorExtraIndividual>
          <TituloExtra>ForksCount</TituloExtra>
          <TituloExtra2>{parseThousands(props.forksCount)}</TituloExtra2> {/* Número de forks */}
        </ContenedorExtraIndividual>
      </ContenedorExtra>
    </Contenedorinfo>
  );
};

export default RepositoryItem;

// Estilos con styled components

const Contenedorinfo = styled(View)`
  margin: 10px;
  padding: 10px 0;
  align-items: center;
  background: #435099;
`;

const ContenedorImagenTextos = styled(View)`
  flex-direction: row;
`;

const TextosImagen = styled(View)`
  padding: 10px;
`;

const Imagen = styled(Image)`
  width: 70px;
  height: 70px;
`;

const TextoLenguaje = styled(Text)`
  background: #4C6FF2;
  font-size: 10px;
  align-self: flex-start;
  padding: 4px;
  color: #fff;
`;

const Titulo = styled(Text)`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 15px;
  color: #fff;
`;

const DescripcionCard = styled(Text)`
  font-size: 10px;
  max-width: 80%;
  color: #EBEFFF;
  margin-bottom: 5px;
`;

const ContenedorExtra = styled(View)`
  flex-direction: row;
  gap: 10px;
`;

const TituloExtra = styled(Text)`
  font-size: 15px;
  font-weight: bold;
  color: #EBEFFF;
  margin: 0 10px;
`;

const TituloExtra2 = styled(Text)`
  font-size: 15px;
`;

const ContenedorExtraIndividual = styled(View)`
  justify-content: center;
  align-items: center;
`;
