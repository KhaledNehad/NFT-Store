import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import { COLORS, FONTS, SIZES, DATA } from '../constants';
import { useEffect, useRef, useState } from 'react';
import NFTCard from './../components/NFTCard';
import HomeHeader from '../components/HomeHeader';
import { FlashList } from '@shopify/flash-list';

const Home = () => {
  const [nftData, setNftData] = useState(DATA);

  const searchHandler = (value) => {
    if (value) {
      const filterDate = DATA.filter((nft) =>
        nft.name.toLowerCase().includes(value.toLowerCase())
      );
      setNftData(filterDate);
    } else {
      setNftData(DATA);
    }
  };

  const moveSearchAnimation = useRef(new Animated.Value(0)).current;

  const searchAnimationHandler = () => {
    Animated.spring(moveSearchAnimation, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    searchAnimationHandler();
  }, [searchAnimationHandler]);

  const NotFoundNFT = () => {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>OPS..</Text>
        <Text style={styles.notFoundText}>NFT not founded</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              top: -100,
              transform: [
                {
                  translateY: moveSearchAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 100],
                  }),
                },
              ],
            }}
          >
            <HomeHeader searchHandler={searchHandler} />
          </Animated.View>
          {!nftData.length ? (
            <NotFoundNFT />
          ) : (
            <FlashList
              data={nftData}
              estimatedItemSize={200}
              renderItem={({ item }) => <NFTCard NFTData={item} />}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: StatusBar.currentHeight + 10,
  },
  notFoundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.xLarge,
  },
  notFoundText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge,
  },
});
