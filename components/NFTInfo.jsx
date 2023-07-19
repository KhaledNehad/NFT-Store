import { View, Text, StyleSheet } from 'react-native';

import { COLORS, FONTS, SIZES } from '../constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Button from './Button';

const NFTInfo = ({ comments, views, price, Love }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <MaterialCommunityIcons name='eye' size={20} color='white' />
        <Text style={styles.text}>{views}</Text>
      </View>

      <View style={styles.wrapper}>
        <MaterialCommunityIcons name='chat' size={20} color='white' />
        <Text style={styles.text}>{comments}</Text>
      </View>

      <View style={styles.wrapper}>
        <MaterialCommunityIcons name='ethereum' size={20} color='white' />
        <Text style={styles.text}>{price}</Text>
      </View>
      {Love && (
        <View>
          <Button
            icon={
              <MaterialCommunityIcons
                name='cards-heart'
                size={18}
                color={COLORS.second}
              />
            }
            stylesButton={styles.buttonHeart}
          />
        </View>
      )}
    </View>
  );
};

export default NFTInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.second,
    width: 90,
    borderRadius: SIZES.xLarge,
    paddingVertical: 3,
    gap: 4,
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  buttonHeart: {
    backgroundColor: COLORS.white,
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.black,
  },
});
