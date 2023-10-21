import { useState } from 'react'
import Catalog from './Catalog'

/**
 * Tombol direktori mengambang seluler
 */
export default function FloatTocButton(props) {
  const [tocVisible, changeTocVisible] = useState(false)

  const { post } = props

  const toggleToc = () => {
    changeTocVisible(!tocVisible)
  }

  //   Sembunyikan tombol ini jika tidak ada direktori
  if (!post || !post.toc || post.toc.length < 1) {
    return <></>
  }

  return (<div className='fixed lg:hidden right-4 bottom-24'>
        {/* tombol */}
        <div onClick={toggleToc} className={'w-11 h-11 select-none hover:scale-110 transform duration-200 text-black dark:text-gray-200 rounded-full bg-white drop-shadow-lg flex justify-center items-center dark:bg-hexo-black-gray py-2 px-2'}>
            <button id="toc-button" className={'fa-list-ol cursor-pointer fas'} />
        </div>

        {/* KatalogModal */}
        <div className='fixed top-0 right-0 z-40 '>
            {/* menu sampingan */}
            <div
                className={`${tocVisible ? 'shadow-card ' : ' -mr-72  opacity-0'} dark:bg-black w-60 duration-200 fixed right-4 bottom-12 rounded-xl py-2 bg-white dark:bg-gray-900'`}>
                {post && <>
                    <div className='dark:text-gray-400 text-gray-600'>
                        <Catalog toc={post.toc} />
                    </div>
                </>
                }
            </div>
        </div>
        {/* topeng latar belakang */}
        <div id='right-drawer-background' className={(tocVisible ? 'block' : 'hidden') + ' fixed top-0 left-0 z-30 w-full h-full'}
            onClick={toggleToc} />
    </div>)
}
