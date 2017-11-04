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
                            Lesson 3
                        </Text>
                        <Text style={[{paddingTop: 40}, font=="medium"?{fontSize: 17}:(font=="large"?{fontSize: 19}:{fontSize: 15})]}>
                             *July 11–17
                        </Text>
                    </View>

                    <Text style={[{fontStyle: "italic"}, font=="medium"?{fontSize: 30}:(font=="large"?{fontSize: 32}:{fontSize: 28})]}>
                        Unity in Christ
                    </Text>

                    <View style={{overflow: "hidden", marginTop:10, maxHeight: 120, width: "100%"}}>
                        <Image source={images.lesson3} resizeMode="contain" style={{maxWidth: 370, maxHeight: 134, width: "100%"}}/>
                    </View>
                    
                    <View style={[{height: 4, marginTop: 5}, isDark?{backgroundColor: "#022a05"}:{backgroundColor: "red"}]}></View>
                    <Text style={{marginBottom: 10, color: "#022a05"}}>SABBATH AFTERNOON</Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>
                            Read for This Week’s Study: 
                        </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}>
                            1 Cor. 1:12–17, Rom. 1:29,
                            1 Cor. 1:10, 1 Cor. 3:1–4, Phil. 2:5–8, 2 Cor. 11:23–28, Col. 1:24.
                        </Text>
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Memory Text: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}> 
                            “I appeal to you, brothers, by the name of our Lord
                            Jesus Christ, that all of you agree, and that there be no divisions
                            among you, but that you be united in the same mind and the same
                            judgment” (1 Corinthians 1:10, ESV).
                        </Text>
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Those who observe wildlife know that some creatures live in
                        packs, in herds, or in groups, all of varying sizes. From wolves,
                        to dolphins, to even army ants, these creatures stick together.
                        Chimpanzees are especially known for their tight-knit social bonds,
                        sometimes existing in groups of 15 to 150 fellow chimps. However,
                        these relationships are not always harmonious, and sometimes the
                        chimps fight among themselves.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Humans are somewhat like that as well; that is, not only do they tend
                        to exist in groups, but they sometimes fight among themselves in those
                        groups. And that’s a reality even in our churches! Cliques form, often
                        around some kind of charismatic leader. And, even worse, sometimes
                        one clique does not get along with others.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Have you ever seen that in your church? If so, then you have an
                        idea of an issue Paul faced in Corinth. This week we will take a look
                        at 1 Corinthians 1–4, where the apostle Paul deals with the problem
                        of quarrels in the church and how to overcome them, namely, through
                        unity in Christ.
                    </Text>

                    <Text style={{fontStyle: "italic", fontSize: 18}}>
                        * Study this week’s lesson to prepare for Sabbath, July 18. 
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>18</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{ margin: 6,}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>
                            Sunday 
                        </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                             July 12
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>The Problem of Cliques in the Church</Text>


                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul’s appeal that “there be no divisions among you, but that you be united
                        in the same mind and the same judgment” (1 Cor. 1:10, ESV) dominates the
                        first four chapters of 1 Corinthians. In fact, most scholars agree that unity
                        is the all-encompassing theme that binds all the parts of the letter together.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Corinthians 1:12–17. How does this passage help us under-
                            stand how absurd it is to form cliques around local leaders? What
                            is Paul’s solution?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        The disagreements in the church of Corinth came to the surface—
                        even in the form of lawsuits against one another (1 Cor. 6:1–3). “I say
                        this to your shame,” Paul told them (1 Cor. 6:5, NKJV), concerning
                        these lawsuits between church members. In fact, they didn’t lay aside
                        their differences even when celebrating the Lord’s Supper (1 Cor.
                        11:17–22).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The problem of lack of unity among church members is so terrifying,
                        and Paul is so worried about it, that this is the first issue he addresses
                        in this letter to the Corinthians.
                    </Text>
                                      
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Read again 1 Corinthians 1:12–27. Then reflect on how this pas-
                        sage helps us understand why cliques are so dangerous to the
                        unity of the church. What can your local church do in order to
                        avoid this problem?
                    </Text>

                </View>
                
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>32</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Monday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 13</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Centered on Jesus
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            1 Corinthians 1:10. What do you think Paul meant by “be united
                            in the same mind and the same judgment” (ESV)?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The formation of cliques constituted here a denial of one’s allegiance
                        to Christ (1 Cor. 1:10). God called us “into the fellowship of his Son,
                        Jesus Christ our Lord” (1 Cor. 1:9, NKJV). Our Lord is Christ, and we
                        must be centered on Him. Thus, the answer to the rhetorical questions “Is
                        Christ divided? Was Paul crucified for you? Or were you baptized in the
                        name of Paul?” (1 Cor. 1:13, NKJV) is a resounding “No!” Christ is not
                        divided. It is Christ who was crucified for us. We were baptized “in the
                        name of the Father and the Son and the Holy Spirit” (Matt. 28:19, NASB). 
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The reference to foolishness in 1 Corinthians 1:18, 23 is not denigrat-
                        ing the Corinthians’ intellectual capacity but directing attention to their
                        unwillingness to consider the truth of the gospel. As a result, Paul also
                        had to confront immoral behavior and thought, lack of discernment,
                        and even rebellion against God.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                       Paul mentions that we are “the body of Christ and individually mem-
                        bers of it” (1 Cor. 12:27, ESV; emphasis supplied). While the body has
                        many parts—each one with its function—it is still one body. For the
                        body to function properly, each part has to do its work according to its
                        capabilities. This metaphor indicates that Paul is looking for unity, not
                        uniformity. He is looking for unity in the diversity. More than that, he
                        is looking for unity despite diversity.
                    </Text>
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        However, all thoughts and opinions must be submitted to Christ, our
                        Lord. The fact that Christ is our Lord is such an important concept for Paul
                        that he resorts to it repeatedly, in the opening of 1 Corinthians (1 Cor. 1:2,
                        7, 8, 9, 10). Thus, before Paul deals with the issue of cliques and human
                        leaders, he first emphasizes that all of us have Jesus as our Lord. The
                        church is not centered on human leaders. Christians are centered on Jesus.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The emphasis on the Lordship of Jesus in the early verses of
                        1 Corinthians helps us understand what Paul meant by the words: “Be
                        united in the same mind and the same judgment” (1 Cor. 1:10, ESV).
                        The Greek term translated as “united” comes from the verb katartizō,
                        which suggests that something is to be restored to its proper condition.
                        When cliques are formed around human leaders, relationships within
                        the church must be restored to their proper condition, and that can hap-
                        pen through unity in Christ and the death to self it entails.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        During the past few decades, some parts of the Seventh-day
                        Adventist Church have emphasized small group Bible studies.
                        What is the difference between cliques and small groups? How
                        can we be careful that small groups do not turn into cliques?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>33</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Tuesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 7</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Wisdom and Maturity
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        By and large, cliques result from too high a view of human leaders.
                        This is very threatening to the unity of the church and to the members’
                        spiritual health, for a distorted view of Christian ministry may lead a
                        church to give excessive importance to certain leaders, all to the detri-
                        ment of others. The consequence of such behavior is an atmosphere
                        of competition, which can split the church. More than that, if we treat
                        human leaders as central to our Christian identity, we risk moving
                        Christ from the correct position in our lives.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight:"bold"}}>
                            1 Corinthians 3:1–4. How does Paul here describe the spiritual
                            immaturity of the Corinthians?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                   
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul makes it clear that spiritual maturity leads the believer to appre-
                        ciate the wisdom of God (1 Cor. 2:6, 7), which is communicated to us
                        through the Spirit (1 Cor. 2:13), and which contrasts with the wisdom
                        of this age (1 Cor. 2:6), human wisdom (1 Cor. 2:13). The wisdom of
                        God is unveiled in the cross of Christ (1 Cor. 2:1–4). More precisely,
                        the wisdom of God is revealed in Christ’s suffering, death, and resur-
                        rection. Thus, before resuming his appeal for unity (1 Cor. 3:1–17),
                        Paul wants his readers to acknowledge the need for true wisdom and
                        maturity in Christ.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Wise and mature Christians are spiritual people, not carnal, not like
                        infants (1 Cor. 3:1). They compare spiritual things with spiritual things,
                        because “the things of the Spirit . . . are spiritually discerned” (1 Cor.
                        2:13, 14, NKJV). Wise and mature Christians feed on solid food, not
                        milk (1 Cor. 3:2; compare with Heb. 5:12). The believer “who lives on
                        milk is unskilled in the word of righteousness, since he is a child. But
                        solid food is for the mature, for those who have their powers of discern-
                        ment trained by constant practice to distinguish good from evil” (Heb.
                        5:13, 14, ESV). Wise and mature Christians do not say, “I am of Paul”
                        or “I am of Apollos” (1 Cor. 3:4), referring to different people.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        After all, these people are, like them, “God’s fellow workers” (1 Cor.
                        3:9, ESV). We, as a church, are God’s field, building, and temple
                        (1 Cor. 3:9, 16, 17). We all belong to God through Christ (1 Cor. 3:11).
                    </Text>
                                  
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        What has been your experience with being disappointed by
                        someone whom you had admired? If you have had this experi-
                        ence, what lessons did you learn from it?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>34</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Wednesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 15</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>Christlike Servanthood</Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Corinthians 4:1, 2. What does this passage teach about the cor-
                            rect view one must have about human leaders?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 1 Corinthians 3:1–4, Paul hints that cliques result from a lack of
                        spiritual maturity. However, before addressing this topic, he affirms, “We
                        have the mind of Christ” (1 Cor. 2:16, NKJV). This phrase likely refers
                        to Christ’s way of thinking and acting. In other words, the believer has
                        “the mind of Christ” when he thinks and acts like Christ. Putting this
                        mind into practice in all matters of life is not that easy, though, is it? In
                        the Greco-Roman world, there was much competition among political
                        figures, philosophers, thinkers, and religious leaders. The longing for
                        cultural approval apparently led the church of Corinth to follow secular
                        standards. This may be a danger for the church today, too.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Philippians 2:5–8. How does this text help us understand the
                            phrase “the mind of Christ” (1 Cor. 2:16)?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                       Just as in Corinth, divisions were also taking place in the church of
                        Philippi (Phil. 2:1–4), perhaps to a lesser degree. Philippians 2:1–8
                        teaches us that a Christlike servanthood requires dying to self and to
                        selfish ambitions, and seeking instead to bless others above ourselves,
                        as did Jesus.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                       A Christlike servanthood is what Paul meant by the phrase “servants
                        of Christ” (1 Cor. 4:1, NKJV). This phrase can convey the idea that
                        they serve Christ as assistants or subordinates. It is clear that a correct
                        view of human leaders is based on Christ’s example of leadership. The
                        servants are further portrayed as “stewards” (1 Cor. 4:1, 2). A steward
                        is a person who has been entrusted with administrating the property of
                        somebody else. And whatever we have, it all belongs to Christ anyway.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Prayerfully dwell on the message of Philippians 2:5–8. How do
                        we grasp what this tells us about God’s self-denying love for us?
                        Why, too, do we need to die to self in a way so that, in our own
                        sphere, we can emulate this love?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>35</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Thursday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 16</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        A Lifestyle That Reflects the Cross
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The fact that we should not form cliques, especially around human
                        leaders, does not mean we should not support our leaders. We are sup-
                        posed to appreciate and help those who lead out in church work. God
                        commissions people to do His ministry on earth. Church leaders who
                        display a lifestyle that reflects the submissions represented by the Cross
                        are worthy of being heard and followed.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        And this is so because only the Cross has the power to reverse any
                        manipulative form of control in favor of submission to God’s Word.
                        Christlike leaders attribute the success of their ministry to God alone.
                        In His earthly ministry, even Jesus as a human assigned glory to God
                        (John 17:4).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        According to Paul, faithful Christian ministry must be grounded
                        upon what we can call a theology of the Cross. The Cross is God’s
                        revelation of His wisdom and power to save. At the same time, it also
                        displays human wisdom as foolishness. In 1 Corinthians 4:1–13, Paul
                        makes it clear what such a theology of the Cross looks like. First, he
                        indicates that it is God who sets the standard for Christian leadership
                        (1 Cor. 4:1–5). Second, he points to the fact that suffering is the trade-
                        mark of true Christian ministry (1 Cor. 4:9, 11–13). This second point
                        deserves to be further developed.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            2 Corinthians 11:23–28 and Colossians 1:24. What does this
                            teach us about what it means to suffer for Christ’s sake?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Christian leaders follow the footprints of Jesus by being willing to suffer
                        for their fellow brothers and sisters, and even if need be die for the sake
                        of their ministry. Paul refers to himself and Apollos as “men condemned
                        to death” (1 Cor. 4:9, NKJV). They are portrayed as facing a lack of
                        food and water, as well as being “poorly clothed, and beaten, and home-
                        less” (1 Cor. 4:11, NKJV). In addition, they were also reviled, persecuted,
                        defamed, and “made as the filth of the world, the offscouring of all things
                        until now” (1 Cor. 4:12, 13, NKJV). Furthermore, by referring ironically to
                        the Corinthians as rich, kings, wise, and distinguished (1 Cor. 4:8, 10), Paul
                        demonstrates that pride must have no place in true Christian leadership, for
                        it is the root of division in the church (1 Cor. 4:6).
                    </Text>
                       
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        How much have you suffered for Christ’s sake, whatever your
                        role in the church? What lessons might be found in your answer?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>36</Text>
                </View>
                <View style={isDark? styles.bar : styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Friday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 17</Text>
                    </View>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Further Thought: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Read Ellen G. White, “The Training of the
                            Twelve,” pp. 17–24, in The Acts of the Apostles.
                        </Text>
                        
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “The oneness and unity of God’s truth-believing remnant people car-
                        ries powerful conviction to the world that they have the truth, and are
                        the peculiar, chosen people of God. This oneness and unity disconcerts
                        the enemy, and he is determined that it shall not exist. The present
                        truth, believed in the heart and exemplified in the life, makes God’s
                        people one, and gives them a powerful influence.”—Ellen G. White,
                        Testimonies for the Church, vol. 1, p. 327.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “God is leading out a people to stand in perfect unity upon the plat-
                        form of eternal truth. Christ gave Himself to the world that He might
                        ‘purify unto Himself a peculiar people, zealous of good works.’ This
                        refining process is designed to purge the church from all unrighteous-
                        ness and the spirit of discord and contention, that they may build up
                        instead of tear down, and concentrate their energies on the great work
                        before them. God designs that His people should all come into the
                        unity of the faith. The prayer of Christ just prior to His crucifixion was
                        that His disciples might be one, even as He was one with the Father,
                        that the world might believe that the Father had sent Him. This most
                        touching and wonderful prayer reaches down the ages, even to our day;
                        for His words were: ‘Neither pray I for these alone, but for them also
                        which shall believe on Me through their word.’ ”—Ellen G. White,
                        Testimonies for the Church, vol. 4, p. 17.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        1. Toward the end of His earthly ministry, Jesus prayed for unity,
                        “that they may all be one . . . so that the world may know that You
                        sent Me” (John 17:21–23, NASB). Why is unity in Christ a powerful
                        argument for the truth that God sent His Son to save the world?
                        Connected to this, why is lack of unity an obstacle to the church’s
                        mission?{"\n"}

                        2. Read 1 Corinthians 4:9–13 and pay close attention to how the
                        apostles are portrayed in this passage. How does this portrayal of
                        the apostles contrast with the leadership features valued in our
                        world? What does this passage teach us about how different God’s
                        standards and this world’s standards can be?{"\n"}

                        3. In 1 Corinthians 4:16, Paul urges the Corinthians to imitate
                        him. Would you be willing to imitate human leaders? How might
                        imitating a leader differ from exalting that leader unduly, even
                        dangerously?{"\n"}
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

export default Week1;