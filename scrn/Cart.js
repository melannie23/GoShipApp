import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Cart = ({navigation}) => {
  const handleWomenClothesPress = () => {
    navigation.navigate('Buy');
  };

  return (
    <View  style={styles.container}>
      <TouchableOpacity onPress={handleWomenClothesPress}>
        <View style={styles.img8}>
          <Image source={require('./img/floralDress.png')} 
            style={{ resizeMode: 'contain', height: 160, width: 160, marginTop: 50, borderRadius: 15 }}/>
          <Text>Women's Clothes</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.img6}>
          <Image source={require('./img/Sneakers.jpg')} 
            style={{ resizeMode: 'contain', height: 160, width: 160, borderRadius: 15 }}/>
          <Text>Sneakers</Text>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>
        <View style={styles.img7}>
          <Image source={require('./img/Macbook.jpg')} 
            style={{ resizeMode: 'contain', height: 160, width: 160, borderRadius: 15 }}/>
          <Text>Macbook Pro</Text>
        </View>
      </TouchableOpacity>  

      <TouchableOpacity>
        <View style={styles.img9}>
          <Image source={require('./img/Furniture.jpg')} 
            style={{ resizeMode: 'contain', height: 160, width: 160, marginTop: 50, borderRadius: 15 }}/>
          <Text>Furniture</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.img10}>
          <Image source={require('./img/HomeAppliances.jpg')} 
            style={{ resizeMode: 'contain', height: 160, width: 160, marginTop: 50, borderRadius: 15 }}/>
          <Text>Home Appliances</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "papayawhip",
  },
  img6: {
    left: 190,
    bottom: 220,
  },
  img7: {
    left: 190,
    bottom: 210,
  },
  img8: {
    left: 20,
    bottom: 35
  },
  img9: {
    left: 20,
    bottom: 440
  },
  img10: {
    left: 20,
    bottom: 470
  }
});
export default Cart;