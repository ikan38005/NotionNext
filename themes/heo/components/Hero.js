// import Image from 'next/image'

import BLOG from '@/blog.config'
import { ArrowSmallRight, PlusSmall } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useImperativeHandle, useRef, useState } from 'react'
import CONFIG from '../config'

/**
 * area Hero teratas
 * tata letak kiri dan kanan，
 * Kiri: grup banner
 * Kanan: Topeng kartu hari ini
 * @returns
 */
const Hero = props => {
  return (
    <div
      id="hero-wrapper"
      className="recent-top-post-group w-full overflow-hidden select-none px-5 mb-4"
    >
      <div
        id="hero"
        style={{ zIndex: 1 }}
        className={
          'animate__animated animate__fadeIn animate__fast recent-post-top rounded-[12px] 2xl:px-5 recent-top-post-group max-w-[86rem] overflow-x-scroll w-full mx-auto flex-row flex-nowrap flex xl:space-x-3 relative'
        }
      >
        {/* Grup banner kiri */}
        <BannerGroup {...props} />

        {/* Grup artikel teratas di sebelah kanan */}
        <TopGroup {...props} />
      </div>
    </div>
  )
}

/**
 * Grup banner di sisi kiri area hero
 * @returns
 */
function BannerGroup(props) {
  return (
    // Area pahlawan di sebelah kiri
    <div
      id="bannerGroup"
      className="flex flex-col justify-between flex-1 mr-2 max-w-[42rem]"
    >
      {/* GIF */}
      <Banner {...props} />
      {/* Kategori navigasi */}
      <GroupMenu />
    </div>
  )
}

/**
 * Animasi banner di pojok kiri atas area hero
 * @returns
 */
