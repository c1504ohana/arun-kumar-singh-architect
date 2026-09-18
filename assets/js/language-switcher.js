(() => {
  const translationRows = [
    ["Home", "होम", "హోమ్"],
    ["Projects", "परियोजनाएँ", "ప్రాజెక్టులు"],
    ["Gallery", "गैलरी", "గ్యాలరీ"],
    ["About", "परिचय", "పరిచయం"],
    ["Contact", "संपर्क", "సంప్రదింపు"],
    ["Start a project", "संपर्क", "సంప్రదించండి"],
    ["Skip to content", "मुख्य सामग्री पर जाएँ", "ప్రధాన విషయానికి వెళ్లండి"],
    ["Primary navigation", "मुख्य नेविगेशन", "ప్రధాన నావిగేషన్"],
    ["Gallery categories", "गैलरी श्रेणियाँ", "గ్యాలరీ విభాగాలు"],
    ["Choose website language", "वेबसाइट की भाषा चुनें", "వెబ్‌సైట్ భాషను ఎంచుకోండి"],
    ["View website in English", "वेबसाइट अंग्रेज़ी में देखें", "వెబ్‌సైట్‌ను ఆంగ్లంలో చూడండి"],
    ["View website in Hindi", "वेबसाइट हिंदी में देखें", "వెబ్‌సైట్‌ను హిందీలో చూడండి"],
    ["View website in Telugu", "वेबसाइट तेलुगु में देखें", "వెబ్‌సైట్‌ను తెలుగులో చూడండి"],
    ["Show previous image", "पिछली छवि दिखाएँ", "మునుపటి చిత్రాన్ని చూపించండి"],
    ["Show next image", "अगली छवि दिखाएँ", "తదుపరి చిత్రాన్ని చూపించండి"],
    ["Pause", "रोकें", "నిలిపివేయి"],
    ["Play", "चलाएँ", "ప్రారంభించు"],
    ["Pause image slideshow", "चित्र स्लाइडशो रोकें", "చిత్ర స్లైడ్‌షోను నిలిపివేయండి"],
    ["Play image slideshow", "चित्र स्लाइडशो चलाएँ", "చిత్ర స్లైడ్‌షోను ప్రారంభించండి"],
    ["Arun Kumar Singh", "अरुण कुमार सिंह", "అరుణ్ కుమార్ సింగ్"],
    ["Architect & Planner", "वास्तुकार एवं योजनाकार", "వాస్తుశిల్పి & ప్రణాళికకర్త"],
    ["Arun Kumar Singh · Architect & Planner", "अरुण कुमार सिंह · वास्तुकार एवं योजनाकार", "అరుణ్ కుమార్ సింగ్ · వాస్తుశిల్పి & ప్రణాళికకర్త"],
    ["Have a space in mind?", "क्या आपके मन में कोई स्थान है?", "మీ మనసులో ఒక స్థలం ఉందా?"],
    ["Let’s shape it with purpose.", "आइए इसे उद्देश्यपूर्ण रूप दें।", "దానికి అర్థవంతమైన రూపం ఇద్దాం."],
    ["Start a conversation", "बातचीत शुरू करें", "సంభాషణ ప్రారంభించండి"],
    ["Architecture grounded in context,", "संदर्भ से जुड़ी वास्तुकला,", "సందర్భానికి అనుగుణమైన వాస్తుశిల్పం,"],
    ["crafted for everyday life.", "रोज़मर्रा के जीवन के लिए रची गई।", "నిత్యజీవితం కోసం రూపొందించబడింది."],
    ["Patna", "पटना", "పాట్నా"],
    ["Hyderabad", "हैदराबाद", "హైదరాబాద్"],
    ["Patna, Bihar", "पटना, बिहार", "పాట్నా, బీహార్"],
    ["Hyderabad, Telangana", "हैदराबाद, तेलंगाना", "హైదరాబాద్, తెలంగాణ"],
    ["Patna · Hyderabad", "पटना · हैदराबाद", "పాట్నా · హైదరాబాద్"],
    ["A. K. & Associates", "ए. के. एंड एसोसिएट्स", "ఎ. కె. & అసోసియేట్స్"],
    ["A. K. &", "ए. के. एंड", "ఎ. కె. &"],
    ["Associates", "एसोसिएट्स", "అసోసియేట్స్"],
    ["Vision Architects &", "विज़न आर्किटेक्ट्स एवं", "విజన్ ఆర్కిటెక్ట్స్ &"],
    ["Project Consultant", "परियोजना सलाहकार", "ప్రాజెక్ట్ కన్సల్టెంట్"],
    ["COA Registration CA/81/6231", "सीओए पंजीकरण CA/81/6231", "సీఓఏ నమోదు CA/81/6231"],
    ["Portfolio of architect Arun Kumar Singh.", "वास्तुकार अरुण कुमार सिंह का पोर्टफोलियो।", "వాస్తుశిల్పి అరుణ్ కుమార్ సింగ్ పోర్ట్‌ఫోలియో."],

    ["Spaces shaped for", "जीवन के अनुरूप", "జీవితం సాగే తీరుకు"],
    ["how life unfolds.", "रचे गए स्थान।", "రూపుదిద్దుకున్న స్థలాలు."],
    ["Context-aware architecture for homes, institutions, and communities across Bihar and Telangana.", "बिहार और तेलंगाना में घरों, संस्थानों और समुदायों के लिए संदर्भ-संवेदी वास्तुकला।", "బీహార్ మరియు తెలంగాణలో గృహాలు, సంస్థలు, సముదాయాల కోసం సందర్భానుకూల వాస్తుశిల్పం."],
    ["Explore selected work", "चुनिंदा कार्य देखें", "ఎంపిక చేసిన పనులను చూడండి"],
    ["Meet the practice", "हमारी फर्म को जानें", "మా సంస్థను తెలుసుకోండి"],
    ["Established practice", "स्थापित वास्तु अभ्यास", "స్థిరపడిన వాస్తు సంస్థ"],
    ["From first sketch to final detail, every project balances clarity, utility, and a lasting sense of place.", "पहले रेखाचित्र से अंतिम विवरण तक, हर परियोजना स्पष्टता, उपयोगिता और स्थान की स्थायी पहचान का संतुलन बनाती है।", "మొదటి స్కెచ్ నుంచి చివరి వివరాల వరకు, ప్రతి ప్రాజెక్టు స్పష్టత, ఉపయోగకరత, స్థల భావనను సమతుల్యం చేస్తుంది."],
    ["Residential projects delivered", "पूर्ण आवासीय परियोजनाएँ", "పూర్తి చేసిన నివాస ప్రాజెక్టులు"],
    ["Studios in Patna & Hyderabad", "पटना और हैदराबाद में स्टूडियो", "పాట్నా & హైదరాబాద్‌లో స్టూడియోలు"],
    ["Council of Architecture", "वास्तुकला परिषद", "కౌన్సిల్ ఆఫ్ ఆర్కిటెక్చర్"],
    ["Selected work", "चुनिंदा कार्य", "ఎంపిక చేసిన పనులు"],
    ["Built around people", "लोगों के इर्द-गिर्द", "మనుషుల అవసరాల చుట్టూ"],
    ["and place.", "और स्थान के अनुरूप।", "మరియు ప్రదేశానికి అనుగుణంగా."],
    ["View all projects", "सभी परियोजनाएँ देखें", "అన్ని ప్రాజెక్టులను చూడండి"],
    ["A considered approach", "सोचा-समझा दृष्टिकोण", "ఆలోచనాత్మక విధానం"],
    ["Good architecture does more than occupy land. It creates", "अच्छी वास्तुकला केवल भूमि नहीं घेरती। वह रचती है", "మంచి వాస్తుశిల్పం కేవలం భూమిని ఆక్రమించదు. అది సృష్టించేది"],
    ["belonging.", "अपनापन।", "అనుబంధం."],
    ["Led by Arun Kumar Singh, the practice works across residential, educational, healthcare, cultural, and township projects—bringing local understanding and technical rigor to every scale.", "अरुण कुमार सिंह के नेतृत्व में यह फर्म आवासीय, शैक्षणिक, स्वास्थ्य, सांस्कृतिक और टाउनशिप परियोजनाओं पर काम करती है—हर स्तर पर स्थानीय समझ और तकनीकी दृढ़ता के साथ।", "అరుణ్ కుమార్ సింగ్ నాయకత్వంలో ఈ సంస్థ నివాస, విద్యా, ఆరోగ్య, సాంస్కృతిక, టౌన్‌షిప్ ప్రాజెక్టులపై పనిచేస్తూ ప్రతి స్థాయిలో స్థానిక అవగాహనను, సాంకేతిక క్రమశిక్షణను అందిస్తుంది."],
    ["Architecture, considered", "विचारपूर्ण वास्तुकला", "ఆలోచనాత్మక వాస్తుశిల్పం"],
    ["Design begins before", "डिज़ाइन शुरू होता है", "డిజైన్ ప్రారంభమయ్యేది"],
    ["the first line is drawn.", "पहली रेखा खींचने से पहले।", "మొదటి గీత గీయకముందే."],
    ["Architecture is the careful shaping of space around people—how they arrive, move, gather, work, rest, and adapt over time.", "वास्तुकला लोगों के आसपास स्थान को सावधानी से आकार देने की कला है—वे कैसे आते हैं, चलते हैं, मिलते हैं, काम करते हैं, आराम करते हैं और समय के साथ बदलते हैं।", "వాస్తుశిల్పం అనేది మనుషుల చుట్టూ స్థలాన్ని జాగ్రత్తగా మలచడం—వారు ఎలా వస్తారు, కదులుతారు, కలుస్తారు, పనిచేస్తారు, విశ్రాంతి తీసుకుంటారు, కాలంతో ఎలా మారుతారు అన్నదాన్ని పరిగణించడం."],
    ["In the climates of Bihar and Telangana, good design must also work with sunlight, shade, ventilation, monsoon rain, local materials, and the realities of construction. These practical decisions are what make a building comfortable, efficient, and enduring.", "बिहार और तेलंगाना की जलवायु में अच्छे डिज़ाइन को धूप, छाया, वेंटिलेशन, मानसूनी वर्षा, स्थानीय सामग्री और निर्माण की वास्तविकताओं के साथ काम करना चाहिए। यही व्यावहारिक निर्णय इमारत को आरामदायक, कुशल और टिकाऊ बनाते हैं।", "బీహార్, తెలంగాణ వాతావరణాల్లో మంచి డిజైన్ సూర్యకాంతి, నీడ, గాలి ప్రసరణ, రుతుపవన వర్షాలు, స్థానిక పదార్థాలు, నిర్మాణ వాస్తవాలతో కలిసి పనిచేయాలి. ఈ ఆచరణాత్మక నిర్ణయాలే భవనాన్ని సౌకర్యవంతంగా, సమర్థవంతంగా, దీర్ఘకాలికంగా చేస్తాయి."],
    ["Climate & light", "जलवायु और प्रकाश", "వాతావరణం & వెలుతురు"],
    ["Orientation, shading, daylight, and natural ventilation are considered from the earliest plans.", "दिशा, छाया, प्राकृतिक प्रकाश और वेंटिलेशन पर प्रारंभिक योजना से ही विचार किया जाता है।", "దిశ, నీడ, సహజ వెలుతురు, గాలి ప్రసరణను తొలి ప్రణాళిక దశ నుంచే పరిగణిస్తాం."],
    ["Flow & function", "प्रवाह और उपयोग", "ప్రవాహం & ఉపయోగం"],
    ["Clear circulation and well-proportioned rooms make spaces intuitive, useful, and easy to inhabit.", "स्पष्ट आवागमन और संतुलित अनुपात वाले कमरे स्थानों को सहज, उपयोगी और रहने में आसान बनाते हैं।", "స్పష్టమైన సంచారం, సరైన నిష్పత్తుల గదులు స్థలాలను సహజంగా, ఉపయోగకరంగా, నివసించడానికి సులభంగా చేస్తాయి."],
    ["Material & longevity", "सामग्री और दीर्घायु", "పదార్థాలు & దీర్ఘకాలికత"],
    ["Durable materials and buildable details help architecture age well and remain practical to maintain.", "टिकाऊ सामग्री और निर्माण योग्य विवरण वास्तुकला को समय के साथ बेहतर बनाए रखते हैं और रखरखाव को व्यावहारिक बनाते हैं।", "మన్నికైన పదార్థాలు, నిర్మించగల వివరాలు భవనం కాలంతో మెరుగ్గా నిలిచి, నిర్వహణకు అనుకూలంగా ఉండేలా చేస్తాయి."],
    ["Our expertise", "हमारी विशेषज्ञता", "మా నైపుణ్యం"],
    ["One practice.", "एक ही फर्म।", "ఒకే సంస్థ."],
    ["Every project stage.", "परियोजना के हर चरण में।", "ప్రతి ప్రాజెక్టు దశలో."],
    ["A joined-up design service, from early feasibility and planning through interiors, engineering coordination, and delivery.", "प्रारंभिक व्यवहार्यता और योजना से लेकर इंटीरियर, इंजीनियरिंग समन्वय और निर्माण पूर्ण होने तक एकीकृत डिज़ाइन सेवा।", "ప్రాథమిక సాధ్యత, ప్రణాళిక నుంచి ఇంటీరియర్స్, ఇంజినీరింగ్ సమన్వయం, అమలు వరకు సమగ్ర డిజైన్ సేవ."],
    ["Architecture", "वास्तुकला", "వాస్తుశిల్పం"],
    ["Residential, institutional, cultural, and commercial design from concept to completion.", "अवधारणा से पूर्णता तक आवासीय, संस्थागत, सांस्कृतिक और वाणिज्यिक डिज़ाइन।", "ఆలోచన నుంచి పూర్తి నిర్మాణం వరకు నివాస, సంస్థాగత, సాంస్కృతిక, వాణిజ్య డిజైన్."],
    ["Interior Design", "इंटीरियर डिज़ाइन", "ఇంటీరియర్ డిజైన్"],
    ["Thoughtful residential, workplace, and commercial interiors shaped around daily use.", "दैनिक उपयोग को ध्यान में रखकर बनाए गए आवासीय, कार्यस्थल और वाणिज्यिक इंटीरियर।", "రోజువారీ వినియోగాన్ని దృష్టిలో ఉంచుకుని రూపొందించిన నివాస, కార్యాలయ, వాణిజ్య ఇంటీరియర్స్."],
    ["Town Planning", "नगर नियोजन", "పట్టణ ప్రణాళిక"],
    ["Clear, connected masterplans and layouts for larger communities and developments.", "बड़े समुदायों और विकासों के लिए स्पष्ट एवं परस्पर जुड़े मास्टरप्लान और लेआउट।", "పెద్ద సముదాయాలు, అభివృద్ధుల కోసం స్పష్టమైన, అనుసంధానమైన మాస్టర్‌ప్లాన్లు, లేఅవుట్లు."],
    ["Engineering Consultancy", "इंजीनियरिंग परामर्श", "ఇంజినీరింగ్ కన్సల్టెన్సీ"],
    ["Practical structural and technical coordination for confident project delivery.", "विश्वसनीय परियोजना निष्पादन के लिए व्यावहारिक संरचनात्मक और तकनीकी समन्वय।", "నమ్మకమైన ప్రాజెక్టు అమలుకు ఆచరణాత్మక నిర్మాణ, సాంకేతిక సమన్వయం."],
    ["Planning something", "कुछ नया बनाने की", "ఏదైనా విలువైనది"],
    ["worth building?", "योजना बना रहे हैं?", "నిర్మించాలనుకుంటున్నారా?"],
    ["Tell us about your site, your ambitions, and the way you want the space to work.", "हमें अपने स्थल, अपनी अपेक्षाओं और स्थान के उपयोग के बारे में बताएँ।", "మీ స్థలం, మీ లక్ష్యాలు, అది ఎలా పనిచేయాలని కోరుకుంటున్నారో మాకు చెప్పండి."],
    ["Discuss your project", "अपनी परियोजना पर चर्चा करें", "మీ ప్రాజెక్టు గురించి మాట్లాడండి"],

    ["Selected portfolio", "चुनिंदा पोर्टफोलियो", "ఎంపిక చేసిన పోర్ట్‌ఫోలియో"],
    ["Work across", "विभिन्न स्तरों पर", "వివిధ స్థాయుల్లో"],
    ["many scales.", "हमारा कार्य।", "మా పని."],
    ["Residential, educational, healthcare, institutional, and cultural work shaped by its purpose and place—plus more than 100 homes delivered across Patna and Hyderabad.", "उद्देश्य और स्थान के अनुरूप आवासीय, शैक्षणिक, स्वास्थ्य, संस्थागत और सांस्कृतिक कार्य—साथ ही पटना और हैदराबाद में 100 से अधिक पूर्ण आवास।", "ఉద్దేశం, ప్రదేశానికి అనుగుణంగా నివాస, విద్యా, ఆరోగ్య, సంస్థాగత, సాంస్కృతిక పనులు—పాట్నా, హైదరాబాద్‌లలో పూర్తి చేసిన 100కు పైగా గృహాలతో పాటు."],
    ["Selected projects", "चुनिंदा परियोजनाएँ", "ఎంపిక చేసిన ప్రాజెక్టులు"],
    ["8 featured here", "यहाँ 8 प्रमुख परियोजनाएँ", "ఇక్కడ 8 ప్రధాన ప్రాజెక్టులు"],
    ["Residential", "आवासीय", "నివాస"],
    ["Healthcare", "स्वास्थ्य सेवा", "ఆరోగ్య సంరక్షణ"],
    ["Educational", "शैक्षणिक", "విద్యా"],
    ["Institutional", "संस्थागत", "సంస్థాగత"],
    ["Religious & Cultural", "धार्मिक एवं सांस्कृतिक", "మతపరమైన & సాంస్కృతిక"],
    ["Residential Township", "आवासीय टाउनशिप", "నివాస టౌన్‌షిప్"],
    ["Aero Green City", "एयरो ग्रीन सिटी", "ఏరో గ్రీన్ సిటీ"],
    ["Carmel High School", "कार्मेल हाई स्कूल", "కార్మెల్ హై స్కూల్"],
    ["Dhirendra Shree Apartment", "धीरेंद्र श्री अपार्टमेंट", "ధీరేంద్ర శ్రీ అపార్ట్‌మెంట్"],
    ["ISKCON Temple Patna", "इस्कॉन मंदिर पटना", "ఇస్కాన్ ఆలయం పాట్నా"],
    ["Issyoga MSMB Bhawan", "इस्सयोग एमएसएमबी भवन", "ఇస్సయోగ ఎంఎస్ఎంబీ భవన్"],
    ["Narayan Medical College & Hospital", "नारायण मेडिकल कॉलेज एवं अस्पताल", "నారాయణ మెడికల్ కాలేజ్ & హాస్పిటల్"],
    ["Sheetal Chaya Apartment", "शीतल छाया अपार्टमेंट", "శీతల్ ఛాయా అపార్ట్‌మెంట్"],
    ["Shiva Enclave", "शिवा एन्क्लेव", "శివ ఎన్‌క్లేవ్"],

    ["Visual archive", "दृश्य संग्रह", "దృశ్య భాండాగారం"],
    ["Project", "परियोजना", "ప్రాజెక్ట్"],
    ["gallery.", "गैलरी।", "గ్యాలరీ."],
    ["A closer look at selected healthcare, cultural, educational, and residential work—from campus planning and public elevations to the details that give each project its identity.", "चुनिंदा स्वास्थ्य, सांस्कृतिक, शैक्षणिक और आवासीय कार्यों की विस्तृत झलक—कैंपस योजना और सार्वजनिक मुखाकृतियों से लेकर प्रत्येक परियोजना की पहचान बनाने वाले विवरणों तक।", "ఎంపిక చేసిన ఆరోగ్య, సాంస్కృతిక, విద్యా, నివాస పనులను దగ్గరగా చూడండి—క్యాంపస్ ప్రణాళిక, ప్రజా ముఖభాగాల నుంచి ప్రతి ప్రాజెక్టుకు ప్రత్యేకతనిచ్చే వివరాల వరకు."],
    ["Medical College", "मेडिकल कॉलेज", "మెడికల్ కాలేజ్"],
    ["Temple", "मंदिर", "ఆలయం"],
    ["School", "विद्यालय", "పాఠశాల"],
    ["Apartment", "अपार्टमेंट", "అపార్ట్‌మెంట్"],
    ["Healthcare & education", "स्वास्थ्य एवं शिक्षा", "ఆరోగ్యం & విద్య"],
    ["Narayan Medical", "नारायण मेडिकल", "నారాయణ మెడికల్"],
    ["College & Hospital", "कॉलेज एवं अस्पताल", "కాలేజ్ & హాస్పిటల్"],
    ["A large institutional campus planned around academic, clinical, and shared public spaces.", "शैक्षणिक, चिकित्सीय और साझा सार्वजनिक स्थानों के आसपास नियोजित एक बड़ा संस्थागत परिसर।", "విద్యా, వైద్య, భాగస్వామ్య ప్రజా స్థలాల చుట్టూ ప్రణాళిక చేసిన పెద్ద సంస్థాగత క్యాంపస్."],
    ["Project details", "परियोजना विवरण", "ప్రాజెక్టు వివరాలు"],
    ["Main academic block", "मुख्य शैक्षणिक ब्लॉक", "ప్రధాన విద్యా భవనం"],
    ["Campus view", "कैंपस दृश्य", "క్యాంపస్ దృశ్యం"],
    ["Institutional entrance", "संस्थागत प्रवेश", "సంస్థ ప్రవేశం"],
    ["Front elevation", "सामने का मुखभाग", "ముందు ముఖభాగం"],
    ["Arrival court", "आगमन प्रांगण", "ప్రవేశ ప్రాంగణం"],
    ["Covered concourse", "आच्छादित मार्ग", "కప్పబడిన మార్గం"],
    ["Central landscape", "केंद्रीय लैंडस्केप", "కేంద్ర ల్యాండ్‌స్కేప్"],
    ["Campus planning", "कैंपस नियोजन", "క్యాంపస్ ప్రణాళిక"],
    ["Academic facade", "शैक्षणिक मुखभाग", "విద్యా ముఖభాగం"],
    ["Architectural detail", "वास्तु विवरण", "వాస్తు వివరాలు"],
    ["Religious & cultural", "धार्मिक एवं सांस्कृतिक", "మతపరమైన & సాంస్కృతిక"],
    ["ISKCON", "इस्कॉन", "ఇస్కాన్"],
    ["Temple Patna", "मंदिर पटना", "ఆలయం పాట్నా"],
    ["A civic and spiritual landmark combining ceremonial spaces, detailed stonework, and public gathering areas.", "अनुष्ठानिक स्थानों, बारीक पत्थरकारी और सार्वजनिक सभा क्षेत्रों को जोड़ता एक नागरिक एवं आध्यात्मिक प्रतीक।", "వేడుక స్థలాలు, సూక్ష్మ రాతిపని, ప్రజా సమావేశ ప్రదేశాలను కలిపే పౌర, ఆధ్యాత్మిక చిహ్నం."],
    ["Main temple facade", "मुख्य मंदिर मुखभाग", "ప్రధాన ఆలయ ముఖభాగం"],
    ["Public frontage", "सार्वजनिक अग्रभाग", "ప్రజా ముఖభాగం"],
    ["Temple complex", "मंदिर परिसर", "ఆలయ సముదాయం"],
    ["Elevated view", "ऊपरी दृश्य", "ఎత్తు నుంచి దృశ్యం"],
    ["Entrance pavilion", "प्रवेश मंडप", "ప్రవేశ మండపం"],
    ["Stone detailing", "पत्थर का विवरण", "రాతి వివరాలు"],
    ["Ceremonial frontage", "अनुष्ठानिक अग्रभाग", "వేడుకల ముఖభాగం"],
    ["Courtyard view", "प्रांगण दृश्य", "ప్రాంగణ దృశ్యం"],
    ["Temple gateway", "मंदिर द्वार", "ఆలయ ద్వారం"],
    ["Street elevation", "सड़क से मुखभाग", "వీధి ముఖభాగం"],
    ["Entrance composition", "प्रवेश संरचना", "ప్రవేశ కూర్పు"],
    ["Craft detail", "शिल्प विवरण", "శిల్ప వివరాలు"],
    ["Side pavilion", "पार्श्व मंडप", "పక్క మండపం"],
    ["Public court", "सार्वजनिक प्रांगण", "ప్రజా ప్రాంగణం"],
    ["Carmel", "कार्मेल", "కార్మెల్"],
    ["High School", "हाई स्कूल", "హై స్కూల్"],
    ["An educational campus organized around open play space, clear circulation, and simple, durable classroom blocks.", "खुले खेल क्षेत्र, स्पष्ट आवागमन और सरल, टिकाऊ कक्षा ब्लॉकों के आसपास संगठित शैक्षणिक परिसर।", "తెరచిన ఆట స్థలం, స్పష్టమైన సంచారం, సరళమైన మన్నికైన తరగతి భవనాల చుట్టూ రూపొందించిన విద్యా క్యాంపస్."],
    ["Classroom block", "कक्षा ब्लॉक", "తరగతి భవనం"],
    ["Playing field", "खेल मैदान", "ఆట మైదానం"],
    ["Main gate", "मुख्य द्वार", "ప్రధాన ద్వారం"],
    ["Campus entrance", "कैंपस प्रवेश", "క్యాంపస్ ప్రవేశం"],
    ["Campus court", "कैंपस प्रांगण", "క్యాంపస్ ప్రాంగణం"],
    ["Shared open space", "साझा खुला स्थान", "భాగస్వామ్య బహిరంగ స్థలం"],
    ["Dhirendra Shree", "धीरेंद्र श्री", "ధీరేంద్ర శ్రీ"],
    ["A multi-storey residential building with a clear facade rhythm, projecting balconies, and naturally lit homes.", "स्पष्ट मुखभाग लय, बाहर निकली बालकनियों और प्राकृतिक रोशनी वाले घरों की बहुमंजिला आवासीय इमारत।", "స్పష్టమైన ముఖభాగ లయ, ముందుకు వచ్చిన బాల్కనీలు, సహజ వెలుతురు గల గృహాలతో కూడిన బహుళ అంతస్తుల నివాస భవనం."],
    ["Overall composition", "समग्र संरचना", "మొత్తం కూర్పు"],
    ["Street perspective", "सड़क से परिप्रेक्ष्य", "వీధి దృక్కోణం"],
    ["Balcony rhythm", "बालकनी लय", "బాల్కనీ లయ"],
    ["Facade detail", "मुखभाग विवरण", "ముఖభాగ వివరాలు"],
    ["Residential entry", "आवासीय प्रवेश", "నివాస ప్రవేశం"],

    ["The practice", "हमारी फर्म", "మా సంస్థ"],
    ["Experience anchored", "अनुभव की जड़ें", "అనుభవం పాతుకుపోయింది"],
    ["in", "हैं", "ఈ"],
    ["context.", "संदर्भ में।", "సందర్భంలో."],
    ["Decades of architectural practice, built on careful listening, technical clarity, and an understanding of how places are truly used.", "दशकों का वास्तु अनुभव, ध्यानपूर्वक सुनने, तकनीकी स्पष्टता और स्थानों के वास्तविक उपयोग की समझ पर आधारित।", "దశాబ్దాల వాస్తు అనుభవం—శ్రద్ధగా వినడం, సాంకేతిక స్పష్టత, స్థలాలు నిజంగా ఎలా ఉపయోగించబడతాయో అర్థం చేసుకోవడంపై ఆధారపడింది."],
    ["Architect Arun Kumar Singh", "वास्तुकार अरुण कुमार सिंह", "వాస్తుశిల్పి అరుణ్ కుమార్ సింగ్"],
    ["Principal Architect", "प्रधान वास्तुकार", "ప్రధాన వాస్తుశిల్పి"],
    ["Profile", "परिचय", "ప్రొఫైల్"],
    ["Architecture that is practical, enduring, and distinctly of its place.", "ऐसी वास्तुकला जो व्यावहारिक, टिकाऊ और अपने स्थान की विशिष्ट पहचान वाली हो।", "ఆచరణాత్మకంగా, మన్నికగా, తన ప్రదేశానికి ప్రత్యేకంగా నిలిచే వాస్తుశిల్పం."],
    ["Arun Kumar Singh is a Council of Architecture-registered architect leading A. K. & Associates in Patna and Vision Architects & Project Consultant in Hyderabad.", "अरुण कुमार सिंह वास्तुकला परिषद में पंजीकृत वास्तुकार हैं और पटना में ए. के. एंड एसोसिएट्स तथा हैदराबाद में विज़न आर्किटेक्ट्स एंड प्रोजेक्ट कंसल्टेंट का नेतृत्व करते हैं।", "అరుణ్ కుమార్ సింగ్ కౌన్సిల్ ఆఫ్ ఆర్కిటెక్చర్‌లో నమోదైన వాస్తుశిల్పి. ఆయన పాట్నాలో ఎ. కె. & అసోసియేట్స్, హైదరాబాద్‌లో విజన్ ఆర్కిటెక్ట్స్ & ప్రాజెక్ట్ కన్సల్టెంట్‌కు నాయకత్వం వహిస్తున్నారు."],
    ["His work spans individual residences, apartment communities, educational and healthcare institutions, cultural landmarks, and larger township developments across Bihar and Telangana.", "उनका कार्य बिहार और तेलंगाना में व्यक्तिगत आवासों, अपार्टमेंट समुदायों, शैक्षणिक एवं स्वास्थ्य संस्थानों, सांस्कृतिक स्थलों और बड़े टाउनशिप विकासों तक फैला है।", "ఆయన పని బీహార్, తెలంగాణలో వ్యక్తిగత గృహాలు, అపార్ట్‌మెంట్ సముదాయాలు, విద్యా, ఆరోగ్య సంస్థలు, సాంస్కృతిక చిహ్నాలు, పెద్ద టౌన్‌షిప్ అభివృద్ధుల వరకు విస్తరించింది."],
    ["At every scale, the practice focuses on functional planning, contextual sensitivity, durable construction, and a straightforward collaboration between client, consultant, and site.", "हर स्तर पर यह फर्म कार्यात्मक योजना, संदर्भ-संवेदनशीलता, टिकाऊ निर्माण और ग्राहक, सलाहकार एवं साइट के बीच स्पष्ट सहयोग पर ध्यान देती है।", "ప్రతి స్థాయిలో ఈ సంస్థ కార్యాచరణ ప్రణాళిక, సందర్భ సున్నితత్వం, మన్నికైన నిర్మాణం, క్లయింట్, కన్సల్టెంట్, సైట్ మధ్య స్పష్టమైన సహకారంపై దృష్టి పెడుతుంది."],
    ["Residential projects", "आवासीय परियोजनाएँ", "నివాస ప్రాజెక్టులు"],
    ["Regional studios", "क्षेत्रीय स्टूडियो", "ప్రాంతీయ స్టూడియోలు"],
    ["COA registration", "सीओए पंजीकरण", "సీఓఏ నమోదు"],
    ["Working principles", "कार्य सिद्धांत", "పని సూత్రాలు"],
    ["Clear ideas.", "स्पष्ट विचार।", "స్పష్టమైన ఆలోచనలు."],
    ["Grounded decisions.", "व्यावहारिक निर्णय।", "వాస్తవిక నిర్ణయాలు."],
    ["Listen first", "पहले सुनें", "ముందుగా వినండి"],
    ["Understand the people, priorities, constraints, and potential before drawing begins.", "रेखांकन शुरू करने से पहले लोगों, प्राथमिकताओं, सीमाओं और संभावनाओं को समझें।", "డ్రాయింగ్ ప్రారంభించే ముందు వ్యక్తులు, ప్రాధాన్యతలు, పరిమితులు, అవకాశాలను అర్థం చేసుకోండి."],
    ["Design with context", "संदर्भ के साथ डिज़ाइन", "సందర్భంతో డిజైన్"],
    ["Respond to climate, culture, site, materials, and the character of the surrounding place.", "जलवायु, संस्कृति, स्थल, सामग्री और आसपास के स्थान के चरित्र के अनुरूप डिज़ाइन करें।", "వాతావరణం, సంస్కృతి, స్థలం, పదార్థాలు, పరిసరాల స్వభావానికి స్పందించేలా డిజైన్ చేయండి."],
    ["Build for longevity", "दीर्घायु के लिए निर्माण", "దీర్ఘకాలం కోసం నిర్మాణం"],
    ["Balance visual identity with efficient planning, robust details, and practical maintenance.", "दृश्य पहचान को कुशल योजना, मजबूत विवरण और व्यावहारिक रखरखाव के साथ संतुलित करें।", "దృశ్య గుర్తింపును సమర్థవంతమైన ప్రణాళిక, బలమైన వివరాలు, ఆచరణాత్మక నిర్వహణతో సమతుల్యం చేయండి."],
    ["Credentials", "प्रमाण-पत्र", "అర్హతలు"],
    ["Professional", "व्यावसायिक", "వృత్తిపరమైన"],
    ["recognition.", "मान्यता।", "గుర్తింపు."],
    ["Registered Architect, Council of Architecture, Registration No. CA/81/6231.", "पंजीकृत वास्तुकार, वास्तुकला परिषद, पंजीकरण संख्या CA/81/6231।", "నమోదిత వాస్తుశిల్పి, కౌన్సిల్ ఆఫ్ ఆర్కిటెక్చర్, నమోదు సంఖ్య CA/81/6231."],
    ["Professional credential", "व्यावसायिक प्रमाण-पत्र", "వృత్తిపరమైన అర్హత"],
    ["Delhi Development Authority", "दिल्ली विकास प्राधिकरण", "ఢిల్లీ అభివృద్ధి ప్రాధికార సంస్థ"],
    ["Architect Empanelment", "वास्तुकार पैनल मान्यता", "వాస్తుశిల్పి ఎంపానెల్‌మెంట్"],
    ["Hyderabad office", "हैदराबाद कार्यालय", "హైదరాబాద్ కార్యాలయం"],
    ["GST Registration", "जीएसटी पंजीकरण", "జీఎస్‌టీ నమోదు"],
    ["Certificate", "प्रमाण-पत्र", "సర్టిఫికెట్"],
    ["GHMC Trade", "जीएचएमसी व्यापार", "జీహెచ్ఎంసీ ట్రేడ్"],
    ["License", "लाइसेंस", "లైసెన్స్"],
    ["Professional profile", "व्यावसायिक प्रोफ़ाइल", "వృత్తిపరమైన ప్రొఫైల్"],
    ["Indian Institute of Architects", "इंडियन इंस्टीट्यूट ऑफ आर्किटेक्ट्स", "ఇండియన్ ఇన్‌స్టిట్యూట్ ఆఫ్ ఆర్కిటెక్ట్స్"],
    ["Bihar Chapter", "बिहार अध्याय", "బీహార్ చాప్టర్"],

    ["Let’s create a place", "आइए एक स्थान बनाएँ", "ఒక స్థలాన్ని సృష్టిద్దాం"],
    ["with", "जिसका", "ఒక"],
    ["purpose.", "उद्देश्य हो।", "ఉద్దేశంతో."],
    ["For architecture, interiors, planning, engineering consultancy, or valuation, share a little about your project and where it is located.", "वास्तुकला, इंटीरियर, नियोजन, इंजीनियरिंग परामर्श या मूल्यांकन के लिए अपनी परियोजना और उसके स्थान के बारे में जानकारी साझा करें।", "వాస్తుశిల్పం, ఇంటీరియర్స్, ప్రణాళిక, ఇంజినీరింగ్ కన్సల్టెన్సీ లేదా విలువ నిర్ధారణ కోసం మీ ప్రాజెక్టు, దాని స్థానం గురించి కొంత వివరించండి."],
    ["General enquiries", "सामान्य पूछताछ", "సాధారణ విచారణలు"],
    ["Office 01", "कार्यालय 01", "కార్యాలయం 01"],
    ["Office 02", "कार्यालय 02", "కార్యాలయం 02"],
    ["Architecture, planning, interiors, engineering consultancy, and valuation.", "वास्तुकला, नियोजन, इंटीरियर, इंजीनियरिंग परामर्श और मूल्यांकन।", "వాస్తుశిల్పం, ప్రణాళిక, ఇంటీరియర్స్, ఇంజినీరింగ్ కన్సల్టెన్సీ, విలువ నిర్ధారణ."],
    ["View on Google Maps", "गूगल मैप्स पर देखें", "గూగుల్ మ్యాప్స్‌లో చూడండి"],
    ["Before we begin", "शुरू करने से पहले", "ప్రారంభించే ముందు"],
    ["If possible, include your project location, approximate site area, intended use, and preferred timeline. This helps us make the first conversation more useful.", "यदि संभव हो तो परियोजना का स्थान, अनुमानित साइट क्षेत्र, प्रस्तावित उपयोग और अपेक्षित समय-सीमा बताएँ। इससे पहली बातचीत अधिक उपयोगी होगी।", "సాధ్యమైతే మీ ప్రాజెక్టు స్థానం, సుమారు స్థల విస్తీర్ణం, ఉద్దేశించిన వినియోగం, కావలసిన కాలపరిమితిని తెలియజేయండి. ఇది తొలి సంభాషణను మరింత ఉపయోగకరంగా చేస్తుంది."],

    ["All projects", "सभी परियोजनाएँ", "అన్ని ప్రాజెక్టులు"],
    ["Location", "स्थान", "స్థానం"],
    ["Year", "वर्ष", "సంవత్సరం"],
    ["Project overview", "परियोजना परिचय", "ప్రాజెక్టు అవలోకనం"],
    ["Details", "विवरण", "వివరాలు"],
    ["Type", "प्रकार", "రకం"],
    ["Practice", "फर्म", "సంస్థ"],
    ["AKS / Project Study", "AKS / परियोजना अध्ययन", "AKS / ప్రాజెక్టు అధ్యయనం"],
    ["A residential township development delivered by A. K. & Associates, Patna.", "ए. के. एंड एसोसिएट्स, पटना द्वारा पूर्ण आवासीय टाउनशिप विकास।", "ఎ. కె. & అసోసియేట్స్, పాట్నా పూర్తి చేసిన నివాస టౌన్‌షిప్ అభివృద్ధి."],
    ["An educational institution building delivered by A. K. & Associates, Patna.", "ए. के. एंड एसोसिएट्स, पटना द्वारा पूर्ण शैक्षणिक संस्थान भवन।", "ఎ. కె. & అసోసియేట్స్, పాట్నా పూర్తి చేసిన విద్యా సంస్థ భవనం."],
    ["A residential apartment complex delivered by A. K. & Associates, Patna.", "ए. के. एंड एसोसिएट्स, पटना द्वारा पूर्ण आवासीय अपार्टमेंट परिसर।", "ఎ. కె. & అసోసియేట్స్, పాట్నా పూర్తి చేసిన నివాస అపార్ట్‌మెంట్ సముదాయం."],
    ["A religious and cultural landmark in Patna, designed and delivered by A. K. & Associates.", "पटना का धार्मिक एवं सांस्कृतिक प्रतीक, जिसे ए. के. एंड एसोसिएट्स ने डिज़ाइन और पूर्ण किया।", "పాట్నాలోని మతపరమైన, సాంస్కృతిక చిహ్నం; ఎ. కె. & అసోసియేట్స్ రూపకల్పన చేసి పూర్తి చేసింది."],
    ["An institutional building delivered by A. K. & Associates, Patna.", "ए. के. एंड एसोसिएट्स, पटना द्वारा पूर्ण संस्थागत भवन।", "ఎ. కె. & అసోసియేట్స్, పాట్నా పూర్తి చేసిన సంస్థాగత భవనం."],
    ["A healthcare facility delivered by A. K. & Associates, supporting medical education and patient care in the region.", "ए. के. एंड एसोसिएट्स द्वारा पूर्ण स्वास्थ्य सुविधा, जो क्षेत्र में चिकित्सा शिक्षा और रोगी देखभाल का समर्थन करती है।", "ఎ. కె. & అసోసియేట్స్ పూర్తి చేసిన ఆరోగ్య సదుపాయం; ఇది ప్రాంతంలో వైద్య విద్య, రోగి సంరక్షణకు తోడ్పడుతుంది."],
    ["A residential enclave delivered by A. K. & Associates, Patna.", "ए. के. एंड एसोसिएट्स, पटना द्वारा पूर्ण आवासीय एन्क्लेव।", "ఎ. కె. & అసోసియేట్స్, పాట్నా పూర్తి చేసిన నివాస ఎన్‌క్లేవ్."]
  ];

  const dictionaries = {
    hi: new Map(translationRows.map(([english, hindi]) => [english, hindi])),
    te: new Map(translationRows.map(([english, , telugu]) => [english, telugu]))
  };
  const supportedLanguages = new Set(["en", "hi", "te"]);
  const languageButtons = [...document.querySelectorAll("[data-language]")];
  const originalTitle = document.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  const originalDescription = metaDescription?.content;
  const copyright = document.querySelector(".site-footer__legal p:first-child");
  const originalCopyright = copyright?.textContent;
  const textEntries = [];
  const attributeEntries = [];
  let currentLanguage = "en";

  const normalize = (value) => value.replace(/\s+/g, " ").trim();
  const hasTranslation = (value) => dictionaries.hi.has(value) || dictionaries.te.has(value);

  const registerText = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        const value = normalize(node.nodeValue);

        if (!value || !parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }

        return hasTranslation(value) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    while (walker.nextNode()) {
      const node = walker.currentNode;
      textEntries.push({
        node,
        key: normalize(node.nodeValue),
        original: node.nodeValue,
        leading: node.nodeValue.match(/^\s*/)?.[0] || "",
        trailing: node.nodeValue.match(/\s*$/)?.[0] || ""
      });
    }
  };

  const registerAttributes = () => {
    document.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
      ["aria-label", "alt", "title"].forEach((attribute) => {
        const original = element.getAttribute(attribute);

        if (original && hasTranslation(normalize(original))) {
          attributeEntries.push({
            element,
            attribute,
            key: normalize(original),
            original
          });
        }
      });
    });
  };

  const getStoredLanguage = () => {
    try {
      return window.localStorage.getItem("site-language");
    } catch (error) {
      console.warn("The saved language preference could not be read.", error);
      return null;
    }
  };

  const storeLanguage = (language) => {
    try {
      window.localStorage.setItem("site-language", language);
    } catch (error) {
      console.warn("The language preference could not be saved.", error);
    }
  };

  const translate = (text, language = currentLanguage) => {
    if (language === "en") {
      return text;
    }

    return dictionaries[language]?.get(normalize(text)) ?? text;
  };

  const translateTitle = (language) => originalTitle
    .split(" | ")
    .map((part) => translate(part, language))
    .join(" | ");

  const applyLanguage = (requestedLanguage, persist = true) => {
    const language = supportedLanguages.has(requestedLanguage) ? requestedLanguage : "en";
    currentLanguage = language;
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;

    textEntries.forEach(({ node, key, original, leading, trailing }) => {
      node.nodeValue = language === "en"
        ? original
        : `${leading}${translate(key, language)}${trailing}`;
    });

    attributeEntries.forEach(({ element, attribute, key, original }) => {
      element.setAttribute(attribute, language === "en" ? original : translate(key, language));
    });

    document.title = translateTitle(language);

    if (metaDescription && originalDescription) {
      metaDescription.content = translate(originalDescription, language);
    }

    if (copyright && originalCopyright) {
      copyright.textContent = language === "en"
        ? originalCopyright
        : originalCopyright.replace("Arun Kumar Singh", translate("Arun Kumar Singh", language));
    }

    languageButtons.forEach((button) => {
      const isActive = button.dataset.language === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (persist) {
      storeLanguage(language);
    }

    document.dispatchEvent(new CustomEvent("site-language-change", {
      detail: { language }
    }));
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });

  registerText();
  registerAttributes();

  window.siteI18n = {
    get language() {
      return currentLanguage;
    },
    setLanguage: applyLanguage,
    translate
  };

  applyLanguage(getStoredLanguage() || "en", false);
})();
