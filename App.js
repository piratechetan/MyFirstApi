import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Axios from 'axios';

import {Button,Spinner} from 'native-base';
import User from './components/user';


const App = () => {
 const [details,setDetails] = useState("")

 const fetchDetails = async () => {
   try {
   const {data} = await Axios.get('https://randomuser.me/api/') 
     const details = data.results[0];
    //  console.log(details)
     setDetails(details)
     
   } catch (error) {
     console.log(error)
   }
 };
 useEffect(()=>{
   fetchDetails()
 },[])

 if (!details) {
   return(
    <View style={styles.container}>
   <Spinner color='red' />
  </View>
   )
 }else{
  return (
    <>
    <View style={styles.container}>
      <View>
      <User details={details}/>
      </View>
      <View>
        
      <Button
      rounded
      style={styles.button}
      onPress={()=>fetchDetails()}
      >
       <Text>Change User</Text>
      </Button>
      </View>
      
    </View>
    </>
  );
 }

  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:"#222831"
  },
  button:{
    marginTop:30,
    paddingHorizontal:30,
    justifyContent:'center'
  }
});

export default App;
