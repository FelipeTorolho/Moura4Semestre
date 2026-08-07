import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header/header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Header />
          
          <Text style={styles.texto1}>Felipe Torolho</Text>
          <Text style={styles.texto2}>w vô</Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    width: '100%',
    height: '100%',
    borderColor: 'red',
    borderWidth: 3,
    borderStyle: 'dotted',
     backgroundColor: '#ffffff',
  },
  texto1 : {
    color: 'red'
  },
  texto2 : {
    color: 'blue'
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,//mesma coisa que 100%
//     backgroundColor: '#ffffff',
//     borderWidth: 3,
//     borderStyle: 'solid',
//     borderColor: 'red',
//   },
// });
