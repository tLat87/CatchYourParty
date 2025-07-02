import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, Image} from 'react-native';

const rules = [
    {
        title: 'RULES OF THE GAME "CATCH YOUR PARTY CHANCE"',
        content: `GAME GOAL:
Complete as many tasks as possible, answer questions honestly, and grab your chance for fun adventures! The main thing is laughter, sincerity, and a little madness 😄

1. ADD PLAYERS
Enter names and choose your color — each player will be easily recognizable.

2. CHOOSE A GAME MODE
Truth: answer personal questions honestly.
Action: complete funny or silly tasks.
Challenge: get a daring or wacky mission — most often with other players.

3. PLAY IN TURNS
The app will show whose turn it is. The card is randomly selected — complete the task!`,
    },
    {
        title: 'RULES OF THE GAME "CATCH YOUR PARTY CHANCE"',
        content: `4. COMPLETE THE TURN
Click "DONE" to move on to the next player.
You can skip tasks a limited number of times (see Settings).

5. CREATE YOUR OWN CARDS
Want to make the game even cooler? Add your own unique tasks!
Choose a card type, write the text and save.

🎉 The main rule is to respect other players and enjoy the game!`,
    },
];

const GameRulesScreen = ({navigation}) => {
    const [page, setPage] = useState(0);

    const handleNext = () => {
        if (page < rules.length - 1) setPage(page + 1);
    };

    const handlePrevious = () => {
        if (page > 0) setPage(page - 1);
    };

    return (
        <View style={styles.container}>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <ImageBackground
                        style={styles.bbutton}
                        source={require('../assets/photos/back.png')}
                        resizeMode="stretch"
                    >
                        <Image source={require('../assets/photos/bxs_uparrow.png')}/>
                    </ImageBackground>
                </TouchableOpacity>
                <ImageBackground
                    style={styles.button}
                    source={require('../assets/photos/Rectangle6.png')}
                    resizeMode="stretch"
                >
                    <Text style={styles.buttonText}>GAME RULES</Text>
                </ImageBackground>
            </View>



            <View style={styles.card}>
                <Text style={styles.title}>{rules[page].title}</Text>
                <Text style={styles.content}>{rules[page].content}</Text>
            </View>

            <View style={styles.buttonContainer}>
                {page > 0 && (
                    <TouchableOpacity style={styles.button} onPress={handlePrevious}>
                        <Text style={styles.buttonText}>◀ PREVIOUS</Text>
                    </TouchableOpacity>
                )}
                {page < rules.length - 1 && (
                    <TouchableOpacity style={styles.button} onPress={handleNext}>
                        <Text style={styles.buttonText}>NEXT ▶</Text>
                    </TouchableOpacity>
                )}
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
    header: {
        alignItems: 'center',
        marginVertical: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
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
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        fontFamily: 'MontserratAlternates-BoldItalic',
    },
    content: {
        fontSize: 12,
        fontFamily: 'MontserratAlternates-BoldItalic',
        lineHeight: 22,
    },
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: '#f7f7f7',
        justifyContent: 'space-between',
        // marginTop: -20,
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
});

export default GameRulesScreen;
