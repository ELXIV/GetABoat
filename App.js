import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Boat from './components/Boat';

export default function App() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto"/>
        <ScrollView>
          <Text style={styles.title}>GetABoat - For Sale</Text>
            <Boat name="Sea Ray 500 Sundancer"
                   description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                   icon_name="sailboat"
                   poster={require("./img/sea_ray.jpg")}
                   price="1,399"/>


            <Boat name="Four Winns Horizon 180"
                   description="A sporty look and refined details truly set the Horizon 180 above all others."
                   icon_name="sailboat"
                   poster={require("./img/four_winns.jpg")}
                   price="1,700"/>

            <Boat name="Flipper 640 ST"
                   description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                   icon_name="sailboat"
                   poster={require("./img/flipper.jpg")}
                   price="1,900"/>

            <Boat name="Princess V48"
                   description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                   icon_name="sailboat"
                   poster={require("./img/princess.jpg")}
                   price="2,000"/>

            <Boat name="Bayliner 175 Bowrider"
                  description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                  icon_name="sailboat"
                  poster={require("./img/bayliner.jpg")}
                  price="1,600"/>

            <Boat name="Fairline Targa 47"
                  description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                  icon_name="sailboat"
                  poster={require("./img/fairline.jpg")}
                  price="1,500"/>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "skyblue",
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 30,
        textAlign: "center",
        color: "white"

    },

});
