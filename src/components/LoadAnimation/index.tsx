import React from "react";

import LottieView from "lottie-react-native";

import { Container } from "./styles";
import LoadingCar from "../../assets/loadingCar.json";

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={LoadingCar}
        autoPlay
        style={{ height: 120 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
}
