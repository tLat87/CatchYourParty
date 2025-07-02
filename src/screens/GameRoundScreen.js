import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image} from 'react-native';
import {useSelector} from "react-redux";

const cards = [
    { id: 1, color: '#EEBA3E' },
    { id: 2, color: '#28507B' },
    { id: 3, color: '#369192' },
    { id: 4, color: '#aaa' },
];


const randomQuestions = [
    "❓ What was your biggest childhood fear?",
    "😳 Have you ever been really embarrassed in front of your parents? Why?",
    "🥲 When was the last time you cried? Why?",
    "❤️ Who do you find the most attractive in this group?",
    "🤐 What secret are you hiding from your friends?",
    "🙃 What is your most ridiculous hobby or habit?",
    "📱 Who do you most often Google/check on social media?",
    "🥴 Have you ever pretended to be someone else online?",
    "😅 Have you ever lied to anyone present?",
    "🫢 Is there something you have never confessed to — but are now ready to?",
    "💬 What is the strangest thing someone has written to you in direct message?",
    "📸 Have you ever sent someone “awkward” photos?",
    "🤔 What would you do if you were invisible for a day?",
    "💌 Have you ever had a sudden crush on a friend of yours?",
    "🕵️ Have you ever spied on someone - for real?"
];


const GameRoundScreen = ({ playerName = 'Player', navigation }) => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [timer, setTimer] = useState(15);

    const reduxCards = useSelector((state) => state.card.cards);


    useEffect(() => {
        if (selectedCard !== null && timer > 0) {
            const interval = setInterval(() => setTimer(t => t - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [selectedCard, timer]);

    const handleCardPress = (card) => {
        let task = '';

        if (card.id === 4 && reduxCards.length > 0) {
            const randomReduxIndex = Math.floor(Math.random() * reduxCards.length);
            task = reduxCards[randomReduxIndex].text;
        } else {
            const randomIndex = Math.floor(Math.random() * randomQuestions.length);
            task = randomQuestions[randomIndex];
        }

        setSelectedCard({ ...card, task });
        setTimer(15);
    };



    const handleNextRound = () => {
        setSelectedCard(null);
        setTimer(15);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{  position: 'absolute',
                top: 80,
                left: 20,}}>
                <ImageBackground
                    style={styles.bbutton}
                    source={require('../assets/photos/back.png')}
                    resizeMode="stretch"
                >
                    <Image source={require('../assets/photos/bxs_home.png')}/>
                </ImageBackground>
            </TouchableOpacity>
            <Text style={styles.headerText}>{playerName} — choose a card</Text>

            {selectedCard === null ? (
                <View style={styles.cardsContainer}>
                    {cards.map((card) => (
                        <TouchableOpacity
                            key={card.id}
                            style={[styles.card, { backgroundColor: card.color }]}
                            onPress={() => handleCardPress(card)}
                        >
                            {card.id === 4 && <Text style={[styles.taskHeader, {fontSize: 12, textAlign: 'center', marginTop: -20, marginBottom: 20}]}>Tap to get your questions</Text>}
                            <Image source={require('../assets/photos/ask.png')} style={{  zIndex: 9999 }} />
                        </TouchableOpacity>
                    ))}
                </View>
            ) : (
                <View style={[styles.taskCard, { backgroundColor: selectedCard.color }]}>
                    <Text style={styles.taskHeader}>Answer the question honestly, even if it's uncomfortable.Answer the question honestly, even if it's uncomfortable.</Text>

                    <View style={{ borderRadius: 12,marginBottom: 20,
                        paddingHorizontal: 12,marginTop: 20,
                        backgroundColor: '#fff', alignItems: 'center', flexDirection:'row',}}>
                        <Image source={require('../assets/photos/time.png')}/>
                        <Text style={styles.taskHeader}>{timer}s</Text>

                    </View>


                    <View style={{padding: 20, borderRadius: 12,marginBottom: 20,
                        backgroundColor: '#fff',}}>
                        <Image source={require('../assets/photos/ask.png')} style={{  zIndex: 9999 }} />

                        <Text style={styles.taskText}>{selectedCard.task}</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleNextRound}>
                        <Text style={styles.buttonText}>DONE! CONTINUE</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bbutton: {
        width: 50,
        height: 60,

        // marginTop: 50,
        alignSelf: 'center',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'MontserratAlternates-BoldItalic',
        marginBottom: 24,
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 12,
    },
    card: {
        width: 120,
        height: 180,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    cardText: {
        fontSize: 36,
        color: '#fff',
        fontFamily: 'MontserratAlternates-BoldItalic',
    },
    taskCard: {
        padding: 24,
        borderRadius: 16,

        width: '100%',
        fontFamily: 'MontserratAlternates-BoldItalic',
        alignItems: 'center',
    },
    taskHeader: {
        fontSize: 18,
        fontFamily: 'MontserratAlternates-BoldItalic',
        color: '#000',

        // marginBottom: 12,
    },
    taskText: {
        fontSize: 18,
        paddingVertical: 30,
        borderRadius: 16,

        fontFamily: 'MontserratAlternates-BoldItalic',
        color: '#000',
        textAlign: 'center',
        // marginBottom: 24,
    },
    button: {
        backgroundColor: '#2ecc71',
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'MontserratAlternates-BoldItalic',
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default GameRoundScreen;
