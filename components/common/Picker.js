import React from 'react';
import { View, Picker, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default ({ title, options, selectedValue, onValueChange }) => (
  <View style={styles.option}>
    <Text style={styles.title}>{title}</Text>
    <RNPickerSelect
      style={styles.pickerStyle}
      value={selectedValue}
      onValueChange={onValueChange}
      items={options.map(({ name, value }) => ({ label: name, value }))}
    />
  </View>
);

const styles = {
  title: {
    fontSize: 14,
    marginBottom: 8,
  },
  option: {
    width: '100%',
    marginBottom: 16,
  },
  pickerStyle: {
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'eggplant',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  }
}