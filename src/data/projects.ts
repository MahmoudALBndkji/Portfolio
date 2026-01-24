import { Project } from "@/app/types/project";
import { NewparkImgs } from "./portfolio-images/newpark";
import { TimeAttendanceImgs } from "./portfolio-images/timeAttendance";
import { TreemaImgs } from "./portfolio-images/treema";
import { SpotBooksImgs } from "./portfolio-images/spotBooks";
import { OpenVpnImgs } from "./portfolio-images/openVpn";
import { AssetManagementImgs } from "./portfolio-images/assetManagement";
import { RdsBoxImgs } from "./portfolio-images/rdsBox";
import { WafraImgs } from "./portfolio-images/wafra";
import { BeaconReaderImgs } from "./portfolio-images/beaconReader";
import { AlsafaExchangeImgs } from "./portfolio-images/alsafaExchange";
import { TrasoolOnlineImgs } from "./portfolio-images/trasoolOnline";
import { RealEstateImgs } from "./portfolio-images/realEstate";
import { ToKnowMeImgs } from "./portfolio-images/toKnowMe";
import { SallateImgs } from "./portfolio-images/sallate";
import { WorldNewsImgs } from "./portfolio-images/worldNews";
import { PonderMoreImgs } from "./portfolio-images/ponderMore";
import { DatabaseManagementImgs } from "./portfolio-images/databaseManagement";
import { MallToGoImgs } from "./portfolio-images/mallToGo";
import { ListerImgs } from "./portfolio-images/lister";

