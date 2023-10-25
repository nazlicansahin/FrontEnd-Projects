import Image from 'next/image'
import foti from '../public/image.jpg'
//layout='fill' objectFit='cover'
export default function Home() {
  return (
<>
<Image src={foti} alt='/' width={500} height= {500}  />

</>
  )
}
