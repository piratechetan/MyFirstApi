import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
 import {Container,Header,Content,Card,CardItem,H1} from 'native-base';

 import moment from 'moment';
 
const User = ({details}) => {
return (
<View>
<Card style={Styles.card}>
    <CardItem style={Styles.cardItem}>
        <Image 
        source={{
            uri:details.picture?.large,
            width:150,
            height:250,
        }}
        style={Styles.image}
        />
    </CardItem>
    <CardItem style={Styles.cardItem}>
        <H1 style={Styles.text}>{details.name.title} {details.name.first} {details.name.last}</H1>
    </CardItem>
    <CardItem bordered style={Styles.cardItem}>
        <Text style={Styles.text}>Phone No. {details.cell}</Text>
    </CardItem>
    <CardItem bordered style={Styles.cardItem}>
        <Text style={Styles.text}>Country: {details.location?.country}</Text>
    </CardItem>
    <CardItem bordered style={Styles.cardItem}>
        <Text style={Styles.text}>Email: {details.email}</Text>
    </CardItem>
    <CardItem footer style={Styles.cardItem}>
        <Text style={{color:'#FFF'}}>Registered on : {moment(details.registered?.date).format('DD-YY-MM')}</Text>
    </CardItem>
</Card>
</View>
)}

export default User;
const Styles = StyleSheet.create({
    card: {
        width: 300,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#4f8a8b',
        borderColor: '#4f8a8b',
        borderWidth: 2,
      },
      cardItem: {
        backgroundColor: '#4f8a8b',
        alignItems:'center',
        justifyContent:'center'
      },
      image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: '#fbd46d',
        marginTop: -50,
      },
      text: {
        color: '#eeeeee',
      },
})