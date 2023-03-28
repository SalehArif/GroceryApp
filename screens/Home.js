import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


const Home = () => {
  const filters = 
  [
    ["All"],
  ["vegetables", require("../assets/pizza-slice1.png")],
  ["fish", require("../assets/hamburger1.png")],
  ["fruits", require("../assets/taco1.png")]
]
  return (
    <View style={[styles.container]}>
      <StatusBar />
      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:20, paddingTop:30}}>
          <View>
            <Text style={styles.subheadingText}>Good Morning</Text>
            <Text style={[styles.headingText]}>Ghazi</Text>
            <View style={{flexDirection:"row"}}>
              <Ionicons name='ios-location-sharp' size={20} color={"black"} />
              <Text style={styles.text}>Tlogomas, Malang</Text>
            </View>
          </View>
          <View style={{backgroundColor:"#E5E5E5", borderRadius:10}}>
            <Image style={{width:56, height:56}} source={require("../assets/A1.png")} />
          </View>
      </View>
      <View>

        <FlatList
          data={filters}
          horizontal
          keyExtractor={(item,index) => index}
          showsHorizontalScrollIndicator={false}
          style={{marginVertical:20, width:"90%" }}
          renderItem={({item,index})=>
            <TouchableOpacity style={{flexDirection:"row" ,backgroundColor:"#FCFEFF", alignItems:"center", borderRadius:40, marginHorizontal:10, ...styles.shadow}}>
              {item[1] ? 
              <Image source={item[1]} />:null
              }
              <Text style={styles.text}>{item[0]}</Text>
            </TouchableOpacity>
          }
          
        />
      </View>
      <Text style={[styles.text, {marginLeft:20}]}>Top Products</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F4F4FC",
  },
  text:{
    fontSize:16,
    color:"black",
    fontFamily:"Raleway-Regular"
  },
  headingText:{
    fontSize:24,
    color:"black",
    fontFamily:"Raleway-Bold"
  },
  subheadingText:{
    fontSize:18,
    fontWeight:"400",
    lineHeight:22,
    color:"black",
    fontFamily:"Raleway-SemiBold"
  },
  shadow:{
    shadowColor:'#F1F4F9',
    shadowOffset:{
        width:0,
        height:30
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 40
}
})