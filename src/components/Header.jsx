const menuData = [
  {
    title: "Features",
    link: "#feature",
  },
  {
    title: "FAQ",
    link: "#faq",
  },
  {
    title: "Resources",
    link: "/resources",
  },
];

const Header = () => {
  return (
    <header className='absolute inset-x-0 top-0 z-10 w-full container mx-auto'>
      <div className='px-4 mx-auto sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 lg:h-20'>
          <div className='flex-shrink-0'>
            <a href='#' title className='flex'>
              <img className='w-auto h-8' src='./src/assets/logo.png' alt='' />
            </a>
          </div>
          {menuData && (
            <div className='hidden lg:flex lg:items-center lg:justify-center lg:ml-10 lg:mr-auto lg:space-x-10'>
              {menuData.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  title
                  className='text-base text-black transition-all duration-200 hover:text-opacity-80'
                >
                  {item.title}
                </a>
              ))}
            </div>
          )}
          <a
            href='https://play.google.com/store/apps/details?id=com.hubtik.video&pcampaignid=web_share'
            title
            className='lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold bg-gray-50 text-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white'
            role='button'
          >
            Try it for free
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
