
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Texto from '../../../components/texto';

export default function Detalhes ({nome, nomefazenda, imagemfazenda, descricao, preco}) {
    return <>
    <Texto style={estilos.nome}>{nome}</Texto>
    <View style={estilos.fazeda}>
            <Image source={logo} style={estilos.imagemfazenda}/>
            <Texto style={estilos.nomeFazenda}>{nomefazenda}</Texto>
    </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>

</>
}
const estilos = StyleSheet.create({
    nome: {
      color: "#464646",
      fontSize: 26,
      lineHeight: 42,
      fontWeight: 'bold',
    },
    fazenda: {
      flexDirection: "row",
      paddingVertical: 12,
    },
    imagemFazenda: {
      width: 32,
      height: 32,
    },
    nomeFazenda: {
      fontSize: 16,
      lineHeight: 26,
      marginLeft: 12,
    },
    descricao: {
      color: "#A3A3A3",
      fontSize: 16,
      lineHeight: 26,
    },
    preco: {
      color: "#2A9F85",
      fontWeight: "bold",
      fontSize: 26,
      lineHeight: 42,
      marginTop: 8,
    },

})