function Banner(props) {
  const router = useRouter()
  const { latestPosts } = props
  /**
   * Lompat ke artikel secara acak
   */
  function handleClickBanner() {
    const randomIndex = Math.floor(Math.random() * latestPosts.length)
    const randomPost = latestPosts[randomIndex]
    router.push(`${BLOG.SUB_PATH}/${randomPost?.slug}`)
  }

  return (
    <div
      id="banners"
      onClick={handleClickBanner}
      className="hidden xl:flex xl:flex-col group h-full bg-white dark:bg-[#1e1e1e] rounded-xl border dark:border-gray-700 mb-3 relative overflow-hidden"
    >
      <div id="banner-title" className="flex flex-col absolute top-10 left-10">
        <div className="text-4xl font-bold mb-3  dark:text-white">
          {CONFIG.HERO_TITLE_1}
          <br />
          {CONFIG.HERO_TITLE_2}
        </div>
        <div className="text-xs text-gray-600  dark:text-gray-200">
          {CONFIG.HERO_TITLE_3}
        </div>
      </div>

      {/* ikon gulir diagonal */}
      <TagsGroupBar />

      {/* masker */}
      <div
        id="banner-cover"
        style={{ backdropFilter: 'blur(15px)' }}
        className={
          'rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 duration-300 transition-all bg-[#4259efdd] dark:bg-[#dca846] dark:text-white cursor-pointer absolute w-full h-full top-0 flex justify-start items-center'
        }
      >
        <div className="ml-12 -translate-x-32 group-hover:translate-x-0 duration-300 transition-all ease-in">
          <div className="text-7xl text-white font-extrabold">Walk around</div>
          <div className="-ml-3 text-gray-300">
            <ArrowSmallRight className={'w-24 h-24 stroke-2'} />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Grup label gulir ikon
 * Ikon bergulir secara diagonal pada bilah spanduk di sudut kiri atas area pahlawan
 */
function TagsGroupBar() {
  const groupIcons = CONFIG.GROUP_ICONS.concat(CONFIG.GROUP_ICONS)

  return (
    <div className="tags-group-all flex -rotate-[30deg] h-full">
      <div className="tags-group-wrapper flex flex-nowrap absolute top-16">
        {groupIcons?.map((g, index) => {
          return (
            <div key={index} className="tags-group-icon-pair ml-6 select-none">
              <div
                style={{ background: g.color_1 }}
                className={
                  'tags-group-icon w-28 h-28 rounded-3xl flex items-center justify-center text-white text-lg font-bold shadow-md'
                }
              >
                <LazyImage
                  priority={true}
                  src={g.img_1}
                  title={g.title_1}
                  className="w-2/3 hidden xl:block"
                />
              </div>
              <div
                style={{ background: g.color_2 }}
                className={
                  'tags-group-icon  mt-5 w-28 h-28 rounded-3xl flex items-center justify-center text-white text-lg font-bold shadow-md'
                }
              >
                <LazyImage
                  priority={true}
                  src={g.img_2}
                  title={g.title_2}
                  className="w-2/3 hidden xl:block"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/**
 * Terdapat 3 tombol kategori yang ditunjuk di pojok kiri bawah area hero
 * @returns
 */
function GroupMenu() {
  return (
    <div className="h-[165px] select-none xl:h-20 flex flex-col justify-between xl:space-y-0 xl:flex-row w-28 lg:w-48 xl:w-full xl:flex-nowrap xl:space-x-3">
      <Link
        href={CONFIG.HERO_CATEGORY_1?.url}
        className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-400 flex h-20 justify-start items-center text-white rounded-xl xl:hover:w-1/2 xl:w-1/3 transition-all duration-500 ease-in"
      >
        <div className="font-bold lg:text-lg  pl-5 relative -mt-2">
          {CONFIG.HERO_CATEGORY_1?.title}
          <span className="absolute -bottom-0.5 left-5 w-5 h-0.5 bg-white rounded-full"></span>
        </div>
        <div className="hidden lg:block absolute right-6  duration-700 ease-in-out transition-all scale-[2] translate-y-6 rotate-12 opacity-20 group-hover:opacity-80 group-hover:scale-100 group-hover:translate-y-0 group-hover:rotate-0">
          <i className="fa-solid fa-star text-4xl"></i>
        </div>
      </Link>
      <Link
        href={CONFIG.HERO_CATEGORY_2?.url}
        className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-yellow-500 flex h-20 justify-start items-center text-white rounded-xl xl:hover:w-1/2 xl:w-1/3 transition-all duration-500 ease-in"
      >
        <div className="font-bold lg:text-lg pl-5 relative -mt-2">
          {CONFIG.HERO_CATEGORY_2?.title}
          <span className="absolute -bottom-0.5 left-5 w-5 h-0.5 bg-white rounded-full"></span>
        </div>
        <div className="hidden lg:block absolute right-6  duration-700 ease-in-out transition-all scale-[2] translate-y-6 rotate-12 opacity-20 group-hover:opacity-80 group-hover:scale-100 group-hover:translate-y-0 group-hover:rotate-0">
          <i className="fa-solid fa-fire-flame-curved text-4xl"></i>
        </div>
      </Link>
      {/* Tab ketiga tidak ditampilkan di layar kecil */}
      <Link
        href={CONFIG.HERO_CATEGORY_3?.url}
        className="group relative overflow-hidden bg-gradient-to-r from-teal-300 to-cyan-300 hidden h-20 xl:flex justify-start items-center text-white rounded-xl xl:hover:w-1/2 xl:w-1/3 transition-all duration-500 ease-in"
      >
        <div className="font-bold text-lg pl-5 relative -mt-2">
          {CONFIG.HERO_CATEGORY_3?.title}
          <span className="absolute -bottom-0.5 left-5 w-5 h-0.5 bg-white rounded-full"></span>
        </div>
        <div className="absolute right-6 duration-700 ease-in-out transition-all scale-[2] translate-y-6 rotate-12 opacity-20 group-hover:opacity-80 group-hover:scale-100 group-hover:translate-y-0 group-hover:rotate-0">
          <i className="fa-solid fa-book-bookmark text-4xl "></i>
        </div>
      </Link>
    </div>
  )
}

/**
 * Area artikel yang disematkan
 */
function TopGroup(props) {
  const { latestPosts, allNavPages, siteInfo } = props
  const todayCardRef = useRef()
  function handleMouseLeave() {
    todayCardRef.current.coverUp()
  }

  // Dapatkan artikel yang paling direkomendasikan
  const topPosts = getTopPosts({ latestPosts, allNavPages })

  return (
    <div
      id="hero-right-wrapper"
      onMouseLeave={handleMouseLeave}
      className="flex-1 relative w-full"
    >
      {/* Artikel yang direkomendasikan disematkan */}
      <div
        id="top-group"
        className="w-full flex space-x-3 xl:space-x-0 xl:grid xl:grid-cols-3 xl:gap-3 xl:h-[342px]"
      >
        {topPosts?.map((p, index) => {
          return (
            <Link href={`${BLOG.SUB_PATH}/${p?.slug}`} key={index}>
              <div className="cursor-pointer h-[164px] group relative flex flex-col w-52 xl:w-full overflow-hidden shadow bg-white dark:bg-black dark:text-white rounded-xl">
                <LazyImage
                  priority={index === 0}
                  className="h-24 object-cover"
                  alt={p?.title}
                  src={p?.pageCoverThumbnail || siteInfo?.pageCover}
                />
                <div className="group-hover:text-indigo-600 dark:group-hover:text-yellow-600 line-clamp-2 overflow-hidden m-2 font-semibold">
                  {p?.title}
                </div>
                {/* hover Kata mengambang 'disarankan' */}
                <div className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-200 transition-all absolute -top-2 -left-2 bg-indigo-600 dark:bg-yellow-600  text-white rounded-xl overflow-hidden pr-2 pb-2 pl-4 pt-4 text-xs">
                  Recommend
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      <TodayCard cRef={todayCardRef} />
    </div>
  )
}

/**
 * Dapatkan artikel yang disematkan yang direkomendasikan
 */
function getTopPosts({ latestPosts, allNavPages }) {
  // Tampilkan pembaruan terkini secara default
  if (
    !CONFIG.HERO_RECOMMEND_POST_TAG ||
    CONFIG.HERO_RECOMMEND_POST_TAG === ''
  ) {
    return latestPosts
  }

  // Tampilkan artikel dengan tag 'direkomendasikan'
  let sortPosts = []

  // Sortir dengan
  if (JSON.parse(CONFIG.HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME)) {
    sortPosts = Object.create(allNavPages).sort((a, b) => {
      const dateA = new Date(a?.lastEditedDate)
      const dateB = new Date(b?.lastEditedDate)
      return dateB - dateA
    })
  } else {
    sortPosts = Object.create(allNavPages)
  }

  const topPosts = []
  for (const post of sortPosts) {
    if (topPosts.length === 6) {
      break
    }
    // Temukan tag
    if (post?.tags?.indexOf(CONFIG.HERO_RECOMMEND_POST_TAG) >= 0) {
      topPosts.push(post)
    }
  }
  return topPosts
}

/**
 * Di sisi kanan area pahlawan, kartu hari ini
 * @returns
 */
function TodayCard({ cRef }) {
  const router = useRouter()
  // Apakah kartu menutupi lapisan bawah
  const [isCoverUp, setIsCoverUp] = useState(true)

  /**
   * Metode ini dapat dipanggil secara eksternal
   */
  useImperativeHandle(cRef, () => {
    return {
      coverUp: () => {
        setIsCoverUp(true)
      }
    }
  })

  /**
   * klik untuk lebih lanjut
   * @param {*} e
   */
  function handleClickMore(e) {
    e.stopPropagation()
    setIsCoverUp(false)
  }

  /**
   * Klik pada kartu untuk melompat ke tautan
   * @param {*} e
   */
  function handleCardClick(e) {
    router.push(CONFIG.HERO_TITLE_LINK)
  }

  return (
    <div
      id="today-card"
      className={`${
        isCoverUp ? ' ' : 'pointer-events-none'
      } overflow-hidden absolute hidden xl:flex flex-1 flex-col h-full top-0 w-full`}
    >
      <div
        id="card-body"
        onClick={handleCardClick}
        className={`${
          isCoverUp
            ? 'opacity-100 cursor-pointer'
            : 'opacity-0 transform scale-110 pointer-events-none'
        } shadow transition-all duration-200 today-card h-full bg-[#0E57D5] rounded-xl relative overflow-hidden flex items-end`}
      >
        <div
          id="today-card-info"
          className="z-10 flex justify-between w-full relative text-white p-10 items-end"
        >
          <div className="flex flex-col">
            <div className="text-xs font-light">{CONFIG.HERO_TITLE_4}</div>
            <div className="text-3xl font-bold">{CONFIG.HERO_TITLE_5}</div>
          </div>
          <div
            onClick={handleClickMore}
            className={`'${
              isCoverUp ? '' : 'hidden pointer-events-none '
            } flex items-center px-3 h-10 justify-center bg-[#425aef] hover:bg-[#4259efcb] transition-colors duration-100 rounded-3xl`}
          >
            <PlusSmall
              className={'w-6 h-6 mr-2 bg-white rounded-full stroke-indigo-400'}
            />
            <div id="more" className="select-none">
              More recommendations
            </div>
          </div>
        </div>
        <div
          id="today-card-cover"
          className={`${
            isCoverUp ? '' : ' pointer-events-none'
          } cursor-pointer today-card-cover absolute w-full h-full top-0`}
          style={{
            background:
              "url('https://bu.dusays.com/2023/03/12/640dcd3a1b146.png') no-repeat center /cover"
          }}
        ></div>
      </div>
    </div>
  )
}

export default Hero
