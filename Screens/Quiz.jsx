import { StyleSheet, Text, View } from "react-native"
import { questions, screens } from "../constants";
import { useEffect, useState } from "react";
import Question from "../components/Questions";

export default function Quiz({setScreen, setResults}) {

    const [questionNumber, setQuestionNumber] = useState(1);
    const [points, setPoints] = useState(0);

    const correct = () => {
        setPoints((prevValue) => prevValue + 1);
    }

    const nextQuestion = () => {
        setQuestionNumber((prevValue) => prevValue + 1);
    }

    const drawnQuestions = (() => {
        const arr = [...questions];
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.slice(0,6);
      })();    
    
    useEffect(() => {
        if(questionNumber >= drawnQuestions.length) {
            setResults(points);
            setScreen(screens.resultado);
        }
    },[questionNumber]);

    return <View style={styles.container}>
        {
            drawnQuestions.length > questionNumber ? 
            <Question 
                questionProps={drawnQuestions[questionNumber]}
                correct={correct}
                nextQuestion={nextQuestion}
            /> :
            <Text>Carregando...</Text>
        }
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%"
    },
});