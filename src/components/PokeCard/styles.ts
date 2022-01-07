import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const cardWith = (width - 40) / 2;

export const Container = styled.TouchableOpacity`
  width: ${cardWith}px;
  height: ${cardWith}px;
  border-radius: 8px;
  border-width: 1px;
  background-color: ${({theme}) => theme.colors.grayScale.white}
  border-color: ${({theme}) => theme.colors.grayScale.dark};
  overflow: hidden;`;

export const Header = styled.View`
  width: 100%;
  height: 16px;
  resize-mode: contain;
  background-color: ${({theme}) => theme.colors.grayScale.white};
  align-items: flex-end;
  justify-content: center;
`;

export const Number = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 10px;
  color: ${({theme}) => theme.colors.grayScale.dark};
  margin-right: 4px;
`;

export const SpriteContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.grayScale.white};
`;

export const Sprite = styled.Image`
  flex: 1;
  resize-mode: contain;
  background-color: ${({theme}) => theme.colors.grayScale.white};
`;

export const Footer = styled.View`
  width: 100%;
  height: 24px;
  resize-mode: contain;
  background-color: ${({theme}) => theme.colors.grayScale.dark};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 12px;
  color: ${({theme}) => theme.colors.grayScale.white};
`;
