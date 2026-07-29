import { Stack, useRouter } from "expo-router";
import { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { images } from "../constants/images";
import { FontContext } from "../contexts/font";
import { ThemeContext } from "../contexts/theme";


const Week9 = ()=>{
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
                            Lesson 9
                        </Text>
                        <Text style={[{paddingTop: 40}, font=="medium"?{fontSize: 17}:(font=="large"?{fontSize: 19}:{fontSize: 15})]}>
                            *August 22–28
                        </Text>
                    </View>

                    <Text style={[{fontStyle: "italic"}, font=="medium"?{fontSize: 30}:(font=="large"?{fontSize: 32}:{fontSize: 28})]}>
                        Love-driven Ministry
                    </Text> 

                    <View style={{overflow: "hidden", marginTop:10, maxHeight: 120, width: "100%"}}>
                        <Image source={images.lesson9} resizeMode="contain" style={{maxWidth: 370, maxHeight: 134, width: "100%"}}/>
                    </View>
                    
                    <View style={[{height: 4, marginTop: 5}, isDark?{backgroundColor: "#022a05"}:{backgroundColor: "red"}]}></View>
                    <Text style={{marginBottom: 10, color: "#022a05"}}>SABBATH AFTERNOON</Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>
                            Read for This Week’s Study: 
                        </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}>
                            2 Cor. 1:3–14, 2 Cor. 2:17,
                            2 Cor. 4:2, 1 Cor. 16:5–7, 2 Cor. 7:5–13, 2 Cor. 2:5–17.
                        </Text>
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Memory Text: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}> 
                            “For out of much affliction and anguish of heart
                            I wrote to you, with many tears, not that you should be grieved, but
                            that you might know the love which I have so abundantly for you”
                            (2 Corinthians 2:4, NKJV).
                        </Text>
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}The apostle Paul didn’t always have it so easy. Besides jail and
                        the life-threatening situations he faced, Paul also wrote: “From
                        the Jews five times I received forty stripes minus one. Three
                        times I was beaten with rods; once I was stoned; three times I was
                        shipwrecked; a night and a day I have been in the deep; in journeys
                        often, in perils of waters, in perils of robbers, in perils of my own
                        countrymen, in perils of the Gentiles, in perils in the city, in perils
                        in the wilderness, in perils in the sea, in perils among false brethren;
                        in weariness and toil, in sleeplessness often, in hunger and thirst, in
                        fastings often, in cold and nakedness—besides the other things, what
                        comes upon me daily: my deep concern for all the churches” (2 Cor.
                        11:24–28, NKJV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}What we see in his letters to the Corinthians is some of the “deep
                        concern” that Paul had for this church. Yet, amid it all, his love for
                        them never failed, just as Christ’s love for us never fails us. In fact,
                        it was from Jesus that Paul learned to love the churches in a way that
                        reflects the love that Jesus has for us (2 Cor. 5:14; see 1 Cor. 11:1).
                    </Text>

                    <Text style={{fontStyle: "italic", fontSize: 18}}>
                       * Study this week’s lesson to prepare for Sabbath, August 29.
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>111</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{ margin: 6,}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>
                            Sunday 
                        </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            August 23
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Thanksgiving
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            2 Corinthians 1:3–7. What is the reason for Paul’s attitude of thanksgiving here?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul’s thankfulness focuses on the comfort that God provides for
                        those who are suffering. In this passage, the verb parakaleō (to com-
                        fort) and the noun paraklēsis (comfort) occur together ten times. This
                        represents one third of all occurrences of these words in 2 Corinthians
                        (29 times). God is portrayed as the “Father of mercies and God of all
                        comfort, who comforts us in all our tribulation” (2 Cor. 1:3, 4, NKJV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        The comfort one receives from God is not to be kept for oneself
                        (2 Cor. 1:4, 5). Only the afflicted heart that became the recipient of
                        God’s consolation is able to impart comfort effectively to those in
                        affliction, too.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul could comfort others because he himself, in his sufferings,
                        received comfort from God. “If we are afflicted, it is for your consola-
                        tion and salvation. . . . Or if we are comforted, it is for your consolation
                        and salvation” (2 Cor. 1:6, NKJV; emphasis supplied). This is love!
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>What </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            is Paul expressing thanks for in 2 Corinthians 1:8–11?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul speaks of trouble “beyond measure, above strength” that made
                        him and his fellow workers fear that the end had come to them (2 Cor.
                        1:8). For a moment, they thought the resurrection was their only hope.
                        However, God delivered them, and the scenario changed (2 Cor. 1:10).
                        From the fear of death (2 Cor. 1:8), they rise to an implicit hope that God
                        would deliver them once again (2 Cor. 1:10). God’s victories in the past
                        give us confidence that He will do the same in the future. God uses afflic-
                        tions to teach us to trust in Him. Hardships can lead us to spiritual matu-
                        rity, at least to the extent that we allow them to draw us closer to God.
                        Paul’s thanksgiving also displays the power of intercessory prayer and
                        the gratitude we experience because of God’s deliverance (2 Cor. 1:11).
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        What have you found helpful in dealing with the suffering that,
                        one way or another, we all face?
                    </Text>

                </View>
                
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>112</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Monday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>August 24</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Simplicity and Sincerity
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Yesterday, we learned that Paul’s love for the Corinthians was
                        made manifest in that he comforted them in their hardships, just as
                        he received comfort from God in his (2 Cor. 1:1–11). Today, we will
                        see that his love for them was also displayed through the integrity that
                        he and his fellow workers manifested toward the church members in
                        Corinth.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            2 Corinthians 1:12–14 in the light of 2 Corinthians 2:17 and
                            2 Corinthians 4:2. How does Paul’s sincerity reveal his love for the
                            Corinthians?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Second Corinthians 1:12–14 introduces the thesis Paul will develop
                        in the rest of the letter. His integrity and apostleship have been ques-
                        tioned by some in Corinth. They thought Paul had a vacillating and
                        indecisive character, which was not fitting for the apostolic ministry.
                        In response, Paul stresses that he and his colleagues behaved with the
                        utmost integrity toward them.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Two words portray the conduct of Paul and his associates: simplic-
                        ity and sincerity (2 Cor. 1:12). The term “simplicity” comes from the
                        Greek word haplotēs. It is applied here to express personal integrity in
                        speech or behavior; in short, it reveals the purity of motives (Eph. 6:5,
                        Col. 3:22). In turn, the term “sincerity” (from the Greek eilikrineia)
                        also points to integrity and purity of motives.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        The Corinthians should not have doubted the clarity of Paul’s inten-
                        tions. He makes it clear that his simplicity and sincerity have their ori-
                        gin in God. This idea is well captured by the New English Translation
                        Bible, which mentions “pure motives and sincerity which are from
                        God” (2 Cor. 1:12, emphasis supplied). In the same verse, Paul further
                        asserts that these ministerial qualities are given to us “by the grace of
                        God.”
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                       It seems Paul’s opponents misinterpreted his words, in previous writ-
                        ten communications (2 Cor. 1:13, 14). Paul guarantees that his inten-
                        tions were clear and understandable. He was sure that the uprightness
                        of his words, intentions, and actions would be made clear “in the day
                        of the Lord Jesus” (2 Cor. 1:14, NKJV).
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        What has been your own experience with having your motives
                        or intentions, however well-meaning and sincere, questioned or
                        challenged? What should that tell you about how careful you
                        should be when questioning someone else’s motives?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>113</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Tuesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> August 25</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Changing Plans for Love
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        We saw that some in Corinth doubted Paul’s intentions and love.
                        Today, we will look into one particular reason: his changing travel plans
                        (2 Cor. 1:15–2:4).
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight:"bold"}}>
                            1 Corinthians 16:5–7. What was Paul’s original travel plan?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                   

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul had been in Corinth before. According to 1 Corinthians 16:5,
                        6, he planned to pass through Macedonia on his way back to Corinth
                        and, perhaps, stay in Corinth for the winter. From Corinth, he would
                        go to Judea with the offering collected for the poor in Jerusalem not
                        only in Macedonia, but also in Achaia, Galatia, and Asia. However,
                        he changed his plans because of a bad report brought by Timothy
                        from Corinth (1 Cor. 4:17, 1 Cor. 16:10, 2 Cor. 1:1)
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul intended to go straight from Ephesus to Corinth and there
                        address the issues reported by Timothy. The new itinerary would be
                        Ephesus—Corinth—Macedonia—Corinth—Judea (2 Cor. 1:15, 16).
                        He went from Ephesus to Corinth, but then he returned to Ephesus.
                        His plans changed. He didn’t go back to Corinth as planned, at
                        least not immediately, because his latest visit did not go well. So,
                        he returned to Ephesus and wrote to them instead. He would rather
                        send a letter than risk worsening things with another visit (2 Cor.
                        2:1, 3).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul’s intentions on the last visit were misinterpreted. Some in
                        Corinth said that he was unreliable and that he did not love them
                        enough (2 Cor. 1:17). In his response to the accusations, he moved
                        the Corinthians’ eyes to the gospel of Christ. He was faithful to his
                        intentions to visit the Corinthians at the best opportunity, just as
                        God had been faithful in fulfilling His promises to them through
                        Christ (2 Cor. 1:18–22).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       “For all the promises of God in Him are Yes, and in Him Amen, to
                        the glory of God through us” (2 Cor. 1:20, NKJV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       Thus, his response was not a confusing mixture of “yes” or “no”
                        dependent on the circumstances, as they said, but was “always Yes,”
                        just as God’s work in Christ is “always Yes” (2 Cor. 1:19, ESV).
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Therefore, the reason Paul wrote a letter to the Corinthians
                        instead of visiting them was his sincere love for them, not the oppo-
                        site (2 Cor. 2:4). Another visit right after the painful visit would
                        bring them further pain, not the joy he intended to cause with his
                        presence (2 Cor. 1:24, 2 Cor. 2:3). How easily his good intentions
                        were misinterpreted.
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>114</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Wednesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            August 26
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Forgiveness and Reaffirmation of Love
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Rather than visiting the Corinthians a second time, Paul, after return-
                        ing to Ephesus, sent what became known as “the severe letter” (see
                        2 Cor. 2:3, 4; 2 Cor. 7:8, 12).
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            2 Corinthians 7:5–13. What was the result of what he wrote to
                            them, and what was Paul’s reaction because of that result?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Paul and Titus met later in Macedonia, where Paul heard from Titus
                        the excellent news that his strong words had caused positive results,
                        which brought much joy to the apostle’s heart. If before, some in
                        Corinth positioned themselves against Paul, now the church sided with
                        him. How important it is to support our leaders. As church members,
                        we can make their work much easier than it is..
                    </Text>

                        <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            2 Corinthians 2:5–11. What is the central idea here?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        This passage has to do with a case of church discipline. Scholars
                        debate whether the offender here is the incestuous man of 1 Corinthians
                        5:1–5 or someone else, a person who influenced others in the church
                        in their accusation that Paul had been inconsistent and inconsiderate of
                        them in his traveling decisions. The context seems to favor the second
                        option. In any case, the most important teaching of the passage regards
                        how the church should deal with a person in sin.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        This passage teaches that the purpose of church discipline is resto-
                        ration through forgiveness and through reaffirmation of love for the
                        sinner (2 Cor. 2:6–8, 10). The passage also hints that church discipline
                        may be painful, but it is necessary. That is, however well-intentioned
                        they may be, and wanting to be “grace”-oriented, some churches might
                        never confront or deal with blatant or even public sin. On the other
                        hand, others can be very rigid, unforgiving, and harsh. Sin needs to be
                        dealt with, but in love. Thus, Paul could exhort the church to re­affirm
                        its love for the offender (2 Cor. 2:8) because he himself loved the
                        church (2 Cor. 2:4)!
                    </Text>
                   
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        The church in Corinth could love the offender (2 Cor. 2:8)
                        because it was itself the object of God’s love through Paul’s love.
                        What does this teach us about love?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>115</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Thursday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> August 27</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Triumph in Christ
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            2 Corinthians 2:12, 13. Where did Paul go after writing “the
                            severe letter” to them? What did he do there?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
            
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul’s heart was uneasy while waiting for Titus (2 Cor. 7:5, 6).
                        Despite that uneasiness, he couldn’t stop talking about Jesus (2 Cor.
                        2:12). He loved Jesus so much. At that point, he didn’t yet know the
                        results of his letter. He was anxious to see Titus and hear about the
                        reaction of the Corinthians.
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The work of Paul at Troas was successful, but “he could not remain
                        there long. ‘The care of all the churches,’ and particularly of the church
                        at Corinth, rested heavily on his heart. He had hoped to meet Titus at
                        Troas and to learn from him how the words of counsel and reproof sent
                        to the Corinthian brethren had been received, but in this he was disap-
                        pointed. ‘I had no rest in my spirit,’ he wrote concerning this experi-
                        ence, ‘because I found not Titus my brother.’ He therefore left Troas and
                        crossed over to Macedonia, where, at Philippi he met Timothy.”—Ellen
                        G. White, The Acts of the Apostles, p. 323.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            2 Corinthians 2:14–17. What was Paul’s reaction upon meeting
                            Titus in Macedonia and hearing about the positive response of the
                            Corinthians?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
            
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In a burst of joy, Paul affirms that God “always leads us in triumph
                        in Christ” (2 Cor. 2:14, NKJV). What a marvelous statement! A heart
                        filled with the presence of Christ spreads “the fragrance of His knowl-
                        edge in every place” (2 Cor. 2:14, NKJV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul rejoices in Christ because the painful letter bore the fruit he
                        intended to harvest (2 Cor. 7:5–9). This is a great victory. Meanwhile,
                        in 2 Corinthians 2:17, Paul reaffirms his sincerity as an apostle of
                        Christ (2 Cor. 2:17, 2 Cor. 1:12). According to this passage, what dis-
                        tinguishes a faithful servant of Christ from a false minister is that while
                        the latter peddles the gospel for self-interest, the former preaches the
                        Word of God in wholehearted love for Christ.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        What motivates you in all that you do, especially when you do it
                        in the name of Jesus?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>116</Text>
                </View>
                <View style={isDark? styles.bar : styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Friday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> August 28</Text>
                    </View>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Further Thought: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Read Ellen G. White, “The Message Heeded,”
                            pp. 323–334, in The Acts of the Apostles.
                        </Text>
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       “Those who have borne the greatest sorrows are frequently the ones
                        who carry the greatest comfort to others, bringing sunshine wherever
                        they go. Such ones have been chastened and sweetened by their afflic-
                        tions; they did not lose confidence in God when trouble assailed them,
                        but clung closer to His protecting love. Such ones are living proof of the
                        tender care of God.”—Ellen G. White, God’s Amazing Grace, p. 122.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “A consecrated Christian life is ever shedding light and comfort and
                        peace. It is characterized by purity, tact, simplicity, and usefulness. It
                        is controlled by that unselfish love that sanctifies the influence. It is
                        full of Christ, and leaves a track of light wherever its possessor may
                        go.”—God’s Amazing Grace, p. 122.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “The apostle Paul found it necessary to reprove wrong in the church,
                        but he did not lose his self-control in reproving error. He anxiously
                        explains the reason of his action. How carefully he wrought so as to leave
                        the impression that he was a friend of the erring! He made them under-
                        stand that it cost him pain to give them pain. He left the impression upon
                        their minds that his interest was identified with theirs.”—Ellen G. White
                        Comments, The SDA Bible Commentary, vol. 6, p. 1094.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        1. In 2 Corinthians 2:1–14, Paul affirms his integrity in ministry.
                        Why is this ministerial quality so crucial?{"\n"}
                        2. What does the fact that Paul changed his traveling plan tell us
                        about the necessity of flexibility in Christian ministry? Why is it
                        important to be open to change when needed?{"\n"}
                        3. Paul faced anguish and anxiety in his ministry. This clearly
                        shows that church leaders are human beings who are as exposed
                        to distress as any other people. What can church members do in
                        order to ease their work?{"\n"}
                        4. Paul refers to his restlessness (2 Cor. 2:13) right before men-
                        tioning his triumph in Christ (2 Cor. 2:14). How could he talk
                        about his weakness and strength at the same time? How can we?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>11</Text>
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
export default Week9;