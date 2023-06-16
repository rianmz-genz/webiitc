import FaqCard from '@/components/atoms/FaqCard'
import Text from '@/components/atoms/Text'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

const FaqSection = () => {
    const faqs = [0,1,2,3,4,5]
  return (
    <section id='faq' className='w-full flex flex-col items-center justify-center py-12'>
        <Text size={'title'} >Frequently Asked Questions?</Text>
        <ul className='w-8/12 flex flex-col space-y-4 my-10'>
            {
                faqs.map((item,index) => (
                    <FaqCard 
                        key={index}
                        question={'Bagaimana caranya kita mendaftar pada event lomba ini?'}
                        answer={'untuk melakukan pendaftaran kalian cukup klik saja pada tombol sign up diatas setelah itu kalian bisa langsung registrasi dengan mengisi data diri sesuai yang di instruksikan'}
                    />
                ))
            }
        </ul>
        <Text size={'title'} >Still have a questions?</Text>
        <div className='w-8/12 text-center mt-2'>
            <Text >Jika pertanyaan kamu belum terjawab pada FAQ di atas kamu bisa segera menghubungi kami melalui contact dibawah. kami akan segera menjawab anda.</Text>
        </div>
    </section>
  )
}

export default FaqSection
