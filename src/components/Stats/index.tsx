import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Separator} from '..';

import * as S from './styles';

interface StatsProps {
  hp: string;
  atk: string;
  def: string;
  satk: string;
  sdef: string;
  spd: string;
  type: string;
  stats: any[];
}

const Stats: React.FC<StatsProps> = ({type, stats}) => {
  const baseStats = {
    attack: 'ATK',
    defense: 'DEF',
    hp: 'HP',
    'special-attack': 'SATK',
    'special-defense': 'SDEF',
    speed: 'SPD',
  };

  return (
    <S.Container>
      {stats.map(stat => {
        let zeros = '';
        for (var i = 0; i < 3 - String(stat.base_stat).length; i++) {
          zeros += '0';
        }
        const pokeStat = `${zeros + stat.base_stat}`;
        return (
          <S.Stat key={stat.stat.name}>
            <S.StatNameAlign>
              <S.StatsName color={type}>
                {baseStats[stat.stat.name]}
              </S.StatsName>
            </S.StatNameAlign>

            <S.StatsValue>{pokeStat}</S.StatsValue>
            <S.StatBarWrapper color={type}>
              <S.StatBar
                color={type}
                style={{width: `${(stat.base_stat * 100) / 255}%`}}
              />
            </S.StatBarWrapper>
          </S.Stat>
        );
      })}
    </S.Container>
  );
};

export default Stats;
