import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, Dimensions, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';
import COLORS from '../const/colors';


const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')

export default function OnBoardScreen({navigation}) {
    return (

        <View style={styles.container}>

     

              <View style={styles.sliderContainer}>
                <Swiper
                  autoplay
                  horizontal={false}
                  height={300}
                  activeDotColor="#FF6347">
                  <View style={styles.slide}>
                    <Image
                      source={require('../assets/coob.png')}
                      resizeMode="cover"
                      style={styles.sliderImage}
                    />
                  </View>
                  <View style={styles.slide}>
                    <Image
                      source={require('../assets/coob2.jpg')}
                      resizeMode="cover"
                      style={styles.sliderImage}
                    />
                  </View>
                  <View style={styles.slide}>
                    <Image
                      source={require('../assets/coob2.jpg')}
                      resizeMode="cover"
                      style={styles.sliderImage}
                    />
                  </View>
                </Swiper>
     </View>

  
    
  
          <View style={{paddingHorizontal:20 , paddingTop:20}}>
            <View>
              <Text style={styles.title}>Find Your</Text>
              <Text style={styles.title}>Sweet Home</Text>
            </View>
  
            <View style={{marginTop:10}}>
              <Text style={styles.textstyle}>Schedule Visit in Just a Few Clicks</Text>
              <Text style={styles.textstyle}>Just a Few Clicks</Text>
            </View>
  
  
          </View>
  
          <View
          style={{flex: 1,justifyContent: 'flex-end',paddingBottom: 40, }}>

                <Pressable onPress={() => navigation.navigate('HomeScreen')}>
            <View style={styles.btn}>
              <Text style={{color: 'white'}}>Get Started</Text>
            </View>
              </Pressable>
         
  
        </View>
        
  
    </View>
       
    );
}

const styles = StyleSheet.create({

    container:{
      flex:1,
    },
  
    sliderContainer: {
      height: 400,
      width: '90%',
      marginTop: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
    },
  
    wrapper: {},
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: 'transparent',
      borderRadius: 8,
    },
    sliderImage: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
    },
   
    title:{
      fontSize:32,
      fontWeight:'bold',
    },
    textstyle:{
      fontSize:14,
      color:COLORS.grey
    },
  
    btn: {
      height: 60,
      marginHorizontal: 20,
      backgroundColor: 'black',
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
  });
  
