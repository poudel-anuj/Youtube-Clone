import React from 'react';
import {Text,View,StyleSheet,FlatList,ScrollView} from 'react-native';
import Header from '../components/Header';
import {useSelector} from 'react-redux';
import Card from '../components/Card';


const LittleCard = ({name}) =>{
   
       
    return(
        
        <View style={{
            backgroundColor:'red',
            width:120,
            borderRadius:4,
            marginTop:10,
        }}>
            <Text style={{
                textAlign:'center',
                color:'white',
                fontSize:22,
                padding:10
            }}>{name}</Text>
      
        </View>
       
    );
}

const Explore = () =>{
    const homeData = useSelector(state =>{
        return state.cardData;
    });
   
    return(
        <View style={{flex:1}}>
            <Header />
            <ScrollView style={{flex:1}}>

            <View style={{
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'space-evenly',
                
            }}>
                <LittleCard name="Gaming"/>
                <LittleCard name="News"/>
                <LittleCard name="Music"/>
                <LittleCard name="Fashion"/>
                <LittleCard name="Food"/>
                <LittleCard name="Songs"/>
                <LittleCard name="Movies"/>
                <LittleCard name="Trending"/>
                <LittleCard name="Olympics"/>
            </View>
            <Text style={{
                marginTop:22,
                margin:12,
                fontSize:22,
                borderBottomWidth:2,
                
            }}>Trending Videos</Text>

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
                </ScrollView>
        </View>
        
    );
};

const styles = StyleSheet.create({
    
});

export default Explore;