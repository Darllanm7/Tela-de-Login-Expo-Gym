import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
           <MaterialIcons name="fitness-center" size={60} color="black" />
      
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.box}>
          <Ionicons name="barbell-outline" size={50} color="black" />
          <Text style={styles.boxTitle}>Treinos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Ionicons name="nutrition-outline" size={50} color="black" />
          <Text style={styles.boxTitle}>Nutrição</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Ionicons name="calendar-outline" size={50} color="black" />
          <Text style={styles.boxTitle}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Ionicons name="person-outline" size={50} color="black" />
          <Text style={styles.boxTitle}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 50,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
  },
  box: {
    width: '45%',
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  boxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});