export const projects: Project[] = [
  {
    id: "newpark-agents",
    title: "NewPark Agents",
    category: "Mobile Application",
    date: "28 Aug, 2023 ➡️ 20 Sep, 2024",
    description:
      "The main idea of the application is to facilitate the work of customers so that they can create orders and follow up on their status, in addition to many features such as archive of previous orders, returns, inventory, and many other features.",
    technologies: [
      "Flutter",
      "Firebase Cloud Messaging For Notification",
      "State Management : Bloc",
    ],
    mainImage: NewparkImgs[0],
    images: NewparkImgs,
    appStoreLink:
      "https://apps.apple.com/tr/app/newpark-agents/id6476807006?l=tr",
  },
  {
    id: "time-attendance",
    title:
      "Time Attendance For Ministry of Electricity Water and Renewable Energy",
    category: "Mobile Application",
    date: "1 Oct, 2023 ➡️ 28 Feb, 2024",
    description:
      "The application is for the Ministry of Electricity and Water in Kuwait. The main idea of the application is to follow up on employee attendance, in addition to many services such as leaves, permission, and many other features.",
    technologies: [
      "Flutter",
      "Firebase Cloud Messaging For Notification",
      "State Management : GetX",
    ],
    mainImage: TimeAttendanceImgs[0],
    images: TimeAttendanceImgs,
  },
  {
    id: "treema",
    title: "Treema",
    category: "Mobile & Web Application",
    date: "1 Mar, 2024 ➡️ 1 Jul, 2024",
    description:
      "An integrated e-commerce application (Mobile & Web) that displays many products and various classifications, in addition to the ability to like a specific product, a search engine has been added to find a product with specific features.",
    technologies: [
      "Flutter",
      "Firebase Cloud Messaging For Notification",
      "State Management : Provider",
    ],
    mainImage: TreemaImgs[0],
    images: TreemaImgs,
    webLink: "https://treema-collection.store",
  },
  {
    id: "spot-books-pos",
    title: "Spot Books POS",
    category: "Mobile & Web Application",
    date: "15 Jul, 2024 ➡️ Present",
    description:
      "A comprehensive point of sale (POS) system designed for businesses to manage sales, inventory, and customer transactions efficiently. Features include real-time reporting, multi-store support, and seamless integration with payment gateways.",
    technologies: [
      "Flutter",
      "Firebase Cloud Messaging For Notification",
      "State Management : Riverpod",
    ],
    mainImage: SpotBooksImgs[0],
    images: SpotBooksImgs,
    webLink: "https://spotbooks.app/",
  },
  {
    id: "open-vpn",
    title: "Open VPN",
    category: "Mobile Application",
    date: "1 Aug, 2024 ➡️ 15 Aug, 2024",
    description:
      "A secure VPN application that allows users to connect to various servers worldwide, ensuring privacy and unrestricted internet access. Features include server selection, connection status monitoring, and data usage tracking.",
    technologies: ["Flutter", "OpenVPN Protocol"],
    mainImage: OpenVpnImgs[0],
    images: OpenVpnImgs,
    gitHubLink: "https://github.com/MahmoudALBndkji/Flutter-Open-Vpn-App",
    driveLink:
      "https://drive.google.com/drive/folders/1Fy50TROQopNtBhVLjeeZkEnFfuVRN0jV",
  },
  {
    id: "asset-management",
    title: "Asset Management",
    category: "Mobile Application",
    date: "20 Aug, 2024 ➡️ 10 Sep, 2024",
    description:
      "An application designed to track and manage organizational assets. It allows users to assign assets, track their location, maintenance history, and depreciation. Features include barcode scanning and reporting.",
    technologies: ["Flutter", "SQLite", "State Management : Bloc"],
    mainImage: AssetManagementImgs[0],
    images: AssetManagementImgs,
  },
  {
    id: "rds-box",
    title: "RDS Box",
    category: "Mobile Application",
    date: "15 Sep, 2024 ➡️ 30 Sep, 2024",
    description:
      "A delivery management application that connects drivers with orders. It features real-time tracking, order management, and route optimization to ensure timely deliveries.",
    technologies: ["Flutter", "Bluetooth", "State Management : Bloc"],
    mainImage: RdsBoxImgs[0],
    images: RdsBoxImgs,
    appStoreLink: "https://apps.apple.com/us/app/rds-box/id6744166951",
  },
  {
    id: "wafra",
    title: "Wafra",
    category: "Mobile Application",
    date: "5 Oct, 2024 ➡️ 25 Oct, 2024",
    description:
      "An investment and savings application that helps users manage their portfolios, track market trends, and make informed financial decisions. Features include real-time stock data and personalized alerts.",
    technologies: ["Flutter", "API", "State Management : Bloc"],
    mainImage: WafraImgs[0],
    images: WafraImgs,
    appStoreLink:
      "https://apps.apple.com/us/app/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D9%88%D9%81%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D9%8A%D8%A9/id6499200202",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=app.wafra.victoryArch&hl=en_US&gl=US&pli=1",
  },
  {
    id: "beacon-reader",
    title: "Beacon Reader",
    category: "Mobile Application",
    date: "1 Nov, 2024 ➡️ 15 Nov, 2024",
    description:
      "A utility application that scans for nearby Bluetooth beacons and displays their information. Useful for proximity marketing and indoor navigation setups.",
    technologies: ["Flutter", "Beacons", "State Management : Bloc"],
    mainImage: BeaconReaderImgs[0],
    images: BeaconReaderImgs,
    driveLink:
      "https://drive.google.com/drive/folders/17oQmW2LcV-cbd1w45qGrOxcgQ0ZLAjaq",
  },
  {
    id: "alsafa-exchange",
    title: "Alsafa Exchange",
    category: "Mobile Application",
    date: "8 Oct, 2024 ➡️ 20 Mar, 2025",
    description:
      "AlSafa Exchange mobile enabling secure authentication, seamless fund transfers via intermediary banks, transaction history tracking, account management, and advanced data security with encryption and verification.",
    technologies: [
      "Flutter",
      "Dealing with webView",
      "State Management : Bloc",
      "Firebase Cloud Messaging For Notification",
    ],
    mainImage: AlsafaExchangeImgs[0],
    images: AlsafaExchangeImgs,
    appStoreLink: "https://apps.apple.com/us/app/alsafa-exchange/id6739005056",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.exchange_app.safa&hl=en_US&gl=US",
  },
  {
    id: "trasool-online",
    title: "Trasool Online",
    category: "Mobile Application",
    description:
      "Developed and managed a vendor and market management app (Trasool) similar to a POS system, enabling seamless inventory tracking, sales processing, and vendor operations. Enhanced efficiency in market transactions and vendor-client interactions through intuitive features.",
    technologies: [
      "Flutter",
      "Firebase Cloud Messaging For Notification",
      "State Management : Bloc",
    ],
    mainImage: TrasoolOnlineImgs[0],
    images: TrasoolOnlineImgs,
  },
  {
    id: "real-estate",
    title: "Real Estate",
    category: "Mobile Application",
    description:
      "Developed and managed a user-friendly real estate app facilitating property searches, virtual tours, and seamless communication between buyers, sellers, and agents. Enhanced user experience with intuitive navigation, real-time updates, and advanced filtering options.",
    technologies: [
      "Flutter",
      "Firebase Cloud Messaging For Notification",
      "State Management : Bloc",
    ],
    mainImage: RealEstateImgs[0],
    images: RealEstateImgs,
  },
  {
    id: "to-know-me",
    title: "To Know Me",
    category: "Mobile Application",
    description:
      "Social networking application made with a flutter whose main idea is to facilitate communication and acquaintance with people and to build a strong communication network. The application contains the ability to publish posts and has many features such as commenting, liking, private chatting .",
    technologies: [
      "Flutter",
      "Firebase Cloud Messaging For Notification",
      "State Management : Bloc",
    ],
    mainImage: ToKnowMeImgs[0],
    images: ToKnowMeImgs,
  },
  {
    id: "sallate",
    title: "Sallate",
    category: "Mobile Application",
    description:
      "Online store flutter application It displays many products and various Categories, in addition to the ability to like a specific product, has also been added search engine has been added to find a product with specific features .",
    technologies: [
      "Flutter",
      "Firebase Cloud Messaging For Notification",
      "State Management : Bloc",
    ],
    mainImage: SallateImgs[0],
    images: SallateImgs,
    gitHubLink:"https://github.com/MahmoudALBndkji/Sallate",
  },
  {
    id: "world-news",
    title: "World News",
    category: "Mobile Application",
    description:
      "News Application made with a flutter to browse all the various news from politics, sports, science and other fields that happen in the world, I also added many features to the application, such as logging in with social media accounts, rating the application, searching for a specific news within a specific field, possibility choice theme ( light , dark ) , and more of that .",
    technologies: [
      "Flutter",
      "Firebase Cloud Messaging For Notification",
      "State Management : Bloc",
    ],
    mainImage: WorldNewsImgs[0],
    images: WorldNewsImgs,
    driveLink:"https://github.com/MahmoudALBndkji/News-App",
  },
  {
    id: "ponder-more",
    title: "Ponder More",
    category: "Mobile Application",
    description:
      "Flutter application He explains and clarifies the sport of yoga, in addition to tips for its practice, The application contains levels, each level has a certain number of assigned exercises , The application also contains several features such as evaluation, communication with the application developer, choice theme ( light , dark ) , and more of that .",
    technologies: [
      "Flutter",
      "Firebase Cloud Messaging For Notification",
      "State Management : Bloc",
    ],
    mainImage: PonderMoreImgs[0],
    images: PonderMoreImgs,
  },
  {
    id: "database-management",
    title: "Database Management",
    category: "Desktop Application",
    description:
      "A Desktop Application made in C# language The main goal of the program is to add, modify and delete student data with the ability to store data in each of Access databases or a text file according to a specific format with the ability to save changes .",
    technologies: ["C#", "Access Database", "File Handling"],
    mainImage: DatabaseManagementImgs[0],
    images: DatabaseManagementImgs,
    gitHubLink:"https://github.com/MahmoudALBndkji/Database-Management",
  },
  {
    id: "mall-to-go",
    title: "Mall To Go",
    category: "Desktop Application",
    description:
      "A Desktop Application using C# and some design library for a mall cashier system complete with a database and other feature Like searching and sorting the items and real time editing of the inventory and a printable bill .",
    technologies: ["C#", "SQL Server", "Crystal Reports"],
    mainImage: MallToGoImgs[0],
    images: MallToGoImgs,
  },
  {
    id: "lister",
    title: "Lister",
    category: "Web Application",
    description:
      "Food Delivery app that have phone branch and web branch and back end maid from asp.net core api and my SQL database ,I personally worked with the web branch I did interfaces fully dynamic the front end UI using html ,css, js, bootstrap ,and more libraries for styling like fontawesome ,animations,and many other design libraries to achieve a dynamic fully functional wep app .",
    technologies: ["ASP.NET Core API", "MySQL", "HTML/CSS/JS", "Bootstrap"],
    mainImage: ListerImgs[0],
    images: ListerImgs,
  },
];
