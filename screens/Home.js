import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';


const Home = () => {
  const filters = 
  [
    ["all"],
  ["vegetables", require("../assets/pizza-slice1.png")],
  ["fish", require("../assets/hamburger1.png")],
  ["fruits", require("../assets/taco1.png")]
]

const Products = [
  {image:require("../assets/brocolli.png"),name:"brocolli",weight:100,price:4},
  {image:require("../assets/banana.png"),name:"banana",weight:100,price:10},
  {image:require("../assets/orange.png"),name:"orange",weight:100,price:4},
  
]
  return (
    <View style={[styles.container]}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#F4F4FC"} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
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
          style={{marginVertical:20, width:"90%", marginLeft:10, }}
          renderItem={({item,index})=>
            <TouchableOpacity style={{flexDirection:"row" ,backgroundColor:"#FCFEFF", alignItems:"center", justifyContent:"space-between", borderRadius:40, marginHorizontal:5, paddingHorizontal:22, paddingVertical:8,...styles.shadow}}>
              {item[1] ? 
              <Image source={item[1]} />:null
              }
              <Text style={styles.text}>{item[0]}</Text>
            </TouchableOpacity>
          }
          
        />
      </View>
      <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:20, marginVertical:10, alignItems:"center"}}>
        <Text style={[styles.headingText]}>Top Products</Text>
        <Text style={styles.text} >SHOW ALL</Text>
      </View>

      <View>
        <FlatList
          data={Products}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item,index)=> index}
          style={{marginVertical:10, marginHorizontal:20 }}
          renderItem={ ({item,index}) => 
            <TouchableOpacity style={{backgroundColor:"#FCFEFF", height:180, alignItems:"center", borderRadius:12, marginHorizontal:5, paddingHorizontal:12, paddingVertical:8}}>
              <Image source={item.image} style={{width:100, height:100}} />
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
        }
        />
      </View>

      <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:20, marginVertical:10, alignItems:"center"}}>
        <Text style={[styles.headingText]}>Recomendation</Text>
        <Text style={styles.text} >SHOW ALL</Text>
      </View>

      <View>
        <FlatList
          data={Products}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item,index)=> index}
          style={{marginVertical:10, marginHorizontal:20 }}
          renderItem={ ({item,index}) => 
            <TouchableOpacity style={{flexDirection:"row",backgroundColor:"#FCFEFF", height:100, alignItems:"center", borderRadius:12, marginHorizontal:5, paddingHorizontal:12, paddingVertical:8}}>
              <Image source={item.image} style={{width:70, height:70}} />
              <View style={{}}>
                <Text style={[styles.subheadingText, {alignSelf:"flex-start"}]}>{item.name}</Text>
                <View style={{marginRight:10}}>
                  <View style={{flexDirection:"row"}}>
                    <Text style={styles.text}>weight</Text>
                    <Text style={[styles.subheadingText,, {textTransform:"none", fontSize:16}]}> {item.weight}g</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"flex-end"}}>
                    <Text style={[styles.headingText, {fontSize:22}]}>${item.price}</Text>
                    <Text style={[styles.text, {textTransform:"none", fontSize:14}]}>/kg</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={{backgroundColor:"#FF844C", borderRadius:8, alignSelf:"flex-end" }}>
                <Feather name='plus' size={14} color={"white"} style={{padding:10}} />
              </TouchableOpacity>
            </TouchableOpacity>
        }
        />
      </View>
      </ScrollView>
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
    fontFamily:"Raleway-Regular",
    textTransform:"capitalize"
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