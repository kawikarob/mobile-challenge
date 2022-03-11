import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const DATA = [
  {
    id: "1",
    name: {
      firstName: "Thorny",
      lastName: "Clayborn",
    },
    email: "tclayborn0@altervista.org",
    gender: "Male",
    role: "Test Engineer",
  },
  {
    id: 2,
    name: {
      firstName: "Layney",
      lastName: "Juan",
    },
    email: "ljuan1@google.com.au",
    gender: "Male",
    role: "Vendor",
  },
  {
    id: 3,
    name: {
      firstName: "Ulrich",
      lastName: "Lepper",
    },
    email: "ulepper2@example.com",
    gender: "Male",
    role: "Vendor",
  },
];

const Item = ({ name, email, gender, role }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name.firstName + " " + name.lastName}</Text>
    {/* <Text style={styles.title}>{name.lastName}</Text> */}
    <Text>{email}</Text>
    <Text>{gender}</Text>
    <Text>{role}</Text>
  </View>
);

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/users.json?page=500&key=930279b0")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      email={item.email}
      gender={item.gender}
      role={item.role}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#ECECEC",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
