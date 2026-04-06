  // const [isSticky, setIsSticky] = useState(false);
  // const [showBackToTop, setShowBackToTop] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsSticky(window.scrollY > 300);
  //     setShowBackToTop(window.scrollY > 300);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };


  //       <nav className={`fixed w-full z-50 transition-all duration-500 bg-white shadow-md border-t-4 border-primary px-4 lg:px-12 flex items-center justify-between ${isSticky ? 'top-0' : '-top-24'}`}>
  //         <div className="bg-primary h-16 lg:h-20 flex items-center px-6">
  //           <h2 className="text-white text-2xl font-bold">Logistica</h2>
  //         </div>
          
  //         <div className="hidden lg:flex items-center space-x-8 uppercase text-sm font-semibold">
  //           <a href="#" className="text-primary border-t-4 border-primary pt-1">Home</a>
  //           <a href="#about" className="hover:text-primary transition-colors">About</a>
  //           <a href="#service" className="hover:text-primary transition-colors">Services</a>
  //           <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
  //           <div className="flex items-center text-dark lowercase normal-case text-lg font-bold border-l pl-8">
  //             <FaHeadphones className="text-primary mr-3" />
  //             +012 345 6789
  //           </div>
  //         </div>
  //       </nav>