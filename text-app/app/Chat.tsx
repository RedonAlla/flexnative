import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';

const chats = [
  {
    id: '1',
    name: 'Ciftet',
    date: '08/03/2025',
    lastMessage: 'Diana: Faleminderit',
    phone: '+355 68 218 7773',
    callInfo: 'Missed voice call',
    time: '14:10',
    archived: true
  },
  {
    id: '2',
    name: 'Microsoft Copilot',
    lastMessage: 'The difference between embedded web and if...',
    time: '13:37',
    unread: true
  },
  {
    id: '3',
    name: 'Besmir Shehu',
    lastMessage: 'import React from \'react\'; import { View, StyleS...}',
    time: '13:30'
  },
  {
    id: '4',
    name: 'Eli',
    lastMessage: 'E bukur duket',
    time: '11:05'
  },
  {
    id: '5',
    name: 'Bruna',
    lastMessage: 'Video call',
    time: '10:50',
    isVideo: true
  },
  {
    id: '6',
    name: 'Mariza',
    lastMessage: 'Missed voice call',
    time: '10:25',
    missedCall: true
  }
];

const ChatItem = ({ item }) => (
  <TouchableOpacity style={styles.chatItem}>
    <View style={styles.avatarPlaceholder} />
    <View style={styles.chatContent}>
      <View style={styles.chatHeader}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatTime}>{item.time}</Text>
      </View>
      <View style={styles.messagePreview}>
        {item.archived && (
          <MaterialIcons name="archive" size={16} color="#666" style={styles.icon} />
        )}
        {item.missedCall && (
          <Ionicons name="call" size={16} color="red" style={styles.icon} />
        )}
        {item.isVideo && (
          <Ionicons name="videocam" size={16} color="#666" style={styles.icon} />
        )}
        <Text 
          style={[
            styles.lastMessage,
            item.unread && styles.unreadMessage,
            (item.missedCall || item.isVideo) && styles.callMessage
          ]}
          numberOfLines={1}
        >
          {item.lastMessage}
        </Text>
      </View>
      {item.phone && (
        <Text style={styles.phoneNumber}>{item.phone}</Text>
      )}
    </View>
  </TouchableOpacity>
);

export default function WhatsAppScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#128C7E" barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>WhatsApp</Text>
        <View style={styles.headerIcons}>
          <MaterialIcons name="search" size={24} color="white" style={styles.headerIcon} />
          <MaterialIcons name="more-vert" size={24} color="white" style={styles.headerIcon} />
        </View>
      </View>
      
      {/* Action Bar */}
      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.actionItem}>
          <MaterialIcons name="groups" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Text style={styles.actionTextActive}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Text style={styles.actionText}>Updates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Text style={styles.actionText}>Calls</Text>
        </TouchableOpacity>
      </View>
      
      {/* Checkbox Items */}
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxItem}>
          <MaterialIcons name="check-box-outline-blank" size={20} color="#666" />
          <Text style={styles.checkboxText}>Ask Meta AI or Search</Text>
        </View>
        <View style={styles.checkboxItem}>
          <MaterialIcons name="check-box" size={20} color="#666" />
          <Text style={styles.checkboxText}>Archived</Text>
        </View>
      </View>
      
      {/* Chats List */}
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatItem item={item} />}
        keyExtractor={item => item.id}
        style={styles.chatList}
      />
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Feather name="arrow-left" size={24} color="#666" />
          <Text style={styles.navText}>Ctrl</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Feather name="upload" size={24} color="#666" />
          <Text style={styles.navText}>Backup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Feather name="download" size={24} color="#666" />
          <Text style={styles.navText}>Backdown</Text>
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
    backgroundColor: '#128C7E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 20,
  },
  actionBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    paddingVertical: 8,
  },
  actionItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  actionText: {
    color: '#666',
    fontSize: 16,
  },
  actionTextActive: {
    color: '#128C7E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  checkboxText: {
    marginLeft: 8,
    color: '#666',
  },
  chatList: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#128C7E',
    marginRight: 12,
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  chatTime: {
    color: '#666',
    fontSize: 12,
  },
  messagePreview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastMessage: {
    color: '#666',
    fontSize: 14,
    flex: 1,
  },
  unreadMessage: {
    fontWeight: 'bold',
    color: '#000',
  },
  callMessage: {
    color: 'red',
  },
  phoneNumber: {
    color: '#666',
    fontSize: 12,
    marginTop: 2,
  },
  icon: {
    marginRight: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    color: '#666',
    fontSize: 12,
    marginTop: 4,
  },
});