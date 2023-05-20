import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Me = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        // Retrieve user information from AsyncStorage or your preferred storage method
        const user = await AsyncStorage.getItem("userInfo");
        if (user) {
          // If user information is found, parse it and set it in the state
          const parsedUser = JSON.parse(user);
          setUserInfo(parsedUser);
        }
      } catch (error) {
        console.log("Error retrieving user information:", error);
      }
    };

    getUserInfo();
  }, []);

  const handleLogout = async () => {
    try {
      // remove any saved user credentials or tokens
      await AsyncStorage.removeItem("accessToken");
      await AsyncStorage.removeItem("refreshToken");
      // navigate to login page
      navigation.reset({
        index: 0,
        routes: [{ name: "LogIn" }],
      });
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <View style={styles.container}>
      {userInfo && (
        <View>
          <Text style={styles.userInfoText}>Username: {userInfo.username}</Text>
          <Text style={styles.userInfoText}>Email: {userInfo.email}</Text>
          {/* Display any other user information you have */}
        </View>
      )}

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  userInfoText: {
    fontSize: 18,
    marginVertical: 10,
    marginLeft: 20,
  },
  logoutButton: {
    backgroundColor: "red",
    borderRadius: 20,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    top: 530,
  },
  logoutButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Me;
