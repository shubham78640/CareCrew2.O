import banner1 from "../../../CareCrew2.O/carecrew/src/Images/carecrew_banner_cleaning.jpg"
import banner2 from "../../../CareCrew2.O/carecrew/src/Images/carecrew_banner_cook.jpg"
import imgcooking from "../../carecrew/src/Images/Cooking.jpg"
import imgHK from "../../carecrew/src/Images/HK.jpg"
import imgCC from "../../carecrew/src/Images/Childcare.jpg"
import imgEC from "../../carecrew/src/Images/eldercare_service.jpg"
import imgDriver from "../../carecrew/src/Images/driving_service.jpg"
import imgOthers from "../../carecrew/src/Images/Question.jpg"
import imgHelp from "../../carecrew/src/Images/CChelp.png"

export const TOMAILE = "rituja@thepinchlife.com";

export const crouselData = [

    {
        imagePath: banner1, 
        title:"Help is not just a word it is a responsibility",
        description:"We are ready to help you. Are you?"
    },
    {
        imagePath:banner2,
        title:"Help is not just a word it is a responsibility",
        description:"We are ready to help you. Are you?"
    },
  ]


export const dataDigitalBestSeller = [
    {
      id: 1,
      icon:"AddHomeWorkIcon",
      title: 'Housekeeping',
      paragraph: 'Our housekeepers are trained to keep your homes in order by performing multiple household chores with...',
      category: 'Know More',
      linkImg:imgHK,
      link:"/services/housekeeping"
    },
    {
      id: 2,
      icon:"AddHomeWorkIcon",
      title: 'Cooking',
      paragraph: 'Our home cooks are professionally trained to prepare wholesome home-style meals for the families to enjoy',
      category: 'Know More',
      linkImg:imgcooking,
      link:"/services/cooking"
    },
    {
      id: 3,
      icon:"AddHomeWorkIcon",
      title: 'Child Care',
      paragraph: 'We provide reliable child caregivers who assure the safety and growth of you child.',
      category: 'Know More',
      linkImg:imgCC,
      link:"/services/childcare"
    },
    {
      id: 4,
      icon:"AddHomeWorkIcon",
      title: 'Elder Care',
      paragraph: "Whether it's for your parents or grandparents, you can hire trained professionals for taking care of...",
      category: 'Know More',
      linkImg:imgEC,
      link:"/services/eldercare"
    },
    {
      id: 5,
      icon:"AddHomeWorkIcon",
      title: 'Driving',
      paragraph: 'We provide licensed drivers with in-depth knowledge about cars and driving etiquette.',
      category: 'Know More',
      linkImg:imgDriver,
      link:"/services/driver"
    },
    {
      id: 6,
      icon:"AddHomeWorkIcon",
      title: 'Others',
      paragraph: 'Did we miss out on the service you are looking for? Submit your inquiry to us.',
      category: 'Know More',
      linkImg:imgOthers,
      link:"/services/others"
    }

  ];

  export const servicesData = [
    {service:"HouseKeeping"},
    {service:"Child Care"},
    {service:"Elder Care"},
    {service:"Cooking"},
    {service:"Driving"},
    {service:"Others"}
]

export const servicesDatainHindi = [
  {service:"घर की सफाई"},
  {service:"खाना बनाना"},
  {service:"बच्चों की देखभाल"},
  {service:"बड़ों की देखभाल"},
  {service:"गाड़ी चलाना"},
  {service:"अन्य"}
]

export let CardsData = [
{
  Cardimage:`${imgHK}`,
  CardHeading:"Housekeeping",
  CardContentLines:"Our housekeepers are trained to keep your homes in order by performing multiple household chores with...",
  link:"/services/housekeeping"
},
{
  Cardimage:`${imgcooking}`,
  CardHeading:"Cooking",
  CardContentLines:"Our home cooks are professionally trained to prepare wholesome home-style meals for the families to enjoy",
  link:"/services/cooking"
},
{
  Cardimage:`${imgCC}`,
  CardHeading:"Child Care",
  CardContentLines:"We provide reliable child caregivers who assure the safety and growth of you child.",
  link:"/services/childcare"
},
{
  Cardimage:`${imgEC}`,
  CardHeading:"Elder Care",
  CardContentLines:"Whether it's for your parents or grandparents, you can hire trained professionals for taking care of...",
  link:"/services/eldercare"
},
{
  Cardimage:`${imgDriver}`,
  CardHeading:"Driving",
  CardContentLines:"We provide licensed drivers with in-depth knowledge about cars and driving etiquette.",
  link:"/services/driver"
},
{
  Cardimage:`${imgOthers}`,
  CardHeading:"Others",
  CardContentLines:"Did we miss out on the service you are looking for? Submit your inquiry to us.",
  link:"/services/others"
},

]


