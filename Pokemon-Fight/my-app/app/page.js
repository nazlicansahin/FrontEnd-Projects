import Image from 'next/image'
import imageImg from '../public/image.jpg'

export default function Home() {
  return (
<>
<Image src={imageImg} alt='/' layout='fill'  />

</>
  )
}
