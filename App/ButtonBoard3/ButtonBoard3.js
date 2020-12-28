//
//  ButtonBoard3
//  BobbleWebApp
//
//  Created by Justin Pham.
//  Copyright © 2018 bobbleSports. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class ButtonBoard3 extends React.Component {

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
	}

	// componentDidMount() {
	
		// this.startAnimationOne()
		// this.startAnimationTwo()
		// this.startAnimationThree()
		// this.startAnimationFour()
		// this.startAnimationFive()
	// }

	onBackButtonPressed = () => {
	
		this.props.navigation.goBack()
	}

	onBooButtonIconPressed = () => {
	
	}

	onLetdownButtonIconPressed = () => {
	
	}

	onLetsgoButtonIconPressed = () => {
	
	}

	onCheerButtonIconPressed = () => {
	
	}

	onClapButtonIconPressed = () => {
	
	}

	render() {
	
		return <View
				style={styles.buttonboard3View}>
				<View
					style={styles.viewView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 7,
							right: 12,
							top: 65,
							bottom: 56,
						}}>
						<TouchableOpacity
							onPress={this.onBackButtonPressed}
							style={styles.backbuttonButton}>
							<Image
								source={require("./../../assets/images/backbutton.png")}
								style={styles.backbuttonButtonImage}/>
						</TouchableOpacity>
						<View
							pointerEvents="box-none"
							style={{
								height: 192,
								marginLeft: 47,
								marginRight: 47,
								marginTop: 70,
							}}>
							<View
								style={styles.teamsboxView}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 15,
									right: 23,
									top: 41,
									height: 106,
								}}>
								<View
									pointerEvents="box-none"
									style={{
										height: 56,
										marginLeft: 4,
										marginRight: 9,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/leoneslogo.png")}
										style={styles.leoneslogoImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("./../../assets/images/tigresligo.png")}
										style={styles.tigresligoImage}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										height: 38,
										marginTop: 13,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.leonesDelEscogidoText}>Leones {"\n"}del Escogido</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.tigresDelLiceyText}>Tigres{"\n"}del Licey</Text>
								</View>
							</View>
						</View>
						<Image
							source={require("./../../assets/images/presidentelogo.png")}
							style={styles.presidentelogoImage}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								marginTop: 52,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 75,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<TouchableOpacity
									onPress={this.onBooButtonIconPressed}
									style={styles.boobuttoniconButton}/>
								<View
									style={{
										flex: 1,
									}}/>
								<TouchableOpacity
									onPress={this.onLetsgoButtonIconPressed}
									style={styles.letsgobuttoniconButton}/>
							</View>
							<TouchableOpacity
								onPress={this.onLetdownButtonIconPressed}
								style={styles.letdownbuttoniconButton}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 72,
									right: 0,
									top: 0,
									bottom: 0,
									alignItems: "flex-end",
								}}>
								<TouchableOpacity
									onPress={this.onCheerButtonIconPressed}
									style={styles.cheerbuttoniconButton}/>
								<View
									style={{
										flex: 1,
									}}/>
								<TouchableOpacity
									onPress={this.onClapButtonIconPressed}
									style={styles.clapbuttoniconButton}/>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							alignSelf: "center",
							width: 106,
							top: 37,
							height: 243,
							alignItems: "center",
						}}>
						<Image
							source={require("./../../assets/images/lidomlogo.png")}
							style={styles.lidomlogoImage}/>
						<Image
							source={require("./../../assets/images/liveicon.png")}
							style={styles.liveiconImage}/>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	buttonboard3View: {
		backgroundColor: "rgb(94, 94, 94)",
		flex: 1,
		alignItems: "center",
	},
	viewView: {
		backgroundColor: "rgb(244, 244, 244)",
		width: 419,
		height: 896,
	},
	backbuttonButtonImage: {
		resizeMode: "contain",
	},
	backbuttonButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	backbuttonButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-start",
		width: 18,
		height: 32,
		marginLeft: 10,
	},
	teamsboxView: {
		backgroundColor: "white",
		borderRadius: 25,
		position: "absolute",
		alignSelf: "center",
		width: 307,
		top: 0,
		height: 192,
	},
	leoneslogoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 91,
		height: 46,
		marginTop: 5,
	},
	tigresligoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 52,
		height: 56,
	},
	leonesDelEscogidoText: {
		color: "rgb(17, 28, 43)",
		fontFamily: "Montserrat-Bold",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	tigresDelLiceyText: {
		color: "rgb(17, 28, 43)",
		fontFamily: "Montserrat-Bold",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	presidentelogoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 214,
		height: 144,
		marginTop: 54,
	},
	boobuttoniconButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	boobuttoniconButtonImage: {
		resizeMode: "contain",
	},
	boobuttoniconButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 200,
		height: 82,
	},
	letsgobuttoniconButtonImage: {
		resizeMode: "contain",
	},
	letsgobuttoniconButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	letsgobuttoniconButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-end",
		width: 200,
		height: 82,
	},
	letdownbuttoniconButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 0,
		width: 200,
		bottom: 75,
		height: 82,
	},
	letdownbuttoniconButtonImage: {
		resizeMode: "contain",
	},
	letdownbuttoniconButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	cheerbuttoniconButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 200,
		height: 82,
	},
	cheerbuttoniconButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	cheerbuttoniconButtonImage: {
		resizeMode: "contain",
	},
	clapbuttoniconButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-start",
		width: 258,
		height: 83,
	},
	clapbuttoniconButtonImage: {
		resizeMode: "contain",
	},
	clapbuttoniconButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	lidomlogoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 106,
		height: 106,
	},
	liveiconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 46,
		height: 31,
		marginTop: 107,
	},
})
