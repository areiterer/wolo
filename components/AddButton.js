import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class AddButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onAdd}
        style={styles.button}
        activeOpacity={0.5}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    );
  }
}

AddButton.propTypes = {
  onAdd: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    margin: 10,
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#d23f31',
    elevation: 5
  },
  buttonText: {
    alignSelf: 'stretch',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
    fontSize: 20
  }
});

export default AddButton;