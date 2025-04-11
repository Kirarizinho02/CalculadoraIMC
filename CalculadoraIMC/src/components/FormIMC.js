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
        const alturaMetros = parseFloat(altura) / 100;
        const pesoCorrigido = parseFloat(peso.replace(",", "."));
        // Mensagem personalizada pro caso de campos sem valores.
        if (pesoCorrigido === "" || altura === "") {
            alert("Por favor preencha todos os campos.");
            return;
        }
        // Mensagem personalizada pro caso de valores inválidos.
        if (isNaN(pesoCorrigido) || isNaN(altura)) {
            alert("Por favor insira valores numéricos válidos.");
            return;
        }
        // Mensagem personalizada pro caso de valores negativos.
        if (pesoCorrigido <= 0 || altura <= 0) {
            alert("Por favor insira valores positivos.");
            return;
        }
        if (peso && altura) {
            const imcCalculado = (parseFloat(pesoCorrigido) / (alturaMetros * alturaMetros)).toFixed(2);
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
            <Button color="#4aff80" title="Calcular IMC" onPress={calcularIMC} />
            {imc && <Result imc={imc} />}
            {imc && <Classification imcCalculado={imc} />}
            {imc && <IdealWeight altura={altura} />}
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        padding: 16,
        borderWidth: 1,
        borderColor: "#ccc",
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