import { Link, usePathname } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Options from "../../../components/options";
import SideBar from "../../../components/sidebar";
import SwitchC from '../../../components/switch';
import { images } from "../../../constants/images";
import { FontContext } from "../../../contexts/font";
import { SidebarContext } from "../../../contexts/sidebar";
import { ThemeContext } from "../../../contexts/theme";


const About = ()=>{
    const [isDark, setIsDark] = useContext(ThemeContext);
    const [sidebar, setSideBar] = useContext(SidebarContext);
    const [options, setOptions] = useState(false)
    const [font, setFont] = useContext(FontContext);

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
    }, [pathname]
  )

    return(
        <View style={{backgroundColor: "#010d02"}}>
            <View style={{backgroundColor: "#010d02", minHeight: 47}}></View>
                <View style={isDark? styles.headerFull: styles.headerFullLight}> 
                        <TouchableOpacity onPress={()=>handleSidebar()} style={{maxHeight: 30}}>
                            <Image source={!sidebar? images.menu: images.x} resizeMode="contain" style={{maxWidth: 40, maxHeight:30}}/>  
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
            <ScrollView 
                style={[isDark? {backgroundColor: "#acc4b7"}: {backgroundColor: "white"}, {marginBottom: 185}]}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
                contentContainerStyle={{overflow: "hidden"}}
                bounces={false}
            >
                
                <View style={{ margin: 6, marginBottom: 30}}>
                    <Text style={[isDark?styles.header: styles.headerLight, font==="medium"? {fontSize: 22}: (font==="large"?{fontSize: 24}: {fontSize: 20})]}>Description</Text>
                    <Text style={[styles.body, font==="medium"? {fontSize: 19}: (font==="large"?{fontSize: 21}: {fontSize: 17})]}>SDA Sabbath School Lesson v1.0.0 is a fully non-commercial, offline-first christian e-book developed with an aim of improving access to
                        the Gospel and aligned with the calling to spread the word as commissioned by our Saviour. 
                        However, SDA Sabbath School Lesson should not be used as a direct replacement for hardcopy Lessons.  
                    </Text>

                    <Text style={[isDark?styles.header: styles.headerLight, font==="medium"? {fontSize: 22}: (font==="large"?{fontSize: 24}: {fontSize: 20})]}>Appreciation</Text>
                    <Text style={[styles.body, font==="medium"? {fontSize: 19}: (font==="large"?{fontSize: 21}: {fontSize: 17})]}>
                      We would like to acknowledge Barrack Otieno and Josephene Okebe for their work in editing, proofreading, and financing the publication of this quarter's SDA SS Lesson.
                    </Text>

                    <Text style={isDark?styles.header: styles.headerLight}>Support</Text>
                    <Text style={[styles.body, font==="medium"? {fontSize: 19}: (font==="large"?{fontSize: 21}: {fontSize: 17})]}>You can support this course by volunteering to:</Text>
                        <Text style={{color: "#181717", fontSize: 19, fontStyle: "italic", paddingLeft: 10}}> ∘ edit the manuscripts</Text>
                        <Text style={{color: "#181717", fontSize: 19, fontStyle: "italic", paddingLeft: 10}}> ∘ proofread the manuscripts </Text>
                        <Text style={{color: "#181717", fontSize: 19, fontStyle: "italic", paddingLeft: 10}}> ∘ test the unpublished app versions</Text>
                        <Text style={{color: "#181717", fontSize: 19, fontStyle: "italic", paddingLeft: 10}}> ∘ rate us on Play Store or App Store</Text>
                        <Text style={{color: "#181717", fontSize: 19, fontStyle: "italic", paddingLeft: 10}}> ∘ share on social media or </Text>
                        <Text style={{color: "#181717", fontSize: 19, fontStyle: "italic", paddingLeft: 10}}> ∘ recommend improvements. </Text>
                    <Text style={[styles.body, font==="medium"? {fontSize: 19}: (font==="large"?{fontSize: 21}: {fontSize: 17})]}>You can also support the team by letting us develop your business' software solutions. For more 
                        information, check our <Link href="https://tichtech.co.ke" style={{color: "#0d5623"}}>website</Link>.
                    </Text>

                    <Text style={[isDark?styles.header: styles.headerLight, font==="medium"? {fontSize: 22}: (font==="large"?{fontSize: 24}: {fontSize: 20})]}>Developer</Text>
                    <Text style={[styles.body, font==="medium"? {fontSize: 19}: (font==="large"?{fontSize: 21}: {fontSize: 17})]}>SDA Sabbath School Lesson was developed and is maintained by TichTech Solutions. We are open
                        to improvement suggestions and critiques at <Link href="mailto:baresilicon@gmail.com" style={{color: "#0d5623"}}>baresilicon@gmail.com</Link>.  
                    </Text>

                    <Text style={[isDark?styles.header: styles.headerLight, font==="medium"? {fontSize: 22}: (font==="large"?{fontSize: 24}: {fontSize: 20})]}>Final Words</Text>
                    <Text style={[styles.body, font==="medium"? {fontSize: 19}: (font==="large"?{fontSize: 21}: {fontSize: 17})]}>SDA Lessons are quarterly, we therefore recommend you update your app version at the end of every quarter. </Text>

                         <Text style={{color: "#181717", fontSize: 19, fontStyle: "italic", paddingLeft: 10}}>"As ye have therefore received Christ Jesus the Lord, so walk ye in him."</Text>
                         <Text style={{color: "#181717", fontSize: 19, fontStyle: "italic", paddingLeft: "55%"}}> - Colossians 2:6</Text>
                         
                        
                      <Text style={[styles.body, font==="medium"? {fontSize: 19}: (font==="large"?{fontSize: 21}: {fontSize: 17})]}>Thank you for using this e-book.
                    </Text>
                </View>

            </ScrollView>
            {(options || sidebar) && <Pressable 
                      style={[StyleSheet.absoluteFill, styles.overlay]}
                      onPress={()=>{setOptions(false); 
                                  setSideBar(false)
                      }}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    body: { 
        fontSize: 17, 
        lineHeight: 26,
        color: "#181717",
        padding: 5, 
        marginTop: 5, 
        fontWeight: "bold"
    },
    header:{
        marginTop: 9,
        color: "#022a05",
        fontSize: 21,
        fontStyle: "italics",
        fontWeight: "bold",
        backgroundColor: "#729a74",
        padding: 9,
        borderBottomColor: "#022a05",
        borderBottomWidth: 2
    },
    headerLight:{
        marginTop: 9,
        color: "#022a05",
        fontSize: 21,
        fontStyle: "italics",
        fontWeight: "bold",
        backgroundColor: "#acc4b7",
        padding: 9,
        borderBottomColor: "#022a05",
        borderBottomWidth: 2
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
  headerFullLight: { //every
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
  period: {
    color: "green",
    fontStyle: "italic",
    fontSize: 9,
    fontWeight: "bold"
  },
})

export default About 