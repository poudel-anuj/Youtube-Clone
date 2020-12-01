import React from 'react';
import {Text,View,StyleSheet, Dimensions} from 'react-native';
import {WebView}  from 'react-native-webview';
import Constant from 'expo-constants';

const VideoPlayer = ({route}) =>{
    //this come from the components to the screen or props to props .so we use route to 
    //get the data
    const {videoId,title} = route.params;
    return(
        <View style={{flex:1,
            marginTop:Constant.marginTop
        }}>
            <View style={{
                width:'100%',
                height:200
            }}>
                <WebView 
                javaScriptEnabled={true}
                domStorageEnabled={true}
                    source={{uri:`https://www.youtube.com/embed/${videoId}`}}
                />

            </View>
            <Text style={{
                fontSize:20,
                width:Dimensions.get('screen').width-50,
                margin:12
            }}
                numberOfLines={2}
                ellipsizeMode='tail'
        >{title}</Text>
        <View style={{borderBottomWidth:2}}></View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default VideoPlayer;