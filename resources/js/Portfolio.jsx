import React, { useState, useEffect, useRef } from 'react';
import {
    Menu,
    X,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    ArrowUp,
    ArrowRight,
    ExternalLink,
    Download,
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle2,
    Briefcase,
    GraduationCap,
    Smartphone,
    Globe,
    Database,
    Server,
    Clock,
    Calendar,
    Quote,
    CreditCard,
    Wifi,
    ShoppingCart,
    QrCode,
    Cpu,
    BarChart2,
    LineChart,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  CONTENT                                                            */
/* ------------------------------------------------------------------ */

const PERSONAL = {
    name: 'Muhammed Arif Fuad Akash',
    avatar: '/images/profile.jpg',
    roles: [
        'Application & Software Engineer',
        'MSc Student @ Uppsala University',
        'Researcher',
    ],
    tagline:
        "I build reliable fintech systems where hardware, software and people meet.",
    email: 'fuadakash0430@gmail.com',
    phone: '+46 76 085 01 79',
    location: 'Stockholm, Sweden',
    socials: {
        linkedin: 'https://linkedin.com/in/arif-fuad-akash',
    },
};

const HERO_SPECS = [
    { label: 'STATUS', value: 'Available for work', dot: true },
    { label: 'BASE', value: 'Stockholm, Sweden' },
    { label: 'FOCUS', value: 'Fintech, Full Stack Android & Web' },
];

const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    // { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
];

const STATS = [
    { label: 'Years of Experience', value: '2.5+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Research Publications', value: '2' },
    { label: 'Happy Clients', value: '15+' },
];


const EXPERIENCE = [
    {
        role: 'Application and Software Engineer',
        org: 'ADN Technologies LTD.',
        period: 'October, 2024 — July, 2026',
        description: [
            'Android POS payment application development',
            'ISO 8583 payment protocol integration',
            'PAX POS, IoT, and kiosk device integration',
            'Banking and fintech payment solutions',
            'bKash IoT sound-box and MQTT integration',
            'QR-based digital receipt management system',
            'Self-service restaurant kiosk development',
            'Spring Boot and Laravel backend development',
            'Hardware SDK integration and R&D',
            'Payment gateway and API integration',
            'Technical product demonstrations and client support',
        ],
    },

    {
        role: 'Software Engineer Intern',
        org: 'Business Automation LTD.',
        period: 'February, 2024 — April, 2024',
        description: [
            'Contributed to web development projects using PHP, SQL, and JavaScript, building a practical foundation in full-stack\n' +
            'software engineering.',
            'Completed the internship with a formal assessment certification recognizing proficiency in core development skills.',
        ],
    },
];



const EDUCATION = [
    {
        role: 'Masters in Information System',
        org: 'Uppsala University',
        period: '2026 — 2028',
        description: [
            'Currently pursuing a 120 ECTS Master’s degree in Information Systems.',
            'Developing advanced technical and project management skills to prepare for future roles in IT project management.',
        ],
    },
    {
        role: 'BSc in Computer Science and Engineering',
        org: 'University of Liberal Arts Bangladesh',
        period: '2020 — 2024',
        description: [
            'Graduated with honours.',
            'Pursued a complete computer science and engineering degree of 140 credit with a minor in BBA.',
        ],
    },
];

const SKILLS = [
    {
        category: 'FinTech & Payment Systems',
        items: [
            'ISO 8583',
            'Transware',
            'Hypercom',
            'SmartVista',
            'Visa',
            'Mastercard',
            'UnionPay',
            'NPSB',
            'American Express',
            'Card Payment Processing',
            'Payment Gateways'
        ]
    },

    {
        category: 'Languages',
        items: [
            'Java',
            'PHP',
            'Kotlin',
            'C/C++',
            'JavaScript / TypeScript',
            'C#',
            'Python',
        ],
    },
    {
        category: 'Frameworks & Platforms',
        items: ['Laravel', 'Spring Boot', 'Android SDK', 'React', 'Flutter', 'ASP .NET Core'],
    },
    {
        category: 'Data & Infrastructure',
        items: ['MySQL', 'MSSQL', 'Firebase', 'Docker', 'Git'],
    },
    {
        category: 'Frontend Development',
        items: ['Vue.js', 'React', 'React Native', 'Bootstrap', 'Tailwind CSS', 'HTML/CSS', 'XML']
    },
    {
        category: 'Research & Analysis',
        items: [
            'ML/Deep Learning',
            'Data Analysis',
            'IOT',
        ],
    },
];

const SERVICES = [
    {
        icon: CreditCard,
        title: 'Payment Solutions & POS Development',
        description:
            'End-to-end payment applications for Android POS terminals and kiosks using ISO 8583, deployed across major Bangladeshi banks on PAX devices including A910S, A99, IM30, and IM25.',
    },
    {
        icon: Globe,
        title: 'Web Application & Portal Development',
        description:
            'Full-stack web portals for payment management, employee systems, and support ticketing — built with clean architecture and designed for banks, merchants, and internal teams.',
    },
    {
        icon: Smartphone,
        title: 'Android App Development',
        description:
            'Native Android applications for fintech, POS terminals, and self-service kiosks — covering payment flows, receipt printing, APN SIM connectivity, and hardware SDK integration.',
    },
    // {
    //     icon: Wifi,
    //     title: 'IoT Payment Integration',
    //     description:
    //         'IoT-based payment solutions including sound-box integrations via MQTT. Developed Bangladesh\'s first IoT payment speaker for bKash, including the backend management portal.',
    // },
    {
        icon: ShoppingCart,
        title: 'Self-Service Kiosk Systems',
        description:
            'Complete self-ordering and payment kiosk solutions — from the customer-facing PAX SK700 app to the restaurant management portal and integrated card payment flow.',
    },
    // {
    //     icon: QrCode,
    //     title: 'QR & Digital Receipt Systems',
    //     description:
    //         'QR-based digital receipt management systems allowing customers to access receipts via mobile, with secure backend portals for managing transaction data between banks and merchants.',
    // },
    {
        icon: Cpu,
        title: 'Hardware–Software Integration & R&D',
        description:
            'R&D and integration of payment terminals, sound boxes, and kiosk hardware from manufacturers like LANDI, TopWise, and MoreFun — including SDK evaluation, device testing, and system integration.',
    },
    {
        icon: Server,
        title: 'API Development & Integration',
        description:
            'RESTful APIs and third-party integrations including banking payment protocols, bKash payment payloads, and payment gateway integration with providers like PaySuite.',
    },
    {
        icon: Database,
        title: 'Database Design & Management',
        description:
            'Schema design, query optimisation, and secure transaction data management for fintech systems handling sensitive banking and merchant data at scale.',
    },
    {
        icon: BarChart2,
        title: 'Technical Consulting & Demos',
        description:
            'Technical presentations and product demonstrations to senior bank officials — bridging the gap between engineering capabilities and business applications in fintech.',
    },
];

const PROJECT_CATEGORIES = ['All', 'Web', 'Android POS', 'Kiosk', 'Research'];

