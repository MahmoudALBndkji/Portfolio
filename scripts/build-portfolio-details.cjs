/**
 * Regenerates assets/data/portfolio-details.json from this file.
 * Run: node scripts/build-portfolio-details.cjs
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "assets", "data");
const outFile = path.join(outDir, "portfolio-details.json");

const portfolioDetails = {
  al_arjawi: {
    metaTitle: "Al-Arjawi ERP Details",
    metaDescription:
      "Production ERP for Al-Arjawi, a spices and za'atar manufacturer and distributor, covering the full cycle from raw material to the delivered product in one responsive Arabic / English web app.",
    metaKeywords:
      "Web Application, ERP, Angular Application, .NET Application, Al-Arjawi ERP, Manufacturing ERP, Inventory Management, Point of Sale, Distribution",
    favicon: "assets/img/logo/alArjawi.png",
    breadcrumbLabel: "Al-Arjawi ERP",
    pageHeading: "Al-Arjawi ERP Details",
    category: "Web Application",
    projectDate: "6 Aug, 2026 ➡️ 4 Oct, 2026",
    descriptionHtml:
      "A production ERP for Al-Arjawi, a spices and za'atar manufacturer and distributor, built around one question: can this customer order be fulfilled — from stock, by transfer, or by manufacturing?<br> It follows the whole cycle from raw material to the delivered product: material receipts and warehouse balances, bills of material and production orders, customer orders with availability checks, transfers between sites, van sales for field reps, point of sale with daily closing, attendance & payroll, and 25+ operational reports with Excel export and print.<br> One responsive Arabic / English web app that works from phone to desktop, with role-based permissions and an audit trail of who added, edited, approved or cancelled every document.",
    ar: {
      name: "نظام العرجاوي ERP",
      metaDescription:
        "نظام ERP إنتاجي لشركة العرجاوي لتصنيع وتوزيع البهارات والزعتر، يغطي الدورة كاملة من المادة الخام حتى تسليم المنتج في تطبيق ويب متجاوب واحد بالعربية والإنجليزية.",
      descriptionHtml:
        "نظام ERP إنتاجي لشركة العرجاوي لتصنيع وتوزيع البهارات والزعتر، مبني حول سؤال واحد: هل يمكن تلبية طلب هذا العميل من المخزون، أو بالتحويل، أو بالتصنيع؟<br> يتابع الدورة كاملة من المادة الخام حتى تسليم المنتج: استلام المواد وأرصدة المستودعات، وقوائم المواد وأوامر الإنتاج، وطلبات العملاء مع التحقق من التوفر، والتحويلات بين المواقع، والبيع المتنقل لمندوبي المبيعات، ونقطة البيع مع الإغلاق اليومي، والحضور والرواتب، وأكثر من 25 تقريرًا تشغيليًا مع التصدير إلى Excel والطباعة.<br> تطبيق ويب متجاوب واحد بالعربية والإنجليزية يعمل من الجوال حتى سطح المكتب، مع صلاحيات حسب الأدوار وسجل تدقيق يبيّن من أضاف كل مستند أو عدّله أو اعتمده أو ألغاه.",
    },
    technologies: [
      "Angular 21 + PrimeNG",
      ".NET 10 Web API",
      "Entity Framework Core + PostgreSQL",
      "SignalR For Real-Time Notifications",
      "JWT Authentication & Role-Based Permissions",
      "Localization : Arabic & English (RTL)",
      "xUnit Unit & Integration Tests",
    ],
    technologiesTitle: "Languages and Technologies used",
    gallery: [
      {
        title: "Login Page",
        src: "assets/img/portfolio/alArjawi/2_Login_Page.jpg",
        alt: "Login Page",
      },
      {
        title: "Point of Sale Page",
        src: "assets/img/portfolio/alArjawi/3_POS_Sale_Page.jpg",
        alt: "Point of Sale Page",
      },
      {
        title: "Production & Customer Orders Pages",
        src: "assets/img/portfolio/alArjawi/4_Production_and_Customer_Orders_Pages.jpg",
        alt: "Production & Customer Orders Pages",
      },
      {
        title: "Stock Balances & Transfer Orders Pages",
        src: "assets/img/portfolio/alArjawi/5_Stock_Balances_and_Transfer_Orders_Pages.jpg",
        alt: "Stock Balances & Transfer Orders Pages",
      },
      {
        title: "Mobile Dashboard & Van Sale Pages",
        src: "assets/img/portfolio/alArjawi/6_Mobile_Dashboard_and_Van_Sale_Pages.jpg",
        alt: "Mobile Dashboard & Van Sale Pages",
      },
      {
        title: "Mobile Van Stock & Production Orders Pages",
        src: "assets/img/portfolio/alArjawi/7_Mobile_Van_Stock_and_Production_Pages.jpg",
        alt: "Mobile Van Stock & Production Orders Pages",
      },
    ],
  },

  alsafa_exchange: {
    metaTitle: "Alsafa Exchange Details",
    metaDescription:
      " AlSafa Exchange mobile enabling secure authentication, seamless fund transfers via intermediary banks, transaction history tracking, account management, and advanced data security with encryption and verification.",
    metaKeywords:
      "Mobile Application, Flutter Application, Alsafa Exchange Application, Alsafa Exchange App",
    favicon: "assets/img/logo/mainPage.png",
    breadcrumbLabel: "Alsafa Exchange",
    pageHeading: "Alsafa Exchange Details",
    category: "Mobile Application",
    projectDate: "8 Oct, 2024 ➡️ 20 Mar, 2025",
    descriptionHtml:
      "AlSafa Exchange mobile enabling secure authentication, seamless fund transfers via intermediary banks, transaction history tracking, account management, and advanced data security with encryption and verification.",
    ar: {
      name: "Alsafa Exchange",
      descriptionHtml:
        "تطبيق AlSafa Exchange للموبايل يوفّر مصادقة آمنة، وتحويلات مالية سلسة عبر بنوك وسيطة، وتتبّع سجل المعاملات، وإدارة الحساب، مع حماية متقدمة للبيانات بالتشفير والتحقق.",
    },
    storeButtons: [
      {
        variant: "apple",
        href: "https://apps.apple.com/us/app/alsafa-exchange/id6739005056",
        subtitle: "Download on the",
        title: "App Store",
      },
      {
        variant: "google",
        href: "https://play.google.com/store/apps/details?id=com.exchange_app.safa",
        subtitle: "Get It On",
        title: "Google Play",
      },
    ],
    technologies: [
      "Flutter",
      "Dealing with webView",
      "State Management : Bloc",
      "Firebase Cloud Messaging For Notification",
    ],
    technologiesTitle: "Languages and Technologies used",
    gallery: [
      {
        title: "Authentication Page",
        src: "assets/img/portfolio/alsafaExchange/2_Auth_Screen.png",
        alt: "Authentication Page",
      },
      {
        title: "Home Page & Transfer Money Page",
        src: "assets/img/portfolio/alsafaExchange/3_Home_Screen_and_Transfer_Screen.png",
        alt: "Home Page & Transfer Money Page",
      },
    ],
  },

  asset_management: {
    metaTitle: "Asset Management Details",
    metaDescription:
      " Application for managing company assets that shows the condition of the asset and the stages it has gone through, Attachments can also be added to the asset to photograph the problem if it is not working, or photograph the asset while it is working, or document any process performed on the asset.",
    metaKeywords:
      "Mobile Application, Flutter Application, Asset Management Application, Asset Management App",
    favicon: "assets/img/logo/mainPage.png",
    breadcrumbLabel: "Asset Management",
    pageHeading: "Asset Management Details",
    category: "Mobile Application",
    projectDate: "8 Mar, 2024 ➡️ 17 Jun, 2024",
    descriptionHtml:
      "Application for managing company assets that shows the condition of the asset and the stages it has gone through. Attachments can also be added to the asset to photograph the problem if it is not working, or photograph the asset while it is working, or document any process performed on the asset.",
    ar: {
      name: "إدارة الأصول",
      descriptionHtml:
        "تطبيق لإدارة أصول الشركة يعرض حالة كل أصل والمراحل التي مرّ بها. ويمكن إضافة مرفقات إلى الأصل لتصوير المشكلة إن كان معطّلًا، أو تصويره أثناء عمله، أو توثيق أي عملية أُجريت عليه.",
    },
    technologies: [],
    gallery: [
      {
        title: "Home Page",
        src: "assets/img/portfolio/assetManagement/2_Home_Page.png",
        alt: "Home Page",
      },
      {
        title: "Task Details Page",
        src: "assets/img/portfolio/assetManagement/3_Task_Details_Page.png",
        alt: "Task Details Page",
      },
      {
        title: "Settings Page",
        src: "assets/img/portfolio/assetManagement/4_Settings_Page.png",
        alt: "Settings Page",
      },
    ],
  },

  beacon_reader: {
    metaTitle: "Beacone Reader Details",
    metaDescription:
      "A Mobile app for scanning and managing beacon devices using the Kontakt.io SDK",
    metaKeywords:
      "Mobile Application, Flutter Application, Beacone Reader Application, Beacone Reader App",
    favicon: "assets/img/logo/mainPage.png",
    breadcrumbLabel: "Beacone Reader",
    pageHeading: "Beacone Reader Details",
    category: "Mobile Application",
    projectDate: "Nov 19, 2023 ➡️ 12 Feb, 2024",
    descriptionHtml:
      "A Mobile app for scanning and managing beacon devices using the Kontakt.io SDK.<br> Integrated beacon detection, proximity tracking, and data synchronization to enable location-based services and enhance user engagement.",
    ar: {
      name: "Beacon Reader",
      descriptionHtml:
        "تطبيق موبايل لمسح أجهزة Beacon وإدارتها باستخدام Kontakt.io SDK.<br> يدمج اكتشاف أجهزة Beacon، وتتبّع القرب منها، ومزامنة البيانات، لتمكين الخدمات المعتمدة على الموقع وتعزيز تفاعل المستخدمين.",
    },
    storeButtons: [
      {
        variant: "drive",
        href: "https://drive.google.com/drive/folders/17oQmW2LcV-cbd1w45qGrOxcgQ0ZLAjaq?usp=sharing",
        subtitle: "Get It On",
        title: "Google Drive",
      },
    ],
    technologies: ["Flutter", "State Management : Bloc"],
    technologiesTitle: "Languages and Technologies used",
    gallery: [
      {
        title: "Home Page",
        src: "assets/img/portfolio/beaconReader/2_Home_Page.png",
        alt: "Home Page",
      },
      {
        title: "Settings Page",
        src: "assets/img/portfolio/beaconReader/3_Settings_Page.png",
        alt: "Settings Page",
      },
      {
        title: "Scaning Beacon Page",
        src: "assets/img/portfolio/beaconReader/4_Scaning_Beacon_Page.png",
        alt: "Scaning Beacon Page",
      },
    ],
  },

  clinic_code: {
    metaTitle: "Clinic Code Details",
    metaDescription:
      "Clinic Code is a medical appointment platform: patients find doctors and clinics by specialty and location, book available appointments instantly and receive smart reminders, while doctors manage patients, visits and a live queue.",
    metaKeywords:
      "Mobile Application, Flutter Application, Clinic Code Application, Medical Appointment App, Doctor Booking App, Clinic Management App",
    favicon: "assets/img/logo/clinicCode.png",
    breadcrumbLabel: "Clinic Code",
    pageHeading: "Clinic Code Details",
    category: "Mobile Application",
    projectDate: "28 Mar, 2024 ➡️ 22 Nov, 2025",
    descriptionHtml:
      "Clinic Code is a medical appointment platform built as two connected apps.<br> The patient app (موعدك الطبي) lets patients find doctors and clinics by specialty, city, area and working days, book an available slot instantly from a live calendar, keep a list of favorite doctors, and receive smart reminders with an organized log of their visits.<br> The doctor app gives clinics a complete workspace: patient records and medical history, visits, diagnoses, lab tests, X-rays, prescriptions and allergies, a patient queue updated in real time, and statistics with Excel export.",
    ar: {
      name: "Clinic Code",
      metaDescription:
        "Clinic Code منصة لحجز المواعيد الطبية: يبحث المرضى عن الأطباء والعيادات حسب التخصص والموقع، ويحجزون المواعيد المتاحة فورًا، ويتلقّون تذكيرات ذكية، بينما يدير الأطباء المرضى والزيارات وطابور الانتظار لحظيًا.",
      descriptionHtml:
        "Clinic Code منصة لحجز المواعيد الطبية مبنية من تطبيقين مترابطين.<br> تطبيق المرضى (موعدك الطبي) يتيح للمريض البحث عن الأطباء والعيادات حسب التخصص والمدينة والمنطقة وأيام الدوام، وحجز موعد متاح فورًا من تقويم مباشر، والاحتفاظ بقائمة الأطباء المفضلين، وتلقّي تذكيرات ذكية مع سجل منظّم لزياراته.<br> أما تطبيق الطبيب فيمنح العيادات مساحة عمل متكاملة: ملفات المرضى وتاريخهم الطبي، والزيارات، والتشخيصات، والتحاليل المخبرية، والصور الشعاعية، والوصفات الطبية، والحساسية، وطابور مرضى يتحدّث لحظيًا، وإحصائيات مع التصدير إلى Excel.",
    },
    storeButtons: [
      {
        variant: "google",
        href: "https://play.google.com/store/apps/details?id=com.clinic.code.patient",
        subtitle: "Get It On",
        title: "Google Play",
      },
    ],
    technologies: [
      "Flutter",
      "State Management : Bloc / Cubit",
      "Clean Architecture",
      "SignalR For Real-Time Updates",
      "Firebase Cloud Messaging For Notification",
      "Google Sign-In",
      "Localization : Arabic & English",
    ],
    technologiesTitle: "Languages and Technologies used",
    gallery: [
      {
        title: "Home & Favorites Pages",
        src: "assets/img/portfolio/clinicCode/2_Home_and_Favorites_Pages.jpg",
        alt: "Home & Favorites Pages",
      },
      {
        title: "Search & Filter Pages",
        src: "assets/img/portfolio/clinicCode/3_Search_and_Filter_Pages.jpg",
        alt: "Search & Filter Pages",
      },
      {
        title: "Clinic Details & Booking Pages",
        src: "assets/img/portfolio/clinicCode/4_Clinic_Details_and_Booking_Pages.jpg",
        alt: "Clinic Details & Booking Pages",
      },
      {
        title: "Clinics & Drawer Pages",
        src: "assets/img/portfolio/clinicCode/5_Clinics_and_Drawer_Pages.jpg",
        alt: "Clinics & Drawer Pages",
      },
    ],
  },

  databaseManagement: {
    metaTitle: "Database Management Details",
    metaDescription:
      "A Desktop Application made in C# language The main goal of the program is to add, modify and delete student data with the ability to store data in each of Access databases or a text file according to a specific format with the ability to save changes .",
    metaKeywords:
      "Desktop Application, C# Application, Windows Form Applicatoin, Database Management, Management Data, Store Data, Manipulating Data,",
    favicon: "assets/img/logo/database.png",
    breadcrumbLabel: "Database Management",
    pageHeading: "Database Management Details",
    category: "Desktop Application",
    projectDate: "15 Jan, 2022 ➡️ 18 Feb, 2022",
    descriptionHtml:
      "A Desktop Application made in C# language The main goal of the program is to add, modify and delete student data with the ability to store data in each of Access databases or a text file according to a specific format with the ability to save changes .",
    ar: {
      name: "إدارة قواعد البيانات",
      descriptionHtml:
        "تطبيق سطح مكتب مكتوب بلغة C#، هدفه الأساسي إضافة بيانات الطلاب وتعديلها وحذفها، مع إمكانية تخزين البيانات في قاعدة بيانات Access أو في ملف نصي وفق تنسيق محدد، وحفظ التغييرات.",
    },
    teamMembers: "3",
    projectUrl: {
      href: "https://github.com/MahmoudALBndkji/Database-Management",
      title: "Source Code",
      text: "GitHub",
      icon: "github",
    },
    technologies: [
      "C#",
      "Stream & Binary File",
      "ADO.Net",
      "Access database",
    ],
    technologiesTitle: "Languages ​​and Technologies used",
    gallery: [
      {
        title: "Add Student Screen",
        src: "assets/img/portfolio/databaseManagement/2_Add_Student_Screen.png",
        alt: "Add Student Screen",
      },
      {
        title: "Add Student Screen",
        src: "assets/img/portfolio/databaseManagement/3_Add_Student_Screen.png",
        alt: "Add Student Screen",
      },
      {
        title: "Edit Student Screen",
        src: "assets/img/portfolio/databaseManagement/4_Edit_Student_Screen.png",
        alt: "Edit Student Screen",
      },
      {
        title: "Store Data Text File Screen",
        src: "assets/img/portfolio/databaseManagement/5_Store_Data_Text_File_Screen.png",
        alt: "Store Data Text File Screen",
      },
      {
        title: "Store Data Access Screen",
        src: "assets/img/portfolio/databaseManagement/6_Store_Data_Access_Screen.png",
        alt: "Store Data Access Screen",
      },
    ],
  },

  lister: {
    metaTitle: "Lister Details",
    metaDescription:
      "Food Delivery app that have phone branch and web branch and back end maid from asp.net core api and my SQL database ,I personally worked with the web branch I did interfaces fully dynamic the front end UI using html ,css, js, bootstrap ,and more libraries for styling like fontawesome ,animations,and many other design libraries to achieve a dynamic fully functional wep app .",
    metaKeywords:
      "Web Application, Website for Management, DashBoard Admin & Owner Restaurant, Contol Panel Admin & Owner Restaurant, Food Delivery Application ",
    favicon: "assets/img/logo/restaurant.png",
    breadcrumbLabel: "Lister",
    pageHeading: "Lister Details",
    category: "Web Application",
    projectDate: "16 Aug, 2021 ➡️ 13 Jun, 2022",
    descriptionHtml:
      "Food Delivery app that have phone branch and web branch and back end maid from asp.net core api and my SQL database ,I personally worked with the web branch I did interfaces fully dynamic the front end UI using html ,css, js, bootstrap ,and more libraries for styling like fontawesome ,animations,and many other design libraries to achieve a dynamic fully functional wep app .",
    ar: {
      name: "Lister",
      descriptionHtml:
        "تطبيق لتوصيل الطعام له فرع للموبايل وفرع للويب، وواجهته الخلفية مبنية بـ ASP.NET Core API وقاعدة بيانات MySQL. عملت شخصيًا على فرع الويب، فبنيت واجهات ديناميكية بالكامل باستخدام HTML، CSS، JavaScript، Bootstrap، ومكتبات تصميم أخرى مثل Font Awesome ومكتبات الحركة، للوصول إلى تطبيق ويب ديناميكي متكامل الوظائف.",
    },
    teamMembers: "5",
    technologies: ["HTML", "CSS", "JavaScript", "JQuery", "BootStrap"],
    technologiesTitle: "Languages ​​and Technologies used",
    gallery: [
      {
        title: "Create Account Screen",
        src: "assets/img/portfolio/lister/2_Create_Account_Screen.png",
        alt: "Create Account Screen",
      },
      {
        title: "Home Screen",
        src: "assets/img/portfolio/lister/3_Home_Screen.png",
        alt: "Home Screen",
      },
      {
        title: "Home Screen",
        src: "assets/img/portfolio/lister/4_Home_Screen.png",
        alt: "Home Screen",
      },
      {
        title: "Forget Password Verification Screen",
        src: "assets/img/portfolio/lister/5_Forget_Password_Verification_Screen.png",
        alt: "Forget Password Verification Screen",
      },
      {
        title: "Google Map Screen",
        src: "assets/img/portfolio/lister/6_Google_Map_Screen.png",
        alt: "Google Map Screen",
      },
      {
        title: "Menu Screen",
        src: "assets/img/portfolio/lister/7_Menu_Screen.png",
        alt: "Menu Screen",
      },
      {
        title: "Menu Screen",
        src: "assets/img/portfolio/lister/8_Menu_Screen.png",
        alt: "Menu Screen",
      },
      {
        title: "Menu Screen",
        src: "assets/img/portfolio/lister/9_Menu_Screen.png",
        alt: "Menu Screen",
      },
      {
        title: "Menu Screen",
        src: "assets/img/portfolio/lister/10_Menu_Screen.png",
        alt: "Menu Screen",
      },
    ],
  },

  mallToGo: {
    metaTitle: "Mall To Go Details",
    metaDescription:
      "A Desktop Application using C# and some design library for a mall cashier system complete with a database and other feature Like searching and sorting the items and real time editing of the inventory and a printable bill .",
    metaKeywords:
      "Desktop Application, C# Application, Windows Form Applicatoin, Mall Management, Mall Controlling, Store Management",
    favicon: "assets/img/logo/mallToGo.png",
    breadcrumbLabel: "Mall To Go",
    pageHeading: "Mall To Go Details",
    category: "Desktop Application",
    projectDate: "16 Apr, 2022 ➡️ 13 Jun, 2022",
    descriptionHtml:
      "A Desktop Application using C# and some design library for a mall cashier system complete with a database and other feature Like searching and sorting the items and real time editing of the inventory and a printable bill .",
    ar: {
      name: "Mall To Go",
      descriptionHtml:
        "تطبيق سطح مكتب بلغة C# مع مكتبات تصميم، لنظام كاشير في مول تجاري، متكامل مع قاعدة بيانات ومزايا أخرى مثل البحث في المنتجات وترتيبها، وتعديل المخزون لحظيًا، وفاتورة قابلة للطباعة.",
    },
    teamMembers: "6",
    technologies: [
      "C# .Net Framework",
      "Entity Framework",
      "Sql server database",
      "Bunifu Library For Design",
    ],
    technologiesTitle: "Languages ​​and Technologies used",
    gallery: [
      {
        title: "Login Screen",
        src: "assets/img/portfolio/mallToGo/2_Login_Page_Screen.png",
        alt: "Login Screen",
      },
      {
        title: "Edit Account Screen",
        src: "assets/img/portfolio/mallToGo/3_Edit_Account_Screen.png",
        alt: "Edit Account Screen",
      },
      {
        title: "Print Invoice Screen",
        src: "assets/img/portfolio/mallToGo/4_Print_Invoice_Screen.png",
        alt: "Print Invoice Screen",
      },
    ],
  },

  messilah_beach: {
    metaTitle: "Messilah Beach Details",
    metaDescription:
      "Official app of Messilah Beach, Kuwait's premier family beach destination: explore pools, dining and entertainment, book tickets online with instant confirmation and KNET payment, and enter with QR-code passes.",
    metaKeywords:
      "Mobile Application, Flutter Application, Messilah Beach Application, Messilah Beach App, Beach Booking App, Ticket Booking App",
    favicon: "assets/img/logo/messilahBeach.png",
    breadcrumbLabel: "Messilah Beach",
    pageHeading: "Messilah Beach Details",
    category: "Mobile Application",
    projectDate: "7 May, 2025 ➡️ 28 Nov, 2025",
    descriptionHtml:
      "The official app of Messilah Beach, Kuwait's premier family beach destination managed by UPAC.<br> Visitors discover the beach zones, pools, dining and entertainment offerings, book tickets online with instant confirmation and secure KNET payment, buy gift cards, and enter with QR-code ticket passes.<br> Fully bilingual (Arabic / English) with biometric sign-in, push notifications and screenshot protection for sensitive screens.",
    ar: {
      name: "شاطئ المسيلة",
      metaDescription:
        "التطبيق الرسمي لشاطئ المسيلة، الوجهة الشاطئية العائلية الأولى في الكويت: استكشف المسابح والمطاعم والترفيه، واحجز التذاكر أونلاين مع تأكيد فوري ودفع عبر KNET، وادخل بتذاكر رمز QR.",
      descriptionHtml:
        "التطبيق الرسمي لشاطئ المسيلة، الوجهة الشاطئية العائلية الأولى في الكويت والتي تديرها UPAC.<br> يستكشف الزوار مناطق الشاطئ والمسابح والمطاعم والأنشطة الترفيهية، ويحجزون التذاكر أونلاين مع تأكيد فوري ودفع آمن عبر KNET، ويشترون بطاقات الهدايا، ويدخلون بتذاكر رمز QR.<br> التطبيق ثنائي اللغة بالكامل (عربي / إنجليزي)، مع تسجيل دخول بالبصمة، وإشعارات فورية، وحماية من تصوير الشاشة في الصفحات الحساسة.",
    },
    storeButtons: [
      {
        variant: "google",
        href: "https://play.google.com/store/apps/details?id=com.messilah.beach&hl=en_US&gl=US",
        subtitle: "Get It On",
        title: "Google Play",
      },
    ],
    technologies: [
      "Flutter",
      "State Management : Bloc",
      "KNET Payment Gateway via WebView",
      "QR Code Tickets",
      "Biometric Authentication",
      "Firebase Cloud Messaging For Notification",
      "Localization : Arabic & English",
    ],
    technologiesTitle: "Languages and Technologies used",
    gallery: [
      {
        title: "Discover & About Pages",
        src: "assets/img/portfolio/messilahBeach/2_Discover_and_About_Pages.jpg",
        alt: "Discover & About Pages",
      },
      {
        title: "Offering & Services Pages",
        src: "assets/img/portfolio/messilahBeach/3_Offering_Pages.jpg",
        alt: "Offering & Services Pages",
      },
      {
        title: "Entertainment Page",
        src: "assets/img/portfolio/messilahBeach/4_Entertainment_Page.jpg",
        alt: "Entertainment Page",
      },
    ],
  },

  newpark_agents: {
    metaTitle: "NewPark Agents Details",
    metaDescription:
      "The main idea of the application is to facilitate the work of customers so that they can create orders and follow up on their status, in addition to many features such as archive of previous orders, returns, inventory, and many other features.",
    metaKeywords:
      "Mobile Application, Flutter Application, NewPark Agents Application, NewPark Agents App",
    favicon: "assets/img/logo/mainPage.png",
    breadcrumbLabel: "NewPark Agents",
    pageHeading: "NewPark Agents Details",
    category: "Mobile Application",
    projectDate: "28 Aug, 2023 ➡️ 20 Sep, 2024",
    descriptionHtml:
      "The main idea of the application is to facilitate the work of customers so that they can create orders and follow up on their status, in addition to many features such as archive of previous orders, returns, inventory, and many other features.",
    ar: {
      name: "NewPark Agents",
      descriptionHtml:
        "الفكرة الأساسية للتطبيق تسهيل عمل العملاء، بحيث يمكنهم إنشاء الطلبات ومتابعة حالتها، إضافة إلى مزايا كثيرة مثل أرشيف الطلبات السابقة، والمرتجعات، والمخزون، وغيرها.",
    },
    technologies: [
      "Flutter",
      "Firebase Cloud Messaging For Notification",
      "State Management : Bloc",
    ],
    technologiesTitle: "Languages and Technologies used",
    gallery: [
      {
        title: "Categories & Products Pages",
        src: "assets/img/portfolio/newparkAgents/2_Categories_and_Products_Pages.png",
        alt: "Categories & Products Pages",
      },
      {
        title: "Cart Pages",
        src: "assets/img/portfolio/newparkAgents/3_Cart_Pages.png",
        alt: "Cart Pages",
      },
      {
        title: "Reports Page",
        src: "assets/img/portfolio/newparkAgents/4_Report_Page.png",
        alt: "Reports Page",
      },
      {
        title: "Orders Pages",
        src: "assets/img/portfolio/newparkAgents/5_Orders_Pages.png",
        alt: "Orders Page",
      },
    ],
  },

  open_vpn: {
    metaTitle: "Open Vpn Details",
    metaDescription:
      "A mobile application that integrates OpenVPN functionality for secure and private internet access.",
    metaKeywords:
      "Mobile Application, Flutter Application, Open Vpn Application, Open Vpn App",
    favicon: "assets/img/logo/mainPage.png",
    breadcrumbLabel: "Open Vpn",
    pageHeading: "Open Vpn Details",
    category: "Mobile Application",
    projectDate: "26 Feb, 2025 ➡️ 8 Mar, 2025",
    descriptionHtml:
      "A mobile application that integrates OpenVPN functionality for secure and private internet access.<br> Easily connect, disconnect, and manage VPN profiles with a clean and user-friendly interface.",
    ar: {
      name: "Open VPN",
      descriptionHtml:
        "تطبيق موبايل يدمج وظائف OpenVPN لتصفّح آمن وخاص للإنترنت.<br> اتصل وافصل وأدِر ملفات VPN بسهولة عبر واجهة نظيفة وسهلة الاستخدام.",
    },
    storeButtons: [
      {
        variant: "github",
        href: "https://github.com/MahmoudALBndkji/Flutter-Open-Vpn-App",
        subtitle: "Get Source Code",
        title: "GitHub",
      },
      {
        variant: "drive",
        href: "https://drive.google.com/drive/folders/1Fy50TROQopNtBhVLjeeZkEnFfuVRN0jV?usp=sharing",
        subtitle: "Get It On",
        title: "Google Drive",
      },
    ],
    technologies: [
      "Flutter",
      "Kotlin + Java",
      "Background Service",
      "State Management : Get",
    ],
    technologiesTitle: "Languages and Technologies used",
    gallery: [
      {
        title: "Selected Country Page",
        src: "assets/img/portfolio/openVpn/2_Selected_Country_Page.png",
        alt: "Selected Country Page",
      },
      {
        title: "Connection VPN Page",
        src: "assets/img/portfolio/openVpn/3_Connection_VPN.png",
        alt: "Connection VPN Page",
      },
      {
        title: "Network Details Info Page",
        src: "assets/img/portfolio/openVpn/4_Network_Details_Info_Page.png",
        alt: "Network Details Info Page",
      },
    ],
  },

  ponderMore: {
    metaTitle: "Ponder More Details",
    metaDescription:
      "Flutter application He explains and clarifies the sport of yoga, in addition to tips for its practice, The application contains levels, each level has a certain number of assigned exercises , The application also contains several features such as evaluation, communication with the application developer, choice theme ( light , dark ) , and more of that .",
    metaKeywords:
      "Mobile Application, Flutter Application, Meditation Application, Meditation App, Ponder More Application, Ponder More App, Yoga Application, Yoga App, Relax Application , Relax App",
    favicon: "assets/img/logo/ponderMore.png",
    breadcrumbLabel: "Ponder More",
    pageHeading: "Ponder More Details",
    category: "Mobile Application",
    projectDate: "28 Aug, 2022 ➡️ 17 Sep, 2022",
    descriptionHtml:
      "Flutter application He explains and clarifies the sport of yoga, in addition to tips for its practice, The application contains levels, each level has a certain number of assigned exercises , The application also contains several features such as evaluation, communication with the application developer, choice theme ( light , dark ) , and more of that .",
    ar: {
      name: "Ponder More",
      descriptionHtml:
        "تطبيق Flutter يشرح رياضة اليوغا ويوضّحها، إضافة إلى نصائح لممارستها. يحتوي التطبيق على مستويات، ولكل مستوى عدد محدد من التمارين، كما يضم مزايا عدة مثل التقييم، والتواصل مع مطوّر التطبيق، واختيار المظهر (فاتح / داكن)، وغير ذلك.",
    },
    technologies: ["Flutter", "State Management : Provider"],
    technologiesTitle: "Languages ​​and Technologies used",
    gallery: [
      {
        title: "Home Screen",
        src: "assets/img/portfolio/ponderMore/2_Home_Page.png",
        alt: "Home Screen",
      },
      {
        title: "Excercises Screen",
        src: "assets/img/portfolio/ponderMore/3_Exercises_Page.png",
        alt: "Excercises Screen",
      },
      {
        title: "Excercises Screen",
        src: "assets/img/portfolio/ponderMore/4_Excercise_Page.png",
        alt: "Excercises Screen",
      },
      {
        title: "Locked Level & Break Time Screen",
        src: "assets/img/portfolio/ponderMore/5_Locked_Break_Screen.png",
        alt: "Locked Level & Break Time Screen",
      },
      {
        title: "Change Image & Drawer Screen",
        src: "assets/img/portfolio/ponderMore/6_Image_Drawer_Page.png",
        alt: "Change Image & Drawer Screen",
      },
      {
        title: "FeedBack Screen",
        src: "assets/img/portfolio/ponderMore/7_FeedBack_Screen.png",
        alt: "FeedBack Screen",
      },
      {
        title: "Rate Screen",
        src: "assets/img/portfolio/ponderMore/8_Rate_Page.png",
        alt: "Rate Screen",
      },
      {
        title: "App Developer Screen",
        src: "assets/img/portfolio/ponderMore/9_App_Developer_Page.png",
        alt: "App Developer Screen",
      },
    ],
  },

  rds_box: {
    metaTitle: "RDS Box Details",
    metaDescription:
      "The app lets customers receive online store deliveries anywhere, Users order from sites like Noon Store, specifying their location and a nearby storage box.",
    metaKeywords:
      "Mobile Application, Flutter Application, RDS Box Application, RDS Box App",
    favicon: "assets/img/logo/mainPage.png",
    breadcrumbLabel: "RDS Box",
    pageHeading: "RDS Box Details",
    category: "Mobile Application",
    projectDate: "7 Mar, 2024 ➡️ 2 Aug, 2024",
    descriptionHtml:
      "The app lets customers receive online store deliveries anywhere, Users order from sites like Noon Store, specifying their location and a nearby storage box.<br> Drivers deliver to the box, placing orders inside for secure pickup.<br> This method ensures deliveries without customers needing to be present, adds protection through customer-guarded boxes, and offers convenience for travelers or those with delivery issues.",
    ar: {
      name: "RDS Box",
      descriptionHtml:
        "يتيح التطبيق للعملاء استلام طلبات المتاجر الإلكترونية في أي مكان؛ إذ يطلب المستخدم من مواقع مثل متجر نون مع تحديد موقعه وصندوق تخزين قريب منه.<br> يوصل السائق الطلب إلى الصندوق ويضعه داخله ليستلمه العميل بأمان.<br> تضمن هذه الطريقة إتمام التوصيل دون الحاجة إلى وجود العميل، وتضيف حماية عبر صناديق يحرسها العميل، وتوفّر الراحة للمسافرين ولمن يواجهون صعوبات في الاستلام.",
    },
    technologies: [
      "Flutter",
      "Firebase Cloud Messaging For Notification",
      "State Management : Bloc",
    ],
    technologiesTitle: "Languages and Technologies used",
    gallery: [
      {
        title: "Authentication Page",
        src: "assets/img/portfolio/rdsBox/2_Auth_Page.png",
        alt: "Authentication Page",
      },
      {
        title: "User Home Page",
        src: "assets/img/portfolio/rdsBox/3_User_Home_Page.png",
        alt: "User Home Page",
      },
      {
        title: "Buy Box Pages",
        src: "assets/img/portfolio/rdsBox/4_Buy_Box_Pages.png",
        alt: "Buy Box Pages",
      },
      {
        title: "Orders For Driver Pages",
        src: "assets/img/portfolio/rdsBox/5_Orders_For_Driver_Pages.png",
        alt: "Orders For Driver Pages",
      },
    ],
  },

  real_estate: {
    metaTitle: "Real Estate Details",
    metaDescription:
      "Developed and managed a user-friendly real estate app facilitating property searches, virtual tours, and seamless communication between buyers, sellers, and agents. Enhanced user experience with intuitive navigation, real-time updates, and advanced filtering options.",
    metaKeywords:
      "Mobile Application, Flutter Application, Real Estate Application, Real Estate App",
    favicon: "assets/img/logo/mainPage.png",
    breadcrumbLabel: "Real Estate",
    pageHeading: "Real Estate Details",
    category: "Mobile Application",
    projectDate: "6 Jan, 2023 ➡️ 7 May, 2023",
    descriptionHtml:
      "Developed and managed a user-friendly real estate app facilitating property searches, virtual tours, and seamless communication between buyers, sellers, and agents.<br> Enhanced user experience with intuitive navigation, real-time updates, and advanced filtering options",
    ar: {
      name: "تطبيق العقارات",
      descriptionHtml:
        "طوّرت وأدرت تطبيق عقارات سهل الاستخدام يسهّل البحث عن العقارات، والجولات الافتراضية، والتواصل السلس بين المشترين والبائعين والوسطاء.<br> حسّنت تجربة المستخدم بتنقّل بديهي، وتحديثات لحظية، وخيارات تصفية متقدمة.",
    },
    technologies: [],
    gallery: [
      {
        title: "Home Page",
        src: "assets/img/portfolio/realEstate/2_Home_Page.png",
        alt: "Home Page",
      },
      {
        title: "Details Home Page",
        src: "assets/img/portfolio/realEstate/3_Details_Home_Page.png",
        alt: "Details Home Page",
      },
      {
        title: "Home Page & Drawer",
        src: "assets/img/portfolio/realEstate/4_Home_Page_and_Drawer.png",
        alt: "Home Page & Drawer",
      },
    ],
  },

  sallate: {
    metaTitle: "Sallate Details",
    metaDescription:
      "Online store flutter application It displays many products and various Categories, in addition to the ability to like a specific product, has also been added search engine has been added to find a product with specific features .",
    metaKeywords:
      "Mobile Application, Flutter Application, Sallate Application, Sallate App, Online Store , E-Commerce Applicatoin, E-Commerce Store, E-Commerce Store Applicatoin",
    favicon: "assets/img/logo/Sallate.png",
    breadcrumbLabel: "Sallate",
    pageHeading: "Sallate Details",
    category: "Mobile Application",
    projectDate: "19 Oct, 2022 ➡️ 5 Nov, 2022",
    descriptionHtml:
      "Online store flutter application It displays many products and various Categories, in addition to the ability to like a specific product, has also been added search engine has been added to find a product with specific features .",
    ar: {
      name: "Sallate",
      descriptionHtml:
        "تطبيق متجر إلكتروني بـ Flutter يعرض منتجات كثيرة وأقسامًا متنوعة، مع إمكانية الإعجاب بمنتج معيّن، كما أُضيف محرك بحث للعثور على منتج بمواصفات محددة.",
    },
    projectUrl: {
      href: "https://github.com/MahmoudALBndkji/Sallate",
      title: "Source Code",
      text: "GitHub",
      icon: "github",
    },
    downloadButton: {
      href: "https://www.mediafire.com/file/bbjj0tpkgz0f33o/Sallate.apk/file",
      title: "Download",
      text: "Download For Android",
    },
    technologies: ["Flutter", "E-Commerce API", "State Management : Bloc"],
    technologiesTitle: "Languages ​​and Technologies used",
    gallery: [
      {
        title: "Home Screen",
        src: "assets/img/portfolio/salla/2_Home_Page.png",
        alt: "Home Screen",
      },
      {
        title: "Product Details Screen",
        src: "assets/img/portfolio/salla/3_Product_Details.png",
        alt: "Product Details Screen",
      },
      {
        title: "Categories Screen",
        src: "assets/img/portfolio/salla/4_Categories_Page.png",
        alt: "Categories Screen",
      },
      {
        title: "Favorites Screen",
        src: "assets/img/portfolio/salla/5_Favorites_Page.png",
        alt: "Favorites Screen",
      },
      {
        title: "Search Screen",
        src: "assets/img/portfolio/salla/6_Search_Page.png",
        alt: "Search Screen",
      },
      {
        title: "Settings Screen",
        src: "assets/img/portfolio/salla/7_Settings_Page.png",
        alt: "Settings Screen",
      },
      {
        title: "Poster",
        src: "assets/img/portfolio/salla/poster.png",
        alt: "Poster",
      },
    ],
  },

  spot_books_pos: {
    metaTitle: "Spot Books POS Details",
    metaDescription:
      "Contributed to the development of a Point of Sale (POS) system (SpotBooks POS) designed to streamline sales, inventory management, and transaction processing for businesses.",
    metaKeywords:
      "Mobile Application, Flutter Application, Spot Books POS Application, Spot Books POS App",
    favicon: "assets/img/logo/mainPage.png",
    breadcrumbLabel: "Spot Books POS",
    pageHeading: "Spot Books POS Details",
    category: "Mobile Application",
    projectDate: "Oct 19, 2024 ➡️ 29 Jan, 2025",
    descriptionHtml:
      "Contributed to the development of a Point of Sale (POS) system (SpotBooks POS) designed to streamline sales, inventory management, and transaction processing for businesses.<br>Enhanced user experience with real-time data tracking, reporting, and seamless payment integration",
    ar: {
      name: "Spot Books POS",
      descriptionHtml:
        "ساهمت في تطوير نظام نقاط بيع (SpotBooks POS) مصمّم لتبسيط المبيعات وإدارة المخزون ومعالجة المعاملات للشركات.<br>حسّنت تجربة المستخدم بتتبّع البيانات لحظيًا، والتقارير، وتكامل سلس مع وسائل الدفع.",
    },
    storeButtons: [
      {
        variant: "website",
        href: "https://spotbooks.app/",
        subtitle: "Explore On",
        title: "Web Browser",
      },
    ],
    technologies: [
      "Flutter Web",
      "Print Invoices",
      "State Management : Bloc",
    ],
    technologiesTitle: "Languages and Technologies used",
    gallery: [
      {
        title: "Dashboard Page",
        src: "assets/img/portfolio/spotBooks/2_Dashboard_Page.png",
        alt: "Dashboard Page",
      },
      {
        title: "Home Page",
        src: "assets/img/portfolio/spotBooks/3_Home_Page.png",
        alt: "Home Page",
      },
      {
        title: "Invoice Format Page",
        src: "assets/img/portfolio/spotBooks/4_Invoice_Format_Page.png",
        alt: "Invoice Format Page",
      },
    ],
  },

  time_attendance: {
    metaTitle: "Time Attendance Details",
    metaDescription:
      "Time attendance project efficiently manages employee hours. It calculates entry and exit times, enabling flexible inquiries into employee movements.",
    metaKeywords:
      "Mobile Application, Flutter Application, Time Attendance Application, Time Attendance App",
    favicon: "assets/img/logo/mainPage.png",
    breadcrumbLabel:
      "Time Attendance For Ministry of Electricity Water and Renewable Energy",
    pageHeading:
      "Time Attendance For Ministry of Electricity Water and Renewable Energy Details",
    category: "Mobile Application",
    projectDate: "Oct 17, 2024 ➡️ 15 Mar, 2025",
    descriptionHtml:
      "Time attendance project efficiently manages employee hours. It calculates entry and exit times, enabling flexible inquiries into employee movements.<br> With a user-friendly interface, it streamlines operations and optimizes productivity, providing accurate attendance records and valuable workforce insights.",
    ar: {
      name: "نظام الحضور والانصراف لوزارة الكهرباء والماء والطاقة المتجددة",
      descriptionHtml:
        "يدير مشروع الحضور والانصراف ساعات عمل الموظفين بكفاءة؛ إذ يحسب أوقات الدخول والخروج ويتيح استعلامات مرنة عن حركات الموظفين.<br> وبواجهة سهلة الاستخدام، يبسّط العمليات ويرفع الإنتاجية، ويوفّر سجلات حضور دقيقة ورؤى قيّمة عن القوى العاملة.",
    },
    storeButtons: [
      {
        variant: "google",
        href: "https://play.google.com/store/apps/details?id=kw.mew.fingerprint&pcampaignid=web_share",
        subtitle: "Get It On",
        title: "Google Play",
      },
    ],
    technologies: [
      "Flutter",
      "Kotlin",
      "Swift",
      "Kontakt SDK For Scaning Beacon Device",
      "Firebase Cloud Messaging For Notification",
    ],
    technologiesTitle: "Languages and Technologies used",
    gallery: [
      {
        title: "Select Language Page",
        src: "assets/img/portfolio/taMew/2_Select_Language_Page.png",
        alt: "Select Language Page",
      },
      {
        title: "Drawer & Minsity App Page",
        src: "assets/img/portfolio/taMew/3_Drawer_and_Minsity_App_Page.png",
        alt: "Drawer & Minsity App Page",
      },
      {
        title: "Log Attendance Page",
        src: "assets/img/portfolio/taMew/4_Log_Attendance_Page.png",
        alt: "Log Attendance Page",
      },
      {
        title: "Questions & Answers Page",
        src: "assets/img/portfolio/taMew/5_Questions_and_Answers_Page.png",
        alt: "Questions & Answers Page",
      },
    ],
  },

  toKnowMe: {
    metaTitle: "To Know Me Details",
    metaDescription:
      "Social networking application made with a flutter whose main idea is to facilitate communication and acquaintance with people and to build a strong communication network. The application contains the ability to publish posts and has many features such as commenting, liking, private chatting .",
    metaKeywords:
      "Mobile Application, Flutter Application, To Know Me Applicatoin, To Know Me App, chatting Application , Social Networking Application , Social Networking App, Application Communication With Friends, App Communication With Friends",
    favicon: "assets/img/logo/toKnowMe.png",
    breadcrumbLabel: "To Know Me",
    pageHeading: "To Know Me Details",
    category: "Mobile Application",
    projectDate: "22 Nov, 2022 ➡️ Current",
    descriptionHtml:
      "Social networking application made with a flutter whose main idea is to facilitate communication and acquaintance with people and to build a strong communication network. The application contains the ability to publish posts and has many features such as commenting, liking, private chatting .",
    ar: {
      name: "To Know Me",
      descriptionHtml:
        "تطبيق تواصل اجتماعي مبني بـ Flutter، فكرته الأساسية تسهيل التواصل والتعارف بين الناس وبناء شبكة تواصل قوية. يتيح التطبيق نشر المنشورات، ويضم مزايا كثيرة مثل التعليق، والإعجاب، والمحادثات الخاصة.",
    },
    technologies: ["Flutter", "Firebase", "State Management : Bloc"],
    technologiesTitle: "Languages ​​and Technologies used",
    gallery: [
      {
        title: "Login & Register Screen",
        src: "assets/img/portfolio/toKnowMe/2_Logining_Pages.png",
        alt: "Login & Register Screen",
      },
      {
        title: "Home Screen",
        src: "assets/img/portfolio/toKnowMe/3_MainPage_Sharing.png",
        alt: "Home Screen",
      },
      {
        title: "Chat & Create Post Screen",
        src: "assets/img/portfolio/toKnowMe/4_Chat_CreatePost.png",
        alt: "Chat & Create Post Screen",
      },
      {
        title: "Friends & Settings Screen",
        src: "assets/img/portfolio/toKnowMe/5_Friends_SettingsPage.png",
        alt: "Friends & Settings Screen",
      },
      {
        title: "Poster",
        src: "assets/img/portfolio/toKnowMe/poster.png",
        alt: "Poster",
      },
    ],
  },

  treema: {
    metaTitle: "Treema Details",
    metaDescription:
      " Developed and maintained a fully functional e-commerce website for Treema Collection using modern web technologies. Implemented product catalog, shopping cart, secure checkout, and user-friendly design to enhance customer experience.",
    metaKeywords:
      "Mobile Application, Flutter Application, Treema Application, Treema App",
    favicon: "assets/img/logo/mainPage.png",
    breadcrumbLabel: "Treema",
    pageHeading: "Treema Details",
    category: "Mobile Application",
    projectDate: "Jan 20, 2025 ➡️ 12 Mar, 2025",
    descriptionHtml:
      "Developed and maintained a fully functional e-commerce website for Treema Collection using modern web technologies.<br> Implemented product catalog, shopping cart, secure checkout, and user-friendly design to enhance customer experience.",
    ar: {
      name: "Treema",
      descriptionHtml:
        "طوّرت وصنت متجرًا إلكترونيًا متكامل الوظائف لـ Treema Collection باستخدام تقنيات ويب حديثة.<br> نفّذت كتالوج المنتجات، وسلة التسوق، والدفع الآمن، وتصميمًا سهل الاستخدام لتحسين تجربة العملاء.",
    },
    storeButtons: [
      {
        variant: "website",
        href: "https://treema-collection.store/",
        subtitle: "Explore On",
        title: "Web Browser",
      },
    ],
    technologies: ["Flutter Web", "State Management : Bloc"],
    technologiesTitle: "Languages and Technologies used",
    gallery: [
      {
        title: "Home Page",
        src: "assets/img/portfolio/treema/2_Home_Page.png",
        alt: "Home Page",
      },
      {
        title: "Product Details Page",
        src: "assets/img/portfolio/treema/3_Product_Details_Page.png",
        alt: "Product Details Page",
      },
      {
        title: "Cart Page",
        src: "assets/img/portfolio/treema/4_Cart_Page.png",
        alt: "Cart Page",
      },
    ],
  },

  trasool_online: {
    metaTitle: "Trasool Online Details",
    metaDescription:
      "Developed and managed a vendor and market management app (Trasool) similar to a POS system, enabling seamless inventory tracking, sales processing, and vendor operations. Enhanced efficiency in market transactions and vendor-client interactions through intuitive features.",
    metaKeywords:
      "Mobile Application, Flutter Application, Trasool Online Application, Trasool Online App",
    favicon: "assets/img/logo/mainPage.png",
    breadcrumbLabel: "Trasool Online",
    pageHeading: "Trasool Online Details",
    category: "Mobile Application",
    projectDate: "3 Dec, 2024 ➡️ 14 Jan, 2025",
    descriptionHtml:
      "Developed and managed a vendor and market management app (Trasool) similar to a POS system, enabling seamless inventory tracking, sales processing, and vendor operations. Enhanced efficiency in market transactions and vendor-client interactions through intuitive features.",
    ar: {
      name: "Trasool Online",
      descriptionHtml:
        "طوّرت وأدرت تطبيقًا لإدارة البائعين والأسواق (Trasool) يشبه أنظمة نقاط البيع، يتيح تتبّع المخزون ومعالجة المبيعات وعمليات البائعين بسلاسة، ويرفع كفاءة معاملات السوق والتفاعل بين البائعين والعملاء عبر مزايا بديهية.",
    },
    technologies: [],
    gallery: [
      {
        title: "Authentication Page",
        src: "assets/img/portfolio/trasoolOnline/2_Auth_Page.png",
        alt: "Authentication Page",
      },
      {
        title: "My Forms Page",
        src: "assets/img/portfolio/trasoolOnline/3_My_Forms_Page.png",
        alt: "My Forms Page",
      },
      {
        title: "Send Mail Page",
        src: "assets/img/portfolio/trasoolOnline/4_Send_Mail_Page.png",
        alt: "Send Mail Page",
      },
      {
        title: "Profile Pages",
        src: "assets/img/portfolio/trasoolOnline/5_Profile_Pages.png",
        alt: "Profile Pages",
      },
    ],
  },

  wafra: {
    metaTitle: "Wafra Details",
    metaDescription:
      "The application provides the possibility of managing charitable works and also gives the latest news about the charitable association, the branches, and the services available provided by the association, in addition to many other features, also a beautiful appearance and is easy to use for any user.",
    metaKeywords:
      "Mobile Application, Flutter Application, Wafra Application, Wafra App",
    favicon: "assets/img/logo/mainPage.png",
    breadcrumbLabel: "Wafra",
    pageHeading: "Wafra Details",
    category: "Mobile Application",
    projectDate: "15 Apr, 2024 ➡️ 19 Jul, 2024",
    descriptionHtml:
      "The application provides the possibility of managing charitable works and also gives the latest news about the charitable association, the branches, and the services available provided by the association, in addition to many other features, also a beautiful appearance and is easy to use for any user.",
    ar: {
      name: "جمعية الوفرة",
      descriptionHtml:
        "يتيح التطبيق إدارة الأعمال الخيرية، ويعرض آخر أخبار الجمعية وفروعها والخدمات التي تقدّمها، إضافة إلى مزايا أخرى كثيرة، بمظهر جميل وسهولة استخدام لأي مستخدم.",
    },
    storeButtons: [
      {
        variant: "apple",
        href: "https://apps.apple.com/us/app/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D9%88%D9%81%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D9%8A%D8%A9/id6499200202",
        subtitle: "Download on the",
        title: "App Store",
      },
      {
        variant: "google",
        href: "https://play.google.com/store/apps/details?id=app.wafra.victoryArch&hl=en_US&gl=US&pli=1",
        subtitle: "Get It On",
        title: "Google Play",
      },
    ],
    technologies: [
      "Flutter",
      "Firebase Cloud Messaging For Notification",
      "State Management : Bloc",
    ],
    technologiesTitle: "Languages and Technologies used",
    gallery: [
      {
        title: "Home Page",
        src: "assets/img/portfolio/wafra/2_Home_Page.png",
        alt: "Home Page",
      },
      {
        title: "Festival Offers Page",
        src: "assets/img/portfolio/wafra/3_Festival_Offers_Page.png",
        alt: "Festival Offers Page",
      },
      {
        title: "BarCode Reader Page",
        src: "assets/img/portfolio/wafra/4_BarCode_Reader_Page.png",
        alt: "BarCode Reader Page",
      },
      {
        title: "Shareholder Profits Page",
        src: "assets/img/portfolio/wafra/5_Shareholder_Profits_Page.png",
        alt: "Shareholder Profits Page",
      },
      {
        title: "Association News Page",
        src: "assets/img/portfolio/wafra/6_Association_News_Page.png",
        alt: "Association News Page",
      },
      {
        title: "Branches and Services Page",
        src: "assets/img/portfolio/wafra/7_Branches_and_Services_Page.png",
        alt: "Branches and Services Page",
      },
      {
        title: "Search For Product Page",
        src: "assets/img/portfolio/wafra/8_Search_For_Product_Page.png",
        alt: "Search For Product Page",
      },
      {
        title: "Report Item Page",
        src: "assets/img/portfolio/wafra/9_Report_Item_Page.png",
        alt: "Report Item Page",
      },
      {
        title: "Board Directors Page",
        src: "assets/img/portfolio/wafra/10_Board_Directors_Page.png",
        alt: "Board Directors Page",
      },
    ],
  },

  wakeed: {
    metaTitle: "Wakeed Details",
    metaDescription:
      "Wakeed is a cloud accounting and business-management platform for individuals and small and medium-sized companies, available on Android, iOS, Windows and the web from one Flutter codebase.",
    metaKeywords:
      "Mobile Application, Web Application, Desktop Application, Flutter Application, Wakeed, Wakeed App, Cloud Accounting, ERP, HR Management, Project Management",
    favicon: "assets/img/logo/wakeed.png",
    breadcrumbLabel: "Wakeed",
    pageHeading: "Wakeed Details",
    category: "Mobile, Web & Desktop Application",
    projectDate: "1 Jun, 2026 ➡️ Current",
    descriptionHtml:
      "Wakeed is a cloud accounting and business-management platform for individuals and small and medium-sized companies, running on Android, iOS, Windows and the web from a single Flutter codebase.<br> It covers double-entry accounting, invoices, payments, receivables, inventory, cheques and detailed financial reports, with role-based permissions, an event log, Excel import / export and backups.<br> I work on Wakeed OS, the operations suite built on top of it: HR (attendance, leaves, rosters, timesheets and service requests), projects & tasks, KPIs and reports, and a home dashboard with unified search and quick access.",
    ar: {
      name: "وكيد",
      metaDescription:
        "وكيد منصة سحابية للمحاسبة وإدارة الأعمال للأفراد والشركات الصغيرة والمتوسطة، متاحة على Android، iOS، Windows والويب من قاعدة كود Flutter واحدة.",
      descriptionHtml:
        "وكيد منصة سحابية للمحاسبة وإدارة الأعمال للأفراد والشركات الصغيرة والمتوسطة، تعمل على Android، iOS، Windows والويب من قاعدة كود Flutter واحدة.<br> تغطي المحاسبة بالقيد المزدوج، والفواتير، والمدفوعات، والذمم المدينة، والمخزون، والشيكات، وتقارير مالية مفصّلة، مع صلاحيات حسب الأدوار، وسجل أحداث، واستيراد وتصدير Excel، ونسخ احتياطي.<br> أعمل على Wakeed OS، حزمة العمليات المبنية فوقها: الموارد البشرية (الحضور، والإجازات، وجداول المناوبات، وسجلات الدوام، والطلبات الخدمية)، والمشاريع والمهام، ومؤشرات الأداء والتقارير، ولوحة رئيسية مع بحث موحّد ووصول سريع.",
    },
    storeButtons: [
      {
        variant: "website",
        href: "https://wakeed.app/",
        subtitle: "Explore On",
        title: "Web Browser",
      },
      {
        variant: "apple",
        href: "https://apps.apple.com/us/app/%D9%88%D9%83%D9%8A%D8%AF/id6469051733",
        subtitle: "Download on the",
        title: "App Store",
      },
      {
        variant: "google",
        href: "https://play.google.com/store/apps/details?id=app.wakeed&hl=en",
        subtitle: "Get It On",
        title: "Google Play",
      },
      {
        variant: "microsoft",
        href: "https://apps.microsoft.com/detail/9n720h9xnqks?hl=ar-SA&gl=PS",
        subtitle: "Get It From",
        title: "Microsoft Store",
      },
    ],
    technologies: [
      "Flutter (Android, iOS, Web & Windows)",
      "State Management : Bloc / Cubit",
      "Dio & REST APIs",
      "go_router & Deep Links",
      "Responsive Data Grids & Dashboards",
      "Localization : Arabic & English (RTL)",
      "Bitbucket Pipelines CI",
    ],
    technologiesTitle: "Languages and Technologies used",
    gallery: [
      {
        title: "Dashboard Page",
        src: "assets/img/portfolio/wakeed/2_Dashboard_Page.jpg",
        alt: "Dashboard Page",
      },
      {
        title: "Issued Cheque Pages",
        src: "assets/img/portfolio/wakeed/3_Issued_Cheque_Pages.jpg",
        alt: "Issued Cheque Pages",
      },
      {
        title: "Settings Page",
        src: "assets/img/portfolio/wakeed/4_Settings_Page.jpg",
        alt: "Settings Page",
      },
      {
        title: "Roles, Cloud Storage & API",
        src: "assets/img/portfolio/wakeed/5_Roles_Cloud_Storage_and_API.jpg",
        alt: "Roles, Cloud Storage & API",
      },
      {
        title: "Event Log, Interactive UI & Backup",
        src: "assets/img/portfolio/wakeed/6_Event_Log_and_Backup.jpg",
        alt: "Event Log, Interactive UI & Backup",
      },
    ],
  },

  worldNews: {
    metaTitle: "World News Details",
    metaDescription:
      "News Application made with a flutter to browse all the various news from politics, sports, science and other fields that happen in the world, I also added many features to the application, such as logging in with social media accounts, rating the application, searching for a specific news within a specific field, possibility choice theme ( light , dark ) , and more of that .",
    metaKeywords:
      "Mobile Application, Flutter Application, News World Application, News World App, Learn about News World Application , Learn about News World App",
    favicon: "assets/img/logo/worldNews.png",
    breadcrumbLabel: "World News",
    pageHeading: "World News Details",
    category: "Mobile Application",
    projectDate: "28 Aug, 2022 ➡️ 17 Sep, 2022",
    analyzing: {
      linkTitle: "Project Analyzing",
      href: "analyzing_worldNews.html",
      linkText: "Diagrams",
      icon: "diagram-3",
    },
    descriptionHtml:
      "News Application made with a flutter to browse all the various news from politics, sports, science and other fields that happen in the world, I also added many features to the application, such as logging in with social media accounts, rating the application, searching for a specific news within a specific field, possibility choice theme ( light , dark ) , and more of that .",
    ar: {
      name: "World News",
      descriptionHtml:
        "تطبيق أخبار مبني بـ Flutter لتصفّح مختلف الأخبار من السياسة والرياضة والعلوم وغيرها من المجالات حول العالم. أضفت إلى التطبيق مزايا كثيرة مثل تسجيل الدخول بحسابات التواصل الاجتماعي، وتقييم التطبيق، والبحث عن خبر معيّن ضمن مجال محدد، واختيار المظهر (فاتح / داكن)، وغير ذلك.",
    },
    projectUrl: {
      href: "https://github.com/MahmoudALBndkji/News-App",
      title: "Source Code",
      text: "GitHub",
      icon: "github",
    },
    technologies: [
      "Flutter",
      "News API",
      "Firebase",
      "State Management : Bloc",
    ],
    technologiesTitle: "Languages ​​and Technologies used",
    gallery: [
      {
        title: "Introduction Screens",
        src: "assets/img/portfolio/worldNews/2_Introduction_Pages.png",
        alt: "Introduction Screens",
      },
      {
        title: "Home & Search Screen",
        src: "assets/img/portfolio/worldNews/3_ Main_Search_Page.png",
        alt: "Home & Search Screen",
      },
      {
        title: "Rate Screen",
        src: "assets/img/portfolio/worldNews/4_Rating_Page.png",
        alt: "Rate Screen",
      },
      {
        title: "Login & Drawer Screen",
        src: "assets/img/portfolio/worldNews/5_drawer_connect_page.png",
        alt: "Login & Drawer Screen",
      },
      {
        title: "Poster",
        src: "assets/img/portfolio/worldNews/poster.png",
        alt: "Poster",
      },
    ],
  },
};

/*
 * Arabic: each project carries its own `ar` name + description above; the
 * strings shared across projects are translated once here. Brand and tech
 * names that read the same in Arabic (Flutter, Kotlin, …) pass through.
 */
