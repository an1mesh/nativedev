import {Button} from 'react-native';
import {ButtonModel} from '../models/model';

function MyButton(props: ButtonModel) {
  return <Button title={props.buttonTitle} onPress={props.addTask} />;
}

export default MyButton;
