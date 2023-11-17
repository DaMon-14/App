import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    // Simulate a simple login mechanism
    try {
          // Replace this URL with your actual API endpoint
          const apiUrl = 'http://10.0.2.2:5089/api/Customers/3';

          // Making a GET request
          const response = await fetch(apiUrl);

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log ('response', data);

          // Simulate a simple login mechanism
          if (username === 'user' && password === 'password') {
            setLoggedIn(true);
            console.log('API Response:', data);
          }
        } catch (error) {
          console.error('Error:', error.message);
        }

    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
      {isLoggedIn && (
        <Text style={styles.loggedInText}>You are logged in!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  loggedInText: {
    marginTop: 16,
    color: 'green',
  },
});

export default LoginScreen;