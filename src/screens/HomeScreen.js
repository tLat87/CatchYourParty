import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Логотип и слоган */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/photos/7222f3cfee3bbaa13eb65000ef742fd4927734ae.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.slogan}>THE PARTY STARTS HERE!</Text>
            </View>

            {/* Кнопки с фоном */}
            <TouchableOpacity onPress={() => navigation.navigate('GameRoundScreen')}>
                <ImageBackground
                    style={styles.button}
                    source={require('../assets/photos/Rectangle6.png')}
                    resizeMode="stretch"
                >
                    <Text style={styles.buttonText}>PLAY</Text>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('GameRulesScreen')}>
                <ImageBackground
                    style={styles.button}
                    source={require('../assets/photos/Rectangle6.png')}
                    resizeMode="stretch"
                >
                    <Text style={styles.buttonText}>GAME RULES</Text>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('AboutApp')} >
                <ImageBackground
                    style={styles.button}
                    source={require('../assets/photos/Rectangle6.png')}
                    resizeMode='stretch'
                >
                    <Text style={styles.buttonText}>ABOUT THE APP</Text>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('CardCreator')}>
                <ImageBackground
                    style={styles.button}
                    source={require('../assets/photos/Rectangle6.png')}
                    resizeMode="stretch"
                >
                    <Text style={styles.buttonText}>CREATE YOUR OWN CARDS</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 250,
        height: 150,
    },
    slogan: {
        color: '#d92f73',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'MontserratAlternates-BoldItalic',
        borderWidth: 2,
        borderColor: '#d92f73',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 14,
        marginTop: 12,
    },
    button: {
        width: 270,
        height: 60,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'MontserratAlternates-BoldItalic',

        fontSize: 16,
    },
});

export default HomeScreen;
