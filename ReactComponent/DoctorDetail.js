
import React, {
	Component,
	Text,
	View,
	StyleSheet
} from 'react-native'


export default class DoctorDetail extends Component{

	goDoctorList() {
		var {navigator} = this.props;

		if(navigator){
			navigator.pop();
		}
	}

	render() {
		return (
			<View style={[style.contain,style.flex]}>
				<Text onPress={this.goDoctorList.bind(this)}>111</Text>
			</View>
			)
	}
} 


const style = StyleSheet.create({
	contain: {
		
	},
	flex: {
		flex:1
	}
})