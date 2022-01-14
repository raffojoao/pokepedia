import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';

export interface DetailsProps {
  pageColor: string;
}

export const Container = styled.SafeAreaView<DetailsProps>`
  flex: 1;
  padding-horizontal: 16px;
  ${({pageColor}) =>
    pageColor &&
    css`
      background-color: ${({theme}: any) => theme.colors.types[pageColor]};
    `};
`;

export const Wrapper = styled.View`
  flex: 1;
  padding-horizontal: 16px;
  justify-content: space-between;
`;

export const ImageContainer = styled.View`
  align-items: flex-end;
  margin-bottom: 8px;
`;

export const DataContainer = styled.View`
  flex: 1
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.grayScale.white};
  align-items: center;
  justify-content: flex-start;
  padding: 56px 20px 28px 20px;
`;

export const TypeContainer = styled.View`
  flex-direction: row;
`;

export const TitleContainer = styled.View`
  margin-vertical: 8px;
`;

export const Title = styled.Text<DetailsProps>`
font-family: ${({theme}) => theme.fonts.bold}
font-size: 20px;
${({pageColor}) =>
  pageColor &&
  css`
    color: ${({theme}: any) => theme.colors.types[pageColor]};
  `};
`;

export const DescriptionContainer = styled.View`
  width: 100%
  align-items: flex-start;
  margin-vertical: 8px;
  color: ${({theme}) => theme.colors.grayScale.dark};
`;

export const Description = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular}
  font-size: 16px
  text-align: justify
`;
