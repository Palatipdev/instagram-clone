import { StyleSheet, Image, Text, View, SafeAreaView , useWindowDimensions} from 'react-native';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

export default function App() {
  const {width} = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <Fontisto name="plus-a" size={24} color="black" />

        <View style={styles.centerLogo}>
          <Image
            source={require('./assets/InstaFont.png')}
            style={styles.logo}
          />
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>

        <FontAwesome5 name="heart" size={24} color="black" />
      </View>

      <View style={styles.storiesBar}>
        <View style={styles.storiesContainer}>
          <FontAwesome name="user-circle" size={75} color="grey" />
          <View style={styles.plusIcon}>
            <Entypo name="circle-with-plus" size={24} color="black" />
          </View>
          <Text style={styles.storyIcon} numberOfLines={1} ellipsizeMode="tail">
            Your Story{' '}
          </Text>
        </View>

        <View style={styles.storiesContainer}>
          <View style={styles.storiesBorder}>
            <Image
              source={require('./assets/tab.jpg')}
              style={styles.storiesImages}
            />
          </View>
          <Text
            style={styles.storyIconOther}
            numberOfLines={1}
            ellipsizeMode="tail">
            TAB{' '}
          </Text>
        </View>

        <View style={styles.storiesContainer}>
          <View style={styles.storiesBorder}>
            <Image
              source={require('./assets/artworks-000211750217-7fes6t-t500x500.jpg')}
              style={styles.storiesImages}
            />
          </View>
          <Text
            style={styles.storyIconOther}
            numberOfLines={1}
            ellipsizeMode="tail">
            Revolver Upstairs{' '}
          </Text>
        </View>

        <View style={styles.storiesContainer}>
          <View style={styles.storiesBorder}>
            <Image
              source={require('./assets/images.png')}
              style={styles.storiesImages}
            />
          </View>
          <Text
            style={styles.storyIconOther}
            numberOfLines={1}
            ellipsizeMode="tail">
            billboard saturday{' '}
          </Text>
        </View>
      </View>

      <View style={styles.postFeeds}>
        <View style = {styles.postHeader}>
            <View style = {styles.posterInfo}>
              <Image source = {require('./assets/bbclogo.jpg')} style = {styles.postLogo}/>
              <Text>bbcnews</Text>
              <MaterialIcons name="verified" size={14} color="#1EA0F7" />
            </View>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>

        <Image source = {require('./assets/filip-mishevski-c5QdMcuFlgY-unsplash.jpg')} style = {{width: width , height: width, resizeMode: 'cover'}}/>
        <View style = {styles.postBottomBar}>
          <View style = {styles.postBottomBarLeft}>
            <Feather name="heart" size={27} color="black" />
            <Feather name="message-circle" size={27} color="black" />
            <Ionicons name="paper-plane-outline" size={27} color="black" />
          </View>
          <FontAwesome name="bookmark-o" size={27} color="black" />
        </View>
        <View style = {styles.postBottomText}>
          <Text style= {{fontWeight: 600}}>4027 likes</Text>
          <Text numberOfLines = {1} ellipsizeMode = "tail" >Follow along as Thomas Henry uncover the deep secret of the UK's government </Text>
          <Text style = {{color: 'grey'}}> more </Text>
        </View>
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.bottomIcon}>
          <Entypo name="home" size={27} color="black" />
          <Octicons name="video" size={27} color="black" />
          <Ionicons name="paper-plane-outline" size={27} color="black" />
          <MaterialCommunityIcons
            name="movie-open-outline"
            size={27}
            color="black"
          />
          <FontAwesome name="user-circle" size={27} color="grey" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  storiesBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingBottom: 15,
  },
  storyIcon: {
    color: 'grey',
    fontSize: 10,
    marginTop: 11,
  },
  storyIconOther: {
    color: 'black',
    fontSize: 10,
    marginTop: 5,
  },
  storiesContainer: {
    width: 100,
    alignItems: 'center',
  },
  storiesImages: {
    width: 75,
    height: 75,
    borderRadius: 50,
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: 'white',
  },
  storiesBorder: {
    borderWidth: 3,
    borderColor: '#DD2A7B',
    borderRadius: 50,
  },
  plusIcon: {
    position: 'absolute',
    right: 5,
    bottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  postFeeds: {
    flex: 1,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    paddingBottom: 10,
  },
  posterInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 140,
    paddingLeft: 10,
  },
  postLogo: {
    width: 35,
    height: 35,
    borderRadius: 40,
    
  },
  postBottomBar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 14,
    paddingBottom: 7,
  },

  postBottomBarLeft:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    paddingLeft: 5,
  },
  postBottomText:{
    marginLeft: 15,
    marginRight: 15,
  },
  bottomBar: {
    borderTopColor: '#dde3ed',
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  bottomIcon: {
    paddingTop: 10,
    paddingBottom: 20,
    marginRight: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  centerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 130,
    height: 50,
    resizeMode: 'contain',
  },

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 8,
    justifyContent: 'space-between',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
