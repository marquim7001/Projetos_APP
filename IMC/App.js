import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');
  const [resultadoImc, setResultadoImc] = useState('');

  const calcularIMC = () => {
    const alturaEmMetros = parseFloat(altura);
    const pesoEmKg = parseFloat(peso);
    if (isNaN(alturaEmMetros) || isNaN(pesoEmKg)) {
      setImc('');
      setResultadoImc('Por favor, insira valores válidos');
      return;
    }
    const valorIMC = pesoEmKg / (alturaEmMetros * alturaEmMetros);
    setImc(valorIMC.toFixed(2));
    if (valorIMC < 18.5) {
      setResultadoImc('Abaixo do peso');
    } else if (valorIMC >= 18.5 && valorIMC < 24.9) {
      setResultadoImc('Peso normal');
    } else if (valorIMC >= 25 && valorIMC < 29.9) {
      setResultadoImc('Sobrepeso');
    } else if (valorIMC >= 30 && valorIMC < 39.9) {
      setResultadoImc('Obesidade');
    } else {
      setResultadoImc('Obesidade grave');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Calculo IMC</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          value={peso}
          onChangeText={setPeso}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Altura (m)"
          value={altura}
          onChangeText={setAltura}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={calcularIMC}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        {imc ? (
          <View>
            <Text style={styles.resultado}>Seu IMC é: {imc}</Text>
            <Text style={styles.resultado}>{resultadoImc}</Text>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 12,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;