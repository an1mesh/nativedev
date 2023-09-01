import {FlatList, StyleSheet, Text} from 'react-native';
import {TaskListModel} from '../models/model';

function TaskList(props: TaskListModel) {
  return (
    <FlatList
      data={props.taskList}
      renderItem={({item}) => (
        <Text style={styles.listStyle}>{item.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listStyle: {
    fontSize: 30,
    padding: 20,
    marginLeft: 30,
    fontWeight: 'bold',
  },
});

export default TaskList;
