import { useContext, useEffect } from "react";
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../contexts/theme";
import { ThemeSetContext } from "../contexts/themeset";

const ThemeSet = ()=>{
    const [isDark, setIsDark] = useContext(ThemeContext);
    const [setTheme, setThemeSet] = useContext(ThemeSetContext);
    let initial;

    useEffect(()=>{  //memorize initial theme - runs once in first render
        initial = isDark;
    }, [setTheme])

    function handleCancel(){
        setIsDark(initial);
        setThemeSet(false);
    }
    function handleSave(){
        setThemeSet(false);
        ToastAndroid.show("Saved", ToastAndroid.LONG);
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 25, backgroundColor: "black", color:"white", width: "100%", paddingLeft: "20%", borderWidth: 4, borderColor: "#003399" }}>Theme Settings</Text>
            <View style={{ gap: 10, padding: 10, flexDirection: "row",alignItems: "center", color:"white", width: "100%", }}>
                
                <TouchableOpacity onPress={()=>setIsDark(false)} style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{ fontSize: 17 }}>Light Theme: </Text>
                    <View style={[{borderWidth: 3, borderColor: "black", padding: 4, marginHorizontal: 10, borderRadius: "50%"}, isDark? {backgroundColor: "white"}: {backgroundColor: "blue"}]}></View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>setIsDark(true)} style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{ fontSize: 17 }}>Dark Theme: </Text>
                    <View style={[{borderWidth: 3, borderColor: "black", padding: 4, marginHorizontal: 10, borderRadius: "50%"}, isDark? {backgroundColor: "#1037e4"}: {backgroundColor: "white"}]}></View>
                </TouchableOpacity>
                
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
                <TouchableOpacity onPress={()=>handleCancel()} style={styles.cancel}>
                    <Text style={{fontWeight: "bold" , fontSize: 20, color: "white"}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleSave()} style={styles.save}>
                    <Text style={{fontWeight: "bold" , fontSize: 20, color: "white"}}>Save</Text>
                </TouchableOpacity>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 15,
        position: "absolute",
        top: 140,
        left: "2.5%",
        width: "95%",
        backgroundColor: "white",
        alignItems: "center",
        borderRadius: 3,
        padding: 5, borderWidth: 4, borderColor: "black", 
    },
    save: {
        width: "48%", 
        backgroundColor: "#206446", 
        borderWidth: 2, 
        borderRadius: 50, 
        paddingHorizontal: 50, 
        padding: 5, 
        borderColor: "black" 
    }, 
    cancel: {
        width: "48%", 
        backgroundColor: "#882424", 
        borderWidth: 2,
        borderRadius: 50, 
        paddingHorizontal: 40, 
        padding: 5, 
        borderColor: "black"
    }
})

export default ThemeSet;