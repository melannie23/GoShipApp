import React from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Cart from "./Cart";
import Me from "./Me";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleWomenClothesPress = () => {
    navigation.navigate('Products');
  };

  return (
    <View  style={styles.container}>
      <ScrollView>
        <View>
          <Image source={require('./img/sales.png')} 
            style={{ resizeMode: 'contain', height: 350, width: 360 }}/>
        </View>
      
        <ScrollView horizontal={true}>
          <View style={styles.img}>
            <Text style={styles.fp}>  Featured Products</Text>
            <TouchableOpacity onPress={handleWomenClothesPress}>
              <View style={styles.img3}>
                <Image
                  source={require('./img/WomensClothes.jpg')}
                  style={{ resizeMode: 'contain', height: 100, width: 100, borderRadius: 15 }}/>
                <Text>Women's Clothes</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
              <View style={styles.img1}>
                <Image source={require('./img/Sneakers.jpg')} 
                  style={{ resizeMode: 'contain', height: 100, width: 100, borderRadius: 15 }}/>
                <Text>Sneakers</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.img2}>
                <Image source={require('./img/Macbook.jpg')} 
                  style={{ resizeMode: 'contain', height: 100, width: 100, borderRadius: 15 }}/>
                <Text>Macbook Pro</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.img4}>
                <Image source={require('./img/Furniture.jpg')} 
                  style={{ resizeMode: 'contain', height: 100, width: 100, borderRadius: 15 }}/>
                <Text>Furniture</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.img5}>
                <Image source={require('./img/HomeAppliances.jpg')} 
                  style={{ resizeMode: 'contain', height: 100, width: 100, borderRadius: 15 }}/>
                <Text>Home Appliances</Text>
              </View>
            </TouchableOpacity>
          </View> 
        </ScrollView>
  
        <View>
            <Text style={styles.fp}>    Trending Products</Text>
        </View>

        <TouchableOpacity onPress={handleWomenClothesPress}>
          <View style={styles.img8}>
            <Image source={require('./img/WomensClothes.jpg')} 
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
      </ScrollView>
    </View>
  );
};

const Home = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: () => (
          <Image source={require('./img/HomeIcon.png')}
            style={{ resizeMode: 'contain', height: 30, width: 35, borderRadius: 30 }}/>
        ),
      }}
      listeners={({ navigation }) => ({
        tabPress: (event) => {
          event.preventDefault();
          navigation.navigate({ name: 'Home' });
        },
      })}/>
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarIcon: () => (
          <Image source={require('./img/cart.png')}
            style={{ resizeMode: 'contain', height: 30, width: 35, borderRadius: 30 }}/>
        ),
      }}
      listeners={({ navigation }) => ({
        tabPress: (event) => {
          event.preventDefault();
          navigation.navigate({ name: 'Cart' });
        },
      })}/>
      <Tab.Screen name="Me" component={Me} options={{
        tabBarIcon: () => (
          <Image source={require('./img/Me.png')} 
            style={{ resizeMode: 'contain', height: 30, width: 35, borderRadius: 30 }}/>
        ),
      }}
      listeners={({ navigation }) => ({
        tabPress: (event) => {
          event.preventDefault();
          navigation.navigate({ name: 'Me' });
        },
      })}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "papayawhip",
    marginTop: 30
  },
  fp: {
    marginTop: 10,
    fontFamily: 'sans-serif',
    fontSize: 25
  },
  img: {
    marginTop: 15,
    flex: 0,
    backgroundColor: 'white',
    width:560,
    height:200
  },
    img1:{
      alignItems: 'center',
      flex: 0,
      width: 100,
      height:100,
      position: 'absolute',
      alignContent: 'center',
      left: 230
    },
    img2:{
      alignItems: 'center',
      flex: 0,
      width: 100,
      height:100,
      position: 'absolute',
      left: 120
    },
    img3:{
      alignItems: 'center',
      flex: 0,
      width: 100,
      height:100,
      position: 'absolute',
      left: 10,
    },
    img4:{
      alignItems: 'center',
      flex: 0,
      width: 100,
      height:100,
      position: 'absolute',
      alignContent: 'center',
      left: 340
    },
    img5:{
      alignItems: 'center',
      flex: 0,
      width: 100,
      height:100,
      position: 'absolute',
      alignContent: 'center',
      left: 450
    },
    img6: {
      left: 190,
      bottom: 230,
    },
    img7: {
      left: 190,
      bottom: 210,
    },
    img8: {
      left: 20,
      bottom: 50
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

export default Home;