const PROJECTS = [
    {
        id: 1,
        title: 'Echonex',
        category: 'Web',
        icon: Globe,
        shortDesc: 'A web portal that integrates bKash mobile banking transaction payloads with the PAX MQTT server to broadcast real-time payment notifications through payment speaker devices.',
        fullDesc: {
            summary: 'Echonex bridges bKash mobile banking with physical merchant outlets through real-time audio payment notifications.',
            flow: [
                'Customer completes a bKash payment at a merchant outlet',
                'bKash fires a webhook POST to Echonex with the merchant mobile number and amount',
                'Echonex looks up its registry to find the PAX speaker bound to that merchant',
                'Echonex publishes a targeted MQTT message to the PAX MQTT broker',
                'Broker pushes the notification directly to the subscribed speaker device',
                'Speaker announces the payment confirmation out loud in real time',
            ],
            features: [
                { title: 'Merchant & device registry', desc: 'Binds each bKash merchant mobile number to a specific PAX speaker serial number' },
                { title: 'Webhook ingestion', desc: 'Receives and validates bKash transaction payloads, extracts merchant identity and amount' },
                { title: 'Device resolver', desc: 'Maps incoming webhook merchant data to the correct registered speaker device' },
                { title: 'MQTT broadcast', desc: 'Publishes to the PAX MQTT server on a device-specific topic — no polling required' },
                { title: 'Real-time audio', desc: 'Customers and merchants hear instant confirmation without checking a screen' },
            ],
            closing: 'Removes the need for merchants to watch a phone screen — the outlet speaks for itself.',
        },
        tech: ['PAX', 'MQTT', 'bKash API', 'Spring Boot', 'SDK', 'APN SIM'],

        screenshots: [
            { type: 'video', embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7486703993969070080?compact=1' },
            '/images/projects/echonex/main.png',
            '/images/projects/echonex/1.png',
            '/images/projects/echonex/2.png',
            '/images/projects/echonex/3.png',
            '/images/projects/echonex/4.png',
        ],

        screenshotCaptions: [
            'In Bangladesh banking sector first live transaction payment broadcast speaker.',
            'IoT payment speaker live information, device registry and maintenance.',
            'End-to-end system workflow architecture illustrating the interconnected services, dependencies, and operational complexity.',
            'Per-device licensing and entitlement management enabling granular service control, warranty validation, and lifecycle tracking.',
            'Centralized management dashboard providing real-time operational visibility, analytics, and system-wide oversight.',
            'Hardened authentication and authorization infrastructure designed to secure access and mitigate malicious intrusion attempts.',
        ],
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        id: 2,
        title: 'EchoReceipt',
        category: 'Web',
        icon: Globe,
        shortDesc: 'Web-based POS receipt platform enabling QR-based digital receipts and centralized merchant storage, supporting seamless, paperless transaction management.',
        fullDesc: {
            summary: 'EchoReceipt digitizes the POS receipt lifecycle, turning every printed slip into a QR-accessible digital record backed by object storage.',
            flow: [
                'Customer completes a transaction at the POS terminal',
                'POS sends the bitmap receipt and transaction payload straight to the EchoReceipt portal API',
                'Portal stores the receipt image in the MinIO object server',
                'Portal writes the image link alongside the transaction data in its database',
                'Portal returns a digital receipt link back to the POS',
                'POS renders the link as a QR code on screen for the customer to scan and view instantly',
            ],
            features: [
                { title: 'Transaction ledger', desc: 'Keys every transaction record in the portal to its digital receipt, searchable by amount, date, terminal or merchant' },
                { title: 'Receipt vault', desc: 'Stores receipt bitmaps in MinIO with the retrieval link bound to the transaction row — images stay private behind the portal' },
                { title: 'Bank managerial access', desc: 'Role-based console for bank staff to onboard, edit and maintain the POS merchants under their portfolio' },
                { title: 'Overview dashboard', desc: 'Aggregated view of transaction volume, receipt delivery and scan activity across merchants and terminals' },
                { title: 'Device management', desc: 'Registers each POS terminal, tracks its status and controls which merchant and outlet it reports against' },
                { title: 'QR delivery', desc: 'Customers scan the receipt link directly from the terminal screen — no app, no email, no paper' },
            ],
            closing: 'Removes the paper roll from the counter — the receipt lives in the portal and travels by scan.',
        },
        tech: ['PAX', 'Spring Boot', 'Minio', 'Android', 'SDK', 'API'],
        screenshots: [
            { type: 'video', embedUrl: 'https://drive.google.com/file/d/1JOkYYVh4Pi9h4Ou213MvU_Kb0e4VupLT/preview' },
            '/images/projects/echoreceipt/main.png',
            '/images/projects/echoreceipt/5.png',
            '/images/projects/echoreceipt/1.png',
            '/images/projects/echoreceipt/4.png',
            '/images/projects/echoreceipt/3.png'
        ],
        screenshotCaptions: [
            'POS transaction seamless QR-based digital receipt generation.',
            'Digital POS receipt with essential merchant transaction data.',
            'POS sends receipt to portal, portal stores and returns a link, customer scans the QR.',
            'Centralized transaction view for streamlined banking and merchant operations.',
            'Unified terminal management for rapid device monitoring and control.',
            'Executive dashboard providing instant operational insights.',
        ],

        liveUrl: '#',
        codeUrl: '#',
    },
    {
        id: 3,
        title: 'ADNT Employee Management System',
        category: 'Web',
        icon: Globe,
        shortDesc: 'A comprehensive corporate employee management system built to digitalize and streamline workplace operations. The platform helps organizations manage employees, workflows, and internal processes through a secure, centralized system.',
        fullDesc: {
            summary: 'ADNT EMS is a Laravel and Vue.js employee management system that unifies gate-camera attendance, leave, sales activity and product logistics on a single MySQL core.',
            flow: [
                'Gate face camera identifies an employee on arrival and posts the punch to the Laravel API',
                'Laravel validates the payload, resolves the employee record and writes it to MySQL',
                'Employees raise leave, conveyance, requisition or client entries from the Vue.js frontend',
                'Laravel routes each submission through its approval chain and emails the assigned approver',
                'Approved records update the shared MySQL tables that attendance, sales and inventory all read from',
                'Vue dashboards and report exports render the current state for employees and managers on demand',
            ],
            features: [
                { title: 'Face-camera attendance', desc: 'Captures daily in and out punches at the gate in a moment, with period-wise attendance reports generated on demand' },
                { title: 'Leave & conveyance', desc: 'Employees apply, approvers act, and every decision is recorded and pushed out by email notification' },
                { title: 'Business activity', desc: 'Sales forecasting, tender management and client contact tracking kept per employee, with reports rolled up from the same records' },
                { title: 'Product lifecycle', desc: 'Tracks product records through demo, development use, sale requisition, approval, assignment and return, ending in a generated delivery receipt' },
                { title: 'Overview dashboards', desc: 'Employee and manager views covering attendance, remaining leave balance, top performers, top clients and current sales' },
                { title: 'Website content', desc: 'Publishes blog posts, images and page content to the company website from inside the same panel' },
            ],
            closing: 'One Laravel core behind a Vue front end — attendance, approvals, sales and stock stop living in separate spreadsheets.',
        },
        tech: ['Laravel', 'Veu.js', 'MySql', 'API', 'JavaScript'],
        screenshots: [
            '/images/projects/ems/1.png',
            '/images/projects/ems/2.png',
            '/images/projects/ems/3.png',
            '/images/projects/ems/4.png',
            '/images/projects/ems/5.png',
            '/images/projects/ems/6.png',
            '/images/projects/ems/7.png',
            '/images/projects/ems/8.png',
            '/images/projects/ems/9.png',
            '/images/projects/ems/10.png',
            '/images/projects/ems/11.png',
        ],
        screenshotCaptions: [
            'Regional overview map showing employment rate variations across geographic areas.',
        ],
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        id: 4,
        title: 'ADNT Partner Network',
        category: 'Web',
        icon: Globe,
        shortDesc: 'A centralized ticketing web portal built for ADN Technologies LTD and its clients to provide seamless technical support with the quickest possible response time.',
        fullDesc: {
            summary: 'A centralized ticketing portal built on Laravel and Tailwind that connects ADN Technologies support engineers to partner organizations and their merchants for the fastest possible technical response.',
            flow: [
                'ADNT registers its support engineers and onboards partner organizations such as banks and payment operators',
                'Each partner registers its merchants as beneficiaries entitled to raise support requests',
                'A merchant opens a ticket against a specific device serial number and software module',
                'Laravel persists the ticket through its MVC layer and emails the assigned engineers immediately',
                'Engineers reply on the thread, attaching the drivers, SDKs or configuration files the issue needs',
                'Automated reminders chase pending replies until the issue is resolved and the ticket is closed',
            ],
            features: [
                { title: 'Three-tier registry', desc: 'ADNT engineers, partner organizations and their merchants, each with scoped access to the tickets that concern them' },
                { title: 'Ticket raising', desc: 'Merchants log issues from the portal and the assigned engineers are notified by email the moment a ticket lands' },
                { title: 'Engineer replies', desc: 'Threaded responses carrying the files, SDKs and setup instructions needed to resolve the fault' },
                { title: 'Device-level tracking', desc: 'Every ticket is bound to a device serial number and software module, so history follows the individual POS, sound box, card reader, PAX or Nebula unit' },
                { title: 'Automated reminders', desc: 'Scheduled nudges for unanswered replies and stale tickets keep response times inside their target window' },
                { title: 'Reporting & dashboard', desc: 'Issue reports by device, module, partner or engineer, alongside a live overview of open, pending and closed volume with notifications' },
            ],
            closing: 'One thread per device, one owner per ticket — support requests stop getting lost between the merchant, the bank and the vendor.',
        },
        tech: ['Laravel', 'JavaScript', 'Html/CSS', 'Tailwind', 'MySql'],

        screenshots: [
            'images/projects/partnernetwork/1.png',
            'images/projects/partnernetwork/2.png',
            'images/projects/partnernetwork/3.png',
            'images/projects/partnernetwork/4.png',
            'images/projects/partnernetwork/5.png',
            'images/projects/partnernetwork/6.png',
            'images/projects/partnernetwork/7.png',
            'images/projects/partnernetwork/8.png',
            'images/projects/partnernetwork/9.png',
            'images/projects/partnernetwork/10.png',
        ],
        screenshotCaptions: [
            'Browse listings with category filters, condition tags, and real-time search.',
        ],
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        id: 5,
        title: 'Orderix',
        category: 'Kiosk',
        icon: Smartphone,
        shortDesc: 'A restaurant self-service system spanning the PAX SK700 kiosk, an ECR management web portal, and an A910s payment application deployed through PAX Nebula.',

        fullDesc: {
            summary: 'Orderix turns a PAX SK700 kiosk into a full self-ordering counter — customers browse, order and pay unattended while the kitchen and cash register stay in sync through a central Laravel portal.',
            flow: [
                'Kiosk application pulls the live menu from the Laravel portal API on launch and refresh',
                'Customer browses the menu on the SK700 screen, builds a basket and submits the order',
                'Payment is taken on the paired A910s through the Orderix payment application',
                'Kiosk posts the paid order to the portal, where restaurant staff see it arrive and confirm it',
                'Portal fires a sound notification to the ECR and pushes a kitchen copy to the printer',
                'Kiosk prints a receipt carrying a QR code the customer scans to track order status until pickup',
            ],
            features: [
                { title: 'Kiosk ordering', desc: 'Android application on the PAX SK700 series serving the portal-managed menu with item selection, modifiers and basket review — no staff involvement to place an order' },
                { title: 'Card payment', desc: 'Dedicated payment application on the A910s completes the transaction at the kiosk and returns the result before the order is released to the kitchen' },
                { title: 'Menu management', desc: 'Restaurant staff maintain items, categories, pricing and availability in the web portal; the kiosk picks up changes from the API without a redeploy' },
                { title: 'ECR notification', desc: 'Confirmed orders trigger an audible alert at the electronic cash register so counter staff know an order has landed without watching a screen' },
                { title: 'Kitchen printing', desc: 'Kitchen copies print automatically on confirmation, keeping the prep line working from paper while the portal holds the record' },
                { title: 'QR order tracking', desc: 'Every receipt carries a QR code linking to a live status page — customers follow their order from confirmed to ready without asking at the counter' },
                { title: 'Nebula deployment', desc: 'Kiosk and payment applications distributed and updated through PAX Nebula, so a new outlet is provisioned remotely rather than device by device' },
            ],
            closing: 'The counter queue moves to the screen — orders arrive paid, the kitchen prints itself a copy, and the customer tracks the rest from a QR code.',
        },

        tech: ['Java Android', 'Laravel', 'API', 'PAX Nebula', 'MySql', 'SDK', 'Receipt'],
        screenshots: [
            {type: "video", embedUrl: 'https://drive.google.com/file/d/1fFnLd2VOHY9gxOCKzLVtQkG31142Xu2y/preview'},
            '/images/projects/orderix/main.jpg',
            '/images/projects/orderix/1.jpg',
            '/images/projects/orderix/2.png',
            '/images/projects/orderix/3.png',
            '/images/projects/orderix/4.png',
            '/images/projects/orderix/5.png',
        ],
        screenshotCaptions: [
            'Fast and secure restaurant order placement with reliable digital management portal to ensure the counter never becomes the bottleneck',
            'Fast and secure restaurant order placement with reliable digital management portal to ensure the counter never becomes the bottleneck',
            'Fast and secure restaurant order placement with reliable digital management portal to ensure the counter never becomes the bottleneck',
            'Fast and secure restaurant order placement with reliable digital management portal to ensure the counter never becomes the bottleneck',
            'Fast and secure restaurant order placement with reliable digital management portal to ensure the counter never becomes the bottleneck',
            'Fast and secure restaurant order placement with reliable digital management portal to ensure the counter never becomes the bottleneck',
            'Fast and secure restaurant order placement with reliable digital management portal to ensure the counter never becomes the bottleneck',
        ],
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        id: 6,
        title: 'Bank POS Payment Application',
        category: 'Android POS',
        icon: Smartphone,
        shortDesc: 'An Android POS payment application built in Java, driving EMV card transactions on PAX terminals over ISO 8583 in Hypercom message format to the acquiring bank host.',
        fullDesc: {
            summary: 'A card payment application for PAX Android terminals that reads Visa, Mastercard and other scheme cards by contactless, chip or swipe, authorizes them against the acquiring bank host over ISO 8583 in Hypercom format, and prints the transaction receipt on approval.',
            flow: [
                'Terminal is provisioned with its network profile, TID and MID, and exchanges working keys with the host',
                'Cashier selects the transaction type and enters the amount; the reader arms for the card',
                'Customer taps, inserts or swipes — the application selects the card application and reads the track and EMV data',
                'Cardholder verification runs to the card\'s CVM list, prompting for PIN where the issuer requires it',
                'Application builds the ISO 8583 request in the acquirer\'s Hypercom message format and sends it over the active network channel',
                'Issuer authorizes or declines, the terminal completes the EMV second generate AC and prints the merchant and customer receipt copies',
            ],
            features: [
                { title: 'Multi-entry card reading', desc: 'Contactless NFC, chip insert and magnetic stripe fallback handled through a single transaction flow on the PAX device' },
                { title: 'EMV kernel processing', desc: 'Application selection, terminal risk management, cardholder verification and online issuer authentication following the scheme kernels' },
                { title: 'ISO 8583', desc: 'Builds and parses financial, reversal, void, pre-auth and settlement messages against the acquirer\'s Hypercom message specification' },
                { title: 'Void', desc: 'Merchant-initiated cancellation of an approved transaction while it is still in the open batch, reversing the sale for the cardholder before settlement' },
                { title: 'Timeout reversal', desc: 'Fires automatically when the terminal never receives a clean response, releasing the issuer hold so no cardholder is left carrying a debit for a sale that never completed' },
                { title: 'Pre-authorization', desc: 'Holds an amount against the card and completes it later with the final figure, for hotel, rental and fuel style transactions' },
                { title: 'EMI transactions', desc: 'Installment sales processed against issuer-supported tenures, with the plan and monthly figure carried onto the receipt' },
                { title: 'Batch settlement & reports', desc: 'End-of-day batch upload reconciles the terminal against the host, with detail and summary batch reports printed or reviewed on screen before close' },
                { title: 'Terminal & key setup', desc: 'On-device configuration for host IP and port, TID and MID, communication profile and working key exchange, with keys held in the PAX secure processor' },
                { title: 'Test and live modes', desc: 'Explicit mode setting with an on-screen indicator — WiFi connects to the bank test server for certification, mobile data carries live production traffic, from the same build' },
            ],
            closing: 'Card to issuer and back in seconds — the terminal carries the certification-grade detail so the counter only sees approved or declined.',
        },
        tech: ['Java Android', 'PAX', 'ISO 8583', 'Hypercom', 'TranzWare', 'Smart Vista', 'Card Transaction', 'APN SIM', 'SDK', 'Receipt'],
        screenshots: [
            'images/pos_images/main.png',
            'images/pos_images/1.png',
            'images/pos_images/2.png',
            'images/pos_images/3.png',
            'images/pos_images/4.png',
            'images/pos_images/5.png',
            'images/pos_images/6.png',
            'images/pos_images/7.png',
            'images/pos_images/8.png',
            'images/pos_images/9.png',
            'images/pos_images/10.png',
            'images/pos_images/11.png',
            'images/pos_images/12.png',
            'images/pos_images/13.png',
            'images/pos_images/14.png',
            'images/pos_images/15.png',
            'images/pos_images/16.png',
            'images/pos_images/17.png',
            'images/pos_images/18.png',
            'images/pos_images/19.png',

        ],
        screenshotCaptions: [
            'Live on merchant terminals nationwide, serving City Bank, EBL, Prime Bank and other leading acquirers.',
        ],
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        id: 7,
        title: 'IoT Driven Phytoplankton and Zooplankton Growth Monitoring System for Smart Aquaculture',
        category: 'Research',
        icon: GraduationCap,
        shortDesc: 'An IoT and machine learning system that predicts plankton abundance in aquaculture ponds from low-cost water quality sensors — published at ICCIT 2025.',

        fullDesc: {
            summary: 'Published at the 28th International Conference on Computer and Information Technology (ICCIT 2025), Cox\'s Bazar. Fish farmers cannot see plankton levels shifting until fish start dying, and nets and Secchi discs are too slow and imprecise to catch it. This work reads pH, temperature, TDS and turbidity from a cheap sensor rig and predicts phytoplankton and zooplankton abundance from them — including dissolved oxygen, which is estimated rather than measured so the DO sensor cost drops out entirely.',
            flow: [
                'pH, temperature, TDS and turbidity sensors on an Arduino rig read pond water continuously',
                'An ESP8266 module pushes the readings over WiFi to a cloud server',
                'Readings are cleaned, balanced, scaled and normalized against the collected dataset',
                'A trained model estimates dissolved oxygen, then uses it as a feature to predict plankton abundance',
                'Predictions are graded onto a ten-level abundance scale for phytoplankton and zooplankton separately',
                'A mobile application shows live water quality, plankton level, historical trends and deviation alerts to the farmer',
            ],
            features: [
                { title: 'Low-cost sensing rig', desc: 'Arduino-based setup with pH, temperature, TDS and turbidity sensors, calibrated against laboratory standards and compensated in software for biofouling and temperature drift' },
                { title: 'DO estimated, not measured', desc: 'Dissolved oxygen is inferred from pH and temperature rather than read from a sensor, removing the single most expensive component for small-scale farmers' },
                { title: 'Field dataset', desc: '4,500 records gathered biweekly from 13 ponds across Dhaka, Magura and Noakhali over six months, with plankton counts verified under microscope using a Sedgewick-Rafter counting chamber' },
                { title: 'Three-model comparison', desc: 'RNN, KNN and XGBoost benchmarked on the same data — RNN reached 93% accuracy on phytoplankton, XGBoost 93.4% on zooplankton, with XGBoost the cheaper model to run' },
                { title: 'Ten-level grading', desc: 'Raw abundance counts mapped onto separate ten-level scales for phytoplankton and zooplankton, turning a continuous count into a status a farmer can act on' },
                { title: 'Mobile application', desc: 'Live water quality and plankton status per pond, historical trend history, deviation alerts and corrective recommendations' },
            ],
            closing: 'Plankton is the pond\'s natural feed supply, and until now farmers have been managing it blind. This puts a readable number on it for the price of four analog sensors.',
        },

        tech: ['IoT', 'Arduino', 'ESP8266', 'Python', 'RNN', 'XGBoost', 'KNN', 'ThingSpeak', 'Mobile App'],
        screenshots: [
            '/images/projects/research/main.png',
            '/images/projects/research/Methodology.png',
            '/images/projects/research/architecture.png',
            '/images/projects/research/hardware.png',
            '/images/projects/research/collection.png',
            '/images/projects/research/confusion.png',
            '/images/projects/research/app.png',
        ],
        screenshotCaptions: [
            'IoT driven phytoplankton and zooplankton growth monitoring for smart aquaculture, presented at ICCIT 2025',
            'Methodology — sensor capture, cloud transmission, model inference, and plankton level prediction in one continuous loop.',
            'System architecture — pond sensors to ESP8266 to cloud, with the trained model feeding the mobile application',
            'The Arduino sensor rig with pH, temperature, TDS and turbidity probes wired on a prototyping breadboard',
            'Field sampling across 13 ponds, with plankton counts verified under microscope in the laboratory',
            'Confusion matrices comparing model performance across the ten plankton abundance levels',
            'Mobile application showing live water quality status and predicted plankton levels per pond',
        ],
        liveUrl: 'https://ieeexplore.ieee.org/document/11490432',
        codeUrl: '#',
    },
];
// const BLOG_POSTS = [
//     {
//         title:
//             'What Working With Government Microdata Taught Me About Clean Code',
//         excerpt:
//             'A few lessons from wiring together STATA, SAS and Python pipelines that all have to agree with each other.',
//         category: 'Research',
//         date: 'Aug 12, 2026',
//         readTime: '6 min read',
//     },
//     {
//         title: 'Laravel + React: A Setup That Has Survived Three Projects',
//         excerpt:
//             'The Vite config, folder structure and API conventions I keep reaching for on every new build.',
//         category: 'Engineering',
//         date: 'Jul 03, 2026',
//         readTime: '8 min read',
//     },
//     {
//         title: 'From BSc to MSc: Rethinking How I Learn',
//         excerpt:
//             'Moving from shipping features to asking research questions changed how I approach every problem.',
//         category: 'Notes',
//         date: 'May 21, 2026',
//         readTime: '4 min read',
//     },
// ];

/* ------------------------------------------------------------------ */
/*  SMALL HELPERS                                                      */
/* ------------------------------------------------------------------ */

function Reveal({ children, className = '', delay = 0 }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;

        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`reveal-el transition-all duration-700 ${
                visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
            } ${className}`}
        >
            {children}
        </div>
    );
}

