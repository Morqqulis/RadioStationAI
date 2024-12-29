import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className={`relative h-full`}>
      <Image
        className={`absolute inset-0 -z-10`}
        src={'/home/bg.jpg'}
        alt={'LCP Image'}
        priority
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="container flex h-full flex-col items-center justify-center">
        <div className={`mx-auto grid max-w-xl place-items-center gap-5`}>
          <Image className={`h-auto max-w-[15rem]`} src={'/home/ai-glove.png'} alt={'logo'} width={580} height={408} />
          <h1 className={`text-center text-2xl font-semibold text-blue-200 xl:text-4xl`}>
            RadioStation{' '}
            <span className={`bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent`}>AI</span>
          </h1>
          <p className={`mx-16 text-center text-base leading-normal text-gray-200 lg:mx-20 xl:mx-0`}>
            A specialized Operating System tailored for AI-driven radio station, optimizing performance and workflow for
            seamless audio creation and broadcasting
          </p>
          <Link
            href={`/`}
            className="group flex max-w-[200px] items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-base font-bold text-white hover:bg-blue-500 md:px-6 md:py-3 lg:uppercase"
          >
            Download Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
