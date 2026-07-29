import { Stack, useRouter } from "expo-router";
import { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { images } from "../constants/images";
import { FontContext } from "../contexts/font";
import { ThemeContext } from "../contexts/theme";


const Week1 = ()=>{
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
                            Lesson 5
                        </Text>
                        <Text style={[{paddingTop: 40}, font=="medium"?{fontSize: 17}:(font=="large"?{fontSize: 19}:{fontSize: 15})]}>
                             *July 25–31
                        </Text>
                    </View>

                    <Text style={[{fontStyle: "italic"}, font=="medium"?{fontSize: 30}:(font=="large"?{fontSize: 32}:{fontSize: 28})]}>
                        All to the Glory of God
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
                            1 Corinthians 8; Acts 15:20;
                            1 Cor. 9:1–6; 1 Cor. 10:5–22; Deut. 6:4, 5; Mark 12:28–31.
                        </Text>
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Memory Text: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}> 
                            “Therefore, whether you eat or drink, or whatever
                            you do, do all to the glory of God” (1 Corinthians 10:31, NKJV).
                        </Text>
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}First Corinthians 8–10 brings the discussion on sexuality (in
                        chapters 5–6) to a conclusion at the same time that it intro-
                        duces Paul’s answers to specific questions asked through a let-
                        ter (1 Cor. 7:1) from the Corinthians. These answers will dominate
                        the remainder of 1 Corinthians.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}The transitional nature of 1 Corinthians 7 indicates that sexual immo-
                        rality (chapters 5–7) and idolatry (chapters 8–10) are related topics.
                        Indeed, they are often mentioned together in the New Testament (see
                        Acts 15:20, 29; Acts 21:25; 1 Cor. 6:9; Eph. 5:5; Col. 3:5; Rev. 21:8;
                        Rev. 22:15).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}In general, while in 1 Corinthians 5–7 Paul deals with the problem
                        of sexual immorality, in 1 Corinthians 8–10 his main concern is the
                        issue of idolatry. He states that Christians must flee from both (1 Cor.
                        6:18, 1 Cor. 10:14).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Last week, we saw that by being a temple of the Holy Spirit (1 Cor.
                        6:19, 20), one can flee from sexual immorality. This week, we will
                        see that one can flee from idolatry by doing “all to the glory of God”
                        (1 Cor. 10:31, NKJV).
                    </Text>

                    <Text style={{fontStyle: "italic", fontSize: 18}}>
                        * Study this week’s lesson to prepare for Sabbath, August 1. 
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>57</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{ margin: 6,}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>
                            Sunday 
                        </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            July 26
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Knowledge Versus Love
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={{fontWeight: "bold", fontSize: 20, color:"red"}}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Corinthians 8:1–13. Why does Paul contrast knowledge with
                            love, and what is the context here? What point is he making?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul uses the theme of food offered to idols in order to address
                        a deeper issue: the lack of love for others (1 Corinthians 8). The
                        matter of food offered to idols split the church of Corinth into two
                        groups. Some believed that their knowledge about the nonexistence
                        of other gods gave them the right to eat anything (1 Cor. 8:4). These
                        are referred to as the “strong” (1 Cor. 4:10). Those who opposed this
                        behavior are called the “weak” (1 Cor. 8:9–12). Paul uses such a
                        label because they did not overcome some superstitious beliefs that
                        marked their previous pagan experience. When seeing the “strong”
                        eating food offered to idols, they might conclude that Christianity
                        and idolatry were compatible. So, Paul did not want the “strong” to
                        become a stumbling block to the weak.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        The Bible sees the act of eating food offered to idols very negatively
                        (Acts 15:20, 29; Acts 21:25; compare with Rev. 2:14, 20). However,
                        Paul does not utter as radical statements as one sees in these passages.
                        This is because his primary concern regards the lack of unity that the
                        misuse of knowledge could cause. Paul is not criticizing knowledge as
                        evil in itself; instead, he’s against the kind of knowledge that leads to
                        arrogance and division in the church. Knowledge without love is not
                        true knowledge at all (1 Cor. 8:2). True knowledge arises only when
                        one loves God and is known by Him (1 Cor. 8:3).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       Quoting Deuteronomy 6:4, Paul shows that believers must know
                        that there is only one God (1 Cor. 8:4–6). Interestingly, he follows the
                        same idea one sees in Deuteronomy 6:4, 5, where the statement that
                        our God is one is followed by the command “You shall love the Lord
                        your God” (NKJV). For both Paul and Moses, knowledge without love
                        is worthless.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Confident in their knowledge, the “strong” believed that eating food
                        sacrificed to idols was harmless. As we will see on Wednesday and
                        Thursday, Paul conceded to them that right under certain conditions.
                        However, if that became a stumbling block for the “weak” (1 Cor. 8:9),
                        it should be avoided. Christians are supposed to practice self-denial out
                        of love for Christ and others.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Paul argues that, without love, knowledge may become a bad
                        thing (1 Corinthians 8). In what situations can knowledge without
                        love indeed be bad?
                    </Text>

                </View>
                
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>58</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Monday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 27</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Selfless Love
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            1 Corinthians 9:1–6. How does this passage provide a practical
                            example of what it means to practice self-denial motivated by love?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        At first sight, it looks as though Paul’s defense of his apostleship,
                        in 1 Corinthians 9, has nothing to do with the previous discussion on
                        knowledge versus love. One cannot forget, though, that the Bible was
                        not originally written in chapters. What Paul teaches in 1 Corinthians 9
                        is not disconnected from the preceding material. Indeed, 1 Corinthians
                        9 offers a practical example of selfless love for Christ and for the breth-
                        ren. For the sake of love, Paul relinquishes a few rights.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “To eat and drink” (1 Cor. 9:4, NKJV). Here food and drink rep-
                        resent financial assistance in general. As an apostle, Paul had the right
                        to receive material support from those to whom he ministered. Other
                        religious leaders in his time used to do just that. But he didn’t; instead,
                        he supported himself by making tents (Acts 18:3).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                      “To take along a believing wife” (1 Cor. 9:5, NKJV). A married
                        apostle was allowed to make a missionary journey with his wife at the
                        church’s expense. Examples of missionary couples include Priscilla and
                        Aquila (Rom. 16:3) and Andronicus and Junia (Rom. 16:7). But Paul was
                        unmarried (1 Cor. 7:8). He could get married and then benefit from the
                        right of being accompanied by a wife, with financial support for both.
                    </Text>
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “To refrain from working” for a living (1 Cor. 9:6, NKJV). Paul
                        and Barnabas had the right to earn wages for their missionary work
                        (1 Cor. 9:4–6). Paul made tents for a living (Acts 18:3), but we don’t
                        know what Barnabas’s occupation was. We know that he was very
                        generous (Acts 4:36, 37), and thus, he was willing to support himself.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 1 Corinthians 9:7–11, Paul develops the idea of 1 Corinthians
                        9:6 in order to show that it is fair for him and Barnabas to earn a liv-
                        ing from the church (1 Cor. 9:11, 12). The Lord Himself commanded,
                        “Those who preach the gospel should live from the gospel” (1 Cor.
                        9:14, NKJV; compare with 1 Tim. 5:18). Nevertheless, Paul says, “We
                        have not made use of this right” (1 Cor. 9:12, ESV). Thus, Paul presents
                        himself as an example of self-denial (1 Cor. 9:1–18) and argues that
                        this benefits the preaching of the gospel in Corinth (1 Cor. 9:19–23).
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        What are things that, though they perhaps are due you, you
                        might still be better off relinquishing in order to be a more effec-
                        tive witness for the Lord?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>59</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Tuesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 28</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Learning From the Past
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        After providing an example of self-denial from his own experience,
                        Paul turns more particularly toward the issue of idolatry. In a sense,
                        1 Corinthians 10 develops the idea of 1 Corinthians 9:27, where Paul
                        comments that he exercises self-discipline in order not to become dis-
                        qualified. He wants the Corinthians to follow his example, but Jesus is
                        the model par excellence (1 Cor. 11:1).
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight:"bold"}}>
                            1 Corinthians 10:7–11. What sins did Israel commit in the wil-
                            derness, and why do the privileges granted to them make their sins
                            even worse?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                   
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 1 Corinthians 10:1–5, Paul alludes to the history of God’s people
                        in the wilderness. The reference to the cloud and the sea brings God’s
                        leading, presence, and protection to mind. In turn, food and drink stand
                        for God’s provision. Paul refers to the experience of Israel in the cloud
                        and sea as a baptism, analogous to Christian baptism. Likewise, by
                        referring to food and drink, Paul alludes to the Lord’s Supper.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In other words, 1 Corinthians 10 teaches that, in a sense, Christians
                        are living the same experiences as Israel did. However, Paul recalls the
                        history of Israel because he does not want that history to repeat itself.
                        Despite all the privileges Israel had, many of the people nevertheless
                        desired evil things (1 Cor. 10:6), such as idolatry (1 Cor. 10:7) and
                        sexual immorality (1 Cor. 10:8). No wonder, then, that “God was not
                        pleased with most of them” (1 Cor. 10:5, NIV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        It is easy to point the finger at ancient Israel and say they commit-
                        ted gross sins. However, Paul argues that Christians are susceptible to
                        practicing similar sins despite their immense privilege of knowing the
                        history of Christ. This is clear in the warning: “Let him who thinks he
                        stands take heed lest he fall” (1 Cor. 10:12, NKJV). The phrase “who
                        thinks” suggests that some in the church did not realize they were in
                        danger of falling into those sins. Do we run the same risk today?
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “Let him who thinks he stands take heed lest he fall.” Who among us
                            has not experienced the reality of that warning?
                    </Text>
                                  
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        The Bible says that God will not allow us to be tempted beyond
                        what we can bear, “but with the temptation will also make the
                        way of escape” (1 Cor. 10:13, NKJV). Why, then, do we still find it
                        so easy to fall into sin?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>60</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Wednesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 29</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Warning Against Idolatry
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Corinthians 10:5–22. Why must we flee from idolatry?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 1 Corinthians 10:14–22, Paul resumes the issue of food offered to
                        idols. Offering food to idols may be strange in many cultures today, but it
                        was common in biblical times. When animals were sacrificed to the gods
                        in the heathen temples, part of the animal was given to the officiat­ing
                        priests, who sold the meat. Some of this meat found its way into the pub-
                        lic markets. Because this meat was not kept separate from other meat that
                        was also offered for sale in the market, a Christian might unknowingly
                        purchase meat that had been offered to idols. The counsel of the apostle
                        is that such meat may be freely purchased by Christians.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Nevertheless, while meat previously sacrificed in a temple could be
                        eaten by Christians at home (1 Cor. 8:1–13), the practice of going into
                        pagan temples and participating in their festivals was clearly forbid-
                        den for Christians. The criterion is clear: Christians are allowed to eat
                        that meat at home because the idols are nothing (1 Cor. 8:4); however,
                        Christians must not participate in pagan ceremonies because this corre-
                        sponds to worshiping demons (1 Cor. 10:20, 21). Taking part in pagan
                        rituals equals having communion with demons (1 Cor. 10:20), just as
                        taking part in the Lord’s Supper equals having communion with Christ
                        (1 Cor. 10:16).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Thus, Paul says, “You cannot drink the cup of the Lord and the cup
                        of demons; you cannot partake of the Lord’s table and of the table of
                        demons” (1 Cor. 10:21, NKJV). As Jesus said: “No one can serve two
                        masters” (Matt. 6:24, NKJV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Paul teaches that God requires wholehearted loyalty. He implies that
                        idolatry provokes “the Lord to jealousy” (1 Cor. 10:22, NKJV). For that
                        not to happen, Paul, in 1 Corinthians 8:4–6, provides an infallible rule
                        against idolatry, by alluding to Deuteronomy 6:4, 5, “Hear, O Israel:
                        The Lord our God, the Lord is one! You shall love the Lord your
                        God with all your heart, with all your soul, and with all your strength”
                        (NKJV; emphasis supplied). To this idea of loving God above all things
                        in Deuteronomy 6:5, Jesus added, “ ‘ “You shall love your neighbor as
                        yourself ” ’ ” (Mark 12:31, NKJV; see also Lev. 19:18)
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        An idol doesn’t have to be a stone statue. We can make an idol
                        out of just about anything. What idols, if any, do you need to flee
                        from in your own life?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>61</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Thursday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 30</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Overcoming Idolatry
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 1 Corinthians 8:1–3, Paul argues that love for God keeps one safe from
                        idolatry. This argument is resumed and further developed in 1 Corinthians
                        10:23–11:1. In 1 Corinthians 8:3, he speaks about our love for God. He
                        says, “Let no one seek his own, but each one the other’s well-being”
                        (1 Cor. 10:24, NKJV). This is love for others.
                    </Text>
                    
                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Mark 10:17–22 and Mark 12:28–31. What do these two pas-
                            sages have in common, and how do they apply to the situation in
                            1 Corinthians 10?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul is doing in 1 Corinthians 10 precisely what Jesus did in Mark
                        12:28–31; namely, he binds together the two great commandments of
                        the law: love for God above all, and love for others. In the story of the
                        rich young ruler (Mark 10:17–22), Jesus unites these two kinds of love,
                        and does so by respectively alluding to Deuteronomy 6:4 (see Mark
                        10:18) and the second table of the Decalogue (see Mark 10:19). The
                        problem of that rich young man is that he loved his possessions more
                        than he loved God and his neighbors (Mark 10:22). He valued his trea-
                        sure on earth above the treasures in heaven. He valued his money above
                        the poor (Mark 10:21). He was an idolater.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Following the teachings of Jesus, Paul hints that the principle of lov-
                        ing God above all and the neighbor as oneself is to be applied to the
                        hypothetical situations he mentions in 1 Corinthians 10:27, 28. This
                        means that even lawful things may not be helpful or edifying since they
                        can be offensive to someone else’s conscience (1 Cor. 10:23). This prin-
                        ciple is masterly synthesized in the words “Do all to the glory of God”
                        (1 Cor. 10:31, NKJV). By saying that all must be done to the glory of
                        God, Paul indicates that idolatry can manifest itself in the most varied
                        forms, for anything that usurps the glory that belongs to God alone is a
                        form of idolatry (Isa. 42:8).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul’s words in 1 Corinthians 10:31–11:1 serve as a conclusion to
                        chapters 8–10. He makes it clear he did not seek his own advantage,
                        “but that of many, that they may be saved” (1 Cor. 10:33, ESV). That is
                        how he imitated Christ (1 Cor. 11:1).
                    </Text>
                       
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        How can you learn to better love your neighbor as yourself?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>62</Text>
                </View>
                <View style={isDark? styles.bar : styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Friday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 31</Text>
                    </View>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Further Thought: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Read Ellen G. White, “Idolatry at Sinai,” pp.
                            315–330, in Patriarchs and Prophets.
                        </Text>
                        
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       “How much good might be done if we would make a right use of
                        our associations with one another! Every one who has received of the
                        heavenly benefits is under obligation to shed some light on the pathway
                        of others. . . . Then all those who truly love God will cease their idolatry
                        of self.”—Ellen G. White, in The Advent Review and Sabbath Herald,
                        November 18, 1884, p. 730.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “Paul urged his brethren to ask themselves what influence their
                        words and deeds would have upon others and to do nothing, however
                        innocent in itself, that would seem to sanction idolatry or offend the
                        scruples of those who might be weak in the faith. ‘Whether therefore
                        ye eat, or drink, or whatsoever ye do, do all to the glory of God. . . .’
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       “The apostle’s words of warning to the Corinthian church are appli-
                        cable to all time and are especially adapted to our day. By idolatry he
                        meant not only the worship of idols, but self-serving, love of ease, the
                        gratification of appetite and passion.”—Ellen G. White, The Acts of the
                        Apostles, pp. 316, 317.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                      “If you see that by doing certain things which you have a perfect
                        right to do, you hinder the advancement of God’s work, refrain
                        from doing those things. Do nothing that will close the minds of
                        others against the truth. . . . All things may be lawful, but all things
                        are not expedient.”—Ellen G. White, Testimonies for the Church,
                        vol. 9, p. 215.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        1. According to Paul, the behavior of a mature Christian can
                        sometimes inhibit the growth of an immature Christian. Think of
                        situations in which this may happen. Why is the principle of loving
                        God above all, and the other as oneself, the only way to deal with
                        this challenge?{"\n"}
                        2. What are some idols that even Christians can end up worship-
                        ing, if not careful? What are some good things that we can turn
                        into idols? Also, how do you know if something that you care
                        greatly about has become an idol?{"\n"}
                        3. Paul says he disciplined his body and brought it into subjection
                        so he would not become disqualified when preaching the gospel
                        (1 Cor. 9:27). Based on this week’s study, think about what can
                        disqualify a person as a preacher of the gospel.{"\n"}
                        4. In 1 Corinthians 10, Paul addresses the dangers of idolatry and
                        says, “Flee from idolatry” (1 Cor. 10:14). Why is idolatry so bad?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>63</Text>
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

export default Week1;