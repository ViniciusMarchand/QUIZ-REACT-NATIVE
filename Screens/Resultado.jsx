import { StyleSheet, Text, View } from "react-native";

export default function Resultado({points, user}) {

    const { name, email } = user;
    
    return <View style={styles.container}>
        <Text style={styles.text}>🎉Obrigado por jogar {name}!🎉 </Text>
        <Text style={styles.text}>Sua pontuação: {points}</Text>

        {/* Só de enfeite */}
        <Text style={styles.text}>O resultado será enviado para o seu email:</Text>
        <Text style={styles.text}>{email}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
        gap:10
    },
    text: {
        fontSize:16,
        textAlign:"center"
    }
});