import { StyleSheet, View } from "react-native";

export default function Layout({children}) {

    return <View style={styles.container}>
        {children}
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:50,
  },
});