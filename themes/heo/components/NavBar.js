import { useCallback, useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import throttle from 'lodash.throttle'
import RandomPostButton from './RandomPostButton'
import SearchButton from './SearchButton'
import DarkModeButton from './DarkModeButton'
import SlideOver from './SlideOver'
import ReadingProgress from './ReadingProgress'
import { MenuListTop } from './MenuListTop'
import { isBrowser } from '@/lib/utils'
import BLOG from '@/blog.config'
/**
 * navigasi atas
 * @param {*} param0
 * @returns
 */
const NavBar = props => {
  const [fixedNav, setFixedNav] = useState(false)
  const [textWhite, setTextWhite] = useState(false)
  const [navBgWhite, setBgWhite] = useState(false)

  const [activeIndex, setActiveIndex] = useState(0)

  const slideOverRef = useRef()

  const toggleMenuOpen = () => {
    slideOverRef?.current?.toggleSlideOvers()
  }

  /**
       * Ganti gaya bilah navigasi sesuai dengan bilah gulir
       */
  const scrollTrigger = useCallback(throttle(() => {
    const scrollS = window.scrollY
    // 导航栏设置 白色背景
    if (scrollS <= 0) {
      setFixedNav(false)
      setBgWhite(false)

      // Perlakuan khusus untuk halaman detail artikel
      if (document.querySelector('#post-bg')) {
        setFixedNav(true)
        setTextWhite(true)
        setBgWhite(false)
      }
    } else {
      // Gaya navigasi setelah menggulir ke bawah
      setFixedNav(true)
      setTextWhite(false)
      setBgWhite(true)
    }
  }, 200))

  // Dengarkan untuk menggulir
  useEffect(() => {
    scrollTrigger()
    window.addEventListener('scroll', scrollTrigger)
    return () => {
      window.removeEventListener('scroll', scrollTrigger)
    }
  }, [])

  // Dengarkan teks yang ditampilkan di bilah navigasi
  useEffect(() => {
    let prevScrollY = 0
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY

          if (currentScrollY > prevScrollY) {
            setActiveIndex(1) // Setel activeIndex ke 1 saat menggulir ke bawah
          } else {
            setActiveIndex(0) // Setel activeIndex ke 0 saat menggulir ke atas
          }

          prevScrollY = currentScrollY
          ticking = false
        })

        ticking = true
      }
    }

    if (isBrowser) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (isBrowser) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (<>
        <style jsx>{`
            @keyframes fade-in-down {
                0% {
                opacity: 0.5;
                transform: translateY(-30%);
                }
                100% {
                opacity: 1;
                transform: translateY(0);
                }
            }
            
            @keyframes fade-in-up {
                0% {
                opacity: 0.5;
                transform: translateY(30%);
                }
                100% {
                opacity: 1;
                transform: translateY(0);
                }
            }
            
            .fade-in-down {
                animation: fade-in-down 0.3s ease-in-out;
            }
            
            .fade-in-up {
                animation: fade-in-up 0.3s ease-in-out;
            }
        `}</style>

        {/* Bilah menu navigasi atas */}
        <nav id='nav' className={`${fixedNav ? 'fixed' : 'relative bg-none'} ${textWhite ? 'text-white ' : 'text-black dark:text-white'}  ${navBgWhite ? 'bg-white dark:bg-[#18171d]' : 'bg-none'} z-20 h-16 top-0 w-full`}>
            <div className='flex h-full mx-auto justify-between items-center max-w-[86rem] px-8'>
                {/* logo di sebelah kiri */}
                <div className='flex'>
                    <Logo {...props} />
                </div>

                {/* menu tengah */}
                <div id='nav-bar-swipe' className={`hidden lg:flex flex-grow flex-col items-center justify-center h-full relative w-full ${activeIndex === 0 ? 'fade-in-down' : 'fade-in-up'}`}>
                    {activeIndex === 0 && <MenuListTop {...props} />}
                    {activeIndex === 1 && <h1 className='font-bold text-center text-light-400 dark:text-gray-400'>{BLOG.AUTHOR || BLOG.TITLE} {BLOG.BIO && <>|</>} {BLOG.BIO}</h1>}
                </div>

                {/* Sisi kanan diperbaiki */}
                <div className='flex flex-shrink-0 justify-center items-center'>
                    <RandomPostButton {...props} />
                    <SearchButton {...props}/>
                    {!JSON.parse(BLOG.THEME_SWITCH) && <div className='hidden md:block'><DarkModeButton {...props} /></div>}
                    <ReadingProgress />

                    {/* Tombol menu seluler */}
                    <div onClick={toggleMenuOpen} className='flex lg:hidden w-8 justify-center items-center h-8 cursor-pointer'>
                        <i className='fas fa-bars' />
                    </div>
                </div>

                {/* Laci sisi kanan */}
                <SlideOver cRef={slideOverRef} {...props} />
            </div>
        </nav>
    </>)
}

export default NavBar
