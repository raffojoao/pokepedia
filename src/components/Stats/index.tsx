import React from 'react';

import * as S from './styles';

interface StatsProps {
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

  const values = Array.from(stats, item => parseInt(item.base_stat));

  const maxValue = values.reduce((a, b) => Math.max(a, b));

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
                style={{width: `${(stat.base_stat * 100) / maxValue}%`}}
              />
            </S.StatBarWrapper>
          </S.Stat>
        );
      })}
    </S.Container>
  );
};

export default Stats;
