import { View, Text, StyleSheet, SafeAreaView, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { SIZES, COLORS, FONTS } from '../constants';

import NFTImage from '../components/NFTImage';
import NFTAvatar from '../components/NFTAvatar';
import NFTTitle from '../components/NFTTitle';
import NFTInfo from '../components/NFTInfo';
import NFTMoreInfo from '../components/NFTMoreInfo';

import { FontAwesome } from '@expo/vector-icons';
import Button from '../components/Button';

const NFTDetails = ({ route, navigation }) => {
  const { NFTData } = route.params;
  const moveAnimation = useRef(new Animated.Value(0)).current;
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const duration = 1000;
  const delay = duration + 200;

  const moveAnimationHandler = () => {
    Animated.spring(moveAnimation, {
      toValue: 1,
      useNativeDriver: true,
      friction: 5,
      tension: 85,
    }).start();
  };

  const fadeAnimationHandler = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: duration,
      delay: delay,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    moveAnimationHandler();
    fadeAnimationHandler();
  }, [moveAnimationHandler, fadeAnimationHandler]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          flex: 1,
          transform: [
            {
              translateY: moveAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [200, 0],
              }),
            },
          ],
        }}
      >
        <NFTImage
          image={NFTData.image}
          imageStyles={styles.imageStyles}
          Love
          arrow
          pressHandler={() => navigation.goBack()}
        />
        <View style={{ paddingHorizontal: SIZES.xLarge }}>
          <View style={{ marginTop: -SIZES.xLarge }}>
            <NFTAvatar avatars={NFTData.avatars} />
          </View>
          <View style={{ marginVertical: SIZES.large }}>
            <NFTTitle
              _name={NFTData.name}
              creator={NFTData.creator}
              date={NFTData.date}
            />
          </View>
          <View style={{ marginVertical: SIZES.large }}>
            <NFTInfo comments={NFTData.comments} views={NFTData.views} price />
          </View>

          <View style={{ marginVertical: SIZES.large }}>
            <NFTMoreInfo
              address={NFTData.address}
              tokenId={NFTData.tokenId}
              tokenSt={NFTData.tokenSt}
              blockchain={NFTData.blockchain}
            />
          </View>
        </View>
        <Animated.View
          style={[styles.buttonContainer, { opacity: fadeAnimation }]}
        >
          <View style={styles.wrapper}>
            <View>
              <Text style={styles.text}>Top pid</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 2,
                  padding: SIZES.small - 4,
                }}
              >
                <FontAwesome name='dollar' size={15} color={COLORS.white} />
                <Text style={styles.text}> {NFTData.topBid}</Text>
              </View>
            </View>
            <Button
              stylesButton={styles.button}
              title='Place a bid'
              stylesText={styles.textButton}
            />
          </View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default NFTDetails;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },

  imageStyles: {
    width: '100%',
    height: 400,
    borderRadius: 20,
  },
  text: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  wrapper: {
    backgroundColor: COLORS.cardBg,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
  },
  button: {
    backgroundColor: COLORS.second,
    padding: 16,
    width: 150,
    borderRadius: 20,
  },
  textButton: {
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: FONTS.semiBold,
    fontSize: 16,
  },
});
