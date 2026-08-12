import { Text, View, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { TaskItemStyle } from "./TaskItemStyle"

export const TaskItem = () => {
  return (
    <View style={TaskItemStyle.cardBox}>
        <Text style={TaskItemStyle.textBox}>Estudar React Native</Text>

        <View style={TaskItemStyle.iconsContainer}>
            <TouchableOpacity style={TaskItemStyle.iconButton} onPress={() => {}}>
                <Ionicons name="create-outline" size={18} color="#9BB8ED" />
            </TouchableOpacity>

            <TouchableOpacity style={TaskItemStyle.iconButtonTrash} onPress={() => {}}>
                <Ionicons name="trash-outline" size={18} color="#D46E75" />
            </TouchableOpacity>
        </View>
    </View>
  )
}