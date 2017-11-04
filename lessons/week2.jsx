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
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Lesson 2</Text>
                        <Text style={[{paddingTop: 40}, font=="medium"?{fontSize: 17}:(font=="large"?{fontSize: 19}:{fontSize: 15})]}> *July 4–10</Text>
                    </View>

                    <Text style={[{fontStyle: "italic"}, font=="medium"?{fontSize: 30}:(font=="large"?{fontSize: 32}:{fontSize: 28})]}>The Message of the Cross</Text>

                    <View style={{overflow: "hidden", marginTop:10, maxHeight: 120, width: "100%"}}>
                        <Image source={images.lesson2} resizeMode="contain" style={{maxWidth: 370, maxHeight: 134, width: "100%"}}/>
                    </View>
                    
                    <View style={[{height: 4, marginTop: 5}, isDark?{backgroundColor: "#022a05"}:{backgroundColor: "red"}]}></View>
                    <Text style={{marginBottom: 10, color: "#022a05"}}>SABBATH AFTERNOON</Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>
                            Read for This Week’s Study: 
                        </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}>
                            1 Cor. 1:17–31, Col. 1:20,
                            1 Pet. 2:24, Acts 13:16–47, 1 Cor. 2:1–5.
                        </Text>
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Memory Text: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}> 
                            “For the message of the cross is foolishness to those
                            who are perishing, but to us who are being saved it is the power of
                            God” (1 Corinthians 1:18, NIV).
                        </Text>
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Cicero, a pagan Roman writer and orator, had told the Roman
                        people to not even think about the cross, so abhorrent was it as
                        a means of death. Although Cicero died about a half century
                        before Jesus was born, his statement illustrates the contempt with
                        which the Romans had held the cross. It was so bad that they should
                        not even think about it.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}In contrast, Paul would write: “The message of the cross . . . is the
                        power of God” (1 Cor. 1:18, NIV). For Paul, the Cross is the instrument
                        of reconciliation between God and man (Eph. 2:16, Col. 1:20), the
                        supreme symbol of Jesus’ humility (Phil. 2:8), and the place where our
                        immense debt was paid (Col. 2:14).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}The Cross is Paul’s answer to the problems in Corinth. You don’t have
                        to go very far in 1 Corinthians to realize that he is very concerned about
                        one major issue: divisions in the church. Paul is so perplexed that right
                        after the greetings (1 Cor. 1:1–3) and the thanksgiving section (1 Cor.
                        1:4–9), this is the first topic he addresses (1 Cor. 1:10–17). This week,
                        we will turn to the powerful message of the Cross as the answer to this
                        problem and to other issues in Corinth.
                    </Text>

                    <Text style={{fontStyle: "italic", fontSize: 18}}>
                        * Study this week’s lesson to prepare for Sabbath, July 11. 
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
                             July 5
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>The Gospel of the Cross</Text>


                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul says that the message of the Cross is the power of God to us. It
                        is not surprising that “Jesus Christ and Him crucified” is the center of
                        his preaching (1 Cor. 2:2, NKJV).
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Corinthians 1:17–31. What important point is Paul making
                            here?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        In 1 Corinthians 1:18–31, Paul deals with a contrast between human
                        foolishness and divine wisdom. The Cross has the power to display
                        the worst of man and the best of God. This section of 1 Corinthians is
                        introduced by the statement in 1 Corinthians 1:17. Because the cross
                        of Christ is not supposed to be emptied of its power (1 Cor. 1:17), the
                        message of the Cross must occupy the central place of our preaching
                        (see also 1 Cor. 2:2).
                    </Text>
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul says that he was sent not to baptize, but to preach the gospel of
                        the Cross. This statement requires two important observations. First,
                        the Greek verb translated as “to send” is apostellō, which stems from
                        the same root as the word “apostle.” Thus, Paul’s fundamental apostolic
                        task was the proclamation of the gospel. Second, Paul’s words about
                        baptism did not mean that baptism was not important, or at least not
                        as important as preaching. He was, instead, rebuking those who made
                        a big deal out of who were the ones doing the baptizing as opposed to
                        the One, Jesus, into whom they have been baptized.
                    </Text>
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        By “wisdom of words” (1 Cor. 1:17), Paul is not implying that elo-
                        quent speeches are bad in themselves. The point is that human wisdom
                        should not obscure the message of the Cross. This phrase refers to
                        Greco-Roman rhetoric. In Athens, Paul used logic, science, and philos-
                        ophy, but this resulted in little fruit. So, “he decided to follow another
                        plan of labor in Corinth in his efforts to arrest the attention of the care-
                        less and the indifferent. He determined to avoid elaborate arguments
                        and discussions, and ‘not to know anything’ among the Corinthians
                        ‘save Jesus Christ, and Him crucified.’ ”—Ellen G. White, The Acts of
                        the Apostles, p. 244.
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
                        In what ways can elaborate discourses obscure the message of
                        the Cross? Why did the proclamation of Jesus Christ and Him
                        crucified produce more fruit in Corinth than logic, science, and
                        philosophy did in Athens? Might there, however, be times that
                        logic, philosophy, and science could be helpful in proclaiming the
                        gospel?
                 </Text>

                </View>
                
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>19</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Monday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 6</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Foolishness to Those Who Are Perishing
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            1 Corinthians 1:20, 21, 23, 25, and 27. How do these references to
                            foolishness help us understand what Paul meant when saying that
                            the message of the Cross is foolishness to those who are perishing?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The Greek word for “foolishness” in 1 Corinthians 1:18 is mōria.
                        This word occurs only five times in the New Testament, and all in
                        1 Corinthians (1 Cor. 1:18, 21, 23; 1 Cor. 2:14; 1 Cor. 3:19). Apart from
                        mōria, other words from the same family occur numerous times in the
                        New Testament. 
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The reference to foolishness in 1 Corinthians 1:18, 23 is not denigrat-
                        ing the Corinthians’ intellectual capacity but directing attention to their
                        unwillingness to consider the truth of the gospel. As a result, Paul also
                        had to confront immoral behavior and thought, lack of discernment,
                        and even rebellion against God.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Think about Paul’s situation in this city. He comes to a place that
                        prides itself on its own so-called knowledge and wisdom and cultural
                        sophistication. And, in this context, he talks about a Galilean Jew, Jesus
                        of Nazareth, who had been crucified by the Romans and then raised from
                        the dead—all in order to pay for not only their sins but for the sins of the
                        world. Can this guy be serious? Who was he kidding? This wasn’t some
                        deep new philosophical concept, either, that could be parsed and ana-
                        lyzed by philosophical tools; it seemed to be lunacy, nonsense, nothing
                        that any smart and educated Corinthian could take seriously.
                    </Text>
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        And, as foolish as Paul’s message sounded to the pagans, for many
                        of the Jews, the message of the Cross sounded worse. What Jew was
                        expecting a Messiah to be executed by Rome? The Messiah was sup-
                        posed to overthrow the Romans, not be crucified by them.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Thus, from the start, Paul had a lot going against him in Corinth. And
                        yet, despite all this, souls—Jewish and Gentile—were won to the gospel.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The message here?
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Whatever opposition we face, God has people who are open to hear-
                        ing the truth. We must be ready to be used by Him to reach these people
                        wherever they are, even in places today that are as bad as, or even worse
                        than, Corinth was.
                    </Text>

                    
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>20</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Tuesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 7</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Power to Those Who Are Being Saved
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The message of 1 Corinthians 1:18 is too clear for one to miss the
                        point. What the Cross means depends on the way one looks at it. It is
                        foolishness for those in rebellion against God, but it is power for those
                        who long for His salvation. 
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}>
                            Colossians 1:20 and 1 Peter 2:24. What did Jesus accomplish for
                            us on the cross?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                   
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        As we have already seen, in preaching the gospel, one must avoid
                        “words of eloquent wisdom, lest the cross of Christ be emptied of its
                        power” (1 Cor. 1:17, ESV). In light of 1 Corinthians 1:17, it becomes
                        easier to understand why the opposite of foolishness is the power of
                        God and not human wisdom (1 Cor. 1:18). The Cross, which is so
                        contrary to human wisdom, reveals just how foolish human wisdom
                        really is. 
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The Greek text of 1 Corinthians 1:18 suggests that “those who are
                        perishing” (NKJV) are receiving the result of their actions. The text can
                        read like this: “For the message of the cross is foolishness to those who
                        are destroying themselves.” The Greek verb apollymi (“to perish”) can
                        also mean “to destroy” (John 10:10). In fact, apollymi is translated as
                        “destroy” in 1 Corinthians 1:19.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        What is happening here? Paul provides a biblical foundation for this
                        statement in verse 18, about these people perishing, by quoting in verse
                        19 God’s words in Isaiah 29:14. In verse 19, God is the one behind the
                        destruction, which seems to contradict the self-destroying pride men-
                        tioned right before. However, there is no contradiction. The idea is that
                        God will destroy that which already is destroying itself.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In contrast to those being destroyed, the phrase “to us who are being
                        saved” (1 Cor. 1:18, NKJV) indicates that salvation comes only from
                        God. Paul is saying that we are being saved; that is, we are not saving
                        ourselves. We, of course, can’t. Our salvation has an external source.
                        While destruction is self-caused, salvation can only be granted, a gift of
                        grace to sinners. As is clear in 1 Corinthians 1:21, it is God who saves
                        those who believe. Foolishness, in this sense, is the act of rejecting what
                        God has offered humanity through the cross of Christ (1 Cor. 1:30),
                        thus bringing destruction upon oneself.
                    </Text>
                                      
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        “For the wages of sin is death, but the gift of God is eternal life
                        in Christ Jesus our Lord” (Rom. 6:23, NKJV). In what ways does
                        this verse restate what Paul was saying in 1 Corinthians 1:18, 19?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>21</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Wednesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 8</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>A Messiah Crucified</Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul wrote that the “Jews demand signs and Greeks seek wisdom”
                        (1 Cor. 1:22, ESV). The Cross—the idea of God, the Messiah, being
                        crucified—was not a sign that the Jews had expected. Nor was it the
                        kind of wisdom that the Greeks wanted. It went against everyone’s
                        expectations.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In fact, all one has to do is read how the disciples reacted to the idea
                        of Jesus being crucified (see Mark 8:31, 32; Mark 9:30–32; and Mark
                        10:32–34) to begin to see how alien, and repulsive, the whole notion
                        was, especially to the Jews. As said before, the Jews expected the
                        Messiah to conquer the Romans; that is not what happened, at least not
                        in the worldly military sense of “conquer.” 
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        For centuries, the cross has been, for Christians, a symbol of faith. It
                        is hard for twenty-first-century Christians to understand how crazy the
                        idea of a crucified God was for the first-century mindset.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        However, it is precisely because this was such a shocking message that
                        makes it worthy of our most profound reflections. The portrait of a cruci-
                        fied Messiah makes it entirely clear to the whole universe how far God
                        was willing to go to complete the plan of redemption. The idea of the
                        cross itself, and of the Lord’s dying on the cross, is astonishing enough
                        to us, sinners here on earth. (Imagine, though, what it must have meant to
                        the sinless beings who knew, and worshiped, the Lord Jesus in heaven!)
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Corinthians 1:11–13; 1 Corinthians 4:14; 1 Corinthians
                            5:11; 1 Corinthians 7:1; and 1 Corinthians 14:37, 40. Also read
                            2 Corinthians 1:12, 2 Corinthians 2:9, 2 Corinthians 11:3, and
                            2 Corinthians 13:10. How do these passages help us understand why
                            Paul wrote letters to the Corinthians?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Paul says Christ sent him to preach the gospel. And so Paul preaches
                        the message of a crucified Messiah (1 Cor. 1:23). He resumes these
                        ideas in 1 Corinthians 2:1–5. The apostle was faithful to Christ’s com-
                        mission. In proclaiming the gospel, he didn’t employ “lofty speech or
                        wisdom” (1 Cor. 2:1, ESV); instead, he focused only on “Jesus Christ
                        and him crucified” (1 Cor. 2:2, ESV). His speech and message “were
                        not in plausible words of wisdom, but in demonstration of the Spirit
                        and of power” (1 Cor. 2:4, ESV) because, in fact, “the wisdom of men”
                        stands in visible contrast with “the power of God” (2 Cor. 2:5, ESV).
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        A crucified Messiah was something completely unexpected by
                        the Jews and the Greeks. What does this tell us about the fact
                        that God does not always act the way we expect? Why is this an
                        important concept to grasp, especially when things don’t go as
                        we have expected?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>22</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Thursday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 9</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Christ, the Power and Wisdom of God
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 1 Corinthians 1:19, 20, 30, and 31, Paul talks about how God’s
                        wisdom and human wisdom are incredibly different and, thus, mutu-
                        ally exclusive. Notice that Paul does not reject wisdom as such, but
                        he rejects the kind of human wisdom that tries to compete with God.
                        Human wisdom is incapable of freeing men from sin. Only Christ, the
                        wisdom of God, can perform this work. See the table below.
                    </Text>

                    <View style={{overflow: "hidden", marginTop:0, maxHeight: 120, width: "100%"}}>
                        <Image source={images.table} resizeMode="contain" style={{maxWidth: 370, maxHeight: 134, width: "100%"}}/>
                    </View>
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Both 1 Corinthians 1:18 and 1 Corinthians 1:24 show that Christ is
                        the power of God, in the sense that He has the power to save people
                        from their sins. Indeed, “it pleased God through the foolishness of the
                        message preached to save those who believe” (1 Cor. 1:21, NKJV). The
                        phrases “us who are being saved” (1 Cor. 1:18, NKJV), “those who
                        believe” (1 Cor. 1:21, NKJV), and “those who are called” (1 Cor. 1:24,
                        NKJV) refer to the same group, namely, people living the experience of
                        salvation through faith. “The gospel of Christ . . . is the power of God
                        to salvation for everyone who believes” (Rom. 1:16, NKJV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Christ is not only the power but also the wisdom of God. This means
                        that through Him God faced and solved the problem of sin, a problem
                        that human wisdom was powerless to solve. The wisdom of this world
                        is unable to make people know God (1 Cor. 1:21). Conversely, through
                        Christ we become wise for salvation (2 Tim. 3:15).
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Corinthians 1:24–29. Notice the words there, such as “foolish-
                            ness,” “weak,” “power,” and “wise.” What point is he making?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In reading 1 Corinthians 1:24–29, one should also notice the terms
                        foolish (or foolishness) and weak (or weakness). The point is that human
                        wisdom may consider the message of the Cross to be foolishness and
                        weakness. However, “the foolishness of God is wiser than men, and the
                        weakness of God is stronger than men” (1 Cor. 1:25, ESV). This doesn’t
                        mean that God is weak or foolish; it’s merely an expression showing how
                        God’s power and wisdom far exceed anything human.
                    </Text>
                       
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Dwell on the words “that not many wise according to the flesh,
                        not many mighty, not many noble, are called” (1 Cor. 1:26, NKJV).
                        What message is there for us?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>23</Text>
                </View>
                <View style={isDark? styles.bar : styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Friday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 10</Text>
                    </View>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Further Thought: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Read Ellen G. White, “Calvary,” pp. 741–757, in
                            The Desire of Ages.
                        </Text>
                        
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “To the minds of multitudes living at the present time, the cross of
                        Calvary is surrounded by sacred memories. Hallowed associations are
                        connected with the scenes of the crucifixion. But in Paul’s day the cross
                        was regarded with feelings of repulsion and horror. To uphold as the
                        Saviour of mankind one who had met death on the cross, would natu-
                        rally call forth ridicule and opposition. 
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “Paul well knew how his message would be regarded by both the
                        Jews and the Greeks of Corinth. . . . Among his Jewish hearers there
                        were many who would be angered by the message he was about to pro-
                        claim. In the estimation of the Greeks his words would be absurd folly.
                        He would be looked upon as weak-minded for attempting to show how
                        the cross could have any connection with the elevation of the race or
                        the salvation of mankind.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “But to Paul the cross was the one object of supreme interest. Ever
                        since he had been arrested in his career of persecution against the fol-
                        lowers of the crucified Nazarene he had never ceased to glory in the
                        cross. At that time there had been given him a revelation of the infi-
                        nite love of God, as revealed in the death of Christ; and a marvelous
                        transformation had been wrought in his life, bringing all his plans and
                        purposes into harmony with heaven. . . . He knew by personal experi-
                        ence that when a sinner once beholds the love of the Father, as seen in
                        the sacrifice of His Son, and yields to the divine influence, a change
                        of heart takes place, and henceforth Christ is all and in all.”—Ellen
                        G. White, The Acts of the Apostles, pp. 245, 246.
                    </Text>
                
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        1. In the Garden of Gethsemane, Jesus said, “O My Father, if it is
                        possible, let this cup pass from Me” (Matt. 26:39, NKJV). What does
                        this prayer say about the immense price Jesus paid on the cross?{"\n"}

                        2. Paul says, “The foolishness of God is wiser than men” (1 Cor.
                        1:25, NKJV). In what ways is the wisdom of God so different from
                        human wisdom?{"\n"}

                        3. The message of a crucified Christ was a stumbling block for
                        the Jews and foolishness for the Greeks. What biblical themes that
                        we preach today can produce the same effect in modern audiences,
                        and why? {"\n"}
                        
                        4. Paul says that “the natural man does not receive the things of
                        the Spirit of God” (1 Cor. 2:14, NKJV). So, how can we speak about
                        Jesus to these people in a way that could touch their hearts? Or
                        maybe our actions alone will reach them.
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