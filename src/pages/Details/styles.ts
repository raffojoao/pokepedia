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
  margin-vertical: 16px;
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

export const Attributes = styled.View`
  width: 100%;
  height: 48px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Measures = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const MeasureText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular}
  font-size: 14px;
  color: ${({theme}) => theme.colors.grayScale.dark}
  margin-left: 4px
`;

export const BottomText = styled.Text`
font-family: ${({theme}) => theme.fonts.regular}
font-size: 14px;
color: ${({theme}) => theme.colors.grayScale.medium}
`;

export const Attribute = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;
