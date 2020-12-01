import React,{useState} from 'react';
import {Text,View,StyleSheet, Dimensions,Image,TouchableOpacity} from 'react-native';
import {useNavigation,useTheme} from '@react-navigation/native';

const MiniCard =(props)=>{
    const {colors} = useTheme();
    const textColor = colors.iconColor;
    const navigation =useNavigation();
    return(
        <TouchableOpacity 
        onPress={()=>navigation.navigate('videoplayer',{
            
            videoId:props.videoId,title:props.title})}
        >
        <View style={styles.container}>
            <Image 
            style={styles.image}
                source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            />
            <View style={styles.textData}>
                <Text style={{
                    fontSize:18,
                    width:Dimensions.get('screen').width/2,
                    color:textColor

                }}
                ellipsizeMode='tail'
                numberOfLines={2}
                >{props.title}  </Text>
                <Text style={{color:textColor}}>{props.channel}</Text>

            </View>
        </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10,
        marginBottom:0
    },
    image:{
        height:100,
        width:'45%'
    },
    textData:{
       
    }
});

export default MiniCard;