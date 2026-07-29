import { useState } from "react";
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";


const AwakeSet = ({awake, setAwake, awakeSet, setAwakeSet})=>{
    const [indicator, setIndicator] = useState(awake);

    function handleCancel(){
        setAwakeSet(false)
    }
    function handleSave(){
        setAwake(indicator)
        setAwakeSet(false);
        ToastAndroid.show("Saved", ToastAndroid.LONG); 
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 25, backgroundColor: "black", color:"white", width: "100%", paddingLeft: "20%", borderWidth: 4, borderColor: "#003399" }}>Focus Settings</Text>
            <View style={{ padding: 10, flexDirection: "row", alignItems: "center", color:"white", width: "100%", justifyContent: "space-evenly" }}>
            
                <TouchableOpacity onPress={()=>setIndicator(5)} style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{ fontSize: 17 }}> 5 min: </Text>
                    <View style={[{borderWidth: 3, borderColor: "black", padding: 4, marginHorizontal: 10, borderRadius: "50%"}, indicator==5? {backgroundColor: "blue"}: {backgroundColor: "white"}]}></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setIndicator(10)} style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{ fontSize: 17 }}> 10 min: </Text>
                    <View style={[{borderWidth: 3, borderColor: "black", padding: 4, marginHorizontal: 10, borderRadius: "50%"}, indicator==10? {backgroundColor: "blue"}: {backgroundColor: "white"}]}></View>
                </TouchableOpacity>
                 
                <TouchableOpacity onPress={()=>setIndicator(30)} style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{ fontSize: 17 }}> 30 min: </Text>
                    <View style={[{borderWidth: 3, borderColor: "black", padding: 4, marginHorizontal: 10, borderRadius: "50%"}, indicator==30? {backgroundColor: "blue"}: {backgroundColor: "white"}]}></View>
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

export default AwakeSet;