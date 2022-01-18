import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const cardWith = (width - 40) / 2;
import Image from 'react-native-image-progress';

interface PokeCardProps {
  cardColor: string;
}

export const Container = styled.TouchableOpacity<PokeCardProps>`
  width: ${cardWith}px;
  height: ${cardWith}px;
  border-radius: 8px;
  border-width: 1px;
  background-color: ${({theme}) => theme.colors.grayScale.white}
    ${({cardColor}) =>
      cardColor &&
      css`
        border-color: ${({theme}: any) => theme.colors.types[cardColor]};
      `};
  overflow: hidden;
`;

export const Header = styled.View`
  width: 100%;
  height: 16px;
  resize-mode: contain;
  background-color: ${({theme}) => theme.colors.grayScale.white};
  align-items: flex-end;
  justify-content: center;
`;

export const Number = styled.Text<PokeCardProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 10px;
  ${({cardColor}) =>
    cardColor &&
    css`
      color: ${({theme}: any) => theme.colors.types[cardColor]};
    `};
  margin-right: 4px;
`;

export const Footer = styled.View<PokeCardProps>`
  width: 100%;
  height: 24px;
  resize-mode: contain;
  ${({cardColor}) =>
    cardColor &&
    css`
      background-color: ${({theme}: any) => theme.colors.types[cardColor]};
    `};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 12px;
  color: ${({theme}) => theme.colors.grayScale.white};
`;
