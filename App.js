import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  useWindowDimensions,
  FlatList,
  ScrollView,
  Modal,
  TouchableOpacity,
  Pressable,
  Animated,
  PanResponder,
} from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useState } from "react";
// You can import supported modules from npm
import { Card } from "react-native-paper";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

export default function App() {
  const { width } = useWindowDimensions();
  const [pan] = useState(new Animated.ValueXY());

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => {
      return true;
    },

    // When user touch the screen
    onPanResponderMove: Animated.event([null, { dy: pan.y }], {
      useNativeDriver: false,
    }),
    // When user release the screen
    onPanResponderRelease: (event, gestureState) => {
      if (gestureState.dy > 100) {
        setStoryVisible(false);
        pan.setValue({ x: 0, y: 0 });
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  {
    /* Story Variable Declaration */
  }
  const [storyVisible, setStoryVisible] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = {
    tab: [
      require("./assets/tabStory1.png"),
      require("./assets/tabStory2.jpg"),
      require("./assets/tabStory3.gif"),
    ],

    revolver: [require("./assets/revolverStory1.jpg")],

    billboard: [require("./assets/billboardSaturdayStory1.jpg")],
  };

  const postImages = {
    bbc: [
      require("./assets/filip-mishevski-c5QdMcuFlgY-unsplash.jpg"),
      require("./assets/post2.jpg"),
      require("./assets/post3.jpg"),
    ],

    natgeo: [
      require("./assets/dolomite.jpg"),
      require("./assets/yosemite.jpg"),
    ],
  };
  const posts = [
    {
      id: 1,
      username: "bbcnews",
      images: postImages.bbc,
      profile: require("./assets/bbclogo.jpg"),
      likes: 4017,
      caption:
        "Follow along as Thomas Henry uncover the deep secret of the UK's government ",
    },
    {
      id: 2,
      username: "natgeo",
      images: postImages.natgeo,
      profile: require("./assets/natgeo.jpg"),
      likes: 20000,
      caption: "The beauty of nature. Yosemite and Dolomites.",
    },
  ];
  const PostItem = ({ post }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
      <View style={styles.postFeeds}>
        <View style={styles.postHeader}>
          <View style={styles.posterInfo}>
            <Image source={post.profile} style={styles.postLogo} />
            <Text>{post.username}</Text>
            <MaterialIcons name="verified" size={14} color="#1EA0F7" />
          </View>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>

        {/* Post Image Carousel */}
        <View>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={(event) => {
              const scrollPosition = event.nativeEvent.contentOffset.x;
              const index = Math.round(scrollPosition / width);
              setCurrentIndex(index);
            }}
            scrollEventThrottle={16}
          >
            {post.images.map((image, index) => (
              <Image
                key={index}
                source={image}
                style={{
                  width: width,
                  height: width,
                  resizeMode: "cover",
                }}
              />
            ))}
          </ScrollView>

          {/* Image COUNTER */}
          <View style={styles.imageCounter}>
            <Text style={styles.counterText}>
              {currentIndex + 1}/{post.images.length}
            </Text>
          </View>

          {/* Dots */}
          <View style={styles.dotsContainer}>
            {post.images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === currentIndex
                    ? styles.activeDot
                    : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>

        {/* Hearts and stuff */}
        <View style={styles.postBottomBar}>
          <View style={styles.postBottomBarLeft}>
            <Feather name="heart" size={27} color="black" />
            <Feather name="message-circle" size={27} color="black" />
            <Ionicons name="paper-plane-outline" size={27} color="black" />
          </View>

          <View>
            <FontAwesome name="bookmark-o" size={27} color="black" />
          </View>
        </View>

        {/* Post caption */}
        <View style={styles.postBottomText}>
          <Text style={{ fontWeight: 600 }}>{post.likes} likes</Text>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {post.caption}
          </Text>
          <Text style={{ color: "grey" }}> more </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top bar */}
      <View style={styles.topbar}>
        <Fontisto name="plus-a" size={24} color="black" />

        <View style={styles.centerLogo}>
          <Image
            source={require("./assets/InstaFont.png")}
            style={styles.logo}
          />
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>

        <FontAwesome5 name="heart" size={24} color="black" />
      </View>

      {/* STORIES */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storiesBar}
      >
        <View style={styles.storiesContainer}>
          <FontAwesome name="user-circle" size={75} color="grey" />
          <View style={styles.plusIcon}>
            <Entypo name="circle-with-plus" size={24} color="black" />
          </View>
          <Text style={styles.storyIcon} numberOfLines={1} ellipsizeMode="tail">
            Your Story{" "}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.storiesContainer}
          onPress={() => {
            setSelectedStory("tab");
            setStoryVisible(true);
            setCurrentStoryIndex(0);
          }}
        >
          <View style={styles.storiesBorder}>
            <Image
              source={require("./assets/tab.jpg")}
              style={styles.storiesImages}
            />
          </View>
          <Text
            style={styles.storyIconOther}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            TAB{" "}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.storiesContainer}
          onPress={() => {
            setSelectedStory("revolver");
            setStoryVisible(true);
            setCurrentStoryIndex(0);
          }}
        >
          <View style={styles.storiesBorder}>
            <Image
              source={require("./assets/artworks-000211750217-7fes6t-t500x500.jpg")}
              style={styles.storiesImages}
            />
          </View>
          <Text
            style={styles.storyIconOther}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Revolver Upstairs{" "}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.storiesContainer}
          onPress={() => {
            setSelectedStory("billboard");
            setStoryVisible(true);
            setCurrentStoryIndex(0);
          }}
        >
          <View style={styles.storiesBorder}>
            <Image
              source={require("./assets/images.png")}
              style={styles.storiesImages}
            />
          </View>
          <Text
            style={styles.storyIconOther}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            billboard saturday{" "}
          </Text>
        </TouchableOpacity>

        <View style={styles.storiesContainer}>
          <View style={styles.storiesBorder}>
            <FontAwesome name="user-circle" size={75} color="grey" />
          </View>
          <Text
            style={styles.storyIconOther}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            User 1
          </Text>
        </View>

        <View style={styles.storiesContainer}>
          <View style={styles.storiesBorder}>
            <FontAwesome name="user-circle" size={75} color="grey" />
          </View>
          <Text
            style={styles.storyIconOther}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            User 2
          </Text>
        </View>

        <View style={styles.storiesContainer}>
          <View style={styles.storiesBorder}>
            <FontAwesome name="user-circle" size={75} color="grey" />
          </View>
          <Text
            style={styles.storyIconOther}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            User 3
          </Text>
        </View>

        <View style={styles.storiesContainer}>
          <View style={styles.storiesBorder}>
            <FontAwesome name="user-circle" size={75} color="grey" />
          </View>
          <Text
            style={styles.storyIconOther}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            User 4
          </Text>
        </View>
      </ScrollView>

      {/* POST FEED */}
      <FlatList
        // Array of post
        data={posts}
        // render each one
        renderItem={({ item }) => <PostItem post={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 70 }}
      />
      <Modal
        visible={storyVisible}
        transparent={false}
        animationType="fade"
        onRequestClose={() => setStoryVisible(false)}
        supportedOrientations={["portrait"]}
      >
        <View style={storyStyles.storyModal}>
          {/* Header with progress bars */}
          <View style={storyStyles.storyHeader}>
            <View style={storyStyles.progressBars}>
              {selectedStory &&
                stories[selectedStory].map((_, index) => (
                  <View key={index} style={storyStyles.progressBarContainer}>
                    <View
                      style={[
                        storyStyles.progressBar,
                        index === currentStoryIndex &&
                          storyStyles.activeProgressBar,
                        index < currentStoryIndex &&
                          storyStyles.inactiveProgressBar,
                      ]}
                    />
                  </View>
                ))}
            </View>

            <TouchableOpacity
              style={storyStyles.closeButton}
              onPress={() => setStoryVisible(false)}
            >
              <Text style={storyStyles.closeButtonText}> x </Text>
            </TouchableOpacity>
          </View>

          {/* Story Image */}
          <Animated.View
            {...panResponder.panHandlers}
            style={{
              flex: 1,
              transform: [{ translateY: pan.y }],
            }}
          >
            {selectedStory && (
              <Image
                source={stories[selectedStory][currentStoryIndex]}
                style={storyStyles.storyImage}
                resizeMode="contain"
              />
            )}
          </Animated.View>
        </View>
      </Modal>
      {/* BOTTOM BAR */}
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

const storyStyles = StyleSheet.create({
  storyModal: {
    flex: 1,
    backgroundColor: "black",
  },
  storyHeader: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  progressBars: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 10,
  },
  progressBarContainer: {
    flex: 1,
    height: 3,
    backgroundColor: "white",
    borderRadius: 2,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "grey",
    borderRadius: 2,
  },
  activeProgressBar: {
    backgroundColor: "white",
  },
  closeButton: {
    position: "absolute",
    top: 50,
    right: 10,
    padding: 10,
  },
  closeButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  storyImage: {
    width: "100%",
    height: "100%",
  },
  tapZones: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
  },
  leftZone: {
    flex: 1,
  },
  rightZone: {
    flex: 1,
  },
});
const styles = StyleSheet.create({
  topbar: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  storiesBar: {
    paddingVertical: 10,
    paddingBottom: 15,
    height: 170,
  },
  storyIcon: {
    color: "grey",
    fontSize: 10,
    marginTop: 11,
  },
  storyIconOther: {
    color: "black",
    fontSize: 10,
    marginTop: 5,
  },
  storiesContainer: {
    width: 100,
    alignItems: "center",
  },
  storiesImages: {
    width: 75,
    height: 75,
    borderRadius: 50,
    resizeMode: "contain",
    borderWidth: 2,
    borderColor: "white",
  },
  storiesBorder: {
    borderWidth: 3,
    borderColor: "#DD2A7B",
    borderRadius: 50,
  },
  plusIcon: {
    position: "absolute",
    right: 10,
    bottom: 8,
    backgroundColor: "white",
    borderRadius: 10,
  },
  postFeeds: {
    flex: 1,
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
    paddingBottom: 10,
  },
  posterInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 140,
    paddingLeft: 10,
  },
  postLogo: {
    width: 35,
    height: 35,
    borderRadius: 40,
  },
  postBottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 14,
    paddingBottom: 7,
  },

  postBottomBarLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    paddingLeft: 5,
  },
  imageCounter: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#241b03",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  counterText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  dotsContainer: {
    bottom: -5,
    alignSelf: "center",
    flexDirection: "row",
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 30,
  },
  activeDot: {
    backgroundColor: "blue",
  },
  inactiveDot: {
    backgroundColor: "#d1cbbc",
  },
  postBottomText: {
    marginLeft: 15,
    marginRight: 15,
  },
  bottomBar: {
    borderTopColor: "#dde3ed",
    borderTopWidth: 1,
    flexDirection: "row",
  },
  bottomIcon: {
    paddingTop: 10,
    paddingBottom: 20,
    marginRight: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  centerLogo: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 130,
    height: 50,
    resizeMode: "contain",
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 8,
    justifyContent: "space-between",
  },
});
