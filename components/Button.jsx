import { Text, TouchableOpacity } from 'react-native';

const Button = ({ pressHandler, icon, stylesText, title, stylesButton }) => {
  const RenderContentIconOrText = () => {
    if (!icon) {
      return <Text style={stylesText}>{title && title}</Text>;
    } else {
      return icon;
    }
  };
  return (
    <TouchableOpacity style={stylesButton} onPress={pressHandler}>
      <RenderContentIconOrText />
    </TouchableOpacity>
  );
};

export default Button;
