import { StyleSheet } from "react-native";

export const FormTaskStyle = StyleSheet.create({
    formTaskBox: {
        width: '100%',
        // height: 200,
        paddingTop: 15,
        paddingBottom: 15,
        //borderWidth: 3,
        //borderStyle: 'solid',
        // borderColor: 'red',

    },

    taskInputName: {
        width: '100%',
        height: 40,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 8,
    },

    taskButton: {
        width: '100%',
        height: 40,
        padding: 10,
        marginTop: 10,
        backgroundColor: '#60a771',
        borderRadius: 8,
    },

    taskButtonText: {
        color: 'white',
        textAlign: 'center',
    }
});