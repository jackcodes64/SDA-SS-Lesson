import { Stack, useRouter } from "expo-router";
import { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { images } from "../constants/images";
import { FontContext } from "../contexts/font";
import { ThemeContext } from "../contexts/theme";


const Week8 = ()=>{
    const [isDark, setIsDark] = useContext(ThemeContext)
    const [font, setFont] = useContext(FontContext)
    const router = useRouter()
    return(
        <View style={{backgroundColor: "#010d02", marginBottom: 105}}>
            
            <Stack.Screen options={{headerShown: false}} />
            <ScrollView 
                style={isDark?{backgroundColor: '#acc4b7'}:{backgroundColor: "white"}}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
                contentContainerStyle={{overflow: "hidden"}}
                bounces={false}
            >
                
                <View style={{ margin: 6,}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>
                            Lesson 8
                        </Text>
                        <Text style={[{paddingTop: 40}, font=="medium"?{fontSize: 17}:(font=="large"?{fontSize: 19}:{fontSize: 15})]}>
                            *August 15–21
                        </Text>
                    </View>

                    <Text style={[{fontStyle: "italic"}, font=="medium"?{fontSize: 30}:(font=="large"?{fontSize: 32}:{fontSize: 28})]}>
                        The Power of Christ’s Resurrection
                    </Text>

                    <View style={{overflow: "hidden", marginTop:10, maxHeight: 120, width: "100%"}}>
                        <Image source={images.lesson4} resizeMode="contain" style={{maxWidth: 370, maxHeight: 134, width: "100%"}}/>
                    </View>
                    
                    <View style={[{height: 4, marginTop: 5}, isDark?{backgroundColor: "#022a05"}:{backgroundColor: "red"}]}></View>
                    <Text style={{marginBottom: 10, color: "#022a05"}}>SABBATH AFTERNOON</Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>
                            Read for This Week’s Study: 
                        </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}>
                            1 Corinthians 15; Luke 24:44–
                            47; Rev. 20:5, 6; Col. 2:12; 2 Tim. 1:12; 1 Thess. 4:13–17.
                        </Text>
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Memory Text: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}> 
                            “And if Christ is not risen, then our preaching is
                            empty and your faith is also empty. . . . And if Christ is not risen,
                            your faith is futile; you are still in your sins!” (1 Corinthians 15:14–17,
                            NKJV).
                        </Text>
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}How fascinating that, even in his time, Paul had to deal with
                        those who denied the resurrection of the dead. After all, people
                        back then saw what death did to the human body. They knew
                        how the corpse liquifies, then dries up into dust, and then becomes
                        almost nothing. And they knew that people have been dead for a long
                        time, too. In fact, most people have been dead a lot longer than they
                        were alive.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}The resurrection of the dead seemed no more plausible to them back
                        then than it does to us now, at least from a human standpoint. And that
                        must have been an issue that Paul was addressing.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}And it was crucial, too. If Jesus is not risen, He is not who He said
                        He was, the Cross had no effect, and our sins have not been paid for.
                        Despair is really all we would have remaining. But our Lord is risen,
                        ascended into heaven, and will return to take us home!
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}This week we will focus on 1 Corinthians 15 and its teaching on the
                        resurrection of Christ. Influenced by the surrounding pagan worldview,
                        some in Corinth were saying that there is no resurrection. In response,
                        Paul affirms the resurrection of Christ as our only hope of salvation.
                    </Text>

                    <Text style={{fontStyle: "italic", fontSize: 18}}>
                       * Study this week’s lesson to prepare for Sabbath, August 22. 
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>98</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{ margin: 6,}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>
                            Sunday 
                        </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            August 16
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Proclaiming the Resurrection of Christ
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul begins 1 Corinthians 15 by focusing on the gospel. He speaks
                        about the gospel: (1) which he preached to the Corinthians; (2) which they
                        received; (3) in which they stood; and (4) by which they were saved (1 Cor.
                        15:1, 2, NKJV). This opening prepares the reader for what comes next in
                        the chapter and shows how essential Christ’s resurrection is for our salva-
                        tion (see also Rom. 10:9, 10). His resurrection is such a vital part of the
                        gospel message that denying it contradicts one’s faith in Christ.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            1 Corinthians 15:1–4, Luke 24:44–47, and Romans 1:1–4. What
                            do these passages have in common?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        In 1 Corinthians 15:1–4, one can find a summary of Paul’s message.
                        Whether the phrase “according to the Scriptures” refers to particular
                        Old Testament passages or to the Old Testament as a whole doesn’t
                        matter. Jesus’ death and resurrection fulfill God’s promises found in
                        the Old Testament.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            1 Corinthians 15:2, 11. Why do these verses place the concepts
                            of believing and preaching side by side? What is the relationship
                            between the two?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        All who proclaim that Christ is risen must first believe that His resurrec-
                        tion is a historical event. In this case, 1 Corinthians 15:5–8 plays a critical
                        role in the New Testament. This passage provides solid scriptural evidence
                        that Christ was seen by numerous people after His resurrection, many of
                        whom were still alive by the time Paul wrote the letter (1 Cor. 15:6).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Basically, Paul is saying, Go ask them for yourselves what they saw.
                        That is how confident he was in the reality of Christ’s resurrection.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        These people were eyewitnesses. They were what Jesus said they
                        would be, namely, “witnesses of these things” (Luke 24:48).
                    </Text>
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        What reasons do we have for believing in Christ’s resurrection?
                        Also, what other things, secular or sacred, do we believe even if
                        we haven’t seen them ourselves?
                    </Text>

                </View>
                
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>99</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Monday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>August 17</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        The Risen Christ, Our Only Hope!
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 1 Corinthians 15:9–19, Paul explains how severe and dread-
                        ful the consequences of denying the Resurrection are. Without the
                        Resurrection, believers have no hope in the present, much less in the
                        future.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            1 Corinthians 15:9–19. What do we lose if Christ has not been raised?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        By and large, ancient pagans did not believe in resurrection, especially
                        in the Greek world, with its belief in body-soul dualism (at death the soul
                        soars off to wherever the souls of the dead supposedly go). Paul begins the
                        paragraph in 1 Corinthians 15:12–19 with a rhetorical question that shows
                        his deep bewilderment: “What? How can some of you say that there is
                        no such thing as the resurrection of the dead?” (1 Cor. 15:12, author’s
                        translation). For Paul, disbelieving in the Resurrection is inconceivable,
                        especially because there were so many eyewitnesses (1 Cor. 15:5–8). But
                        even worse, without the Resurrection, their hope is built on a lie, and they
                        are still in their sins.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        He says, in fact, that if there is no resurrection of the dead, then
                        (1) Christ has not been raised (1 Cor. 15:13, 16); (2) our preaching is
                        empty (1 Cor. 15:14); (3) our faith is also empty (1 Cor. 15:14); (4) we
                        are false witnesses (1 Cor. 15:15); (5) our faith is futile (1 Cor. 15:17);
                        (6) we are still in our sins (1 Cor. 15:17); and, obviously, (7) those who
                        have died are no more (1 Cor. 15:18).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Without the Resurrection, both preaching and faith are empty (1 Cor.
                        15:14). The Greek term rendering the word “empty” is kenos. This is a
                        good translation, but it is too broad. Interpreters debate whether kenos
                        means “empty” in the sense of lacking truth (so, “untrue”) or lacking
                        results (so, “without result or effect”) or lacking purpose (so, “without
                        purpose,” “in vain”).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                       Whatever the specific meaning, in a scenario in which resurrection
                        does not exist, faith is portrayed as futile, from the Greek mataios
                        (1 Cor. 15:17). Although mataios is not much different from kenos,
                        the idea is that if Jesus is not alive, faith is fruitless, a delusion,
                        because our sins have not been forgiven (1 Cor. 15:17). We would
                        be false witnesses, deceiving and being deceived (1 Cor. 15:15).
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        How does one make sense of 1 Corinthians 15 if the dead soar off
                        to heaven (or to hell) immediately? Why, then, is understanding
                        that the dead sleep such an important teaching?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>100</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Tuesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> August 18</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Christ, the Firstfruits
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        If Jesus were not alive, any expectation about the future would be
                        only delusion (1 Cor. 15:12–19). “But in fact Christ has been raised
                        from the dead” (1 Cor. 15:20, ESV). His resurrection is a historical
                        event. Consequently, we can be sure that all who have died in Christ
                        will be resurrected at His coming (1 Cor. 15:20–23).
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight:"bold"}}>
                            1 Corinthians 15:20–23. What does it mean to say that Jesus is
                            the “firstfruits”?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                   

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The end of the present evil age will be marked by the bodily resurrection
                        of those who died in Christ (1 Cor. 15:22, 23; Rev. 20:5, 6). As the last
                        Adam, Christ will deliver the kingdom back to the Father by bringing the
                        rulership of this world back to Him (1 Cor. 15:25–28). Christ’s subjecting
                        Himself to God (1 Cor. 15:28) must be understood in terms of how Adam
                        and Christ are depicted in relationship to each other. As the ultimate Adam
                        in the plan of redemption (1 Cor. 15:45), Jesus submits Himself entirely to
                        the will of the Father, something that the first Adam failed to do.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 1 Corinthians 15:29–34, Paul resumes his thought about the foolish-
                        ness of denying Christ’s resurrection. He uses the illustration of baptism
                        because it is itself a symbol of a believer’s union with Christ in His death
                        and resurrection (Rom. 6:3, 4; Col. 2:12); it makes no sense to deny the
                        reality of the Resurrection. What is difficult to grasp, however, is what
                        Paul meant by the expression “baptized for the dead” (1 Cor. 15:29).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “Different suggestions have been offered, but it is better to interpret
                        the expression as referring to the decision of some to be baptized so
                        that they would be able to be reunited with dead loved ones at the
                        resurrection. It could also be that the decision to be baptized was a
                        response to the exemplary life of those who had died in Christ. This
                        case would refer to people not being baptized in place of the dead
                        but because of the dead.”—Carl P. Cosaert, “1 Corinthians,” Andrews
                        Bible Commentary: New Testament (Berrien Springs, MI: Andrews
                        University Press, 2022), p. 1652.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       Second, risking death would be pointless if there were no resurrec-
                        tion (1 Cor. 15:30–32). It would be better, instead, to delight in the
                        pleasures of this world (1 Cor. 15:32).
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Reflect on Paul’s words in 2 Timothy 1:12. How could he be so
                        sure about the future? How can we?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>101</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Wednesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            August 19
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        The Resurrected Body
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 1 Corinthians 15:35–39, Paul turns to a brief discourse on the resur-
                        rected body. He begins this section by positing two questions: “ ‘How are
                        the dead raised up? And with what body do they come?’ ” (1 Cor. 15:35,
                        NKJV). These questions are answered in 1 Corinthians 15:36–49.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Corinthians 15:36–41. How does this passage answer the questions in 1 Corinthians 15:35?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Paul applies three analogies to help his readers understand what happens
                        in the resurrection. The first analogy (1 Cor. 15:36–38) remarks that the
                        body is like a seed that must first die (or cease to be a seed) in order to
                        miraculously become a plant. The teaching is clear: resurrection is a mira-
                        cle of God. Second, the analogy of the bodies (1 Cor. 15:39, 40) highlights
                        that, in this world, God provided different types of bodies for animals and
                        for humans appropriate to the current environment. Likewise, our bodies
                        will be suitable for the new circumstances in the heavenly world. This idea
                        is taken a step further with the third analogy of a glorious body (1 Cor.
                        15:40, 41), which emphasizes that the glory of the resurrected body enor-
                        mously exceeds that of the body that came before, our earthly fallen ones.
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        This idea can also be seen through four contrasts between our earthly
                        body here and now, and the resurrected body. The former is terrestrial,
                        perishable, weak, and natural. In turn, the latter is heavenly, imperish-
                        able, powerful, and spiritual (1 Cor. 15:40–44). This does not mean
                        there is no continuity between the two. Paul’s use of the Greek term
                        sōma (“body”) for both the buried body and the resurrected body shows
                        continuity. Conversely, the four contrasts above also show discontinu-
                        ity. Our new bodies will not be the same as the decaying ones we have
                        now (thank the Lord).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Paul does not relate the term “spiritual” to an immaterial existence.
                        Elsewhere, he says that Jesus “will transform our lowly body to be like
                        his glorious body” (Phil. 3:21, ESV). We will have real bodies, but they
                        will not wear down or decay. Because all we know now is decay, sick-
                        ness, and death, it’s hard to imagine life without these things, but that
                        is what we are promised in Jesus.
                    </Text>
                   
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        How does the assurance that our bodies will be transformed into
                        perfection help us be resilient regarding our physical limitations
                        today?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>102</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Thursday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> August 20</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Final Victory Over Death
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Corinthians 15:54–57. What does this passage tell us about our
                            ultimate victory over death?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
            
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul begins the last paragraph in 1 Corinthians 15 with an intriguing
                        statement: “Flesh and blood cannot inherit the kingdom of God” (1 Cor.
                        15:50, NKJV). Many Bible readers use this declaration to say that Paul
                        defends an immaterial existence in heaven. But the context indicates
                        other­wise. The parallelism of 1 Corinthians 15:50 suggests that “flesh and
                        blood” is in parallel with “corruption,” such as “the kingdom of God” is in
                        parallel with “incorruption.” Just as happened in 1 Corinthians 15:42–49,
                        here, as well, Paul is contrasting the body now (or even the corpse) to the
                        resurrected body. The buried body is marked by corruption and mortality,
                        whereas the resurrected body is characterized by incorruption and immor-
                        tality (1 Cor. 15:50, 53, 54). Simply put, Paul is saying that our bodies need
                        to undergo a radical transformation in order to inherit heaven.
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In short, Paul uses the ideas of corruption and mortality to refer to
                        our sinful nature. In Jewish writings, “flesh and blood” is a phrase for
                        fallen humanity, which is why our bodies must be transformed and
                        purged of all imperfection at His return.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Only when our sinful nature is removed (1 Cor. 15:54) and we go
                        through the experience of glorification (1 Cor. 15:51–53, 1 Thess.
                        4:13–17) will the proclamation “ ‘Death is swallowed up in victory’ ”
                        (1 Cor. 15:54, NKJV) be fulfilled. Then, this bold and defiant hymn
                        will be sung: “ ‘O Death, where is your sting? O Hades, where is your
                        victory?’ ” (1 Cor. 15:55, NKJV). This all will take place at the second
                        coming of Christ (1 Cor. 15:51, 52).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Think about it: we close our eyes in death, and the next thing we will
                        experience is the second coming of Jesus, when He raises us from the
                        dead. No matter when a believer died, even thousands of years ago, “in
                        a moment, in the twinkling of an eye,” they will be made alive “at the
                        last trumpet. For the trumpet will sound, and the dead will be raised
                        incorruptible, and we shall be changed” (1 Cor. 15:52, NKJV).
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Who hasn’t bemoaned how quickly life passes us by? In our own
                        experience, that’s how quickly the second coming of Jesus will
                        seem. Perhaps our first thought at His return will be “Wow, Lord,
                        Your coming really was soon!” How does this idea help us better
                        come to terms with what is seen as “the delay”?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>103</Text>
                </View>
                <View style={isDark? styles.bar : styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Friday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> August 21</Text>
                    </View>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Further Thought: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Read Ellen G. White, “God’s People Delivered,”
                            pp. 635–652, in The Great Controversy.
                        </Text>
                        
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       “The divinity of Christ is the believer’s assurance of eternal life. ‘He
                        that believeth in Me,’ said Jesus, ‘though he were dead, yet shall he live:
                        and whosoever liveth and believeth in Me shall never die. Believest thou
                        this?’ Christ here looks forward to the time of His second coming. Then
                        the righteous dead shall be raised incorruptible, and the living righteous
                        shall be translated to heaven without seeing death. The miracle which
                        Christ was about to perform, in raising Lazarus from the dead, would
                        represent the resurrection of all the righteous dead.”—Ellen G. White,
                        The Desire of Ages, p. 530.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “The earth mightily shook as the voice of the Son of God called forth
                        the sleeping saints. They responded to the call and came forth clothed
                        with glorious immortality, crying, ‘Victory, victory, over death and
                        the grave! O death, where is thy sting? O grave, where is thy victory?’
                        (See 1 Cor. 15:55.) Then the living saints and the risen ones raised
                        their voices in a long transporting shout of victory. Those bodies that
                        had gone down into the grave bearing the marks of disease and death
                        came up in immortal health and vigor. The living saints are changed
                        in a moment, in the twinkling of an eye, and caught up with the risen
                        ones, and together they meet their Lord in the air. Oh, what a glorious
                        meeting! Friends whom death had separated were united, never more to
                        part.”—Ellen G. White, The Story of Redemption, pp. 411, 412.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        1. Think about those who were eyewitnesses to Christ’s resurrec-
                        tion (Acts 1:22, Acts 2:32, Acts 3:15, Acts 4:33, Acts 5:30–32). How
                        can we, about two thousand years after that event, be “witnesses”
                        of His resurrection?{"\n"}
                        2. The resurrection of Christ is an integral part of the gospel
                        message (1 Cor. 15:1–4). Without the Resurrection, the proclama-
                        tion of Christ’s death would be irrelevant (1 Cor. 15:14). The death
                        of Christ itself would be irrelevant. Why? What does your answer
                        to this say about the power of Christ’s resurrection?{"\n"}
                        3. Think a bit about Paul’s intriguing statement “If the dead do
                        not rise, ‘Let us eat and drink, for tomorrow we die!’ ” (1 Cor.
                        15:32, NKJV). What is the point?{"\n"}
                        4. In class, talk about the state of the dead. Why does 1 Corinthians
                        15 make no sense if, at death, the saved are immediately taken to
                        heaven?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>104</Text>
                </View>
                
            </ScrollView>
            
        </View>
    )
}
const styles = StyleSheet.create({
    topBox: {
        backgroundColor: "#022a05", 
        color: "white", 
        width: "47%", 
        padding: 7, 
        paddingTop: 30,
    },
    topBoxLight: {
        backgroundColor: "red", 
        color: "white", 
        width: "47%", 
        padding: 7, 
        paddingTop: 30        
    },
    body: { 
        fontSize: 19, 
        lineHeight: 26,
        color: "#181717",
        padding: 5, 
        marginTop: 5, 
    },
    bodySmall: {
        fontSize: 17, 
        lineHeight: 26,
        color: "#181717",
        padding: 5, 
        marginTop: 5,         
    },
    bodyLarge: {
        fontSize: 21, 
        lineHeight: 26,
        color: "#181717",
        padding: 5, 
        marginTop: 5,      
    },
    terminalQuestion:{
        marginTop: 10,
        color: "#022a05",
        fontSize: 18,
        fontStyle: "italic",
        fontWeight: "bold",
        backgroundColor: "#729a74",
        padding: 10,
    },
    terminalQuestionLight:{
        marginTop: 10,
        color: "black",
        fontSize: 18,
        fontStyle: "italic",
        fontWeight: "bold",
        backgroundColor: "#e8c4c4",
        padding: 10,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    bar: {
        borderBottomWidth: 50, 
        borderBottomColor: "#022a05"
    },
    barLight: {
        borderBottomWidth: 50, 
        borderBottomColor: "red",
    },
    tbold: {
        fontWeight: "bold",
        fontSize: 20
    },
    line: {
        backgroundColor: "black", 
        borderBottomColor: "black", 
        borderBottomWidth: 0.5, 
        margin: 15,
    }
})
export default Week8;