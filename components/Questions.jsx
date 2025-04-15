import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

export default function Question({questionProps, correct, nextQuestion}) {

    const { question, answer, options } = questionProps;

    const send = (userAnswer) => {

        if(userAnswer === options[answer]) {
            correct();
        }

        nextQuestion();
    }

    return <View>
        <Text style={styles.question}>{question}</Text>
        <View style={styles.options}>
            {
                options.map((option, i) => (
                    <Button key={i} onPress={() => send(option)}>
                        <Text style={styles.buttonText}>{option}</Text>
                    </Button>
                ))
            }
        </View>
    </View>
}

const styles = StyleSheet.create({
    question: {
        fontWeight: 600,
        fontSize: 25,
        textAlign:"center",
        marginBottom:30
    },
    option: {
        backgroundColor: "rgb(53, 138, 204)",
        borderRadius: 10,
        height:40,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        textAlign:"center",
        textAlignVertical:"center",
    },
    options: {
        gap:6
    },
    buttonText: {
        color:"white",
        fontWeight:600
      },
})