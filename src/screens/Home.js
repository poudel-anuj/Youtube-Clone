import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import {useSelector} from 'react-redux';

const Home =()=> {
    const homeData = useSelector(state =>{
        return state.cardData;
    });
  return (
    <View style={styles.container}>
        <Header />
        <FlatList 
            data={homeData}
            keyExtractor={(item)=>item.id.videoId}
            renderItem={({item})=>{
                return  <Card 
                
                 videoId = {item.id.videoId}
                 title={item.snippet.title}
                 channel = {item.snippet.channelTitle}

                />
             }}
        />
        
    </View>
  );
}

Home.defaultNavigationOptions =()=>{
    return {
        headerShown:false
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1 
    }
});

export default Home;

