import { v4 as uuidv4 } from 'uuid';



export const cardData = [
    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/zGHJ0chg/Picture1.png",
            "https://i.postimg.cc/0Np9qKc5/Picture3.png",
            "https://i.postimg.cc/ZRbzt7Wj/Picture7.png",
        ],
        title:"Cruise Tasik",
        desc:"Indulge in a leisurely 45-minute voyage aboard a Putrajaya cruise. Immerse yourself inthe beauty of Putrajaya Lake as you embark on a sightseeing cruise, capturingafull panorama of the surroundings.",
        type:"bookTypeOne",
        preference:[
            {
                title:"Malaysian",
                price:{
                    adult:28,
                    child:18,
                    senior:18,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:40,
                    child:30,
                    senior:30,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ]
    },

    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/sDXfZXDK/Ewv-F35-GVIAM-BPE.jpg",
            "https://i.postimg.cc/C5Mh7MCh/7.jpg",
            "https://i.postimg.cc/4ynCnYb9/Picture6.png",
        ],
        title:"Perahu Dondang Sayang",
        desc:"Embark on a journey of nostalgia aboard our traditional boats. Serenely glide through the waters of Putrajaya Lake, listening to the gentle hum of the motor boat as it navigates you through the picturesque surroundings.",
        type:"bookTypeTwo",
        preference:[
            {
                title:"Malaysian",
                price:{
                    adult:64,
                    child:56,
                    senior:56,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:79,
                    child:70,
                    senior:70,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ]
    },
    
]

export const timeSlots = {
    weekend:[
        {
            name:"Trip 1",
            timeSlot:"10:00 am - 10:45 am"
        },
        {
            name:"Trip 2",
            timeSlot:"11:00 am - 11:45 am"
        },
        {
            name:"Trip 3",
            timeSlot:"12:00 am - 12:45 pm"
        },
        {
            name:"Trip 4",
            timeSlot:"01:15 pm - 02:00 pm"
        },
        {
            name:"Trip 5",
            timeSlot:"03:45 pm - 04:30 pm"
        },
        {
            name:"Trip 6",
            timeSlot:"05:00 pm - 05:45 pm"
        },
        {
            name:"Trip 7",
            timeSlot:"06:00 pm - 06:45 pm"
        },
        {
            name:"Trip 8",
            timeSlot:"06:45 pm - 07:30 pm"
        },
        {
            name:"Trip 9",
            timeSlot:"08:00 pm - 08:45 pm"
        },
    ],
    weekday:[
        {
            name:"Trip 2",
            timeSlot:"11:00 am - 11:45 am"
        },
        {
            name:"Trip 3",
            timeSlot:"12:00 am - 12:45 pm"
        },
        {
            name:"Trip 4",
            timeSlot:"01:15 pm - 02:00 pm"
        },
        {
            name:"Trip 5",
            timeSlot:"03:45 pm - 04:30 pm"
        },
        {
            name:"Trip 6",
            timeSlot:"05:00 pm - 05:45 pm"
        },
        {
            name:"Trip 7",
            timeSlot:"06:00 pm - 06:45 pm"
        },
        {
            name:"Trip 8",
            timeSlot:"06:45 pm - 07:30 pm"
        },
    ]
}

export const preferenceData = [
    
    {
        id: uuidv4(),
        title: "Malaysian Citizens",
        price: 85,
        details:[
            "Valid only for Malaysian Citizens"
        ]
    },

    {
        id: uuidv4(),
        title: "Non Malaysian Citizens",
        price: 115,
        details:[
            "Valid only for Non Malaysian Citizens"
        ]
    },  
]




export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/kgnp439w/Picture4.png",
        title:"Roaring Greatness",
        desc:"Witness the captivating performance of our Siberian tigers and their companions, showcasing an engaging spectacle featuring stunts and live feeding."
    },
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/FRnPC7JB/lost-world-of-tambun.jpg",
        title:"Flaming Percussion",
        desc:"Prepare to be dazzled by a captivating performance uniting fire eaters and skilled percussionists, guaranteeing a truly unforgettable experience."
    },   
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/3N5LQznX/W-Tube-Raiders.jpg",
        title:"Tube Raiders",
        desc:"Experience the thrill of the longest inflatable tube ride in Malaysia! Tube Raiders, a family favorite, offers four distinct slides for you to try as you navigate your way down from the towering summits."
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/W3J9Ks6p/Tin-Valley-800x600.jpg",
        title:"Dulang Washing",
        desc:"The dulang, employed to gather earth mixed with water, allowed for the meticulous swirling of water to wash away the mud while leaving behind the denser tin ore."
    },  
]



