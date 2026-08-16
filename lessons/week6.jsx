import { Stack, useRouter } from "expo-router";
import { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { images } from "../constants/images";
import { FontContext } from "../contexts/font";
import { ThemeContext } from "../contexts/theme";


const Week6 = ()=>{
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
                            Lesson 6
                        </Text>
                        <Text style={[{paddingTop: 40}, font=="medium"?{fontSize: 17}:(font=="large"?{fontSize: 19}:{fontSize: 15})]}>
                            *August 1–7
                        </Text>
                    </View>

                    <Text style={[{fontStyle: "italic"}, font=="medium"?{fontSize: 30}:(font=="large"?{fontSize: 32}:{fontSize: 28})]}>
                        Spiritual Gifts
                    </Text>

                    <View style={{overflow: "hidden", marginTop:10, maxHeight: 120, width: "100%"}}>
                        <Image source={images.lesson6} resizeMode="contain" style={{maxWidth: 370, maxHeight: 134, width: "100%"}}/>
                    </View>
                    
                    <View style={[{height: 4, marginTop: 5}, isDark?{backgroundColor: "#022a05"}:{backgroundColor: "red"}]}></View>
                    <Text style={{marginBottom: 10, color: "#022a05"}}>SABBATH AFTERNOON</Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>
                            Read for This Week’s Study: 
                        </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}>
                           1 Corinthians 12, Eph. 4:11–13,
                            1 Corinthians 13, 1 Pet. 4:8–11, 1 Cor. 14:27, Amos 3:7.
                        </Text>
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Memory Text: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}> 
                            “Pursue love, and earnestly desire the spiritual gifts,
                            especially that you may prophesy” (1 Corinthians 14:1, ESV).
                        </Text>
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Like a human body, the church is one but has many members,
                        each with different roles, functions, and gifts. Practiced with
                        love, these spiritual gifts promote a sense of unity that reflects
                        the character of the triune God.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}This week we will survey 1 Corinthians 12–14 and its teaching
                        on spiritual gifts. This section is part of a slightly larger unit, where
                        Paul deals with the expected Christian behavior in religious settings
                        (1 Corinthians 11–14). Paul’s primary concern has to do with the
                        problem of disorderly gatherings. His answer to this problem is that the
                        church is a body whose parts have different functions that contribute
                        to “the edifying of the body of Christ” (Eph. 4:12, NKJV). In short,
                        God gave the church spiritual gifts in order to promote unity through
                        diversity.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Certainly, Paul still has in mind the factionalism problem addressed
                        in the first four chapters of 1 Corinthians, where the answer to the
                        lack of agreement among church members is unity in Christ. Now, he
                        develops that idea by presenting his understanding of the role of spiri-
                        tual gifts. According to Paul, unity in Christ and the Spirit is the only
                        means of avoiding schisms.
                    </Text>

                    <Text style={{fontStyle: "italic", fontSize: 18}}>
                        * Study this week’s lesson to prepare for Sabbath, August 8. 
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>72</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{ margin: 6,}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>
                            Sunday 
                        </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            August 2
                        </Text>
                    </View>
                    

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Varieties of Gifts
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 1 Corinthians 12:1, Paul introduces a new topic with the for-
                        mula “now concerning.” Scholars discuss whether he is talking about
                        “spiritual gifts” or “spiritual people” because the Greek phrase tōn
                        pneumatikōn allows both interpretations. “Spiritual gifts” is preferable
                        in light of 1 Corinthians 12:4, where Paul clearly refers to spiritual
                        gifts. In 1 Corinthians 12:2, 3, Paul points out that the Spirit’s first gift
                        is the bold confession that Jesus is Lord. In New Testament times, to
                        say that Jesus is Lord is to say that Caesar is not (Acts 17:7; also John
                        19:12, 15). This was seen as sedition against the imperial power and,
                        hence, was punishable by death.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Jesus and Paul emphasized that faith in God—even in the face of
                        persecution and the threat of death—is a gift of the Spirit. Actually,
                        faith is the most basic gift. Not surprisingly, faith is first on the list in
                        1 Corinthians 13:13. That faith is a spiritual gift is clear by Paul’s state-
                        ment in 1 Corinthians 12:9. However, there are many other gifts. The
                        fact that the Holy Spirit distributes the different types of gifts “to each
                        one individually as He wills” (1 Cor. 12:11, NKJV) proves that all of
                        them are necessary.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            1 Corinthians 12:1–6. What is the emphasis of this passage?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The repetition of “varieties” emphasizes the multiplicity of gifts.
                        What Paul names as “spiritual gifts” in 1 Corinthians 12:1 is developed
                        in verses 4–6, through three different angles: “gifts” (charisma), “ser-
                        vices” or “ministries” (diakonia), and “activities” (energēma). Although
                        these words mean different things, it is important not to draw a fine dis-
                        tinction between them because of the parallelism of the passage. One
                        should also notice that the spiritual gifts are designed to promote unity
                        based on the triune character of God (see also Eph. 4:8–11). While the
                        Spirit grants gifts to believers, it is God who empowers them to serve
                        Christ in the community of believers (1 Cor. 12:5, 6). Each believer is
                        granted gifts individually (1 Cor. 12:11), but they all are to benefit the
                        community of believers as a whole.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Notice again Paul’s emphasis on unity. Why is this so important
                        to the church?
                    </Text>

                </View>
                
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>73</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Monday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>August 3</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Unity Through Diversity
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The language of oneness introduced in 1 Corinthians 12:4–6 (“the
                        same Spirit,” “the same Lord,” and “the same God”) is developed in
                        the rest of 1 Corinthians 12. This is evidenced by Paul’s use of phrases
                        such as “one and the same Spirit” (1 Cor. 12:11, NKJV), “the body is
                        one” (1 Cor. 12:12), “one body” (1 Cor. 12:12, 13, 20), “one Spirit”
                        (1 Cor. 12:13 [two times]), and “the same care for one another” (1 Cor.
                        12:25, NKJV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Alongside the concept of unity, Paul highlights the diversity of mem-
                        bers in the body of Christ through such expressions as “many mem-
                        bers” (1 Cor. 12:12, 20), “we were all baptized” (1 Cor. 12:13, NKJV),
                        “not one member but many” (1 Cor. 12:14, NKJV), “the whole body”
                        (1 Cor. 12:17), “each one of them” (1 Cor. 12:18, NKJV), “members
                        of the body” (1 Cor. 12:22, 23), and “all the members” (1 Cor. 12:26).
                        This emphasis on both unity and diversity indicates that spiritual gifts
                        aim to promote unity through diversity.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        This unity amid diversity must reflect the character of God. The
                        Father is one person, the Son is another person, and the Holy Spirit
                        another. The three maintain Their individualities while working
                        together to edify the church and empower it for mission (1 Cor. 12:4–6,
                        Eph. 4:11–13).
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            1 Corinthians 12:12–31. Why is the analogy of a body with its
                            many parts appropriate to represent the church and its members?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       One central thought in 1 Corinthians 12 is that although the body’s
                        members are individually so different from one another (1 Cor. 12:15–
                        20), they are all dependent on each other (1 Cor. 12:21–26). The feet
                        depend on the eyes to see where they must walk; in turn, the eyes can’t
                        touch anything—only the hands can. Also, the idea that some members
                        are weaker (1 Cor. 12:22) or less honorable (1 Cor. 12:23) than others
                        is only an impression, for all are necessary (1 Cor. 12:22).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Unfortunately, there was a tendency among the Corinthians to value
                        some gifts to the neglect of others. To rectify the Corinthians from mak-
                        ing this mistake, Paul called their attention to love, which is “a more
                        excellent way” (1 Cor. 12:31, NKJV). In other words, no matter what
                        the gift is, if practiced wisely and with love, it is pleasant to God.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        See the lists of gifts in 1 Corinthians 12:8–10, 28; Romans 12:6–8;
                        and Ephesians 4:11. What is your gift? How can you use it to
                        edify the body of Christ?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>74</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Tuesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> August 4</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        “A More Excellent Way”
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “Love is not one gift among many. It is the means through which all of
                        the gifts reach their ultimate purpose.”—Carl P. Cosaert, “1 Corinthians,”
                        Andrews Bible Commentary: New Testament (Berrien Springs, MI:
                        Andrews University Press, 2022), p. 1643.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight:"bold"}}>
                            1 Corinthians 13:1–7 and 1 Peter 4:8–11. What is the role of love
                            as far as spiritual gifts are concerned?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                   
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        First Corinthians 13 teaches that only through love can the spiritual
                        gifts be used appropriately. Paul begins 1 Corinthians 13 by alluding to
                        gifts mentioned in 1 Corinthians 12, only to stress their lack of value
                        if not driven by love. Thus, knowledge (1 Cor. 12:8) and faith (1 Cor.
                        12:9), even a faith “so as to remove mountains” (1 Cor. 13:2, ESV), are
                        nothing without love (1 Cor. 13:2). Without love, the ability to speak in
                        tongues (1 Cor. 12:10, 28, 30) is reduced merely to “a resounding gong
                        or a clanging cymbal” (1 Cor. 13:1, NIV). Likewise, even the important
                        gift of prophecy is nothing without love (1 Cor. 13:2).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In 1 Corinthians 13:4–7, Paul focuses on what love is and what it
                        is not; more particularly, what love does and what it does not do. The
                        verbs he chose to characterize love indicate love is not so much some-
                        thing we feel as it is something that we practice. Thus, Paul mentions
                        that love (1) shows patience; (2) shows kindness; (3) rejoices in the
                        truth; (4) bears all things; (5) believes all things; (6) hopes all things;
                        and (7) endures all things. Conversely, love (1) does not envy; (2) does
                        not boast; (3) does not inflate with arrogance; (4) does not behave
                        rudely; (5) does not seek its own [rights]; (6) does not get easily irri-
                        tated; (7) does not keep record of wrongs; and (8) does not delight in
                        wrongdoing.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        This total of 15 verbs provides solid guidance for appropriate behav-
                        ior in the practice of gifts. Notably, this discussion on the true nature of
                        love lies precisely between 1 Corinthians 12 and 14, where Paul deals
                        with the conflict regarding spiritual gifts. Indeed, love is the key to the
                        wise use of spiritual gifts. Love is also placed side by side with faith
                        and hope, “but the greatest of these is love” (1 Cor. 13:13, NKJV).
                    </Text>
                                  
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Why is love so central to our faith? What better way to experi-
                        ence the reality of God’s love than by prayerfully seeking to
                        reflect that love to others?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>75</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Wednesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            August 5
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        The Gift of Tongues
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        What about the gift of tongues? In line with the manifestation of the
                        gift elsewhere in the Bible (Mark 16:17, Acts 2:1–13, Acts 10:44–48,
                        Acts 19:6), the gift of tongues in 1 Corinthians is most likely the Spirit-
                        granted ability to speak in foreign languages.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Paul mentions the gift of tongues in the list of gifts in 1 Corinthians
                        12:8–10 (see also 1 Cor. 12:28, 30; 1 Cor. 13:1, 8). However, he
                        refers to it repeatedly in 1 Corinthians 14. Indeed, the Greek word
                        glōssa (“tongue”) appears more than twenty times in 1 Corinthians
                        12–14, with fifteen occurrences in 1 Corinthians 14 alone. Besides
                        these, the Greek word heteroglōssos (“another tongue”) also occurs,
                        in 1 Corinthians 14:21. This high number of references to the gift of
                        tongues suggests that this matter is of particular concern for Paul. The
                        misuse and abuse of this gift by the church in Corinth caused disorder
                        and confusion in public worship (1 Cor. 14:23, 27, 33, 40).
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Corinthians 14:5, 13, 26, 27 and 1 Corinthians 12:10, 30. What
                            particular instruction did Paul give concerning the gift of tongues?
                        </Text>
                        
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        The reason the gift of speaking in tongues must go hand in hand with
                        that of interpreting them is that tongues must be intelligible (1 Cor. 14:9);
                        otherwise, there is no benefit in using the gift (1 Cor. 14:6). This explains
                        why Paul put so much emphasis on interpretation and understanding.
                        Obviously, he is criticizing not the gift of tongues itself, but, as we will
                        see tomorrow, the excessive prominence the Corinthians attributed to it,
                        which led to the neglect of the gift of prophecy.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        At this point, it is important to notice that although Paul desired that
                        all the Corinthians could speak foreign languages (1 Cor. 14:5), he did
                        not expect that to happen (1 Cor. 12:10). Thus, the thought that “all
                        must speak in tongues before claiming baptism in the Holy Spirit is
                        a perversion of Paul’s teaching in 1 Corinthians 12 and 14.”—Raoul
                        Dederen, Handbook of Seventh-day Adventist Theology, Commentary
                        Reference Series, vol. 12 (Hagerstown, MD: Review and Herald
                        Publishing Association, 2001), p. 620.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Are there people in your church who speak other languages?
                        How can they use this ability to reach other people for Christ?
                        How can this fact help us understand the true nature of tongues
                        that Paul is addressing?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>76</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Thursday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> August 6</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        The Gift of Prophecy
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The gift of prophecy occupies a prominent place in Paul’s discus-
                        sion on spiritual gifts. Interestingly, the gift of prophecy is usually
                        mentioned before the gift of tongues (1 Cor. 12:10, 28; 1 Cor. 13:8).
                        When the gift of tongues is mentioned first, this is only to emphasize
                        its relative unimportance compared to the gift of prophecy (1 Cor. 14:4,
                        5, 6, 22).
                    </Text>
                    
                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Ephesians 4:11–13 and 1 Corinthians 14:3, 4. What do these pas-
                            sages say about the purpose of spiritual gifts in general and the gift
                            of prophecy in particular?
                        </Text>
                        
                    </Text>

                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The gift of prophecy is meant to provide edification, exhortation,
                        and comfort (1 Cor. 14:3; compare with Acts 15:32). This suggests that
                        prophecy is not so much about predicting the future as it is about how
                        to live in the present. The Greek verb prophēteuō can mean either “to
                        say something in advance” or “to say something on behalf of someone
                        else.” For instance, the first sense is seen in Acts 2:29–31 (compare
                        with Amos 3:7), where the idea that David is a prophet is explained as
                        “foreseeing.” The second sense is seen in Acts 15:32, where Judas and
                        Silas are identified as prophets. Their “prophecy,” however, consisted in
                        encouraging and strengthening “the brothers with many words” (ESV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        From Ephesians 4:11–13, we learn that the spiritual gifts did not cease in
                        the apostolic era. They should remain until the end (Acts 2:39). However,
                        if someone claims to be a prophet, he/she must be evaluated based on
                        the Scriptures. Broadly speaking, four rules should be satisfied. First, the
                        unconditional prophecies always come true (Deut. 18:22; Jer. 28:8, 9).
                        Second, the message agrees with that of previous prophets (Deut. 13:1–3,
                        Isa. 8:20). Third, the daily life demonstrates a commitment to Christ (1
                        John 4:1–3). Fourth, Jesus said false prophets would be known by their
                        fruits (Matt. 7:15–20). This is also true concerning true prophets.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The book of Revelation indicates that the gift of prophecy is a dis-
                        tinctive characteristic of the remnant church (Rev. 12:17, Rev. 19:10).
                        As Seventh-day Adventists, we believe that the gift of prophecy was
                        bestowed upon Ellen G. White and is reflected in her writings.
                    </Text>
                       
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        What are all the reasons we have for belief in Ellen G. White’s
                        prophetic gift? What questions remain about her role and
                        authority?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>77</Text>
                </View>
                <View style={isDark? styles.bar : styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Friday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> August 7</Text>
                    </View>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Further Thought: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Read Roswell F. Cottrell, “Spiritual Gifts,” pp.
                            5–16, in Ellen G. White, Spiritual Gifts, vol. 1.
                        </Text>
                        
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       “Let men go forth to labor, trusting in the Lord, and He will go with
                        them, convicting and converting souls. One worker may be a ready
                        speaker, another a ready writer, another may have the gift of sincere,
                        earnest, fervent prayer, another the gift of singing. Another may have
                        special power to explain the word of God with clearness. And each
                        gift is to become a power for God because He co-operates with the
                        worker. To one God gives the word of wisdom, to another knowledge,
                        to another faith. But all are to work under the same head. The diversity
                        of gifts leads to a diversity of operations, ‘but it is the same God which
                        worketh all in all’ (1 Cor. 12:6).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “Paul u“Let no man despise the supposed lesser gifts. Let all go to work. Let
                        no one fold his hands in unbelief because he thinks that he can do no
                        mighty work. Cease looking at self. Look to your Leader. In meekness,
                        sincerity, and love do what you can.”—Ellen G. White, in The Advent
                        Review and Sabbath Herald, April 12, 1906.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       “We each need the help we can receive from other minds. God will
                        work in other minds than ours. The various gifts given to different ones
                        are to blend for the ‘perfecting of the saints, for the work of the minis-
                        try, for the edifying of the body of Christ’ (Eph. 4:12). . . .
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                      “There will always be obstacles before us, but we are to follow our
                        Leader, and meet our difficulties unitedly, hand in hand.”—Ellen G.
                        White, The Upward Look, p. 141.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        1. Think a bit more about the gift of prophecy. Why is prophecy
                        more important than tongues if they are not interpreted? If neces-
                        sary, read 1 Corinthians 14 again in order to recap Paul’s argu-
                        ments.{"\n"}
                        2. In class, talk about the life and ministry of Ellen G. White and
                        why we, as a church, believe that she did indeed manifest the gift of
                        prophecy. What great blessings come to the church from this gift?{"\n"}
                        What also are the challenges in knowing how best to use this gift?
                        3. Think of three to five people who genuinely love you. How do
                        you know their love for you is true? What does this tell you about
                        why Paul spoke so much about love in his discussion on spiritual
                        gifts?{"\n"}
                        4. However important love is, why must that not be the only cri-
                        terion in judging whether or not someone is speaking truth and is
                        worthy of being listened to?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>78</Text>
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
export default Week6;