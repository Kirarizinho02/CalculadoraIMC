import { Text, View } from 'react-native';  

const IdealWeight = ({ altura }) => {
    const alturaMetros = parseFloat(altura) / 100;
    const pesoIdealMin = 18.5 * (alturaMetros * alturaMetros);
    const pesoIdealMax = 24.9 * (alturaMetros * alturaMetros); 

    return (
        <View>
            <Text style={styles.pesoIdeal}>
                Seu peso ideal está entre {pesoIdealMin.toFixed(2)} kg e {pesoIdealMax.toFixed(2)} kg.
            </Text>
        </View>
    );
};

const styles = {
    pesoIdeal: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        color: '#333',
    },
};

export default IdealWeight;