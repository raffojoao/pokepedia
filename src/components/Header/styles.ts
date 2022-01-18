import styled from 'styled-components/native';
import {Responsive} from '../../utils/responsive.helpers';

export const Container = styled.View`
  width: 100%;
  padding-horizontal: ${Responsive(16)}px;
  margin-bottom: ${Responsive(8)}px;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleLeft = styled.View`
  flex-direction: row;
`;

export const TitleText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${Responsive(24)}px;
  margin-left: ${Responsive(16)}px;
  color: ${({theme}) => theme.colors.grayScale.white};
`;
