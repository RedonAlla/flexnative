import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function Chat() {
  return (
    <ScrollView style={styles.container}>
      {/* Chat header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Chats</Text>
      </View>

      {/* Chat items */}
      {chatItems.map((item, index) => (
        <View key={index} style={styles.chatItem}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <View style={styles.chatText}>
            <Text style={styles.chatName}>{item.name}</Text>
            <Text style={styles.chatMessage}>{item.message}</Text>
            <Text style={styles.chatDate}>{item.date}</Text>
          </View>
        </View>
      ))}
    </ScrollView>

  );
}

const chatItems = [
  {
    name: 'Tetra integration',
    message: '~ Blerim Hasa: Po do futem un tani',
    date: '03/12/2024',
    avatar: 'https://example.com/avatar1.png',
  },
  {
    name: 'Eli',
    message: 'Tani e fika',
    date: '02/12/2024',
    avatar: 'https://example.com/avatar2.png',
  },
  {
    name: 'Lorenci',
    message: 'Reacted 👍 to "Shumë faleminderit"',
    date: '02/12/2024',
    avatar: 'https://example.com/avatar3.png',
  },
  // Add more chat items as needed
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatText: {
    flex: 1,
    justifyContent: 'center',
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatMessage: {
    color: '#666',
  },
  chatDate: {
    color: '#aaa',
    fontSize: 12,
  },
});

