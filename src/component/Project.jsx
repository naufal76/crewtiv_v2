import React from 'react'

const datay =[
    {
      gambar: 'https://mockuptree.com/wp-content/uploads/2020/01/website-mockup-psd.jpg',
      title:'Logo Design',
    
    },
  
  {
    gambar: 'https://img.freepik.com/premium-psd/multi-social-media-screens-mockup-mosaic_1332-22323.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704326400&semt=ais',
    title:'Social Media Management',
   
  },  {
    gambar: 'https://mockuptree.com/wp-content/uploads/2020/01/website-mockup-psd.jpg',
    title:'Website Development',
  },
    {
      gambar: 'https://mockuptree.com/wp-content/uploads/2020/01/website-mockup-psd.jpg',
      title:'Logo Design',
    
    },
  
  {
    gambar: 'https://img.freepik.com/premium-psd/multi-social-media-screens-mockup-mosaic_1332-22323.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704326400&semt=ais',
    title:'Social Media Management',
   
  },  {
    gambar: 'https://mockuptree.com/wp-content/uploads/2020/01/website-mockup-psd.jpg',
    title:'Website Development',
  }
]

const Project = () => {
  return (
    <>
    <div className='justify-center items-center mt-24' >
        <h1 className='justify-center items-center flex text-4xl font-bold'>
          Project
        </h1>
      </div>

      <div className='justify-center items-center '>
        <p className='justify-center items-center flex mb-8'>
        Crewtiv Design bergerak di bidang Desain Grafis dan memeiliki beberapa layanan yang dikerjakan oleh profesional
        </p>
      </div>
    
    <div className="flex grid grid-cols-3 gap-5 flex-rap items-center justify-center">
    

{datay.map((item, index)=>{
    return(
        <div key={index} className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800">
    <a href="#">
        <img src={item.gambar} alt="" className="rounded-t-lg" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-1xl font-medium tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        </a>
    </div>
</div>
  )
  
})}
    </div>
  
    </>
  )
}

export default Project