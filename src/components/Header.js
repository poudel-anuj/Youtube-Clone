import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AntDesign,Ionicons,MaterialIcons} from '@expo/vector-icons';
import Constant from 'expo-constants'; 
import {useNavigation,useTheme} from '@react-navigation/native';
import {useDispatch,useSelector} from 'react-redux';

const Header = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentTheme = useSelector(state=>{
    return state.darkTheme;
  });
  return (
    <View style={{
      backgroundColor:colors.headerColor,
      height:55,
      marginTop:Constant.statusBarHeight,
      flexDirection:'row',
      justifyContent:'space-between',
      elevation:4
      
     }}>
    <View style={styles.youtube}>
      <AntDesign 
        name="youtube"
        size={32}
        color="red"
        
      />
      <Text style={{ fontSize:22,
        marginLeft:9,
        fontWeight:"bold",
        color:colors.iconColor}}>Youtube</Text>
    </View>
    <View style={styles.icon}>
        <Ionicons name="md-videocam" size={32}  color={colors.iconColor}  />
        <Ionicons name="md-search" size={32}  color={colors.iconColor} 
          onPress={()=>{
            navigation.navigate('search');
          }}
        />
        <MaterialIcons name="account-circle" size={32} color={colors.iconColor}
          //this change the currentTheme state to true..
          onPress={()=>dispatch({type:'change_theme',payload:!currentTheme})}
        />    
        </View>
  </View>
  );
}



const styles = StyleSheet.create({
//  header:
    youtube:{
        padding:10,
        marginLeft:10,
        flexDirection:'row',
        alignItems:'center',
    },
    text:{
       
    },
    icon:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:150,
        margin:10
        
        
    }
});

export default Header;