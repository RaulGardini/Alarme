import { Background } from "@react-navigation/elements";
import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default class AppHeader extends React.Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:0.25,
        justifyContent:"center",
        alignItems:"center",
        //backgroundColor: "pink",
        width: "100%",
    },
    title:{
        fontSize: 45
    }
})