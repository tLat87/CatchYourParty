import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const CARD_COUNT = 10;

const generateColors = [
    'rgba(142,249,252,0.9)',
    'rgba(142,252,204,0.9)',
    'rgba(142,252,157,0.9)',
    'rgba(215,252,142,0.9)',
    'rgba(252,252,142,0.9)',
    'rgba(252,208,142,0.9)',
    'rgba(252,142,142,0.9)',
    'rgba(252,142,239,0.9)',
    'rgba(204,142,252,0.9)',
    'rgba(142,202,252,0.9)',
];

const InitialScreen = ({navigation}) => {
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true,
            }),
        ).start();

        const timeout = setTimeout(() => {
            navigation.replace('Welcome');
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    const rotateY = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.circle, { transform: [{ rotateY }] }]}>
                {Array.from({ length: CARD_COUNT }).map((_, index) => {
                    const angle = (360 / CARD_COUNT) * index;
                    const rad = (angle * Math.PI) / 180;
                    const radius = 100;

                    const x = Math.cos(rad) * radius;
                    const z = Math.sin(rad) * radius;

                    return (
                        <Animated.View
                            key={index}
                            style={[
                                styles.card,
                                {
                                    backgroundColor: generateColors[index],
                                    transform: [
                                        { perspective: 1000 },
                                        { rotateY: `${angle}deg` },
                                        { translateX: x },
                                        { scale: 1 },
                                    ]

                                },
                            ]}
                        />
                    );
                })}
            </Animated.View>
        </View>
    );
};

export default InitialScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 200,
        height: 200,
        position: 'relative',
        transformStyle: 'preserve-3d',
    },
    card: {
        position: 'absolute',
        width: 60,
        height: 90,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#fff',
    },
});
