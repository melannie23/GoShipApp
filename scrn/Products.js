import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";

const ProductScreen = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    fetch('http://192.168.1.14/Ecommerce-Vital-ActiveWear-main/Ecommerce-Vital-ActiveWear-main/php-api/read.php', {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((error) => {
        console.log("Error fetching product list:", error);
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productList}
        keyExtractor={(item) => item.p_id.toString()}
        renderItem={({ item }) => (
          <ListItem
            containerStyle={styles.listItemContainer}
          >
            <Avatar
              rounded
              source={{ uri: "http://192.168.1.14/Ecommerce-Vital-ActiveWear-main/Ecommerce-Vital-ActiveWear-main/public/uploads/products/" + item.p_featured_photo }}
            />
            <ListItem.Content>
              <ListItem.Title
                style={{ color: "black", fontWeight: "bold" }}
              >
                {`${item.p_id} ${item.p_name} ${item.p_current_price} ${item.p_featured_photo}`}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="black" />
          </ListItem>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItemContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
});

export default ProductScreen;