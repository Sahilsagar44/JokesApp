import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>😉</Text>
      <Text style={styles.title}>
        Funny<Text style={styles.highlight}>Replies</Text>
      </Text>
      <Text style={styles.version}>v1.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 70,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  highlight: {
    color: '#f08c00',
  },
  version: {
    marginTop: 20,
    color: '#666',
  },
});
