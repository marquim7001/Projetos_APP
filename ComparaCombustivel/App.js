import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, StatusBar, Platform, Pressable, View, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

const imagens = [
  require('./assets/gasolina.png'),
  require('./assets/etanol.png')
];

const Resultado = ({ resultado, imagem }) => {
  return (
    <View style={styles.resultadoContainer}>
      <Text style={styles.resultado}>{resultado || "Resultado indisponível"}</Text>
      <Image source={imagem} style={styles.imagemResultado} />
    </View>
  );
};

const App = () => {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');
  const [imagem, setImagem] = useState(null);

  const calcularPreco = () => {
    if (precoAlcool === '' || precoGasolina === '') {
      setResultado('Preencha os campos corretamente');
      return;
    }

    const precoAlcoolFormatado = parseFloat(precoAlcool.replace(',', '.'));
    const precoGasolinaFormatado = parseFloat(precoGasolina.replace(',', '.'));
    const resultadoFinal = precoAlcoolFormatado / precoGasolinaFormatado;

    if (resultadoFinal < 0.7) {
      setResultado('Abasteça com álcool');
      setImagem(imagens[1]);
    } else {
      setResultado('Abasteça com gasolina');
      setImagem(imagens[0]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.titulo}>Comparador de Combustível</Text>
            <Image source={require('./assets/fuel.png')} style={styles.imagemTitulo} />
            <TextInput
              style={styles.input}
              onChangeText={setPrecoAlcool}
              value={precoAlcool}
              placeholder="Insira o preço do álcool"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              onChangeText={setPrecoGasolina}
              value={precoGasolina}
              placeholder="Insira o preço da gasolina"
              keyboardType="numeric"
            />
            <Pressable style={styles.botao} onPress={calcularPreco}>
              <Text style={styles.textoBotao}>Calcular</Text>
            </Pressable>
            {resultado !== '' && <Resultado resultado={resultado} imagem={imagem} />}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  imagemTitulo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    height: 60,
    width: '70%',
    margin: 16,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#1E90FF',
    marginTop: 20,
  },
  textoBotao: {
    fontSize: 18,
    color: 'white',
  },
  resultadoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  resultado: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imagemResultado: {
    width: 200,
    height: 200,
  },
});

export default App;
