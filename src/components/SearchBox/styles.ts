import styled from 'styled-components/native';
import {Responsive} from '../../utils/responsive.helpers';

export const Container = styled.View`
  width: 100%;
  padding-horizontal: ${Responsive(16)}px;
  margin-bottom: ${Responsive(8)}px;
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
`;

export const SearchBox = styled.View`
  width: 100%;
  max-height: ${Responsive(36)}px
  margin-top: ${Responsive(8)}px;
  padding-horizontal: ${Responsive(8)}px;
  background-color: ${({theme}) => theme.colors.grayScale.white};
  border-radius: ${Responsive(8)}px;
  border-width: ${Responsive(1)}px;
  border-color: ${({theme}) => theme.colors.grayScale.light};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const SearchText = styled.TextInput`
  font-family: ${({theme}) => theme.fonts.regular}
  font-size: ${Responsive(16)}px;
  line-height: ${Responsive(20)}px;
  color: ${({theme}) => theme.colors.grayScale.medium}
  width: 80%;
  height: ${Responsive(32)}px
  padding: 0;
`;

export const SortBy = styled.TouchableOpacity``;
