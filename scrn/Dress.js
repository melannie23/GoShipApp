import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";

const Dress = ({navigation}) => {
  return (
    <View  style={styles.container}>
      <View>
          <Text style={styles.fp}>    Dress</Text>
      </View>

      <View style={styles.img6}>
        <Image source={require('./img/floralDress.png')} 
          style={{ resizeMode: 'contain', height: 150, width: 150, borderRadius: 15 }}/>
        <Text>Polkadot Red Dress</Text>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.img7}>
        <Image source={require('./img/yellowDress.png')} 
          style={{ resizeMode: 'contain', height: 150, width: 150, borderRadius: 15 }}/>
        <Text>women's yellow sleeveless dress</Text>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.img8}>
        <Image source={require('./img/redDress.jpg')} 
          style={{ resizeMode: 'contain', height: 150, width: 150, marginTop: 50, borderRadius: 15 }}/>
        <Text>Floral Dress</Text>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.img9}>
        <Image source={require('./img/redFloralDress.png')} 
          style={{ resizeMode: 'contain', height: 150, width: 150, marginTop: 50, borderRadius: 15 }}/>
        <Text>women's red floral sleeveless dress</Text>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "papayawhip",
    marginTop: 30,
  }, 
  fp: {
    fontFamily: 'sans-serif',
    fontSize: 25
  },
  img6: {
  top: 70,
    left: 10,
    width: 150,
    alignItems: 'center',
  },
  img7: {
    bottom: 170,
    left: 180,
    width: 150,
    height:100,
    alignItems: 'center',
  },
  img8: {
    left: 5,
    top: 0,
    width: 150,
    alignItems: 'center',
  },
  img9: {
    left: 190,
    width: 150,
    bottom: 270,
    alignItems: 'center',
  },
  addToCartButton: {
    backgroundColor: "blue",
    width: 120,
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  addToCartButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default Dress;