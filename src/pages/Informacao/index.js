import React from "react";
import { View, Text } from "react-native";

export default function Informacao({route}) {
    return (
        <View style={{marginTop:60}}>
            <Text>Nome: {route.params?.nome}</Text>
            <Text>Telefone :{route.params?.telefone}</Text>
            <Text>Endereço : {route.params?.endereco}</Text>
            <Text>Numero : {route.params?.numero}</Text>
            <Text>Profissao: {route.params?.profissao}</Text>
            <Text>Email: {route.params?.email}</Text>
        </View>
    );
} 
