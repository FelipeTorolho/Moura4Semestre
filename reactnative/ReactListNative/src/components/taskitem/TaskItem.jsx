import { Text, View, TouchableOpacity, Image } from "react-native"
import { TaskItemStyle } from "./TaskItemStyle"
import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"

export const TaskItem = ({ id, descricao }) => {

  const { deleteTask, setTaskValue, setEditMode, setIdToEdit } = useContext(TaskContext)

  return (
    <View style={TaskItemStyle.cardBox}>
      <Text style={TaskItemStyle.textBox}>{descricao}</Text>

      <View style={TaskItemStyle.iconsContainer}>
        <TouchableOpacity style={TaskItemStyle.iconButton} 
        onPress={() => { 
          // preenche o state global, dai ja aparece no formulario
          
          setTaskValue(descricao)
          setEditMode(true)
          setIdToEdit(id)     
        }}
        >
          <Image
            source={require('../../../assets/Vector.png')}
            style={TaskItemStyle.iconImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={TaskItemStyle.iconButtonTrash}
          onPress={() => {
            deleteTask(id);
          }
          }>
          <Image
            source={require('../../../assets/Lixeira.png')}
            style={TaskItemStyle.iconImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}