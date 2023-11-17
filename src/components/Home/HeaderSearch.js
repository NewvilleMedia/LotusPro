import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";

const HeaderSearch = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.searchContainer]}>
        <View style={{ margin: 8, flexDirection: "row", alignItems: "center" }}>
          <Icons.MagnifyingGlassIcon size={20} color={"gray"} />
          <TextInput
            placeholder={"Search"}
            autoCapitalize="none"
            placeholderTextColor={"grey"}
            style={[styles.input, { color: colors.text }]}
          />
        </View>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Icons.CameraIcon size={20} color={"gray"} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ marginRight: 10 }}>
        <Icons.ShoppingCartIcon size={20} color={"gray"} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginLeft: 19,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchContainer: {
    width: "85%",
    borderColor: "#a9a9a950",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    marginLeft: 3,
  },
});