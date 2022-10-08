import React from "react";
import { Image, StyleSheet, Dimensions, Text, View} from 'react-native'
import Texto from "../components/texto";

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

 <style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&display=swap');
</style>

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Texto style={estilos.titulo}>Detalhes da cesta</Texto>
        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta de verduras</Texto>
            <View style={estilos.fazeda}>
                <Image source={logo} style={estilos.imagemfazenda}/>
                <Text style={estilos.nomeFazenda}>Fazenda do João</Text>
            </View>
            <Texto style={estilos.descricao}>Uma cesta de produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Texto>
            <Texto style={estilos.preco}>R$ 25,00</Texto>
        </View>

    </>
}

const width = Dimensions.get('screen').width;


const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578/768 * width,
        fontFamily: "RalewayRegular",

    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        color: "white",
        lineHeight: 26,
        padding: 16,
        fontWeight: "bold"

    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 42,
        color: "#464646",
        marginLeft: 12,
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,

    },
    imagemfazenda: {
        width: 32,
        height: 32
    },
    descricao: {
        fontSize: 16,
        lineHeight: 42,
        color: "#A3A3A3A3",
        
    },
    preco: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
    }



})
