import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {Responsive} from '../../utils/responsive.helpers';

export const Container = styled.View`
  width: 100%
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: ${Responsive(8)}px
`;

export const Measures = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: ${Responsive(40)}px;
`;

export const MeasureText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular}
  font-size: ${Responsive(16)}px;
  color: ${({theme}) => theme.colors.grayScale.dark}
  margin-left: ${Responsive(4)}px
`;

export const BottomText = styled.Text`
font-family: ${({theme}) => theme.fonts.regular}
font-size: ${Responsive(12)}px;
color: ${({theme}) => theme.colors.grayScale.medium}

`;

export const Alignment = styled.View`
  align-items: center;
`;

export const Weight = styled.View`
  flex: 1
  align-items: center;
  justify-content: space-between;
`;

export const Height = styled(Weight)`
  flex: 1
  align-items: center;
`;

export const Moves = styled.View`
  flex: 1
  align-items: flex-end;
`;

export const MoveList = styled.ScrollView`
  flex-direction: row;
`;

export const MovesText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  margin-left: ${Responsive(4)}px;
`;
