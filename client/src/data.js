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
                    adult:20,
                    child:18.50,
                    senior:18.50,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:38,
                    child:24,
                    senior:24,
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
        image: "https://i.postimg.cc/zGHJ0chg/Picture1.png",
        title:"Relax and enjoy the scenery.",
        desc:"Take a moment to relax and enjoy the peaceful ambiance. Let the gentle rockingof the boat and the scenic beauty of Putrajaya's surroundings create a calming experience."
    },
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/m25L3sP4/cruise-tasik-putrajaya-jpg.webp",
        title:"Seeing the sights",
        desc:"Admire the breathtaking scenery and the city's notable buildings, such as the Putra Bridge and Mosque."
    },   
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/43TTwNZD/Picture5.png",
        title:"Sunset Views",
        desc:"For a romantic and unforgettable experience, if you decide to go on an evening boat, take in the stunning sunset over the lake."
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/4ynCnYb9/Picture6.png",
        title:"Boat Tours",
        desc:"There are two boat options available for customers to enjoy, the Dondang Sayang Boat or the Putrajaya Cruise Boat."
    },  
]



export const thingsTodo = [
    {
        id: uuidv4(),
        desc:"Embark on a sightseeing adventure by hopping on a cruise and treating yourself to a panoramic view of the picturesque Putrajaya Lake.",
        image: "https://i.postimg.cc/0Np9qKc5/Picture3.png"
    },
    {
        id: uuidv4(),
        desc:"Experience tranquility on a soothing journey with Putrajaya cruise, where you canexplorethe serene side of Kuala Lumpur in Putrajaya, situated just 25km south of the capital.",
        image: "https://i.postimg.cc/9MYXyw7g/c2.jpg"
    },
    {
        id: uuidv4(),
        desc:"Uncover distinctive local architecture at the Putrajaya Government Centre",
        image: "https://i.postimg.cc/m25L3sP4/cruise-tasik-putrajaya-jpg.webp"
    },
    
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "Trips are based on availability.",
            "Cruise Tasik: 11am - 6.45pm (Mon-Fri) | 10am - 8pm (Sat & Sun)",
            "Perahu Dondang Sayang: 10am - 6pm (Mon-Sunday)",
            "Public Holiday follows Weekends Time.",
        ]
    },
    {
        id: uuidv4(),
        ques:"Child Policy",
        ans:[
            "Adult age is 13 to 59 years old.",
            "Child age is  3 to 12 years old.",
            "Senior Citizen age 60 and above."
        ]
    },
    {
        id: uuidv4(),
        ques:"Important Notes",
        ans:[
            "Child rate applies for children above 80cm.",
            "children below 80 cm height, only one (1) lap child is allowed per adult.",
            "For Perahu Dondang Sayang, child below 90cm is not allowed",
            "Customers who have entered their 24th week of pregnancy are not allowed",
            "Customer should arrive at the counter at least 30 minutes before trip time.",
            "OKU/ Disabled customers may purchased their tickets at the counter",
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
        ans:[
            "Upon arrival, show your ticket/e-voucher at the counter",
            "If it rains after redemption, you may refer to the counter for further information"
        ]
    },
    {
        id: uuidv4(),
        ques:"Ticket Validity",
        ans:[
            "You may use the tickets within 30 days from purchased date."
        ]
    },
]



export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"What types of cruises are available ?",
        ans:"Putrajaya Cruise offers a variety of cruises, such as sight seeing cruise and perahu dondang sayang."
    },
    {
        id: uuidv4(),
        ques:"How long is a typical Putrajaya Cruise ?",
        ans:"The duration can vary depending on the type of cruise. Daytime sight seeing cruises may be shorter, while dinner cruises or private charters may extend for a longer duration."
    },
    {
        id: uuidv4(),
        ques:"What landmarks will I see during the cruise ?",
        ans:"The cruise provides stunning views of Putrajaya's landmarks, such as the Putra Mosque, Putra Bridge, and other architectural wonders around Putrajaya Lake."
    },
    {
        id: uuidv4(),
        ques:"How early should I arrive for the cruise ?",
        ans:"Arrive at least 15-30 minutes before the scheduled departure time to ensure a smooth boarding process. It's advisable to check with the operator for specific recommendations."
    },
    {
        id: uuidv4(),
        ques:"Are there restroom facilities on the cruise boat ?",
        ans:"Most cruise boats are equipped with restroom facilities for the convenience of passengers."
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