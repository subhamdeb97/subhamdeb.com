import Image from 'next/image'
import { Inter } from 'next/font/google'
import BannerIndex from 'components/bannerIndex';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-vw'>
      <BannerIndex />
    </div>
  )
}
