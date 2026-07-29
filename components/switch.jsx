import { useContext } from "react";
import { Switch, View } from "react-native";
import { ThemeContext } from "../contexts/theme";


const SwitchC = ()=>{
    const [isDark, setIsDark] = useContext(ThemeContext)
    return(
        <View>
            <Switch 
                trackColor={{false: "blue", true: "blue"}}
                thumbColor={isDark? "white": "white"}
                onValueChange={()=>{setIsDark(!isDark)}}
                value={isDark}
            />
        </View>
    )
} 

export default SwitchC;