export const thingsTodo = [
    {
        id: uuidv4(),
        desc:"Experience thrilling and family-friendly rides at the Lost World Amusement Park that will get your adrenaline pumping.",
        image: "https://i.postimg.cc/Zq52fkM0/Lost-World-of-Tambun-Amusement-and-Water-Park-3640287b-11e2-4f9b-98d1-f01d432bffa9.jpg"
    },
    {
        id: uuidv4(),
        desc:"Immerse yourself in the Lost World Hot Springs, surrounded by the natural beauty of the forest.",
        image: "https://i.postimg.cc/3JQqs0cs/Picture3.png"
    },
    {
        id: uuidv4(),
        desc:"Admire the agile Siberian Tigers and learn about the Malaysian Tin Mining History",
        image: "https://i.postimg.cc/DycxRjsG/tiger-valley.jpg"
    },
    
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "Themepark: 11am - 11pm (Mon - Fri) | 10am - 11pm (Sat - Sun)",
            "Close every Tuesday except Public and School holiday",
            "Lost World Night Park + Hot Springs opens daily at 6 pm - 11 pm"
        ]
    },
    {
        id: uuidv4(),
        ques:"Child Policy",
        ans:[
            "Adult age is 13 to 59 years old.",
            "Child age is  3 to 12 years old.",
            "Below 90cm Free.",
            "Senior Citizen age 60 and above."
        ]
    },
    {
        id: uuidv4(),
        ques:"Ticket Inclusion in Full day Ticket",
        ans:[
            "Lost World Water Park",
            "Lost World Amusement Park",
            "Lost World Tin Valley",
            "Lost World Tiger Valley",
            "Lost World Petting Zoo",
            "Lost World Adventure Park",
            "Lost World Night park with Hotspring",
        ]
    },
    {
        id: uuidv4(),
        ques:"Ticket Inclusion in Night Park + Hotsprings Ticket",
        ans:[
            "Luminous Forest",
            "Lost World Hot Springs & Spa",
            "Lost World Petting Zoo by Night",
            "Ipoh Street",
            "Flaming Percussion",
            "Tarantula Alley"
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased"
        ]
    },
    {
        id: uuidv4(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter"]
    },
    {
        id: uuidv4(),
        ques:"Ticket Validity",
        ans:["You may use the tickets within 30 days from purchased date. Once entered, no re-entry is allowed."]
    },
]



export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"Can I bring food inside Lost World Of Tambun ?",
        ans:"No. Food and drinks is prohibited inside."
    },
    {
        id: uuidv4(),
        ques:"Does my 2 years old baby need to buy ticket to enter Lost World Of Tambun ?",
        ans:"No, Child below 90cm can enter for FREE."
    },
    {
        id: uuidv4(),
        ques:"How long can I stay inside Lost World Of Tambun ?",
        ans:"You may stay as long as you want, no time limit."
    },
    {
        id: uuidv4(),
        ques:"When does Lost World Of Tambun Themepark close ?",
        ans:"Lost World Of Tambun is close every Tuesday except for Public Holiday andSchool Holiday."
    },
    {
        id: uuidv4(),
        ques:"Does my ticket includes Locker and Tubes ?",
        ans:"No, its not included, but there are stations everywhere inside the park where guest may rent the items needed."
    },
    {
        id: uuidv4(),
        ques:"Can I enter Night park if I buy Full Day Ticket ?",
        ans:"Yes, Customer who have Full Day Ticket may enjoy night park as well by stayinginside the park as no re-entry is allowed."
    },
    {
        id: uuidv4(),
        ques:"How can I rent a cabana for my family ?",
        ans:"You may rent it a the counter based on the availability and size preferred."
    },
    {
        id: uuidv4(),
        ques:"Are there accommodations available on-site ?",
        ans:"Yes, there are accommodation options within the Lost World of Tambun resort, providing convenient stays for visitors."
    },
    {
        id: uuidv4(),
        ques:"Is the Lost World of Tambun suitable for all age groups ?",
        ans:"Yes, the park offers a variety of attractions and activities catering to visitors of all ages, making it a great destination for families and individuals alike ."
    },
    {
        id: uuidv4(),
        ques:"Is all games included in my ticket ?",
        ans:"Several thrilling activities are available as single rides and are not included in theticket. These include experiences like Haunted Chambers, 13-High Rope Course, ZipLine, Via Ferrata with Abseil, 6th Mile Tunnel Adventure, Kayaking, Swan PaddleBoat, Boga Cruise, and Exploring Gua Datok."
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
]

export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]


export const termsandconditiondata = [
    {
        id: uuidv4(),
        title: "Limited License",
        list:["You are granted a non-exclusive, non-transferable license to access and use our Website in accordance with these Terms."]
    },
    {
        id: uuidv4(),
        title: "Our Relationship",
        list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
    },
    {
        id: uuidv4(),
        title: "Legal Compliance:",
        list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
    },
    {
        id: uuidv4(),
        title: "Eligibility and Registration",
        list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
    },
    {
        id: uuidv4(),
        title: "DMCA Compliance",
        list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
    },
    {
        id: uuidv4(),
        title: "Intellectual Property",
        list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
    },
    {
        id: uuidv4(),
        title: "Linking",
        list:["You may link to our Website, following guidelines provided."]
    },
    {
        id: uuidv4(),
        title: "Links to Other Websites",
        list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
    },
    {
        id: uuidv4(),
        title: "Data Protection",
        list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
    },
    {
        id: uuidv4(),
        title: "Warranty Disclaimer",
        list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
    },
    {
        id: uuidv4(),
        title: "Limitation of Liability",
        list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
    },
    {
        id: uuidv4(),
        title: "Arbitration",
        list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
    },
]


export const publicHolidays = [
    "January 25th, 2024",
    "February 1st, 2024",
    "February 12th, 2024",
]