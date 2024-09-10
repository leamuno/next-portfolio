import Image from 'next/image'
import authorImage from '@/public/images/authors/profile-pic.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Leo.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a backend developer based in Tokyo, Japan. I&#39;m
          passionate about learning new technologies and mentoring others in my
          community.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Leandro Munoz'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
