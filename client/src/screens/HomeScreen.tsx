import { StyleSheet } from "react-native";
import React from "react";
import { Layout } from "components/layout";
import { HomeProducts } from "components/pages/home";

const HomeScreen = () => {
  return (
    <Layout>
      <HomeProducts />
    </Layout>
  );
};

export default HomeScreen;
