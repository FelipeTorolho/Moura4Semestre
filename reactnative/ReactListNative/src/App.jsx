import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Styles } from './Styles';
import { Header } from './components/header/Header';
import { FormTask } from './components/formtask/FormTask';
import { TaskList } from './components/tasklist/TaskList';
export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={Styles.safeContainer}>
        <View style={Styles.container}>

          <Header />
          <FormTask />
          <TaskList />


          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


