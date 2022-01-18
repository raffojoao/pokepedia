import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Images from '../../constants/images';

interface PaginationProps {
  canGoLeft: boolean;
  canGoRight: boolean;
  onPressLeftButton: () => void;
  onPressRightButton: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  canGoLeft,
  canGoRight,
  onPressLeftButton,
  onPressRightButton,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        width: '100%',
        position: 'absolute',
        top: -32,
      }}>
      {canGoLeft ? (
        <TouchableOpacity onPress={onPressLeftButton}>
          <Images.chevronLeft />
        </TouchableOpacity>
      ) : (
        <View style={{width: 8, height: 16}} />
      )}

      {canGoRight ? (
        <TouchableOpacity onPress={onPressRightButton}>
          <Images.chevronRight />
        </TouchableOpacity>
      ) : (
        <View style={{width: 8, height: 16}} />
      )}
    </View>
  );
};

export default Pagination;