// export const MasterApi ="https://sheetdb.io/api/v1/nepz7t98wbmy1"
export const MasterApi ="https://sheetdb.io/api/v1/pmx4h1loajb8x"


export const MasterApi1 ="https://sheetdb.io/api/v1/3um500sqcn5p2"




export let CardsData1 = [
  {
    Cardimage:`https://www.treehugger.com/thmb/C_1wcwHYyB3NK6niB-Lw5jDkxnU=/3319x3316/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2015__07__golden-ratio-sunflower-0b959ab098e04d1782bdfb411c43abd9.jpg`,
    CardHeading:"Shubham Mishra",
    CardContentLines:"Our housekeepers.",
    link:"/services/housekeeping",
    HelpImage:imgHelp,
    HelpName:"Rajiv Sharma",
    Age:"26",
    Gender:"Male",
    Location:"Gurgram",
    SkillSet:"Driver",
    Languages:"Hindi",
    Experience:"2 years",
    TraningDetails:"NA",
    ExpectedSalary:"12 Hours",



  },
  {
    Cardimage:`https://tse2.mm.bing.net/th?id=OIP.uT0Js_oIakp-OXc2OXC4MAHaEK&pid=Api&P=0&h=180`,
    CardHeading:"Pratik Ji",
    CardContentLines:"Our home cooks ",
    link:"/services/cooking",
    HelpImage:imgHelp,
    HelpName:"Mohit Sharma",
    Age:"25",
    Gender:"Male",
    Location:"Gurugram",
    SkillSet:"Manoj Kumar",
    Languages:"Hindi",
    Experience:"2 years",
    TraningDetails:"NA",
    ExpectedSalary:"12 Hours"
  },
  {
    Cardimage:`https://thumbs.dreamstime.com/b/man-4286631.jpg`,
    CardHeading:"Hitesh Ji",
    CardContentLines:"We provide .",
    link:"/services/childcare",
    HelpImage:imgHelp,
    HelpName:"Raju gupta",
    Age:"22",
    Gender:"Male",
    Location:"Gurugram",
    SkillSet:"Driver",
    Languages:"Hindi",
    Experience:"2 years",
    TraningDetails:"NA",
    ExpectedSalary:"12 Hours",
  },
  {
    Cardimage:`https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-beard-736716.jpg&fm=jpg`,
    CardHeading:"Rahul Roy",
    CardContentLines:"Whether it's ",
    link:"/services/eldercare",
    HelpImage:imgHelp,
    HelpName:"Seema",
    Age:"26",
    Gender:"Female",
    Location:"Gurugram",
    SkillSet:"Coocking,",
    Languages:"Hindi",
    Experience:"2 years",
    TraningDetails:"NA",
    ExpectedSalary:"12 Hours",
  },
  {
    Cardimage:`https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/rZJIMvhmliwmde8a6/videoblocks-happy-black-african-man-in-suit-portrait-of-excited-cheerful-man-indoor-against-window-background_sh2ahadmq_thumbnail-1080_01.png`,
    CardHeading:"Intezar Khan",
    CardContentLines:"We provide.",
    link:"/services/driver",
    HelpImage:imgHelp,
    HelpName:"poonam",
    Age:"26",
    Gender:"Female",
    Location:"Gurugram",
    SkillSet:"Housekeeper",
    Languages:"Hindi",
    Experience:"2 years",
    TraningDetails:"NA",
    ExpectedSalary:"12 Hours",
    
  },
  {
    Cardimage:`http://missmalini.files.wordpress.com/2009/04/att1066791.jpg`,
    CardHeading:"Parth Mishra",
    CardContentLines:"Did we.",
    link:"/services/others",
    HelpImage:imgHelp,
    HelpName:"Pinki",
    Age:"27",
    Gender:"Female",
    Location:"Gurugram",
    SkillSet:"Housekeeper",
    Languages:"Hindi",
    Experience:"2 years",
    TraningDetails:"NA",
    ExpectedSalary:"12 Hours"
  },
  {
  Cardimage:`https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-beard-736716.jpg&fm=jpg`,
  CardHeading:"Rahul Roy",
  CardContentLines:"Whether it's",
  link:"/services/eldercare",
  HelpImage:imgHelp,
  HelpName:"Rohit",
  Age:"26",
  Gender:"Male",
  Location:"Gurugram",
  SkillSet:"Housekeeper",
  Languages:"Hindi",
    Experience:"2 years",
    TraningDetails:"NA",
    ExpectedSalary:"12 Hours"
},
{
  Cardimage:`https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/rZJIMvhmliwmde8a6/videoblocks-happy-black-african-man-in-suit-portrait-of-excited-cheerful-man-indoor-against-window-background_sh2ahadmq_thumbnail-1080_01.png`,
  CardHeading:"Intezar Khan",
  CardContentLines:"We provide.",
  link:"/services/driver",
  HelpImage:imgHelp,
  HelpName:"Rajesh",
  Age:"27",
  Gender:"Male",
  Location:"Gurugram",
  SkillSet:"Housekeeper",
  Languages:"Hindi",
    Experience:"2 years",
    TraningDetails:"NA",
    ExpectedSalary:"12 Hours",
},
{
  Cardimage:`http://missmalini.files.wordpress.com/2009/04/att1066791.jpg`,
  CardHeading:"Parth Mishra",
  CardContentLines:"Did we.",
  link:"/services/others",
  HelpImage:imgHelp,
  HelpName:"Raj Kumar",
  Age:"28",
  Gender:"Male",
  Location:"Gurugram",
  SkillSet:"Housekeeper",
  Languages:"Hindi",
  Experience:"2 years",
  TraningDetails:"NA",
  ExpectedSalary:"12 Hours",
},

]



