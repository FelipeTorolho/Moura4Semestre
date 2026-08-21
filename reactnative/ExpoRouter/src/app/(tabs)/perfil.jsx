import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Perfil() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo - Perfil</Text>

            <Link href="/produtos" style={styles.link}>Página de Produtos</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    link: {
        marginVertical: 15,
        color: "blue"
    },
    button: {
        backgroundColor: "#222",
        padding: 15,
        borderRadius: 8,
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
