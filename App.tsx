import React, {useState} from 'react';
import SearchField from './src/components/search';
import {StyleSheet, View} from 'react-native';
import MyButton from './src/components/button';
import TaskList from './src/components/list';

function App() {
  const [task, setTask] = useState([{id: '', title: ''}]);
  const [text, setText] = useState<string>('');

  function handleInput(enteredText: string) {
    setText(prevText => {
      prevText = enteredText;
      console.log(prevText);
      return prevText;
    });
  }

  function add() {
    setTask(prevTask => [...prevTask, {id: '2', title: text}]);
  }
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <SearchField hintText="Enter Tasks" changeText={handleInput} />
      <View style={styles.buttonStyle}>
        <MyButton buttonTitle="Add" addTask={add} />
        {/* <MyButton buttonTitle="Delete" /> */}
      </View>
      <View>
        <TaskList taskList={task} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    width: '30%',
    height: '20%',
    marginLeft: '35%',

    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
});

export default App;
