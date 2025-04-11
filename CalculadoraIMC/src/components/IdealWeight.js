import { Text, View } from 'react-native';  


// Verifica se o valor da altura é válido e então calcula o peso ideal mínimo e máximo do usuário
const IdealWeight = ({ altura }) => {
    if (isNaN(altura) || altura <= 0) {
        return <Text style={styles.pesoIdeal}>Por favor, insira uma altura válida.</Text>;
    }
    const alturaMetros = parseFloat(altura) / 100;
    const pesoIdealMin = 18.5 * (alturaMetros * alturaMetros);
    const pesoIdealMax = 24.9 * (alturaMetros * alturaMetros); 

    // Texto que aparece na tela após o cálculo, abaixo da classificação e com casas decimais limitadas a 2.
    return (
        <View>
            <Text style={styles.pesoIdeal}>
                Seu peso ideal é entre {pesoIdealMin.toFixed(2)} kg e {pesoIdealMax.toFixed(2)} kg.
            </Text>
        </View>
    );
};

// Estilização padronizada, muito semelhante a de classificação.
const styles = {
    pesoIdeal: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        color: '#333',
    },
};

export default IdealWeight;