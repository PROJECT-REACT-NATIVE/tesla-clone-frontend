import { StyleSheet } from "react-native";


export const Styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        height: "100%",
    },
    titles: {
        marginTop: "30%",
        width: "100%",
        alignItems: "center",
    },
    title: {
        fontSize: 40,
        fontWeight: "500",
    },
    subTitle: {
        fontSize: 16,
        color: "black",
        fontWeight: "500",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
    },
    buttonContainer: {
        position: "absolute",
        bottom: 50,
        width: '100%',
    },
    subTitleCTA: {
        textDecorationLine: 'underline',
        color: '#5c5e62'
    }
});