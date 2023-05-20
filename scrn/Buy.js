import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const Buy = ({ navigation }) => {
  const handleBuyPress = () => {
    // Add your logic here for handling the buy action
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBuyPress}>
        <View style={styles.img8}>
          <Image
            source={require('./img/floralDress.png')}
            style={{ resizeMode: 'contain', height: 400, width: 400, marginTop: 50, borderRadius: 15 }}/>
          <Text style={[styles.boldText, styles.fp]}>Floral Dress</Text>
          <Text style={styles.description}>
            <Text style={styles.boldText}>Description:</Text> This beautiful floral dress is perfect for any occasion. It features a vibrant floral pattern and a comfortable fit.
          </Text>
          <Text style={styles.price}>Price: <Text style={styles.priceValue}>$99.99</Text></Text>
          <TouchableOpacity style={styles.buyButton} onPress={handleBuyPress}>
            <Text style={styles.buyButtonText}>Buy</Text>
          </TouchableOpacity>
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
  img8: {
    bottom: 10,
    width: 370,
    height: 370,
    alignItems: 'center',
    fontFamily: 'sans-serif',
    fontSize: 25,
  },
  fp: {
    marginTop: 10,
    fontFamily: 'sans-serif',
    fontSize: 25,
  },
  boldText: {
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    fontFamily: 'sans-serif',
    fontSize: 16,
    textAlign: 'justify',
    paddingHorizontal: 20,
  },
  price: {
    marginTop: 10,
    fontFamily: 'sans-serif',
    fontSize: 18,
  },
  priceValue: {
    color: 'red',
  },
  buyButton: {
    marginTop: 20,
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buyButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default Buy;