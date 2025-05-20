import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

export default function HomeScreen() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');
      setJoke(res.data.joke);
    } catch {
      setJoke('Oops! Could not fetch a joke.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Funny<Text style={styles.logoAccent}>Replies</Text></Text>
      <Text style={styles.emoji}>😉</Text>

      <View style={styles.card}>
        {loading ? (
          <ActivityIndicator color="#f08c00" size="large" />
        ) : (
          <Text style={styles.jokeText}>
            {joke || 'Tap below to get a joke!'}
          </Text>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={getJoke}>
        <Text style={styles.buttonText}>Generate Response</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1d',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoAccent: {
    color: '#f08c00',
  },
  emoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#2a2a2e',
    borderRadius: 20,
    padding: 25,
    minHeight: 140,
    width: '100%',
    marginBottom: 20,
    justifyContent: 'center',
    shadowColor: '#f08c00',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 10,
  },
  jokeText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
  },
  button: {
    backgroundColor: '#f08c00',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
