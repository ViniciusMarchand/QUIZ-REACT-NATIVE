import { StyleSheet, Text, View } from "react-native";
import InputLabel from "../components/InputLabel";
import Button from "../components/Button";
import { useState } from "react";
import { screens } from "../constants";

export default function Cadastro({setScreen, setUser}) {

  const [form, setForm] = useState({
    name: "",
    email:""
  });

  const [error, setError] = useState("");

  const enter = () => {
    const { name, email } = form;

    if(name.trim() === "" || email.trim() === "") {
      setError("Preencha o formulário, há dados faltando.");
      return;
    }

    if(!isValidEmail(email)) {
      setError("Email inválido!");
      return;
    }

    setUser(form);
    setScreen(screens.quiz);

  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return <View style={styles.container}>
      <Text style={styles.h1}>Bem-vindo!</Text>
      <Text style={styles.h2}>Insira suas informações:</Text>
      <View style={styles.form}>
          <InputLabel 
              label={"Nome: "} 
              onChangeText={(value) => setForm({
                ...form,
                name:value
              })}
            />
          <InputLabel 
            label={"Email: "} 
            type={"email"}
            onChangeText={(value) => setForm({
              ...form,
              email:value
            })}
          />
          <Button onPress={() => enter()}>
            <Text style={styles.buttonText}>Começar o quiz!!</Text>
          </Button>
          {
            error !== "" &&
              <Text style={styles.errorText}>{error}</Text>
          }
      </View>
  </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%"
  },
  h1: {
    fontSize:25,
    fontWeight:600,
    marginBottom:10
  },
  h2: {
    fontSize:18,
    fontWeight:"500",
    marginBottom:10
  },
  form: {
    columnGap:10,
    gap:15,
    width:"100%",
    display: "flex"
  },
  buttonText: {
    color:"white",
    fontWeight:600
  },
  errorText: {
    fontSize: 14,
    opacity:80,
    color: "red"
  }
});