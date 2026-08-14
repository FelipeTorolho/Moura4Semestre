import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { FormTaskStyle } from "./FormTaskStyle"
import { useState, useContext } from "react"
import { TaskContext } from "../../context/TaskContext"

export const FormTask = () => {
  // const [taskValue, setTaskValue] = useState("");
  const { postTask, taskValue, setTaskValue, editMode, setEditMode, setIdToEdit, idToEdit, putTaskConfirm } = useContext(TaskContext);

  const saveTask = async () => {
    if (taskValue.trim() === "") {
      Alert.alert("Atenção", "Digite uma tarefa antes de cadastrar.");
      return;
    }

    await postTask({ descricao: taskValue });

    Alert.alert("Título da janela", `Tarefa: ${taskValue} cadastrada com sucesso`, [
      {
        text: "OK",
        onPress: () => { }
      },
    ]);

    setTaskValue(""); // limpa o input depois de cadastrar
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

      {/* Salvar */}
      <TouchableOpacity
        style={FormTaskStyle.taskButton}
        onPress={() => {
          if (editMode) {
            const salvou = putTaskConfirm({
              id: idToEdit,
              descricao: taskValue
            });
            if (salvou)
              Alert.alert("Editar", `${taskValue} foi editado com sucesso`, [{ text: "Ok" }]);
            else {  
              Alert.alert("Editar", `Erro ao editar`, [{ text: "Ok" }])
          }
        } else {
            saveTask();
          }
        }}
      >

      <Text style={FormTaskStyle.taskButtonText}>Salvar</Text>
    </TouchableOpacity>


      {/* Cancelar */ }
  {
    editMode && (
      <TouchableOpacity
        style={FormTaskStyle.taskButton}
        onPress={() => {
          setTaskValue("")//zera o dado do formulário
          setEditMode(false)//sai do modo de edição
          setIdToEdit(0)//zera o id que iria editar
        }}>

        <Text style={FormTaskStyle.taskButtonText}>Cancelar</Text>
      </TouchableOpacity>

    )
  }
    </View >
  )
}
