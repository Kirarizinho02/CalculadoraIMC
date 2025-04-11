import  { Text, StyleSheet } from 'react-native';

const Title = () => {   
    return (
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#4aff80',
        textShadowColor: '#0f0f0f',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
});

export default Title;