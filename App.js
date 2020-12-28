//
//  App.js
//  BobbleWebApp
//
//  Created by Justin Pham.
//  Copyright © 2018 bobbleSports. All rights reserved.
//

import * as Font from "expo-font"
import ButtonBoard3 from "./App/ButtonBoard3/ButtonBoard3"
import React from "react"
import WelcomeScreen3 from "./App/WelcomeScreen3/WelcomeScreen3"
import { AppLoading, DangerZone } from "expo"
import { createAppContainer, createStackNavigator } from "react-navigation"

const PushRouteOne = createStackNavigator({
	WelcomeScreen3: {
		screen: WelcomeScreen3,
	},
	ButtonBoard3: {
		screen: ButtonBoard3,
	},
}, {
	initialRouteName: "WelcomeScreen3",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			"Montserrat-Bold": require("./assets/fonts/MontserratBold.otf"),
			"Montserrat-Medium": require("./assets/fonts/MontserratMedium.otf"),
			"Montserrat-Light": require("./assets/fonts/MontserratLight.otf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<AppLoading />); }
		return <AppContainer/>
	}
}
