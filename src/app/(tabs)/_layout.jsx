import { Tabs, useRouter } from "expo-router"
import { useState } from "react"
import { Image, StyleSheet, View } from "react-native"
import { images } from "../../../constants/images"
import { FontContext } from "../../../contexts/font"
import { FontSetContext } from "../../../contexts/fontset"
import { NotifyContext } from "../../../contexts/notify"
import { CurrentScreenContext } from "../../../contexts/screen"
import { SearchContext } from "../../../contexts/search"
import { SidebarContext } from "../../../contexts/sidebar"
import { ThemeContext } from "../../../contexts/theme"
import { ThemeSetContext } from "../../../contexts/themeset"


const _Layout = ()=>{
    const [sidebar, setSideBar] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [font, setFont] = useState("medium");
    const [themeSet, setThemeSet] = useState(false);
    const [fontSet, setFontSet] = useState(false);
    const [notifySet, setNotifySet] = useState(false);
    const [week, setWeek] = useState(null);
    const [currentScreen, setCurrentScreen] = useState(null);
    const router = useRouter();

    const TabIcon = ({focused, icon, title})=>{
        if(focused){
            return(
                <View style={styles.icon}>
                    <Image source={icon} style={[styles.home, isDark? {tintColor: "#729a74"}: {tintColor: "#08530f",}]} />
                </View>
            )
        }else{
            return (
                <View style={styles.icon}>
                    <Image source={icon} tintColor="white" style={styles.home}/>
                </View> 
            )
        }
    }

    return(
        <CurrentScreenContext.Provider value={[currentScreen, setCurrentScreen]}>
            <SearchContext.Provider value={[week,setWeek]}>
                <NotifyContext.Provider value={[notifySet, setNotifySet]}>
                    <FontSetContext.Provider value={[fontSet, setFontSet]}>
                        <ThemeSetContext value={[themeSet, setThemeSet]}>
                            <FontContext.Provider value={[font, setFont]}>
                                <ThemeContext.Provider value={[isDark, setIsDark]}>
                                    <SidebarContext.Provider value={[sidebar, setSideBar]}>
                                    <Tabs 

                                        screenListeners={{
                                            tabPress: (e)=>{
                                                //Alert.alert("Executed")
                                                setWeek(null);
                                                setCurrentScreen(null);
                                            }
                                        }}
                                        screenOptions={{
                                            tabBarShowLabel: false,
                                            tabBarItemStyle: {
                                                flex: 1, 
                                                justifyContent: "center",
                                                alignItems: "center",
                                                paddingTop: 25,
                                            }, 
                                            tabBarStyle: isDark? styles.tabBar: styles.tabBarLight,
                                        }}>
                                        
                                        <Tabs.Screen 
                                            name="index"
                                            options={{
                                                title: "home",
                                                headerShown: false,
                                                tabBarIcon: ({focused})=> <TabIcon focused={focused} icon={images.home} title={"Home"}/>
                                            }}
                                        />

                                        <Tabs.Screen
                                            name="search"
                                            options={{
                                                title: "search",
                                                headerShown: false,
                                                tabBarIcon: ({focused})=> <TabIcon icon={images.searchn} focused={focused} title={"Search"}/>
                                                
                                            }}
                                        />

                                        <Tabs.Screen
                                            name="settings"
                                            options={{
                                                title: "setiings",
                                                headerShown: false,
                                                tabBarIcon: ({focused})=> <TabIcon icon={images.settings} focused={focused} title={"Settings"}/>
                                            }}
                                        />

                                        <Tabs.Screen
                                            name="about"
                                            options={{
                                                title: "about",
                                                headerShown: false,
                                                tabBarIcon: ({focused})=> <TabIcon icon={images.about} focused={focused} title={"About"}/>
                                            }}
                                        />

                                    </Tabs>
                                    </SidebarContext.Provider>
                                </ThemeContext.Provider>
                            </FontContext.Provider>
                        </ThemeSetContext>
                    </FontSetContext.Provider>
                </NotifyContext.Provider>
            </SearchContext.Provider>
        </CurrentScreenContext.Provider>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifiContent: 'center',
    },
    tabBar: {
        backgroundColor: "#022a05",
        borderRadius: 50,
        marginHorizontal: 16,
        marginBottom: 50,
        height: 30,
        position: "absolute",
        overflow: "hidden", //....
        borderWidth: 1,
        borderTopWidth: 2,
        borderColor: "white",
        zIndex: 2001
    },
    tabBarLight: {
        backgroundColor: "#729a74",
        borderRadius: 50,
        marginHorizontal: 18,
        marginBottom: 50,
        height: 30,
        position: "absolute",
        overflow: "hidden", //....
        borderTopWidth: 2,
        borderWidth: 1,
        borderColor: "white",
        zIndex: 2001        
    },
    icon: {
        marginBottom: 25,
    },
    iconText: {
        marginRight: 10,
        fontWeight: "bold",
        color: "green",
        fontSize: 16,
    },
    home:{
        width: 25,
        height: 25,
    }
})


export default _Layout