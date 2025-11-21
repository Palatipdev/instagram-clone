<View style={storyStyles.tapZones} pointerEvents="box-none">
  {/* Left zone - previous story */}
  <Pressable
    style={storyStyles.leftZone}
    pointerEvents="box-only"
    onPress={() => {
      if (currentStoryIndex > 0) {
        setCurrentStoryIndex(currentStoryIndex - 1);
      }
    }}
  />

  <Pressable
    style={storyStyles.rightZone}
    pointerEvents="box-only"
    onPress={() => {
      if (
        selectedStory &&
        currentStoryIndex < stories[selectedStory].length - 1
      ) {
        setCurrentStoryIndex(currentStoryIndex + 1);
      } else {
        const storyKeys = Object.keys(stories);
        {
          /* ['tab','revolver','billboard']} */
        }
        const currentIndex = storyKeys.indexOf(selectedStory);

        if (currentIndex < storyKeys.length - 1) {
          setSelectedStory(storyKeys[currentIndex + 1]);
          setCurrentStoryIndex(0);
        } else {
          setStoryVisible(false);
        }
      }
    }}
  />
</View>;
