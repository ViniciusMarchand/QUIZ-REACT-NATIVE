import { StyleSheet, TouchableOpacity } from "react-native";

export default function Button({children, ...props}) {
    return <TouchableOpacity style={styles.button} {...props}>
        {children}
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: "rgb(53, 138, 204)",
        borderRadius: 10,
        height:40,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
});