const CATEGORY_AR = {
  "Mobile Application": "تطبيق موبايل",
  "Web Application": "تطبيق ويب",
  "Desktop Application": "تطبيق سطح مكتب",
  "Mobile & Web Application": "تطبيق موبايل وويب",
  "Mobile, Web & Desktop Application": "تطبيق موبايل وويب وسطح مكتب",
};

const MONTHS_AR = {
  Jan: "يناير",
  Feb: "فبراير",
  Mar: "مارس",
  Apr: "أبريل",
  May: "مايو",
  Jun: "يونيو",
  Jul: "يوليو",
  Aug: "أغسطس",
  Sep: "سبتمبر",
  Oct: "أكتوبر",
  Nov: "نوفمبر",
  Dec: "ديسمبر",
};

const TECH_AR = {
  "SignalR For Real-Time Notifications": "SignalR للإشعارات الفورية",
  "JWT Authentication & Role-Based Permissions":
    "مصادقة JWT وصلاحيات حسب الأدوار",
  "Localization : Arabic & English (RTL)":
    "تعدد اللغات : العربية والإنجليزية (RTL)",
  "xUnit Unit & Integration Tests": "اختبارات الوحدات والتكامل بـ xUnit",
  "Dealing with webView": "التعامل مع WebView",
  "State Management : Bloc": "إدارة الحالة : Bloc",
  "State Management : Bloc / Cubit": "إدارة الحالة : Bloc / Cubit",
  "State Management : Get": "إدارة الحالة : Get",
  "State Management : Provider": "إدارة الحالة : Provider",
  "Firebase Cloud Messaging For Notification":
    "Firebase Cloud Messaging للإشعارات",
  "Clean Architecture": "المعمارية النظيفة (Clean Architecture)",
  "SignalR For Real-Time Updates": "SignalR للتحديثات الفورية",
  "Google Sign-In": "تسجيل الدخول عبر Google",
  "Localization : Arabic & English": "تعدد اللغات : العربية والإنجليزية",
  "Stream & Binary File": "Stream والملفات الثنائية",
  "Access database": "قاعدة بيانات Access",
  "Sql server database": "قاعدة بيانات SQL Server",
  "Bunifu Library For Design": "مكتبة Bunifu للتصميم",
  "KNET Payment Gateway via WebView": "بوابة الدفع KNET عبر WebView",
  "QR Code Tickets": "تذاكر برمز QR",
  "Biometric Authentication": "المصادقة الحيوية (البصمة / الوجه)",
  "Background Service": "خدمة تعمل في الخلفية (Background Service)",
  "E-Commerce API": "واجهة برمجية للتجارة الإلكترونية (API)",
  "Print Invoices": "طباعة الفواتير",
  "Kontakt SDK For Scaning Beacon Device": "Kontakt SDK لمسح أجهزة Beacon",
  "Flutter (Android, iOS, Web & Windows)":
    "Flutter (Android، iOS، الويب، Windows)",
  "Dio & REST APIs": "Dio وواجهات REST",
  "go_router & Deep Links": "go_router والروابط العميقة (Deep Links)",
  "Responsive Data Grids & Dashboards": "جداول بيانات ولوحات تحكم متجاوبة",
  "Bitbucket Pipelines CI": "التكامل المستمر عبر Bitbucket Pipelines",
};

