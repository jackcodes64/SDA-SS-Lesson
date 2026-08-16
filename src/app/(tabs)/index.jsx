import { usePathname, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import {supabase} from "../../../services/supabaseInit";
import { Alert, Image, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Options from "../../../components/options";
import SideBar from "../../../components/sidebar";
import {mixpanel} from "../../../services/mixpanel"
import SwitchC from "../../../components/switch";
import { images } from "../../../constants/images";
import { FontContext } from "../../../contexts/font";
import { CurrentScreenContext } from "../../../contexts/screen";
import { SearchContext } from "../../../contexts/search";
import { SidebarContext } from "../../../contexts/sidebar";
import { ThemeContext } from "../../../contexts/theme";
import Week1 from "../../../lessons/week1";
import Week10 from "../../../lessons/week10";
import Week11 from "../../../lessons/week11";
import Week12 from "../../../lessons/week12";
import Week13 from "../../../lessons/week13";
import Week2 from "../../../lessons/week2";
import Week3 from "../../../lessons/week3";
import Week4 from "../../../lessons/week4";
import Week5 from "../../../lessons/week5";
import Week6 from "../../../lessons/week6";
import Week7 from "../../../lessons/week7";
import Week8 from "../../../lessons/week8";
import Week9 from "../../../lessons/week9";

export default function Index() {
  const [currentScreen, setCurrentScreen] = useContext(CurrentScreenContext);
  const [options, setOptions] = useState(false);
  const [lesson, setLesson] = useState(false);
  const [sidebar, setSideBar] = useContext(SidebarContext);
  const [isDark, setIsDark] = useContext(ThemeContext);
  const [font, setFont] = useContext(FontContext);
  const [week, setWeek] = useContext(SearchContext);
  const router = useRouter();

  function changeFontSize (){ //gen
    if(font=="medium"){
      setFont("large")
    } else if(font=="large"){
      setFont("small")
    } else{
      setFont("medium")
    }
  }

  function handleSidebar(){ //gen
    setOptions(false)
    setSideBar(!sidebar)
    mixpanel.track("Toggled Sidebar", { where: "home" });
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
      setCurrentScreen("home");
      setOptions(false);
    }, [pathname]
  )

  const Home = ()=>{
    const [tester, setTester] = useState("");

    const checkNet = async()=>{
      const state = await NetInfo.fetch();
      return state.isInternetReachable;     
    }

    async function sendTester(){
      const cleanName = tester.trim();

      //mixpanel.track(`${tester} attempted`, { where: "home" });

      //Blank Error
      if(!cleanName){
        Alert.alert("Notice","Please enter your name");
      }

      const nameParts = cleanName.split(" ");
      //Single Name Error
      if(nameParts.length < 2){
        Alert.alert("Notice",`Please ${tester}, include your second name.`);
        return;
      }
      try{
        //Network Error
        const isOnline = await checkNet();
        if(!isOnline){
          alert("Offline", "It looks like you're offline. Check your connection.");
          return;
        }

        //Database Conn Error
        const {error} = await supabase.from("Email_Signups").insert([{email_address: tester}]).select();        
        
        if(error){
          throw error;
        }

        Alert.alert( "Success", `Thank you ${tester.split(" ")[0]}, today's test is complete.`)
        setTester("");
        Keyboard.dismiss();
      }catch(err){
        Alert.alert("Error", "Could not submit. Try again.")
      }
    }

    return (<>
                <View><Text style={{color: "red",paddingHorizontal: 5}}>📌 Temporary Feature!</Text></View>
                <View><Text style={{color: "white",paddingHorizontal: 5}}>Please send your two names thru' this temporary form to enable tester confirmation.</Text></View>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <View style={[{flexDirection: "row", margin: 5, borderRadius: 50, paddingHorizontal: 5, borderWidth: 1, borderBottomWidth: 2, borderColor: "#022a05"}, isDark? {backgroundColor: "#729a74"}:{backgroundColor: "#acc4b7",}]}>
                  <TextInput
                    placeholder="e.g Jack Orwa"
                    value={tester}
                    autoCorrect={false}
                    onChangeText={setTester}
                    returnKeyType="send"
                    placeholderTextColor={"white"}
                    onSubmitEditing={sendTester}
                    style={{fontSize: 16, lineHeight:18, minWidth: "70%", paddingVertical: 8, color: "white"}}
                  />
                </View>
                <TouchableOpacity onPress={sendTester} style={{marginHorizontal: 5,borderRadius: 27, height: 35, padding: 7, backgroundColor: "green", width: 70}}>
                    <Text style={{color: "white", textAlign: "center", fontWeight: "bold", fontSize: 16}}>Send</Text>
                </TouchableOpacity>

                </View>
                    <View style={isDark? styles.homebg: styles.homebgLight}>
                            <Text style={[isDark? styles.header: styles.headerLight, font=="medium"?{fontSize: 25}:( font=="large"?{fontSize: 27}:{fontSize: 23})]}>TABLE OF CONTENTS</Text>
                    </View>
                    <ScrollView style={isDark? styles.table: styles.tableLight} 
                    showsVerticalScrollIndicator={false}
                    overScrollMode="never"
                    contentContainerStyle={{overflow: "hidden"}}
                    bounces={false}>
                        <View  style={{margin: 10, paddingBottom: 15}}>

                        <TouchableOpacity onPress={()=>setCurrentScreen("week1")}>
                          <View style={styles.line}>
                          <Text style={styles.period}>June 27 - July 3 </Text>
                          <Text style={[styles.topic, font=="medium"?{fontSize: 18}:(font=="large"? {fontSize: 20,}: {fontSize: 16})]}> <Text>1. SS Lesson One</Text> <Text style={{color:"green"}}>------------------</Text> <Text>5</Text></Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setCurrentScreen("week2")}>
                          <View style={styles.line}>
                          <Text style={styles.period}>July 4 - July 10</Text>
                          <Text style={[styles.topic, font=="medium"?{fontSize: 18}:(font=="large"? {fontSize: 20,}: {fontSize: 16})]}> <Text>2. SS Lesson Two</Text> <Text style={{color:"green"}}>-----------------</Text> <Text>18</Text></Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setCurrentScreen("week3")}>
                          <View style={styles.line}>
                          <Text style={styles.period}>July 11 - July 17</Text>
                          <Text style={[styles.topic, font=="medium"?{fontSize: 18}:(font=="large"? {fontSize: 20,}: {fontSize: 16})]}> <Text>3. SS Lesson Three</Text> <Text style={{color:"green"}}>---------------</Text> <Text>31</Text></Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setCurrentScreen("week4")}>
                          <View style={styles.line}>
                          <Text style={styles.period}>July 18 - July 24</Text>
                          <Text style={[styles.topic, font=="medium"?{fontSize: 18}:(font=="large"? {fontSize: 20,}: {fontSize: 16})]}> <Text>4. SS Lesson Four</Text> <Text style={{color:"green"}}>-----------------</Text> <Text>44</Text></Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setCurrentScreen("week5")}>
                          <View style={styles.line}>
                          <Text style={styles.period}>July 25 - July 31</Text>
                          <Text style={[styles.topic, font=="medium"?{fontSize: 18}:(font=="large"? {fontSize: 20,}: {fontSize: 16})]}> <Text>5. SS Lesson Five</Text> <Text style={{color:"green"}}>-----------------</Text> <Text>57</Text></Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setCurrentScreen("week6")}>
                          <View style={styles.line}>
                          <Text style={styles.period}>August 1 - August 7</Text>
                          <Text style={[styles.topic, font=="medium"?{fontSize: 18}:(font=="large"? {fontSize: 20,}: {fontSize: 16})]}> <Text>6. SS Lesson Six</Text> <Text style={{color:"green"}}>------------------</Text> <Text>72</Text></Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setCurrentScreen("week7")}>
                          <View style={styles.line}>
                          <Text style={styles.period}>August 8 - August 14</Text>
                          <Text style={[styles.topic, font=="medium"?{fontSize: 18}:(font=="large"? {fontSize: 20,}: {fontSize: 16})]}> <Text>7. SS Lesson Seven</Text> <Text style={{color:"green"}}>---------------</Text> <Text>85</Text></Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setCurrentScreen("week8")}>
                          <View style={styles.line}>
                          <Text style={styles.period}>August 15 - August 21</Text>
                          <Text style={[styles.topic, font=="medium"?{fontSize: 18}:(font=="large"? {fontSize: 20,}: {fontSize: 16})]}> <Text>8. SS Lesson Eight</Text> <Text style={{color:"green"}}>----------------</Text> <Text>98</Text></Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setCurrentScreen("week9")}>
                          <View style={styles.line}>
                          <Text style={styles.period}>August 22 - July 28</Text>
                          <Text style={[styles.topic, font=="medium"?{fontSize: 18}:(font=="large"? {fontSize: 20,}: {fontSize: 16})]}> <Text>9. SS Lesson Nine</Text> <Text style={{color:"green"}}>-----------------</Text> <Text>111</Text></Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setCurrentScreen("week10")}>
                          <View style={styles.line}>
                          <Text style={styles.period}>July 29 - September 4</Text>
                          <Text style={[styles.topic, font=="medium"?{fontSize: 18}:(font=="large"? {fontSize: 20,}: {fontSize: 16})]}> <Text>10. SS Lesson Ten</Text> <Text style={{color:"green"}}>----------------</Text> <Text>124</Text></Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setCurrentScreen("week11")}>
                          <View style={styles.line}>
                          <Text style={styles.period}>September 5 - September 11</Text>
                          <Text style={[styles.topic, font=="medium"?{fontSize: 18}:(font=="large"? {fontSize: 20,}: {fontSize: 16})]}> <Text>11. SS Lesson Elleven</Text> <Text style={{color:"green"}}>------------</Text> <Text>137</Text></Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setCurrentScreen("week12")}>
                          <View style={styles.line}>
                          <Text style={styles.period}>September 12 - September 18</Text>
                          <Text style={[styles.topic, font=="medium"?{fontSize: 18}:(font=="large"? {fontSize: 20,}: {fontSize: 16})]}> <Text>12. SS Lesson Twelve</Text> <Text style={{color:"green"}}>------------</Text> <Text>150</Text></Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setCurrentScreen("week13")}>
                          <View style={styles.line}>
                          <Text style={styles.period}>September 19 - September 25</Text>
                          <Text style={[styles.topic, font=="medium"?{fontSize: 18}:(font=="large"? {fontSize: 20,}: {fontSize: 16})]}> <Text>13. SS Lesson Thirteen</Text> <Text style={{color:"green"}}>-----------</Text> <Text>163</Text></Text>
                        </View>
                        </TouchableOpacity>

                        </View>
                      </ScrollView>
    </>)
  }

  const screens = {
    home: <Home />,
    week1: <Week1 />,
    week2: <Week2 />,
    week3: <Week3 />,
    week4: <Week4 />,
    week5: <Week5 />,
    week6: <Week6 />,
    week7: <Week7 />,
    week8: <Week8 />,
    week9: <Week9 />,
    week10: <Week10 />,
    week11: <Week11 />,
    week12: <Week12 />,
    week13: <Week13 />,
  };
  
  return (
    <View style={{backgroundColor: "#010d02", height: "100%", paddingBottom: 80}}>
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
  
                    {sidebar && <SideBar/>}
                    
                    {week? screens[week] : (screens[currentScreen] ?? <Home />)} 
                    
                  
                    {(options || sidebar) && <Pressable 
                      style={[StyleSheet.absoluteFill, styles.overlay]}
                      onPress={()=>{setOptions(false); 
                                  setSideBar(false)
                      }}/>}                    
            </View>
  );
}

const styles = StyleSheet.create({
  homebg:{
    backgroundColor: "#acc4b7"
  },
  homebgLight:{
    backgroundColor: "white"
  },
  table: {
    backgroundColor: "#acc4b7",
    height:"100%"
  },
  tableLight: {
    backgroundColor: "white", 
    height:"100%"
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
  period: {
    color: "green",
    fontStyle: "italic",
    fontSize: 9,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white'
  },
  header: {
    marginTop: 10,
    color: "#022a05",
    fontWeight: "bold",
    backgroundColor: "#729a74",
    padding: 10,
    borderBottomColor: "#022a05",
    borderBottomWidth: 2,
  },
  headerLight: {
    marginTop: 10,
    color: "#022a05",
    fontWeight: "bold",
    backgroundColor: "#acc4b7",
    padding: 10,
    borderBottomColor: "#729a74",
    borderBottomWidth: 2,
  },
  topic:{
    color: "#022a05",
    lineHeight: 20,
    fontWeight: "bold",
    fontStyle: "italic"
  }
});
