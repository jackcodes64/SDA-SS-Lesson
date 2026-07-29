import { useContext, useState } from "react";
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { FontContext } from "../contexts/font";
import { FontSetContext } from "../contexts/fontset";

const FontSet = ()=>{
    const [font, setFont] = useContext(FontContext);
    const [fontSet, setFontSet] = useContext(FontSetContext);
    let [fontIndicator, setFontIndicator] = useState(font);

    function handleCancel(){
        setFontSet(false);
    }
    function handleSave(){
        setFont(fontIndicator);
        setFontSet(false)
        ToastAndroid.show("Saved", ToastAndroid.LONG);
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 25, backgroundColor: "black", color:"white", width: "100%", paddingLeft: "20%", borderWidth: 4, borderColor: "#003399" }}>Font Size Settings</Text>
            <View style={{ gap: 10, padding: 10, flexDirection: "row",alignItems: "center", color:"white", width: "100%", }}>
                
                <TouchableOpacity onPress={()=>setFontIndicator("small")} style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{ fontSize: 17 }}> Small: </Text>
                    <View style={[{borderWidth: 3, borderColor: "black", padding: 4, marginHorizontal: 10, borderRadius: "50%"}, fontIndicator=="small"? {backgroundColor: "blue"}: {backgroundColor: "white"}]}></View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>setFontIndicator("medium")} style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{ fontSize: 17 }}> Medium: </Text>
                    <View style={[{borderWidth: 3, borderColor: "black", padding: 4, marginHorizontal: 10, borderRadius: "50%"}, fontIndicator=="medium"? {backgroundColor: "blue"}: {backgroundColor: "white"}]}></View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>setFontIndicator("large")} style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{ fontSize: 17 }}> Large: </Text>
                    <View style={[{borderWidth: 3, borderColor: "black", padding: 4, marginHorizontal: 10, borderRadius: "50%"}, fontIndicator=="large"? {backgroundColor: "blue"}: {backgroundColor: "white"}]}></View>
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

export default FontSet;