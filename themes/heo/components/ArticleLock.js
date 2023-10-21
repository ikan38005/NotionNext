import { useGlobal } from '@/lib/global'
import { useEffect, useRef } from 'react'

/**
 * Komponen verifikasi artikel terenkripsi
 * @param {password, validPassword} props
 * @param password kata sandi yang benar
 * @param validPassword(bool)Fungsi panggilan balik, verifikasi bahwa parameter input panggilan balik yang benar adalah true
 * @returns
 */
export const ArticleLock = props => {
  const { validPassword } = props
  const { locale } = useGlobal()
  const submitPassword = () => {
    const p = document.getElementById('password')
    if (!validPassword(p?.value)) {
      const tips = document.getElementById('tips')
      if (tips) {
        tips.innerHTML = ''
        tips.innerHTML = `<div class='text-red-500 animate__shakeX animate__animated'>${locale.COMMON.PASSWORD_ERROR}</div>`
      }
    }
  }
  const passwordInputRef = useRef(null)
  useEffect(() => {
    // Pilih kotak masukan kata sandi dan fokuskan
    passwordInputRef.current.focus()
  }, [])

  return <div id='container' className='w-full flex justify-center items-center h-96 '>
    <div className='text-center space-y-3'>
      <div className='font-bold dark:text-gray-300 text-black'>{locale.COMMON.ARTICLE_LOCK_TIPS}</div>
      <div className='flex mx-4'>
        <input id="password" type='password'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                submitPassword()
              }
            }}
            ref={passwordInputRef} // Ikat ref ke variabel passwordInputRef
            className='outline-none w-full text-sm pl-5 rounded-l transition focus:shadow-lg  font-light leading-10 bg-gray-100 dark:bg-gray-500'>
        </input>
        <div onClick={submitPassword} className="px-3 whitespace-nowrap cursor-pointer items-center justify-center py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-r duration-300" >
          <i className={'duration-200 cursor-pointer fas fa-key'} >&nbsp;{locale.COMMON.SUBMIT}</i>
        </div>
      </div>
      <div id='tips'>
      </div>
    </div>
  </div>
}
