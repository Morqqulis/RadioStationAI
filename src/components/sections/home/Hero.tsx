import Image from 'next/image'

const Hero = () => {
	return (
		<section className={`bg-[url('/home/bg.jpg')] bg-no-repeat bg-center bg-cover h-full`}>
			<div className='container h-full flex flex-col items-center justify-center'>
				<div className={`max-w-xl mx-auto grid gap-5 place-items-center xl:pb-56 lg:pb-28 md:pb-20`}>
					<Image src={'/home/ai-glove.png'} alt={'logo'} width={240} height={160} />
					<h1 className={`xl:text-4xl lg:text-2xl text-blue-200 text-lg text-center font-semibold`}>
						RadioStation{' '}
						<span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500`}>AI</span>
					</h1>
					<p className={`text-gray-200 lg:mx-20 text-sm xl:mx-0 md:mx-40 mx-16 text-center leading-normal`}>
						A specialized Operating System tailored for AI-driven radio station, optimizing performance and workflow for
						seamless audio creation and broadcasting
					</p>
				</div>
			</div>
		</section>
	)
}

export default Hero
