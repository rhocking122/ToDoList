import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './Components/Task';

export default function App() {
  const {task, setTask} = useState();
  return (
    <View style={styles.container}>
 
{/* Today's Tasks */}
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's Tasks</Text>

    <View style={styles.items}>
      {/* This is where the tasks go */}
      <Task text = {'Task 1'}/>
      <Task text = {'Task 2'}/>
    </View>

    </View>

    {/* Write a task section */}
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.writeTaskWrapper}>
      <TextInput style={styles.input} placeholder='Write a task'/>
      <TouchableOpacity >
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
tasksWrapper: {
  paddingTop: 80,
  paddingHorizontal: 20,
},
sectionTitle: {
  fontSize: 24,
  fontWeight: 'bold',
},
items: {
  marginTop: 30,
},
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    Width: 250,
  },
  addWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {

  },

});
