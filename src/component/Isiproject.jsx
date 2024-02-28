import React from 'react'
import gambar from '../assets/work-4.jpg'
import gambar2 from '../assets/teras.png'

const isi =[
    {
      gambar: gambar,
      title:'Basreng Reyna',
      sub: 'Packaging',
    },
  
  {
    gambar: gambar2,
    title:'Teras',
    sub: 'Social Media Story',
  },]

const Isiproject = () => {
  return (
    <>
    <div className="flex grid grid-cols-3 gap-5 flex-rap items-center justify-center">

{isi.map((isi, index)=>{
    return(
        <div>
        <div key={index} className="m-5 max-w-sm bg-white rounded-lg shadow dark:bg-gray-800">
    <div className='image-container'>
    <a href="#">
        <img src={isi.gambar} alt="" className="rounded-t-lg" />
    </a>
    </div>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{isi.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{isi.sub}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
    </div>
    )
})

}
</div>
</>
  )
}

export default Isiproject