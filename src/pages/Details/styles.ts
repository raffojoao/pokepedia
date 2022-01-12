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
  padding-top: 56px;
`;

export const TypeContainer = styled.View`
  flex-direction: row;
`;
