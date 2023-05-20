import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import * as AuthSession from "expo-auth-session";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function App({navigation}) {
  const [accessToken, setAccessToken] = React.useState();
  const [userInfo, setUserInfo] = React.useState();
  const [message, setMessage] = React.useState();
  const [user, setUser] = useState(null);

  const [googleRequest, googleResponse, googlePromptAsync] = Google.useAuthRequest({
    androidClientId: "1060511390880-6eqqg3sl9nhgpra37cdrmqv05t2qv5bm.apps.googleusercontent.com",
    iosClientId: "1060511390880-hb0uev2lmsc5osdpiot3uia5kjll9t98.apps.googleusercontent.com",
    expoClientId: "1060511390880-uict3lpc39mogag5sj7gqrkii4ir6ut9.apps.googleusercontent.com"
  });

  //FACEBOOKAPPID:752519969865565
  const [facebookRequest, facebookResponse, facebookPromptAsync] = Facebook.useAuthRequest({
    clientId: "752519969865565",
  });

  if (facebookRequest) {
    console.log(
      "You need to add this url to your authorized redirect urls on your Facebook app: " +
      facebookRequest.redirectUri
    );
  }

  React.useEffect(() => {
    setMessage(JSON.stringify(googleResponse));
    if (googleResponse?.type === "success") {
      setAccessToken(googleResponse.authentication.accessToken);
    }
  }, [googleResponse]);

  async function getUserData() {
    let userInfogoogleResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}`}
    });
    userInfogoogleResponse.json().then(data => {
      setUserInfo(data);
    });
  }

  function showUserInfo() {
    if (userInfo) {
      return (
        <View style={styles.userInfo}>
          <Image source={{uri: userInfo.picture}} style={styles.profilePic} />
          <Text>Welcome {userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
    
          <TouchableOpacity
            style={{backgroundColor: 'papayawhip',
            width: "14%",
            borderRadius: 20,
            height: 45,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
            }}
            onPress={() => navigation.navigate({ name: "Home" })} >
            <Image  style={{    
                  height: 40,
                  width: 40,
                }}
                source={{
                  uri: 'https://tse3.mm.bing.net/th?id=OIP.2NaVm9dhAV5TzZRs62AXPQHaHa&pid=Api&P=0',
                }}/>
          </TouchableOpacity>    
        </View>
      );
    }
  }

  useEffect(() => {
    if (facebookResponse && facebookResponse.type === "success" && facebookResponse.authentication) {
      (async () => {
        const userInfofacebookResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${facebookResponse.authentication.accessToken}&fields=id,name,picture.type(large)`
        );
        const userInfo = await userInfofacebookResponse.json();
        setUser(userInfo);
      })();
    }
  }, [facebookResponse]);

  const handlePressAsync = async () => {
    const result = await facebookPromptAsync();
    if (result.type !== "success") {
      alert("Uh oh, something went wrong");
      return;
    }
  };

 return (
  <View style={styles.container}>
    <Image
      source={require('./img/logo.png')}
      style={{
        resizeMode: 'contain',
        height: 150,
        width: 150,
      }}
    />
    <Text>Welcome to GoShip Store</Text>
    {showUserInfo()}
    {!accessToken && !user && (
      <Image
        source={{
          uri: "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
          width: 40,
          height: 40,
          position: 'absolute',
          resizeMode: 'contain'
        }}
        style={styles.googleIcon}
      />
    )}
    <Button 
      title={accessToken ? "Get User Data" : "Sign in with Google"}
      onPress={accessToken ? getUserData : () => { 
        googlePromptAsync();
      }} 
    />
    <StatusBar style="auto" />
    <View style={styles.buttonContainer}>
      {user ? null : (
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png",
            width: 40,
            height: 40,
            position: 'absolute',
            resizeMode: 'contain'
          }}
          style={styles.fbIcon}
        />
      )}
    </View>
    {user ? (
      <Profile user={user} />
    ) : (
      <Button
        disabled={!facebookRequest}
        title="Sign in with Facebook"
        onPress={handlePressAsync}
      />
    )}
  </View>
);

function Profile({ user }) {
  return (
    <View style={styles.profile}>
      <Image source={{ uri: user.picture.data.url }} style={styles.image} />
      <Text style={styles.name}> Welcome {user.name}</Text>
      <Text>ID: {user.id}</Text>
      <TouchableOpacity
      style={{backgroundColor: 'papayawhip',
      width: "14%",
      borderRadius: 20,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 10,
      }}
      onPress={() => navigation.navigate({ name: "Home" })} >
      <Image  style={{    
            height: 40,
            width: 40,
          }}
          source={{
            uri: 'https://tse3.mm.bing.net/th?id=OIP.2NaVm9dhAV5TzZRs62AXPQHaHa&pid=Api&P=0',
          }}/>
    </TouchableOpacity>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'papayawhip',
    alignItems: "center",
    justifyContent: "center",
  },
  userInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  fbIcon: {
    top: 20,
    right: 105,
    position: 'absolute',  
  },
  googleIcon: {
    top: 415,
    right: 285,
    position: 'absolute', 
  },
  profile: {
    alignItems: "center",
  },
  profilePic: {
    width: 50,
    height: 50
  },
  name: {
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});