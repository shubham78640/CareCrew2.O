import banner1 from "../../../CareCrew2.O/carecrew/src/Images/carecrew_banner_cleaning.jpg"
import banner2 from "../../../CareCrew2.O/carecrew/src/Images/carecrew_banner_cook.jpg"
import imgcooking from "../../carecrew/src/Images/Cooking.jpg"
import imgHK from "../../carecrew/src/Images/HK.jpg"
import imgCC from "../../carecrew/src/Images/Childcare.jpg"
import imgEC from "../../carecrew/src/Images/eldercare_service.jpg"
import imgDriver from "../../carecrew/src/Images/driving_service.jpg"
import imgOthers from "../../carecrew/src/Images/Question.jpg"

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


export const MasterApi ="https://sheetdb.io/api/v1/nepz7t98wbmy1"


export const MasterApi1 ="https://sheetdb.io/api/v1/3um500sqcn5p2"
