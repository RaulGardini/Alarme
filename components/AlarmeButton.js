import { Background } from "@react-navigation/elements";
import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Switch } from "react-native";

export default class AlarmeButton extends React.Component {
    constructor() {
        super()
        this.state = { isEnabled: false }
    }

    toggleSwitch() {
        if (this.state.isEnabled) {
            this.setState({ isEnabled: false });
        } else {
            this.setState({ isEnabled: true });
        }
    }
    render(){
        return(
            <TouchableOpacity style = {styles.container}>
                <Text style = {styles.title}>
                    {this.props.hora}
                </Text>
                <Switch
                        style={{
                            transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
                        }}
                        trackColor={{ false: "#767577", true: "#0219fa" }}
                        thumbColor={this.state.isEnabled ? "#767577" : "#000"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => this.toggleSwitch()}
                        value={this.state.isEnabled}
                    />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 340,
        margin: 7,
        backgroundColor: "#C0C0C0",
        borderRadius: 15,
        padding: 15,
        borderWidth: 5
    },
    title:{
        fontSize: 25
    }
})