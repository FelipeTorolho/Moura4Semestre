import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { FormTaskStyle } from "./FormTaskStyle"
import { useState } from "react"

export const FormTask = () => {
  const [taskValue, setTaskValue] = useState("");


  const saveTask = () => {
    console.log(taskValue)
    Alert.alert("Título da janela", `Tarefa: ${taskValue} cadastrada com sucesso`, [
      // Botão 1
      {
        text: "OK",
        onPress: () => {}
      },
    ])
  }
  return (
    <View style={FormTaskStyle.formTaskBox}>
      <TextInput
        style={FormTaskStyle.taskInputName}
        value={taskValue}
        onChangeText={(textoDigitado) => {
          setTaskValue(textoDigitado)
        }}
        placeholder="Adicione uma tarefa"
      />

      <TouchableOpacity 
      style={FormTaskStyle.taskButton} 
      onPress={() => {
        saveTask()
      }}>

        <Text style={FormTaskStyle.taskButtonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  )
}