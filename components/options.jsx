import { useRouter } from "expo-router";
import { useContext, useRef } from "react";
import { Alert, Animated, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../contexts/theme";

const Options = () => {
    const [isDark, setIsDark] = useContext(ThemeContext);

    const animOptions = useRef( new Animated.Value(300)).current;
    Animated.spring(animOptions, {
        toValue: 0,
        useNativeDriver: true,
        friction: 8,
        tension: 80
    }).start()

    const router = useRouter();

    const onShare = async()=>{
        try{
            const result = await Share.share({
                message: "Download New SDA Sabbath School Lesson App! at https://baremetals.co.ke", //update on availability
                title: "SDA Lesson App",
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
    return (
        <Animated.View style={[styles.options, {transform: [{ translateX: animOptions }]}]}>
            <TouchableOpacity onPress={onShare} style={{marginBottom: 5}}> 
                <Text style={{fontSize: 16, color: "white"}}> <Text style={!isDark? {color: "#729a74"} : {color: "green"}}>⚬ </Text> Share App</Text>
            </TouchableOpacity>

            <View style={{borderBottomColor: "#3d413f", borderBottomWidth: 0.5}}></View>

            <TouchableOpacity onPress={()=>router.push("./settings")} style={{marginBottom: 5}}> 
                <Text style={{fontSize: 16, color: "white"}}> <Text style={!isDark? {color: "#729a74"} : {color: "green"}}>⚬ </Text> Rate App </Text>
            </TouchableOpacity>

            <View style={{borderBottomColor: "#3d413f", borderBottomWidth: 0.5}}></View>

            <TouchableOpacity onPress={()=>router.push("./about")} style={{marginBottom: 5}}> 
                <Text style={{fontSize: 16, color: "white"}}> <Text style={!isDark? {color: "#729a74"} : {color: "green"}}>⚬ </Text> About App </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    options: {
        zIndex: 2006,
        backgroundColor: "#010d02",
        padding: 5, 
        paddingLeft: 10,
        top: 0,
        right: 0, 
        position: "absolute",
        width: "45%",
        height: 90,
        borderColor: "white",
        borderWidth: 0,
        borderLeftWidth: 1.9,
        borderBottomWidth: 0.9,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 20
    }
})
export default Options;