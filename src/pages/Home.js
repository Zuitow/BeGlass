// App.js
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import axios from 'axios';

export default function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [passcode, setPasscode] = useState('');

  const handleRegister = () => {
    axios.post('http://localhost:3000/usuarios', { username, email, passcode })
      .then(response => {
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso');
      })
      .catch(error => {
        Alert.alert('Erro', 'Erro ao cadastrar usuário');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Passcode:</Text>
      <TextInput
        style={styles.input}
        value={passcode}
        onChangeText={setPasscode}
        secureTextEntry
      />
      <Button
        title="Cadastrar"
        onPress={handleRegister}
      />

      <View style={{marginTop: '10%'}}>
      <Button
        title="Cadastrar Produto"
        onPress={handleRegister}
      />
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});
