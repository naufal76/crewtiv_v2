import React from 'react'
import gambar1 from '../assets/logo.png'
const data = [
    { id: 1, imageUrl: gambar1, caption: 'Deskripsi Gambar 1' },
    { id: 2, imageUrl: '../assets/logoservices.jpg', caption: 'Deskripsi Gambar 2' },
    { id: 3, imageUrl: '../assets/logoservices.jpg', caption: 'Deskripsi Gambar 3' },
  ]

const Coba = () => {
  return (
    <div>
    {data.map(item => (
      <div key={item.id} className="image-container">
        <img src={item.imageUrl} alt={item.caption} className="image" />
        <p className="caption">{item.caption}</p>
      </div>
    ))}
  </div>
  )
}

export default Coba