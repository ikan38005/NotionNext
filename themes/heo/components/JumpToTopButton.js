import { useGlobal } from '@/lib/global'
import React from 'react'
import CONFIG from '../config'

/**
 * Lompat ke atas halaman
 * Kontrol ini akan muncul ketika layar meluncur ke bawah 500 piksel
 * @param targetRef Tag html target yang terkait dengan ketinggian
 * @param showPercent apakah akan menampilkan persentase
 * @returns {JSX.Element}
 * @constructor
 */
const JumpToTopButton = ({ showPercent = true, percent }) => {
  const { locale } = useGlobal()

  if (!CONFIG.WIDGET_TO_TOP) {
    return <></>
  }
  return (<div className='space-x-1 items-center justify-center transform hover:scale-105 duration-200 w-7 h-auto pb-1 text-center' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
        <div title={locale.POST.TOP} ><i className='fas fa-arrow-up text-xs' /></div>
        {showPercent && (<div className='text-xs hidden lg:block'>{percent}</div>)}
    </div>)
}

export default JumpToTopButton
