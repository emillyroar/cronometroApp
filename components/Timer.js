import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const interval = useRef(null);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  };

  const start = () => {
    if (!running) {
      setRunning(true);
      interval.current = setInterval(() => setTime(prev => prev + 10), 10);
    }
  };

  const pause = () => {
    clearInterval(interval.current);
    setRunning(false);
  };

  const reset = () => {
    clearInterval(interval.current);
    setRunning(false);
    setTime(0);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.time}>{formatTime(time)}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button, styles.start]} onPress={start}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.pause]} onPress={pause}>
          <Text style={styles.buttonText}>Pausar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.reset]} onPress={reset}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { alignItems: 'center' },
  time: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 30,
  },
  buttons: { flexDirection: 'row', gap: 10 },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  start: {
    backgroundColor: '#333333',
  },
  pause: {
    backgroundColor: '#666666',
  },
  reset: {
    backgroundColor: '#E63946',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});
