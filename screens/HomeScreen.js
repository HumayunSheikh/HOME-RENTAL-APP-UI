import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Dimensions, Pressable, SafeAreaView ,ScrollView, TextInput, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../const/colors';
import houses from '../const/houses';

const {width} = Dimensions.get('screen');



export default function HomeScreen({navigation}) {

  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  
    const optionsList = [
        {title: 'Buy a Home', img: require('../assets/house1.jpg')},
        {title: 'Rent a Home', img: require('../assets/house2.jpg')},
      ];

      const categoryList = ['Popular', 'Recommended', 'Nearest'];

      const ListOptions = () => {
        return (
          <View style={styles.optionListsContainer}>
            {optionsList.map((option, index) => (
              <View style={styles.optionsCard} key={index}>
                {/* House image */}
                <Image source={option.img} style={styles.optionsCardImage} />
    
                {/* Option title */}
                <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                  {option.title}
                </Text>
              </View>
            ))}
          </View>
        );
      };

      const ListCategories = () => {

        return (

          <View style={styles.categoryListContainer}>

          {categoryList.map((category, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedCategoryIndex(index)}>

              <Text
                style={[
                  styles.categoryListText,
                  index == selectedCategoryIndex && styles.activeCategoryListText,
                ]}>
                {category}

              </Text>
            </Pressable>
          ))}
        </View>

        );


      };


      const Card = ({houses}) => {
        return (
          <Pressable
            activeOpacity={0.8}
            onPress={() => navigation.navigate('DetailsScreen', houses)}>

            <View style={styles.card}>
              {/* House image */}
              <Image source={houses.image} style={styles.cardImage} />
              <View style={{marginTop: 10}}>
                {/* Title and price container */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    {houses.title}
                  </Text>
                  <Text
                    style={{fontWeight: 'bold', color: COLORS.blue, fontSize: 16}}>
                    $1,500
                  </Text>
                </View>
    
                {/* Location text */}
    
                <Text style={{color: COLORS.grey, fontSize: 14, marginTop: 5}}>
                  {houses.location}
                </Text>
    
                {/* Facilities container */}
                <View style={{marginTop: 10, flexDirection: 'row'}}>
                  <View style={styles.facility}>
                    <Icon name="hotel" size={18} />
                    <Text style={styles.facilityText}>2</Text>
                  </View>
                  <View style={styles.facility}>
                    <Icon name="bathtub" size={18} />
                    <Text style={styles.facilityText}>2</Text>
                  </View>
                  <View style={styles.facility}>
                    <Icon name="aspect-ratio" size={18} />
                    <Text style={styles.facilityText}>100m</Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        );
      };
        
  
    return (
   
  
      <ScrollView>
    <SafeAreaView style={{backgroundColor:COLORS.white, flex:1}}>
  
      <StatusBar translucent={false} backgroundColor={COLORS.white} barStyle="dark-content"/>
  
      <View style={styles.header}>
  
        <View>
          <Text style={{color:COLORS.grey}}>Location</Text>
          <Text style={{color:COLORS.grey, fontSize:20}}>America</Text>
  
        </View>
  
        <Image source={require('../assets/person.jpg')} style={styles.Image}/>
  
  
      </View>
  
        
        <View style={{flexDirection:'row' , justifyContent:'space-between' ,paddingHorizontal:20}}>
  
  
          <View style={styles.searchInputContainer}>
  
          <Icon name="search" color={COLORS.grey} size={25} />
              <TextInput placeholder="Search address, city, location"/>
  
          </View>
  
          <View style={styles.sortBtn}>
              <Icon name="tune" color={COLORS.white} size={25} />
            </View>
  
          
        </View>
        <ListOptions />
        <ListOptions />

        <ListCategories />


        <FlatList
        snapToInterval={width - 20}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
        data={houses}
        horizontal
        renderItem={({item}) =>

         <Card houses={item}/>

        }
        />

  
    </SafeAreaView>
        </ScrollView>
  
  
  );
  
  }

const styles = StyleSheet.create({
    header:{
        paddingVertical:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20
      },
      Image:{
        height:50,
        width:50,
        borderRadius:25,
      },
    
      searchInputContainer:{
        height: 50,
        backgroundColor: COLORS.light,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 12,
    
      },
      sortBtn: {
        backgroundColor: COLORS.dark,
        height: 50,
        width: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
      },
    
      optionListsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20,
      },
    
      optionsCard: {
        height: 210,
        width: width / 2 - 30,
        elevation: 15,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingVertical:10
      },
    
      optionsCardImage: {
        height: 140,
        borderRadius: 10,
        width: '100%',
      },

      categoryListText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: COLORS.grey,
      },
      activeCategoryListText: {
        color: COLORS.dark,
        borderBottomWidth: 1,
        paddingBottom: 5,
      },
      categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 40,
      },
      card: {
        height: 250,
        backgroundColor: COLORS.white,
        elevation: 10,
        width: width - 40,
        marginRight: 20,
        padding: 15,
        borderRadius: 20,
        marginVertical:10,
      },
      cardImage: {
        width: '100%',
        height: 120,
        borderRadius: 15,
      },
      facility: {
        flexDirection: 'row',
         marginRight: 15
        },
      facilityText: {
        marginLeft: 5, 
        color: COLORS.grey
      },
});
