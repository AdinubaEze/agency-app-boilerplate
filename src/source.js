import { BsCodeSquare ,BsWhatsapp} from "react-icons/bs";
import { GiCardDraw } from "react-icons/gi";
import { TbBrand4Chan } from "react-icons/tb";
import { profile1,profile2,profile3,profile4,
         profile5,profile6,amazon,facebook,google,
         linkedin,microsoft,netflix,paypal,samsung,
         skype, whatsapp} from "./images";
import { CiFacebook ,CiLinkedin} from "react-icons/ci";
import { FaPaintBrush,FaInstagram,FaYoutube } from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {SiFiverr,} from "react-icons/si";
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'




export const tabs = [
    {name:"Home",id:'hero'},
    {name:"Our Services",id:'services'},
    {name:"About Us",id:'about'},
    {name:"Projects",id:'projects'},
    {name:"Teams",id:'teams'},
];


export const services = [
    {
        icon:<BsCodeSquare/>,
        name:"Web Design",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<TbBrand4Chan/>,
        name:"Product Branding",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<FaPaintBrush/>,
        name:"UI/UX Design",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<GiCardDraw/>,
        name:"Graphic Design",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    }
]



export const partners = [
  {
    name:"Amazon",
    logo:amazon,
  },
  {
    name:"Facebook",
    logo:facebook,
  },
  {
    name:"Google",
    logo:google,
  },
  {
    name:"LinkedIn",
    logo:linkedin,
  },
  {
    name:"Microsoft",
    logo:microsoft,
  },
  {
    name:"Netflix",
    logo:netflix,
  },
  {
    name:"PayPal",
    logo:paypal,
  },
  {
    name:"Samsung",
    logo:samsung,
  },
  {
    name:"Skipe",
    logo:skype,
  },
  {
    name:"Whatsapp",
    logo:whatsapp,
  },
]



export const projects = [
  {
    id:1,
    category:"Web",
    name:'Food App',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image:"https://cdn.dribbble.com/users/1615584/screenshots/15710288/media/6c7a695e5d4f0a947b2714c4edb39899.jpg?resize=400x300&vertical=center",
    url:'https://github.com',
  },
  {
    id:2,
    category:"Apps",
    name:'Mobile ecommerce website',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image:"https://cdn.dribbble.com/userupload/6613763/file/original-a15b50e48bb642c55f405d582c04d0e6.png",
    url:'https://github.com',
  },
  {
    id:3,
    category:"UI/UX",
    name:'Ride sharing App',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image:"https://miro.medium.com/v2/resize:fit:1400/0*lrz788UiRbPakyVe.png",
    url:'https://github.com',
  },
  {
    id:4,
    category:"Web",
    name:'WhatsApp Clone',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image:"https://cdn.dribbble.com/userupload/8606261/file/original-591d573b6e1715663cf3c4f29da1f1c5.png?resize=400x0",
    url:'https://github.com',
  },
  {
    id:5,
    category:"Apps",
    name:'Task Management',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                vitae cupiditate totam quia`,
    image:"https://i.pinimg.com/originals/dc/bf/5f/dcbf5f8ba32d8ff36cd30d36a820aa5e.png",
    url:'https://github.com',
  },
  {
    id:6,
    category:"UI/UX",
    name:'Music And Video Streaming App',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image:"https://cdn.dribbble.com/users/4813218/screenshots/14667363/dribbble_shot_hd_-_1__1_.png",
    url:'https://github.com',
  },
];


export const teams = [
  {
    name:"Emmanuel Eze",
    title:"Fullstack Developer",
    profile:profile1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Oluoma James",
    title:"UI/UX",
    profile:profile2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Lawrence Onu",
    title:"Frontend Developer",
    profile:profile3,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Mary Brown",
    title:"Content Writer",
    profile:profile4,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]


export const testimonies = [
  {
    profile:profile3,
    name:'Samuel Eze',
    content:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    profile:profile4,
    name:'Emmanuel Joseph',
    content:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    profile:profile5,
    name:'Gloria Chiwendu',
    content:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    profile:profile6,
    name:'Precious Stone',
    content:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  }

];




export const contactInfo = [
  {
    name:"Email",
    icon:<MdOutlineEmail/>,
    address:"mradinuba@gmail.com",
    link:"mailto:mradinuba@gmail.com",
  },
  {
    name:"Messenger",
    icon:<RiMessengerLine/>,
    address:"Emmanuel Eze",
    link:"http://m.me/profile.php?id=100076751404019",
  },
  {
    name:"WhatsApp",
    icon:<BsWhatsapp/>,
    address:"+2347039681695",
    link:"https://api.whatsapp.com/send?phone=+2347039681695",
  },
]



export const socialHandles = [
  {
    name:"Fiverr",
    icon:<SiFiverr/>,
    link:"",
  },
  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"",
  },
  {
    name:"LinkedIn",
    icon:<CiLinkedin/>,
    link:"",
  },
  {
    name:"Youtube",
    icon:<FaYoutube/>,
    link:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];