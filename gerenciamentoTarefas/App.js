import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
    const [tarefa, setTarefa] = useState('');
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        carregarTarefas();
    }, []);

    const carregarTarefas = async () => {
        try {
            const tarefasSalvas = await AsyncStorage.getItem('tarefas');
            if (tarefasSalvas) {
                setTarefas(JSON.parse(tarefasSalvas));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const adicionarTarefa = async () => {
        if (tarefa.length > 0) {
            const novasTarefas = [...tarefas, tarefa];
            setTarefas(novasTarefas);
            await AsyncStorage.setItem('tarefas', JSON.stringify(novasTarefas));
            setTarefa('');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Tarefas</Text>
            <TextInput
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                value={tarefa}
                onChangeText={setTarefa}
            />
            <TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
                <Text style={styles.textoBotao}>Adicionar Tarefa</Text>
            </TouchableOpacity>
            <FlatList
                data={tarefas}
                renderItem={({ item }) => (
                    <View style={styles.caixaTarefa}>
                        <Text>{item}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 22,
    },
    input: {
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        width: '80%',
        alignSelf: 'center'
    },
    botao: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 10,
        width: '80%',
        alignSelf: 'center'
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
    },
    caixaTarefa: {
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginVertical: 5,
    },
});

export default App;
