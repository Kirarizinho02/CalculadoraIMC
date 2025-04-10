import React from "react";
import { Text, StyleSheet } from "react-native";

const Result = ({ imc }) => {
    return (
        <Text style={styles.result}> Seu IMC é: {imc} </Text>
    );
};

const styles = StyleSheet.create({
    result: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 20,
        color: '#333',
    },
});

export default Result;