import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";

const ResetSet = ({ resetSet, setResetSet, setNotify, setIsDark, setFont, setAwake, setUpdate})=>{
 

    function handleSave(){
        setResetSet(false);
        ToastAndroid.show("Cancelled", ToastAndroid.LONG);
    }
    function handleCancel(){
        setNotify(true);
        setIsDark(true);
        setFont("medium");
        setAwake(5);
        setUpdate(true);
        setResetSet(false);
        ToastAndroid.show("Erased Successfully!", ToastAndroid.LONG);
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 25, backgroundColor: "black", color:"white", width: "100%", paddingLeft: "10%", borderWidth: 4, borderColor: "#003399" }}>Updates Settings</Text>
            <View style={{ padding: 10, flexDirection: "row", alignItems: "center", color:"white", width: "100%", justifyContent: "space-evenly" }}>

            <Text style={{fontSize: 19}}>Are you sure you want to remove/delete all the settings and customizations you did?</Text> 

            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
                <TouchableOpacity onPress={()=>handleCancel()} style={styles.cancel}>
                    <Text style={{fontWeight: "bold" , fontSize: 19, color: "white"}}>Absolutely</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleSave()} style={styles.save}>
                    <Text style={{fontWeight: "bold" , fontSize: 19, color: "white", paddingLeft: 8}}>Cancel</Text>
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
        paddingHorizontal: 30, 
        padding: 5, 
        borderColor: "black" 
    }, 
    cancel: {
        width: "48%", 
        backgroundColor: "#882424", 
        borderWidth: 2,
        borderRadius: 50, 
        paddingHorizontal: 30, 
        padding: 5, 
        borderColor: "black"
    }
})

export default ResetSet;