import React from "react";
import Pricing from "./Pricing";

const logo=[
    {
        category : 'Silver',
        price : '390.000',
        layanan:[
            {
                lay: 'Original Design',

            },
            {
                lay: 'Logo',

            },{
                lay: 'Logo Mockup',

            },{
                lay: 'Collor Pallete'
            },
            {
                lay: 'Typeface'
            },{
                lay: '1x Additional Item'
            }
        ]
    },
    {
        category : 'Gold',
        price : '590.000',
        layanan:[
            {
                lay: 'Original Design',

            },
            {
                lay: 'Logo',

            },{
                lay: 'Logo Mockup',

            },{
                lay: 'Collor Pallete'
            },{
                lay: 'Typeface'
            },
            {
                lay: '3x Additional Item'
            }
        ]  
    },
    {
        category : 'Diamond',
        price : '780.000',
        layanan:[
            {
                lay: 'Original Design',

            },
            {
                lay: 'Logo',

            },{
                lay: 'Logo Mockup',

            },{
                lay: 'Collor Pallete'
            },{
                lay: 'Typeface'
            },
            {
                lay: 'Phylsophy Logo'
            },
            {
                lay: '5x Additional Item'
            }
        ]  
    }
]
const sosmed=[
    {
        category : 'Silver',
        price : '390.000',
        layanan:[
            {
                lay: 'Original Design',

            },
            {
                lay: 'Logo',

            },{
                lay: 'Logo Mockup',

            },{
                lay: 'Collor Pallete'
            },
            {
                lay: 'Typeface'
            },{
                lay: '1x Additional Item'
            }
        ]
    },
    {
        category : 'Gold',
        price : '590.000',
        layanan:[
            {
                lay: 'Original Design',

            },
            {
                lay: 'Logo',

            },{
                lay: 'Logo Mockup',

            },{
                lay: 'Collor Pallete'
            },{
                lay: 'Typeface'
            },
            {
                lay: '3x Additional Item'
            }
        ]  
    },
    {
        category : 'Diamond',
        price : '780.000',
        layanan:[
            {
                lay: 'Original Design',

            },
            {
                lay: 'Logo',

            },{
                lay: 'Logo Mockup',

            },{
                lay: 'Collor Pallete'
            },{
                lay: 'Typeface'
            },
            {
                lay: 'Phylsophy Logo'
            },
            {
                lay: '5x Additional Item'
            }
        ]  
    }
]
const website=[
    {
        category : 'Silver',
        price : '390.000',
        layanan:[
            {
                lay: 'Original Design',

            },
            {
                lay: 'Logo',

            },{
                lay: 'Logo Mockup',

            },{
                lay: 'Collor Pallete'
            },
            {
                lay: 'Typeface'
            },{
                lay: '1x Additional Item'
            }
        ]
    },
    {
        category : 'Gold',
        price : '590.000',
        layanan:[
            {
                lay: 'Original Design',

            },
            {
                lay: 'Logo',

            },{
                lay: 'Logo Mockup',

            },{
                lay: 'Collor Pallete'
            },{
                lay: 'Typeface'
            },
            {
                lay: '3x Additional Item'
            }
        ]  
    },
    {
        category : 'Diamond',
        price : '780.000',
        layanan:[
            {
                lay: 'Original Design',

            },
            {
                lay: 'Logo',

            },{
                lay: 'Logo Mockup',

            },{
                lay: 'Collor Pallete'
            },{
                lay: 'Typeface'
            },
            {
                lay: 'Phylsophy Logo'
            },
            {
                lay: '5x Additional Item'
            }
        ]  
    }
]

const Ilayanan = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap ml-56 mr-56">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xl font-medium px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Logo Design
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xl font-medium px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Social Media Management
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xl font-medium px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Website Development
              </a>
            </li>
          </ul>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p className="p-5">
                  Crewtiv Media, spesialis dalam bidang Digital Marketing, menyajikan layanan profesional yang mencakup desain logo kreatif, manajemen media sosial yang strategis, dan pengembangan website yang responsif. Melalui pendekatan terpadu ini, kami memberikan solusi menyeluruh untuk memperkuat identitas digital, meningkatkan interaksi di media sosial, dan menciptakan pengalaman web yang menarik. Kami berkomitmen untuk memastikan bahwa bisnis Anda tampil gemilang di ranah digital.
                  </p>
                    <Pricing item={logo}/>

                    <p>
                        *NB : Additional Item 
                        <ul>
                            <li>
                            Logo
                            </li>
                            <li>
                            Packaging (Box, Pouch, Cup, Plastic, etc)
                            </li>
                            <li>
                            Banner, Flyer, Poster
                            </li>
                            <li>
                            Catalogue
                            </li>
                            <li>
                                
                            Social Media (Tamplate Feeds/Insta Story *3 Pcs)
                            </li>
                            <li>
                            Menu
                            </li>
                            <li>Name Card</li>
                            <li>Co-Card</li>
                            <li>Uniform</li>
                            <li>Appron</li>
                            <li>Souvenir</li>
                            <li>Envelope</li>
                        </ul>
                    </p>

                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                   Social Media Management membantu membentuk kehadiran digital yang kuat bagi brand Anda. Dengan strategi berbasis konten dan interaksi aktif, kami merancang kampanye sosial media yang memikat dan meningkatkan keterlibatan, memberikan dampak positif pada visibilitas dan pertumbuhan brand Anda.
                  </p>

                  <Pricing item={sosmed}/>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                  Website Development mewujudkan visi digital Anda menjadi kenyataan. Desain responsif dan fungsionalitas yang dioptimalkan akan menciptakan pengalaman online yang memukau. Tim ahli kami merancang dan mengembangkan website yang tidak hanya estetis, tetapi juga memenuhi kebutuhan fungsionalitas dan performa tinggi.
                  </p>

                  <Pricing item={website}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Ilayanan color="light-pink" />;
    </>
  );
}