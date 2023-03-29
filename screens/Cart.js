import { StyleSheet, Text, View, ScrollView, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';



const Cart = ({ navigation }) => {
  React.useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none"
      }
    });
    return () => navigation.getParent()?.setOptions({
      tabBarStyle: [{position:"absolute", bottom:25, left:30, right:30, borderRadius:30, elevation:0, height:70 },styles.shadow],
    });
  }, [navigation]);

  const cart = [
    {image:require("../assets/brocolli.png"),name:"brocolli",weight:100,price:4, quantity:3},
    {image:require("../assets/banana.png"),name:"banana",weight:100,price:10, quantity:4},
    {image:require("../assets/orange.png"),name:"orange",weight:100,price:4, quantity:2},
  ]
  return (
  
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#F4F4FC"} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={{flexDirection:"row", marginHorizontal:20, marginVertical:10}}>
          <TouchableOpacity onPress={()=> navigation.goBack() }>
              <AntDesign name='left'  size={26} color={"black"}/>
          </TouchableOpacity>
				</View>
          <Text style={[styles.headingText,{alignSelf:"center", marginBottom:30}]}>Cart</Text>
        {
          cart.map((item,index)=> 
            <View key={index} style={{flexDirection:"row",backgroundColor:"#FCFEFF", alignItems:"center", borderRadius:12, marginHorizontal:20, marginVertical:10, paddingHorizontal:12, paddingVertical:15, ...styles.shadow}}>
              <View style={{}}>
                <Image source={item.image} style={{width:70, height:70}} />
                <View style={{flexDirection:"row", alignItems:"flex-end"}}>
                    <Text style={[styles.headingText, {fontSize:22}]}>${item.price}</Text>
                    <Text style={[styles.text, {textTransform:"none", fontSize:14}]}>/kg</Text>
                  </View>
              </View>
              <View>
                <Text style={[styles.subheadingText, {alignSelf:"flex-start"}]}>{item.name}</Text>
                <View style={{marginRight:10}}>
                  <View style={{flexDirection:"row"}}>
                    <Text style={styles.text}>Total is </Text>
                    <Text style={[styles.subheadingText, {textTransform:"none", fontSize:16}]}>${item.price * item.quantity}</Text>
                    <Text style={[styles.text, {textTransform:"none", fontSize:16}]}> by weight</Text>
                  </View>
                </View>
              </View>
              <View style={{backgroundColor:"white", borderRadius:8, paddingHorizontal:10, paddingVertical:5, justifyContent:"space-between", alignItems:"flex-end"}}>
                <AntDesign name='minus' size={20} color={"black"} />
                <TouchableOpacity style={{backgroundColor:"#FF844C", borderRadius:8, marginHorizontal:5, marginVertical:20, paddingHorizontal:5, paddingVertical:5}}>
                  <Text style={[styles.text,{fontSize:16, color:"white", textAlign:"center"}]}>Change</Text>
                </TouchableOpacity>
              </View>
          </View>
          )
        }
      </ScrollView>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F4F4FC",
  },
  text:{
    fontSize:16,
    color:"black",
    fontFamily:"Raleway-Regular",
    textTransform:"capitalize"
  },
  headingText:{
    fontSize:24,
    color:"black",
    fontFamily:"Raleway-Bold",
    textTransform:"capitalize"
  },
  subheadingText:{
    fontSize:18,
    fontWeight:"400",
    lineHeight:22,
    color:"black",
    textTransform:"capitalize",
    fontFamily:"Raleway-SemiBold"
  },
  shadow:{
    shadowColor:'#333',
    shadowOffset:{
        width:0,
        height:8
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation:10
},
contentContainer: {
  paddingBottom: 10
}
})