import React from 'react';
import {View} from 'react-native';
import {Separator} from '../';
import Images from '../../constants/images';
import {convertToKilograms, convertToMeters} from '../../utils/utils';

import * as S from './styles';
interface AttributesProps {
  weight: any;
  height: any;
  // moves: any[] | undefined;
}

const Attributes: React.FC<AttributesProps> = ({weight, height, moves}) => {
  const getMoveName = (move: string) => {
    const capitalized = move.charAt(0).toUpperCase() + move.slice(1);
    return capitalized.replace('-', ' ');
  };

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
      {/* <Separator />
      <S.Moves>
        <S.Alignment>
          <S.Measures>
            <S.MoveList>
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              {moves.map(move => {
                return (
                  <S.MovesText key={move.move.name}>
                    {getMoveName(move.move.name)}
                  </S.MovesText>
                );
              })}
            </S.MoveList>
          </S.Measures>
          <S.BottomText>Moves</S.BottomText>
        </S.Alignment>
      </S.Moves> */}
    </S.Container>
  );
};

export default Attributes;