const GALLERY_AR = {
  "Login Page": "صفحة تسجيل الدخول",
  "Point of Sale Page": "صفحة نقطة البيع",
  "Production & Customer Orders Pages": "صفحتا أوامر الإنتاج وطلبات العملاء",
  "Stock Balances & Transfer Orders Pages":
    "صفحتا أرصدة المخزون وأوامر التحويل",
  "Mobile Dashboard & Van Sale Pages":
    "لوحة التحكم والبيع المتنقل على الجوال",
  "Mobile Van Stock & Production Orders Pages":
    "مخزون السيارة وأوامر الإنتاج على الجوال",
  "Authentication Page": "صفحة المصادقة",
  "Home Page & Transfer Money Page": "الصفحة الرئيسية وصفحة تحويل الأموال",
  "Home Page": "الصفحة الرئيسية",
  "Task Details Page": "صفحة تفاصيل المهمة",
  "Settings Page": "صفحة الإعدادات",
  "Scaning Beacon Page": "صفحة مسح أجهزة Beacon",
  "Home & Favorites Pages": "الصفحة الرئيسية وصفحة المفضلة",
  "Search & Filter Pages": "صفحتا البحث والتصفية",
  "Clinic Details & Booking Pages": "صفحتا تفاصيل العيادة والحجز",
  "Clinics & Drawer Pages": "صفحة العيادات والقائمة الجانبية",
  "Add Student Screen": "شاشة إضافة طالب",
  "Edit Student Screen": "شاشة تعديل طالب",
  "Store Data Text File Screen": "شاشة حفظ البيانات في ملف نصي",
  "Store Data Access Screen": "شاشة حفظ البيانات في Access",
  "Create Account Screen": "شاشة إنشاء حساب",
  "Home Screen": "الشاشة الرئيسية",
  "Forget Password Verification Screen": "شاشة التحقق لاستعادة كلمة المرور",
  "Google Map Screen": "شاشة خرائط Google",
  "Menu Screen": "شاشة قائمة الطعام",
  "Login Screen": "شاشة تسجيل الدخول",
  "Edit Account Screen": "شاشة تعديل الحساب",
  "Print Invoice Screen": "شاشة طباعة الفاتورة",
  "Discover & About Pages": "صفحتا الاستكشاف ونبذة عنا",
  "Offering & Services Pages": "صفحتا العروض والخدمات",
  "Entertainment Page": "صفحة الترفيه",
  "Categories & Products Pages": "صفحتا الأقسام والمنتجات",
  "Cart Pages": "صفحات السلة",
  "Reports Page": "صفحة التقارير",
  "Orders Pages": "صفحات الطلبات",
  "Selected Country Page": "صفحة اختيار الدولة",
  "Connection VPN Page": "صفحة الاتصال بـ VPN",
  "Network Details Info Page": "صفحة تفاصيل الشبكة",
  "Excercises Screen": "شاشة التمارين",
  "Locked Level & Break Time Screen": "شاشة المستوى المقفل ووقت الاستراحة",
  "Change Image & Drawer Screen": "شاشة تغيير الصورة والقائمة الجانبية",
  "FeedBack Screen": "شاشة الملاحظات",
  "Rate Screen": "شاشة التقييم",
  "App Developer Screen": "شاشة مطوّر التطبيق",
  "User Home Page": "الصفحة الرئيسية للمستخدم",
  "Buy Box Pages": "صفحات شراء صندوق",
  "Orders For Driver Pages": "صفحات طلبات السائق",
  "Details Home Page": "صفحة تفاصيل العقار",
  "Home Page & Drawer": "الصفحة الرئيسية والقائمة الجانبية",
  "Product Details Screen": "شاشة تفاصيل المنتج",
  "Categories Screen": "شاشة الأقسام",
  "Favorites Screen": "شاشة المفضلة",
  "Search Screen": "شاشة البحث",
  "Settings Screen": "شاشة الإعدادات",
  Poster: "ملصق التطبيق",
  "Dashboard Page": "صفحة لوحة التحكم",
  "Invoice Format Page": "صفحة تنسيق الفاتورة",
  "Select Language Page": "صفحة اختيار اللغة",
  "Drawer & Minsity App Page": "القائمة الجانبية وصفحة تطبيق الوزارة",
  "Log Attendance Page": "صفحة سجل الحضور",
  "Questions & Answers Page": "صفحة الأسئلة والأجوبة",
  "Login & Register Screen": "شاشة تسجيل الدخول وإنشاء حساب",
  "Chat & Create Post Screen": "شاشة المحادثة وإنشاء منشور",
  "Friends & Settings Screen": "شاشة الأصدقاء والإعدادات",
  "Product Details Page": "صفحة تفاصيل المنتج",
  "Cart Page": "صفحة السلة",
  "My Forms Page": "صفحة نماذجي",
  "Send Mail Page": "صفحة إرسال بريد",
  "Profile Pages": "صفحات الملف الشخصي",
  "Festival Offers Page": "صفحة عروض المهرجان",
  "BarCode Reader Page": "صفحة قارئ الباركود",
  "Shareholder Profits Page": "صفحة أرباح المساهمين",
  "Association News Page": "صفحة أخبار الجمعية",
  "Branches and Services Page": "صفحة الفروع والخدمات",
  "Search For Product Page": "صفحة البحث عن منتج",
  "Report Item Page": "صفحة الإبلاغ عن منتج",
  "Board Directors Page": "صفحة مجلس الإدارة",
  "Issued Cheque Pages": "صفحات الشيكات الصادرة",
  "Roles, Cloud Storage & API": "الأدوار والتخزين السحابي والـ API",
  "Event Log, Interactive UI & Backup":
    "سجل الأحداث والواجهة التفاعلية والنسخ الاحتياطي",
  "Introduction Screens": "شاشات التعريف",
  "Home & Search Screen": "الشاشة الرئيسية والبحث",
  "Login & Drawer Screen": "شاشة تسجيل الدخول والقائمة الجانبية",
};

