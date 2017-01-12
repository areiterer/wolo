import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

class AddActivity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Button
          title={'Close'}
          onPress={ () => this.props.navigator.pop() } />
        <Text>This is the add scene for new sports activities! </Text>
      </View>
    );
  }
}

AddActivity.propTypes = {
  navigator: PropTypes.object.isRequired
};

export default AddActivity;