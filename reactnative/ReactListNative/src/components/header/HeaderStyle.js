import { StyleSheet } from "react-native";

export const HeaderStyle = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerText: {
        width: '30%',
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: 24,
        color: 'white',
        borderBottomWidth: 3,
        borderBottomStyle: 'solid',
        borderBottomColor: '#599c6b',
    }
})