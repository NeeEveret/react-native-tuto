import React,{useState} from 'react';
import { Text, View, StyleSheet, Image, Button,TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const App = () => {
  
  const [selectedImage,setSelectedImage] = useState(null)

  let openImagePickerAsync = async ()=> {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(permissionResult.granted === false){
      alert('Permiso denegao manin')
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync()

    if(pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({localUri: pickerResult.uri})
    console.log(pickerResult);
  }
  return (
    <View style={style.container}>
      <Text style={style.title}>Hello world</Text>
      <Image
      source={{uri: selectedImage!== null
        ? selectedImage.localUri
        : 'https://picsum.photos/200/200'}}
      style={style.image}
      />
      <Button
        color="red"
        title="Press me"
        onPress={() => Alert.alert("olabondi")}
      />
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={style.button}
      >
        <Text style={style.buttonText}>Press aqui manin</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#292929" },
  title: { fontSize: 30, color: "#fff" },
  image: {height: 200, width: 200, borderRadius: 100},
  button: {
    backgroundColor: 'deepskyblue',
    padding: 7,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  }
})

export default App;