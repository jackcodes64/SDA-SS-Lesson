import { usePathname, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Options from "../../../components/options";
import SideBar from "../../../components/sidebar";
import SwitchC from "../../../components/switch";
import { images } from "../../../constants/images";
import { FontContext } from "../../../contexts/font";
import { SearchContext } from "../../../contexts/search";
import { SidebarContext } from "../../../contexts/sidebar";
import { ThemeContext } from "../../../contexts/theme";

const Search = ()=>{
  const [sidebar, setSideBar] = useContext(SidebarContext);
  const [isDark, setIsDark] = useContext(ThemeContext);
  const [font, setFont] = useContext(FontContext);
  const [options, setOptions] = useState(false);
  const [colorFlag, setColorFlag] = useState(false);
  const [query, setQuery] = useState("");
  const [matches, setMatches] = useState([{key: 404, topic: "Type on the bar above to search", }]);
  const [week, setWeek] = useContext(SearchContext);
  const router = useRouter()

  function changeFontSize (){ //gen
    if(font=="medium"){
      setFont("large")
    } else if(font=="large"){
      setFont("small")
    } else{
      setFont("medium")
    }
  }

  const book = [
    {
      key: 1,
      topic: "Paul's Ministry in Corinth",
      date: "June 27",
      page: 5,
      day: "Saturday",
      week: "week1"
    },
    {
      key: 2,
      topic: "Paul, a God-called Apostle of Jesus",
      date: "June 28",
      page: 6,
      day: "Sunday",
      week: "week1"
    },
    {
      key: 3,
      topic: "From Athens to Corinth",
      date: "June 29",
      page: 7,
      day: "Monday",
      week: "week1"
    },
    {
      key: 4,
      topic: "The City of Corinth",
      date: "June 30",
      page: 8,
      day: "Tuesday",
      week: "week1"
    },
    {
      key: 5,
      topic: "“Many in This City”",
      date: "June 31",
      page: 9,
      day: "Wedneday",
      week: "week1"
    },
    {
      key: 6,
      topic: "Paul’s Letters to the Corinthians",
      date: "June 27",
      page: 10,
      day: "Thursday",
      week: "week1"
    },
    {
      key: 7,
      topic: "The Message of the Cross",
      date: "July 4",
      page: 18,
      day: "Saturday",
      week: "week2"
    },
    {
      key: 8,
      topic: "The Gospel of the Cross",
      date: "July 5",
      page: 19,
      day: "Sunday",
      week: "week2"
    },
    {
      key: 9,
      topic: "Foolishness to Those Who Are Perishing",
      date: "July 6",
      page: 20,
      day: "Monday",
      week: "week2"
    },
    {
      key: 9,
      topic: "Power to Those Who Are Being Saved",
      date: "July 7",
      page: 21,
      day: "Tuesday",
      week: "week2"
    },
    {
      key: 10,
      topic: "A Messiah Crucified",
      date: "July 8",
      page: 22,
      day: "Wednesday",
      week: "week2"
    },
    {
      key: 11,
      topic: "Christ, the Power and Wisdom of God",
      date: "July 9",
      page: 23,
      day: "Thursday",
      week: "week2"
    },
    {
      key: 12,
      topic: "Unity in Christ",
      date: "July 11",
      page: 31,
      day: "Saturday",
      week: "week3"
    },
    {
      key: 13,
      topic: "Paul's Ministry in Corinth",
      date: "July 12",
      page: 32,
      day: "Sunday",
      week: "week3"
    },
    {
      key: 14,
      topic: "Paul's Ministry in Corinth",
      date: "July 13",
      page: 33,
      day: "Monday",
      week: "week3"
    },
    {
      key: 15,
      topic: "Paul's Ministry in Corinth",
      date: "July 14",
      page: 19,
      day: "Tuesday",
      week: "week3"
    },
    {
      key: 16,
      topic: "Paul's Ministry in Corinth",
      date: "July 15",
      page: 22,
      day: "Wednesday",
      week: "week3"
    },
    {
      key: 17,
      topic: "Paul's Ministry in Corinth",
      date: "July 16",
      page: 23,
      day: "Thursday",
      week: "week3"
    },
    {
      key: 18,
      topic: "Paul's Ministry in Corinth",
      date: "June 27",
      page: 24,
      day: "Friday",
      week: "week1"
    },
    {
      key: 19,
      topic: "Paul's Ministry in Corinth",
      date: "June 27",
      page: 25,
      day: "Friday",
      week: "week1"
    },
    {
      key: 20,
      topic: "Paul's Ministry in Corinth",
      date: "June 27",
      page: 26,
      day: "Friday",
      week: "week1"
    },
    {
      key: 21,
      topic: "Paul's Ministry in Corinth",
      date: "June 27",
      page: 27,
      day: "Friday",
      week: "week1"
    },
    {
      key: 22,
      topic: "Paul's Ministry in Corinth",
      date: "June 27",
      page: 28,
      day: "Friday",
      week: "week1"
    },
    
  ]

  function handlePress(week){
    //setWeek(week);
    if(!week) return;
    router.push("/");
    setWeek(week);
    //Alert.alert("moved to home!")
  }

  async function handleSearch(term){
    setQuery(term);

    if(term.trim().length < 1){
      setMatches([]);
      return;
    }
    const results = book.filter(x=>x.topic.toLowerCase().includes(term.trim().toLowerCase()));
    setMatches(results);
  };

  function handleSidebar(){ //gen
    setOptions(false)
    setSideBar(!sidebar)
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
    }, [pathname])

    return(
        <View style={{backgroundColor: "#010d02", height: "100%", paddingBottom: 180}}>
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

            <View style={[{height: "100%"}, isDark? {backgroundColor: "#acc4b7",}: {backgroundColor: "white",}]}>

              <View style={[{flexDirection: "row", margin: 20, borderRadius: 50, paddingHorizontal: 5, borderWidth: 1, borderBottomWidth: 2, borderColor: "#022a05"}, isDark? {backgroundColor: "#729a74"}:{backgroundColor: "#acc4b7",}]}>
                <Image source={images.searchn} resizeMode="contain" style={{width: 25, maxHeight:20, marginHorizontal: 8, marginTop:10 }}/>
                <TextInput
                  placeholder="Search lessons..."
                  value={query}
                  onChangeText={handleSearch}
                  autoCorrect={false}
                  placeholderTextColor={"white"}
                  style={{fontSize: 16, lineHeight:18, borderLeftWidth: 2, borderColor: "#022a05", width: "80%", }}
                />
              </View>
              <View>
                  <Text style={{padding: 5}}>{matches.length > 0? "Here are the results:": "Ooops! No titles match the search."}</Text>
              </View>

              <FlatList
                data={matches}
                keyExtractor={item => item.key}
                renderItem={({item})=>(
                  <TouchableOpacity onPress={()=>{handlePress(item.week)}} style={[{borderBottomWidth: 1, marginVertical: 4,borderRadius: 2, padding: 10}, isDark? {backgroundColor: "#729a74"}:{backgroundColor: "#acc4b7",}]}>
                    <Text style={{color: "blue", fontStyle: "italic"}}>{item.day? item.day + ",": ""} {item.date? item.date + ".": ""}</Text>
                    <View style={{flexDirection: "row", gap: 5, justifyContent: "space-between" }}>
                      <Text style={[{color: "#022a05", maxWidth: "93%"}, font=="medium"?{fontSize: 17}:(font=="large"? {fontSize: 19,}: {fontSize: 16})]}>{item.topic}</Text>
                      <Text style={[{color: "#022a05"}, font=="medium"?{fontSize: 17}:(font=="large"? {fontSize: 19,}: {fontSize: 16})]}>{item.page}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
                contentContainerStyle={{overflow: "hidden"}}
                bounces={false}
                style={{margin: 5}}
              />


                {(options || sidebar) && <Pressable 
                      style={[StyleSheet.absoluteFill, styles.overlay]}
                      onPress={()=>{
                        setOptions(false); 
                        setSideBar(false)
                      }}/>}
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
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

export default Search 