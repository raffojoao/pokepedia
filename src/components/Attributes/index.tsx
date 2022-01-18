import React from 'react';
import {Separator} from '../';
import Images from '../../constants/images';
import {convertToKilograms, convertToMeters} from '../../utils/utils';

import * as S from './styles';
interface AttributesProps {
  weight: any;
  height: any;
}

const Attributes: React.FC<AttributesProps> = ({weight, height}) => {
  return (
    <S.Container>
      <S.Weight>
        <S.Alignment>
          <S.Measures>
            <Images.scale />
            <S.MeasureText>{convertToKilograms(weight)}</S.MeasureText>
          </S.Measures>
          <S.BottomText>Weight</S.BottomText>
        </S.Alignment>
      </S.Weight>
      <Separator />
      <S.Height>
        <S.Alignment>
          <S.Measures>
            <Images.ruler />
            <S.MeasureText>{convertToMeters(height)}</S.MeasureText>
          </S.Measures>
          <S.BottomText>Height</S.BottomText>
        </S.Alignment>
      </S.Height>
    </S.Container>
  );
};

export default Attributes;
