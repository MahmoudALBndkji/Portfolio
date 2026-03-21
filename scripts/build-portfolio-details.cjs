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
    storeButtons: [
      {
        variant: "apple",
        href: "https://apps.apple.com/tr/app/newpark-agents/id6476807006?l=tr",
        subtitle: "Download on the",
        title: "App Store",
      },
      {
        variant: "google",
        href: "https://play.google.com/store/apps/details?id=newpark.agentMobileApplication&hl=en_US&gl=US",
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
    storeButtons: [
      {
        variant: "apple",
        href: "https://apps.apple.com/us/app/rds-box-app/id6738136465",
        subtitle: "Download on the",
        title: "App Store",
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

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  outFile,
  JSON.stringify(portfolioDetails, null, 2),
  "utf8"
);
console.log("Wrote", outFile);
