import React from 'react';
import {
  StyledView,
  StyledTitle,
  ImageCar,
  StyledText,
  StyledViewText,
} from './carCard.styled';
import { ICar } from '../../types';
import { TouchableOpacity } from 'react-native';

type ItemProps = {
  item: ICar;
  navigation: any;
};

export default function CarCard({ item, navigation }: ItemProps): JSX.Element {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <StyledView>
        <ImageCar source={item.img} />
        <StyledTitle>{`${item.brand} ${item.model}`}</StyledTitle>
        <StyledText>{item.description}</StyledText>
        <StyledViewText>
          <StyledText>{item.price}</StyledText>
          <StyledText>{item.year}</StyledText>
        </StyledViewText>
      </StyledView>
    </TouchableOpacity>
  );
}
