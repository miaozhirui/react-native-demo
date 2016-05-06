
import React, {
	View,
	Text,
	Component,
	StyleSheet,
	ListView,
	Image,
	TouchableHighlight
} from 'react-native';

import DoctorDetail from './DoctorDetail';

export default class RecordList extends Component {

	constructor(props) {
	  super(props);
	  var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});

	  this.state = {
	  	dataSource: ds.cloneWithRows(this.getInitData())
	  };
	}

	getInitData() {
		let data = [
			{
				"CallTime": "2016-03-30 17:35:58",
				"NickName": "王海涛",
				"Head": "http://imagestest.purple-health.com/images/doctorheads/2015/11/06/c7ed2efe1efa3287dd5bebd653c738b8.jpg"
			},
			{
				"CallTime": "2016-03-30",
				"NickName": "赵六",
				"Head": "http://imagestest.purple-health.com/images/doctorheads/2015/11/06/c7ed2efe1efa3287dd5bebd653c738b8.jpg"
			},
			{
				"CallTime": "2016-03-30 17:35:58",
				"NickName": "王五",
				"Head": "http://imagestest.purple-health.com/images/doctorheads/2015/11/06/c7ed2efe1efa3287dd5bebd653c738b8.jpg"
			}
		]

		return data;
	}

	render() {
		return (
				<View style={styles.contain}>
					<Text style={styles.listWarning}>医生咨询服务仅为建议，具体诊疗请到医院就医</Text>
					<ListView
						dataSource = {this.state.dataSource}
						renderRow = {(rowData)=><DoctorList params={rowData} navigator={this.props.navigator}></DoctorList>}
					></ListView>
				</View>
			)
		
	}
}


class DoctorList extends Component {

	constructor(props) {
	  super(props);
	  this.params = this.props.params;
	  this.state = {};
	}

	enterDetail() {
		var {navigator} = this.props;
		
		if(navigator){
			navigator.push({
				name: 'DoctorDetail',
				component: DoctorDetail
			})
		}
	}

	render() {
		return (
				<View style={styles.doctorList}>
						<View style={styles.doctorContain}>
							<Text style={styles.time}>{this.params.CallTime}</Text>

							<View style={styles.doctorInfo}>
								<View style={[styles.imgWraper, styles.wrapSize, styles.center]}>
									<Image source={{uri:this.params.Head}} style={{width:40, height:40, borderRadius:20}}></Image>
								</View>
								<View style={[styles.infoWraper, styles.wrapSize, styles.flex]}>

									<Text>{this.params.NickName}医生{' '}儿科</Text>
									<Text style={{marginTop: 12, color:'#9b9b9b'}}>医生已提供咨询记录</Text>
									<Text style={{marginTop: 12, color:'#9b9b9b'}}>已支付</Text>
								</View>
								<TouchableHighlight underlayColor='white' onPress={this.enterDetail.bind(this)}>
									<View style={[styles.arrowWraper, styles.wrapSize, styles.center]} onPress={this.enterDetail.bind(this)}>
										<Image source={{uri:'arrow_icon'}} style={{width:20, height:20, borderRadius:20}}></Image>
									</View>
								</TouchableHighlight>
							</View>
						</View>
						<View style={[styles.actions,styles.flex]}>
							<View style={[styles.flex, styles.removeRightBorder]}>
								<Text style={[styles.redColor, styles.textAlign]}>删除记录</Text>
							</View>
							<View style={styles.flex}>
								<Text style={[styles.redColor, styles.textAlign]}>电话复诊</Text>
							</View>
						</View>
					</View>
			)
	}
}

const styles = StyleSheet.create({
	removeRightBorder: {
		borderRightWidth:1,
		borderRightColor:'#ebebeb',
		borderStyle:'solid'
	},
	textAlign:{
		textAlign: 'center'
	},
	redColor:{
		color:'#e75d3c'
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding:10,
		borderTopWidth:1,
		borderTopColor:'#ebebeb',
		borderStyle: 'solid'

	},

	arrowWraper: {

	},
	imgWraper: {
		marginRight:16
	},
	contain: {
		flex:1,
		padding:15,
		paddingTop:32,
	},
	listWarning: {
		textAlign:'center'
	},
	doctorList: {
		marginLeft:15,
		marginBottom:15,
		marginRight:15,
		marginTop:15,
		borderColor:"#ebebeb",
		borderStyle:'solid',
		borderWidth:1,
		borderRadius:4
	},
	time: {
		fontSize:12,
		color:"#9b9b9b"
	},
	doctorContain: {
		paddingTop:20,
		paddingBottom:20,
		paddingLeft:20,
		paddingRight:20
	},
	doctorInfo: {
		flex: 1,
		flexDirection: 'row',
		marginTop:20,
		justifyContent: 'space-between'
	},
	wrapSize: {
		width:40,
		height:76
	},
	center: {
		justifyContent:"center",
		alignItems: 'center'
	},
	flex: {
		flex:1
	}
})



