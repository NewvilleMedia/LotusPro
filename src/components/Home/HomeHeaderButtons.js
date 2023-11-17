import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import HeaderSearch from "./HeaderSearch";

const HomeHeaderButtons = () => {
  const { colors } = useTheme();

  return (
    <View>
      <HeaderSearch />

      <View style={styles.containerOptions}>
        <TouchableOpacity style={styles.options}>
          <View style={styles.background}>
            <Icons.LightBulbIcon size={25} color={"#fa8072"} />
          </View>
          <View>
            <Text style={styles.title}>Ideas</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.options}>
          <View style={styles.background}>
            <Icons.BriefcaseIcon size={25} color={"#fa8072"} />
          </View>
          <View>
            <Text style={styles.title}>Pros</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.options}>
          <View style={styles.background}>
            <Icons.ShoppingBagIcon size={25} color={"#fa8072"} />
          </View>
          <View>
            <Text style={styles.title}>Shop</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.options}>
          <View style={styles.background}>
            <Icons.AcademicCapIcon size={25} color={"#fa8072"} />
          </View>
          <View>
            <Text style={styles.title}>Advice</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeaderButtons;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fa807250",
    width: 25,
    height: 25,
    padding: 25,
    alignItems: "center",
    borderRadius: 30,
    justifyContent: "center",
  },
  containerOptions: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-evenly",
  },
  title: {
    color: "#fa8072",
    marginTop: 10,
    fontSize: 14,
  },
  options: {
    alignItems: "center",
  },
});