import React from "react"
import { Route, Routes } from "react-router-dom"

import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import LoginScreen from "./Screens/LoginScreen/LoginScreen"
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen"


function App() {
	return (
		<Routes>
			<Route path={'/'} element={<HomeScreen />} />
			<Route path={'/login'} element={<LoginScreen />} />
			<Route path={'/sign-up'} element={<RegisterScreen />} />
		</Routes>
	)
}

export default App
