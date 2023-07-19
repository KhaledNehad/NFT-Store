import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { SIZES, COLORS } from '../constants';
import NFTImage from './NFTImage';
import NFTAvatar from './NFTAvatar';
import NFTTitle from './NFTTitle';
import NFTInfo from './NFTInfo';
import { useNavigation } from '@react-navigation/native';

const NFTCard = ({ NFTData }) => {
  const navigation = useNavigation();
  const navigateHandler = () => {
    navigation.navigate('NFT-details', { NFTData });
  };

  return (
    <TouchableWithoutFeedback>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={navigateHandler}>
          <NFTImage image={NFTData.image} imageStyles={styles.imageStyles} />
        </TouchableOpacity>
        <View style={styles.cardTop}>
          <NFTAvatar avatars={NFTData.avatars} />
        </View>
        <View style={styles.cardBottom}>
          <NFTTitle
            _name={NFTData.name}
            creator={NFTData.creator}
            date={NFTData.date}
          />

          <View style={{ marginTop: SIZES.small + 5 }}>
            <NFTInfo
              comments={NFTData.comments}
              views={NFTData.views}
              price={NFTData.price}
              Love
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default NFTCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.xLarge,
    marginVertical: SIZES.small - 5,
    marginHorizontal: 14,
    padding: 12,
  },
  cardTop: {
    width: '100%',
    paddingHorizontal: SIZES.medium,
    marginTop: -30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBottom: { width: '100%', padding: SIZES.medium },
  imageStyles: {
    width: '100%',
    height: 300,
    borderRadius: SIZES.medium,
  },
});
