<ScrollView
  contentContainerStyle={{ paddingBottom: 70 }}
  nestedScrollEnabled={true}
>
  <View style={styles.postFeeds}>
    <View style={styles.postHeader}>
      <View style={styles.posterInfo}>
        <Image
          source={require("./assets/bbclogo.jpg")}
          style={styles.postLogo}
        />
        <Text>bbcnews</Text>
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
        {postImages.map((image, index) => (
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
          {currentIndex + 1}/{postImages.length}
        </Text>
      </View>

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {postImages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : styles.inactiveDot,
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
      <Text style={{ fontWeight: 600 }}>4027 likes</Text>
      <Text numberOfLines={1} ellipsizeMode="tail">
        Follow along as Thomas Henry uncover the deep secret of the UK's
        government{" "}
      </Text>
      <Text style={{ color: "grey" }}> more </Text>
    </View>
  </View>
</ScrollView>;
