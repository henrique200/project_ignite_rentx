import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

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
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

export function SignUpFirstStep() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnh, setCnh] = useState("");
  const { navigate, goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  function handleNextStep() {
    navigate("SignUpSecondStep");
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
            <FormTitle>1. Dados</FormTitle>
            <Input iconName="user" placeholder="Nome" value={name} />
            <Input
              iconName="mail"
              placeholder="E-mail"
              value={email}
              keyboardType="email-address"
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              value={cnh}
              keyboardType="numeric"
            />
          </Form>

          <Button title="Próximo" onPress={handleNextStep} disabled={false} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
