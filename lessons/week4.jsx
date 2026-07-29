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
                            Lesson 4
                        </Text>
                        <Text style={[{paddingTop: 40}, font=="medium"?{fontSize: 17}:(font=="large"?{fontSize: 19}:{fontSize: 15})]}>
                             *July 18–24
                        </Text>
                    </View>

                    <Text style={[{fontStyle: "italic"}, font=="medium"?{fontSize: 30}:(font=="large"?{fontSize: 32}:{fontSize: 28})]}>
                        Sin in the Church
                    </Text>

                    <View style={{overflow: "hidden", marginTop:10, maxHeight: 120, width: "100%"}}>
                        <Image source={images.lesson4} resizeMode="contain" style={{maxWidth: 370, maxHeight: 134, width: "100%"}}/>
                    </View>
                    
                    <View style={{borderBottomColor: "red", height: 4, marginTop: 5, backgroundColor: "red"}}><View style={[{height: 4, marginTop: 5}, isDark?{backgroundColor: "#022a05"}:{backgroundColor: "red"}]}></View></View>
                    <Text style={{marginBottom: 10, color: "#022a05"}}>SABBATH AFTERNOON</Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>
                            Read for This Week’s Study: 
                        </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}>
                            1 Cor. 5:1–13, 2 Cor. 2:5–10,
                            1 Cor. 6:1–13, 1 Thess. 4:1–8, 1 Cor. 6:19–7:9.
                        </Text>
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Memory Text: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}> 
                            “Do you not know that your bodies are temples of
                            the Holy Spirit, who is in you, whom you have received from God?
                            You are not your own; you were bought at a price. Therefore honor
                            God with your bodies” (1 Corinthians 6:19, 20, NIV).
                        </Text>
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Our brains are like sponges: whatever is brought to them, via
                        our senses, stays in them. We might not be conscious of most
                        of what comes in (we’d be unable to think clearly if we did
                        remember everything), but it’s all there, and, to some degree, impacts
                        what we think, feel, and do.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}That’s why it’s so easy for us, even as Christians, to be impacted by
                        all the bad things around us. The Christian church, from the start, has
                        struggled with this problem. Where, for instance, did Sunday keeping
                        come from? Did the church just pull it out of the air? Of course not. It
                        came from the culture around it.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}And we can see this principle unfolding here in Corinth. After
