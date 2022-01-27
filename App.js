import { View, Text, Button, StatusBar, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import ViewComponentPage from './components/viewComponent';

export default App = () => {

	const [countNumber, setDataNumber] = useState(0);
	const url = 'http://api.easy4.fun/citats';
	
	const onPressEventSuperPyper = () =>{
		setDataNumber(countNumber + 1);
	}

  return (
	<View>
		<StatusBar barStyle='dark-content' />
		<Text style={stylesMain.headerMain}>{countNumber}</Text>
		<Button title='НАЖИМАЙ КНОПКУ'
		onPress={
			onPressEventSuperPyper
		}/>

		<ViewComponentPage />
	</View>
  );
};

const stylesMain = StyleSheet.create({
	headerMain:{
		fontSize:40,
		alignSelf:'center',
		marginTop:'5%'
	}
});