function SectionHeader({ eyebrow, title, subtitle }) {
    return (
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
      <span className="inline-block font-mono text-xs tracking-widest mb-3 text-brass">
        — {eyebrow}
      </span>

            <h2 className="text-3xl md:text-4xl font-display font-semibold text-paper mb-4">
                {title}
            </h2>

            {subtitle && (
                <p className="text-muted leading-relaxed">
                    {subtitle}
                </p>
            )}
        </Reveal>
    );
}

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                              */
/* ------------------------------------------------------------------ */

function Navbar({
                    activeSection,
                    scrolled,
                    onNavigate,
                    mobileOpen,
                    setMobileOpen,
                }) {
    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-ink ${
                scrolled
                    ? 'border-b border-line py-3'
                    : 'py-5'
            }`}
            style={
                !scrolled
                    ? { backgroundColor: 'transparent' }
                    : undefined
            }
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <button
                    onClick={() => onNavigate('home')}
                    className="font-mono text-lg text-paper"
                >
                    ~/
                    <span className="text-brass">am</span>
                </button>

                <div className="hidden lg:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={`nav-link text-sm font-medium ${
                                activeSection === item.id
                                    ? 'nav-link-active'
                                    : ''
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => onNavigate('contact')}
                    className="btn-primary hidden lg:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg"
                >
                    Let's Talk
                </button>

                <button
                    aria-label="Toggle menu"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden text-paper"
                >
                    {mobileOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {mobileOpen && (
                <div className="lg:hidden bg-ink border-t border-line mt-3">
                    <div className="flex flex-col px-6 py-4 gap-1">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className={`text-left py-3 text-sm font-medium border-b border-line last:border-b-0 nav-link ${
                                    activeSection === item.id
                                        ? 'nav-link-active'
                                        : ''
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                                */
/* ------------------------------------------------------------------ */
function Hero({ onNavigate }) {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const current = PERSONAL.roles[roleIndex];
        let timeout;

        if (!isDeleting && displayText === current) {
            timeout = setTimeout(() => setIsDeleting(true), 1600);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % PERSONAL.roles.length);
        } else {
            const next = isDeleting
                ? current.slice(0, displayText.length - 1)
                : current.slice(0, displayText.length + 1);

            timeout = setTimeout(
                () => setDisplayText(next),
                isDeleting ? 35 : 70
            );
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    const initials = PERSONAL.name
        .split(' ')
        .map((n) => n[0])
        .join('');

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
        >
            <div className="absolute inset-0 bg-grid" />
            <div className="hero-glow" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">

                {/* LEFT: Text content */}
                <div>
                    <Reveal>
                        <span className="inline-block font-mono text-xs tracking-widest text-muted mb-5">
                            Stockholm & Uppsala, SWEDEN — PORTFOLIO
                        </span>
                    </Reveal>

                    <Reveal delay={80}>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold leading-tight text-paper mb-6">
                            Hi, I'm{' '}
                            <span className="font-display italic text-brass">
                                {PERSONAL.name}
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={160}>
                        <div className="readout-chip inline-flex items-center gap-2 rounded-lg px-4 py-2.5 mb-7">
                            <span className="font-mono text-sm sm:text-base text-signal">
                                {displayText}
                            </span>
                            <span
                                className="w-2 h-5 animate-blink"
                                style={{ backgroundColor: 'var(--signal)' }}
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={240}>
                        <p className="text-muted text-lg leading-relaxed mb-8 max-w-xl">
                            {PERSONAL.tagline}
                        </p>
                    </Reveal>

                    <Reveal delay={320}>
                        <div className="flex flex-wrap items-center gap-4 mb-9">
                            <button
                                onClick={() => onNavigate('projects')}
                                className="btn-primary inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg"
                            >
                                View My Work
                                <ArrowRight className="w-4 h-4" />
                            </button>

                            <button
                                onClick={() => onNavigate('contact')}
                                className="btn-outline inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </Reveal>

                    <Reveal delay={400}>
                        <div className="flex items-center gap-4">
                            <a
                                href={PERSONAL.socials.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="icon-btn w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>

                            <a
                                href={`mailto:${PERSONAL.email}`}
                                aria-label="Email"
                                className="icon-btn w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </Reveal>
                </div>

                {/* RIGHT: Background photo + floating specs card */}
                <Reveal
                    delay={200}
                    className="hidden lg:flex items-end justify-center"
                >
                    {/* Outer frame with corner brackets */}
                    <div className="relative w-full max-w-lg">
                        {/* Corner brackets */}
                        <span
                            className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 rounded-tl-md z-10"
                            style={{ borderColor: 'var(--brass)' }}
                        />
                        <span
                            className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 rounded-tr-md z-10"
                            style={{ borderColor: 'var(--brass)' }}
                        />
                        <span
                            className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 rounded-bl-md z-10"
                            style={{ borderColor: 'var(--brass)' }}
                        />
                        <span
                            className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 rounded-br-md z-10"
                            style={{ borderColor: 'var(--brass)' }}
                        />

                        {/* Photo panel */}
                        <div
                            className="relative rounded-2xl overflow-hidden w-full"
                            style={{
                                aspectRatio: '16 / 14',
                                border: '1px solid var(--line)',
                            }}
                        >
                            {/* Background photo */}
                            <img
                                src={PERSONAL.avatar || '/images/profile.jpg'}
                                alt={PERSONAL.name}
                                className="absolute inset-0 w-full h-full object-cover"
                                style={{ objectPosition: 'center top' }}
                            />

                            {/* Deep fade overlay — dark at bottom, semi at top */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        'linear-gradient(to bottom, rgba(14,26,28,0.35) 0%, rgba(14,26,28,0.55) 40%, rgba(14,26,28,0.88) 75%, rgba(14,26,28,0.97) 100%)',
                                }}
                            />

                            {/* Specs card floating at the bottom */}
                            <div
                                className="absolute bottom-0 left-0 right-0 p-4 z-10"
                            >
                                <div
                                    className="rounded-xl p-4"
                                    style={{
                                        backgroundColor: 'rgba(14,26,28,0.6)',
                                        border: '1px solid rgba(255,255,255,0.07)',
                                        backdropFilter: 'blur(12px)',
                                        WebkitBackdropFilter: 'blur(12px)',
                                    }}
                                >
                                    <div className="flex flex-col gap-2.5">
                                        {HERO_SPECS.map((row) => (
                                            <div
                                                key={row.label}
                                                className="flex items-center justify-between font-mono"
                                                style={{ fontSize: '10px' }}
                                            >
                                                <span style={{ color: 'var(--muted)', letterSpacing: '0.08em' }}>
                                                    {row.label}
                                                </span>
                                                <span
                                                    className="flex items-center gap-1.5"
                                                    style={{ color: 'var(--paper)' }}
                                                >
                                                    {row.dot && (
                                                        <span
                                                            className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0"
                                                            style={{ backgroundColor: 'var(--signal)' }}
                                                        />
                                                    )}
                                                    {row.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            <button
                onClick={() => onNavigate('about')}
                aria-label="Scroll to About"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted animate-bounce"
            >
                <ChevronDown className="w-6 h-6" />
            </button>
        </section>
    );
}// function Hero({ onNavigate }) {
//     const [displayText, setDisplayText] = useState('');
//     const [isDeleting, setIsDeleting] = useState(false);
//     const [roleIndex, setRoleIndex] = useState(0);
//
//     useEffect(() => {
//         const current = PERSONAL.roles[roleIndex];
//         let timeout;
//
//         if (!isDeleting && displayText === current) {
//             timeout = setTimeout(
//                 () => setIsDeleting(true),
//                 1600
//             );
//         } else if (
//             isDeleting &&
//             displayText === ''
//         ) {
//             setIsDeleting(false);
//
//             setRoleIndex(
//                 (prev) =>
//                     (prev + 1) % PERSONAL.roles.length
//             );
//         } else {
//             const next = isDeleting
//                 ? current.slice(
//                     0,
//                     displayText.length - 1
//                 )
//                 : current.slice(
//                     0,
//                     displayText.length + 1
//                 );
//
//             timeout = setTimeout(
//                 () => setDisplayText(next),
//                 isDeleting ? 35 : 70
//             );
//         }
//
//         return () => clearTimeout(timeout);
//     }, [
//         displayText,
//         isDeleting,
//         roleIndex,
//     ]);
//
//     const initials = PERSONAL.name
//         .split(' ')
//         .map((n) => n[0])
//         .join('');
//
//     return (
//         <section
//             id="home"
//             className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
//         >
//             <div className="absolute inset-0 bg-grid" />
//
//             <div className="hero-glow" />
//
//             <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
//                 <div>
//                     <Reveal>
//             <span className="inline-block font-mono text-xs tracking-widest text-muted mb-5">
//               Stockholm & Uppsala, SWEDEN — PORTFOLIO
//             </span>
//                     </Reveal>
//
//                     <Reveal delay={80}>
//                         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold leading-tight text-paper mb-6">
//                             Hi, I'm{' '}
//                             <span className="font-display italic text-brass">
//                 {PERSONAL.name}
//               </span>
//                         </h1>
//                     </Reveal>
//
//                     <Reveal delay={160}>
//                         <div className="readout-chip inline-flex items-center gap-2 rounded-lg px-4 py-2.5 mb-7">
//               <span className="font-mono text-sm sm:text-base text-signal">
//                 {displayText}
//               </span>
//
//                             <span
//                                 className="w-2 h-5 animate-blink"
//                                 style={{
//                                     backgroundColor:
//                                         'var(--signal)',
//                                 }}
//                             />
//                         </div>
//                     </Reveal>
//
//                     <Reveal delay={240}>
//                         <p className="text-muted text-lg leading-relaxed mb-8 max-w-xl">
//                             {PERSONAL.tagline}
//                         </p>
//                     </Reveal>
//
//                     <Reveal delay={320}>
//                         <div className="flex flex-wrap items-center gap-4 mb-9">
//                             <button
//                                 onClick={() =>
//                                     onNavigate('projects')
//                                 }
//                                 className="btn-primary inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg"
//                             >
//                                 View My Work
//                                 <ArrowRight className="w-4 h-4" />
//                             </button>
//
//                             <button
//                                 onClick={() =>
//                                     onNavigate('contact')
//                                 }
//                                 className="btn-outline inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg"
//                             >
//                                 Get In Touch
//                             </button>
//                         </div>
//                     </Reveal>
//
//                     <Reveal delay={400}>
//                         <div className="flex items-center gap-4">
//                             <a
//                                 href={PERSONAL.socials.linkedin}
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 aria-label="LinkedIn"
//                                 className="icon-btn w-10 h-10 flex items-center justify-center rounded-full"
//                             >
//                                 {/*<Linkedin className="w-4 h-4" />*/}
//                             </a>
//
//                             <a
//                                 href={`mailto:${PERSONAL.email}`}
//                                 aria-label="Email"
//                                 className="icon-btn w-10 h-10 flex items-center justify-center rounded-full"
//                             >
//                                 <Mail className="w-4 h-4" />
//                             </a>
//                         </div>
//                     </Reveal>
//                 </div>
//
//                 <Reveal
//                     delay={200}
//                     className="hidden lg:flex justify-center"
//                 >
//                     <div className="relative w-full max-w-sm">
//             <span
//                 className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 rounded-tl-md"
//                 style={{
//                     borderColor: 'var(--brass)',
//                 }}
//             />
//
//                         <span
//                             className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 rounded-tr-md"
//                             style={{
//                                 borderColor: 'var(--brass)',
//                             }}
//                         />
//
//                         <span
//                             className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 rounded-bl-md"
//                             style={{
//                                 borderColor: 'var(--brass)',
//                             }}
//                         />
//
//                         <span
//                             className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 rounded-br-md"
//                             style={{
//                                 borderColor: 'var(--brass)',
//                             }}
//                         />
//
//                         <div className="card rounded-2xl p-8">
//                             <div className="text-center mb-6">
//                 <span className="font-display italic text-6xl text-brass">
//                   {initials}
//                 </span>
//                             </div>
//
//                             <div className="border-t border-line pt-5 space-y-4">
//                                 {HERO_SPECS.map((row) => (
//                                     <div
//                                         key={row.label}
//                                         className="flex items-center justify-between font-mono text-xs"
//                                     >
//                     <span className="tracking-wide text-muted">
//                       {row.label}
//                     </span>
//
//                                         <span className="text-paper text-right flex items-center gap-1.5">
//                       {row.dot && (
//                           <span
//                               className="w-1.5 h-1.5 rounded-full inline-block"
//                               style={{
//                                   backgroundColor:
//                                       'var(--signal)',
//                               }}
//                           />
//                       )}
//
//                                             {row.value}
//                     </span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </Reveal>
//             </div>
//
//             <button
//                 onClick={() => onNavigate('about')}
//                 aria-label="Scroll to About"
//                 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted animate-bounce"
//             >
//                 <ChevronDown className="w-6 h-6" />
//             </button>
//         </section>
//     );
// }

/* ------------------------------------------------------------------ */
/*  ABOUT                                                               */
/* ------------------------------------------------------------------ */

function About() {
    return (
        <section
            id="about"
            className="py-24 border-t border-line relative"
        >
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    eyebrow="GET TO KNOW ME"
                    title="About Me"
                />

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <div className="card rounded-3xl p-8">
                            <Quote className="w-8 h-8 text-brass mb-4" />

                            <p className="text-paper leading-relaxed mb-4">
                                I like problems where software has to be right the first time.
                            </p>

                            <p className="text-muted leading-relaxed mb-4">
                                That's what drew me to payments — R&D on new payment technology, from Android POS applications moving card transactions over ISO 8583 to bank hosts, to the full-stack systems around them: a bKash audio notification bridge, restaurant self-service kiosks, digital receipt platforms, an employee management system, a technical support portal. Terminal-side in Java, server-side in Spring Boot and Laravel, front-end in Vue and React.
                            </p>

                            <p className="text-muted leading-relaxed mb-4">
                                Along the way I've demonstrated these products to the banks and clients who deploy them, with published research in IoT and machine learning.
                            </p>

                            <p className="text-muted leading-relaxed">
                                Now in Stockholm, reading Information Systems at Uppsala.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-2 gap-5">
                        {STATS.map((stat, i) => (
                            <Reveal
                                key={stat.label}
                                delay={i * 100}
                            >
                                <div className="card rounded-2xl p-6 text-center">
                                    <p className="text-3xl font-display font-semibold text-brass mb-1">
                                        {stat.value}
                                    </p>

                                    <p className="text-sm text-muted">
                                        {stat.label}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  RESUME                                                              */
/* ------------------------------------------------------------------ */

function TimelineList({ items }) {
    return (
        <div className="space-y-8">
            {items.map((item, i) => (
                <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
            <span
                className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                style={{
                    backgroundColor:
                        'var(--brass)',
                }}
            />

                        {i !== items.length - 1 && (
                            <span className="w-px flex-1 bg-line my-1" />
                        )}
                    </div>

                    <div className="pb-2">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h4 className="font-semibold text-paper">
                                {item.role}
                            </h4>

                            <span className="tag text-xs px-2 py-0.5 rounded-md font-mono">
                {item.period}
              </span>
                        </div>

                        <p className="text-sm text-brass mb-2">
                            {item.org}
                        </p>

                        <ul className="text-sm text-muted leading-relaxed list-disc pl-5 space-y-1">
                            {item.description.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

function Resume() {
    const [tab, setTab] = useState('experience');

    return (
        <section
            id="resume"
            className="py-24 border-t border-line relative"
        >
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    eyebrow="MY JOURNEY"
                    title="Resume"
                    subtitle="Where I've worked, studied, and what I've picked up along the way."
                />

                <div className="flex justify-center mb-12">
                    <div
                        className="inline-flex p-1 rounded-lg gap-1"
                        style={{
                            backgroundColor:
                                'var(--panel-2)',
                            border:
                                '1px solid var(--line)',
                        }}
                    >
                        {[
                            {
                                id: 'experience',
                                label: 'Experience',
                                icon: Briefcase,
                            },
                            {
                                id: 'education',
                                label: 'Education',
                                icon: GraduationCap,
                            },
                        ].map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setTab(t.id)}
                                className={`tab-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium ${
                                    tab === t.id
                                        ? 'tab-btn-active'
                                        : ''
                                }`}
                            >
                                <t.icon className="w-4 h-4" />
                                {t.label}
                            </button>
                        ))}
                    </div>
                </div>

                <Reveal className="max-w-3xl mx-auto mb-20">
                    <TimelineList
                        items={
                            tab === 'experience'
                                ? EXPERIENCE
                                : EDUCATION
                        }
                    />
                </Reveal>

                <div className="text-center mb-12">
                    <h3 className="text-2xl font-display font-semibold text-paper mb-2">
                        Technical Skills
                    </h3>

                    <p className="text-muted">
                        The tools and languages I reach for most.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                    {SKILLS.map((group, i) => (
                        <Reveal
                            key={group.category}
                            delay={i * 80}
                        >
                            <div className="card rounded-2xl p-6 h-full">
                                <h4 className="font-mono text-brass mb-4 text-xs tracking-widest">
                                    — {group.category.toUpperCase()}
                                </h4>

                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="tag text-sm px-3 py-1.5 rounded-md"
                                        >
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="/resume/Md_Arif_Fuad_Akash_Resume.pdf"
                        download
                        className="btn-primary inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg"
                    >
                        <Download className="w-4 h-4" />
                        Download Full CV
                    </a>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  SERVICES                                                            */
/* ------------------------------------------------------------------ */

function Services() {
    return (
        <section
            id="services"
            className="py-24 border-t border-line relative"
        >
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    eyebrow="WHAT I DO"
                    title="Services"
                    subtitle="A mix of software engineering and data work, depending on what a project needs."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, i) => (
                        <Reveal
                            key={service.title}
                            delay={i * 80}
                        >
                            <div className="card rounded-2xl p-7 h-full hover:-translate-y-1 transition-transform duration-300">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                                    style={{
                                        backgroundColor:
                                            'var(--panel-2)',
                                        border:
                                            '1px solid var(--line)',
                                    }}
                                >
                                    <service.icon className="w-6 h-6 text-brass" />
                                </div>

                                <h3 className="text-lg font-semibold text-paper mb-2">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-muted leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                            */
/* ------------------------------------------------------------------ */

function ProjectCard({ project, onOpen, delay }) {
    return (
        <Reveal delay={delay}>
            <div className="group card rounded-2xl overflow-hidden">
                <div
                    className="relative aspect-video overflow-hidden"
                    style={{ backgroundColor: 'var(--panel-2)' }}
                >
                    {/* Thumbnail image */}
                    <img
                        src={
                            project.screenshots.find(s => typeof s === 'string')
                        }
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />

                    {/* Hover overlay */}
                    <button
                        onClick={() => onOpen(project)}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: 'rgba(14,26,28,0.82)' }}
                    >
                        <span className="btn-primary inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-lg text-sm">
                            View Details
                            <ExternalLink className="w-4 h-4" />
                        </span>
                    </button>
                </div>

                <div className="p-6">
                    <span className="font-mono text-xs tracking-widest text-signal">
                        {project.category.toUpperCase()}
                    </span>

                    <h3 className="text-lg font-semibold text-paper mt-1 mb-2">
                        {project.title}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed mb-4">
                        {project.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span key={t} className="tag text-xs px-2.5 py-1 rounded-md">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Reveal>
    );
}

function ProjectModal({ project, onClose }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0);
    }, [project]);

    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handler);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handler);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    if (!project) return null;

    const total = project.screenshots.length;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(14,26,28,0.9)' }}
            onClick={onClose}
        >
            <div
                className="rounded-3xl w-full overflow-hidden flex flex-col lg:flex-row"
                style={{
                    maxWidth: '1200px',
                    maxHeight: '92vh',
                    height: '92vh',
                    backgroundColor: 'var(--panel)',
                    border: '1px solid var(--line)',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* LEFT: Image carousel */}
                <div
                    className="lg:w-3/5 flex-shrink-0 flex flex-col"
                    style={{
                        borderRight: '1px solid var(--line)',
                        minHeight: 0,
                    }}
                >
                    <div
                        className="relative flex-1 overflow-hidden"
                        style={{ backgroundColor: 'var(--panel-2)' }}
                    >
                        <CarouselItem
                            item={project.screenshots[index]}
                            alt={`${project.title} screenshot ${index + 1}`}
                        />

                        {total > 1 && (
                            <button
                                onClick={() => setIndex((index - 1 + total) % total)}
                                aria-label="Previous screenshot"
                                className="icon-btn absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
                                style={{ zIndex: 10 }} // ← add this
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                        )}

                        {total > 1 && (
                            <button
                                onClick={() =>
                                    setIndex((index + 1) % total)
                                }
                                aria-label="Next screenshot"
                                className="icon-btn absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        )}

                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className="icon-btn absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {total > 1 && (
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                {project.screenshots.map((_, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        aria-label={`Go to screenshot ${i + 1}`}
                                        onClick={() => setIndex(i)}
                                        className="rounded-full p-0 border-0"
                                        style={{
                                            width: project.screenshots[i]?.type === 'video' ? '10px' : '6px',
                                            height: '6px',
                                            backgroundColor: i === index ? 'var(--brass)' : 'var(--line)',
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Caption */}
                    <div
                        className="p-5 flex-shrink-0"
                        style={{ borderTop: '1px solid var(--line)' }}
                    >
                        <p className="font-mono text-xs tracking-widest text-signal mb-1">
                            {project.screenshots[index]?.type === 'video' ? 'VIDEO' : `SCREENSHOT ${index + 1} / ${total}`}
                        </p>

                        <p className="text-sm text-muted leading-relaxed">
                            {project.screenshotCaptions?.[index] ??
                                project.shortDesc}
                        </p>
                    </div>
                </div>

                {/* RIGHT: Details */}
                <div
                    className="lg:w-2/5 overflow-y-auto p-7 flex flex-col gap-5"
                    style={{ minHeight: 0 }}
                >
                    {/* Category + title */}
                    <div>
                        <span className="font-mono text-xs tracking-widest text-signal">
                            {project.category.toUpperCase()}
                        </span>

                        <h3 className="text-2xl font-display font-semibold text-paper mt-1">
                            {project.title}
                        </h3>
                    </div>

                    {/* Description */}
                    <ProjectDesc desc={project.fullDesc} />

                    {/* Tech stack */}
                    {project.tech?.length > 0 && (
                        <div>
                            <p className="font-mono text-xs tracking-widest text-signal mb-3">
                                TECH STACK
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="tag text-xs px-2.5 py-1 rounded-md"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3 mt-auto pt-2">
                        {project.liveUrl && project.liveUrl !== '#' && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-lg text-sm"
                            >
                                Live
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}

                        {project.codeUrl && project.codeUrl !== '#' && (
                            <a
                                href={project.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-lg text-sm"
                            >
                                Source Code
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
function Projects() {
    const [filter, setFilter] =
        useState('All');

    const [selected, setSelected] =
        useState(null);

    const filtered =
        filter === 'All'
            ? PROJECTS
            : PROJECTS.filter(
                (p) => p.category === filter
            );

    return (
        <section
            id="projects"
            className="py-24 border-t border-line relative"
        >
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    eyebrow="MY WORK"
                    title="Projects"
                    subtitle="A selection of things I've built, across web, mobile and research."
                />

                <div className="flex justify-center flex-wrap gap-3 mb-12">
                    {PROJECT_CATEGORIES.map(
                        (cat) => (
                            <button
                                key={cat}
                                onClick={() =>
                                    setFilter(cat)
                                }
                                className={`filter-btn px-5 py-2 rounded-lg text-sm font-medium ${
                                    filter === cat
                                        ? 'filter-btn-active'
                                        : ''
                                }`}
                            >
                                {cat}
                            </button>
                        )
                    )}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map(
                        (project, i) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onOpen={setSelected}
                                delay={i * 80}
                            />
                        )
                    )}
                </div>
            </div>

            {selected && (
                <ProjectModal
                    project={selected}
                    onClose={() =>
                        setSelected(null)
                    }
                />
            )}
        </section>
    );
}
function ProjectDesc({ desc }) {
    // Plain text description
    if (typeof desc === 'string') {
        return (
            <p className="text-sm text-muted leading-relaxed">
                {desc}
            </p>
        );
    }

    // No description
    if (!desc || typeof desc !== 'object') {
        return null;
    }

    return (
        <div className="flex flex-col gap-5">
            {/* Summary */}
            {desc.summary && (
                <p className="text-sm text-muted leading-relaxed">
                    {desc.summary}
                </p>
            )}

            {/* Flow */}
            {desc.flow?.length > 0 && (
                <div>
                    <p className="font-mono text-xs tracking-widest text-signal mb-3">
                        CORE FLOW
                    </p>

                    <ol className="flex flex-col gap-2">
                        {desc.flow.map((step, i) => (
                            <li
                                key={i}
                                className="flex gap-3 text-sm text-muted leading-relaxed"
                            >
                                <span className="text-signal font-mono flex-shrink-0">
                                    {String(i + 1).padStart(2, '0')}
                                </span>

                                <span>{step}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            )}

            {/* Features */}
            {desc.features?.length > 0 && (
                <div>
                    <p className="font-mono text-xs tracking-widest text-signal mb-3">
                        KEY FEATURES
                    </p>

                    <ul className="flex flex-col gap-3">
                        {desc.features.map((feature, i) => (
                            <li
                                key={i}
                                className="text-sm text-muted leading-relaxed"
                            >
                                <span className="text-paper font-medium">
                                    {feature.title}
                                </span>

                                <span className="text-signal mx-1">
                                    —
                                </span>

                                <span>{feature.desc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Closing statement */}
            {desc.closing && (
                <p
                    className="text-sm text-muted leading-relaxed italic border-l-2 pl-3"
                    style={{ borderColor: 'var(--brass)' }}
                >
                    {desc.closing}
                </p>
            )}
        </div>
    );
}
function CarouselItem({ item, alt }) {
    if (item?.type === 'video') {
        return (
            <iframe
                src={item.embedUrl}
                title={alt}
                className="w-full h-full"
                style={{
                    border: 'none',
                    minHeight: '360px',
                }}
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
            />
        );
    }

    return (
        <img
            src={item}
            alt={alt}
            className="w-full h-full object-contain"
            loading="lazy"
        />
    );
}

/* ------------------------------------------------------------------ */
/*  BLOG                                                                */
/* ------------------------------------------------------------------ */

// function Blog() {
//     return (
//         <section
//             id="blog"
//             className="py-24 border-t border-line relative"
//         >
//             <div className="max-w-7xl mx-auto px-6">
//                 <SectionHeader
//                     eyebrow="FROM THE BLOG"
//                     title="Latest Articles"
//                     subtitle="Notes on engineering, research, and everything in between."
//                 />
//
//                 <div className="grid md:grid-cols-3 gap-8">
//                     {BLOG_POSTS.map(
//                         (post, i) => (
//                             <Reveal
//                                 key={post.title}
//                                 delay={i * 100}
//                             >
//                                 <a
//                                     href="#"
//                                     className="group block card rounded-2xl overflow-hidden h-full"
//                                 >
//                                     <div
//                                         className="aspect-video bg-grid flex items-center justify-center relative"
//                                         style={{
//                                             backgroundColor:
//                                                 'var(--panel-2)',
//                                         }}
//                                     >
//                     <span className="readout-chip relative z-10 font-mono text-xs tracking-widest text-brass px-3 py-1 rounded-md">
//                       {post.category.toUpperCase()}
//                     </span>
//                                     </div>
//
//                                     <div className="p-6 flex flex-col">
//                                         <h3 className="font-semibold text-paper mb-2 leading-snug">
//                                             {post.title}
//                                         </h3>
//
//                                         <p className="text-sm text-muted leading-relaxed mb-4">
//                                             {post.excerpt}
//                                         </p>
//
//                                         <div className="flex items-center gap-4 font-mono text-xs text-muted mt-auto">
//                       <span className="inline-flex items-center gap-1">
//                         <Calendar className="w-3.5 h-3.5" />
//                           {post.date}
//                       </span>
//
//                                             <span className="inline-flex items-center gap-1">
//                         <Clock className="w-3.5 h-3.5" />
//                                                 {post.readTime}
//                       </span>
//                                         </div>
//                                     </div>
//                                 </a>
//                             </Reveal>
//                         )
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// }

/* ------------------------------------------------------------------ */
/*  CONTACT                                                             */
/* ------------------------------------------------------------------ */

function Contact() {
    const [formData, setFormData] =
        useState({
            name: '',
            email: '',
            subject: '',
            message: '',
        });

    const [status, setStatus] =
        useState('idle');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus('sending');

        try {
            const res = await fetch(
                '/api/contact',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type':
                            'application/json',
                    },
                    body: JSON.stringify(
                        formData
                    ),
                }
            );

            if (res.ok) {
                setStatus('sent');

                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });

                setTimeout(
                    () => setStatus('idle'),
                    4000
                );
            } else {
                setStatus('idle');
            }
        } catch (err) {
            setStatus('idle');
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: PERSONAL.email,
        },
        {
            icon: Phone,
            label: 'Phone',
            value: PERSONAL.phone,
        },
        {
            icon: MapPin,
            label: 'Location',
            value: PERSONAL.location,
        },
    ];

    return (
        <section
            id="contact"
            className="py-24 border-t border-line relative"
        >
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    eyebrow="GET IN TOUCH"
                    title="Let's Build Something Great"
                    subtitle="Have a project in mind, or just want to say hi? My inbox is open."
                />

                <div className="grid lg:grid-cols-5 gap-12">
                    <Reveal className="lg:col-span-2">
                        <div className="space-y-5 mb-8">
                            {contactInfo.map(
                                (item) => (
                                    <div
                                        key={item.label}
                                        className="card rounded-2xl p-5 flex items-center gap-4"
                                    >
                                        <div
                                            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{
                                                backgroundColor:
                                                    'var(--panel-2)',
                                                border:
                                                    '1px solid var(--line)',
                                            }}
                                        >
                                            <item.icon className="w-5 h-5 text-brass" />
                                        </div>

                                        <div>
                                            <p className="font-mono text-xs text-muted">
                                                {item.label.toUpperCase()}
                                            </p>

                                            <p className="text-sm text-paper font-medium">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>

                        <div className="flex items-center gap-4">
                        <a
                            href={PERSONAL.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="icon-btn w-10 h-10 flex items-center justify-center rounded-full"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                        </div>
                    </Reveal>

                    <Reveal
                        className="lg:col-span-3"
                        delay={100}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="card rounded-2xl p-7 space-y-5"
                        >
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block font-mono text-xs text-muted mb-2">
                                        YOUR NAME
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="input-field w-full rounded-lg px-4 py-3 text-sm"
                                        placeholder="Jane Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block font-mono text-xs text-muted mb-2">
                                        YOUR EMAIL
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="input-field w-full rounded-lg px-4 py-3 text-sm"
                                        placeholder="jane@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block font-mono text-xs text-muted mb-2">
                                    SUBJECT
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="input-field w-full rounded-lg px-4 py-3 text-sm"
                                    placeholder="Let's work together"
                                />
                            </div>

                            <div>
                                <label className="block font-mono text-xs text-muted mb-2">
                                    MESSAGE
                                </label>

                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="input-field w-full rounded-lg px-4 py-3 text-sm resize-none"
                                    placeholder="Tell me a bit about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status !== 'idle'}
                                className="btn-primary w-full inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-lg disabled:opacity-70"
                            >
                                {status === 'idle' && (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </>
                                )}

                                {status === 'sending' &&
                                    'Sending...'}

                                {status === 'sent' && (
                                    <>
                                        <CheckCircle2 className="w-4 h-4" />
                                        Message Sent!
                                    </>
                                )}
                            </button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                              */
/* ------------------------------------------------------------------ */

function Footer({ onNavigate }) {
    return (
        <footer className="py-10 border-t border-line">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
                <p className="font-mono text-xs text-muted">
                    © {new Date().getFullYear()}{' '}
                    {PERSONAL.name}. Built with React &
                    Laravel.
                </p>

                <button
                    onClick={() => onNavigate('home')}
                    aria-label="Back to top"
                    className="icon-btn w-10 h-10 rounded-full flex items-center justify-center"
                >
                    <ArrowUp className="w-4 h-4" />
                </button>
            </div>
        </footer>
    );
}

/* ------------------------------------------------------------------ */
/*  MAIN                                                                */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
    const [activeSection, setActiveSection] =
        useState('home');

    const [scrolled, setScrolled] =
        useState(false);

    const [mobileOpen, setMobileOpen] =
        useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(
                window.scrollY > 40
            );

            let current = 'home';

            for (const item of NAV_ITEMS) {
                const el =
                    document.getElementById(
                        item.id
                    );

                if (
                    el &&
                    el.getBoundingClientRect()
                        .top <= 140
                ) {
                    current = item.id;
                }
            }

            setActiveSection(current);
        };

        window.addEventListener(
            'scroll',
            handleScroll
        );

        handleScroll();

        return () =>
            window.removeEventListener(
                'scroll',
                handleScroll
            );
    }, []);

    const handleNavigate = (id) => {
        const el =
            document.getElementById(id);

        if (el) {
            window.scrollTo({
                top: el.offsetTop - 76,
                behavior: 'smooth',
            });
        }

        setMobileOpen(false);
    };

    return (
        <div className="bg-ink text-paper min-h-screen font-body">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;1,500;1,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

        :root {
          --ink: #0E1A1C;
          --panel: #152628;
          --panel-2: #1B2F32;
          --line: #2A3E41;
          --brass: #E0A64A;
          --brass-light: #EABD73;
          --signal: #5EC9BB;
          --paper: #ECE6D9;
          --muted: #90A3A2;
        }

        .bg-ink {
          background-color: var(--ink);
        }

        .bg-line {
          background-color: var(--line);
        }

        .text-paper {
          color: var(--paper);
        }

        .text-muted {
          color: var(--muted);
        }

        .text-brass {
          color: var(--brass);
        }

        .text-signal {
          color: var(--signal);
        }

        .border-line {
          border-color: var(--line);
        }

        .font-display {
          font-family: 'Fraunces', serif;
        }

        .font-body,
        body {
          font-family: 'IBM Plex Sans', sans-serif;
        }

        .font-mono {
          font-family: 'IBM Plex Mono', monospace;
        }

        .nav-link {
          color: var(--muted);
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--paper);
        }

        .nav-link-active {
          color: var(--brass) !important;
        }

        .btn-primary {
          background-color: var(--brass);
          color: var(--ink);
          transition: background-color 0.2s ease;
        }

        .btn-primary:hover {
          background-color: var(--brass-light);
        }

        .btn-outline {
          border: 1px solid var(--line);
          color: var(--paper);
          transition: all 0.2s ease;
        }

        .btn-outline:hover {
          border-color: var(--brass);
          color: var(--brass);
        }

        .icon-btn {
          border: 1px solid var(--line);
          color: var(--muted);
          transition: all 0.2s ease;
        }

        .icon-btn:hover {
          color: var(--brass);
          border-color: var(--brass);
        }

        .tab-btn {
          color: var(--muted);
          transition: all 0.2s ease;
        }

        .tab-btn-active {
          background-color: var(--brass);
          color: var(--ink) !important;
        }

        .filter-btn {
          border: 1px solid var(--line);
          color: var(--muted);
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          border-color: var(--brass);
          color: var(--brass);
        }

        .filter-btn-active {
          background-color: var(--brass);
          border-color: var(--brass);
          color: var(--ink) !important;
        }

        .card {
          background-color: var(--panel);
          border: 1px solid var(--line);
          transition: border-color 0.3s ease;
        }

        .card:hover {
          border-color: var(--signal);
        }

        .tag {
          background-color: var(--panel-2);
          color: var(--muted);
          border: 1px solid var(--line);
        }

        .input-field {
          background-color: var(--panel-2);
          border: 1px solid var(--line);
          color: var(--paper);
          transition: border-color 0.2s ease;
        }

        .input-field:focus {
          outline: none;
          border-color: var(--signal);
        }

        .input-field::placeholder {
          color: var(--muted);
        }

        .readout-chip {
          background-color: var(--panel-2);
          border: 1px solid var(--line);
        }

        .hero-glow {
          position: absolute;
          top: 15%;
          right: 8%;
          width: 420px;
          height: 420px;
          background: radial-gradient(
            circle,
            rgba(94,201,187,0.14) 0%,
            rgba(94,201,187,0) 70%
          );
          pointer-events: none;
        }

        .bg-grid {
          background-image:
            linear-gradient(
              rgba(144,163,162,0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(144,163,162,0.08) 1px,
              transparent 1px
            );

          background-size: 40px 40px;
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }

          50% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-blink,
          .animate-bounce {
            animation: none !important;
          }

          .reveal-el {
            transition: none !important;
          }

          html {
            scroll-behavior: auto !important;
          }
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: var(--ink);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--line);
          border-radius: 9999px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: var(--muted);
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

            <Navbar
                activeSection={activeSection}
                scrolled={scrolled}
                onNavigate={handleNavigate}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />

            <Hero onNavigate={handleNavigate} />

            <About />

            <Resume />

            <Services />

            <Projects />

            {/*<Blog />*/}

            <Contact />

            <Footer
                onNavigate={handleNavigate}
            />
        </div>
    );
}
