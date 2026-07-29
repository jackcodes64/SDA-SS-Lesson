import { useState } from "react";
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";

const UpdateSet = ({update, setUpdate, updateSet, setUpdateSet})=>{
 
    const [indicator, setIndicator] = useState(update);

    function handleCancel(){
        setUpdateSet(false);
    }
    function handleSave(){
        setUpdate(indicator);
        setUpdateSet(false);
        ToastAndroid.show("Saved", ToastAndroid.LONG);
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 25, backgroundColor: "black", color:"white", width: "100%", paddingLeft: "10%", borderWidth: 4, borderColor: "#003399" }}> Auto Updates Settings</Text>
            <View style={{ padding: 10, flexDirection: "row", alignItems: "center", color:"white", width: "100%", justifyContent: "space-evenly" }}>
            
                <TouchableOpacity onPress={()=>setIndicator(false)} style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{ fontSize: 17 }}> Deny: </Text>
                    <View style={[{borderWidth: 3, borderColor: "black", padding: 4, marginHorizontal: 10, borderRadius: "50%"}, !indicator? {backgroundColor: "blue"}: {backgroundColor: "white"}]}></View>
                </TouchableOpacity>
                 
                <TouchableOpacity onPress={()=>setIndicator(true)} style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{ fontSize: 17 }}> Allow: </Text>
                    <View style={[{borderWidth: 3, borderColor: "black", padding: 4, marginHorizontal: 10, borderRadius: "50%"}, indicator? {backgroundColor: "blue"}: {backgroundColor: "white"}]}></View>
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

export default UpdateSet;