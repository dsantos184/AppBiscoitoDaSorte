import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

const Botao = props =>{
    return(
        <TouchableOpacity onPress={props.executar} style={styles.botao}>
            <View>
                <Text style={styles.textBotao}>{props.titulo}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    botao:{
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        height:50,
        width: 300,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textBotao:
    {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default Botao; 