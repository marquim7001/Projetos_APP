import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [time, setTime] = useState(0); // Estado para armazenar o tempo decorrido em milissegundos
  const [running, setRunning] = useState(false); // Estado para verificar se o cronômetro está rodando
  const timerRef = useRef(null); // Referência para armazenar o intervalo do cronômetro

  // Função para iniciar o cronômetro
  const startTimer = () => {
    if (!running) { // Verifica se o cronômetro não está rodando
      setRunning(true); // Define o estado como rodando
      timerRef.current = setInterval(() => { // Inicia o intervalo
        setTime(prevTime => prevTime + 10); // Incrementa o tempo a cada 10 milissegundos
      }, 10); // Intervalo de 10 milissegundos
    }
  };

  // Função para pausar o cronômetro
  const stopTimer = () => {
    if (running) { // Verifica se o cronômetro está rodando
      setRunning(false); // Define o estado como não rodando
      clearInterval(timerRef.current); // Limpa o intervalo
    }
  };

  // Função para reiniciar o cronômetro
  const resetTimer = () => {
    setRunning(false); // Define o estado como não rodando
    clearInterval(timerRef.current); // Limpa o intervalo
    setTime(0); // Reseta o tempo para 0
  };

  // Função para formatar o tempo em minutos, segundos e milissegundos
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}:${milliseconds < 100 ? `0${milliseconds}` : milliseconds}`;
  };

  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Cronômetro</Text> 
      <Text style={styles.timer}>{formatTime(time)}</Text> 
      <View style={styles.buttonContainer}> 
        <TouchableOpacity style={[styles.button, styles.startButton]} onPress={startTimer}> 
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.pauseButton]} onPress={stopTimer}> 
          <Text style={styles.buttonText}>Pausar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetTimer}> 
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    backgroundColor: '#fff', // Cor de fundo branca
  },
  title: {
    fontSize: 32, // Tamanho da fonte do título
    fontWeight: 'bold', // Negrito
    marginBottom: 20, // Margem inferior
  },
  timer: {
    fontSize: 48, // Tamanho da fonte do cronômetro
    marginBottom: 20, // Margem inferior
  },
  buttonContainer: {
    flexDirection: 'row', // Alinha os botões em uma linha
    justifyContent: 'space-between', // Espaça os botões igualmente
    width: '80%', // Largura do container dos botões
  },
  button: {
    flex: 1, // Cada botão ocupa o mesmo espaço
    alignItems: 'center', // Centraliza o texto do botão
    padding: 10, // Espaçamento interno
    margin: 5, // Espaçamento externo
    borderRadius: 5, // Bordas arredondadas
  },
  startButton: {
    backgroundColor: '#4CAF50', // Cor de fundo verde
  },
  pauseButton: {
    backgroundColor: '#FFC107', // Cor de fundo amarela
  },
  resetButton: {
    backgroundColor: '#F44336', // Cor de fundo vermelha
  },
  buttonText: {
    fontSize: 18, // Tamanho da fonte do texto do botão
    color: '#fff', // Cor do texto branca
  },
});

