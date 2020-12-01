import React,{useState} from 'react';
import {Text,View,StyleSheet, TextInput, FlatList,ActivityIndicator} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import MiniCard from '../components/MiniCard';
import Constant from 'expo-constants';
import {useSelector,useDispatch} from 'react-redux';
import {useTheme} from '@react-navigation/native';


//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=songs&type=video&key=AIzaSyBLmrKG08L5Bjkgh83nx-XBTa4xQuhSX60
const Search = ({navigation}) =>{

    const {colors} = useTheme();
    

    const [value,setValue] = useState('');
    // const [miniCardData,setMiniCardData] = useState([]);
    const [loading,setLoading] =useState(false);

    const dispatch = useDispatch();
    const miniCardData = useSelector(state=>{
        return state.cardData;
    })

    const fetchData = () =>{
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyBLmrKG08L5Bjkgh83nx-XBTa4xQuhSX60`)
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
            // setMiniCardData(data.items);
            dispatch({type:'add',payload:data.items})
          
        })
        
    }
    return (
        <View >
            <View style = {{
        marginTop:Constant.statusBarHeight,
        padding:5,
        flexDirection:'row',
        justifyContent:'space-around',
        elevation:4,
        shadowOpacity:0.26,
        shadowOffset:{width:4,height:4},
        backgroundColor:colors.headerColor,
        
    } }>
                <Ionicons name="md-arrow-back" size={32} 
                
                    onPress={()=>{navigation.goBack()}}
                />
                <TextInput 
                    style={styles.input}
                    value={value}
                    onChangeText={setValue}
                />
                <Ionicons name="md-send" size={32} 
                
                
                    onPress={()=>fetchData()}
                />
            </View>
  
            {loading ? <ActivityIndicator 
             style={{marginTop:15}}
            size='large' color='red'/>:null}
            <FlatList 
             data={miniCardData}
             keyExtractor={result=>result.id.videoId}
             renderItem={({item})=>{
                return  <MiniCard 
                
                 videoId = {item.id.videoId}
                 title={item.snippet.title}
                 channel = {item.snippet.channelTitle}

                />
             }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    
    input:{   
        width:'70%',
        backgroundColor:'#e6e6e6e6'   
    }
});

export default Search;