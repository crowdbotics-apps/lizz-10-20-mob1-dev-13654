import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Switch_7: true }

  render = () => (
    <View>
      <Text style={styles.Text_3}>
        This is some text content. the button below, when pressed, should say
        &quot;custom text&quot; in the popup{" "}
      </Text>
      <Button
        title="Press me!"
        color="#dd33ff"
        onPress={() => alert("Pressed!")}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        value={this.state.Switch_7}
        onValueChange={nextChecked => this.setState({ Switch_7: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_3: { textAlign: "center" },
  Button_5: { width: "100%", fontSize: 12, textAlign: "center" },
  View_1: {},
  Text_3: { textAlign: "center" },
  Button_5: {},
  Switch_7: {}
})
