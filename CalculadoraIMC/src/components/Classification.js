import { Text, StyleSheet } from "react-native";

// Componente utiliza parâmetros para receber o IMC calculado do FormIMC, então compara ele com os valores de referência
const Classification = ({ imcCalculado }) => {
    let classification = "";
    const imc = parseFloat(imcCalculado);
    if (imc < 18.5) {
        classification = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classification = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classification = "Sobrepeso";
    } else if (imc >= 30) {
        classification = "Obesidade";
    }


    // Texto que aparece na tela com a classificação do IMC abaixo do resultado
    return (
        <Text style={styles.classification}>
            Classificação: {classification}
        </Text>
    );
};


// Estilo do texto, padronizado como o resto dos componentes
const styles = StyleSheet.create({
    classification: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 20,
        color: "#333",
    },
});

export default Classification;