const missing = [];

function lookup(map, key, where) {
  if (map[key] != null) return map[key];
  missing.push(`${where}: "${key}"`);
  return key;
}

/** "6 Aug, 2026" or "Nov 19, 2023" → "6 أغسطس 2026"; "Current" → "حتى الآن" */
function dateAr(s, where) {
  if (s === "Current") return "حتى الآن";
  const m =
    s.match(/^(\d{1,2}) ([A-Z][a-z]{2}), (\d{4})$/) ||
    s.match(/^([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/);
  if (!m) {
    missing.push(`${where} date: "${s}"`);
    return s;
  }
  const [day, month] = /^\d/.test(m[1]) ? [m[1], m[2]] : [m[2], m[1]];
  return `${day} ${lookup(MONTHS_AR, month, where)} ${m[3]}`;
}

/** In RTL the range reads right to left, so the arrow points left */
function projectDateAr(range, where) {
  return range
    .split("➡️")
    .map((s) => dateAr(s.trim(), where))
    .join(" ⬅️ ");
}

for (const [id, p] of Object.entries(portfolioDetails)) {
  const own = p.ar || {};
  if (!own.name || !own.descriptionHtml) missing.push(`${id}: ar.name / ar.descriptionHtml`);
  const name = own.name || p.breadcrumbLabel;
  const descriptionHtml = own.descriptionHtml || p.descriptionHtml;
  p.ar = {
    metaTitle: `تفاصيل ${name}`,
    metaDescription:
      own.metaDescription || descriptionHtml.replace(/<br>\s*/g, " "),
    breadcrumbLabel: name,
    pageHeading: `تفاصيل ${name}`,
    category: lookup(CATEGORY_AR, p.category, id),
    projectDate: projectDateAr(p.projectDate, id),
    descriptionHtml,
    technologiesTitle: "اللغات والتقنيات المستخدمة",
    technologies: (p.technologies || []).map((t) => TECH_AR[t] || t),
    gallery: (p.gallery || []).map((g) => lookup(GALLERY_AR, g.title, id)),
  };
}

if (missing.length) {
  console.warn(
    "Missing Arabic (English is shown instead):\n  " + missing.join("\n  ")
  );
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  outFile,
  JSON.stringify(portfolioDetails, null, 2),
  "utf8"
);
console.log("Wrote", outFile);
