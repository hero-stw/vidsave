const Hero = () => {
  return (
    <section className='overflow-hidden'>
      <div className='flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]'>
        <div className='flex items-center justify-center w-full lg:order-2 lg:w-7/12'>
          <div className='h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14'>
            <div className='flex flex-col justify-between flex-1 h-full'>
              <div>
                <h1 className='text-4xl font-bold text-gray-200 sm:text-6xl xl:text-7xl'>
                  Your Ultimate Video Downloader for Social Media Treasures
                </h1>
                <p className='mt-6 text-base font-thin text-gray-200 sm:text-xl'>
                  Download videos from your favorite social media platforms, and
                  the best part? No more watermarks! Dive into a world of
                  limitless video sharing and revisiting without any logos
                  holding you back.
                </p>
                <a
                  href='https://play.google.com/store/apps/details?id=com.hubtik.video&pcampaignid=web_share'
                  title
                  className='block transition-all duration-200 hover:opacity-80 focus:opacity-80 mt-14'
                  role='button'
                >
                  <img
                    className='w-auto rounded h-14 sm:h-16'
                    src='/google-play.png'
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-full overflow-hidden lg:w-5/12 lg:order-1'>
          <div className='lg:absolute lg:bottom-0 lg:left-0'>
            <img
              className='w-full'
              src='https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/phone-mockup.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
