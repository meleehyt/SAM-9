import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, c as Gavel, i as Scale, l as FileText, n as TriangleAlert, o as Mail, r as Search, s as Landmark, t as X, u as ChartColumn } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BEl1awdh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	{
		id: "all",
		label: "الكل"
	},
	{
		id: "contract",
		label: "تعاقد وتسليم"
	},
	{
		id: "test",
		label: "فحوصات وأدلة"
	},
	{
		id: "mail",
		label: "مراسلات وتفاوض"
	},
	{
		id: "arb",
		label: "إجراءات التحكيم"
	}
];
var CATEGORY_META = {
	contract: {
		label: "تعاقد وتسليم",
		short: "تعاقد"
	},
	test: {
		label: "فحوصات وأدلة",
		short: "فحص"
	},
	mail: {
		label: "مراسلات وتفاوض",
		short: "مراسلة"
	},
	arb: {
		label: "إجراءات التحكيم",
		short: "تحكيم"
	}
};
var LEGAL_ISSUES = [
	{
		id: "privilege",
		n: "١",
		label: "امتياز التقاضي",
		hint: "مقبولية المرفق رقم 7 وسرية مراسلات المحامي والموكل"
	},
	{
		id: "inference",
		n: "٢",
		label: "القرينة السلبية",
		hint: "أثر حجب سجلات المعايرة والفحص دون حضور الطرف الآخر"
	},
	{
		id: "notice",
		n: "٣",
		label: "الفحص والإخطار",
		hint: "المادتان 38 و 39 من اتفاقية فيينا: مهلة الفحص وسقوط الحق"
	},
	{
		id: "mitigation",
		n: "٤",
		label: "التخفيف من الضرر",
		hint: "إعادة الضبط اليدوية والتعبئة الكاملة وعرض المعايرة المجاني"
	}
];
var CASE = {
	number: "SCCA-Arb-1016",
	venue: "المركز السعودي للتحكيم التجاري",
	seat: "الوادي",
	language: "العربية",
	law: "اتفاقية فيينا للبيع الدولي للبضائع 1980",
	lawShort: "CISG 1980",
	claimant: "شركة مؤنة للخدمات الغذائية",
	claimantShort: "مؤنة",
	respondent: "شركة أجرو ألجهزة التحكم",
	respondentShort: "أجرو",
	contractValue: "2,100,000",
	dateRange: "يناير 2025 — سبتمبر 2026",
	arbitrators: [
		{
			name: "جهاد نور الدين",
			role: "محكّم المحتكمة"
		},
		{
			name: "دانة الماجد",
			role: "محكّمة المحتكم ضدها"
		},
		{
			name: "د. عبدالعزيز جواد",
			role: "رئيس هيئة التحكيم"
		}
	],
	claims: [
		{
			label: "استبدال الأجهزة أو رد الثمن",
			amount: "2,100,000 دولار"
		},
		{
			label: "تعويض تلف القمح",
			amount: "12,000,000 دولار"
		},
		{
			label: "ربح فائت",
			amount: "3,900,000 دولار"
		}
	],
	claimsNote: "نحو 7.6 أضعاف قيمة العقد (باستثناء رد الثمن)",
	defenses: [
		"لا إخلال مزعوم بالأجهزة أو بالمعايرة",
		"استبعاد المرفق رقم 7 لحمايته بامتياز المحامي والموكل",
		"سقوط حق التمسك بعدم المطابقة: الفحص بعد 113 يوماً والإخطار بعد 7 أشهر و6 أيام (م. 38 و 39 فيينا)"
	]
};
var PHASES = [
	{
		id: "p1",
		title: "الخلفية وما قبل التعاقد",
		range: "يناير – يونيو 2025",
		events: [
			{
				id: "e01",
				date: "10 يناير 2025",
				category: "contract",
				key: false,
				title: "إطلاق برنامج المخزون الاستراتيجي",
				body: "وزارة التجارة والزراعة في مملكة الصحراء تطلق، إثر أزمة جفاف عالمية، برنامجاً لبناء مخزون قمح يكفي سنتين، وتشترط حدوداً قصوى للرطوبة وأجهزة إنذار مبكر.",
				issues: []
			},
			{
				id: "e02",
				date: "4 فبراير 2025",
				category: "mail",
				key: false,
				title: "لقاء الطرفين في مؤتمر الأمن الغذائي",
				body: "وفد «مؤنة» يلتقي «أجرو» على هامش المؤتمر الدولي للأمن الغذائي بجمهورية الألب؛ أجرو تعرض أجهزتها لقياس الرطوبة والأكسجين.",
				issues: []
			},
			{
				id: "e03",
				date: "20 فبراير 2025، 05:10ص",
				category: "mail",
				key: false,
				title: "أجرو تؤكد المطابقة وتقترح نموذجاً تجريبياً",
				body: "ترد أجرو مؤكدة قدرتها على توفير أجهزة مطابقة، وتقترح إرسال جهاز تجريبي مجاناً لتجربته 3 أشهر قبل التعاقد.",
				exhibit: "مرفق المحتكمة 1",
				issues: []
			},
			{
				id: "e04",
				date: "10 مارس – يونيو 2025 (3 أشهر)",
				category: "test",
				key: false,
				title: "تجربة الجهاز النموذجي",
				body: "تركيب وتشغيل الجهاز التجريبي في الصومعة رقم 12 تحت إشراف ليان الفارس؛ التجربة تنجح وتمهّد للتعاقد.",
				issues: []
			}
		]
	},
	{
		id: "p2",
		title: "توقيع عقد التوريد",
		range: "يوليو 2025",
		events: [{
			id: "e05",
			date: "1 يوليو 2025 (الثلاثاء)",
			category: "contract",
			key: true,
			title: "توقيع العقد",
			body: "توريد 50 جهاز رادار (80 جيجاهرتز) بمستشعرات رطوبة وأكسجين، بقيمة 2,100,000 دولار، تسليم أقصاه 1 أكتوبر 2025، والتركيب على عاتق «مؤنة». القانون الواجب التطبيق: اتفاقية فيينا CISG 1980. شرط تحكيم: SCCA، 3 محكّمين، بالعربية، مقره الوادي.",
			exhibit: "مرفق المحتكمة 2",
			issues: ["notice"]
		}, {
			id: "e06",
			date: "13 يوليو 2025",
			category: "contract",
			key: false,
			title: "توثيق جاهزية الصوامع",
			body: "فحص وتوثيق سلامة جميع صوامع التخزين وأنظمة التهوية استعداداً لاستقبال الأجهزة.",
			issues: []
		}]
	},
	{
		id: "p3",
		title: "الفحص الفني قبل الشحن",
		range: "سبتمبر 2025",
		events: [
			{
				id: "e07",
				date: "6 سبتمبر 2025، 05:10ص",
				category: "mail",
				key: false,
				title: "دعوة لحضور سحب العينات",
				body: "أجرو تدعو مؤنة لحضور الفحص بمصنعها في 8 سبتمبر؛ مهلة تصفها مؤنة بغير الكافية لترتيب السفر.",
				exhibit: "مرفق المحتكم ضدها 1",
				issues: ["inference"]
			},
			{
				id: "e08",
				date: "8 سبتمبر 2025",
				category: "test",
				key: true,
				title: "الفحص الأول — استُبعد لاحقاً من التقرير",
				body: "مكتب «الميزان» يفحص عينة من 5 وحدات في مصنع أجرو، بحضور مسؤول جودة أجرو فقط دون ممثلي مؤنة. تقرير الفحص النهائي يصف هذا الاختبار صراحة بـ«المستبعد».",
				issues: ["inference"]
			},
			{
				id: "e09",
				date: "15 سبتمبر 2025",
				category: "test",
				key: true,
				title: "إعادة سحب وفحص ثانٍ — هو المعتمد فعلياً",
				body: "إعادة سحب العينات وفحصها، مجدداً دون حضور مؤنة. نتيجة هذا الاختبار وحدها هي التي اعتُمدت في التقرير النهائي.",
				issues: ["inference"]
			},
			{
				id: "e10",
				date: "18 سبتمبر 2025",
				category: "test",
				key: false,
				title: "صدور تقرير الميزان النهائي",
				body: "تقرير رقم MZ-2025-0918-RAD يثبت مطابقة الوحدات الخمس بناءً على اختبار 15 سبتمبر فقط؛ يُسلَّم لمؤنة قبل الشحن.",
				issues: ["inference", "notice"]
			}
		]
	},
	{
		id: "p4",
		title: "التسليم والتركيب والتشغيل التجريبي",
		range: "أكتوبر 2025 – يناير 2026",
		events: [
			{
				id: "e11",
				date: "1 أكتوبر 2025",
				category: "contract",
				key: false,
				title: "التسليم الكامل",
				body: "مؤنة تستلم الشحنة كاملة (50 وحدة) في موعدها العقدي بمدينة الوادي؛ إيصال التسليم لا يسجل ملاحظات فنية لعدم فحص البضاعة وقت الاستلام.",
				exhibit: "مرفق المحتكم ضدها 4",
				issues: ["notice", "mitigation"]
			},
			{
				id: "e12",
				date: "1 أكتوبر – 20 نوفمبر 2025 (~50 يوماً)",
				category: "contract",
				key: false,
				title: "أعمال التركيب",
				body: "تركيب الأجهزة في كل الصوامع بإشراف سلطان السلطان. في الأسبوعين الأولين لوحظ تذبذب طفيف بقراءات 6 أجهزة، عولج بـ«إعادة الضبط» اليدوية دون إبلاغ أجرو أو توثيق مستقل.",
				issues: ["mitigation", "notice"]
			},
			{
				id: "e13",
				date: "21 نوفمبر 2025 – 21 يناير 2026 (شهران)",
				category: "test",
				key: false,
				title: "تعبئة تجريبية 25%",
				body: "تعبئة جزئية لاختبار أداء الأجهزة فعلياً؛ لا تُسجَّل أي قراءات متجاوزة أو إنذارات طوال الفترة.",
				issues: ["notice", "mitigation"]
			},
			{
				id: "e14",
				date: "22 يناير 2026",
				category: "test",
				key: true,
				title: "عينات عشوائية «سليمة» ثم تعبئة كاملة",
				body: "ليان الفارس تسحب عينات من كل صومعة؛ التحليل المخبري يؤكد المطابقة، فتقرر مؤنة تعبئة الصوامع 100%. هذا التاريخ يبعد 113 يوماً عن التسليم.",
				issues: ["notice", "mitigation"]
			}
		]
	},
	{
		id: "p5",
		title: "اكتشاف العيب",
		range: "أبريل – مايو 2026",
		events: [
			{
				id: "e15",
				date: "1 أبريل 2026",
				category: "test",
				key: true,
				title: "الفحص الدوري يكشف ارتفاع الرطوبة",
				body: "الفحص الروتيني الداخلي (بإشراف سلطان السلطان) يكشف رطوبة تتجاوز الحد المسموح في جزء من المخزون، رغم أن الأجهزة عرضت طوال الفترة قراءات طبيعية مضلِّلة دون أي إنذار مبكر.",
				issues: ["notice"]
			},
			{
				id: "e16",
				date: "5 أبريل 2026",
				category: "test",
				key: false,
				title: "تكليف شركة «قياس» الخبيرة",
				body: "مؤنة تكلّف بيت خبرة مستقل بفحص فني شامل للأجهزة والمستشعرات.",
				issues: ["notice"]
			},
			{
				id: "e17",
				date: "3 مايو 2026",
				category: "test",
				key: true,
				title: "تقرير «قياس»: عيب معايرة وبرمجيات",
				body: "التقرير (QTE-TR-2026-A0164) يخلص إلى انحراف يتجاوز حدود الخطأ المسموح، ناتج عن معايرة المصنع والبرمجيات المدمجة، ولا يظهر إلا بعد تشغيل متواصل بحمولة كاملة. خطورة: مرتفعة.",
				exhibit: "مرفق المحتكمة 4",
				issues: ["notice"]
			},
			{
				id: "e18",
				date: "7 مايو 2026، 03:30م",
				category: "mail",
				key: true,
				title: "إخطار أجرو رسمياً بالعيب",
				body: "مؤنة تخطر أجرو كتابةً مطالبةً باستبدال الأجهزة أو رد الثمن مع التعويض، وترفق تقرير «قياس». أجرو تماطل في الرد ثم تنكر وجود أي عيب. يبعد هذا الإخطار 7 أشهر و6 أيام عن تاريخ التسليم.",
				exhibit: "مرفق المحتكمة 5",
				issues: ["notice"]
			}
		]
	},
	{
		id: "p6",
		title: "محاولات التسوية الودية",
		range: "مايو – يوليو 2026",
		events: [
			{
				id: "e19",
				date: "23 مايو 2026، 04:30م",
				category: "mail",
				key: false,
				title: "عرض فحص وإعادة معايرة مجاني",
				body: "أجرو تقترح إرسال فريق فني لفحص الأجهزة وإعادة معايرتها دون تكلفة إضافية.",
				exhibit: "مرفق المحتكم ضدها 5",
				issues: ["mitigation"]
			},
			{
				id: "e20",
				date: "20 يونيو 2026، 11:30ص",
				category: "mail",
				key: false,
				title: "طلب تقارير الجودة والمعايرة",
				body: "مؤنة تطلب تقارير الآيزو وسجلات المعايرة وكل الفحوصات منذ 2024 (تُوسَّع لاحقاً إلى 2023) لتقييم إمكانية التسوية.",
				issues: ["inference", "mitigation"]
			},
			{
				id: "e21",
				date: "21 يونيو 2026، 02:47م",
				category: "mail",
				key: true,
				title: "بريد داخلي متميز من رئيسة أجرو لمحاميها",
				body: "سارة آدم تطلب من محاميها سعود الأحمد تحليلاً قانونياً للمخاطر، وتُقرّ بأن ثمة احتمال 90% أن الأجهزة غير مطابقة فعلاً.",
				issues: ["privilege", "inference"]
			},
			{
				id: "e22",
				date: "23 يونيو 2026، 01:37م",
				category: "mail",
				key: true,
				title: "رد المحامي بمذكرة متميزة (Privileged)",
				body: "سعود الأحمد يرسل تحليلاً مفصلاً للمسؤولية والتعويضات واستراتيجية التفاوض، بختم «سري - امتياز محامٍ وموكل».",
				issues: ["privilege"]
			},
			{
				id: "e23",
				date: "25 يونيو 2026، 09:00ص",
				category: "mail",
				key: true,
				title: "تسريب المراسلة المتميزة عبر رابط التسوية",
				body: "أجرو ترد على طلب المستندات برابط يُفترض قصره على مستندات فحص سبتمبر 2025، لكنه يتضمّن، على ما يبدو خطأً، سلسلة البريد المتميزة مع المحامي. مؤنة تُحمّلها وتستند إليها كإقرار بالمسؤولية في طلب التحكيم.",
				exhibit: "المرفق رقم 7",
				issues: ["privilege", "inference"]
			}
		]
	},
	{
		id: "p7",
		title: "تقديم طلب التحكيم",
		range: "يوليو – أغسطس 2026",
		events: [{
			id: "e24",
			date: "15 يوليو 2026",
			category: "arb",
			key: false,
			title: "إشعار اللجوء إلى التحكيم",
			body: "بعد فشل كل مساعي التسوية، مؤنة تخطر أجرو رسمياً باللجوء للتحكيم إعمالاً لشرط تسوية المنازعات في العقد.",
			issues: []
		}, {
			id: "e25",
			date: "3 أغسطس 2026",
			category: "arb",
			key: true,
			title: "تقديم طلب التحكيم لدى SCCA",
			body: "مؤنة تقدّم طلب تحكيم ضد أجرو للمركز السعودي للتحكيم التجاري + طلباً عاجلاً بتقديم مستندات، ومرشحة جهاد نور الدين محكّماً. المطالبات: استبدال الأجهزة أو رد 2.1 مليون دولار + 12 مليون تعويض تلف القمح + 3.9 مليون ربح فائت.",
			issues: ["privilege"]
		}]
	},
	{
		id: "p8",
		title: "تشكيل هيئة التحكيم والأمر الإجرائي الأول",
		range: "أغسطس – سبتمبر 2026",
		events: [
			{
				id: "e26",
				date: "8 أغسطس 2026",
				category: "arb",
				key: false,
				title: "تسجيل القضية وبدء الإجراءات",
				body: "المركز يسجل القضية رقم SCCA-Arb-1016؛ هذا التاريخ رسمياً هو بدء الإجراءات، ومنه تُحسب مهلة الرد 30 يوماً.",
				issues: []
			},
			{
				id: "e27",
				date: "15 أغسطس 2026",
				category: "arb",
				key: false,
				title: "موعد إفصاح تعارض المصالح",
				body: "آخر أجل لتقديم قائمة الإفصاح السرية عن تعارض المصالح للمركز.",
				issues: []
			},
			{
				id: "e28",
				date: "16 – 17 أغسطس 2026",
				category: "arb",
				key: false,
				title: "تعيين محكّم مؤنة",
				body: "جهاد نور الدين يوقّع إقرار القبول والاستقلالية (16/8)؛ المركز يؤكد تعيينه محكّماً عن مؤنة (17/8).",
				issues: []
			},
			{
				id: "e29",
				date: "26 أغسطس 2026",
				category: "arb",
				key: false,
				title: "شهادة كريم داوود، شاهد أجرو",
				body: "مسؤول ضمان الجودة لدى أجرو يحرّر شهادته الكتابية في مدينة السلام، جمهورية الألب.",
				issues: ["inference"]
			},
			{
				id: "e30",
				date: "2 سبتمبر 2026",
				category: "arb",
				key: true,
				title: "الرد على طلب التحكيم",
				body: "أجرو ترفض كل إخلال مزعوم، وتدفع باستبعاد «المرفق رقم 7» لحمايته بامتياز المحامي والموكل ووصوله خطأً أثناء تفاوض تسوية، وبسقوط حق مؤنة في التمسك بعدم المطابقة، إذ جرى الفحص الفعلي بعد 113 يوماً والإخطار بعد 7 أشهر و6 أيام، طبقاً للمادتين 38 و39 من فيينا. ترشّح دانة الماجد محكّمة.",
				issues: [
					"privilege",
					"notice",
					"mitigation"
				]
			},
			{
				id: "e31",
				date: "8 سبتمبر 2026",
				category: "arb",
				key: false,
				title: "الموعد النظامي لتقديم الرد",
				body: "آخر موعد نظامي لرد أجرو وفق قواعد المركز؛ الرد الفعلي قُدّم مبكراً بتاريخ 2 سبتمبر.",
				issues: []
			},
			{
				id: "e32",
				date: "10 – 11 سبتمبر 2026",
				category: "arb",
				key: false,
				title: "تعيين محكّمة أجرو",
				body: "دانة الماجد توقّع إقرارها (10/9)؛ المركز يؤكد تعيينها (11/9).",
				issues: []
			},
			{
				id: "e33",
				date: "20 – 21 سبتمبر 2026",
				category: "arb",
				key: false,
				title: "تعيين رئيس هيئة التحكيم",
				body: "د. عبدالعزيز جواد يوقّع إقراره (20/9)؛ المركز يؤكد تعيينه رئيساً للهيئة المكتملة (21/9).",
				issues: []
			},
			{
				id: "e34",
				date: "30 سبتمبر 2026",
				category: "arb",
				key: true,
				title: "الجلسة الإجرائية الأولى + الأمر الإجرائي رقم 1",
				body: "الهيئة تجتمع وتعتمد الشروط المرجعية، وتُجمّد الاستناد لـ«المرفق رقم 7» لحين الفصل في مقبوليته، وتكلّف الطرفين ببحث 4 مسائل في أول مذكرة: امتياز التقاضي، القرينة السلبية، الفحص والإخطار وفق فيينا، والتخفيف من الضرر.",
				issues: [
					"privilege",
					"inference",
					"notice",
					"mitigation"
				]
			}
		]
	}
];
var ALL_EVENTS = PHASES.flatMap((p) => p.events);
var EVENT_COUNT = ALL_EVENTS.length;
var KEY_COUNT = ALL_EVENTS.filter((e) => e.key).length;
var PHASE_COUNT = PHASES.length;
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-forest text-forest-fg hover:opacity-90",
			outline: "bg-paper-elevated text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			ghost: "bg-transparent text-ink-muted hover:bg-paper-sunken hover:text-ink",
			rust: "bg-rust-soft text-rust hover:bg-rust hover:text-rust-fg"
		},
		size: {
			sm: "h-9 rounded-full px-3.5 text-sm",
			md: "h-11 rounded-full px-4 text-sm",
			icon: "size-11 rounded-full"
		}
	},
	defaultVariants: {
		variant: "outline",
		size: "sm"
	}
});
var Button = (0, import_react.forwardRef)(function Button({ className, variant, size, type = "button", ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref,
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
});
var CAT_ICON = {
	contract: FileText,
	test: ChartColumn,
	mail: Mail,
	arb: Gavel
};
var CAT_DOT = {
	contract: "bg-cat-contract",
	test: "bg-cat-test",
	mail: "bg-cat-mail",
	arb: "bg-cat-arb"
};
function matches(event, category, keyOnly, issue, query) {
	if (category !== "all" && event.category !== category) return false;
	if (keyOnly && !event.key) return false;
	if (issue && !event.issues.includes(issue)) return false;
	if (query) {
		if (!`${event.title} ${event.body} ${event.date} ${event.exhibit ?? ""}`.includes(query.trim())) return false;
	}
	return true;
}
function scrollToId(id) {
	const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	document.getElementById(id)?.scrollIntoView({
		behavior: reduce ? "auto" : "smooth",
		block: "start"
	});
}
function CaseApp() {
	const [category, setCategory] = (0, import_react.useState)("all");
	const [keyOnly, setKeyOnly] = (0, import_react.useState)(false);
	const [issue, setIssue] = (0, import_react.useState)(null);
	const [query, setQuery] = (0, import_react.useState)("");
	const [activePhase, setActivePhase] = (0, import_react.useState)(PHASES[0]?.id ?? "p1");
	const filteredPhases = (0, import_react.useMemo)(() => {
		return PHASES.map((phase) => ({
			...phase,
			events: phase.events.filter((e) => matches(e, category, keyOnly, issue, query))
		})).filter((phase) => phase.events.length > 0);
	}, [
		category,
		keyOnly,
		issue,
		query
	]);
	const visibleCount = filteredPhases.reduce((n, p) => n + p.events.length, 0);
	const filtered = category !== "all" || keyOnly || issue !== null || query.trim().length > 0;
	(0, import_react.useEffect)(() => {
		const nodes = filteredPhases.map((p) => document.getElementById(p.id)).filter((el) => Boolean(el));
		if (nodes.length === 0) return;
		const io = new IntersectionObserver((entries) => {
			const top = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (top?.target.id) setActivePhase(top.target.id);
		}, {
			rootMargin: "-15% 0px -65% 0px",
			threshold: [
				.1,
				.4,
				.8
			]
		});
		nodes.forEach((n) => io.observe(n));
		return () => io.disconnect();
	}, [filteredPhases]);
	function toggleIssue(id) {
		setIssue((cur) => cur === id ? null : id);
		window.requestAnimationFrame(() => scrollToId("timeline"));
	}
	function clearFilters() {
		setCategory("all");
		setKeyOnly(false);
		setIssue(null);
		setQuery("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#timeline",
				className: "sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-forest-fg",
				children: "انتقل إلى الخط الزمني"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Masthead, {
				issue,
				onToggleIssue: toggleIssue
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "timeline",
				className: "scroll-mt-4 pb-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sticky top-0 z-30 border-b border-stone/80 bg-paper/90 backdrop-blur-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-5xl flex-col gap-2 px-4 py-2.5 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-w-0 flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhaseRail, {
									phases: PHASES,
									activeId: activePhase,
									visibleIds: new Set(filteredPhases.map((p) => p.id)),
									onJump: (id) => {
										setActivePhase(id);
										scrollToId(id);
									}
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "relative hidden w-56 shrink-0 lg:block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "بحث في الأحداث"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
										className: "pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-ink-subtle",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "search",
										value: query,
										onChange: (e) => setQuery(e.target.value),
										placeholder: "بحث…",
										className: "h-9 w-full rounded-full bg-paper-elevated pe-3 ps-9 text-sm text-ink shadow-border placeholder:text-ink-subtle focus:outline-2 focus:outline-offset-2 focus:outline-forest"
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBar, {
							category,
							keyOnly,
							query,
							issue,
							visibleCount,
							filtered,
							activeTitle: PHASES.find((p) => p.id === activePhase)?.title,
							onCategory: setCategory,
							onKeyOnly: () => setKeyOnly((v) => !v),
							onQuery: setQuery,
							onClearIssue: () => setIssue(null),
							onClear: clearFilters
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-5xl px-4 pt-10 sm:px-6",
					children: filteredPhases.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { onClear: clearFilters }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-12",
						children: filteredPhases.map((phase, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhaseBlock, {
							phase,
							index: indexOfPhase(phase.id),
							delay: i < 3
						}, phase.id))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-stone px-4 py-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs tracking-wide text-ink-subtle",
					children: [
						CASE.number,
						" · ",
						CASE.venue,
						" · مقر التحكيم: ",
						CASE.seat
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-ink-muted",
					children: "ملف داخلي للأحداث الموثقة — لا يُعد حكماً أو إقراراً بالوقائع المتنازع عليها."
				})]
			})
		]
	});
}
function indexOfPhase(id) {
	return PHASES.findIndex((p) => p.id === id);
}
function Masthead({ issue, onToggleIssue }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 start-0 w-1 bg-forest" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 sm:pt-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal flex flex-wrap items-center justify-between gap-3 text-xs font-medium text-ink-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, {
							className: "size-3.5",
							"aria-hidden": "true"
						}), CASE.venue]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono tabular-nums tracking-wide",
						children: CASE.number
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "reveal reveal-d1 mt-8 text-center text-xs font-medium tracking-wide text-ink-subtle",
					children: "المحتكمة ضد المحتكم ضدها"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "reveal reveal-d2 mx-auto mt-3 max-w-3xl text-center font-display text-3xl font-semibold leading-snug tracking-tight text-ink sm:text-4xl",
					children: [
						CASE.claimant,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-xl font-medium text-forest sm:text-2xl",
							children: "ضد"
						}),
						CASE.respondent
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "reveal reveal-d3 mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-ink-muted",
					children: [
						"خط زمني تفاعلي لأحداث النزاع وإجراءات التحكيم، من ",
						CASE.dateRange,
						". ",
						EVENT_COUNT,
						" حدثاً موثقاً على ",
						PHASE_COUNT,
						" مراحل، قابلة للتصفية حسب الفئة أو المسائل الجوهرية."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "reveal reveal-d4 mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "أحداث موثّقة",
							value: String(EVENT_COUNT)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "مراحل",
							value: String(PHASE_COUNT)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "مسائل جوهرية",
							value: String(KEY_COUNT)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "قيمة العقد",
							value: "٢٫١ م$"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal reveal-d5 mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-ink-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaChip, {
							icon: MapPin,
							text: `المقر: ${CASE.seat}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaChip, {
							icon: Scale,
							text: `القانون: ${CASE.lawShort}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaChip, {
							icon: Gavel,
							text: "هيئة ثلاثية · العربية"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-4 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartyCard, {
						kicker: "المحتكمة",
						name: CASE.claimant,
						arb: CASE.arbitrators[0]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartyCard, {
						kicker: "المحتكم ضدها",
						name: CASE.respondent,
						arb: CASE.arbitrators[1]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-center text-sm text-ink-muted",
					children: ["رئيس الهيئة: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-ink",
						children: CASE.arbitrators[2]?.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-paper-elevated p-5 shadow-border sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold text-ink",
								children: "طلبات المحتكمة"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3",
								children: CASE.claims.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-baseline justify-between gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-ink-muted",
										children: c.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium tabular-nums text-ink",
										children: c.amount
									})]
								}, c.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs text-ink-subtle",
								children: CASE.claimsNote
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-paper-elevated p-5 shadow-border sm:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold text-ink",
							children: "دفوع المحتكم ضدها"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: CASE.defenses.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-sm leading-relaxed text-ink-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-forest" }), d]
							}, d))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold text-ink",
							children: "مسائل الأمر الإجرائي رقم 1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden text-xs text-ink-subtle sm:block",
							children: "اضغط لتصفية الخط الزمني"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: LEGAL_ISSUES.map((item) => {
							const on = issue === item.id;
							const count = ALL_EVENTS.filter((e) => e.issues.includes(item.id)).length;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onToggleIssue(item.id),
								"aria-pressed": on,
								className: cn("min-h-11 rounded-xl p-4 text-start shadow-border transition-[background-color,color,box-shadow,transform] duration-150 ease-out active:scale-[0.98] sm:p-5", on ? "bg-forest text-forest-fg shadow-none" : "bg-paper-elevated text-ink hover:shadow-border-hover"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("font-display text-lg font-semibold", on ? "text-forest-fg" : "text-forest"),
											children: item.n
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: cn("text-xs tabular-nums", on ? "text-forest-fg/70" : "text-ink-subtle"),
											children: [count, " أحداث"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 text-base font-semibold",
										children: item.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: cn("mt-1 text-sm leading-relaxed", on ? "text-forest-fg/80" : "text-ink-muted"),
										children: item.hint
									})
								]
							}, item.id);
						})
					})]
				})
			]
		})]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-paper-elevated px-3 py-3 text-center shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "font-display text-2xl font-semibold tabular-nums text-ink",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "mt-1 text-xs text-ink-subtle",
			children: label
		})]
	});
}
function MetaChip({ icon: Icon, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 rounded-full bg-paper-sunken px-3 py-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-3.5",
			"aria-hidden": "true"
		}), text]
	});
}
function PartyCard({ kicker, name, arb }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl bg-paper-elevated p-5 shadow-border sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-forest",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-xl font-semibold leading-snug text-ink",
				children: name
			}),
			arb ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-ink-muted",
				children: [
					arb.role,
					": ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-ink",
						children: arb.name
					})
				]
			}) : null
		]
	});
}
function PhaseRail({ phases, activeId, visibleIds, onJump }) {
	const active = phases.find((p) => p.id === activeId) ?? phases[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		"aria-label": "مراحل النزاع",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex items-center",
			children: phases.map((phase, i) => {
				const on = activeId === phase.id;
				const available = visibleIds.has(phase.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("h-px min-w-2 flex-1", available ? "bg-stone-strong" : "bg-stone"),
					"aria-hidden": "true"
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !available,
					onClick: () => onJump(phase.id),
					"aria-current": on ? "step" : void 0,
					"aria-label": `${phase.title} — ${phase.range}`,
					className: cn("relative flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-xs font-medium tabular-nums transition-colors duration-150", "after:absolute after:-inset-2", on ? "bg-forest text-forest-fg" : available ? "bg-paper-sunken text-ink-muted hover:bg-forest-soft hover:text-forest" : "bg-paper-sunken text-ink-subtle opacity-40"),
					children: i + 1
				})] }, phase.id);
			})
		}), active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "sr-only",
			children: [
				active.title,
				" — ",
				active.range
			]
		}) : null]
	});
}
function FilterBar({ category, keyOnly, query, issue, visibleCount, filtered, activeTitle, onCategory, onKeyOnly, onQuery, onClearIssue, onClear }) {
	const issueMeta = LEGAL_ISSUES.find((i) => i.id === issue);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2 lg:flex-row lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "group",
				"aria-label": "تصفية حسب الفئة",
				className: "no-scrollbar -mx-1 flex flex-nowrap gap-1.5 overflow-x-auto px-1",
				children: [CATEGORIES.map((c) => {
					const on = category === c.id;
					const Icon = c.id === "all" ? null : CAT_ICON[c.id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: on ? "primary" : "ghost",
						size: "sm",
						"aria-pressed": on,
						onClick: () => onCategory(c.id),
						className: cn("shrink-0", !on && "border border-stone"),
						children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-3.5",
							"aria-hidden": "true"
						}) : null, c.label]
					}, c.id);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: keyOnly ? "rust" : "ghost",
					size: "sm",
					"aria-pressed": keyOnly,
					onClick: onKeyOnly,
					className: cn("shrink-0", !keyOnly && "border border-stone"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
						className: "size-3.5",
						"aria-hidden": "true"
					}), "مسائل جوهرية"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "relative block min-w-0 lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "بحث في الأحداث"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-ink-subtle",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "search",
						value: query,
						onChange: (e) => onQuery(e.target.value),
						placeholder: "ابحث في الأحداث والمرفقات…",
						className: "h-11 w-full rounded-full bg-paper-elevated pe-4 ps-10 text-sm text-ink shadow-border placeholder:text-ink-subtle focus:outline-2 focus:outline-offset-2 focus:outline-forest"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-2 text-xs text-ink-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"عرض ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium tabular-nums text-ink",
					children: visibleCount
				}),
				" من",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums",
					children: EVENT_COUNT
				}),
				activeTitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					" ",
					"· ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink",
						children: activeTitle
					})
				] }) : null,
				issueMeta ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					" ",
					"· ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-forest",
						children: issueMeta.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClearIssue,
						className: "ms-1 inline-flex size-6 items-center justify-center rounded-full hover:bg-paper-sunken",
						"aria-label": "إلغاء تصفية المسألة",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
					})
				] }) : null
			] }), filtered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClear,
				className: "font-medium text-forest hover:underline",
				children: "مسح التصفية"
			}) : null]
		})]
	});
}
function PhaseBlock({ phase, index, delay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: phase.id,
		className: cn("scroll-mt-28", delay && "reveal"),
		style: delay ? { animationDelay: `${index * 40}ms` } : void 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-6 flex items-baseline justify-between gap-3 border-b border-stone pb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs font-medium tabular-nums text-forest",
				children: ["المرحلة ", index + 1]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-2xl font-semibold text-ink",
				children: phase.title
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "shrink-0 text-sm text-ink-subtle",
				children: phase.range
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "relative flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute start-4 top-2 bottom-2 w-px bg-stone",
				"aria-hidden": "true"
			}), phase.events.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventRow, { event }, event.id))]
		})]
	});
}
function EventRow({ event }) {
	const Icon = CAT_ICON[event.category];
	const cat = CATEGORY_META[event.category];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "relative flex gap-4 pb-8 last:pb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("relative z-10 mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full", event.key ? "bg-rust text-rust-fg" : "bg-forest-soft text-forest"),
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: cn("min-w-0 flex-1 rounded-xl bg-paper-elevated p-4 shadow-border transition-shadow duration-150 sm:p-5", event.key && "ring-1 ring-rust/40"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
							className: "text-xs font-medium text-ink-muted",
							children: event.date
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 text-xs text-ink-subtle",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", CAT_DOT[event.category]) }), cat.short]
						}),
						event.key ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-rust-soft px-2 py-0.5 text-xs font-medium text-rust",
							children: "مسألة جوهرية"
						}) : null,
						event.exhibit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-paper-sunken px-2 py-0.5 text-xs text-ink-muted",
							children: event.exhibit
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-base font-semibold leading-snug text-ink",
					children: event.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-ink-muted",
					children: event.body
				}),
				event.issues.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-wrap gap-1.5",
					children: event.issues.map((id) => {
						const meta = LEGAL_ISSUES.find((i) => i.id === id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full border border-stone px-2 py-0.5 text-xs text-ink-subtle",
							children: meta?.label
						}, id);
					})
				}) : null
			]
		})]
	});
}
function EmptyState({ onClear }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-paper-elevated px-6 py-16 text-center shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl font-semibold text-ink",
				children: "لا توجد أحداث مطابقة"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-ink-muted",
				children: "جرّب فئة أخرى أو امسح كلمات البحث."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "primary",
				className: "mt-6",
				onClick: onClear,
				children: "مسح التصفية"
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseApp, {});
}
//#endregion
export { Home as component };
