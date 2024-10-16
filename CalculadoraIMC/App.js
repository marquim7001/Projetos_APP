import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, StatusBar, Platform, Pressable, View, Image } from 'react-native';

const imagens = [
  require('./assets/abaixo_do_normal.png'),
  require('./assets/normal.png'),
  require('./assets/sobrepeso.png'),
  require('./assets/obesidade_grau_um.png'),
  require('./assets/obesidade_grau_dois.png'),
  require('./assets/obesidade_grau_tres.png')
];

const Classificacao = ({ classificacaoIMC, imagem }) => {
  console.log("ClassificacaoIMC no componente:", classificacaoIMC);
  return (
    <View>
      <Image source={imagem} style={styles.imagem} />
      <Text style={styles.resultado}>{classificacaoIMC || "Sem classificação"}</Text>
    </View>
  );
};

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultadoIMC, setResultadoIMC] = useState('');
  const [classificacaoIMC, setClassificacaoIMC] = useState('');
  const [imagem, setImagem] = useState('');

  const calcularIMC = () => {
    let imc = parseFloat(peso.replace(',', '.')) / (parseFloat(altura.replace(',', '.')) * parseFloat(altura.replace(',', '.')));
    setResultadoIMC(imc.toFixed(2));

    let classificacao = '';
    let indiceImagem = 0;

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Peso normal';
      indiceImagem = 1;
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = 'Sobrepeso';
      indiceImagem = 2;
    } else if (imc >= 30 && imc < 34.9) {
      classificacao = 'Obesidade grau 1';
      indiceImagem = 3;
    } else if (imc >= 35 && imc < 39.9) {
      classificacao = 'Obesidade grau 2';
      indiceImagem = 4;
    } else {
      classificacao = 'Obesidade grau 3';
      indiceImagem = 5;
    }

    setClassificacaoIMC(classificacao);
    setImagem(imagens[indiceImagem]);
  };

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPeso}
        value={peso}
        placeholder="Insira seu peso"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setAltura}
        value={altura}
        placeholder="Insira sua altura"
        keyboardType="numeric"
      />
      <Pressable style={styles.botao} onPress={calcularIMC}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>
      <Text style={styles.resultado}>IMC: {resultadoIMC}</Text>
      {resultadoIMC !== '' && (
        <Classificacao classificacaoIMC={classificacaoIMC} imagem={imagem} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 3,
    padding: 10,
    borderRadius: 10
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  androidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  resultado: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 42,
    borderRadius: 5,
    elevation: 4,
    backgroundColor: 'green',
  },
  textoBotao: {
    fontSize: 20,
    color: 'white'
  },
  imagem: {
    width: 75,
    height: 180,
    alignSelf: 'center',
    marginBottom: 20
  }
});

export default App;
