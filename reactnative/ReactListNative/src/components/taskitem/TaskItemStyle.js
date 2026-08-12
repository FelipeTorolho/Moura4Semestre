import { StyleSheet } from "react-native";

export const TaskItemStyle = StyleSheet.create({
    cardBox: {
        width: '100%',
        height: 50,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#31364d',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textBox: { 
        color: 'white',
        fontSize: 12,   
    },
    iconsContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    iconButton: {
        width: 28,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#9BB8ED',
        borderRadius: 6,
    },
    iconButtonTrash: {
        width: 28,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#D46E75',
        borderRadius: 6,
    }
})