import React from "react";
import { Text, StyleSheet, View, SafeAreaView, Platform, StatusBar, TouchableOpacity, Switch } from "react-native";
import AppHeader from "../components/appheader";
import { TextInput } from "react-native-gesture-handler";
export default class ConfgAlarme extends React.Component {
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
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <AppHeader title={"Horário do alarme"} />
                <View style={styles.linha}>
                    <Text style={styles.alarmeText}>17:00</Text>
                    <Switch
                        style={{
                            transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
                        }}
                        trackColor={{ false: "#3e3e3", true: "#0219fa" }}
                        thumbColor={this.state.isEnabled ? "#767577" : "#000"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => this.toggleSwitch()}
                        value={this.state.isEnabled}
                    />
                </View>
                <View style={styles.linha2}>
                    <View style = {styles.allDaysContainer}>
                        <Text style={styles.switchText}>Todos os dia da semana</Text>
                        <Switch
                            style={{
                                transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
                            }}
                            trackColor={{ false: "#3e3e3", true: "#0219fa" }}
                            thumbColor={this.state.isEnabled ? "#767577" : "#000"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => this.toggleSwitch()}
                            value={this.state.isEnabled}
                        />
                    </View>
                    <View style = {styles.containerButtonsDay}>
                        <TouchableOpacity style={styles.button}>
                            <Text>S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>T</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>Q</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>Q</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>D</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.nomedoalarme}>
                    <Text style={styles.switchText}>Nome do alarme</Text>
                    <TextInput style={styles.nomedoalarmeInput}>Nome do alarme</TextInput>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "ceter"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    linha: {
        flex: 0.20,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        borderBottomColor: "Black",
        borderBottomWidth: 7,
        

    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        width: 51.3,
        padding: 9,
        borderRadius: 25,
        //marginTop: 90,
        //alignSelf: "center",
    },
    linha2: {
        flex: 0.25,
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        borderBottomColor: "Black",
        borderBottomWidth: 7,
        //backgroundColor: "green",
    },
    nomedoalarme: {
        alignItems: "center",
        flex: 0.10


    },
    nomedoalarmeInput: {
        fontSize: 20,
        borderWidth: 2,
        width: "60%",
        borderColor: "black",
        textAlign: "center",
        color: "#767577",
        marginTop: 10
    },
    switchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 200,
        margin: 50
    },
    switchText: {
        fontSize: 25
    },
    containerButtonsDay: {
        flexDirection: "row",
        width: "100%",
        //backgroundColor: "pink",
        justifyContent: "center",

    },
    allDaysContainer: {
        flexDirection: "row",
        //backgroundColor: "pink",
        justifyContent: "space-between",
        alignItems : "center",
        width: "100%",
        padding: 5
    },
    alarmeText: {
        fontSize: 60
    }
})