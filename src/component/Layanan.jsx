import React from 'react'
import gambar from '../assets/logoservices.jpg'
import gambar2 from '../assets/socialmedia.png'
import gambar3 from '../assets/website.png'

const dataO =[
  {
    gambar: gambar,
    title:'Logo Design',
    sub: 'Layanan desain logo kami menciptakan identitas visual yang unik dan berkesan untuk merefleksikan esensi dan nilai brand Anda. Dari konsep hingga implementasi, kami menggali cerita brand untuk menciptakan logo yang tidak hanya menarik perhatian, tetapi juga memberikan kesan mendalam.',
    meta: 'Read more',
  },

{
  gambar: gambar2,
  title:'Social Media Management',
  sub: 'Manajemen media sosial kami membantu membentuk kehadiran digital yang kuat bagi brand Anda. Dengan strategi berbasis konten dan interaksi aktif, kami merancang kampanye sosial media yang memikat dan meningkatkan keterlibatan, memberikan dampak positif pada visibilitas dan pertumbuhan brand Anda.',
  meta: 'Read more'
},  {
  gambar: gambar3,
  title:'Website Development',
  sub: 'Layanan pengembangan website kami mewujudkan visi digital Anda menjadi kenyataan. Dengan desain responsif dan fungsionalitas yang dioptimalkan, kami menciptakan pengalaman online yang memukau. Tim ahli kami merancang dan mengembangkan website yang tidak hanya estetis, tetapi juga memenuhi kebutuhan fungsionalitas dan performa tinggi.',
  meta: 'Read more'
}]

const Layanan = () => {
  return (
    <>
    <div className='justify-center items-center mt-24' >
        <h1 className='justify-center items-center flex text-4xl font-bold'>
          Services
        </h1>
      </div>

      <div className='justify-center items-center '>
        <p className='justify-center items-center flex mb-8'>
        Crewtiv Design bergerak di bidang Desain Grafis dan memeiliki beberapa layanan yang dikerjakan oleh profesional
        </p>
      </div>
    
    <div className="flex flex-rap justify-center">
      

{dataO.map((item, index)=>{
  return(
    <div key={index} className="m-5 max-w-sm bg-white rounded-lg shadow dark:bg-gray-800">
    <div className='image-container'>
    <a href="#">
        <img src={item.gambar} alt="" className="rounded-t-lg" />
    </a>
    </div>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.sub}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {item.meta}
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
  )

})}

    </div>
  
    </>
  )
}

export default Layanan