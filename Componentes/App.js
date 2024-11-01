import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const App = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        {[1, 2, 3, 4, 5].map((buttonIndex) => (
          <TouchableOpacity
            key={buttonIndex}
            style={[
              styles.circleButton,
              selectedButton === buttonIndex && styles.circleButtonSelected,
            ]}
            onPress={() => handleButtonPress(buttonIndex)}
          >
            <Text style={styles.circleButtonText}>{buttonIndex}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.mainBox}>
        <Image style={styles.image} source={{ uri:'https://static.preparaenem.com/2023/03/representacao-grafica-de-uma-rosa-dos-ventos.jpg' }}  />
        <TouchableOpacity style={styles.bottomRightButton}>
          <Text style={styles.buttonText}>Aperte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topLeftButton}>
          <Text style={styles.buttonText}>Esquerda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topRightButton}>
          <Text style={styles.buttonText}>Direita</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Design</Text>
        <TouchableOpacity style={styles.questionButton}>
          <Text style={styles.buttonText}>?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.boxContainer}>
        {[1, 2, 3].map((boxIndex) => (
          <View key={boxIndex} style={styles.box}>
            <Text style={styles.boxText}>Box {boxIndex}</Text>
          </View>
        ))}
      </View>

      <View style={styles.circleButtonContainer}>
        {[1, 2, 3, 4].map((circleButtonIndex) => (
          <TouchableOpacity
            key={circleButtonIndex}
            style={styles.circleButton}
          >
            <Text style={styles.circleButtonText}>{circleButtonIndex}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleButtonSelected: {
    backgroundColor: '#aaa',
  },
  circleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  mainBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
    borderWidth: 5,
    borderColor: '#ddd',
    padding: 16,
    position: 'relative',
  },
  topLeftButton: {
    position: 'absolute',
    left: 10,
    top: 10,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 15,
  },
  topRightButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 15,
  },
  bottomRightButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  questionButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  box: {
    width: 130,
    height: 250,
    borderRadius: 20,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: '#000',
  },
  circleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
