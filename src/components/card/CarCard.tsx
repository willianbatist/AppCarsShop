import React from 'react';
import {
  StyledView,
  StyledTitle,
  ImageCar,
  StyledText,
  StyledViewText,
} from './carCard.styled';
import { ICar } from '../../types';

type ItemProps = {
  item: ICar;
};

export default function CarCard({ item }: ItemProps): JSX.Element {
  return (
    <StyledView>
      <ImageCar source={item.img} />
      <StyledTitle>{`${item.brand} ${item.model}`}</StyledTitle>
      <StyledText>{item.description}</StyledText>
      <StyledViewText>
        <StyledText>{item.price}</StyledText>
        <StyledText>{item.year}</StyledText>
      </StyledViewText>
    </StyledView>
  );
}
