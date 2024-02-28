import React from 'react'

const Pricing = ({item}) => {
  return (
    <div>
      
<div className="container my-24 mx-auto md:px-6">
  <section className="mb-32">
    <h2 className="mb-12 text-center text-3xl font-bold">Pricing</h2>

    <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
        {
            item.map((data, index)=>{
                return(
<div key={index} className="mb-6 lg:mb-0">
        <div
          className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
            <p className="mb-4 text-sm uppercase">
              <strong>{data.category}</strong>
            </p>
            <h3 className="mb-6 text-3xl">
              <strong>Rp. {data.price}</strong>
              <small className="text-base text-neutral-500 dark:text-neutral-300"></small>
            </h3>

            <button type="button"
              className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init data-te-ripple-color="light">
              Buy
            </button>
          </div>
          <div className="p-6">
            <ol className="list-inside">
                {data.layanan.map((data2,index)=>{
                    return(
                        <li key={index} className="mb-4 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                          stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>{data2.lay}
                      </li>
                    )
                })}
              
            </ol>
          </div>
        </div>
      </div>

                )
            })
        }
      


    </div>
  </section>
</div>
    </div>
  )
}

export default Pricing