import React from "react";
import { View, Text, Button } from "react-native";

export default function Contatos({ navigation }) {
    return (
        <View style={{marginTop:60}}>
            <View>
                <Text>Nome : João</Text>
                <Text>Telefone : (19) 999999999</Text>
                <Text onPress={() => navigation.navigate('Informacao',{
                    nome: 'Joao Silva',
                    telefone: '(11) 11111111',
                    endereco: 'teste',
                    numero: '140',
                    profissao: 'Carpinteiro',
                    email: 'joaoCarpintaria@hotmail.com'

                })}>Informacao</Text>
            </View>
            <View style={{marginTop:60}}>
                <Text>Nome : Maria</Text>
                <Text>Telefone : (19) 999999999</Text>

                <Text onPress={() => navigation.navigate('Informacao',{
                    nome:'Maria Silva',
                    telefone: '(11) 222222',
                    endereco: 'teste2',
                    numero: '140',
                    profissao: 'Cozinheira',
                    email: 'mariaCarpintaria@hotmail.com'
                })}>Informacao</Text>
            </View>

        </View>
    );
}