import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ImageBackground,
    Image,
} from 'react-native';
import Share from 'react-native-share';

const description = {
    title: 'Catch Your Party Chance',
    content: `Catch Your Party Chance is a game that will fill your party with excitement, laughter and unexpected challenges. 
Truth, action or challenge? Choose and the game begins!

Features:
• Vivid game modes
• Ability to create your own cards
• A unique style for each player`,
};

const AboutApp = ({ navigation }) => {
    const handleShare = async () => {
        try {
            await Share.open({
                message: `Catch Your Party Chance — the best party game! 🎉\n\n${description.content}`,
            });
        } catch (error) {
            console.log('Share cancelled or failed', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                    <ImageBackground
                        style={styles.bbutton}
                        source={require('../assets/photos/back.png')}
                        resizeMode="stretch"
                    >
                        <Image source={require('../assets/photos/bxs_uparrow.png')} />
                    </ImageBackground>
                </TouchableOpacity>
                <ImageBackground
                    style={styles.button}
                    source={require('../assets/photos/Rectangle6.png')}
                    resizeMode="stretch"
                >
                    <Text style={styles.buttonText}>ABOUT THE GAME</Text>
                </ImageBackground>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>{description.title}</Text>
                <Text style={styles.content}>{description.content}</Text>



                <TouchableOpacity onPress={handleShare}>
                    <ImageBackground
                        style={styles.button}
                        source={require('../assets/photos/Rectangle6.png')}
                        resizeMode="stretch"
                    >
                        <Text style={styles.buttonText}>ShareS</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    card: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        marginVertical: 20,
        shadowRadius: 10,
        elevation: 5,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        fontFamily: 'MontserratAlternates-BoldItalic',
    },
    content: {
        fontSize: 14,
        fontFamily: 'MontserratAlternates-BoldItalic',
        lineHeight: 22,
        color: '#333',
    },
    bbutton: {
        width: 50,
        height: 60,
        marginTop: 50,
        alignSelf: 'center',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 250,
        height: 60,
        marginTop: 50,
        alignSelf: 'center',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    shareButton: {
        backgroundColor: '#2ecc71',
        marginTop: 30,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    shareButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'MontserratAlternates-BoldItalic',
    },
});

export default AboutApp;
