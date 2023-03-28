import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


const Home = () => {
  const filters = ["All","vegetables","fish","fruits","dairy"]
  return (
    <View style={[styles.container]}>
      <StatusBar />
      <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"center", paddingTop:50}}>
          <View>
            <Text>Good Morning</Text>
            <Text>Ghazi</Text>
            <View style={{flexDirection:"row"}}>
              <Ionicons name='ios-location-sharp' size={20} color={"black"} />
              <Text>Tlogomas, Malang</Text>
            </View>
          </View>
          <View style={{backgroundColor:"#E5E5E5", borderRadius:10}}>
            <Image source={require("../assets/A1.png")} />
          </View>
      </View>
      <FlatList
        data={filters}
        horizontal
        keyExtractor={(val,index) => index}
        renderItem={({item,index})=>
          <TouchableOpacity  style={{backgroundColor:"#E5E5E5", height:30, alignItems:"center", borderRadius:10, marginHorizontal:20, elevation:2}}>
            <Text  style={{color:"black"}}>{item}</Text>
          </TouchableOpacity>
        }
        
      />
      <Text>Top Products</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    // margin:20,
    backgroundColor:"#F4F4FC"
  }
})