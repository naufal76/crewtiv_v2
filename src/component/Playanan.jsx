import React from "react";
import image from '../assets/services.png'


const Playanan = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
    <div className='bg-cover h-96 flex text-center justify-center items-center' style={{backgroundImage:`url(${image})`}} >
      </div>

      <div className='justify-center items-center '>
        <p className='justify-center items-center flex mt-10 ml-56 mr-56'>
        Crewtiv Media, spesialis dalam bidang digital marketing, menyajikan layanan profesional yang mencakup desain logo kreatif, manajemen media sosial yang strategis, dan pengembangan website yang responsif. Melalui pendekatan terpadu ini, kami memberikan solusi menyeluruh untuk memperkuat identitas digital, meningkatkan interaksi di media sosial, dan menciptakan pengalaman web yang menarik. Kami berkomitmen untuk memastikan bahwa bisnis Anda tampil gemilang di ranah digital.
        </p>

        <p className=" flex m-6 ml-56">
            Lebih detailnya mari simak dibawah ini :
        </p>
      </div>

      </>
  );
};

export default function TabsRender() {
  return (
    <>
    <Playanan color="light-pink" />;
    </>
  );
}