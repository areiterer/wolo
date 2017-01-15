import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

class AddActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'Running',
      date: "15.01.2017",
      amount: 10,
      unit: "km",
      duration: 67
    };

    this.getActivity = this.getActivity.bind(this);
  }

  getActivity() {
    return {
      type: this.state.type,
      date: this.state.date,
      amount: this.state.amount,
      unit: this.state.unit,
      duration: this.state.duration
    }
  }

  render() {
    return (
      <View>
        <Text>Add new activity</Text>
        <TextInput placeholder={'Type'}
                   onChangeText={(text) =>{this.setState({type: text})}}
                   value={this.state.type}/>
        <TextInput placeholder={'Date'}
                   onChangeText={(text) =>{this.setState({date: text})}}
                   value={this.state.date}/>
        <View style={{flexDirection:'row'}}>
          <TextInput style={{flex: 1}}
                     placeholder={'Amount'}
                     keyboardType={'numeric'}
                     onChangeText={(text) =>{this.setState({amount: Number(text)})}}
                     value={this.state.amount.toString()}/>
          <TextInput style={{flex: 1}}
                     placeholder={'Unit'}
                     onChangeText={(text) =>{this.setState({unit: text})}}
                     value={this.state.unit}/>
        </View>
        <TextInput
          placeholder={'Duration (Minutes)'}
          keyboardType={'numeric'}
          onChangeText={(text) =>{this.setState({duration: Number(text)})}}
          value={this.state.duration.toString()}/>
        <Button
          title={'Add activity'}
          onPress={ () => this.props.addNewActivity(this.getActivity()) }/>
        <Button
          title={'Cancel'}
          color={'#E74C3C'}
          onPress={ () => this.props.navigator.pop() }/>
      </View>
    );
  }
}

AddActivity.propTypes = {
  navigator: PropTypes.object.isRequired
};

export default AddActivity;