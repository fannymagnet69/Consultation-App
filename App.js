import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './Components/Home';
import History from './Components/History';

const Tab = createBottomTabNavigator();

const App = () => {
  const [consultationType, setConsultationType] = useState('All Consultations');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAscending, setSortAscending] = useState(true);

  const handleOptionPress = () => {
    // Handle options press here
  };

  const handleConsultationTypeChange = (value) => {
    setConsultationType(value);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const handleSortListPress = () => {
    setSortAscending(!sortAscending);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          initialParams={{
            consultationType,
            handleConsultationTypeChange,
            handleOptionPress,
          }}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          initialParams={{
            searchQuery,
            handleSearchQueryChange,
            sortAscending,
            handleSortListPress,
          }}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({ color, size }) => <MaterialIcons name="history" color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
