import React from 'react';
import { View, Text, Button } from 'react-native';

const PresentationPage = () => {
    function onPressLearnMore() {

    }
    return (
        <>
            <View>
                <Text>Bem vindo ao app do profissional</Text>
                <Text>Recebe e seleciona os serviços que deseja, criando assim sua propria conta</Text>
                <Button
                    onPress={onPressLearnMore}
                    title="Tenho uma conta"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>

        </>
    )
}

export default PresentationPage