an appeal against factionalism (1 Corinthians 1–4), Paul now turns
to issues related to sexual immorality, lawsuits, prostitution, mar-
riage, and singleness (1 Corinthians 5–7). The standards of the world
affected them extensively. The factionalism portrayed in 1 Corinthians
1–4 opened the door for the moral behavior denounced in the ensuing
chapters. How does Paul seek to address this sin in the church, and what
lessons can we take from what he wrote?
                    </Text>

                    <Text style={{fontStyle: "italic", fontSize: 18}}>
                        * Study this week’s lesson to prepare for Sabbath, July 25. 
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>44</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{ margin: 6,}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>
                            Sunday 
                        </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                             July 19
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Dissonance Between Faith and Practice
                    </Text>


                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Throughout Christian history, theologians, pastors, and laypeople
                        have studied the New Testament in order to determine what the church
                        should look like. We marvel, for instance, at the church of Acts. But we
                        quickly lose sight of one significant element: people have problems. It
                        seems that we can also read the New Testament to see what the Bible
                        says about what a church should not look like. Paul’s letters to the
                        Corinthians are a good starting point.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={{fontWeight: "bold", fontSize: 20, color:"red"}}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Corinthians 5:1–13. What scandalous situation does Paul
                            describe in this passage, and why is it so disturbing?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        The expression “his father’s wife” (1 Cor. 5:1) suggests that Paul
                        refers to the incestuous relationship between a man and his stepmother.
                        This situation was probably reported “by those of Chloe’s household”
                        (1 Cor. 1:11, NKJV). Incest was reputed as such a terrible sin that it was
                        “not tolerated even among pagans” (1 Cor. 5:1, ESV). And yet, it is now
                        happening in an early Christian church? Paul’s words in 1 Corinthians
                        5:1, 2 show that he is in shock at the report that a church member was
                        doing this.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        However, this bad situation gets worse. Paul is more stunned
                        when realizing that, rather than feeling sorry about the situation, the
                        Corinthians were even proud of themselves for tolerating such a sin
                        (1 Cor. 5:1, 2, NIV). Thus, he intends to correct not only the immoral
                        man but also the church for its apparent dissonance between faith
                        and practice. In fact, Paul makes it clear constantly that the church’s
                        indulgent attitude toward the incestuous man demanded a correction.
                        But being proud of such a sexual scandal, and even boasting of it
                        (1 Cor. 5:2, 6)! This was too much for Paul to bear. What was wrong
                        with these people?
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        We don’t have an explanation for why the church in Corinth was so
                        tolerant of the incestuous man. Perhaps he was a wealthy member from
                        whom the church benefited? Or, maybe, because “all things are lawful”
                        (1 Cor. 6:12), they didn’t deem it the way that they should have. We
                        just don’t know.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Whatever the true reasons, they became blind to a flagrant violation
                        of the Scriptures (Lev. 18:7, 8). And they were even proud of it.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        What things are clearly condemned in Scripture that we, as a
                        church, are in danger of tolerating, all in the name of “love” and
                        “acceptance”?
                    </Text>

                </View>
                
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>45</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Monday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 20</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Dealing With Scandals
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Dealing with matters of sexuality is always hard. It was hard for
                        Paul, and it is for us, too. In these situations, we must be faithful to the
                        Scriptures and address the issue with prayer and love. We must never
                        forget that our goal is restoration. 
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            again 1 Corinthians 5:1–13. How does Paul tell them to deal with
                            this situation?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul makes it clear in 1 Corinthians 5 that sexual scandals require
                        church discipline. He says that the incestuous man should be
                        removed (1 Cor. 5:2), judged (1 Cor. 5:3), delivered to Satan (1 Cor.
                        5:5), and “ ‘put away’ ” (1 Cor. 5:13, NKJV). The church members
                        were told “not to associate with” him (1 Cor. 5:9, 11, ESV), nor
                        “even to eat with such a one” (1 Cor. 5:11, ESV). Paul employs
                        strong language that may sound offensive to modern ears, but his
                        words must be understood in their historical context. Also, one must
                        remember that he is dealing with a flagrant, sinful lifestyle. Usually,
                        in extreme situations, strong language is necessary. In any case, a
                        brief explanation of some expressions is helpful. 
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “Let him . . . be removed from among you” (1 Cor. 5:2, ESV;
                        also 1 Cor. 5:13). This refers to church discipline.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                       “Deliver this man to Satan” (1 Cor. 5:5, ESV). Because this man
                        did not choose to be under the protection of God by living in obedi-
                        ence to Him, he would be vulnerable to Satan. So, this expression can
                        merely mean something like “Let him reap the fruit of his decisions.”
                    </Text>
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “Not to associate” (1 Cor. 5:9, 11, NASB), “not even to eat
                        with such a one” (1 Cor. 5:11, RSV). Close association with sexu-
                        ally immoral people was considered dangerous because they might
                        influence others to imitate their conduct. In ancient times, sharing
                        a meal could mean sharing values, as well. We are all susceptible to
                        the influences that are around us, and we need to protect ourselves
                        the best we can, especially in dealing with something like this.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “That his spirit may be saved” (1 Cor. 5:5, NASB). Church
                        discipline is rehabilitative. It intends to bring sinners back to their
                        senses and cause them to abandon their sinful lifestyles. This is
                        possibly what Paul meant by “destruction of the flesh” (1 Cor. 5:5).
                        It is possible, too, that the incestuous man in 1 Corinthians 5 is the
                        repentant man referred to later (see 2 Cor. 2:5–10). Church disci-
                        pline reaches its purpose when the erring member is reintegrated
                        into church fellowship.
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>46</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Tuesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 21</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Protecting the Church’s Identity
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 1 Corinthians 6:1–11, Paul continues his discussion on how
                        Christians should approach issues involving people in the church.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight:"bold"}}>
                            1 Corinthians 5:3, 12, 13 and 1 Corinthians 6:1–13. What is Paul
                            trying to teach the Corinthians and us?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                   
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The Greek word pragma in 1 Corinthians 6:1, translated as “matter”
                        in the New King James Version, is a generic term meaning “thing.”
                        Here, it refers to a legal matter. It is important to remember that
                        1 Corinthians 6:1–11 does not refer to a criminal case. The authority
                        of civil courts for criminal matters is affirmed in Romans 13:1–5. Paul
                        addresses a case of litigation right after a case of sexual immorality,
                        just as Moses did in Deuteronomy 22:22–24. This demonstrates how
                        much Paul’s manner of dealing with problems in the church is based
                        upon the Scriptures.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The fact that the case in 1 Corinthians 6:1–11 is bracketed by pas-
                        sages that deal with sexual immorality (1 Corinthians 5, 1 Cor. 6:12–
                        20) may suggest that the “matter” in 1 Corinthians 6:1 regards sexual
                        immorality, too. We don’t know for sure what the case is, whether a
                        minor civil issue, such as a property dispute, or a sexual problem.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Whatever the pragma ultimately was, Paul was not happy to see
                        church members taking it to a civil court. Could not they, as Christian
                        brothers and sisters, have worked it out among themselves, rather than
                        bring the issue before “the unrighteous” (1 Cor. 6:1, NKJV)?
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Whatever the pragma ultimately was, Paul was not happy to see
                        church members taking it to a civil court. Could not they, as Christian
                        brothers and sisters, have worked it out among themselves, rather than
                        bring the issue before “the unrighteous” (1 Cor. 6:1, NKJV)?
                    </Text>
                                  
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Think about Paul’s catalog of vices in 1 Corinthians 5:10, 11 and
                        1 Corinthians 6:9, 10. Why does he list sexual sins along with
                        other sins such as idolatry, thievery, greed, and extortion?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>47</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Wednesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 22</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>Antidote Against Sexual Immorality</Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Thessalonians 4:1–8. What does this passage say about the
                            connection between sanctification and abstinence from sexual
                            immorality?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Though Paul was writing to someone else in the above texts, the
                        principle can be applied across the board, to all Christians which still,
                        though, leads to the question: What was going on in Corinth? Why all
                        these problems?
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                       Some in Corinth apparently believed that since the gospel set them free,
                        they were allowed to do anything. They argued that just as the stomach was
                        made for food, the body was made for sex, and sex for the body (1 Cor. 6:13).
                        Paul responds that this is a misrepresentation of Christian freedom. The lack
                        of integrity in sexual matters is inconsistent with Christian identity and is a
                        misuse of the freedom granted to man through the gospel (Rom. 8:2, Gal.
                        5:13). We were set free from sin, not set “free” to commit it (Rom. 8:2;
                        Rom. 6:18, 22). In fact, “the body is . . . for the Lord, and the Lord for the
                        body” (1 Cor. 6:13). We belong to Christ (1 Cor. 6:15), and who we are
                        must impact what we do. One thing is inextricably linked to the other. This
                        is portrayed in 1 Corinthians 6 in three different ways.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        First, we are identified as washed, sanctified, and justified “in the
                        name of the Lord Jesus and by the Spirit of our God” (1 Cor. 6:11,
                        NKJV). The sins listed in 1 Corinthians 6:9, 10, as well as the sexual
                        immorality denounced in 1 Corinthians 6:12–20, have no place in the
                        lives of those who were washed, sanctified, and justified.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Second, we are members of Christ (1 Cor. 6:15). This means that
                        we must be united with Christ (1 Cor. 6:17). Sexual immorality is a
                        violation of that union (1 Cor. 6:13, 15). Whoever joins with a person
                        in extramarital sexual intercourse becomes “one body” with him or her
                        (1 Cor. 6:16). Union with Christ through the Spirit must determine
                        Christian ethics in sexual matters.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Third, our bodies are “temples of the Holy Spirit” (1 Cor. 6:19, 20,
                        NIV). The only way to live a holy life with integrity in sexual matters is
                        by having an intimate relationship with Christ through the Holy Spirit.
                        Elsewhere, Paul refers to the experience of being a temple of the Spirit
                        in terms of presenting the body “as a living sacrifice, holy and accept-
                        able to God” (Rom. 12:1, ESV).
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Think about the wreckage that sexual sins have brought upon
                        humanity. What should this tell us about how serious this issue
                        should be for the Christian?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>48</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Thursday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 23</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Marriage and Singleness
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul’s affirmation that the body “is the temple of the Holy Spirit”
                        (1 Cor. 6:19, NKJV) occurs in the context of a warning against sexual
                        immorality. Being a temple of the Spirit is the only means to live a holy
                        life. The church is a Christian community that distinguishes itself from
                        the surrounding environment. It is the presence of the Holy Spirit that
                        makes it possible.
                    </Text>
                    
                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Corinthians 6:19–7:9. How does this passage shed light on how
                            one can put into practice the commandment to “flee from sexual
                            immorality” (1 Cor. 6:18, ESV)?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        There are significant lessons about sexuality in 1 Corinthians 7.
                        Roughly speaking, this chapter can be divided up into two sections: (1)
                        instructions regarding marriage (1 Cor. 7:1–24) and (2) instructions
                        regarding singleness (1 Cor. 7:25–40). First Corinthians 7 helps us
                        understand that speaking about sexuality is important and necessary.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        However, when reading 1 Corinthians 7, we must remember that
                        Paul is responding to specific questions related to issues in the church
                        of Corinth. Otherwise, some statements could lead to the impression
                        that he has a low view of marriage, which is not the case (1 Tim. 4:1–3,
                        1 Tim. 5:14; also Heb. 13:4).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Remarkably, the command “flee from sexual immorality” in
                        1 Corinthians 6:18 (ESV) is bracketed by the idea of joining Christ
                        (1 Cor. 6:17) and being a temple of the Spirit (1 Cor. 6:19). Is there a
                        better way of fleeing from sexual immorality? Of course not.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Also, God created sex, but it is to be enjoyed in marriage alone. Sex
                        is a privilege of those in a male and female marriage, the only kind
                        sanctioned in the Bible.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        When saying “flee from sexual immorality,” Paul may have in mind
                        the story of Joseph (Gen. 39:6–18). The Bible says that before the lustful
                        advances of Potiphar’s wife, Joseph “fled out of the house” (Gen. 39:18,
                        ESV). This is mentioned no fewer than four times in Genesis 39:6–18. The
                        Bible doesn’t say it directly, but it is implied that Joseph waited to have sex
                        only in marriage (Gen. 41:45). He was a man filled with the Holy Spirit
                        (Gen. 41:38) and wanted to do what was right before God’s eyes.
                    </Text>
                       
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        How can we, as a church, protect ourselves from the aberrant
                        views of sexuality that dominate the culture?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>49</Text>
                </View>
                <View style={isDark? styles.bar : styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>F riday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> July 24</Text>
                    </View>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Further Thought: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Read Ellen G. White, “A Message of
                            Warning and Entreaty,” pp. 298–308, in The Acts of the Apostles.
                        </Text>
                        
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       Interestingly, in the catalog of vices in 1 Corinthians 5:10, 11 and
                        1 Corinthians 6:9, 10, idolatry and drunkenness are listed along with
                        sexual immorality. As Paul recalls in 1 Corinthians 10:7 (compare with
                        Exod. 32:1–6), idolatrous festivals were usually marked with excessive
                        eating and drinking, which opened the door for sexual immorality (1 Cor.
                        10:8). Ellen G. White says:
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “It is impossible for any to enjoy the blessing of sanctification while
                        they are selfish and gluttonous. . . . The power of the human constitution
                        to resist the abuses put upon it is wonderful, but persistent wrong habits
                        in excessive eating and drinking will enfeeble every function of the body.
                        In the gratification of perverted appetite and passion even professed
                        Christians cripple nature in her work and lessen physical, mental, and
                        moral power.”—The Sanctified Life, pp. 25, 26.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       “When one is fully emptied of self, when every false god is cast out
                        of the soul, the vacuum is supplied by the inflowing of the Spirit of
                        Christ. Such a one has the faith which works by love and purifies the
                        soul from every moral and spiritual defilement.”—Ellen G. White, The
                        Home Missionary, November 1893.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       “God is seeking to exalt us to His high, pure, heavenly standard. For
                        this purpose His Spirit is constantly striving with us. . . . Our natural
                        tendencies, unless corrected by the Holy Spirit of God, have in them the
                        seeds of moral death.”—Ellen G. White, Manuscript 12, 1888.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        1. Many believers in Corinth manifested a desire to gain cultural
                        approval. Why is that so dangerous to Christian identity? What
                        can we do to prevent ourselves from making the same mistake?{"\n"}
                        2. Paul’s rhetorical question “Do you not know that your body is
                        the temple of the Holy Spirit?” (1 Cor. 6:19, NKJV) closes a series
                        of seven questions in 1 Corinthians 5–6 introduced by the formula
                        “Do you not know?” (1 Cor. 5:6; 1 Cor. 6:2, 3, 9, 15, 16, 19). All of
                        them demand an affirmative and emphatic answer—something
                        like “Of course you do.” How do these questions help us under-
                        stand Paul’s concerns about the church? Why should we, too, be
                        concerned about these issues today?{"\n"}
                        3. Marriage is from God (Gen. 1:27, 28; Gen. 2:18–24) and must
                        be honored (Heb. 13:4). In a time when many consider it old-
                        fashioned, how can we show the world that marriage is really a gift
                        from God, directly from Eden itself?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>55</Text>
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