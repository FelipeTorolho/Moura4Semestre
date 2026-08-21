
import { Link, useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Home() {

    const router = useRouter()

    return (


        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo - Produto</Text>

            <Link href="/produtos/12">Código: 12 | Tênis</Link>
            <Link href="/produtos/25">Código: 25 | Camiseta</Link>

            <View style={styles.botoesBox}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        router.push("/");
                    }}
                >
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>

                <Link href="/" style={styles.link}>Home</Link>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        router.back()
                    }}
                >
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    botoesBox: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    },
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