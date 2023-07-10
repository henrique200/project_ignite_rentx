import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";

import {
  Container,
  Header,
  Step,
  Title,
  SubTitle,
  FormTitle,
  Form,
} from "./styles";
import { PasswordInput } from "../../../components/PasswordInput";
import { Button } from "../../../components/Button";

export function SignUpSecondStep() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnh, setCnh] = useState("");
  const { navigate, goBack } = useNavigation();
  const theme = useTheme();

  function handleGoBack() {
    goBack();
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <BackButton onPress={handleGoBack} />
            <Step>
              <Bullet active />
              <Bullet active={false} />
            </Step>
          </Header>

          <Title>
            Crie sua{"\n"}
            conta
          </Title>
          <SubTitle>
            Faça seu cadastro de{"\n"}
            forma rápidae fáil
          </SubTitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput iconName="lock" placeholder="Senha" value="" />
            <PasswordInput
              iconName="lock"
              placeholder="Repetir Senha"
              value=""
            />
          </Form>

          <Button
            title="Cadastrar"
            disabled={false}
            color={theme.colors.sucess}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
