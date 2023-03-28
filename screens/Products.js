import React from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Products = () => {
  const Products = [
    {image:require("../assets/brocolli.png"),name:"brocolli",weight:100,price:4},
    {image:require("../assets/banana.png"),name:"banana",weight:100,price:10},
    {image:require("../assets/orange.png"),name:"orange",weight:100,price:4},
  ]

  function renderItem({item,index}) {
    return (
      <TouchableOpacity style={{backgroundColor:"#FCFEFF", height:180, alignItems:"center", borderRadius:12, marginHorizontal:5, paddingHorizontal:12, paddingVertical:8}}>
        <Image source={item.image} style={{width:90, height:90}} />
        <Text style={[styles.subheadingText, {alignSelf:"flex-start"}]}>{item.name}</Text>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <View style={{marginRight:10}}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
              <Text style={styles.text}>weight</Text>
              <Text style={[styles.subheadingText, {textTransform:"none", fontSize:16}]}> {item.weight}g</Text>
            </View>
            <View style={{flexDirection:"row", alignItems:"flex-end"}}>
              <Text style={[styles.headingText, {fontSize:22}]}>${item.price}</Text>
              <Text style={[styles.text, {textTransform:"none", fontSize:14}]}>/kg</Text>
            </View>
          </View>
          <TouchableOpacity style={{backgroundColor:"#FF844C", borderRadius:8, }}>
            <Feather name='plus' size={20} color={"white"} style={{padding:12}} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#F4F4FC"} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"flex-end", marginHorizontal:20, marginTop:50, marginBottom:10, alignItems:"center"}}>
        <Text style={[styles.headingText]}>Vegetables</Text>
        <Text style={[styles.text, {fontSize:14}]} >SHOW ALL</Text>
      </View>

      <View>
        <FlatList
          data={Products}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item,index)=> index}
          style={{marginVertical:10, marginHorizontal:20 }}
          renderItem={ renderItem }
        />
        <FlatList
          data={Products}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item,index)=> index}
          style={{marginVertical:10, marginHorizontal:20 }}
          renderItem={ renderItem }
        />
      </View>

      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"flex-end", marginHorizontal:20, marginVertical:10, alignItems:"center"}}>
        <Text style={[styles.headingText]}>Fruit</Text>
        <Text style={[styles.text, {fontSize:14}]} >SHOW ALL</Text>
      </View>
      <View>
        <FlatList
          data={Products}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item,index)=> index}
          style={{marginVertical:10, marginHorizontal:20 }}
          renderItem={ renderItem }
        />
      </View>
      </ScrollView>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F4F4FC",
  },
  text:{
    fontSize:12,
    color:"black",
    fontFamily:"Raleway-Regular",
    textTransform:"capitalize"
  },
  headingText:{
    fontSize:24,
    color:"black",
    fontFamily:"Raleway-Bold"
  },
  subheadingText:{
    fontSize:16,
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
        height:4
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 4
},
contentContainer: {
  paddingBottom: 100
}
})