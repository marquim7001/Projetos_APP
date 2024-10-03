import React, { useState } from 'react';
import { View, Text, SafeAreaView, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

function App() {
  const [tema, setTema] = useState('Claro'); // Declara um estado chamado 'tema' com valor inicial 'Claro' e uma função para atualizá-lo
  const [tamanhoFonte, setTamanhoFonte] = useState(16); //Responsavel por declarar um estado chamado 'tamanhoFonte' com valor inicial 16 e uma função para atualizá-lo.
  const [modoNoturno, setModoNoturno] = useState(false);

  const resetarPreferencias = () => {  // Define uma função que reseta as preferências para os valores iniciais
    setTema('Claro');
    setTamanhoFonte(16);
    setModoNoturno(false);
  };
// Os estilos baseados no valor do estado 'tema'.
  const temaEstilos = tema === 'Claro' ? stylesClaro : tema === 'Escuro' ? stylesEscuro : stylesAutomatico;

  return (
    <SafeAreaView style={[styles.container, temaEstilos.container]}>
      <Text style={[styles.titulo, temaEstilos.titulo]}>Configurações de Preferências</Text>

      <View style={styles.box}>
        <Text style={[styles.label, temaEstilos.label]}>Tema</Text>
        <Picker
          selectedValue={tema}
          style={styles.picker}
          onValueChange={(itemValue) => setTema(itemValue)}
        >
          <Picker.Item label="Claro" value="Claro" />
          <Picker.Item label="Escuro" value="Escuro" />
          <Picker.Item label="Automático" value="Automático" />
        </Picker>
      </View>

      <View style={styles.box}>
        <Text style={[styles.label, temaEstilos.label]}>Tamanho da Fonte</Text>
        <Slider
          minimumValue={12}
          maximumValue={30}
          value={tamanhoFonte}
          onValueChange={(value) => setTamanhoFonte(value)}
          style={styles.slider}
        />
        <Text style={[{ fontSize: tamanhoFonte }, temaEstilos.texto]}>{tamanhoFonte.toFixed()}</Text>
      </View>

      <View style={styles.box}>
        <Text style={[styles.label, temaEstilos.label]}>Modo Noturno</Text>
        <Switch
          value={modoNoturno}
          onValueChange={(value) => setModoNoturno(value)}
        />
        <Text style={temaEstilos.texto}>{modoNoturno ? 'Ativado' : 'Desativado'}</Text>
      </View>

      <View style={styles.box}>  
        <TouchableOpacity style={styles.botaoReset} onPress={resetarPreferencias}>
          <Text style={styles.textoBotaoReset}>Resetar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 22,
  },
  box: {
    marginBottom: 30,
    padding: 15,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 200,
    width: '90%',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  botaoReset: {
    backgroundColor: '#32CD32',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotaoReset: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

const stylesClaro = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6FA',
  },
  titulo: {
    color: '#000000',
  },
  label: {
    color: '#6495ED',
  },
  texto: {
    color: '#000000',
  },
});

const stylesEscuro = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
  },
  titulo: {
    color: '#FFFFFF',
  },
  label: {
    color: '#FFFFFF',
  },
  texto: {
    color: '#FFFFFF',
  },
});

const stylesAutomatico = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0', // Padrão original
  },
  titulo: {
    color: '#000000', 
  },
  label: {
    color: '#000000', 
  },
  texto: {
    color: '#000000', 
  },
});

export default App;
