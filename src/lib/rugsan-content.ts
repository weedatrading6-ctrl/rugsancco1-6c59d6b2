export type Language = "so" | "en" | "ar";

type Copy = typeof translations.so;

export const services = [
  { key: "architecture", number: "01", items: ["Concept & Schematic Design", "Construction Documentation", "3D Visualization & Rendering", "Master Planning", "Renovation & Extension Design"] },
  { key: "interior", number: "02", items: ["Space Planning", "Residential Interior Design", "Commercial Interior Design", "Furniture Selection & Layout", "Lighting Design", "Material & Finish Selection"] },
  { key: "civil", number: "03", items: ["Structural Engineering & Analysis", "Site Supervision", "Construction Management", "Quality Control & Compliance", "Cost Estimation"] },
] as const;

export const translations = {
  so: {
    metaTitle: "Rugsan Construction Company | Naqshadeyn, Injineernimo & Dhisme",
    metaDescription: "Rugsan waxay bixisaa naqshadaynta dhismaha iyo gudaha, injineernimada madaniga, iyo adeegyada dhismaha.",
    nav: ["BOGGA HORE", "KU SAABSAN", "ADEEGYADA", "MASHAARIICDA", "AASAASAHA", "XIRIIR"],
    heroEyebrow: "NAQSHADEYN · INJINEERNIMO · DHISME",
    heroTitle: "Naqshadeyn Goobo Qurux Badan, Dhisid Mustaqbal Waara.",
    heroBody: "Rugsan waxay bixisaa xalal gaar ah oo ku dhisan cilmi, hal-abuur, shaqeyn, xaaladda goobta, iyo baahida macmiilka.",
    projectsCta: "DAAWO MASHAARIICDAYADA", consultCta: "HEL LA-TASHI BILAASH AH", scroll: "Hoos u deg",
    aboutLabel: "KU SAABSAN RUGSAN", aboutTitle: "Fikir farsamo leh. Goobo si wanaagsan loo dhisay.",
    aboutBody: "Rugsan Construction Company waxay ku takhasustay naqshadeyn, injineernimo, iyo dhisme. Waxaan abuurnaa goobo casri ah, shaqeynaya, qurux badan, oo waara annagoo isku darayna hal-abuurka, aqoonta farsamo, baahida macmiilka, iyo tixgelinta deegaanka.",
    aboutPoints: ["Hal-abuur", "Aqoon farsamo", "Shaqeyn", "Fahamka baahida macmiilka", "Fahamka goobta iyo deegaanka", "Naqshadaynta dhismaha", "Naqshadaynta gudaha", "Injineernimada madaniga"],
    learn: "NALA SOO XIRIIR",
    servicesLabel: "ADEEGYADA", servicesTitle: "Takhasus isku dhafan, hal aragti.",
    serviceNames: { architecture: "Naqshadaynta Dhismaha", interior: "Naqshadaynta Gudaha", civil: "Injineernimada Madaniga" },
    serviceDescriptions: { architecture: "Naqshado ka jawaabaya goobta, shaqada iyo himilada macmiilka.", interior: "Gudayaal si miisaan leh isugu dara raaxo, qurux iyo adeegsi.", civil: "Xalal injineernimo oo xoogga saaraya badbaado, tayo iyo fulin sax ah." },
    explore: "Faahfaahin",
    projectsLabel: "MASHAARIIC LA XULAY", projectsTitle: "Shaqooyin muuqaal iyo shaqeynba leh.", categories: ["Guri Deegaan", "Ganacsi", "La Xulay"], projectTitles: ["Mashruuc Guri Deegaan", "Mashruuc Ganacsi", "Mashruuc La Xulay"],
    whyLabel: "MAXAA RUGSAN LOO DOORTAA", whyTitle: "Faahfaahin kasta waxay leedahay ujeeddo.",
    reasons: [
      ["Falsafad naqshadeyn gaar ah", "Xal kasta wuxuu ka bilaabmaa faham qoto dheer oo ku saabsan goobta iyo dadka adeegsanaya."],
      ["Khibrad dhinacyo badan", "Naqshadeyn, gudaha iyo injineernimo ayaa hal qorshe ku wada shaqeeya."],
      ["Tayo iyo waayo-aragnimo", "Shaqadu waxay diiradda saartaa tayada iyo qanacsanaanta macmiilka."],
      ["Koox xirfadle ah", "Aqoon farsamo iyo maamul mashruuc ayaa hagaya tallaabo kasta."],
      ["Heer sare iyo hal-abuur", "Waxaan raadinnaa habab casri ah oo ku habboon deegaanka."],
    ],
    processLabel: "HABKA SHAQADA", processTitle: "Laga bilaabo fikrad ilaa fulin.", process: [["Fikrad iyo goob", "Waxaan fahamnaa baahida, deegaanka iyo fursadaha goobta."], ["Naqshadeyn", "Waxaan fikradda u beddelnaa qorshe cad oo shaqeynaya."], ["Injineernimo", "Waxaan xaqiijinnaa badbaadada, tayada iyo faahfaahinta farsamo."], ["Dhisme iyo kormeer", "Waxaan maamulnaa fulinta iyo ilaalinta tayada shaqada."]],
    missionLabel: "HIMILADEENNA", missionTitle: "Casriyeynta naqshadeynta iyo dhismaha.", missionBody: "Himilada Rugsan waa in la casriyeeyo naqshadeynta iyo dhismaha iyadoo la adeegsanayo xalal waara, tayo sare leh, oo ku habboon deegaanka. Shirkaddu waxay doonaysaa inay horumariso tayada naqshadda iyo heerarka dhismaha, ayna abuurto mashaariic waara, casri ah, oo mustaqbalka u diyaarsan.",
    founderLabel: "AASAASAHA", founderTitle: "Eng. Nur Mohammed Ali", founderRole: "Aasaase · Injineer", founderBody: "Wuxuu leeyahay in ka badan 10 sano oo waayo-aragnimo dhisme iyo injineernimo ah, wuxuuna ku dhawaad 6 sano ka shaqeeyay mid ka mid ah shirkadaha dhismaha ee hormuudka ah. Wuxuu maamulay oo hirgeliyay mashaariic dhisme oo waaweyn, khibraddiisuna waxay ku saabsan tahay injineernimo, maamulka mashruuca, iyo dhismaha.", portrait: "Sawirka aasaasaha lama hayo",
    ctaTitle: "Mashruucaaga aynu si sax ah u bilowno.", ctaBody: "La wadaag baahidaada, waxaana kaala hadli doonnaa jihada ugu habboon ee naqshadeynta, injineernimada ama dhismaha.", call: "SOO WAC",
    contactLabel: "XIRIIR", contactTitle: "Codso la-tashi.", contactBody: "Nooga warran mashruucaaga. Buuxi foomka ama si toos ah noola soo xiriir.",
    fields: { name: "Magaca", phone: "Telefoonka", email: "Iimaylka", service: "Adeegga loo baahan yahay", description: "Sharaxaadda mashruuca" }, choose: "Dooro adeeg", send: "DIR CODSIGA", sending: "WAA LA DIRAYAA...", success: "Codsigaaga waa la helay. Waan kula soo xiriiri doonnaa.", error: "Codsiga lama dirin. Fadlan dib isku day.", required: "Fadlan buuxi goobtan.", invalidEmail: "Geli iimayl sax ah.",
    info: "MACLUUMAADKA XIRIIRKA", addressLabel: "CINWAAN", address: ["Waaberi Mall", "Dabaqa 2, Qolka 202", "Degmada Waabari, ka soo horjeedka Adani Tower", "Muqdisho, Soomaaliya"],
    footerBody: "Naqshadeyn, injineernimo iyo dhisme isku dara qurux, shaqeyn iyo waaritaan.", footerNav: "LIISKA", footerContact: "XIRIIR", copyright: "Xuquuqda oo dhan way dhowran tahay.", signature: "NAQSHADEYN · INJINEERNIMO · DHISME",
  },
  en: {
    metaTitle: "Rugsan Construction Company | Architecture, Engineering & Construction", metaDescription: "Rugsan provides architecture, interior design, civil engineering, and construction services.",
    nav: ["HOME", "ABOUT", "SERVICES", "PROJECTS", "FOUNDER", "CONTACT"], heroEyebrow: "ARCHITECTURE · ENGINEERING · CONSTRUCTION", heroTitle: "Designing Beautiful Spaces, Building a Lasting Future.", heroBody: "Rugsan provides distinctive solutions shaped by science, creativity, function, site conditions, and client needs.", projectsCta: "VIEW OUR PROJECTS", consultCta: "GET A FREE CONSULTATION", scroll: "Scroll",
    aboutLabel: "ABOUT RUGSAN", aboutTitle: "Technical thinking. Thoughtfully built spaces.", aboutBody: "Rugsan Construction Company specializes in design, engineering, and construction. We create modern, functional, beautiful, and durable spaces by combining creativity, technical knowledge, client needs, and environmental considerations.", aboutPoints: ["Creativity", "Technical knowledge", "Function", "Understanding client needs", "Understanding site and environment", "Architecture design", "Interior design", "Civil engineering"], learn: "CONTACT US",
    servicesLabel: "SERVICES", servicesTitle: "Integrated expertise, one vision.", serviceNames: { architecture: "Architecture Design", interior: "Interior Design", civil: "Civil Engineering" }, serviceDescriptions: { architecture: "Site-responsive design shaped by function and client ambition.", interior: "Interiors balancing comfort, beauty, and practical use.", civil: "Engineering solutions focused on safety, quality, and precise delivery." }, explore: "Explore service",
    projectsLabel: "SELECTED PROJECTS", projectsTitle: "Work designed for presence and purpose.", categories: ["Residential", "Commercial", "Selected"], projectTitles: ["Residential Project", "Commercial Project", "Selected Project"],
    whyLabel: "WHY RUGSAN", whyTitle: "Every detail has a purpose.", reasons: [["Unique design philosophy", "Every solution begins with a deep understanding of place and people."], ["Multi-disciplinary expertise", "Architecture, interiors, and engineering work together within one vision."], ["Quality and experience", "Our work stays focused on quality and client satisfaction."], ["Professional team", "Technical knowledge and project management guide every stage."], ["Excellence and innovation", "We pursue modern approaches appropriate to their environment."]],
    processLabel: "OUR PROCESS", processTitle: "From first thought to final delivery.", process: [["Concept and site", "We understand the need, environment, and opportunities of the site."], ["Design", "We translate the idea into a clear, functional plan."], ["Engineering", "We establish safety, quality, and technical detail."], ["Construction and supervision", "We manage delivery and maintain the quality of the work."]],
    missionLabel: "OUR MISSION", missionTitle: "Modernizing design and construction.", missionBody: "Rugsan’s mission is to modernize design and construction through sustainable, high-quality, and environmentally appropriate solutions. The company seeks to improve design quality and construction standards and create durable, modern, future-ready projects.",
    founderLabel: "FOUNDER", founderTitle: "Eng. Nur Mohammed Ali", founderRole: "Founder · Engineer", founderBody: "With more than 10 years of construction and engineering experience, he spent nearly 6 years at one of the leading construction companies. He has managed and implemented major construction projects, with expertise in engineering, project management, and construction.", portrait: "Founder image unavailable",
    ctaTitle: "Let’s start your project the right way.", ctaBody: "Share your needs and we will discuss the right direction for your design, engineering, or construction project.", call: "CALL US",
    contactLabel: "CONTACT", contactTitle: "Request a consultation.", contactBody: "Tell us about your project. Complete the form or contact us directly.", fields: { name: "Name", phone: "Phone", email: "Email", service: "Service needed", description: "Project description" }, choose: "Choose a service", send: "SEND REQUEST", sending: "SENDING...", success: "Your request has been received. We will contact you.", error: "Your request could not be sent. Please try again.", required: "This field is required.", invalidEmail: "Enter a valid email.", info: "CONTACT INFORMATION", addressLabel: "ADDRESS", address: ["Waaberi Mall", "Floor 2, Apartment 202", "Waabari District, front of Adani Tower", "Mogadishu, Somalia"], footerBody: "Design, engineering, and construction combining beauty, function, and durability.", footerNav: "NAVIGATION", footerContact: "CONTACT", copyright: "All rights reserved.", signature: "ARCHITECTURE · ENGINEERING · CONSTRUCTION",
  },
  ar: {
    metaTitle: "شركة رغسان للإنشاءات | العمارة والهندسة والبناء", metaDescription: "تقدم رغسان خدمات التصميم المعماري والداخلي والهندسة المدنية وأعمال البناء.",
    nav: ["الرئيسية", "من نحن", "الخدمات", "المشاريع", "المؤسس", "اتصل بنا"], heroEyebrow: "العمارة · الهندسة · البناء", heroTitle: "نصمم مساحات جميلة، ونبني مستقبلاً مستداماً.", heroBody: "تقدم رغسان حلولاً فريدة تستند إلى العلم والإبداع والوظيفة وظروف الموقع واحتياجات العميل.", projectsCta: "شاهد مشاريعنا", consultCta: "احصل على استشارة مجانية", scroll: "تمرير",
    aboutLabel: "عن رغسان", aboutTitle: "فكر هندسي. مساحات مبنية بعناية.", aboutBody: "تتخصص شركة رغسان للإنشاءات في التصميم والهندسة والبناء. نصنع مساحات عصرية وعملية وجميلة ومتينة من خلال الجمع بين الإبداع والمعرفة التقنية واحتياجات العميل والاعتبارات البيئية.", aboutPoints: ["الإبداع", "المعرفة التقنية", "الوظيفة", "فهم احتياجات العميل", "فهم الموقع والبيئة", "التصميم المعماري", "التصميم الداخلي", "الهندسة المدنية"], learn: "تواصل معنا",
    servicesLabel: "الخدمات", servicesTitle: "خبرات متكاملة، ورؤية واحدة.", serviceNames: { architecture: "التصميم المعماري", interior: "التصميم الداخلي", civil: "الهندسة المدنية" }, serviceDescriptions: { architecture: "تصميم يستجيب للموقع والوظيفة وطموح العميل.", interior: "مساحات داخلية توازن بين الراحة والجمال والاستخدام العملي.", civil: "حلول هندسية تركز على السلامة والجودة ودقة التنفيذ." }, explore: "تفاصيل الخدمة",
    projectsLabel: "مشاريع مختارة", projectsTitle: "أعمال تجمع الحضور والغاية.", categories: ["سكني", "تجاري", "مختار"], projectTitles: ["مشروع سكني", "مشروع تجاري", "مشروع مختار"],
    whyLabel: "لماذا رغسان", whyTitle: "لكل تفصيل غاية.", reasons: [["فلسفة تصميم فريدة", "يبدأ كل حل بفهم عميق للمكان والأشخاص الذين يستخدمونه."], ["خبرة متعددة التخصصات", "تعمل العمارة والتصميم الداخلي والهندسة ضمن رؤية واحدة."], ["الجودة والخبرة", "يركز عملنا على الجودة ورضا العميل."], ["فريق محترف", "تقود المعرفة التقنية وإدارة المشاريع كل مرحلة."], ["التميز والابتكار", "نسعى إلى حلول عصرية ملائمة لبيئتها."]],
    processLabel: "منهج العمل", processTitle: "من الفكرة الأولى إلى التنفيذ.", process: [["الفكرة والموقع", "نفهم الحاجة والبيئة والفرص التي يقدمها الموقع."], ["التصميم", "نحول الفكرة إلى مخطط واضح وعملي."], ["الهندسة", "نضمن السلامة والجودة والتفاصيل التقنية."], ["البناء والإشراف", "ندير التنفيذ ونحافظ على جودة العمل."]],
    missionLabel: "مهمتنا", missionTitle: "تحديث التصميم والبناء.", missionBody: "تتمثل مهمة رغسان في تحديث التصميم والبناء من خلال حلول مستدامة وعالية الجودة وملائمة للبيئة. وتسعى الشركة إلى تحسين جودة التصميم ومعايير البناء وإنشاء مشاريع متينة وعصرية وجاهزة للمستقبل.",
    founderLabel: "المؤسس", founderTitle: "المهندس نور محمد علي", founderRole: "المؤسس · مهندس", founderBody: "يمتلك أكثر من 10 سنوات من الخبرة في البناء والهندسة، وقضى ما يقارب 6 سنوات في إحدى شركات البناء الرائدة. أدار ونفذ مشاريع إنشائية كبرى، ويتمتع بخبرة في الهندسة وإدارة المشاريع والبناء.", portrait: "صورة المؤسس غير متاحة",
    ctaTitle: "لنبدأ مشروعك بالطريقة الصحيحة.", ctaBody: "شاركنا احتياجاتك وسنناقش معك الاتجاه الأنسب لمشروع التصميم أو الهندسة أو البناء.", call: "اتصل بنا",
    contactLabel: "اتصل بنا", contactTitle: "اطلب استشارة.", contactBody: "حدثنا عن مشروعك. أكمل النموذج أو تواصل معنا مباشرة.", fields: { name: "الاسم", phone: "الهاتف", email: "البريد الإلكتروني", service: "الخدمة المطلوبة", description: "وصف المشروع" }, choose: "اختر خدمة", send: "إرسال الطلب", sending: "جارٍ الإرسال...", success: "تم استلام طلبك. سنتواصل معك.", error: "تعذر إرسال طلبك. يرجى المحاولة مرة أخرى.", required: "هذا الحقل مطلوب.", invalidEmail: "أدخل بريداً إلكترونياً صحيحاً.", info: "معلومات الاتصال", addressLabel: "العنوان", address: ["Waaberi Mall", "الطابق الثاني، الشقة 202", "حي وابري، أمام برج عدني", "مقديشو، الصومال"], footerBody: "تصميم وهندسة وبناء يجمع بين الجمال والوظيفة والمتانة.", footerNav: "التنقل", footerContact: "اتصل بنا", copyright: "جميع الحقوق محفوظة.", signature: "العمارة · الهندسة · البناء",
  },
} as const;

export function getCopy(language: Language): Copy { return translations[language] as Copy; }
