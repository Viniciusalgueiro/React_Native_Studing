import React from 'react'
import { Image, StyleSheet } from 'react-native'

import topo from '../../assets/topo.png'
import Texto from '../../../components/texto'


export default function Topo(){
    return <>
    <Image source = {topo} style = {estilos.topo} />
    <Texto style={estilos.titulo}>Detalhes da Cesta</Texto> 

    </>
}

const width = Dimensions.get('screen').width;

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578/768 * width,

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
    }

})