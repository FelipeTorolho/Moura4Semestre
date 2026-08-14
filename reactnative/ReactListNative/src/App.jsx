import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Styles } from './Styles';
import { Header } from './components/header/Header';
import { FormTask } from './components/formtask/FormTask';
import { TaskList } from './components/tasklist/TaskList';
import { Footer } from './components/footer/Footer';
import { TaskProvider } from './context/TaskContext';
export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={Styles.safeContainer}>

        <TaskProvider>
          <View style={Styles.container}>
            <Header/>
            <FormTask />
            <TaskList />
            <Footer />


            <StatusBar style="auto" />
          </View>
        </TaskProvider>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}


