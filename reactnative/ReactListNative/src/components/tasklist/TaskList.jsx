import { ScrollView } from "react-native"
import{ TaskListStyle } from "./TaskListStyle"
import { TaskItem } from "../taskitem/TaskItem"

export const TaskList = () => {
  return (
    <ScrollView 
      style={TaskListStyle.taskListContainer}
      contentContainerStyle={TaskListStyle.taskListContent}
    >
        <TaskItem />
        <TaskItem />
        <TaskItem />
    </ScrollView>
  )
}