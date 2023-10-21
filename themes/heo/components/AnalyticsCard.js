import CONFIG from '../config'

/**
 * Kartu Statistik Blog
 * @param {*} props
 * @returns
 */
export function AnalyticsCard(props) {
  const targetDate = new Date(CONFIG.SITE_CREATE_TIME)
  const today = new Date()
  const diffTime = today.getTime() - targetDate.getTime() // Dapatkan perbedaan dalam milidetik antara dua tanggal
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) // Ubah perbedaan milidetik menjadi perbedaan hari

  const { postCount } = props
  return <>
        <div className='text-md flex flex-col space-y-1 justify-center px-3'>
            <div className='inline'>
                <div className='flex justify-between'>
                    <div>Number of articles:</div>
                    <div>{postCount}</div>
                </div>
            </div>
            <div className='inline'>
                <div className='flex justify-between'>
                    <div>Website age:</div>
                    <div>{diffDays} Days</div>
                </div>
            </div>
            <div className='hidden busuanzi_container_page_pv'>
                <div className='flex justify-between'>
                    <div>Views:</div>
                    <div className='busuanzi_value_page_pv' />
                </div>
            </div>
            <div className='hidden busuanzi_container_site_uv'>
                <div className='flex justify-between'>
                    <div>Visitors:</div>
                    <div className='busuanzi_value_site_uv' />
                </div>
            </div>
        </div>
        </>
}
