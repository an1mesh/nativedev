import React, {useState} from 'react';
import SearchField from './src/components/search';
import {StyleSheet, View} from 'react-native';
import MyButton from './src/components/button';
import TaskList from './src/components/list';

function App() {
  const [task, setTask] = useState([{id: '', title: ''}]);
  const [text, setText] = useState<string>('');
  const [itemId, setItemId] = useState<number>(0);
  console.log(itemId);

  function handleInput(enteredText: string) {
    setText(prevText => {
      prevText = enteredText;
      console.log(prevText);
      return prevText;
    });
  }

  function add() {
    console.log(`before addning ${itemId}`);
    setTask(prevTask => [...prevTask, {id: itemId.toString(), title: text}]);
    setItemId(prevId => prevId + 1);
    console.log(`after addning ${itemId}`);
  }

  function deleteData(title: string) {
    if (task.length === 0) {
      setItemId(prevId => {
        prevId = 0;
        return prevId;
      });
    }
    const updatedList = task.filter(item => item.title !== title);
    setTask(updatedList);
    console.log(updatedList);
  }
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <SearchField hintText="Enter Tasks" changeText={handleInput} />
      <View style={styles.buttonStyle}>
        <MyButton buttonTitle="Add" addTask={add} />
        {/* <MyButton buttonTitle="Delete" /> */}
      </View>
      <View>
        <TaskList taskList={task} deleteTask={deleteData} />
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
