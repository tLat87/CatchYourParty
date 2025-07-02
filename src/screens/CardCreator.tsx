import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet, ImageBackground, Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "@reduxjs/toolkit/query";
import {addCard, removeCard} from "../redux/slices/cardSlice.ts";

const CardCreator = ({navigation}) => {
    const [text, setText] = useState('');
    const [selectedType, setSelectedType] = useState<CardType | null>(null);

    const cards = useSelector((state: RootState) => state.card.cards);
    const dispatch = useDispatch();

    const saveCard = () => {
        if (!text.trim() || !selectedType) return;

        const newCard: Card = {
            id: Date.now(),
            text,
            type: selectedType,
        };

        dispatch(addCard(newCard));
        setText('');
        setSelectedType(null);
    };

    const deleteCard = (id: number) => {
        dispatch(removeCard(id));
    };

    const renderCard = ({ item }: { item: Card }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.type.replace('_', ' ')}</Text>
            <Text style={styles.cardText}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteCard(item.id)} style={styles.deleteBtn}>
                <Image source={require('../assets/photos/uiw_delete.png')} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 100,}}>
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
                    <Text style={styles.buttonText}>CREATE</Text>
                </ImageBackground>
            </View>
            <Text style={styles.title}>WRITE THE TASK YOU WANT</Text>

            <TextInput
                style={styles.input}
                multiline
                value={text}
                placeholder="Enter your task..."
                onChangeText={setText}
            />

            <View style={styles.buttonRow}>
                {(['TRUTH_MODE', 'MODE_OF_ACTION', 'CALL_MODE'] as CardType[]).map((type) => (
                    <TouchableOpacity
                        key={type}
                        style={[
                            styles.typeBtn,
                            selectedType === type && styles.activeBtn,
                        ]}
                        onPress={() => setSelectedType(type)}
                    >
                        <Text style={styles.btnText}>{type.replace('_', ' ')}</Text>
                    </TouchableOpacity>
                ))}
            </View>


            <TouchableOpacity onPress={saveCard}>
                <ImageBackground
                    style={styles.button}
                    source={require('../assets/photos/Rectangle6.png')}
                    resizeMode="stretch"
                >
                    <Text style={styles.buttonText}>SAVE CARD</Text>
                </ImageBackground>
            </TouchableOpacity>

            <FlatList
                data={cards}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCard}
                contentContainerStyle={{ marginTop: 20 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20, flex: 1, backgroundColor: '#fff' },
    title: { fontWeight: 'bold', fontSize: 18, marginBottom: 12, fontFamily: 'MontserratAlternates-BoldItalic', },
    input: {
        borderWidth: 2, borderColor: '#000', borderRadius: 12,
        padding: 12, minHeight: 100, marginBottom: 12, textAlignVertical: 'top',
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
    buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
    typeBtn: {
        flex: 1, marginHorizontal: 4, padding: 10, borderRadius: 6,
        backgroundColor: '#ddd', alignItems: 'center',
    },
    activeBtn: { backgroundColor: '#369192' },
    btnText: { color: '#000', fontFamily: 'MontserratAlternates-BoldItalic', textAlign: 'center',  },
    saveBtn: {
        backgroundColor: '#369192', padding: 12,
        borderRadius: 6, alignItems: 'center',
    },
    saveText: { color: '#fff', fontWeight: 'bold' },
    card: {
        backgroundColor: '#222', padding: 12, borderRadius: 8,
        marginBottom: 10, position: 'relative',
    },
    cardTitle: { color: '#369192', fontWeight: 'bold', marginBottom: 4 },
    cardText: { color: '#fff', fontFamily: 'MontserratAlternates-BoldItalic', },
    deleteBtn: { position: 'absolute', right: 8, top: 8 },
    deleteText: { fontSize: 18, color: '#ff4444' },
});

export default CardCreator;
