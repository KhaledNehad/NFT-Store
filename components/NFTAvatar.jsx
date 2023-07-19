import { View, StyleSheet, Image } from 'react-native';

const NFTAvatar = ({ avatars }) => {
  return (
    <View style={styles.container}>
      {avatars.map((avatar) => {
        return (
          <Image
            source={avatar.image}
            key={avatar.id}
            resizeMode='contain'
            style={styles.avatar}
          />
        );
      })}
    </View>
  );
};

export default NFTAvatar;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', paddingHorizontal: 5 },
  avatar: {
    width: 40,
    height: 40,
    marginLeft: -5,
    borderRadius: 40,
  },
});
