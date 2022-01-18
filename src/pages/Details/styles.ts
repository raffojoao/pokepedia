import styled, {css} from 'styled-components/native';
import {Responsive} from '../../utils/responsive.helpers';
export interface DetailsProps {
  pageColor: string;
}

export const Container = styled.SafeAreaView<DetailsProps>`
  flex: 1;
  padding-horizontal: ${Responsive(16)}px;
  padding-bottom: ${Responsive(16)}px;
  ${({pageColor}) =>
    pageColor &&
    css`
      background-color: ${({theme}: any) => theme.colors.types[pageColor]};
    `};
`;

export const Wrapper = styled.ScrollView`
  flex: 1;
  padding-horizontal: ${Responsive(16)}px;
`;

export const ImageContainer = styled.View`
  align-items: flex-end;
`;

export const DataContainer = styled.View`
  flex: 1
  border-radius: ${Responsive(8)}px;
  background-color: ${({theme}) => theme.colors.grayScale.white};
  align-items: center;
  justify-content: flex-start;
  padding: ${Responsive(56)}px ${Responsive(20)}px ${Responsive(
  28,
)}px ${Responsive(20)}px;
`;

export const TypeContainer = styled.View`
  flex-direction: row;
`;

export const TitleContainer = styled.View`
  margin-vertical: ${Responsive(8)}px;
`;

export const Title = styled.Text<DetailsProps>`
font-family: ${({theme}) => theme.fonts.bold}
font-size: ${Responsive(20)}px;
${({pageColor}) =>
  pageColor &&
  css`
    color: ${({theme}: any) => theme.colors.types[pageColor]};
  `};
`;

export const DescriptionContainer = styled.View`
  width: 100%
  align-items: flex-start;
  margin-vertical: ${Responsive(8)}px;
  color: ${({theme}) => theme.colors.grayScale.dark};
`;

export const Description = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular}
  font-size: ${Responsive(16)}px
  text-align: justify
`;
