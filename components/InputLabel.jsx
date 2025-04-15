import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputLabel({ label, type = "text", ...props }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {
                type.toLowerCase() === "text" && 
                    <TextInput 
                        style={styles.input} 
                        {...props}
                    />
            }
            {
                type.toLowerCase() === "email" &&
                    <TextInput 
                        style={styles.input} 
                        {...props}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        justifyContent:"flex-start",
        alignItems:"flex-start",

    },
    label: {
        fontSize:16,
        paddingLeft:8,
        marginBottom: 3
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        width:"100%",
        shadowOpacity: 0.1,
        shadowRadius: 24,
        elevation: 10,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.082)",
        paddingHorizontal:10
    },
});