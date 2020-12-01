import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation,useTheme} from '@react-navigation/native';

const Card = (props) =>{
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
            style={styles.image}                //this videoId is send to videoplayer
                source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            />
            <View style={styles.bottomdatas}>
            <MaterialIcons style={styles.icon} name="account-circle" size={32} color="#212121" />    
                <View style={styles.textView}>
                    <Text style={{ fontSize:20,
                                     width:Dimensions.get('screen').width -40,
                                     color:textColor
                            }}
                            ellipsizeMode='tail'
                            numberOfLines={2}
                        >{props.title}</Text>
                    <Text style={{color:textColor}}>{props.channel}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        // elevation:4,
        // margin:10
        marginBottom:5
    },
    image:{
        width:'100%',
        height:200
    },
    bottomdatas:{
        flexDirection:'row',
        margin:10
    },
    textView:{
        margin:5
    },icon:{
        margin:5
    },
    text:{
       
    }
});

export default Card;