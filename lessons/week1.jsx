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
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Lesson 1</Text>
                        <Text style={[{paddingTop: 40}, font=="medium"?{fontSize: 17}:(font=="large"?{fontSize: 19}:{fontSize: 15})]}> *June 27—July 3</Text>
                    </View>

                    <Text style={[{fontStyle: "italic"}, font=="medium"?{fontSize: 30}:(font=="large"?{fontSize: 32}:{fontSize: 28})]}>Paul’s Ministry in Corinth</Text>

                    <View style={{overflow: "hidden", marginTop:10, maxHeight: 120, width: "100%"}}>
                        <Image source={images.lesson1} resizeMode="contain" style={{maxWidth: 370, maxHeight: 134, width: "100%"}}/>
                    </View>
                    
                    <View style={[{height: 4, marginTop: 5}, isDark?{backgroundColor: "#022a05"}:{backgroundColor: "red"}]}></View>
                    <Text style={{marginBottom: 10, color: "#022a05"}}>SABBATH AFTERNOON</Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read for This Week’s Study: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}> 1 Cor. 1:1, Gal. 1:1, Acts
                            17:16–34, 1 Cor. 5:9–11, Acts 18:4–10, 2 Cor. 2:4.</Text>
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Memory Text: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}> 
                            “One night the Lord said to Paul in a vision, ‘Do
                            not be afraid, but speak and do not be silent; for I am with you,
                            and no one will lay a hand on you to harm you, for there are many
                            in this city who are my people’ ” (Acts 18:9, 10, NRSV).
                        </Text>
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}The great English missionary William Carey used to say that he
                        cobbled shoes to pay his expenses, but his real business was
                        winning souls.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}“Likewise, Paul worked as a tentmaker for a living (Acts 18:1–3), but
                        his real business was, of course, winning people to Christ.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}This week, we will get a glimpse of Paul’s ministry to the church in
                        the city of Corinth. The church, as we will see, was full of problems,
                        many that were not unlike what our churches face today, almost two
                        thousand years later. Indeed, anyone who has been in Christianity for
                        any length of time, or who has been involved in church work, could ask
                        the question: Have you ever found a Christian group that doesn’t have
                        any problems? The answer is, of course, obvious.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Paul faces challenges in Corinth but does so with the message of
                        the Cross (1 Cor. 2:2). Faithfulness to this message is also the way to
                        face the challenges that we have today. As we will see this week and
                        throughout this quarter, the message of 1 and 2 Corinthians applies to
                        our lives, as well.
                    </Text>

                    <Text style={{fontStyle: "italic", fontSize: 18}}>* Study this week’s lesson to prepare for Sabbath, July 4. </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>5</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{ margin: 6,}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Sunday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> June 28</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>Paul, a God-called Apostle of Jesus</Text>


                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul begins his letter to the Corinthians by identifying himself as an
                        apostle of Jesus, called “through the will of God” (1 Cor. 1:1; compare
                        with 2 Cor. 1:1). His conviction regarding who he is in relation to Jesus
                        is so firm that, with a few exceptions, this is the way he opens all his
                        letters.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Corinthians 1:1 and Romans 1:1. What two elements of Paul’s
                            ministry are emphasized in these passages? (See also Gal. 1:1.)
                        </Text>
                        
                    </Text>

                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Paul speaks of his calling and apostleship as fulfilling God’s will.
                        He is convinced that his calling is not from men but from God (Gal.
                        1:1). Paul was called by God from his mother’s womb like Jeremiah
                        (Jer. 1:5) as an act of God’s grace (Gal. 1:15), and it happened so that
                        he would proclaim the gospel of Christ among the Gentiles. 
                    </Text>
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 1 Corinthians 15:8, Paul includes himself among those to
                        whom Christ appeared after the Resurrection (1 Cor. 15:5–7). A few
                        verses later, he implies that his calling to be an apostle resulted from
                        that encounter with Jesus (1 Cor. 15:9–11).
                    </Text>
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The title “apostle of Jesus” encompasses a series of concepts.
                        Primarily, it conveys the idea of one whom Jesus sends. Nevertheless,
                        Paul also uses this phrase to identify himself as a servant of Christ
                        (Rom. 1:1, Titus 1:1, Gal. 1:10), as well as a preacher and a teacher
                        (1 Tim. 2:7, 2 Tim. 1:11). Whether Paul preaches or teaches, Christ
                        is always in evidence. In short, Paul is an apostle of Jesus.
                    </Text>
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Jesus is not only the center of Paul’s apostleship; He is the center
                        of Paul’s life. Paul’s thoughts and feelings were filled with the pres-
                        ence of Jesus. Evidence of this fact is that he refers to Jesus repeat-
                        edly in the opening and in the thanksgiving section of 1 Corinthians
                        (nine times in nine verses). Paul loved Jesus so much that he
                        couldn’t stop thinking and talking about Him. He wanted to share
                        Jesus with those under his care so that their lives would be Christ-
                        centered, too. While he was called to be an apostle, they were called
                        to be faithful followers of Jesus in whatever capacity to which the
                        Lord called them.
                   </Text>
                                            
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Paul was called to be an apostle. What is your calling, and how
                        do you know that it is your calling? If you don’t think you have
                        one, why not go right now and ask Him to show you the work He
                        chose you to do?
                 </Text>

                </View>
                
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>6</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Monday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> June 29</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>From Athens to Corinth</Text>

                    <Text style={{margin: 10}}>
                        <Text style={[styles.tbold, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            Acts 17:16–34. Where was Paul before going to Corinth, and
                            what did he do there?
                        </Text>
                        
                    </Text>

                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Acts 17:16–34 describes Paul’s preaching to the Athenians before
                        his going to Corinth. Apparently, he did not plan to visit Athens at that
                        moment, but went there with the help of some friends because of the
                        opposition that he faced at Berea (Acts 17:13–15). 
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Those who went with Paul to Athens returned to Berea with a command for Timothy and Silas to join him as soon as possible (Acts
                        17:15). Acts 17:16–34 is about what Paul does while waiting for them.
                        He speaks about Jesus in the synagogue, the marketplace, and the
                        Areopagus. He really couldn’t stop talking about Jesus and took advantage of every opportunity to do it.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[styles.tbold, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Acts 18:1–11. What does Paul do when he arrives at Corinth and
                            during his whole stay in that city?
                        </Text>
                        
                    </Text>

                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                   
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Paul went to Corinth during his second missionary journey. Luke
                        informs us that Paul stayed there a year and a half. 
                    </Text>
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                            When finally Silas and Timothy joined him in Corinth, he “was occupied
                            with the word, testifying to the Jews that the Christ was Jesus” (Acts 18:5,
                            ESV). During his stay in Corinth, he was busy “teaching the word of God”
                            (Acts 18:11, NKJV). It was in this context, too, that he expressed those
                            famous words that he was “determined not to know anything among” the
                            Corinthians “except Jesus Christ and Him crucified” (1 Cor. 2:2, NKJV).
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        What can we learn from Paul’s missionary activity in Athens and
                        Corinth? What makes sharing the gospel so challenging in our
                        cities and communities today? How can we share the gospel with
                        success in these difficult places? What strategies can we learn
                        from Paul's missionary activity about how to best do that?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>7</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Tuesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> June 30</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>The City of Corinth</Text>

                    <Text style={{margin: 10}}>
                        <Text style={[styles.tbold, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}>
                            Acts 18:1–11. What does Paul do when he arrives at Corinth and
                            during his whole stay in that city?
                        </Text>
                        
                    </Text>

                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                   
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Corinth was an important center of the ancient world, renowned for
                        its prosperous commerce. The city was destroyed by Rome in 146 b.c.
                        and rebuilt by Julius Caesar as a Roman colony in 44 b.c. It is this
                        Roman Corinth that appears in the New Testament. In the time of Paul,
                        Corinth was one of Athens’ rivals and had even surpassed it in various
                        aspects. Corinth had two important harbors that made the exchange of
                        merchandise and the development of its commerce easy. 
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Indeed, Paul chose Corinth because of its importance and advantaged
                        geographic location. “An opportunity was thus presented for the spread
                        of the gospel. Once established at Corinth, it would be readily com-
                        municated to all parts of the world.”—Ellen G. White, Sketches From
                        the Life of Paul, p. 99. 
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In addition, the flourishing commerce of Corinth would make it
                        easier for Paul to support himself by producing and selling tents while
                        proclaiming the gospel in that city (Acts 18:2, 3). Obviously, missionary work in a large and wealthy city is not free of challenges. Corinth
                        was marked by a blatant religious pluralism (1 Cor. 8:5), as evident by
                        its numerous shrines built in homage to such deities as Apollo, Athena,
                        and Aphrodite, among others, and even the worship of such Egyptian
                        gods as Serapis and Isis.
                    </Text>
                                      
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        In his missionary activity in Corinth, Paul faced the challenge of
                        an idolatrous and licentious society. What challenges in today’s
                        culture can make it hard to preach the gospel? How can we
                        overcome them? How much difference, if any, is there between
                        Corinth and our cities today?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>137</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Wednesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 1</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>“Many in This City”</Text>

                    <Text style={{margin: 10}}>
                        <Text style={[styles.tbold, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Acts 18:4–8. What were the results of Paul’s preaching?
                        </Text>
                        
                    </Text>

                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                   
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The work of Paul among the Jews at Corinth was not as fruitful as
                        he wanted it to be. He had to face some hostility and hatred. The Bible
                        says that “they opposed him and blasphemed” (Acts 18:6, NKJV).
                        When the object of the Greek verb blasphēmeō (“to blaspheme”) is a
                        human being, it means “to revile” or “to defame.” In other words, they
                        intended to stain Paul’s reputation and to prevent him from succeeding
                        in his missionary endeavors.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Fortunately, the work of Paul in the Corinthian synagogue was not
                        in vain. After all, God was in charge of this mission. He promised,
                        “[My word] shall not return to me empty” (Isa. 55:11, ESV). Some
                        Jews did not expect that Crispus, the synagogue’s ruler, and his entire
                        household would accept Jesus as the Messiah and get baptized (Acts
                        18:8). In addition, “many of the Corinthians, hearing, believed and
                        were baptized” (Acts 18:8, NKJV), very likely also because of the
                        influence of Crispus. 
                    </Text>
                    <Text style={{margin: 10}}>
                        <Text style={[styles.tbold, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Acts 18:9, 10. What can we infer about Paul’s feelings in the face
                            of his challenges in Corinth? How did God encourage His servant?
                        </Text>
                        
                    </Text>

                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Right after Paul left the synagogue, he had an experience that
                        brought him encouragement. Christ Himself appeared to him by night
                        in a vision, with words that recall Isaiah 41:10: “Fear not, for I am with
                        you” (NKJV). Indeed, Paul admits he was in Corinth “in weakness,
                        in fear, and in much trembling” (1 Cor. 2:3, NKJV). He had to depart
                        from Berea to Athens because of staunch opposition. He seems to have
                        thought he would have to leave Corinth for the same reason: great
                        opposition. But that would not happen this time. Jesus said to him: “ ‘I
                        have many people in this city’ ” (Acts 18:10, NKJV). And Paul was His
                        instrument to take the news of salvation to them 
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Read Isaiah 41:10. What wonderful promises does God give you
                        in this verse? What hope do they give you right now in your life?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>9</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Thursday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 2</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>Paul’s Letters to the Corinthians</Text>


                    <Text style={{margin: 10}}>
                        <Text style={[styles.tbold, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Corinthians 1:11–13; 1 Corinthians 4:14; 1 Corinthians
                            5:11; 1 Corinthians 7:1; and 1 Corinthians 14:37, 40. Also read
                            2 Corinthians 1:12, 2 Corinthians 2:9, 2 Corinthians 11:3, and
                            2 Corinthians 13:10. How do these passages help us understand why
                            Paul wrote letters to the Corinthians?
                        </Text>
                        
                    </Text>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul was in Ephesus when he wrote 1 Corinthians (1 Cor. 16:5–9).
                        The family of Chloe went to him with the report that things were not
                        going too well back in Corinth (1 Cor. 1:11). In 1 Corinthians 1–6,
                        Paul addresses the issues brought by Chloe's household. The problems
                        include factionalism, sexual immorality, lawsuits, and prostitution.
                        Paul also received a letter with specific questions (1 Cor. 7:1). His
                        response fills the space from chapter 7 onward. The questions were
                        related to marriage, divorce, celibacy, food sacrificed to idols, conduct
                        in worship, the use of spiritual gifts, and incorrect understanding of the
                        resurrection. The church of Corinth was very problematic and immature.
                        Perhaps your local church has many problems. Yet the church at
                        Corinth was probably worse.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul’s first letter to the Corinthians is very relevant to our time, as
                        well. After all, don’t we, to some degree, face some of the same issues in
                        many of our churches today? This letter has much to say to us. It is “one
                        of the richest, most instructive, most powerful of all his letters.”—Ellen
                        G. White, The Acts of the Apostles, p. 301.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Paul may have written three or four letters to the Corinthians (compare
                         with 2 Cor. 10:9). He wrote an initial letter before 1 Corinthians
                        (1 Cor. 5:9), but it is lost. Before 2 Corinthians, he wrote a letter
                        referred to by scholars as the “severe letter” (2 Cor. 2:3, 4, 9; 2 Cor.
                        7:8), but it is lost, too. Some think he is referring to 1 Corinthians, or
                        that this letter is partly preserved in 2 Corinthians. 
                    </Text>
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        From 2 Corinthians, we realize that the members of Corinth were
                        influenced by the surrounding culture. They valued such things as
                        competition, power, and wealth, all things that can challenge our
                        church today, as well. Conversely, Paul sought to create a Christ-focused
                         culture, a way of seeing the world through the lens of the
                        gospel. How crucial that we, too, see our present world through the
                        lens of the gospel.
                    </Text>
                       
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Read 2 Corinthians 2:4 again. What does this verse tell you about
                        how much Paul cared for these people? In contrast, how much
                        love is in your heart for others?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>10</Text>
                </View>
                <View style={isDark? styles.bar : styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Friday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 3</Text>
                    </View>

                    <Text style={{margin: 10}}>
                        <Text style={[styles.tbold, isDark?{color: "#022a05"}:{color: "red"}]}>Further Thought: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Read Ellen G. White, “Corinth,” pp. 243–254, in
                            The Acts of the Apostles.
                        </Text>
                        
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “In preaching the gospel in Corinth, the apostle followed a course
                        different from that which had marked his labors at Athens. . . . He
                        determined to avoid elaborate arguments and discussions, and ‘not to
                        know anything’ among the Corinthians ‘save Jesus Christ, and Him
                        crucified.’ ”—Ellen G. White, The Acts of the Apostles, p. 244. 
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “Paul had a measure of success,” but he “doubted the wisdom of building up a church from the material he found there. He considered Corinth
                        a very questionable field of labor, and determined to leave it. . . .
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “As he was contemplating leaving the city for a more promising field,
                        . . . the Lord appeared to him in a vision of the night, and said, ‘Be not
                        afraid, but speak, . . . for I have much people in this city.’ Paul understood this to be a command to remain in Corinth, and a guarantee that
                        the Lord would give increase to the seed sown. . . . A large church was
                        enrolled under the banner of Jesus Christ.”—Ellen G. White, Sketches
                        From the Life of Paul, pp. 106, 107.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “It is recorded that Paul labored a year and six months in Corinth.
                        His efforts, however, were not exclusively confined to that city. . . . He
                        made Corinth his headquarters. . . . Several churches were thus raised
                        up. . . . The absence of Paul from the churches of his care was partially supplied by communications weighty and powerful, which were
                        received generally as the word of God. . . . These epistles were read in
                        the churches.”—Ellen G. White, Sketches From the Life of Paul, p. 109. 
                    </Text>
                
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        1. Paul was convinced that he was an apostle of Jesus and that this
                        calling was from God. Why is it so important to know who we are and
                        what our call is?{"\n"}
                        2. For a moment, Paul felt like giving up his missionary work in
                        Corinth and leaving the city. What caused him to change his mind?{"\n"}
                        How can this help us when we feel like giving up a missionary project? Might there be, though, a time we should?
                        3. The church members in Corinth were significantly influenced
                        by the surrounding culture. This is also a stark reality among us
                        today. How can we be in the world (John 17:11, 15) and not be
                        influenced by what “is in the world—the desires of the flesh and
                        the desires of the eyes and pride of life” (1 John 2:16, ESV)? What
                        are other ways that our church is being influenced negatively by
                        the surrounding culture?{"\n"}
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