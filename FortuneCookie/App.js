import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import closedCookie from './assets/closed_cookie.png';
import openCookie from './assets/open_cookie.png';
import fortunes from './assets/fortunes.json';

function HomeScreen() { // Define estados para controlar se o biscoito está quebrado e a frase de sorte
  const [isBroken, setIsBroken] = useState(false);
  const [fortune, setFortune] = useState('');

  
  const breakCookie = () => {  // Função para quebrar o biscoito e exibir uma frase de sorte
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];   // Seleciona uma frase aleatória do arquivo fortunes.json
    setFortune(randomFortune);
    setIsBroken(true);  // Marca o biscoito como quebrado
  };


  const newCookie = () => {    // Função para abrir um novo biscoito
    setIsBroken(false);  // Reseta o estado do biscoito para fechado
    setFortune('');  // Limpa a frase de sorte
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={breakCookie}>
        <Image source={isBroken ? openCookie : closedCookie} style={styles.cookieImage} />
      </TouchableOpacity>
      {isBroken && (
        <View style={styles.fortuneBox}>
          <Text style={styles.fortuneText}>{fortune}</Text>
        </View>
      )}
      {isBroken && (
        <Button title="Abrir um novo biscoito" onPress={newCookie} />
      )}
    </View>
  );
}

// Configuração da navegação
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Biscoito da Sorte" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8DC', // Cor de fundo creme claro
  },
  cookieImage: {
    width: 300,
    height: 200,
  },
  fortuneBox: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  fortuneText: {
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic', // Tipografia em itálico
  },
});