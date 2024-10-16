import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar, Platform, Pressable, View, Image, Button, TouchableOpacity } from 'react-native';

const imagens = {
  user: {
    pedra: require('./assets/user_pedra.png'),
    papel: require('./assets/user_papel.png'),
    tesoura: require('./assets/user_tesoura.png'),
  },
  cpu: {
    pedra: require('./assets/cpu_pedra.png'),
    papel: require('./assets/cpu_papel.png'),
    tesoura: require('./assets/cpu_tesoura.png'),
  },
};

const App = () => {
  const [escolhaUsuario, setEscolhaUsuario] = useState(null);
  const [escolhaCPU, setEscolhaCPU] = useState(null);
  const [resultado, setResultado] = useState('');
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  const opcoes = ['pedra', 'papel', 'tesoura'];

  const jogar = (escolha) => {
    const escolhaRandom = opcoes[Math.floor(Math.random() * opcoes.length)];
    setEscolhaUsuario(escolha);
    setEscolhaCPU(escolhaRandom);

    if (escolha === escolhaRandom) {
      setResultado('Empate!');
    } else if (
      (escolha === 'pedra' && escolhaRandom === 'tesoura') ||
      (escolha === 'tesoura' && escolhaRandom === 'papel') ||
      (escolha === 'papel' && escolhaRandom === 'pedra')
    ) {
      setResultado('Você ganhou!');
    } else {
      setResultado('Você perdeu!');
    }

    setJogoFinalizado(true);
  };

  const jogarNovamente = () => {
    setEscolhaUsuario(null);
    setEscolhaCPU(null);
    setResultado('');
    setJogoFinalizado(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Pedra, Papel e Tesoura</Text>
      {!jogoFinalizado ? (
        <View>
          <Text style={styles.enunciado}>Escolha uma opção:</Text>
          <View style={styles.escolhas}>
            {opcoes.map((opcao, index) => (
              <Pressable key={index} onPress={() => jogar(opcao)} style={styles.botao}>
                <Image source={imagens.user[opcao]} style={styles.imagem} />
              </Pressable>
            ))}
          </View>
        </View>
      ) : (
        <View style={styles.resultadoContainer}>
          <View style={styles.box}>
            <Text style={styles.resultado}>Você: {escolhaUsuario}</Text>
            <Image source={imagens.user[escolhaUsuario]} style={styles.resultadoImagem} />
          </View>
          <View style={styles.box}>
            <Text style={styles.resultado}>App: {escolhaCPU}</Text>
            <Image source={imagens.cpu[escolhaCPU]} style={styles.resultadoImagem} />
          </View>
          <Text style={styles.resultadoFinal}>{resultado}</Text>
          <TouchableOpacity style={styles.jogarNovamenteBotao} onPress={jogarNovamente}>
            <Text style={styles.jogarNovamenteTexto}>Jogar Novamente</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  enunciado: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  escolhas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  botao: {
    padding: 10,
  },
  imagem: {
    width: 100,
    height: 100,
  },
  resultadoContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  box: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    marginVertical: 10,
  },
  resultado: {
    fontSize: 18,
    marginVertical: 5,
  },
  resultadoImagem: {
    width: 50,
    height: 50,
  },
  resultadoFinal: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  jogarNovamenteBotao: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  jogarNovamenteTexto: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;