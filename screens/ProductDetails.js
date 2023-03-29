import { StyleSheet, Text, View, ScrollView, Image, StatusBar, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import React from 'react'

const ProductDetails = ({ navigation, route }) => {
  const [favorited, setFavorite] = React.useState(false)
  const [quantity, setQuantity] = React.useState(1)
  const product = route.params.product

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
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#F4F4FC"} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
				<View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:20, marginVertical:10}}>
						<TouchableOpacity onPress={()=> navigation.goBack() }>
								<AntDesign name='left'  size={26} color={"black"}/>
						</TouchableOpacity>
						<TouchableOpacity onPress={()=> setFavorite(!favorited)}>
								<Ionicons name={favorited ? 'heart':"heart-outline"} size={26} color={favorited ? "red":"black"} />
						</TouchableOpacity>
				</View>
				<View style={{alignItems:"center"}}>
					<Text style={[styles.headingText]}>{product.name}</Text>
					<Text style={[styles.subheadingText,{color:"#606368", marginTop:10}]}>Vegetables</Text>
				</View>
				<Image source={require("../assets/brocolli4.png")} style={{width:350, height:350}} />
				<View style={{flexDirection:"row", justifyContent:"center"}}>
					<Text style={[styles.subheadingText, {fontSize:22}]}>${product.price}</Text>
					<Text style={[styles.text, {textTransform:"none", fontSize:14}]}>/kg</Text>
				</View>
				<View style={{flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", marginHorizontal:60, marginVertical:10}}>
					<TouchableOpacity style={{backgroundColor:"white", borderRadius:8, padding:20}} onPress={()=> setQuantity(quantity-1)}>
						<AntDesign name='minus' size={20} color={"black"} />
					</TouchableOpacity>
					<Text style={[styles.subheadingText, {fontSize:26}]}>{quantity}</Text>
					<TouchableOpacity style={{backgroundColor:"white", borderRadius:8, padding:20}} onPress={()=> setQuantity(quantity+1)}>
						<AntDesign name='plus' size={20} color={"black"} />
					</TouchableOpacity>
				</View>
				<Text style={[styles.subheadingText,{textAlign:"center", marginVertical:10}]}>Showcases</Text>
				<View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:10, marginVertical:10}}>
					<Image source={require("../assets/brocolli.png")} style={{width:72, height:72, borderRadius:12, backgroundColor:"white", padding:4}} />
					<Image source={require("../assets/brocolli1.png")} style={{borderRadius:12, backgroundColor:"white", padding:4}}/>
					<Image source={require("../assets/brocolli2.png")} style={{borderRadius:12, backgroundColor:"white", padding:4}}/>
					<Image source={require("../assets/brocolli3.png")} style={{borderRadius:12, backgroundColor:"white", padding:4}}/>
				</View>
				<TouchableOpacity style={{backgroundColor:"#FF844C", borderRadius:8, marginHorizontal:20, marginVertical:20, paddingHorizontal:70, paddingVertical:20}}>
					<Text style={[styles.subheadingText,{fontSize:20, color:"white", textAlign:"center"}]}>Add to cart</Text>
				</TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default ProductDetails

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