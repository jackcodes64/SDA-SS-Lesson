import { Stack, useRouter } from "expo-router";
import { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { images } from "../constants/images";
import { FontContext } from "../contexts/font";
import { ThemeContext } from "../contexts/theme";


const Week12 = ()=>{
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
                            Lesson 12
                        </Text>
                        <Text style={[{paddingTop: 40}, font=="medium"?{fontSize: 17}:(font=="large"?{fontSize: 19}:{fontSize: 15})]}>
                            *September 12–18
                        </Text>
                    </View>

                    <Text style={[{fontStyle: "italic"}, font=="medium"?{fontSize: 30}:(font=="large"?{fontSize: 32}:{fontSize: 28})]}>
                        Dealing With False Teachers
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
                            2 Cor. 10:1–17; Jer. 9:24; 2 Cor.
                            11:1–15, 22–28; 2 Cor. 12:20, 21; 2 Cor. 13:5.
                        </Text>
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Memory Text: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}> 
                            “For the weapons of our warfare are not of the flesh
                            but have divine power to destroy strongholds” (2 Corinthians 10:4,
                            ESV).
                        </Text>
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}As if Paul didn’t have enough problems already, another one
                        arose that he had to deal with as well: false teachers in the
                        church. These people were opposed to him and to his work
                        and ministry. Worse, these false teachers had seduced members of
                        Corinth as well. Paul refers to his fight against this problem as a
                        spiritual war.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Would that be an exaggeration? Not at all. Paul knew that, ulti-
                        mately, those people were opposing not him but Christ Himself.
                        He was not the narcissistic type of leader concerned about main-
                        taining his reputation as a means of legitimizing his power and
                        authority over his subordinates. He knew that the message he was
                        commissioned to preach was a matter of life or death, with eternal
                        consequences. And he knew that he had been sent to do it by God
                        Himself: “Paul, called to be an apostle of Jesus Christ through the
                        will of God” (1 Cor. 1:1).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}When it comes to false teachings, the church is supposed to act
                        with love but firmness, based on the authority of Scripture. The
                        gospel message must be conserved, unspoiled and pure, in order to
                        give souls the hope of eternity.
                    </Text>

                    <Text style={{fontStyle: "italic", fontSize: 18}}>
                       * Study this week’s lesson to prepare for Sabbath, September 19.
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>150</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{ margin: 6,}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>
                            Sunday 
                        </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            September 13
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Spiritual War
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            2 Corinthians 10:1–11. Paul’s meekness in his dealings with the
                            Corinthians was sometimes confused with weakness. What words
                            or phrases in this passage reveal Paul’s courage in dealing with the
                            problem of false teachers in Corinth?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul begins 2 Corinthians 10 very personally: “Now I, Paul, make
                        a personal appeal to you” (2 Cor. 10:1, HCSB). This shows how con-
                        cerned Paul was about false teachings infiltrating the church. His words
                        in 2 Corinthians 10:1 ironically refer to his opponents’ accusation that
                        he was a frightening bully when writing letters from a distance but a
                        pitiful coward when dealing with people face-to-face (2 Cor. 10:10,
                        11). He responds that what seemed to be weakness should be seen as
                        powerful meekness and Christlike gentleness.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        False teachers must be faced with boldness and confidence (2 Cor.
                        10:2) but mingled with the gentleness of Christ (2 Cor. 10:1). Jesus once
                        said, “I am gentle and humble in heart” (Matt. 11:29, NIV). However,
                        Jesus also boldly confronted the money changers in the temple by over-
                        turning their tables and calling them robbers (Matt. 21:12, 13). He also
                        called the Pharisees hypocrites and whitewashed tombs right to their
                        faces (Matt. 23:23–27). Like Jesus, Paul also knows that we are in a
                        spiritual war that demands the use of God’s whole armor (Eph. 6:12–17).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul’s language in 2 Corinthians 10 is military because lives are at
                        stake (2 Cor. 10:3–6). This is not a mere human conflict but a divine
                        battle for winning people to Christ. In that connection, every false argu-
                        ment and lofty opinion must be faced and demolished, based on the
                        Word of God, so that every thought may be brought into captivity “to
                        make it obedient to Christ” (2 Cor. 10:5, NIV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In this spiritual warfare, Paul acts in the authority of Christ. This
                        authority, however, aims at edification, not destruction (2 Cor. 10:8). It
                        is easy for spiritual leaders to affirm that they are acting in the author-
                        ity of God. Nevertheless, they must remember that their authority is
                        given by Christ, and, like Him, they must be meek and humble in heart.
                        Paul’s claim of his Christ-given authority is due to his concern that the
                        Corinthians were listening to the wrong people, thereby risking their
                        loyalty to Christ.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        How can we be simultaneously gentle and bold when dealing with
                        false teachers? Why must we be both?
                    </Text>

                </View>
                
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>151</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Monday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>September 14</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Boasting in the Lord
                    </Text>
                                  
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Yesterday, we saw that Paul and his fellow workers exerted their
                        ministries as a spiritual warfare, and did so using God’s weapons.
                        Today, we will see that false teachers act according to human criteria.
                        They boast inappropriately. In turn, Paul boasts only in the Lord. As
                        he wrote: “But ‘he who glories, let him glory in the Lord’ ” (2 Cor.
                        10:17, NKJV).
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            2 Corinthians 10:13–17. How can an atmosphere of competitiveness
                             harm the preaching of the gospel?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                          

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul’s use of self-boasting language has intrigued interpreters
                        throughout the centuries. However, self-boasting was a common prac-
                        tice in the ancient world and was controlled by social conventions to
                        avoid offending the audience. Paul knew such conventions, and he
                        followed them. In addition, Paul makes it clear that his way of boast-
                        ing distinguishes itself from that of the false teachers. He boasts in the
                        Lord (2 Cor. 10:17). This is a quotation from the Old Testament: “ ‘Let
                        him who boasts boast in this, that he understands and knows me, that
                        I am the Lord who practices steadfast love, justice, and righteousness
                        in the earth’ ” (Jer. 9:24, ESV). By quoting this passage from Jeremiah,
                        Paul shows that it is Christ who is in focus—Christ’s love, justice, and
                        righteousness.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        In other words, Paul’s boasting focuses on God’s accomplishments
                        in Christ. Thus, his boasting is biblical and, hence, inoffensive. On the
                        other hand, his opponents got into an atmosphere of competitiveness
                        by comparing themselves to one another. This is foolishness (2 Cor.
                        10:12).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        In 2 Corinthians 10:14–16, Paul hints that preaching the gospel is the
                        primary focus of his ministry, both in Corinth and in regions beyond
                        Corinth. Paul’s love for Jesus led him to talk constantly about the good
                        news of salvation, found in the death and resurrection of Christ.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Unlike the false teachers in Corinth who commended themselves,
                        Paul had been commended and approved by God (2 Cor. 10:12, 18). He
                        was “called to be an apostle of Jesus Christ through the will of God”
                        (1 Cor. 1:1, NKJV). He was faithful to this calling until the end of his
                        life (2 Tim. 4:7).
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Reread 2 Corinthians 10:12–18. How can church leaders, or even
                        members, avoid an atmosphere of competition? Why is it so easy
                        to get caught up in things that really don’t matter?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>152</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Tuesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>September 15</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Planning
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight:"bold"}}>
                            2 Corinthians 9:7. What does this passage say about the act of
                            offering?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                   

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        God’s decision to save the world took place even before the world
                        fell into sin. Christ’s coming to die for us was part of an ancient plan
                        (Rev. 13:8). God was not caught by surprise. He had made plans to
                        give Himself through Jesus. In 2 Corinthians 8 and 9, planning is an
                        essential theological principle that concerns the act of giving. This can
                        be seen in at least two ways:
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        First, planning involves previous decision. Paul says that “each of
                        you should give what you have decided in your heart” (2 Cor. 9:7,
                        NIV). The Greek word translated as “decided” is the verb proaireō. This
                        verb is a compound form. The particle pro means “beforehand” or “in
                        advance,” and aireō means in this context “to decide.” Thus, proaireō
                        points to a decision made beforehand. Also, by starting his statement
                        with “each of you,” Paul indicates that the given amount will not be the
                        same for everyone. His point was simply that whatever people decide
                        to give, they should do it with careful reflection. They should give what
                        they believe is the right amount for them to give.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Second, planning involves the principle of proportionality. Paul
                        reports that the Macedonians “gave according to their means” (2 Cor.
                        8:3, ESV). Next, he applies this principle of proportionality to the
                        Corinthians, as well. Encouraging them to finish the task that they had
                        already committed to, he urges them to complete that project by using
                        the resources that they possess (2 Cor. 8:11). He concludes this thought
                        by saying that the offering is given “according to what a person has,
                        not according to what he does not have” (2 Cor. 8:12, ESV). Whereas
                        the Bible defines the proportionality of the tithes, namely, 10 percent,
                        the same does not apply to the offerings. “Each of you should give
                        what you have decided in your heart” (2 Cor. 9:7, NIV) by applying the
                        principle of proportionality. In other words, each one decides which
                        proportion of earnings that he or she will give as an offering. Each one
                        is supposed to give in proportion to what one has. This cannot be done
                        without planning.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        How faithful are you with tithes and offerings, no matter how
                        rich or poor you are? What excuses do you use to hold back from
                        giving when you know that you can do more?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>140</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Wednesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            September 9
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Attitude
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            2 Corinthians 8:1–5. What possible reason could have been
                            behind the Macedonians’ willingness to give their offerings with
                            such generosity?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        The positive attitude of the Macedonians can be seen in several ways.
                    </Text>
                                           
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        First, they gave with abundant joy (2 Cor. 8:2). Paul says that the
                        Macedonians’ “abundance of joy and their extreme poverty have over-
                        flowed in a wealth of generosity” (2 Cor. 8:2, ESV). He later mentions
                        that “God loves a cheerful giver” (2 Cor. 9:7, NKJV). The Greek word
                        rendered as “cheerful” occurs only here in the New Testament. A term
                        from the same family occurs elsewhere: “The one who does acts of
                        mercy [must do it] with cheerfulness” (Rom. 12:8, ESV). Terms from
                        this word family sometimes appear in extra-biblical literature, with a
                        sense of gladness and happiness. In 2 Corinthians 9:7, being a cheerful
                        giver means giving without reluctance.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Second, they gave with generosity (2 Cor. 8:2). Before Paul men-
                        tioned the Macedonians’ generosity, he first referred to their “extreme
                        poverty” (ESV). The word “generosity” (in Greek, haplotētos) appears
                        twice more in 2 Corinthians 8 and 9. Paul says, “You will be enriched in
                        every way so that you can be generous on every occasion” (2 Cor. 9:11,
                        NIV; emphasis supplied), meaning that we are given so that we can then
                        give. A little further, he mentions “the generosity of your contribution”
                        (2 Cor. 9:13, ESV; emphasis supplied). In this passage, being generous
                        in contributing is a way of confessing Christ’s gospel.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Third, they gave “of their own free will” (2 Cor. 8:3, NLT). This
                        means that they gave voluntarily. This becomes even more admi-
                        rable when one sees they did not give out of their surplus, for their
                        resources were extremely limited. Paul uses the same idea to charac-
                        terize Titus’s willingness to visit the Corinthians. He went to Corinth
                        voluntarily (2 Cor. 8:17).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Fourth, they gave with a sense that giving is a privilege (2 Cor.
                        8:4). This attitude is perceptible in the Macedonians’ request to partici-
                        pate in the collection. “They urgently pleaded with us for the privilege
                        of sharing in this service” (2 Cor. 8:4, NIV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Finally, they participated in the collection as an act of total conse-
                        cration (2 Cor. 8:5). Paul says, “They gave themselves first to the Lord
                        and then by the will of God to us” (2 Cor. 8:5, ESV). Giving oneself to
                        the Lord results in giving oneself to others. The Macedonians expanded
                        their mission involvement beyond financial assistance. That is, giving
                        and being generous is not limited to money alone.
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>141</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Thursday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> September 10</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Unity
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        We have seen that Paul encourages the members in Corinth to get
                        involved in a collection for the impoverished churches in Judea. One of
                        his purposes is to kindle a sense of unity. He wants them to participate,
                        to be part of the mission. He wants to show that the Gentile churches are
                        part of the same family of God as are the Jewish believers in Jerusalem.
                        That is, these people, who were once their opponents, are now, indeed,
                        fellow members with them in God’s new covenant remnant. Paul wants to
                        see the whole Christian family, Jew and Gentile, united in a powerful way
                        that can bear a witness to the church in generations to come.
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Titus and two other acclaimed brothers were in charge of the funds.
                        God put this care for the church into the heart of Titus (2 Cor. 8:16).
                        Through the churches, God also chose the two other brothers (2 Cor.
                        8:18–23). They are called “messengers of the churches, the glory of
                        Christ” (2 Cor. 8:23, NKJV). Whether “the glory of Christ” describes
                        these two faithful brothers or the churches themselves does not matter.
                        Giving offerings is ultimately a signal of loyalty to Christ, the Head of
                        the church (Eph. 4:15).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Second Corinthians 8–9 indicates that the offerings should be given
                        to people appointed by God through the church. The phrases “all the
                        churches” (2 Cor. 8:18, NKJV), “chosen by the churches” (2 Cor. 8:19,
                        NKJV), and “messengers of the churches” (2 Cor. 8:23, NKJV) suggest
                        precisely that. Thus, the following exhortation is not surprising, “Give
                        proof before the churches of your love” (2 Cor. 8:24, ESV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Bringing offerings to the church—God’s appointed instrument on
                        earth—promotes unity and, at the same time, is the result of a sense
                        of unity (2 Cor. 8:13, 14). Money can be a great unifier. On the other
                        hand, if people’s eyes are not single to the glory of God, money can
                        create division, as well.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>How  </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            does Romans 15:26, 27 reveal Paul’s desire for unity here?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Finally, Paul depicts the collection as service or ministry, as an act
                        of grace, as a blessing, as an act of worship, and also as fellowship. All
                        that from an offering? Think about it.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        How does our giving to fellow churches and missions overseas,
                        often in faraway places, help bring unity to our world church?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>142</Text>
                </View>
                <View style={isDark? styles.bar : styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Friday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> September 11</Text>
                    </View>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Further Thought: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Read Ellen G. White, “A Liberal Church,” pp.
                            335–345, in The Acts of the Apostles.
                        </Text>
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       “Those whose hearts are filled with the love of Christ, will follow the
                        example of Him who for our sake became poor, that through His poverty
                        we might be made rich. Money, time, influence—all the gifts they have
                        received from God’s hand, they will value only as a means of advancing
                        the work of the gospel. Thus it was in the early church; and when in the
                        church of today it is seen that by the power of the Spirit the members
                        have taken their affections from the things of the world, and that they are
                        willing to make sacrifices in order that their fellow men may hear the
                        gospel, the truths proclaimed will have a powerful influence upon the
                        hearers.”—Ellen G. White, The Acts of the Apostles, p. 71.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “The Lord does not need our offerings. We cannot enrich Him by
                        our gifts. Says the psalmist: ‘All things come of Thee, and of Thine
                        own have we given Thee.’ Yet God permits us to show our appreciation
                        of His mercies by self-sacrificing efforts to extend the same to oth-
                        ers. This is the only way in which it is possible for us to manifest our
                        gratitude and love to God. He has provided no other.”—Ellen G. White,
                        Counsels on Stewardship, pp. 18, 19.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “How great was the gift of God to man, and how like our God to
                        make it! With a liberality that can never be exceeded he gave, that he
                        might save the rebellious sons of men and bring them to see his purpose
                        and discern his love. Will you, by your gifts and offerings, show that
                        you think nothing too good for Him who ‘gave his only begotten Son
                        that whosoever believeth in him should not perish, but have everlasting
                        life’?”—Ellen G. White, in The Advent Review and Sabbath Herald,
                        May 15, 1900.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Once reconciled to God, people must seek holiness. Commenting on
                        2 Corinthians 7:1, Ellen G. White hints at what Paul meant by “perfecting
                        holiness in the fear of God” (2 Cor. 7:1, NKJV). She says Paul sought to
                        help the new converts “to become self-reliant, growing Christians, strong
                        in faith, ardent in zeal, and wholehearted in their consecration to God
                        and to the work of advancing His kingdom.”—The Acts of the Apostles,
                        p. 201.
                    </Text>
                        
                    <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Discussion Questions: </Text>
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        1. Dwell more on 2 Corinthians 8:9. Why is the example of Jesus so
                        crucial as far as stewardship is concerned?{"\n"}
                        2. John 3:16 hints that the language of heaven is one of giving.
                        Read John 15:13; Ephesians 5:2, 25; Galatians 2:19, 20; and
                        1 John 3:16. What do these passages and John 3:16 have in com-
                        mon, and what message can we take from them?{"\n"}
                        3. Based on your reading of 2 Corinthians 8–9, what are the per-
                        sonal benefits of giving?{"\n"}
                        4. In addition to giving systematic offerings, what other things
                        can you do to imitate Jesus’ self-giving example?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>143</Text>
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
export default Week12;