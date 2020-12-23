import React from 'react';
import { View, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Video } from 'expo-av';



class App extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
              
          };
        }

    render(){
    return (
      <View style={{height:'100%', backgroundColor:"#ffffff", marginTop:"10%"}}>
          <View style={{justifyContent:'space-around', display:"flex", alignItems:"center", flexDirection:"row", paddingTop:'2%'}}>
            <TouchableOpacity>
              <Icon name="bars" size={20} color='black'/>
            </TouchableOpacity >
            <View style={{width:'80%'}}> 
              <Searchbar placeholder="Search" style={{backgroundColor:"#f0f0f0", elevation:20, maxHeight:"60%"}}/>
            </View>
          </View>
          <View style={{backgroundColor:'#eee', marginTop:'1%', paddingTop:'2%', paddingBottom:'5%', height:'100%'}}>
          <ScrollView>
              <View style={{marginBottom:'5%', elevation:20, padding:"2%"}}>
                  <Video shouldPlay={true} source={{uri: 'https://content.jwplatform.com/manifests/yp34SRmf.m3u8'}} isMuted={false} useNativeControls  resizeMode="cover" style={{width:'100%',height:350}}/>
                <View style={{justifyContent:"flex-start",padding:'2%', position:"relative", display:"flex", flexDirection:"row", alignItems:"center",display:"flex", width:"100%"}}>
              <View style={{justifyContent:"center",display:"flex", flexDirection:"row", alignItems:"center"}}>
              <View>
                  <TouchableOpacity>
                    <Icons name="heart" color='black' size={25}/>
                  </TouchableOpacity>
              </View>
              </View>
            <View style={{justifyContent:"center",display:"flex", marginLeft:20, flexDirection:"row", alignItems:"center"}}>
              <View>
                <TouchableOpacity>
                  <Icon name="user-plus" color="black" size={25}/>
                </TouchableOpacity>
              </View>
            </View>
          
          </View>
      </View>
      <View style={{marginBottom:'5%', elevation:20, padding:"2%"}}>
          <Video  source={{uri: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'}} isMuted={false} useNativeControls  resizeMode="cover"  style={{width:'100%',height:400}}/>
              <View style={{justifyContent:"flex-start",padding:'2%', position:"relative", display:"flex", flexDirection:"row", alignItems:"center",display:"flex", width:"100%"}}>
                  <View style={{justifyContent:"center",display:"flex", flexDirection:"row", alignItems:"center"}}>
                     <View>
                      <TouchableOpacity>
                        <Icons name="heart" color='black' size={25}/>
                      </TouchableOpacity>
                     </View>
                  </View>
                  
                  <View style={{justifyContent:"center",display:"flex", marginLeft:20, flexDirection:"row", alignItems:"center"}}>
                     <View>
                        <TouchableOpacity>
                          <Icon name="user-plus" color="black" size={25}/>
                        </TouchableOpacity>
                        </View>
                    </View>
                  </View>
              </View>
              <View style={{marginBottom:'5%', elevation:20, padding:"2%"}}>
                 <Video  source={{uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'}} isMuted={false} useNativeControls  resizeMode="cover"  style={{width:'100%',height:400}}/>
                    <View style={{justifyContent:"flex-start",padding:'2%', position:"relative", display:"flex", flexDirection:"row", alignItems:"center",display:"flex", width:"100%"}}>
                  
                  <View style={{justifyContent:"center",display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <View>
                      <TouchableOpacity>
                        <Icons name="heart" color='black' size={25}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                  
                  <View style={{justifyContent:"center",display:"flex", marginLeft:20, flexDirection:"row", alignItems:"center"}}>
                     <View>
                        <TouchableOpacity>
                          <Icon name="user-plus" color="black" size={25}/>
                        </TouchableOpacity>
                        </View>
                    </View>
                  </View>
              </View>
            </ScrollView>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  video:{
    width:'100%',
    height:'80%', 
    marginTop:"25%",
    elevation:20
  }, 
});

export default App;
