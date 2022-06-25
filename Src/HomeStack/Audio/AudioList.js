import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar,Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Sound from 'react-native-sound';
import LinearGradient from "react-native-linear-gradient";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DATA = [
  {
    id: "1",
    title: "first song",
    song:"first_song.mp3"
    
  },
  {
    id: "2",
    title: "second song",
    song:"second_song.mp3"
  },
  {
    id: "3",
    title: "third song",
    song:"third_song.mp3"
   
  },
  
];

const Item = ({ item, onPress, backgroundColor, textColor, }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    
  </TouchableOpacity>
);

const AudioList = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'black' : "grey";
    const color = item.id === selectedId ? 'white' : 'black';
    // console.log('..........',item);
    return (
      <Item
        item={item}
        onPress={() => {setSelectedId(item.id), navigation.navigate('PlayMusic',{data:item})}}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
            colors={['#000428', '#004e92']}
            style={styles.linearGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export {DATA, AudioList }

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
  },
  linearGradient: {
    height:windowHeight,
    width:windowWidth,
    justifyContent:"center",
    alignItems:"center",
    flex:1
  },
  item: {
    padding: 12,
    justifyContent:"center",
    alignItems:"center",
    marginVertical: 12,
    marginHorizontal: 10,
    borderRadius:30,
    
  },
  title: {
    fontSize:25,
  },
});