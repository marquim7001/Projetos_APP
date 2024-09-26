import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

import quotes from './quotes.json';  // Importa as citações de um arquivo JSON

export default function App() {
  const [quote, setQuote] = useState({}); // Estado para armazenar a citação atual
  
  useEffect(() => {
    getRandomQuote(); // Obtém uma citação aleatória quando o componente é montado
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length); // Seleciona um índice aleatório
    setQuote(quotes[randomIndex]);  // Define a citação atual com base no índice aleatório
  };

  return (
    <View style={styles.container}>
      <View style={styles.quoteBox}>
        <Text style={styles.quoteText}>{quote.text}</Text>
        {quote.author && (
          <View style={styles.authorContainer}>
            <Image source={{ uri: quote.image }} style={styles.authorImage} />
            <Text style={styles.authorText}>{quote.author}</Text>
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={()=> getRandomQuote()}> 
        <Text style={styles.buttonText}>Nova Citação</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ADD8E6', // Fundo azul claro
  },
  quoteBox: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Adiciona sombra para dar um efeito de elevação
  },
  quoteText: {
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
  authorContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  authorImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  authorText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
