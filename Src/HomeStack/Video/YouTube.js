import React, { useState } from "react";
import {View,TextInput,StyleSheet,Dimensions,Pressable,Text,Button} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {useSelector, useDispatch} from 'react-redux';
import Clipboard from "@react-native-clipboard/clipboard";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const YouTube=({navigation})=>{

    const setString = () => {
        const success = Clipboard.setString('This text was copied to the clipboard by React Native');
        console.log(`Clipboard.setString success? ${success}`);
      };
    
    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['#000428', '#004e92']}
                style={styles.linearGradient}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}>
                    <View style={{
                        marginTop: 10,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        width: 300,
                        borderRadius: 6,
                        borderWidth: 2,
                        borderColor: '#ffffff',justifyContent:"center",alignItems:'center'}}>
                        <TextInput
                            multiline={true}
                            placeholder={'Try pasting here afterwards'}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.buttonBox}>
                        <Button onPress={setString} title="Copy to clipboard" />
                    </View>
                    <View style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',}}>
                        <Pressable style={styles.button} onPress={()=>navigation.navigate('Player')}>
                            <Text style={{color:"white",fontWeight: 'bold'}}>Play</Text>
                        </Pressable>
                    </View>
            </LinearGradient>
        </View>
    )
}


export default YouTube;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:"center",
      alignItems:"center",
    },
    input: {
      color: 'black',
      fontSize: 17,
      fontWeight: 'bold',
    },
    linearGradient: {
        height: windowHeight,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 60,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      buttonBox: {
        maxWidth: 300,
        marginTop: '1rem'
      },
      textInput: {
        borderColor: '#AAB8C2',
        borderWidth: 1,
        height: 50,
        marginTop: 20,
        padding: 5
      }
})