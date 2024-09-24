import React, { useState } from 'react'; // Importa o React e o hook useState do React
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; // Importa componentes do React Native

export default function App() { // Define o componente principal do aplicativo
  const [count, setCount] = useState(0); // Declara um estado chamado 'count' com valor inicial 0

  return ( // Retorna o layout do aplicativo
    <View style={styles.container}> 
      <Text style={styles.title}>Contador Clientes</Text> 
      <TouchableOpacity
        style={[styles.button, styles.incrementButton]} // Aplica estilos ao botão de incremento
        onPress={() => setCount(count + 1)} // Incrementa o contador quando o botão é pressionado
      >
        <Text style={styles.buttonText}>+</Text> 
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.decrementButton]} // Aplica estilos ao botão de decremento
        onPress={() => setCount(count - 1)} // Decrementa o contador quando o botão é pressionado
      >
        <Text style={styles.buttonText}>-</Text> 
      </TouchableOpacity>
      <Text style={styles.count}>{count}</Text> 
    </View>
  );
}

const styles = StyleSheet.create({ // Define os estilos do aplicativo
  container: { // Estilo para o contêiner principal
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 50, // Adiciona espaço no topo para o título
  },
  title: { 
    fontSize: 36, 
    fontFamily: 'sans-serif', // Muda a tipografia do título
    marginBottom: 40, // Adiciona espaço abaixo do título
  },
  button: { // Estilo base para os botões
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 50,
  },
  incrementButton: { // cor botão de incremento
    backgroundColor: 'green',
  },
  decrementButton: { //cor  botão de decremento
    backgroundColor: 'red',
  },
  buttonText: { // Estilo para o texto dos botões
    fontSize: 36,
    color: '#fff',
  },
  count: { // Estilo para o contador
    fontSize: 48,
    marginTop: 20,
  },
});
