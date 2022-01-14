import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  width: 100%
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 8px
`;

export const Measures = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 40px;
`;

export const MeasureText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular}
  font-size: 16px;
  color: ${({theme}) => theme.colors.grayScale.dark}
  margin-left: 4px
`;

export const BottomText = styled.Text`
font-family: ${({theme}) => theme.fonts.regular}
font-size: 12px;
color: ${({theme}) => theme.colors.grayScale.medium}

`;

export const Alignment = styled.View`
  align-items: center;
`;

export const Weight = styled.View`
  flex: 4
  align-items: flex-start;
  justify-content: space-between;
`;

export const Height = styled(Weight)`
  flex: 4
  align-items: center;
`;

export const Moves = styled.View`
  flex: 5
  align-items: flex-end;
`;

export const MovesText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
`;
