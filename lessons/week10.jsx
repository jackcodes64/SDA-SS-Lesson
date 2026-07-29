import { Stack, useRouter } from "expo-router";
import { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { images } from "../constants/images";
import { FontContext } from "../contexts/font";
import { ThemeContext } from "../contexts/theme";


const Week10 = ()=>{
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
                            Lesson 10
                        </Text>
                        <Text style={[{paddingTop: 40}, font=="medium"?{fontSize: 17}:(font=="large"?{fontSize: 19}:{fontSize: 15})]}>
                            *August 29–September 4
                        </Text>
                    </View>

                    <Text style={[{fontStyle: "italic"}, font=="medium"?{fontSize: 30}:(font=="large"?{fontSize: 32}:{fontSize: 28})]}>
                        Authentic Christian Ministry
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
                            2 Cor. 3:1–9, 2 Cor.
                            4:7–18, 2 Cor. 5:11–15, Col. 1:19–23, Eph. 2:13–16, 2 Cor. 6:11–7:1,
                            2 Corinthians 7.
                        </Text>
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Memory Text: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}> 
                            “We are afflicted in every way, but not crushed;
                            perplexed, but not driven to despair; persecuted, but not forsaken;
                            struck down, but not destroyed; always carrying in the body the
                            death of Jesus, so that the life of Jesus may also be manifested in
                            our bodies” (2 Corinthians 4:8–10, ESV).
                        </Text>
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Last week, we saw that Paul, by affirming his simplicity and
                        sincerity, defended himself from the accusations of inconstancy
                        and lack of love toward the Corinthians. He always worked for
                        the best interests of his spiritual children. He began a line of thought
                        in 2 Corinthians 2:12–17 that goes to 2 Corinthians 7. While doing so,
                        he reflects on what an authentic ministry for Christ looks like. We can
                        draw so many lessons from Paul’s thoughts in that regard.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}This week, we will look into 2 Corinthians 3–7, where Paul speaks
                        of his ministry of gaining souls for Christ. Ellen G. White says, “The
                        conversion of sinners and their sanctification through the truth is the
                        strongest proof a minister can have that God has called him to the min-
                        istry. The evidence of his apostleship is written upon the hearts of those
                        converted, and is witnessed to by their renewed lives. Christ is formed
                        within, the hope of glory. A minister is greatly strengthened by these
                        seals of his ministry.”—The Acts of the Apostles, p. 328.
                    </Text>

                    <Text style={{fontStyle: "italic", fontSize: 18}}>
                       * Study this week’s lesson to prepare for Sabbath, September 5.
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>124</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{ margin: 6,}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>
                            Sunday 
                        </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            August 30
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Fruits of an Authentic Ministry
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            2 Corinthians 3:1–9. In what sense can we be an epistle of Christ?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Letters of recommendation were common in the Greco-Roman
                        world. However, Paul did not bear such letters. The Spirit’s transforma-
                        tive power in the lives of the Corinthians was proof of his authentic
                        ministry. Yet, Paul was sure that it was not through his intelligence or
                        efforts that the church in Corinth came into being (2 Cor. 3:4–6). He
                        was not involved in self-promotion (2 Cor. 3:5, 1 Cor. 2:2).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Paul speaks about his ministry by briefly discussing the two cove­
                        nants: the old one represented by Moses and the new one represented
                        by Paul and his colleagues. A hasty reader may think that the old cove­
                        nant gave no hope of salvation, but this is untrue. Salvation was avail-
                        able in the old as in the new covenant. The old covenant was the gospel
                        in advance. “And the Scripture, foreseeing that God would justify the
                        Gentiles by faith, preached the gospel to Abraham beforehand, saying,
                        ‘In you all the nations shall be blessed’ ” (Gal. 3:8, NKJV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 2 Corinthians 3:1–4:6, we can see that the old covenant is used to
                        symbolize the legalistic experience of those who depended upon their
                        own works of obedience as the means of pleasing God. The new cove­nant,
                        however, represents the experience of those who rely completely on God’s
                        grace to do all that God has promised to do for them and in them.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul is talking about two different responses, by believers and unbeliev-
                        ers, to the gospel. He is not talking about different gospels, one in the Old
                        Testament and a different one in the New—for there is only one gospel,
                        offered by God, “who has saved us and called us with a holy calling, not
                        according to our works, but according to His own purpose and grace which
                        was given to us in Christ Jesus before time began” (2 Tim. 1:9, NKJV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “This is not to deny that 2 Corinthians 2:14–4:6 contains some
                        historical elements.”—Skip MacCarty, In Granite or Ingrained?: What
                        the Old and New Covenants Reveal about the Gospel, the Law, and
                        the Sabbath (Berrien Springs, MI: Andrews University Press, 2007),
                        p. 120. But Paul is using that history to make the point that some among
                        them “are being saved” and some “are perishing” (2 Cor. 2:15, NKJV).
                        Because of the reaction, that of unbelief and lack of faith toward
                        Moses’ ministry, his ministry can be viewed as a ministry of condemna-
                        tion and death. Because the church at Corinth believed, Paul’s ministry
                        among them proved to be a ministry of righteousness, a ministry of the
                        Spirit who gives life.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        This experience of salvation of the church in Corinth is the evidence
                        of Paul’s authentic ministry.
                    </Text>

                </View>
                
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>125</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Monday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>August 31</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Suffering and Glory
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            2 Corinthians 4:7–18. Make a list of Paul’s sufferings. How did
                            he endure his sufferings?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                                        
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        John Huss, the great reformer of the old Bohemia, once said about
                        Jesus, “He is Master of the world, and we are contemptible mortals—yet
                        He suffered! Why, then, should we not suffer also, particularly when suf-
                        fering is for us a purification?”—Ellen G. White, The Great Controversy,
                        p. 105.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The apostle Paul manifested centuries earlier the same willingness to
                        suffer for Christ. He knew that he was nothing more than a fragile pot
                        made of clay (2 Cor. 4:7). He constantly felt hard-pressed, perplexed,
                        persecuted, and struck down, and yet he was not crushed, in despair,
                        forsaken, or destroyed (2 Cor. 4:8, 9). He was willing to carry “in the
                        body the death of Jesus, so that the life of Jesus” would be manifested in him (2 Cor. 4:10, 11, ESV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        By “death of Jesus,” Paul probably meant the sufferings that he
                        mentioned in the previous verses. In turn, in an immediate sense, the
                        phrase “life of Jesus” likely refers to the deliverances from death or the
                        spiritual power for the present life. But, ultimately, this is a reference
                        to the resurrection (2 Cor. 4:12).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Interestingly, the phrase “death and life” occurs three times in
                        2 Corinthians 4:10–12. This is a reminder that, in the present age, life is
                        mingled with death. However, in the future glory, we will experience life
                        in the absence of death (Rev. 20:14, Rev. 21:4).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Most important, 2 Corinthians 4:7–18 shows that the gospel is
                        preached through fragile human beings so that the glory goes to God
                        alone (2 Cor. 4:15). Not infrequently, missionaries suffer in the course
                        of their missionary work. However, our affliction here is light and
                        momentary when compared to that eternal weight of glory waiting for
                        us (2 Cor. 4:17). The believer lives by faith, not by sight (2 Cor. 4:18,
                        2 Cor. 5:7).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        This hope in the future life captured the mind of Paul so much that
                        he keeps talking about it in the flow of the passage (2 Cor. 5:1–10).
                        He refers to his mortal body by the metaphor of an earthly house.
                        Conversely, the “building from God” is a metaphor for the resurrected
                        body (2 Cor. 5:1), the great hope for believers of all ages.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Why is it so important that, amid whatever we are going through
                        now, we always keep the hope of the resurrection, our resurrec-
                        tion (1 Cor. 15:52), before us?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>126</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Tuesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>September 1</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Christ-focused Ministry of Reconciliation
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight:"bold"}}>
                            2 Corinthians 5:11–15. How does this passage demonstrate that
                        Paul’s ministry is Christ-centered?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                   

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul knew he was supposed to render an account of his ministry to
                        Christ (2 Cor. 5:10). He knew “the fear of the Lord” and sought to per-
                        suade people about the gospel of Christ (2 Cor. 5:11, ESV). This fear is
                        reverence and awe toward Christ and, hence, it is combined with Paul’s
                        love for Christ and trust in Christ’s love for him. In the Old Testament,
                        to fear the Lord means to walk in His ways, to love Him, and to serve
                        Him with all your heart and soul (Deut. 10:12).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul’s ministry is not self-focused but Christ-focused. He did not
                        commend himself. The reason for his boasting is Christ (2 Cor. 12:9).
                        He said, “But far be it from me to boast except in the cross of our Lord
                        Jesus Christ” (Gal. 6:14, ESV). Thus, the Corinthians’ opportunity to
                        boast about him (2 Cor. 5:12) means to be proud of his Christ-focused
                        ministry in contrast to the self-focused ministry of his opponents.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight:"bold"}}>
                            2 Corinthians 5:16–21, Colossians 1:19–23, and Ephesians 2:13–
                            16. What did Paul mean by “ministry of reconciliation”?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                   

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Christ is the minister of reconciliation par excellence. As such, He
                        “has given us the ministry of reconciliation” (2 Cor. 5:18, NKJV). The
                        idea of reconciliation occurs over and over throughout 2 Corinthians
                        5:16–21. This is an essential concept for Paul, and so it must be for
                        us, too.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       God has reconciled humanity to Himself by means of the atoning
                        death of His Son. Those who were reconciled to God are a new creation
                        (2 Cor. 5:17). Now, they are supposed to pass this “message of rec-
                        onciliation” onward by proclaiming the gospel of Christ (2 Cor. 5:19,
                        ESV). In this sense, “we are ambassadors for Christ, as though God
                        were pleading through us” (2 Cor. 5:20, NKJV).
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Think about what Christ has done for you. Think about the guilt,
                        the sin, the condemnation that would be yours but for what He
                        did for you at the cross. How should this reality impact how you
                        relate to others, especially those who don’t know the Lord?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>127</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Wednesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            September 2
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Call to Holiness
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 2 Corinthians 6:3–10, Paul keeps encouraging the Corinthians to
                        be reconciled to God. He presents a long list of hardships and triumphs
                        to show what it means to be a follower of Christ and a minister of God.
                        In short, he lists difficult situations (2 Cor. 6:4, 5), virtues of character
                        (2 Cor. 6:6), equipment for ministry (2 Cor. 6:7), and vicissitudes of
                        ministry (2 Cor. 6:8–10). After instructing the members in Corinth to
                        be reconciled to God, Paul appeals for them to live a holy life, and to do
                        so by separating themselves from the harmful influence of unbelievers
                        and from unclean things (2 Cor. 6:14–17).
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            2 Corinthians 6:11–7:1. According to this passage, what does a
                            holy life look like?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Paul emphasizes in this passage the importance of affection and love
                        within the church (1 Cor. 6:11–13). The evidence that people have been
                        reconciled to God is that they seek reconciliation with one another.
                        Indeed, they become, as it were, agents of horizontal reconciliation.
                    </Text>
                                           
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Next, the call to holiness is given by means of six appeals, namely,
                        (1) “Do not be unequally yoked together with unbelievers” (2 Cor. 6:14,
                        NKJV); (2) “ ‘Come out from among them’ ” (2 Cor. 6:17, NKJV); (3)
                        “ ‘Be separate’ ” (2 Cor. 6:17, NKJV); (4) “ ‘Do not touch what is unclean’ ”
                        (2 Cor. 6:17, NKJV); (5) “Let us cleanse ourselves from every defilement
                        of body and spirit” (2 Cor. 7:1, ESV); (6) “Make holiness perfect in the fear
                        of God” (2 Cor. 7:1, RSV; emphasis supplied). These exhortations show
                        that a holy God requires a holy life and separation from idolatry.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        On the other hand, the passage also brings seven promises that highlight
                        the role of the Christian church as a holy temple: (1) “ ‘I will dwell in
                        them’ ”; (2) “ ‘[I will] walk among them’ ”; (3) “ ‘I will be their God’ ”;
                        (4) “ ‘They shall be My people’ ”; (5) “ ‘I will receive you’ ”; (6) “ ‘I will
                        be a Father to you’ ”; (7) “ ‘You shall be My sons and daughters’ ” (2 Cor.
                        6:16, 17, 18, NKJV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Notice that the four promises in 2 Corinthians 6:16 are the basis for
                        the three imperatives in 2 Corinthians 6:17 (see the word “therefore” at
                        the beginning of 2 Corinthians 6:17). This demonstrates that holiness
                        is not the result of one’s efforts but the work of the Holy Spirit in the
                        heart. Although holiness results from God, believers must do their part
                        and reject idolatry and every impure practice.
                    </Text>
                   
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        What do God’s promises in 2 Corinthians 6:16–18 tell us about
                        what holiness is?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>128</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Thursday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> September 3</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Comfort and Joy
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            2 Corinthians 7. What are Paul’s feelings upon hearing that the
                            Corinthians had repented?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
            
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        How much love flows from the words “You are in our hearts” (2 Cor.
                        7:3, NKJV; see also 2 Cor. 6:11). In his deep desire to have his love
                        reciprocated, Paul also says, “Make room in your hearts for us” (2 Cor.
                        7:2, ESV). While the phrase “in your hearts” is not in the Greek text,
                        most English versions supply it, which is correct because the context
                        supports it.
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Indeed, the Corinthians opened their hearts to Paul and his fellow
                        workers. This is why verse 4 is a burst of joy. Paul’s words express
                        how positive his feelings are at this moment: “Great is my boldness
                        of speech toward you, great is my boasting on your behalf. I am filled
                        with comfort. I am exceedingly joyful in all our tribulation” (2 Cor.
                        7:4, NKJV). Paul is filled with comfort and joy. How much comfort and
                        joy our churches can bring to the hearts of their ministers by faithfully
                        committing themselves to Christ.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 2 Corinthians 7:5–16, Paul further explains the reason for his
                        comfort and joy. These two concepts dominate the passage. The verb
                        parakaleō (“to comfort”) or the noun paraklēsis (“comfort”) occurs
                        together a total of seven times in 2 Corinthians 7. This section of the
                        letter ends the same way it began, namely, with much comfort in God
                        (2 Cor. 1:3–7). Paul’s comfort in 2 Corinthians 7 comes from the
                        relief he experienced because the severe letter produced the effect he
                        intended for it.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Although this relief is the result of Titus’s positive report, ultimately,
                        God is the agent of the comfort Paul experienced (2 Cor. 7:6). God is
                        indeed the “God of all comfort, who comforts us in all our tribulation”
                        (2 Cor. 1:3, 4, NKJV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Interestingly, while Paul is “filled with comfort,” he is “exceedingly
                        joyful” (2 Cor. 7:4, 7, 13). Although his painful letter had caused much
                        sadness, that was a sadness according to God’s will with repentance
                        intended (2 Cor. 7:9–11, NASB). The Corinthians “sorrowed in a godly
                        manner” (2 Cor. 7:11, NKJV), a sorrow producing “repentance leading
                        to salvation” (2 Cor. 7:10, NKJV). What else could bring more joy to
                        the heart of an authentic minister of God?
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Have you ever experienced godly sorrow in your life? How did
                        you know that it was sorrow according to God’s will to lead you
                        to repentance?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>129</Text>
                </View>
                <View style={isDark? styles.bar : styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Friday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> September 4</Text>
                    </View>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Further Thought: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Read Ellen G. White, “The Message
                            Heeded,” pp. 323–334, in The Acts of the Apostles.
                        </Text>
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       Last week, we read the above cited passage in The Acts of the Apostles.
                        It is worth rereading it. This time, dwell a little bit more on the parts
                        referring to Paul’s severe letter, his feelings upon writing it, and his
                        joy upon receiving the good news about the sincere repentance of the
                        addressees. Then, reflect on what this tells us about the authenticity of
                        Paul’s ministry and what lessons we can apply to our work for Christ.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “We are to reveal to the universe, to the world fallen and to worlds
                        unfallen, that there is forgiveness with God, that through the love of
                        God we may be reconciled to God. Man repents, becomes contrite
                        in heart, believes in Christ as his atoning sacrifice, and realizes that
                        God is reconciled to him.”—Ellen G. White, Special Testimonies On
                        Education, p. 223.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “As a church, we have received great light. This light the Lord has
                        entrusted to us for the benefit and blessing of the world. To us has been
                        given the ministry of reconciliation. With power from on high we are to
                        beseech men to be reconciled to God.”—White, Letter 32, 1903.
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
                        

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        1. Paul refers to us as “jars of clay” containing the gospel treasure
                        (2 Cor. 4:7, ESV). How can the fact that the human condition is
                        weak, frail, and filled with limitations enhance rather than under-
                        mine the proclamation of the gospel?{"\n"}
                        2. What does it mean to be a “new creation” (2 Cor. 5:17, NKJV)?
                        How does this affect our daily lives? How has Christ made you a
                        new creature?{"\n"}
                        3. In 2 Corinthians 6:4, 5, Paul provides a long list of hardships
                        for the gospel’s sake. How did he respond to his sufferings (see
                        2 Cor. 6:6, 7)? How does this help you respond to yours?{"\n"}
                        4. Paul contrasts godly sorrow with worldly sorrow (2 Cor. 7:10).
                        In what manner may sorrow relate to repentance? How would you
                        describe godly sorrow in contrast to worldly sorrow?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>130</Text>
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

export default Week10;