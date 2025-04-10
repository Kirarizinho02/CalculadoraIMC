import { View, TextInput, Button, StyleSheet } from "react-native";
import Result from "./Result";
import { useState } from "react";
import IdealWeight from "./IdealWeight";
import Classification from "./Classification";

const FormIMC = () => { 
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [imc, setImc] = useState(null);
    
    const calcularIMC = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
        }
    };

    return (
        <View style={styles.formContainer}>
            <TextInput 
            style={styles.input}
            placeholder="Peso (kg)"
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
            />
            <TextInput
            style={styles.input}
            placeholder="Altura (cm)"
            keyboardType="numeric"
            value={altura}
            onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} />
            {imc && <Result imc={imc} />}
            {imc && <Classification imcCalculado={imc} />}
            {imc && <IdealWeight altura={altura} />}
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        padding: 16,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default FormIMC;