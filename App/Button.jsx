import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableWithoutFeedback,Image, Animated} from 'react-native';

import "./styles.css"; 

export default class animatedbasic extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Image 
                        source={require("./../../assets/images/enterbutton.png")}
							style={styles.enterbuttoniconButtonImage}/>
                </View>
            </View>
        )
    }
}