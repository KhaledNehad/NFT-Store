import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

import nft08 from '../assets/images/nft08.jpg';
import nft06 from '../assets/images/nft06.jpg';
import nft04 from '../assets/images/nft04.jpg';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.small + 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  imageContainer: {},
});
