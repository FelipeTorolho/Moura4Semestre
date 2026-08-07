import { Text, View } from "react-native"
import{ TaskItemStyle } from "./TaskItemStyle"

export const TaskItem = () => {
  return (
    <View style={TaskItemStyle.cardBox}>
        <Text style={TaskItemStyle.textBox}>TaskItem Component</Text>
    </View>

    
  )
}