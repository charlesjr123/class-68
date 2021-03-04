import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Transaction extends React.Component{
    render(){
        return(
            <View style={{alignItems:'center',
            justifyContent:"center", flex:1,
            }}>
                <Text>
                    Please return the book
                </Text>
            </View>
        )
    }
    
}