export const dataDigitalBestSeller1 = [
  {
    id: 1,
    icon:"AddHomeWorkIcon",
    title: 'Ramesh',
    paragraph: 'Our housekeepers are trained to keep your homes in order by performing multiple household chores with...',
    category: 'Know More',
    linkImg:imgHK,
    link:"/services/housekeeping"
  },
  {
    id: 2,
    icon:"AddHomeWorkIcon",
    title: 'Suresh',
    paragraph: 'Our home cooks are professionally trained to prepare wholesome home-style meals for the families to enjoy',
    category: 'Know More',
    linkImg:imgHK,
    link:"/services/cooking"
  },
  {
    id: 3,
    icon:"AddHomeWorkIcon",
    title: 'Dinesh',
    paragraph: 'We provide reliable child caregivers who assure the safety and growth of you child.',
    category: 'Know More',
    linkImg:imgHK,
    link:"/services/childcare"
  },
  {
    id: 1,
    icon:"AddHomeWorkIcon",
    title: 'Kalu',
    paragraph: 'Our housekeepers are trained to keep your homes in order by performing multiple household chores with...',
    category: 'Know More',
    linkImg:imgHK,
    link:"/services/housekeeping"
  },
  {
    id: 2,
    icon:"AddHomeWorkIcon",
    title: 'Silu',
    paragraph: 'Our home cooks are professionally trained to prepare wholesome home-style meals for the families to enjoy',
    category: 'Know More',
    linkImg:imgHK,
    link:"/services/cooking"
  },
  {
    id: 3,
    icon:"AddHomeWorkIcon",
    title: 'ram Praksh',
    paragraph: 'We provide reliable child caregivers who assure the safety and growth of you child.',
    category: 'Know More',
    linkImg:imgHK,
    link:"/services/childcare"
  },
  {
    id: 4,
    icon:"AddHomeWorkIcon",
    title: 'Mayank',
    paragraph: "Whether it's for your parents or grandparents, you can hire trained professionals for taking care of...",
    category: 'Know More',
    linkImg:imgHK,
    link:"/services/eldercare"
  },
  {
    id: 5,
    icon:"AddHomeWorkIcon",
    title: 'Intezar',
    paragraph: 'We provide licensed drivers with in-depth knowledge about cars and driving etiquette.',
    category: 'Know More',
    linkImg:imgHK,
    link:"/services/driver"
  },
  {
    id: 6,
    icon:"AddHomeWorkIcon",
    title: 'Parth',
    paragraph: 'Did we miss out on the service you are looking for? Submit your inquiry to us.',
    category: 'Know More',
    linkImg:imgHK,
    link:"/services/others"
  }

];
