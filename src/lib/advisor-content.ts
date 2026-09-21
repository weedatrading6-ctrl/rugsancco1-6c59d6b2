import type { Language } from "./rugsan-content";

export const advisorCopy = {
  so: {
    label: "LA-TALIYE AI AH",
    title: "Sharax baahidaada, hel adeegga kugu habboon.",
    body: "Qor waxa aad qorsheyneyso — guri, dhisme ganacsi, dib-u-cusboonaysiin ama qeybin gudaha ah — la-taliyahayagu wuxuu kuu soo jeedin doonaa adeegga Rugsan ee ugu habboon iyo talaabooyinka xiga.",
    placeholder: "Tusaale: Waxaan qorsheynayaa guri laba dabaq ah oo Muqdisho ah, waxaan u baahanahay naqshad iyo kormeer.",
    submit: "HEL TALO",
    loading: "WAA LA FALANQEYNAYAA...",
    again: "DIB U BILOW",
    resultLabel: "ADEEGGA LAGU TALIYAY",
    stepsLabel: "TALAABOOYINKA XIGA",
    questionLabel: "SU'AAL AAN KU WEYDIINEYNO",
    contactCta: "CODSO LA-TASHI",
    error: "Talada lama soo saari karin. Fadlan dib isku day.",
    short: "Fadlan sharax mashruucaaga ugu yaraan 15 xaraf.",
    note: "Talooyinkan waa hagitaan guud, ma aha qiimo ama heshiis.",
  },
  en: {
    label: "AI ADVISOR",
    title: "Describe your need, get the right service.",
    body: "Tell us what you are planning — a home, a commercial building, a renovation or an interior fit-out — and our advisor will suggest the most relevant Rugsan service with tailored next steps.",
    placeholder: "Example: I am planning a two-storey family home in Mogadishu and need design plus site supervision.",
    submit: "GET GUIDANCE",
    loading: "ANALYSING...",
    again: "START OVER",
    resultLabel: "RECOMMENDED SERVICE",
    stepsLabel: "NEXT STEPS",
    questionLabel: "A QUESTION WE WOULD ASK",
    contactCta: "REQUEST A CONSULTATION",
    error: "The guidance could not be generated. Please try again.",
    short: "Please describe your project in at least 15 characters.",
    note: "This guidance is general direction only, not a quote or agreement.",
  },
  ar: {
    label: "المستشار الذكي",
    title: "صف احتياجك، واحصل على الخدمة المناسبة.",
    body: "أخبرنا بما تخطط له — منزل، مبنى تجاري، تجديد أو تجهيز داخلي — وسيقترح المستشار الخدمة الأنسب من رقصان مع خطوات تالية مخصصة.",
    placeholder: "مثال: أخطط لبناء منزل من طابقين في مقديشو وأحتاج إلى التصميم والإشراف.",
    submit: "احصل على الإرشاد",
    loading: "جارٍ التحليل...",
    again: "ابدأ من جديد",
    resultLabel: "الخدمة الموصى بها",
    stepsLabel: "الخطوات التالية",
    questionLabel: "سؤال سنطرحه عليك",
    contactCta: "اطلب استشارة",
    error: "تعذر إنشاء الإرشاد. يرجى المحاولة مرة أخرى.",
    short: "يرجى وصف مشروعك بما لا يقل عن 15 حرفًا.",
    note: "هذا الإرشاد توجيه عام فقط، وليس عرض سعر أو اتفاقًا.",
  },
} as const;

export function getAdvisorCopy(language: Language) {
  return advisorCopy[language];
}
