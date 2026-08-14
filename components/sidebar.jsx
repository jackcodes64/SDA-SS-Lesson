import { Link, useRouter } from "expo-router";
import { useContext, useRef } from "react";
import { Alert, Animated, Image, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { images } from "../constants/images";
import { SidebarContext } from "../contexts/sidebar";
import { ThemeContext } from "../contexts/theme";

const SideBar = ()=>{

    const [isDark, setIsDark] = useContext(ThemeContext)
    const animSideBar = useRef( new Animated.Value(300)).current;
    Animated.spring(animSideBar, {
    toValue: 0,
    useNativeDriver: true,
    friction: 8,
    tension: 80,
    }).start();

    const router = useRouter();
    const [sidebar, setSideBar] = useContext(SidebarContext);

    const onShare = async()=>{
            try{
                const result = await Share.share({
                    message: "Download New SDA SS Lesson App! at https://tichtech.co.ke", //update on availability + rate app link
                    title: "SDA SS Lesson App",
                    url: "https://tichtech.co.ke" //update
                });
    
                if(result.action === Share.sharedAction){
                    if(result.activityType){
                        //Alert.alert("shared with activity: ", result.activityType);
                        console.log("shared with activity: ", result.activityType);
                    } else{
                        console.log("Shared")
                    }
                } else if(result === Share.dismissedAction){
                    console.log("Dismissed");
                }
            } catch (error){
                Alert.alert("Error", error.message);
            }
        };

    function ShowSideBar (){
        return(
            <Animated.View style={[isDark? styles.sidebar: styles.sidebarLight, {transform: [{ translateX: animSideBar }]}]}>
                              <View style={{alignItems: "center", backgroundColor: "#acc4b7"}}>
                                <Image source={images.logo} resizeMode="contain" style={{height: 100}}/>
                                <Text style={{color: "rgb(7, 101, 7)", fontStyle: "italic", fontSize: 18, marginBottom: 10}}> SDA SS LESSON </Text>
                              </View>
    
                              <View style={{justifyContent: "space-around", height: "75%"}}>
                              <View style={{padding: 20, gap: 10}}>
                                <TouchableOpacity onPress={()=>router.replace("./")} style={{flexDirection: "row", gap: 20}}> 
                                    <Image source={images.home} resizeMode="contain" style={{width: 24, height: 24}}/>
                                    <Text style={{fontSize: 18, color: "white"}}> Home </Text>
                                </TouchableOpacity> 
    
                                <TouchableOpacity onPress={()=>router.replace("./search")} style={{flexDirection: "row", gap: 20}}> 
                                    <Image source={images.searchn} resizeMode="contain" style={{width: 24, height: 24}}/>
                                    <Text style={{fontSize: 18, color: "white"}}> Search </Text>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={()=>router.replace("./settings")} style={{flexDirection: "row", gap: 20}}> 
                                    <Image source={images.settings} resizeMode="contain" style={{width: 24, height: 24}}/>
                                    <Text style={{fontSize: 18, color: "white"}}> Settings </Text>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={()=>router.replace("./about")} style={{flexDirection: "row", gap: 20}}> 
                                    <Image source={images.about} resizeMode="contain" style={{width: 26, height: 24}}/>
                                    <Text style={{fontSize: 18, color: "white"}}>About </Text>
                                </TouchableOpacity>
    
                              </View>
    
                              <View style={{borderBottomColor: "#acc4b7", borderBottomWidth: 0.5}}></View>
    
                              <View style={{padding: 20, gap: 10,}}>
                                <Link href={"https://tichtech.co.ke"}>
                                    <View style={{flexDirection: "row", gap: 20}}>
                                        <Image source={images.rate} resizeMode="contain" style={{width: 24, height: 24}}/>
                                        <Text style={{fontSize: 18, color: "white"}}> Rate App </Text>
                                    </View>
                                </Link>
    
                                <TouchableOpacity onPress={onShare} style={{flexDirection: "row", gap: 20}}> 
                                    <Image source={images.share} resizeMode="contain" style={{width: 24, height: 24}}/>
                                    <Text style={{fontSize: 18, color: "white"}}> Share App </Text>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={()=>router.push("./settings")} style={{flexDirection: "row", gap: 20}}> 
                                    <Image source={images.fontsize} resizeMode="contain" style={{width: 30, height: 30}}/>
                                    <Text style={{fontSize: 18, color: "white"}}>Font Size </Text>
                                </TouchableOpacity>

                                <Link href={"https://baremetals.co.ke/sda-lesson-privacy-policy.html"}>
                                    <View style={{flexDirection: "row", gap: 20}}>
                                        <Image source={images.privacy} resizeMode="contain" style={{width: 24, height: 24}}/>
                                        <Text style={{fontSize: 18, color: "white"}}> Privacy Policy</Text>
                                    </View>
                                </Link>
    
                              </View>
                              
                              <View style={{borderBottomColor: "#acc4b7", borderBottomWidth: 0.5, marginBottom: 20}}></View>
    
                              <View style={{padding: 20, gap: 1, marginTop: 10}}>
                                <Text style={isDark? {color: "#acc4b7"}:{color: "black"} }>SDA SS Lesson, v1.0.0.1, Crescent.</Text>
                                <Link href="https://tichtech.co.ke" style={isDark? styles.copyright: styles.copyrightLight}> 
                                  <Text style={{fontSize: 18, color: 'white'}}>©</Text> TichTech Solutions, 2026.
                                </Link>
                              </View>
                              </View>
                            </Animated.View>
        )
    }
 return(
    <View>
        {sidebar && <ShowSideBar/>}
    </View>

 )
}

const styles = StyleSheet.create({
    copyright:{
        color: "#acc4b7", 
        fontStyle: "italic"
    },
    copyrightLight:{
        color: "black", 
        fontStyle: "italic"
    },
    sidebar: {
        zIndex: 2000, 
        backgroundColor: "#022a05", 
        top: 0, 
        left: 0, 
        position: "absolute", 
        width: "75%", 
    },
    sidebarLight: {
        zIndex: 2000, 
        backgroundColor: "#729a74", 
        top: 0, 
        left: 0, 
        position: "absolute", 
        width: "75%", 
    }
})

export default SideBar;