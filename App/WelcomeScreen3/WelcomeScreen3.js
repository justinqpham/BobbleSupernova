//
//  WelcomeScreen3
//  BobbleWebApp
//
//  Created by Justin Pham.
//  Copyright © 2018 bobbleSports. All rights reserved.
//

import React from "react"
import { Animated, Easing, Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"


export default class WelcomeScreen3 extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
		this.state = {
			enterbuttoniconButtonScale: new Animated.Value(-1),
		}
	}

	componentDidMount() {
	
		this.startAnimationTwo()
	}

	onEnterButtonIconPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("ButtonBoard3")
	}

	startAnimationTwo() {
	
		// Set animation initial values to all animated properties
		this.state.enterbuttoniconButtonScale.setValue(0)
		
		// Configure animation and trigger
		Animated.parallel([Animated.parallel([Animated.timing(this.state.enterbuttoniconButtonScale, {
			duration: 1000,
			easing: Easing.bezier(0.42, 0, 0.58, 1),
			toValue: 1,
		})])]).start()
	}

	render() {
	
		return <View
				style={styles.welcomescreen3View}>
				<View
					style={styles.viewView}>
					<Image
						source={require("./../../assets/images/bobblesportslogo.png")}
						style={styles.bobblesportslogoImage}/>
					<Text
						style={styles.turnOnSoundText}>Turn on sound!</Text>
					<Text
						style={styles.yourButtonPressesText}>Your button presses will be combined with reactions from other fans to create a collective crowd audio stream delivered to your device.  {"\n"}{"\n"}</Text>
					<Text
						style={styles.tapButtonsFasterFText}>Tap buttons faster for a more intense reaction!</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Animated.View
						style={[{
							transform: [{
								scale: this.state.enterbuttoniconButtonScale.interpolate({
									inputRange: [-1, 0, 1],
									outputRange: [1, 1, 0.8],
								}),
							}],
						}, styles.enterbuttoniconButtonAnimated]}>
						<Image
								source={require("./../../assets/images/enterbutton.png")}
								style={styles.enterbuttoniconButtonImage}/>
						<TouchableOpacity
							onPress={this.onEnterButtonIconPressed}
							style={styles.enterbuttoniconButton}>
							
						</TouchableOpacity>
					</Animated.View>
					<Text
						style={styles.privacyPolicyTerText}>Privacy Policy | Terms of Service</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	welcomescreen3View: {
		backgroundColor: "rgb(94, 94, 94)",
		flex: 1,
		alignItems: "center",
	},
	viewView: {
		backgroundColor: "rgb(198, 13, 13)",
		width: 426,
		height: 899,
		alignItems: "center",
	},
	bobblesportslogoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 212,
		height: 77,
		marginTop: 78,
	},
	turnOnSoundText: {
		color: "white",
		fontFamily: "Montserrat-Bold",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		marginTop: 99,
	},
	yourButtonPressesText: {
		color: "white",
		fontFamily: "Montserrat-Light",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		marginLeft: 57,
		marginRight: 51,
		marginTop: 79,
	},
	tapButtonsFasterFText: {
		color: "white",
		fontFamily: "Montserrat-Medium",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		marginLeft: 40,
		marginRight: 34,
		marginTop: 73,
	},
	enterbuttoniconButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	enterbuttoniconButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: "100%",
		height: "100%",
	},
	enterbuttoniconButtonImage: {
		resizeMode: "contain",
		// width: 141,
		// height: 140,
		// marginRight: 139,
		// marginBottom: 56,
	},
	enterbuttoniconButtonAnimated: {
		alignSelf: "flex-end",
		width: 141,
		height: 140,
		marginRight: 139,
		marginBottom: 56,
	},
	privacyPolicyTerText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Montserrat-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 22,
	},
})
