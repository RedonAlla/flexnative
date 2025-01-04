import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import {
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import { withFancyDrawer } from '@flexnative/navigation';
import Button from '@flexnative/buttons';
import { DEMO_COMPONENT_GAP } from '@/constants/layout';
import { useThemeContext } from '@flexnative/theme-context';

// import avatar1 from require('../../../assets/icons/avatar-1.jpg');
// import avatar2 from require('../../../assets/icons/avatar-2.jpg');
// import avatar3 from require('../../../assets/icons/avatar-3.jpg');


function ChatScreen() {
  const navigation = useNavigation();
  const theme = useThemeContext();
  
  return (
    <ScrollView style={styles.container}>
      {/* Chat header */}
      <View style={[styles.header, { backgroundColor: theme.colors.secondary }]}>
        <Button size='large' iconLeft='menu' radius='full' color='secondary' type='text' onPress={() => navigation.dispatch(DrawerActions.openDrawer())} /> <Text style={[styles.headerText]}>Chats</Text>
      </View>

      {/* Chat items */}
      {chatItems.map((item, index) => (
        <View key={index} style={styles.chatItem}>
          <Image source={item.avatar} style={styles.avatar} />
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

export default withFancyDrawer(ChatScreen);

const chatItems = [
  {
    name: 'Tetra',
    message: '~ Blerim Hasa: Po do futem un tani',
    date: '03/12/2024',
    avatar: require('../../../assets/icons/avatar-1.jpg'),
  },
  {
    name: 'Eli',
    message: 'Tani e fika',
    date: '02/12/2024',
    avatar: require('../../../assets/icons/avatar-2.jpg'),
  },
  {
    name: 'Lorenci',
    message: 'Reacted 👍 to "Shumë faleminderit"',
    date: '02/12/2024',
    avatar: require('../../../assets/icons/avatar-3.jpg'),
  },
  // Add more chat items as needed
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 7,
    columnGap: DEMO_COMPONENT_GAP,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
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