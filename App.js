import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Button,
    ActivityIndicator,
    StyleSheet,
} from "react-native";
import axios from "axios";

export default function App() {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false);

    // Function to fetch a joke from API
    const fetchJoke = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                "https://official-joke-api.appspot.com/random_joke"
            );
            setJoke(response.data);
        } catch (error) {
            console.error("Error fetching joke:", error);
            setJoke({
                setup: "Oops!",
                punchline: "Couldn't load joke. Try again!",
            });
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchJoke(); // Fetch joke when the app loads
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Random Joke Generator 🤣</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#007AFF" />
            ) : (
                <>
                    <Text style={styles.jokeText}>{joke?.setup}</Text>
                    <Text style={styles.punchline}>{joke?.punchline}</Text>
                </>
            )}
            <Button
                title="Get Another Joke"
                onPress={fetchJoke}
                color="#007AFF"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F8F8",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    jokeText: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 10,
    },
    punchline: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
});
