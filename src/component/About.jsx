import React from 'react'
import image from '../assets/logo.svg'

const About = () => {
  return (
    <div className='lg:flex items-center justify-center bg-black-pink py-36'>
        <div className='w-1/2 flex items-center justify-center' >
            <img src={image} alt=""className='h-96 justify-center'/>
        </div>
        <div className='w-1/2'>
            <h1 className='text-[#ffffff] font-medium text-4xl flex py-5'>
                About Us
            </h1>

            <div className='items-center text-[#ffffff]'>
            <p className='lg:my-4 text-justify lg:pr-32'>
            Crewtiv Media adalah sebuah creative agency yang berfokus pada layanan desain logo, poster, pengelolaan media sosial, dan pembuatan website. Dibentuk pada tahun 2020, Crewtiv Media telah berkembang dan memiliki tim yang profesional. Kami percaya bahwa desain yang kreatif dan inovatif memiliki kekuatan untuk menginspirasi dan mengkomunikasikan pesan dengan efektif. </p>
            <p className='lg:my-4 text-justify lg:pr-32'>
            Visi kami yaitu "Menjadi mitra terpercaya dalam menciptakan solusi desain kreatif yang memberikan dampak positif dan menginspirasi klien kami."
            </p>
            <p className='lg:my-4 text-justify lg:pr-32'>

            Dengan kombinasi keahlian dan dedikasi tim kami, Crewtiv Media bertujuan untuk memberikan solusi desain yang kreatif, inovatif, dan mengesankan kepada klien kami. Kami siap menghadirkan konsep desain yang memenuhi kebutuhan dan harapan Anda, serta memberikan pengalaman yang menyenangkan dan hasil yang memuaskan.
            </p>
            </div>
            </div>
    </div>
  )
}

export default About 