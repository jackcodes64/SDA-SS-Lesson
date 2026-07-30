import { Stack, useRouter } from "expo-router";
import { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { images } from "../constants/images";
import { FontContext } from "../contexts/font";
import { ThemeContext } from "../contexts/theme";


const Week13 = ()=>{
    const [isDark, setIsDark] = useContext(ThemeContext);
    const [font, setFont] = useContext(FontContext);
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
                            Lesson 13
                        </Text>
                        <Text style={[{paddingTop: 40}, font=="medium"?{fontSize: 17}:(font=="large"?{fontSize: 19}:{fontSize: 15})]}>
                            *September 12–18
                        </Text>
                    </View>

                    <Text style={[{fontStyle: "italic"}, font=="medium"?{fontSize: 30}:(font=="large"?{fontSize: 32}:{fontSize: 28})]}>
                        Grace, Love, and Fellowship
                    </Text>

                    <View style={{overflow: "hidden", marginTop:10, maxHeight: 120, width: "100%"}}>
                        <Image source={images.lesson13} resizeMode="contain" style={{maxWidth: 370, maxHeight: 134, width: "100%"}}/>
                    </View>
                    
                    <View style={[{height: 4, marginTop: 5}, isDark?{backgroundColor: "#022a05"}:{backgroundColor: "red"}]}></View>
                    <Text style={{marginBottom: 10, color: "#022a05"}}>SABBATH AFTERNOON</Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>
                            Read for This Week’s Study: 
                        </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}>
                            2 Cor. 8:9; Rom. 16:20; 1 John
                            4:8–11; 2 Cor. 13:11; Phil. 2:1, 2; Gal. 4:4–6.
                        </Text>
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Memory Text: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, }}> 
                            “The grace of the Lord Jesus Christ and the love of
                            God and the fellowship of the Holy Spirit be with you all” (2 Corinthians
                            13:14, ESV).
                        </Text>
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Paul closes 2 Corinthians by re-emphasizing essential elements
                        addressed in his letters. He does this through five imperatives
                        (2 Cor. 13:11).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}The first imperative, “Rejoice” (ESV), recalls earlier texts in the letters.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}The second imperative, “Strive for full restoration” (NIV), translates a single word in Greek (katartizō), which appears here and in
                        1 Corinthians 1:10.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}The third, “Encourage one another” (NIV), resumes 2 Corinthians
                        1:3–7. Paul begins and closes his second letter with encouragement.
                        We receive God’s encouragement in order to encourage others (2 Cor.
                        1:4, 6).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}The fourth and fifth imperatives, “Be of one mind, live in peace”
                        (2 Cor. 13:11, NKJV), are a call to unity. This atmosphere of joy,
                        restoration, encouragement, unity, and peace is the condition for the
                        presence of God, “the God of love and peace” (2 Cor. 13:11, ESV). It
                        results from our triune God’s work in the human heart (2 Cor. 13:14).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        {"          "}Grace, love, and fellowship result from the work of the triune God for
                        us. These three Christian features promote an atmosphere characterized
                        by God’s presence.
                    </Text>

                    <Text style={{fontStyle: "italic", fontSize: 18}}>
                       * Study this week’s lesson to prepare for Sabbath, September 26.
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>163</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{ margin: 6,}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>
                            Sunday 
                        </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            September 20
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        The Grace of Jesus
                    </Text>
                   
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        It is inspiring that at the end of 2 Corinthians, we see a reference to
                        the grace of Jesus, just as in the opening (2 Cor. 1:2, 2 Cor. 13:14). Paul
                        begins and closes this letter with a reference to His grace. As we saw
                        at the beginning of this quarter, he couldn’t stop thinking and speaking
                        about Jesus.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        “For you know the grace of our Lord Jesus Christ, that though He
                        was rich, yet for your sakes He became poor, that you through His
                        poverty might become rich” (2 Cor. 8:9, NKJV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        How admirable and irresistible is the grace of Jesus! He left the
                        riches of His eternal existence in heaven to become poor. He walked
                        down the dusty roads of ancient Galilee. “He humbled himself by
                        becoming obedient to the point of death, even death on a cross” (Phil.
                        2:8, ESV). He did so in order for us to become “rich,” namely, for us
                        to have a chance to be with Him in heaven. It’s hard for us, who have
                        known only a world of sin, death, and suffering even to begin to grasp
                        what it meant for Jesus to have left the courts of heaven in order to
                        come here and offer His life for us.
                    </Text>
                     <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                            2Romans 16:20, Galatians 6:18, Philippians 4:23, and 1 Thessalonians
                            5:28. What important teaching do you see in these passages?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Paul refers to the grace of Jesus very often in his letters. Some pearls
                        include, “The free gift by the grace of . . . Jesus Christ abounded for
                        many” (Rom. 5:15, ESV). Those who receive this abundance of grace
                        will “reign in life through . . . Jesus” (Rom. 5:17, ESV). As occurs with
                        2 Corinthians, Paul also begins and ends other letters mentioning the
                        grace of Jesus (Rom. 1:7, Rom. 16:20, 1 Cor. 1:3, 1 Cor. 16:23, Gal.
                        1:3, Gal. 6:18, Phil. 1:2, Phil. 4:23). This topic occupied his thoughts,
                        and he wanted it to fill the minds of the Corinthians, too.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        This was his wish for all the churches. Notice what he says to the
                        Ephesians: “Grace to all who love our Lord Jesus Christ with an
                        undying love” (Eph. 6:24, NIV). Would he wish for us to love Jesus
                        less than that, an undying love? Certainly not. After all, his wish was
                        for the grace of Jesus to reach “more and more people” (2 Cor. 4:15,
                        NIV) and become sufficient for them just as it was for him (2 Cor.
                        12:9).
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Think about God’s grace toward you like this. What do you
                        deserve for the kind of things you have said and done? What,
                        however, does God’s grace offer you instead?
                    </Text>

                </View>
                
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>164</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Monday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>September 21</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        The Love of God
                    </Text>
                                  
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “The grace of the Lord Jesus Christ, and the love of God, and the
                        communion of the Holy Spirit be with you all. Amen” (2 Cor. 13:14,
                        NKJV). With this verse, Paul ends his second letter. Notice that he
                        mentions the three Persons of the Trinity in this order—Son, Father,
                        and Holy Spirit. It is through the work of all three that we can better
                        understand what God is like and what He has done for us.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18,fontWeight: "bold" }}>
                             John 3:16, 17; Romans 8:37–39; and 1 John 4:8–11. What do
                             these passages tell us about the love of God?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                          

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        First John 4:8 says that “God is love.” Love is an essential attribute
                        of God. John emphasizes that we can know love in that God gave His
                        only Son to die for us (John 3:16). God sent Jesus on a rescue mission
                        (John 3:17), and this was part of the project of salvation (Acts 3:20,
                        21; 1 John 4:10, 14). Jesus referred to the Father several times in the
                        Gospels as the One who sent Him (Matt. 10:40, Mark 9:37).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        In a remarkable statement, Paul says, “God demonstrates his own
                        love for us in this: While we were still sinners, Christ died for us”
                        (Rom. 5:8, NIV). We can glimpse God’s love in the sweet relationship
                        between husband and wife, as well as parents and their children, in sin-
                        cere friendships, and so forth. We can also see God’s love in nature. In
                        that regard, Ellen G. White says, “ ‘God is love’ is written upon every
                        opening bud, upon every spire of springing grass. The lovely birds mak-
                        ing the air vocal with their happy songs, the delicately tinted flowers
                        in their perfection perfuming the air, the lofty trees of the forest with
                        their rich foliage of living green—all testify to the tender, fatherly care
                        of our God and to His desire to make His children happy.”—Steps to
                        Christ, p. 10.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        However, nothing is more convincing than God’s giving Jesus as a
                        sacrifice for our sins. When we understand that God loved us to the
                        point of sending Jesus to lay down His life for us, our response is will-
                        ingness “to lay down our lives for the brothers” (1 John 3:16, ESV).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Paul wanted the Corinthians to live in unity. However, without love,
                        there is no unity. That is why he taught them that “love builds
                        up” (1 Cor. 8:1, ESV) and that without love, everything is useless and
                        empty (1 Cor. 13:1–3). So, all we do must be done in love (1 Cor.
                        16:14), a love that is an extension of God’s love.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        What would we lose in the gospel if Jesus Himself were not fully and eternally God?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>165</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Tuesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>September 22</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        The God of Love
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        In the ancient pagan world, people did not believe that the gods
                        loved humans. Instead, the gods were malevolent and furious, and
                        were supposed to be appeased. The idea of a God of love, as we see
                        in the Bible, was a novelty. As surprising as this statement was in
                        his time, Paul characterizes our God as “the God of love and peace”
                        (2 Cor. 13:11).
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight:"bold"}}>
                            2 Corinthians 13:11. How can you draw hope from what
                            is said here? How can you better experience what this verse
                            teaches?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                   
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The phrase “the God of love and peace” can be interpreted in two
                        different ways. On one hand, God is seen as the source of love and
                        peace. On the other hand, God is characterized by love and peace. It
                        is not necessary, however, to decide between the two. Because love
                        and peace are intrinsic characteristics of God, He gives us love and
                        peace.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Elsewhere, Paul refers to God as “the God of endurance and
                        encouragement” (Rom. 15:5, ESV); “of hope” (Rom. 15:13, ESV);
                        “of peace” (Rom. 15:33, Rom. 16:20, 1 Cor. 14:33, Phil. 4:9,
                        1 Thess. 5:23), “the Father of mercies” (2 Cor. 1:3), and “the God
                        of all comfort” (2 Cor. 1:3). God is the source of all these blessings.
                        He gives them to us all out of His unfailing love.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        Also, although the phrase “God of peace” is somewhat common in
                        the Bible, the phrase “God of love” occurs only here (2 Cor. 13:11),
                        and, hence, it deserves our most profound reflection.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        As many interpreters have noticed, Paul’s reference to the God of
                        love a few verses before the trinitarian benediction in 2 Corinthians
                        13:14 suggests that he thinks of God as three Persons. “Though he
                        uses the word ‘God’ here as one of the three, his understanding of
                        Jesus and the Spirit elsewhere in his letters . . . forces us to see the
                        whole phrase as describing the one God whom the earliest church
                        came to see in threefold form. It would be over a century before
                        theologians . . . began to use words like ‘trinity’ as a shorthand
                        way of expressing what Paul is already articulating.”—Tom Wright,
                        Paul for Everyone: 2 Corinthians (London: Society for Promoting
                        Christian Knowledge, 2004), p. 148.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        We believe in one God, the unity of three Persons who live eternally
                        in a relationship of love. This triune God loves us and summons us
                        to love one another in a way that reflects the love among the Three
                        Members of the Godhead.
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>166</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Wednesday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}>
                            September 23
                        </Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        The Fellowship of the Holy Spirit
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        The grace of Jesus not only reveals the love of God for us but also
                        brings the fellowship of the Spirit as a further effect of that love. At
                        the same time, fellowship has its source in the love of God. And that is
                        because without love, there is no fellowship. As Paul writes: “Therefore
                        if there is any consolation in Christ, if any comfort of love, if any fel-
                        lowship of the Spirit, if any affection and mercy, fulfill my joy by being
                        like-minded, having the same love, being of one accord, of one mind”
                        (Phil. 2:1, 2, NKJV).
                    </Text>
                                           
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Some people say that the Holy Spirit is only a force or influence, but
                        that cannot be true. After all, why would Paul mention two persons—
                        the Father and the Son—along with a mere “force” in a trinitarian
                        formula? That would make no sense. Just as the Father and the Son are
                        presented in a personal relationship (2 Cor. 1:3, 2 Cor. 11:31), the rela-
                        tionship of the Spirit with persons leads us to the conclusion that He is
                        also a person (Rom. 8:15, 16; see also John 14:16, 17, 26; John 15:26).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        The phrase “fellowship of the Spirit” (Phil. 2:1) can be understood
                        in two ways. It can mean fellowship with one another granted by the
                        Spirit, or fellowship with the Spirit Himself. Several Bible interpreters
                        argue that these senses are not mutually exclusive. After all, fellowship
                        with one another is the consequence of fellowship with the Spirit.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Read </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Corinthians 2:10, 11; 1 Corinthians 3:16; 1 Corinthians 12:11;
                            and 2 Corinthians 3:6, 17. What did Paul teach the Corinthians
                            about the Spirit?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)} >
                        Paul has much to say about the work of the Spirit. In 1 and
                        2 Corinthians, there are more than forty references to the Holy Spirit.
                        The Holy Spirit promotes the edification of the church (1 Cor. 14:12),
                        enables people for mission (1 Cor. 2:4, 5), reveals the deep things of God
                        to us (1 Cor. 2:10, 11), and teaches them to us (1 Cor. 2:13), dwells in us
                        (1 Cor. 3:16, 1 Cor. 6:19), works with Christ for our justification (1 Cor.
                        6:11), bestows spiritual gifts to the church (1 Corinthians 12–14), seals
                        us for salvation (2 Cor. 1:22), imprints the law in human hearts (2 Cor.
                        3:3), and gives new life in Christ (2 Cor. 3:6), and freedom from sin
                        (2 Cor. 3:17). For sure, we cannot live without the Holy Spirit.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        Why, too, is an understanding of the divinity of the Holy Spirit 
                        important for fully grasping God’s love for us?
                    </Text>

                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>167</Text>
                </View>
                <View style={isDark? styles.bar: styles.barLight}></View>

                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Thursday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> September 24</Text>
                    </View>

                    <Text style={{fontSize: 30, fontStyle: "italic"}}>
                        Our Triune God
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        When reading 2 Corinthians 13:14, one may think that Christ is the
                        only source of grace, God is the only source of love, and the Holy Spirit
                        is the only source of fellowship, but nothing could be further from the
                        truth.
                    </Text>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>How  </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            1 Corinthians 1:3, 4, 9; 1 Corinthians 10:16; 2 Corinthians 1:2,
                            12; Romans 8:35; Romans 15:30; Galatians 2:20; and Ephesians
                            3:19. What do these passages say about grace, love, and fellowship
                            in connection with the members of the Trinity?
                        </Text>
                    </Text>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                    <View style={{backgroundColor: "black", borderBottomColor: "black", borderBottomWidth: 0.5, margin: 15}}></View>
                                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        The Father, the Son, and the Holy Spirit work together for our salva-
                        tion. Grace, love, and fellowship come not from only one but the Three
                        Members of the Godhead. Yet, each One has specific functions in the
                        history of salvation. Paul is aware of that and emphasizes this teaching
                        in his letters. For instance, the plan of salvation is told with an incredi-
                        ble economy of words in Galatians 4:4–6, with the respective participa-
                        tion of the Three Members of the Godhead. God the Father sent Jesus,
                        which suggests that the Father is the Source of that plan (Gal. 4:4).
                        The Son was born of a woman (Gal. 4:4), which is a reference to the
                        Incarnation and points to the fulfillment of an ancient promise (Gen.
                        3:15). The Son redeemed us and brought us back to the correct rela-
                        tionship with the Father, whom Satan had lied about (Gen. 3:5). And
                        the Holy Spirit legitimizes our identity as children of God (Gal. 4:6).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        There are several other references to the Trinity in the Pauline letters.
                        The three act together, enabling the church for mission (1 Cor. 12:4–6),
                        giving us spiritual strength (Eph. 3:14–19), and promoting a profound
                        unity among church members, one that replicates the unity that marks
                        the very relationship of the members of the Godhead (Eph. 4:4–6). In
                        Paul’s understanding, not only is God triune, but also the three Persons
                        of the Godhead work together for our salvation (Eph. 1:3, 13, 14). In
                        Ephesians, Paul goes so far as to mention that we must be filled with
                        the fullness of the Father (Eph. 3:19), the Son (Eph. 4:13), and the Holy
                        Spirit (Eph. 5:18).
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       In bringing the correspondence with the Corinthians to a close (2 Cor.
                        13:14), Paul could not finish with a better ending—a promise that the
                        three Dignitaries of the universe, the heavenly Trio, would be with us
                        now and in the age to come.
                    </Text>

                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        How should fellowship among church members reflect the lovely 
                        relationship of the Godhead?
                    </Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                    <Text style={{fontWeight: "bold", margin: 10}}>168</Text>
                </View>
                <View style={isDark? styles.bar : styles.barLight}></View>


                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row", gap: 30}}>
                        <Text style={[isDark? styles.topBox : styles.topBoxLight,font=="medium"?{fontSize: 24}:(font=="large"?{fontSize: 26}:{fontSize: 22}) ]}>Friday </Text>
                        <Text style={{paddingTop: 40, fontSize: 17}}> September 25</Text>
                    </View>

                    <Text style={{margin: 10}}>
                        <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Further Thought: </Text>
                        <Text style={{fontStyle: "italic", fontSize: 18, fontWeight: "bold"}}>
                            Read Ellen G. White, “ ‘Let Not Your Heart Be
                            Troubled,’ ” pp. 662–680, in The Desire of Ages.
                        </Text>
                    </Text>
                    
                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                       “The grace of Jesus Christ alone can change the heart of stone to a
                        heart of flesh, and make it alive unto God. . . . Men have no power to
                        justify the soul, to sanctify the heart. Moral disease cannot be healed
                        save through the power of the great Physician. The highest gift of
                        heaven, even the Only-begotten of the Father, full of grace and truth,
                        is alone able to redeem the lost.”—Ellen G. White, in The Signs of the
                        Times, May 2, 1892.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “ ‘God is love.’ 1 John 4:16. His nature, His law, is love. It ever has
                        been; it ever will be. ‘The high and lofty One that inhabiteth eternity,’
                        whose ‘ways are everlasting,’ changeth not. With Him ‘is no variable-
                        ness, neither shadow of turning.’ Isaiah 57:15; Habakkuk 3:6; James
                        1:17. Every manifestation of creative power is an expression of infinite
                        love. The sovereignty of God involves fullness of blessing to all created
                        beings. . . . The history of the great conflict between good and evil,
                        from the time it first began in heaven to the final overthrow of rebel-
                        lion and the total eradication of sin, is also a demonstration of God’s
                        unchanging love.”—Ellen G. White, Patriarchs and Prophets, p. 33.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “We need to realize that the Holy Spirit . . . is as much a person as
                        God is a person. . . . The Holy Spirit has a personality, else He could not
                        bear witness to our spirits and with our spirits that we are the children
                        of God. He must also be a divine person, else He could not search out
                        the secrets which lie hidden in the mind of God.”—Ellen G. White, The
                        Faith I Live By, p. 52.
                    </Text>

                    <Text style={font=="medium"?styles.body:(font=="large"? styles.bodyLarge: styles.bodySmall)}>
                        “There are three living persons of the heavenly trio; in the name of
                        these three great powers—the Father, the Son, and the Holy Spirit—
                        those who receive Christ by living faith are baptized, and these powers
                        will cooperate with the obedient subjects of heaven in their efforts to
                        live the new life in Christ.”—Ellen G. White, Evangelism, p. 615.
                    </Text>
                        
                    <Text style={[{fontWeight: "bold", fontSize: 20}, isDark?{color: "#022a05"}:{color: "red"}]}>Discussion Questions: </Text>
                    <Text style={isDark? styles.terminalQuestion: styles.terminalQuestionLight}>
                        1. A well-known Christian song is entitled “Amazing Grace.”
                        What is amazing about the grace of Jesus?{"\n"}
                        2. A beautiful portrayal of God’s love can be found in the parable
                        of the prodigal son. How do we know the father in this parable is
                        a loving father?{"\n"}
                        3. How can local churches demonstrate that the “fellowship of
                        the Spirit” is a reality there?
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
export default Week13;