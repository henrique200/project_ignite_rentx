import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";

import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  disabled = true,
  loading = false,
  light = false,
}: Props) {
  const theme = useTheme();
  return (
    <Container
      onPress={onPress}
      color={color ? color : theme.colors.main}
      disabled={disabled}
      style={{ opacity: disabled === true || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} size="large" />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
