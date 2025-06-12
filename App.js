import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import Timer from './components/Timer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/clock.png')} style={styles.icon} />
      <Text style={styles.title}>Cronômetro</Text>
      <Timer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f4f8' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#333', marginBottom: 20 },
  icon: { width: 80, height: 80, marginBottom: 10 },
});
