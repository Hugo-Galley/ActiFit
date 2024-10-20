import React from 'react'
import {Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { UserProvider } from './UserContext'



const _layout = () => {
  return (
    // Entourer la Tab du userContext
    <UserProvider>
        {/* Definition de la Tab Principal */}
    <Tabs initialRouteName='index'
    screenOptions={
        {
            headerShown:false
        }
    }>
    <Tabs.Screen 
        name='ExercicePage/exercice'
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
            name='inscription/inscription-1'
            options={{
                tabBarButton: () => null,
                tabBarStyle: {display:'none'} 
            }}
        />
        <Tabs.Screen 
            name='inscription/SignUp'
            options={{
                tabBarButton: () => null,
                tabBarStyle: {display:'none'}
            }}
        />
        <Tabs.Screen 
            name='index'
            options={{
                tabBarButton: () => null,  
                tabBarStyle: {display:'none'}
            }}
        />
        <Tabs.Screen 
            name='inscription/inscription-2'
            options={{
                tabBarButton: () => null,
                tabBarStyle: {display:'none'}
            }}
        />
        <Tabs.Screen 
            name='ExercicePage/exo-vol3'
            options={{
                tabBarButton: () => null  
            }}
        />
                <Tabs.Screen 
            name='main/seance'
            options={{
                tabBarButton: () => null  
            }}
        />
        <Tabs.Screen
        name='main/home'
        options={{
            title: "Home",
            tabBarIcon: ({color, size}) =>(
                <Ionicons name='home' size={size} color={color} />
            )

        }}
        />
        <Tabs.Screen
        name='main/profil'
        options={{
            title: "Profile",
            tabBarIcon: ({color, size}) =>(
                <Ionicons name='person' size={size} color={color} />
            )

        }}
        />
    </Tabs>
    </UserProvider>
  )
}

export default _layout