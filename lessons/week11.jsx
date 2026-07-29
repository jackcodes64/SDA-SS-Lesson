import { Stack, useRouter } from "expo-router";
import { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { images } from "../constants/images";
import { FontContext } from "../contexts/font";
import { ThemeContext } from "../contexts/theme";


const Week11 = ()=>{
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
                            Lesson 11
                        </Text>
                        <Text style={[{paddingTop: 40}, font=="medium"?{fontSize: 17}:(font=="large"?{fontSize: 19}:{fontSize: 15})]}>
                            *September 5–11
                        </Text>
                    </View>

                    <Text style={[{fontStyle: "italic"}, font=="medium"?{fontSize: 30}:(font=="large"?{fontSize: 32}:{fontSize: 28})]}>
                        Stewardship and Mission
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
                            2 Corinthians 8–9; John 3:16; John 17:5; Luke 9:58; Rev. 13:8; Rom. 12:8; Rom. 15:26, 27.
                        </Text>
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Memory Text: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}> 
                            “For you know the grace of our Lord Jesus Christ,
                            that though He was rich, yet for your sakes He became poor, that you
                            through His poverty might become rich” (2 Corinthians 8:9, NKJV).
                        </Text>
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Second Corinthians 8 and 9 show that Paul gave the Corinthians
                        the opportunity to serve their brothers and sisters in Judea. This
                        passage shows that giving is a privilege that God grants us, so
                        that we can emulate the self-giving character of Christ. The language
                        of heaven is one of giving. Notice these remarkable words: “For God so
                        loved the world that He gave His only begotten Son” (John 3:16, NKJV;
                        emphasis supplied).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Furthermore, John 3:16 clearly expresses God’s purpose in giving
                        Jesus, so that “whoever believes in Him should not perish but have
                        everlasting life” (NKJV). Stewardship and mission go together in this
                        passage. They are as inseparable as the two sides of a coin. It is no
                        wonder that Paul identifies himself and his fellow workers as “stewards
                        of the mysteries of God” (1 Cor. 4:1, NKJV). We, too, are stewards in
                        the same sense.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}This week we will see that the concepts of stewardship and mission
                        are deeply rooted in the example of Jesus. Indeed, stewardship and mis-
                        sion are inseparable. Stewardship provides the church with financial
                        and human resources to fulfill God’s mission.
                    </Text>

                    <Text style={{fontStyle: "italic", fontSize: 18}}>
                       * Study this week’s lesson to prepare for Sabbath, September 12.
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>137</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{ margin: 6,}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>
                            Sunday 
                        </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            September 6
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        The Example of Jesus
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The context of 2 Corinthians 8 and 9 has to do with Paul’s encourag-
                        ing members in Corinth to complete a fundraiser for the impoverished
                        churches in Judea. Apparently, they had already committed to doing
                        that (2 Cor. 8:10, 11; 2 Cor. 9:5; see also 1 Cor. 16:1–4), but rela-
                        tionship issues between them and Paul had complicated things. After
                        dealing with these issues (2 Corinthians 1–7), Paul now turns to the
                        conclusion of that task (2 Corinthians 8–9).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                       Initially, Paul appeals to the example of the Macedonians (2 Cor. 8:1–7),
                        whose extreme poverty did not prevent them from overflowing “in a wealth
                        of generosity” (2 Cor. 8:2, ESV). Yes, poverty and generosity can walk
                        together. However, this admirable generosity of the Macedonians is but a
                        replication of Jesus’ generosity in giving Himself for us (2 Cor. 8:8–15).
                    </Text>
                    
                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            2 Corinthians 8:9. What does this passage tell us about the example of Jesus?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul’s statement in 2 Corinthians 8:9 is one of the most astonishing,
                        powerful, and profound passages in the whole Bible. Paul tells the story of
                        Jesus’ mission but with an incredible economy of words. There is so much
                        theology here. This is the story of redemption but in only one verse.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Even more impressive is that this story is told through financial
                        language. Yes, Jesus was rich. His richness refers to His pre-existence
                        in heaven (John 17:5). He decided to become poor by giving up the
                        heavenly glory and coming to this world of sorrows. He became liter-
                        ally poor (Luke 9:58). Although He was equal with God, He “emptied
                        Himself by taking the form of a bond-servant and being born in the
                        likeness of men” (Phil. 2:7, NASB). “And being found in human form,
                        he humbled himself by becoming obedient to the point of death, even
                        death on a cross” (Phil. 2:8, ESV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Jesus gave His own life so that we might live forever with Him. His
                        offering had a purpose: our salvation. Stewardship and mission go
                        together. Second Corinthians 8–9 tells the story of a particular money
                        offering, but this story is based upon Jesus. During this week, we will
                        see theological principles related to the practice of offering gifts that
                        are based on Christ’s offering of Himself.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Dwell on the birth, life, death, and resurrection of Jesus. When
                        you realize that all this was done for you so that you can have
                        hope of something beyond this miserable existence here, what
                        should your reaction be?
                    </Text>

                </View>
                
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>138</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Monday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>September 7</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Motivation
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            2 Corinthians 8:1, 5 and 2 Corinthians 9:7, 9, 13, 15. What is the 
                            central message of these passages?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                                        
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The language of giving pervades 2 Corinthians 8 and 9: “The grace
                        of God . . . has been given” (2 Cor. 8:1, ESV); “They gave themselves”
                        (2 Cor. 8:5, ESV); “Each of you should give what you have decided in
                        your heart . . . , for God loves a cheerful giver” (2 Cor. 9:7, NIV); “He has
                        given to the poor” (2 Cor. 9:9, ESV); “They will glorify God because of
                        . . . the generosity of your contribution” (2 Cor. 9:13, ESV); “Thanks be
                        to God for his inexpressible gift!” (2 Cor. 9:15, ESV). Second Corinthians
                        8 and 9 begin and end with the language of giving (2 Cor. 8:1 and 2 Cor.
                        9:15). We must read these two chapters with the idea of giving in mind.
                        They present at least four major reasons for giving our offerings.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Gratitude for God’s grace (2 Cor. 8:1; 2 Cor. 9:14, 15). Second
                        Corinthians 8–9 begins with a reference to “the grace of God” (2 Cor.
                        8:1). A little further, Paul says, “You know the grace of our Lord Jesus
                        Christ” (2 Cor. 8:9, ESV). The grace of God and Christ is presented
                        here as one’s primary reason for the practice of offering. God did so
                        much for us by giving us Christ. By offering our gifts in return, we
                        recognize the grace of God in our lives.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                       As with the concept of giving, the term “grace” (in Greek, charis) also
                        occurs repeatedly in 2 Corinthians 8–9. Likewise, the word charis occurs
                        at the beginning and the end of this passage (2 Cor. 8:1; 2 Cor. 9:14, 15).
                        Paul applies this term with different meanings in the passage to empha-
                        size that the grace of Christ in our lives results in grace for others and for
                        thanksgiving.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Desire to follow the example of Jesus (2 Cor. 8:9). Jesus was rich
                        and became poor (remember that these are symbols for His eternal pre-
                        existence and then coming into humanity, respectively). There is only
                        one way for that to have happened: He gave all. As for us, by sharing
                        our offerings, we provide means for others to know Christ.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Desire to share God’s blessings (2 Cor. 9:10, 11). We give to others
                        only because we first received from God. He enriches us so that we
                        can be generous.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Sincere love (2 Cor. 8:8, 24). Giving is the test of sincere and genuine
                        love. It is the most substantial evidence that love dwells in one’s heart. To
                        use an English expression, it is to “put your money where your mouth is.”
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        How generous are you? In light of the Cross, how much do you
                        give in contrast to what you could give?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>139</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Tuesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>September 8</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        False Teachers Identified
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The New Testament contains several warnings against false teachers
                        in Christian communities. Jesus Himself warned the disciples about
                        this same thing (Matt. 7:15–20). The apostles also called attention to it
                        (Gal. 1:6–9, 1 Tim. 6:3–5, 2 Pet. 2:1–3).
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight:"bold"}}>
                            2 Corinthians 11:1–15. How does Paul depict the challenges that
                            he is facing with these false teachers?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                   
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul unmasks the work of false teachers. At the same time, he indicates
                         that his ministry is Christ-centered. He compares the church in
                        Corinth to a bride and identifies himself as her father, with the responsibility
                         to present her to Christ (2 Cor. 11:2). He does so because he
                        loves the church (2 Cor. 11:11). So, he was even willing not to be a
                        financial burden to it, even though he had the right to be supported by
                        it (2 Cor. 11:7–12).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        On the other hand, the “most eminent apostles” (ironically, this likely
                        refers to the false teachers) are compared to the serpent that deceived
                        Eve (2 Cor. 11:3). Like Satan in the Garden of Eden, the false teachers
                        in Corinth are characterized by deceit and corruption (2 Cor. 11:3, 4,
                        NKJV). Paul’s main concern was that they could lead the Corinthians
                        astray from their sincere devotion and allegiance to Christ.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The intruders preached a different message than Paul preached—a
                        different Jesus and a different gospel (2 Cor. 11:4). This shows that
                        not everyone who preaches Jesus is a God-commissioned instrument.
                        In that regard, Jesus Himself said, “ ‘Not everyone who says to Me,
                        “Lord, Lord,” shall enter the kingdom of heaven, but he who does the
                        will of My Father in heaven’ ” (Matt. 7:21, NKJV). In Galatians 1:6–9,
                        Paul says that whoever preaches a different gospel brings a curse upon
                        himself, but some in Corinth tolerated this kind of error.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul exposes the false apostles by saying that they are “deceitful
                        workers, transforming themselves into apostles of Christ” (2 Cor.
                        11:13, NKJV). They disguise themselves as apostles of Christ, just
                        as “Satan disguises himself as an angel of light” and “his [Satan’s]
                        servants, also, disguise themselves as servants of righteousness”
                        (2 Cor. 11:14, 15, ESV). What a tragic situation: professing servants
                        of Christ working as agents of Satan. Paul concludes his thought
                        by saying that their “end will be according to their works” (2 Cor.
                        11:15, NKJV).
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Look at how strongly he is reacting to error in the church! What
                        should that say to us, as well?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>153</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Wednesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            September 16
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Sufferings for the Sake of the Gospel
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        After exposing the false teachers as agents of Satan (2 Cor. 11:1–15),
                        Paul now “plays” their game by boasting a little as a fool might (2 Cor.
                        11:16–21) so that the Corinthians could see how senseless it was to
                        give ears to the false teachers’ speech. If the Corinthians held them in
                        high regard, Paul deserved higher consideration. His sufferings for the
                        gospel show that he was a faithful servant of Christ (2 Cor. 11:22, 23).
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            2 Corinthians 11:22–28. What point is Paul making here?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                
                                           
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        While Paul’s Jewish credentials are identical to those of the false
                        teachers (2 Cor. 11:22), his service to Christ surpasses theirs (2 Cor.
                        11:23). “Are they ministers of Christ?” he asks. The answer is “I am
                        more.” His labors were more abundant; his imprisonments, more fre-
                        quent; his beatings, more severe.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        But this is not all. His list of sufferings also includes five instances
                        of thirty-nine strokes (2 Cor. 11:24), beatings with rods, stoning, ship-
                        wrecks, danger in deep waters (2 Cor. 11:25), danger at journeys, dan-
                        ger from rivers, danger from bandits, danger from countrymen, danger
                        from Gentiles, danger in crowded cities, danger in desolate country,
                        danger at sea, danger from false believers (2 Cor. 11:26), strenuous
                        labors, exhausting toils, sleepless nights, hunger, thirst, food shortage,
                        cold, and nakedness (2 Cor. 11:27). As if that weren’t enough, he still
                        had to deal with mental anguish because of his deep anxiety for the
                        churches (2 Cor. 11:28).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Only a true servant of Christ would be willing to suffer like this for
                        the gospel. If Paul were really to boast about his sufferings, he had
                        much to say. However, the next section of the letter shows that the reason
                        for his boast was based not on what he did for Christ but on what
                        Christ had done for him. Paul knew that God’s power is more visibly
                        displayed in human weakness (2 Cor. 12:9, 10). By giving him a thorn
                        in the flesh (2 Cor. 12:7), God protected Paul from boasting about
                        his accomplishments. This kept him humble, aware of his weakness,
                        dependent on divine power, and in the condition of receiving more of
                        God’s grace and mercy.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Have you also been suffering for the sake of the gospel? What
                        have you learned from this experience? How can the way Paul
                        dealt with his sufferings help you deal with yours?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>154</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Thursday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> September 17</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Appeal to the Unrepentant
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 2 Corinthians 12:14–13:10, Paul informs the church about his
                        third visit (2 Cor. 12:14, 2 Cor. 13:1). He had shown that he is not
                        ­inferior to any of the false apostles and is now confident to come to
                        Corinth once again and try to restore unrepentant members. In fact, this
                        was one of the primary purposes of this visit. All Paul did and spoke
                        was meant for the edification of the church (2 Cor. 12:19).
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            2 Corinthians 12:20, 21. What sins were jeopardizing the spiritual condition of the Corinthian church?
                        </Text>
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The list of sins in 2 Corinthians 12:20, 21 is similar to others found
                        elsewhere in Paul’s letters (Rom. 1:29–31, Gal. 5:19–21). The first two
                        items appear in 1 Corinthians 3:3, where Paul refers to jealousy and
                        strife among the members in Corinth. Paul fears that things would not
                        be too different by the time of his third visit. He says, “I fear that per-
                        haps when I come I may find you not as I wish.” Conversely, he says,
                        “You may find me not as you wish” (2 Cor. 12:20, ESV). This means
                        that rather than dealing with them “by the meekness and gentleness of
                        Christ” (2 Cor. 10:1, ESV), he would now be “ready to punish every
                        disobedience” (2 Cor. 10:6, ESV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        His main concern is that those members who had been involved
                        with “impurity, sexual immorality, and sensuality” may not have
                        repented (2 Cor. 12:21, ESV). And it is sins such as these that cause
                        divisions in the church.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Next, Paul focuses on the role of church discipline to restore those
                        in sin (2 Cor. 13:1–4). Weakness is not an excuse for a sinful way of
                        life. There is power available for those who want to live a victorious
                        life (2 Cor. 13:4). The fact that some in Corinth practiced sexual sin is
                        evidence that God’s power was not a reality in their lives. Paul wanted
                        them to repent and experience the power that leads to obedience.
                        Disciplining them was the last thing he wanted to do. He says, “We
                        pray to God that you may not do wrong . . . , but that you may do what
                        is right. . . . Your restoration is what we pray for” (2 Cor. 13:7–9, ESV).
                        What a beautiful prayer! He asks them to examine themselves to see
                        whether they are in the faith.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Read 2 Corinthians 13:5. What does it mean to be in the faith?
                        How can you know that you are in the faith?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>155</Text>
                </View>
                <View style={isDark? styles.bar : styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Friday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> SSeptember 18</Text>
                    </View>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Further Thought: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Read Ellen G. White, “The Laodicean Church,” p.
                            125, in The Advent Review and Sabbath Herald, September 30, 1873.
                        </Text>
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       “The Lord is guarding his people against a repetition of the errors
                        and mistakes of the past. There have always abounded false teachers
                        who, advocating erroneous doctrines and unholy practices, and work-
                        ing upon false principles in a most specious, covered, deceptive man-
                        ner, have endeavored to deceive, if possible, the very elect.”—Ellen
                        G. White, in The Advent Review and Sabbath Herald, January 7, 1904.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “The Lord designs that our opinions shall be put to the test, that
                        we may see the necessity of closely examining the living oracles to
                        see whether or not we are in the faith. Many who claim to believe the
                        truth have settled down at their ease, saying, ‘I am rich, and increased
                        with goods, and have need of nothing.’ ”—Ellen G. White, Counsels to
                        Writers and Editors, p. 36.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “Men entertain errors, when the truth is clearly marked out; and if
                        they would but bring their doctrines to the word of God, and not read
                        the word of God in the light of their doctrines, to prove their ideas right,
                        they would not walk in darkness and blindness, or cherish error. Many
                        give the words of Scripture a meaning that suits their own opinions, and
                        they mislead themselves and deceive others by their misinterpretations
                        of God’s word. As we take up the study of God’s word, we should do
                        so with humble hearts. All selfishness, all love of originality, should be
                        laid aside. Long-cherished opinions must not be regarded as i­nfallible.”
                        —Ellen G. White, Counsels to Writers and Editors, pp. 36, 37.
                    </Text>
                        
                    <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Discussion Questions: </Text>
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        1. Read 2 Corinthians 10:1–6 again. What is Paul’s strategy to
                        face spiritual “wars” for God’s truth, and how can we apply it to
                        our own spiritual wars?{"\n"}
                        2. The Bible says that before the end comes, many false teachers
                        would try to lure people away from the truth. What can your local
                        church do to prevent members from being persuaded by false
                        teachers who might even be in your same church? Why is this so
                        essential for the fulfillment of the church’s mission?{"\n"}
                        3. Why did Paul find it necessary to boast about a long list of sufferings
                        (2 Cor. 11:16–33)? Also, what does it mean “to boast in the
                        Lord”?{"\n"}
                        4. Why is it important for church members to examine themselves
                        in order to see whether they are in the faith (2 Cor. 13:5)?
                        What difference does it make?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>156</Text>
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

export default Week11;