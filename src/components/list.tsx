/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {TaskListModel} from '../models/model';

function TaskList(props: TaskListModel) {
  return (
    <FlatList
      data={props.taskList}
      renderItem={({item}) => (
        <Pressable
      onPressIn={() => props.deleteTask(item.title)}>
      <View style={styles.taskBorder}>
        <Text style={styles.listStyle}>{item.title}</Text>
      </View>
    </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listStyle: {
    fontSize: 30,
    marginLeft: 30,
    padding: 5,
    fontWeight: 'bold',
    color: 'white',
  },
  taskBorder: {
    borderWidth: 2,
    margin: 10,
    backgroundColor: 'purple',
    borderRadius: 33,
  },
});


export default TaskList;
