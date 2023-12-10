import { TouchableOpacity, Image, ImageProps, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../../constants';

type ScreenHeaderBtnProps = {
  iconUrl: ImageProps['source'];
  handlePress: () => void;
};

const ScreenHeaderBtn = ({ iconUrl, handlePress }: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.btnContainer}>
      <Image
        source={iconUrl}
        alt="icon"
        resizeMode="cover"
        style={{ height: '100%', width: '100%', borderRadius: 20 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   btnImg: (dimension: string) => ({
  //     width: dimension,
  //     height: dimension,
  //     borderRadius: SIZES.small / 1.25,
  //   }),
});

export default ScreenHeaderBtn;
