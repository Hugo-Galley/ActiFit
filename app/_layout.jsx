import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';



const _layout = () => {
  return (
    <Tabs initialRouteName='index'
    screenOptions={
        {
            headerShown:false
        }
    }>
    <Tabs.Screen 
        name='exercice'
        options={{
            title: "Exercice",
            tabBarIcon: ({color, size}) =>(
             <Ionicons name='barbell' size={size} color={color} />
            )

        }}
        />

                <Tabs.Screen 
            name='ExercicePage/exo-vol2'
            options={{
                tabBarButton: () => null  
            }}
        />
        <Tabs.Screen 
            name='ExercicePage/exo-vol3'
            options={{
                tabBarButton: () => null  
            }}
        />
        
        <Tabs.Screen
        name='index'
        options={{
            title: "Home",
            tabBarIcon: ({color, size}) =>(
                <Ionicons name='home' size={size} color={color} />
            )

        }}
        />
        <Tabs.Screen
        name='profil'
        options={{
            title: "Profile",
            tabBarIcon: ({color, size}) =>(
                <Ionicons name='person' size={size} color={color} />
            )

        }}
        />
    </Tabs>
  )
}

export default _layout