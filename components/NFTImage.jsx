import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { COLORS } from '../constants';
import Button from './Button';
import { AntDesign, Feather } from '@expo/vector-icons';

const NFTImage = ({ image, imageStyles, Love, arrow, pressHandler }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={imageStyles} />
      {Love && (
        <Button
          stylesButton={styles.buttonHeart}
          icon={<AntDesign name='heart' size={20} color={COLORS.second} />}
        />
      )}
      {arrow && (
        <Button
          stylesButton={styles.buttonArrow}
          icon={<Feather name='arrow-left' size={20} color={COLORS.second} />}
          pressHandler={pressHandler}
        />
      )}
    </View>
  );
};

export default NFTImage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },

  buttonHeart: {
    position: 'absolute',
    top: StatusBar.currentHeight + 10,
    right: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 40,
  },
  buttonArrow: {
    position: 'absolute',
    top: StatusBar.currentHeight + 10,
    left: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 40,
  },
});
