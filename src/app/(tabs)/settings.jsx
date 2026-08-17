import { usePathname } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Share, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import AwakeSet from "../../../components/awakeset";
import FontSet from "../../../components/fontset";
import NotifySet from "../../../components/notifyset";
import Options from "../../../components/options";
import ResetSet from "../../../components/reset";
import SideBar from "../../../components/sidebar";
import SwitchC from "../../../components/switch";
import ThemeSet from "../../../components/themeset";
import UpdateSet from "../../../components/updateset";
import { images } from "../../../constants/images";
import { FontContext } from "../../../contexts/font";
import { FontSetContext } from "../../../contexts/fontset";
import { NotifyContext } from "../../../contexts/notify";
import { SidebarContext } from "../../../contexts/sidebar";
import { ThemeContext } from "../../../contexts/theme";
import { ThemeSetContext } from "../../../contexts/themeset";


const Settings = ()=>{

  const [sidebar, setSideBar] = useContext(SidebarContext);
  const [isDark, setIsDark] = useContext(ThemeContext);
  const [font, setFont] = useContext(FontContext);
  const [themeSet, setThemeSet] = useContext(ThemeSetContext);
  const [fontSet, setFontSet] = useContext(FontSetContext);
  const [options, setOptions] = useState(false);
  const [notifySet, setNotifySet] = useContext(NotifyContext);
  const [notify, setNotify] = useState(false);
  const [awakeSet, setAwakeSet] = useState(false);
  const [awake, setAwake] = useState(5);
  const [updateSet, setUpdateSet] = useState(false);
  const [update, setUpdate] = useState(true);
  const [resetSet, setResetSet] = useState(false);

  const onShare = async()=>{
    try{
        const result = await Share.share({
            message: "Download New SDA SS Lesson App! at https:/play.google.com/store/apps/details?=id=com.tichtech.sdass_lesson", //update on availability + rate app link
            title: "SDA SS Lesson App",
            url: "https:/play.google.com/store/apps/details?=id=com.tichtech.sdass_lesson" //update
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

  function changeFontSize (){ //gen
    if(font=="medium"){
      setFont("large")
    } else if(font=="large"){
      setFont("small")
    } else{
      setFont("medium")
    } 
    ToastAndroid.show("Font Changed!", ToastAndroid.LONG);
  }

  function handleSidebar(){ //gen
    setOptions(false)
    setSideBar(!sidebar);
  }

  function handleOption(){
    setSideBar(false)
    setOptions(!options)
  }
  //start page with no sidebar or clears sidebar per departure
  const pathname = usePathname() //gen
  useEffect( //takes function (go define it outside or use arrow) and dependency array as arguments
    ()=>{ 
      setSideBar(false);
      setOptions(false);
      setFontSet(false);
      setThemeSet(false);
      setNotifySet(false);
      setAwakeSet(false);
      setUpdateSet(false);
    }, [pathname])

    return(
       <View style={{backgroundColor: "#010d02", height: "100%", paddingBottom: 185}}>
            <View style={{backgroundColor: "#010d02", minHeight: 47}}></View>
                
                <View style={isDark? styles.headerFull: styles.headerFullLight}> 
                        <TouchableOpacity onPress={()=>{handleSidebar()}} style={{maxHeight: 30}}>
                            <Image source={sidebar? images.x : images.menu} resizeMode="contain" style={{maxWidth: 40, maxHeight:30}}/>  
                        </TouchableOpacity>
    
                        <View style={styles.headerLeft}>
                            <TouchableOpacity onPress={()=>changeFontSize()} style={{padding: 7 }}>
                              <Image source={images.fontsize} resizeMode="contain" style={{width: 30, maxHeight:25}}/>
                            </TouchableOpacity> 

                            <TouchableOpacity onPress={()=>setIsDark(!isDark)} style={{padding: 10}}>
                              <SwitchC />
                            </TouchableOpacity> 

                            <TouchableOpacity onPress={()=>handleOption()} style={{ padding: 10}}>
                              <Image source={images.options} resizeMode="contain" style={{width: 20, maxHeight:20}}/>
                            </TouchableOpacity>
                            
                        </View>
                        {options && <Options />}
                    </View>
                {sidebar && <SideBar />}
            <View style={[{height: "100%"}, isDark?{backgroundColor: "#acc4b7"}:{backgroundColor: "white"}]}>

                    <ScrollView style={{margin: 10, fontsize: 20}}>

                        <TouchableOpacity onPress={()=>{setThemeSet(true)}} style={[styles.setting, isDark? {backgroundColor: "#729a74"}: {backgroundColor: "#acc4b7", borderBottomColor: "#5b955e", }]}>
                            <Image source={images.sun} resizeMode="contain" style={{width: 26, height: 24, marginHorizontal: 10}}/>
                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 20, lineHeight: 19}}>Theme</Text>
                                <Text style={styles.explainer}>Dark and Light Mode Toggle.</Text>
                            </View>
                        </TouchableOpacity>

                        
                        <TouchableOpacity onPress={()=>setFontSet(true)} style={[styles.setting, isDark? {backgroundColor: "#729a74"}: {backgroundColor: "#acc4b7", borderBottomColor: "#5b955e", }]}>
                            <Image source={images.fontsize} resizeMode="contain" style={{width: 26, height: 24, marginHorizontal: 10}}/>
                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 20, lineHeight: 19}}>Font Size</Text>
                                <Text style={styles.explainer}>Make Text Smaller or Bigger.</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setNotifySet(true)} style={[styles.setting, isDark? {backgroundColor: "#729a74"}: {backgroundColor: "#acc4b7", borderBottomColor: "#5b955e", }]}>
                            <Image source={images.bell} resizeMode="contain" style={{width: 26, height: 24, marginHorizontal: 10}}/>
                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 20, lineHeight: 19}}>Notification</Text>
                                <Text style={styles.explainer}>Receive Notification About App Updates.</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setAwakeSet(true)} style={[styles.setting, isDark? {backgroundColor: "#729a74"}: {backgroundColor: "#acc4b7", borderBottomColor: "#5b955e", }]}>
                            <Image source={images.clock} resizeMode="contain" style={{width: 26, height: 24, marginHorizontal: 10}}/>
                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 20, lineHeight: 19}}>Keep Awake</Text>
                                <Text style={styles.explainer}>Set Screen Awake Period.</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setUpdateSet(true)} style={[styles.setting, isDark? {backgroundColor: "#729a74"}: {backgroundColor: "#acc4b7", borderBottomColor: "#5b955e", }]}>
                            <Image source={images.update} resizeMode="contain" style={{width: 26, height: 24, marginHorizontal: 10}}/>
                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 20, lineHeight: 19}}>Auto Update</Text>
                                <Text style={styles.explainer}>Enable App & Version Update.</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onShare} style={[styles.setting, isDark? {backgroundColor: "#729a74"}: {backgroundColor: "#acc4b7", borderBottomColor: "#5b955e", }]}>
                            <Image source={images.share} resizeMode="contain" style={{width: 26, height: 24, marginHorizontal: 10}}/>
                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 20, lineHeight: 19}}>Share</Text>
                                <Text style={styles.explainer}>Share SDA SS Lesson with Friends. </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{}} style={[styles.setting, isDark? {backgroundColor: "#729a74"}: {backgroundColor: "#acc4b7", borderBottomColor: "#5b955e", }]}>
                            <Image source={images.rate} resizeMode="contain" style={{width: 26, height: 24, marginHorizontal: 10}}/>
                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 20, lineHeight: 19}}>Review</Text>
                                <Text style={styles.explainer}>Rate SDA SS Lesson on Play Store.</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setResetSet(true)} style={[styles.setting, isDark? {backgroundColor: "#729a74"}: {backgroundColor: "#acc4b7", borderBottomColor: "#5b955e", }]}>
                            <Image source={images.reset} resizeMode="contain" style={{width: 26, height: 24, marginHorizontal: 10}}/>
                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 20, lineHeight: 19}}>Reset Settings</Text>
                                <Text style={styles.explainer}>Delete all Customised Settings.</Text>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                    
                    {(options || sidebar || themeSet || fontSet || notifySet || awakeSet || updateSet || resetSet) && <Pressable 
                      style={[StyleSheet.absoluteFill, styles.overlay]}
                      onPress={()=>{setOptions(false); 
                                  setSideBar(false);
                                  setThemeSet(false);
                                  setFontSet(false);
                                  setAwakeSet(false);
                                  setNotifySet(false);
                                  setUpdateSet(false);
                                  setResetSet(false);
                      }}/>}

                      {themeSet && <ThemeSet />}
                      {fontSet && <FontSet />}
                      {notifySet && <NotifySet notify={notify} setNotify={setNotify}/>}
                      {resetSet && <ResetSet resetSet={resetSet} setResetSet={setResetSet} setNotify={setNotify} setIsDark={setIsDark} setFont={setFont} setAwake={setAwake} setUpdate={setUpdate}/>}
                      {awakeSet && <AwakeSet awake={awake} setAwake={setAwake} awakeSet={awakeSet} setAwakeSet={setAwakeSet}/>}
                      {updateSet && <UpdateSet update={update} setUpdate={setUpdate} updateSet={updateSet} setUpdateSet={setUpdateSet}/>}
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    setting:{
        marginBottom: 5,
        paddingVertical: 5,
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 3,
        borderRadius: 50,
        borderColor: "#15470f"
    },
    current: {
        color: "white",
        fontWeight: "bold",
        fontSize: 13
    },
    explainer: {
        fontStyle: "italic",
        color: "#113c0d"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
 headerFulllight: {
    backgroundColor: "grey"
  },
  overlay: {
    backgroundColor: "#010d02",
    opacity: 0.6
  },
  headerFull: {
    flexDirection: "row",
    padding: 15, 
    paddingRight: 0,
    maxHeight: 60,
    alignItems: "center",
    backgroundColor: "#022a05", 
    justifyContent: "space-between",
    zIndex: 200
  },
  headerFullLight: {
    flexDirection: "row",
    padding: 15, 
    paddingRight: 0,
    maxHeight: 60,
    alignItems: "center",
    backgroundColor: "#729a74", 
    justifyContent: "space-between",
    zIndex: 200,
  },
  headerLeft: {
    flexDirection: "row", 
    gap: 5 ,
    justifyContent: "space-evenly", 
    alignItems: "center",
  },
  line: {
    borderBottomColor: "green", 
    borderBottomWidth: 2, 
    marginVertical: 2
  },
})

export default Settings

