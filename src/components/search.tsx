/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, TextInput} from 'react-native';
import {InputTextModel} from '../models/model';

function SearchField(props: InputTextModel) {
  return (
    <TextInput
      placeholder={props.hintText}
      style={styles.textField}
      onChangeText={props.changeText}
    />
  );
}

const styles = StyleSheet.create({
  textField: {
    borderColor: 'grey',
    height: '10%',
    borderWidth: 2,
    margin: '10%',
  },
});

export default SearchField;
