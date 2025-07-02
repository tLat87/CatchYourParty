import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
    {
        title: 'GRAB YOUR CHANCE TO PARTY!',
        description: `Gather with friends, choose colors,\ndraw cards and complete tasks.\nTruth, action or challenge - you will\nonly find out when it is your turn`,
        backgroundColor: '#F4B731',
        buttonText: 'NEXT',
    },
    {
        title: 'ADD PLAYERS',
        description: 'Enter names, choose colors —\nevery player has their own style!',
        backgroundColor: '#2D5387',
        buttonText: 'Ok',
    },
    {
        title: 'SELECT MODE',
        description: `Choose what will be in the\ngame: truth, action,\nchallenges or a full mix.\nIt will be fun either way!`,
        backgroundColor: '#D3476B',
        buttonText: 'Continue',
    },
];

const WelcomeScreen = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            navigation.navigate('HomeScreen');
        }
    };

    const renderItem = ({ item }) => (
        <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>{item.buttonText}</Text>
            </TouchableOpacity>
        </View>
    );

    const renderIndicators = () => (
        <View style={styles.indicatorContainer}>
            {slides.map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.indicator,
                        { backgroundColor: index === currentIndex ? '#000' : '#fff' },
                    ]}
                />
            ))}
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={slides}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                ref={flatListRef}
                onMomentumScrollEnd={(e) => {
                    const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(newIndex);
                }}
            />
            {renderIndicators()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        width,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    title: {
        fontSize: 22,
        fontFamily: 'MontserratAlternates-BoldItalic',
        // fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'MontserratAlternates-BoldItalic',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
        position: 'absolute',
        bottom: 100,
        width: '100%',
    },
    indicator: {
        width: 40,
        height: 12,
        borderRadius: 3,
        marginHorizontal: 5,
    },
});

export default WelcomeScreen;
