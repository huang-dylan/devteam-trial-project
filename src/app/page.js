import Image from 'next/image'
import Header from '@/components/Header'
import CountryList from '@/components/backend/CountryList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#f5f8f1]">
      <Header />
      <CountryList />
    </main>
  )
}
