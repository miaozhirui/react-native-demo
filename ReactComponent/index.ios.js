import React, {
  View,
  Navigator,
  Component,
  StyleSheet,
  AppRegistry
} from 'react-native';
import RecordList from './RecordList';

class Record extends Component {

  constructor(props) {
    super(props);
  
    this.state = { text: 'Goodbye World.' };
  }

  render() {
     let defaultName = "RecordList";
     let defaultComponent = RecordList;

    return (
     <Navigator 
      style = {style.contain}

      initialRoute = {{name: defaultName, component: defaultComponent}}

      configureScene = {(route) => {

         return Navigator.SceneConfigs.HorizontalSwipeJump;
      }}

      renderScene = {(route, navigator) => {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator}></Component>

      }}
     >
     </Navigator>
    );
  }
}

const style = StyleSheet.create({
  contain: {
   marginTop:20,
  }
});

AppRegistry.registerComponent('Record', () => Record);
