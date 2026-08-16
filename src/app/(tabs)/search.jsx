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
      date: "July 1",
      page: 8,
      day: "Tuesday",
      week: "week1"
    },
    {
      key: 5,
      topic: "“Many in This City”",
      date: "July 2",
      page: 9,
      day: "Wednesday",
      week: "week1"
    },
    {
      key: 6,
      topic: "Paul’s Letters to the Corinthians",
      date: "July 3",
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
      key: 10,
      topic: "Power to Those Who Are Being Saved",
      date: "July 7",
      page: 21,
      day: "Tuesday",
      week: "week2"
    },
    {
      key: 11,
      topic: "A Messiah Crucified",
      date: "July 8",
      page: 22,
      day: "Wednesday",
      week: "week2"
    },
    {
      key: 12,
      topic: "Christ, the Power and Wisdom of God",
      date: "July 9",
      page: 23,
      day: "Thursday",
      week: "week2"
    },
    {
      key: 13,
      topic: "Unity in Christ",
      date: "July 11",
      page: 31,
      day: "Saturday",
      week: "week3"
    },
    {
      key: 14,
      topic: "The Problem of Cliques in Church",
      date: "July 12",
      page: 32,
      day: "Sunday",
      week: "week3"
    },
    {
      key: 15,
      topic: "Centered on Jesus",
      date: "July 13",
      page: 33,
      day: "Monday",
      week: "week3"
    },
    {
      key: 16,
      topic: "Wisdom and Maturity",
      date: "July 14",
      page: 34,
      day: "Tuesday",
      week: "week3"
    },
    {
      key: 17,
      topic: "Christlike Servanthood",
      date: "July 15",
      page: 35,
      day: "Wednesday",
      week: "week3"
    },
    {
      key: 18,
      topic: "A Lifestyle That Reflects the Cross",
      date: "July 16",
      page: 36,
      day: "Thursday",
      week: "week3"
    },
    {
      key: 19,
      topic: "Sin in the Church",
      date: "July 18",
      page: 44,
      day: "Saturday",
      week: "week4"
    },
    {
      key: 20,
      topic: "Dissonance Between Faith and Practice",
      date: "July 19",
      page: 45,
      day: "Sunday",
      week: "week4"
    },
    {
      key: 21,
      topic: "Dealing With Scandals",
      date: "July 20",
      page: 46,
      day: "Monday",
      week: "week4"
    },
    {
      key: 22,
      topic: "Protecting the Church's Identity",
      date: "July 21",
      page:47,
      day: "Tuesday",
      week: "week4"
    },
    {
      key: 23,
      topic: "Antidote Against Sexual Immorality",
      date: "July 22",
      page: 48,
      day: "Wednesday",
      week: "week4"
    },
    {
      key: 24,
      topic: "Marriage and Singleness",
      date: "July 23",
      page: 49,
      day: "Thursday",
      week: "week4"
    },
    {
      key: 25,
      topic: "All to the Glory of God",
      date: "July 25",
      page: 57,
      day: "Saturday",
      week: "week5"
    },
    {
      key: 26,
      topic: "Knowledge Versus Love",
      date: "July 26",
      page: 58,
      day: "Sunday",
      week: "week5"
    },
    {
      key: 27,
      topic: "Selfless Love",
      date: "July 27",
      page: 59,
      day: "Monday",
      week: "week5"
    },
    {
      key: 28,
      topic: "Learning From the Past",
      date: "July 28",
      page: 60,
      day: "Tuesday",
      week: "week5"
    },
    {
      key: 29,
      topic: "Warning Against Idolatry",
      date: "July 29",
      page: 61,
      day: "Wednesday",
      week: "week5"
    },
    {
      key: 30,
      topic: "Overcoming Idolatry",
      date: "July 30",
      page: 62,
      day: "Thurday",
      week: "week5"
    },
    {
      key: 31,
      topic: "Spiritual Gifts",
      date: "August 1",
      page: 72,
      day: "Saturday",
      week: "week6"
    },
    {
      key: 32,
      topic: "Varieties of Gifts",
      date: "August 2",
      page: 73,
      day: "Sunday",
      week: "week6"
    },
    {
      key: 33,
      topic: "Unity Through Diversity",
      date: "August 3",
      page: 74,
      day: "Monday",
      week: "week6"
    },
    {
      key:34,
      topic: "`A More Excellent Way`",
      date: "August 4",
      page: 75,
      day: "Tuesday",
      week: "week6"
    },
    {
      key: 35,
      topic: "The Gift of Tongues",
      date: "August 5",
      page: 76,
      day: "Wednesday",
      week: "week6"
    },
    {
      key: 36,
      topic: "The Gift of Prophecy",
      date: "August 6",
      page: 77,
      day: "Thursday",
      week: "week6"
    },
    {
      key: 37,
      topic: "A Portrait of Love",
      date: "August 8",
      page: 85,
      day: "Saturday",
      week: "week7"
    },
    {
      key: 39,
      topic: "The Essentials of Love",
      date: "August 9",
      page: 86,
      day: "Sunday",
      week: "week7"
    },
    {
      key: 40,
      topic: "What Love Does",
      date: "August 10",
      page: 87,
      day: "Monday",
      week: "week7"
    },
    {
      key: 41,
      topic: "What Love does Not Do",
      date: "August 11",
      page: 88,
      day: "Tuesday",
      week: "week7"
    },
    {
      key: 42,
      topic: "A Portrait of Jesus",
      date: "August 12",
      page: 87,
      day: "Wednesday",
      week: "week7"
    },
    {
      key: 43,
      topic: "Faith, Hope, and Love",
      date: "August 13",
      page: 88,
      day: "Thurday",
      week: "week7"
    },
    {
      key: 44,
      topic: "The Power of Christ Resurrection",
      date: "August 15",
      page: 98,
      day: "Saturday",
      week: "week8"
    },
    {
      key: 45,
      topic: "Proclaiming the Resurrection of Christ",
      date: "August 16",
      page: 99,
      day: "Sunday",
      week: "week8"
    },
    {
      key: 46,
      topic: "The Risen Christ, Our Only Hope",
      date: "August 17",
      page: 100,
      day: "Monday",
      week: "week8"
    },
    {
      key: 47,
      topic: "Christ, the Firstfruits",
      date: "August 18",
      page: 101,
      day: "Tuesday",
      week: "week8"
    },
    {
      key: 48,
      topic: "The Resurrected Body",
      date: "August 19",
      page: 102,
      day: "Wednesday",
      week: "week8"
    },
    {
      key: 49 ,
      topic: "Final Victory Over Death",
      date: "August 20",
      page: 103,
      day: "Thurday",
      week: "week8"
    },
    {
      key: 50,
      topic: "Love-Driven Ministry",
      date: "August 22",
      page: 111,
      day: "Saturday",
      week: "week9"
    },
    {
      key: 51,
      topic: "Thanksgiving",
      date: "August 23",
      page: 112,
      day: "Sunday",
      week: "week9"
    },
    {
      key: 52,
      topic: "Simplicity and Sincerity",
      date: "August 24",
      page: 113,
      day: "Monday",
      week: "week9"
    },
    {
      key: 53,
      topic: "Changing Plans for Love",
      date: "August 25",
      page: 114,
      day: "Tuesday",
      week: "week9"
    },
    {
      key: 54,
      topic: "Forgiveness and Reaffirmation of Love",
      date: "August 26",
      page: 115,
      day: "Wednesday",
      week: "week9"
    },
    {
      key: 55,
      topic: "Triump in Christ",
      date: "August 27",
      page: 116,
      day: "Thurday",
      week: "week9"
    },
    {
      key: 56,
      topic: "Authentic Christian Ministry",
      date: "August 29",
      page: 124,
      day: "Saturday",
      week: "week10"
    },
    {
      key: 57,
      topic: "Fruits of Authentic Ministry",
      date: "August 30",
      page: 125,
      day: "Sunday",
      week: "week10"
    },
    {
      key: 58,
      topic: "Suffering and Glory",
      date: "August 31",
      page: 126,
      day: "Monday",
      week: "week10"
    },
    {
      key: 59,
      topic: "Christ-focused Ministry of Reconciliation",
      date: "September 1",
      page: 127,
      day: "Tuesday",
      week: "week10"
    },
    {
      key: 60,
      topic: "Call to Holiness",
      date: "September 2",
      page: 128,
      day: "Wednesday",
      week: "week10"
    },
    {
      key: 61,
      topic: "Comfort and Joy",
      date: "September 3",
      page: 129,
      day: "Thurday",
      week: "week10"
    },
    {
      key: 62,
      topic: "Stewardship and Mission",
      date: "September 5",
      page: 137,
      day: "Saturday",
      week: "week11"
    },
    {
      key: 63,
      topic: "The Example of Jesus",
      date: "September 6",
      page: 138,
      day: "Sunday",
      week: "week11"
    },
    {
      key: 64,
      topic: "Motivation",
      date: "September 7",
      page: 138,
      day: "Monday",
      week: "week11"
    },
    {
      key: 65,
      topic: "The Example of Jesus",
      date: "September 7",
      page: 139,
      day: "Tuesday",
      week: "week11"
    },
    {
      key: 66,
      topic: "Planning",
      date: "September 8",
      page: 140,
      day: "Tuesday",
      week: "week11"
    },
    {
      key: 67,
      topic: "Attitude",
      date: "September 9",
      page: 141,
      day: "Wednesday",
      week: "week11"
    },
    {
      key: 68,
      topic: "Unity",
      date: "September 10",
      page: 142,
      day: "Thurday",
      week: "week11"
    },
    {
      key: 69,
      topic: "Dealing With False Teachers",
      date: "September 12",
      page: 150,
      day: "Saturday",
      week: "week12"
    },
    {
      key: 70,
      topic: "Spiritual Wars",
      date: "September 13",
      page: 151,
      day: "Sunday",
      week: "week12"
    },
    {
      key: 71,
      topic: "Boasting in the Lord",
      date: "September 14",
      page: 152,
      day: "Monday",
      week: "week12"
    },
    {
      key: 72,
      topic: "False Teachers Identified",
      date: "September 15",
      page: 153,
      day: "Tuesday",
      week: "week12"
    },
    {
      key: 73,
      topic: "Suffering for the Sake of the Gospel",
      date: "September 16",
      page: 154,
      day: "Wednesday",
      week: "week12"
    },
    {
      key: 74,
      topic: "Appeal to the Unrepentant",
      date: "September 17",
      page: 155,
      day: "Thursday",
      week: "week12"
    },
    {
      key: 75,
      topic: "Grace, Love, and Fellowship",
      date: "September 19",
      page: 163,
      day: "Saturday",
      week: "week13"
    },
    {
      key: 76,
      topic: "The Grace of Jesus",
      date: "September 20",
      page: 164,
      day: "Sunday",
      week: "week13"
    },
    {
      key: 77,
      topic: "The Love of God",
      date: "September 21",
      page: 165,
      day: "Monday",
      week: "week13"
    },
    {
      key: 78,
      topic: "The God of Love",
      date: "September 22",
      page: 166,
      day: "Tuesday",
      week: "week13"
    },
    {
      key: 79,
      topic: "The Fellowship of the Holy Spirit",
      date: "September 23",
      page: 167,
      day: "Wednesday",
      week: "week13"
    },
    {
      key: 80,
      topic: "Our Triune God",
      date: "September 24",
      page: 168,
      day: "Thurday",
      week: "week13"
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
    }, [pathname]);

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