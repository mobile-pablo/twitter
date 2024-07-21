import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

const Dashboard = ({ navigation }) => {
  const router = useRouter();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default Dashboard;
