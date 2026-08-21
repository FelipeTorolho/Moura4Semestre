import { Link, useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Produto() {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo - Home</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    router.push("/produtos");
                }}
            >
                <Text style={styles.buttonText}>Página de Produtos</Text>
            </TouchableOpacity>

            <Link href="/perfil" style={styles.link}>
                Página de perfil
            </Link>
        </View>
    );
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
    button: {
        backgroundColor: "#232",
        padding: 15,
        borderRadius: 8,
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    link: {
        marginVertical: 15,
        color: "blue",
    },
});

