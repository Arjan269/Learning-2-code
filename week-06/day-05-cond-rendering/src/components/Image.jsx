import './Image.css'
import cat from '../assets/cat-src.jpeg'

export default function Image() {
  return (
    <div>
      <h1>Image from the public folder</h1>

      <img src="/dog-public.png" alt="dog" />

      <h1>Image from the src folder</h1>
      <img src={cat} alt="cat" />

      <h1>Background image applied in css</h1>
      <div className='bg-div'>I have a background image</div>
    </div>
  )
}
