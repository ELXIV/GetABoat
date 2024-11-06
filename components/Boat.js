import {Text, View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import React from "react";

const Boat = ({name, description, icon_name, poster}) => {
    return(
        <View style={styles.boat} >
            <Text style={styles.heading}><Icon name={icon_name} size={30}/> {name}</Text>
            <Image style={styles.image} source={poster}/>
            <Text style={styles.text}>{description}</Text>
            <Text>{"\n"}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    boat: {
        borderColor: "#0e73bf",
        borderWidth: 2,
        maxWidth: 375,
        backgroundColor: "#0a4f83",
        alignSelf: "center",
        marginVertical: 10,

    },

    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "white",
    },

    text: {
        color: "white",
    },

    image: {
        height: 300,
        width: 350,
        borderColor: "#0e73bf",
        borderWidth: 2,
        alignSelf: 'center',
    }
});

export default Boat;




