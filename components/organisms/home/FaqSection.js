import FaqCard from '@/components/atoms/FaqCard';
import Text from '@/components/atoms/Text';
import Container from '@/components/molecules/Container';
import React from 'react';
import { FiPlus } from 'react-icons/fi';

const FaqSection = () => {
  const faqs = [0, 1, 2, 3, 4, 5];
  return (
    <div className="w-full">
      <Container>
        <section
          id="faq"
          className="w-full flex flex-col items-center justify-center py-12"
        >
          <Text size={'title'} additionals={'text-xl md:text-3xl lg:text-4xl'}>
            Frequently Asked Questions?
          </Text>
          <ul className="w-11/12 text-xs md:text-md md:w-8/12 flex flex-col space-y-4 my-10">
            {faqs.map((item, index) => (
              <FaqCard
                key={index}
                question={
                  'Bagaimana caranya kita mendaftar pada event lomba ini?'
                }
                answer={
                  'untuk melakukan pendaftaran kalian cukup klik saja pada tombol sign up diatas setelah itu kalian bisa langsung registrasi dengan mengisi data diri sesuai yang di instruksikan'
                }
              />
            ))}
          </ul>
          <Text
            size={'title'}
            additionals={'text-xl md:text-3xl lg:text-4xl font-black'}
          >
            Still have a questions?
          </Text>
          <div className="w-11/12 md:w-8/12 text-center mt-2">
            <Text additionals={'text-justify md:text-center'}>
              Jika pertanyaan kamu belum terjawab pada FAQ di atas kamu bisa
              segera menghubungi kami melalui contact dibawah. kami akan segera
              menjawab anda.
            </Text>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default FaqSection;
