import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const Item = ({ name, email, gender, role, title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name.firstName + " " + name.lastName}</Text>
    <Text>{email}</Text>
    <Text>{gender}</Text>
    <Text>{role}</Text>
    <Text>{title}</Text>
  </View>
);

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [pageCurrent, setPageCurrent] = useState(1);

  useEffect(() => {
    fetch(
      `https://my.api.mockaroo.com/users.json?page=${pageCurrent}&count=100&key=930279b0`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(data.concat(json.entries));
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [pageCurrent]);

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      id={item.id}
      name={item.name}
      email={item.email}
      gender={item.gender}
      role={item.role}
    />
  );

  const handleLoadMore = () => {
    setPageCurrent(pageCurrent + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <View>
          <Text style={styles.header}>Employee List</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={2}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    textAlign: "center",
    fontWeight: "600",
    paddingBottom: 5,
    fontSize: 24,
  },
  item: {
    backgroundColor: "#ECECEC",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  loadingText: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
