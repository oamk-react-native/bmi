import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(0);

  function calculate() {
    const heightwithdigit = height.replace(',','.');
    const result = weight / Math.pow(heightwithdigit,2);
    setBmi(result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Weight</Text>
      <TextInput style={styles.field} onChangeText={text => setWeight(text)} value={weight} keyboardType='decimal-pad'/>
      <Text style={styles.field}>Height</Text>
      <TextInput style={styles.field} onChangeText={text => setHeight(text)} value={height} keyboardType='decimal-pad'/>
      <Text style={styles.field}>Bmi</Text>
      <Text style={styles.field}>{bmi.toFixed(1)}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  field: {
    marginBottom: 10,
  }
});
