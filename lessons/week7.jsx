import { Stack, useRouter } from "expo-router";
import { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { images } from "../constants/images";
import { FontContext } from "../contexts/font";
import { ThemeContext } from "../contexts/theme";


const Week7 = ()=>{
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
                            Lesson 7
                        </Text>
                        <Text style={[{paddingTop: 40}, font=="medium"?{fontSize: 17}:(font=="large"?{fontSize: 19}:{fontSize: 15})]}>
                            *August 8–14
                        </Text>
                    </View>

                    <Text style={[{fontStyle: "italic"}, font=="medium"?{fontSize: 30}:(font=="large"?{fontSize: 32}:{fontSize: 28})]}>
                        A Portrait of Love
                    </Text>

                    <View style={{overflow: "hidden", marginTop:10, maxHeight: 120, width: "100%"}}>
                        <Image source={images.lesson7} resizeMode="contain" style={{maxWidth: 370, maxHeight: 134, width: "100%"}}/>
                    </View>
                    
                    <View style={[{height: 4, marginTop: 5}, isDark?{backgroundColor: "#022a05"}:{backgroundColor: "red"}]}></View>
                    <Text style={{marginBottom: 10, color: "#022a05"}}>SABBATH AFTERNOON</Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>
                            Read for This Week’s Study: 
                        </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}>
                            11 Corinthians 13; Matt.
                            24:12; Gal. 5:22, 23; 1 Tim. 1:14; 1 John 4:8.
                        </Text>
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Memory Text: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}> 
                            “And now these three remain: faith, hope and love.
                            But the greatest of these is love” (1 Corinthians 13:13, NIV).
                        </Text>
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Love can conquer all. That’s why Paul had so much to say about it.
                        The word family of agapaō—the most common Greek word in the
                        New Testament to express the concept of love—occurs more than
                        135 times in his letters. This represents almost half of all occurrences
                        in the New Testament. This should tell us something about the central
                        theme of Paul’s letters to the Corinthian church.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}There are many remarkable passages about love in the New
                        Testament—Romans 8:35–39, 1 Corinthians 2:9, 1 Corinthians 8:3,
                        Galatians 2:20, Colossians 1:13, 1 Thessalonians 3:12, and more—but
                        nothing compares to 1 Corinthians 13.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Last week, we saw that without love, all things, even spiritual gifts,
                        are worthless. This week, we will look more deeply into 1 Corinthians
                        13 and its marvelous portrait of love.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}As we will see, love is not so much an emotion as an attitude, an atti-
                        tude that must be expressed in life, in deeds, and in words; other­wise,
                        it means nothing.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}What love really is, and does, has been fully revealed in the life of
                        Jesus.
                    </Text>

                    <Text style={{fontStyle: "italic", fontSize: 18}}>
                       * Study this week’s lesson to prepare for Sabbath, August 15. 
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>85</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{ margin: 6,}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>
                            Sunday 
                        </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            August 9
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        The Essentialness of Love
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Last week we touched on the theme of love as seen in 1 Corinthians
                        13. We need to explore Paul’s words here in even more depth.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            1 Corinthians 13. Summarize what he is telling us about love.
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Paul is not saying that tongues (1 Cor. 13:1), prophecy, understand-
                        ing, knowledge, faith (1 Cor. 13:2), and benevolence (1 Cor. 13:3) are
                        useless. They are useless only if not driven by love.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The kind of love Paul is talking about is not expressed in such sen-
                        tences as “I love strawberries” or “I love my friends” or even “I love my
                        spouse and children.” Neither is he talking about the kind of love that
                        one sees in movies. And no, it is not erotic love, although this passage
                        has been commonly used in wedding sermons.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        This love cannot be reduced to affection, or charity, or virtue, or
                        benevolence. Yet, they all represent it to a lesser or greater degree.
                        This love is a special grace bestowed upon us by the Spirit. Indeed,
                        love in 1 Corinthians 13 is the Spirit-given motivation that leads us
                        to act with affection, charity, virtue, and benevolence. It is a total
                        commitment of our actions, feelings, and thoughts toward Christ and
                        our neighbors.
                    </Text>

                     <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            Matthew 24:12. What warning does Jesus give us here?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        That is why agapē love is so essential and necessary. In the power
                        of Christ, we cannot let love grow cold in our homes, churches, and
                        neighborhoods. We have the example of Christ on the cross, dying for
                        us. What better and more powerful expression of this kind of love could
                        there be? Though of course we could never equally express that kind
                        of love, by God’s grace we should strive to reveal it in our own lives to
                        whatever degree we can.
                    </Text>
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        What are some times when, indeed, an expression of this kind of
                        love could have made a powerfully positive impression on some-
                        one who needed this love more than anything else?
                    </Text>

                </View>
                
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>86</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Monday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>August 10</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        What Love Does
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        First Corinthians 13:4–7 is the heart of the chapter. Paul focuses on
                        the features of love—showing what love is and what it is not, or what
                        love does and does not do. He personifies love so that we can have a
                        glimpse of how a person filled with Spirit-driven love behaves. In his
                        portrayal of love, Paul uses a series of verbs. For him, love is more
                        about actions than about feelings or emotions.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        What, then, does love do?
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        1. Shows patience (makrothymeō). Makrothymeō means to show
                        patience, even amid challenging circumstances. Patience also high-
                        lights the ability to be forbearing with one another (Eph. 4:2).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        2. Shows kindness (chrēsteuomai). Chrēsteuomai occurs only here
                        in the New Testament, but other words from the same root are common
                        elsewhere. In the Septuagint (the Greek version of the Old Testament),
                        words from this root occur frequently in the Psalms to refer to God’s
                        kindness associated with His mercy (Ps. 145:9). By saying that love
                        shows kindness, Paul meant that one’s love for others must emulate
                        God’s compassion and mercy toward us.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        3. Rejoices (synchairō) in the truth. Synchairō denotes the ability
                        to experience joy alongside another person (Luke 1:58; Luke 15:6, 9;
                        1 Cor. 12:26; Phil. 2:17, 18).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        4. Bears (stegō) all things. Scholars debate whether stegō means “to
                        cover,” namely, to keep something confidential (which also has a sense
                        of protection), or “to endure,” with a sense of resilience. The concept
                        of endurance clearly occurs in 1 Corinthians 9:12, leading most inter-
                        preters and Bible translators to take the second option as more likely.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        5. Believes (pisteuō) all things. Pisteuō comes from the same root
                        as the Greek term for faith (pistis). In the context of 1 Corinthians 13,
                        believing all things means giving one another the benefit of the doubt.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        6. Hopes (elpizō) all things. In the New Testament, the verb elpizō
                        always refers to the belief or expectation that something good will
                        occur.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        7. Endures (hypomenō) all things. Likely, there is no difference
                        between the verbs stegō and hypomenō in 1 Corinthians 13:7. They
                        are synonyms, meaning here endurance amid hardship. Paul uses
                        hypomenō at the end of the verse to avoid the repetition of stegō. By
                        repeating the same concept even with a different word, he draws atten-
                        tion to believing and hoping as the focal point. In other words, love
                        endures by believing and hoping.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Compare 1 Corinthians 13:4–7 to Galatians 5:22, 23. What ideas
                        in common do you see between the two passages? How can we
                        manifest this kind of love in our own lives?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>87</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Tuesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> August 11</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        What Love Does Not Do
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight:"bold"}}>
                            again 1 Corinthians 13:4–7. Why does Paul mention negative
                            rather than only positive characteristics of love?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                   
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Yesterday, we focused on seven things love does; today, we will look
                        into eight things it does not do. Love . . .
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        1. Does not envy (zeloō). Zeloō can be used positively as in “desire
                        [zeloō] the higher gifts” (1 Cor. 12:31, ESV), “desire [zeloō] the spiri-
                        tual gifts” (1 Cor. 14:1, ESV), and “desire [zeloō] to prophesy” (1 Cor.
                        14:39, ESV). Here, though, as in Acts 7:9, it is negative. It is OK to
                        desire spiritual gifts but not to envy gifted persons. This causes division
                        (1 Cor. 3:3).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        2. Does not boast (perpereuomai). The verb perpereuomai conveys
                        the idea of arrogance and desire for praise from others. Love, however,
                        is not self-focused like that. This is even clearer in what follows.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        3. Does not puff up (physioō). The verb physioō occurs in 1 Corinthians
                        8:1 in Paul’s remarkable statement, “ ‘Knowledge’ puffs up, but love
                        builds up” (ESV). It refers to a person inflated with self-importance.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        4. Does not behave rudely (aschēmoneo). The verb aschēmoneo
                        may have an ample range of meanings. By and large, though, it means
                        acting contrary to social and moral standards in a dishonorable,
                        shameful, indecent, or improper manner. Paul likely is referring to the
                        arrogant and rude behavior of the “strong” party toward the “weak”
                        members in Corinth (1 Cor. 4:10, 1 Corinthians 8).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        5. Does not seek (zēteo) its own [rights]. This is similar to what Paul
                        says in 1 Corinthians 10:24: “No one is to seek his own right, but rather
                        that of others” (author’s translation). Love gives up its own rights for
                        the sake of others (see Lesson 5). In a setting in which everyone seeks
                        each other’s rights, all benefit.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        6. Does not get easily irritated (paroxynō). The verb paroxynō
                        suggests an inward state of arousal pointing to someone easily
                        provoked to anger. This means that love is not short-tempered or
                        touchy.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        8. Does not delight (chairō) in wrongdoing. Love not only keeps no
                        record of someone else’s wrongs but takes no pleasure in them. When
                        we truly love others, we do not rejoice at their mistakes but, instead,
                        seek to help them.
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>88</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Wednesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            August 12
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        A Portrait of Jesus
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        As we read 1 Corinthians 13:4–7, we may feel frustrated at realizing
                        that, to a lesser or greater degree, we fall short of displaying all those
                        features of love. Likely, Paul had the person of Jesus in mind when
                        writing 1 Corinthians 13. Indeed, only Christ perfectly revealed all
                        those characteristics of love. Thus, ultimately, Paul’s portrayal of love
                        is a portrait of Jesus.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            John 13:1, 34; John 15:9, 12; 1 Timothy 1:14; 2 Timothy 1:7, 13;
                            1 John 3:16; and 1 John 4:7–12, 19–21. What can we learn about
                            love from these passages?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        God is love (1 John 4:8). He loves us so much that He gave His only
                        Son (John 3:16). Jesus is the full expression of this love (Heb. 1:3).
                        If we want to know how love expresses itself, we must take a long
                        look at Jesus. If we pay close attention to the portrayal of Jesus in
                        the New Testament, we will realize that all the positive features of
                        love in 1 Corinthians 13 are seen in Him.
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Jesus is patient. “But for that very reason I was shown mercy so that
                        in me, the worst of sinners, Christ Jesus might display his immense
                        patience [makrothymia]” (1 Tim. 1:16, NIV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Jesus is kind. The Bible says that “the Lord is kind” (1 Pet. 2:3,
                        LEB). The word “Lord” in this passage refers to Jesus. The term “kind”
                        renders the Greek word chrēstos, which comes from the same root as
                        the verb chrēsteuomai (“to show kindness”) in 1 Corinthians 13:4.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Jesus rejoices in the truth. Jesus experienced joy as He followed
                        the will of the Father and felt His love for Him (John 15:9–11, John
                        17:12–14).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Jesus bears/endures all things. Hebrews 12:2, 3 says that Jesus
                        “endured the cross. . . . [He] endured such hostility from sinners against
                        Himself ” (NKJV). Nobody has endured so much as Jesus (Phil. 2:8).
                        He did this for the joy set before Him!
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Jesus believes all things. When Ananias questioned the genuineness
                        of Paul’s conversion (Acts 9:13, 14), Jesus answered, “He is a chosen
                        instrument of mine” (Acts 9:15, ESV). Jesus sees people not only as
                        they are but as they will become through His power.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        What are other ways that Jesus reveals to us what true love really is?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>89</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Thursday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> August 13</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Faith, Hope, and Love
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Thus far, we have learned that love is patient, kind, joyful, resil-
                        ient, believing, hopeful, and enduring (or perseverant) because
                        Jesus is all these things. Once we see these qualities in Jesus, the
                        next step is to imitate Him. That was Paul’s wish for the Corinthians.
                        However, if we remove the “not” in the eight negative features
                        of love, “we get a pretty good description of the Corinthians’
                        conduct within their church circle: envious, boasting, arrogant,
                        rude, self-seeking, easily offended, and looking to see what others
                        were doing wrong. Paul is tailoring the verbs he uses here to the
                        Corinthian s­ituation.”—Verlyn D. Verbrugge, “1 Corinthians,” in
                        The Expositor’s Bible Commentary: Romans–Galatians, revised
                        edition (Grand Rapids, MI: Zondervan, 2008), p. 372.
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The Corinthians had much to learn. So do we. After describ-
                        ing what love does and does not do, Paul concludes his section by
                        emphasizing the everlasting nature of love so as to stimulate the
                        practice of genuine love.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        One day, prophecies will no longer be necessary; we will speak
                        only one language; and flawed human knowledge will be replaced
                        by a brand-new knowledge of God (1 Cor. 13:12). The gifts of the
                        Spirit will cease only when the purpose for which they exist has
                        reached its fulfillment (1 Cor. 13:10). “But love will last forever!”
                        (1 Cor. 13:8, NLT).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Likewise, when Christ returns, faith will give place to sight (2 Cor.
                        5:7), and that which we have long hoped for will be reality (Rom.
                        8:24). And, most of all, love will endure as an emblem of the charac-
                        ter of our triune God. Yet, there is a sense in which faith and hope will
                        also last forever. Faith as the experience of salvation (Rom. 4:3), and
                        hope as the desire and expectation of new delights and knowledge in
                        the new earth, will mark the experience of the redeemed forever. Yet
                        love, God’s love, will eternally prevail.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Very soon, we will see our Lord face-to-face (1 Cor. 13:12). Until
                        that day comes, we are supposed to define our lives with these three
                        virtues: faith, hope, and love. This triad is representative of the full-
                        ness of Christian life through the Spirit. That is why it was often
                        referred to among Christians (Rom. 5:1–5; Gal. 5:5, 6; Eph. 1:15,
                        18; 4:1–5). Love, however, is the greatest; after all, it is the only
                        virtue used to describe the very nature of God Himself (1 John 4:8).
                    </Text>
                       
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Dwell on the statement “God is love.” How are we supposed
                        to understand exactly what that means? And though we can
                        grasp the idea only in part, why is that phrase such good news
                        for us?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>90</Text>
                </View>
                <View style={isDark? styles.bar : styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Friday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> August 14</Text>
                    </View>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Further Thought: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Read Ellen G. White, “The Need of Love,” pp.
                            545, 546, The Advent Review and Sabbath Herald, August 28, 1888.
                        </Text>
                        
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       “No matter how high the profession, he whose heart is not filled with
                        love for God and his fellow men is not a true disciple of Christ. Though
                        he should possess great faith and have power even to work miracles,
                        yet without love his faith would be worthless. He might display great
                        liberality; but should he, from some other motive than genuine love,
                        bestow all his goods to feed the poor, the act would not commend him
                        to the favor of God. In his zeal he might even meet a martyr’s death,
                        yet if not actuated by love, he would be regarded by God as a deluded
                        enthusiast or an ambitious hypocrite.”—Ellen G. White, The Acts of the
                        Apostles, pp. 318, 319.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “We have an abundance of sermonizing. What is most needed . . . is
                        love for perishing souls, that love which comes in rich currents from the
                        throne of God. True Christianity diffuses love through the whole being.
                        It touches every vital part, the brain, the heart, the helping hands, the
                        feet, enabling men to stand firmly where God requires them to stand,
                        so that they will not make crooked paths for their feet, lest the lame
                        be turned out of the way. The burning, consuming love of Christ for
                        perishing souls is the life of the whole system of Christianity.”—Ellen
                        G. White, Lift Him Up, p. 134.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       “Only the love that flows from the heart of Christ can heal. Only he in
                        whom that love flows, even as the sap in the tree or the blood in the body,
                        can restore the wounded soul.”—Ellen G. White, Education, p. 114.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        1. Do you think Paul’s list of positive features of love is exhaus-
                        tive? If not, what other elements would you add to the list?{"\n"}
                        2. What do you think Paul meant by the command “Pursue love”
                        (1 Cor. 14:1, NKJV)? What does this have to do with what he says
                        in 1 Corinthians 13:4–7?{"\n"}
                        3. Which characteristic of love do you most need to put into
                        practice in your daily life? Which ones are more necessary in your
                        local church? By the way, why does Paul compare love with such
                        gifts as prophecy, tongues, and knowledge (1 Cor. 13:8)?{"\n"}
                        4. Paul hints that love is the ultimate solution for the lack of unity
                        among members in Corinth. Why? How does this apply to our
                        churches today?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>91</Text>
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

export default Week7;