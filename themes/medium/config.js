const CONFIG = {

  // Gaya
  RIGHT_PANEL_DARK: process.env.NEXT_PUBLIC_MEDIUM_RIGHT_DARK || false, // Mode gelap panel kanan

  POST_LIST_COVER: true, // Daftar artikel menampilkan sampul gambar
  POST_LIST_PREVIEW: true, // Daftar menampilkan pratinjau artikel
  POST_LIST_CATEGORY: true, // Daftar menampilkan kategori artikel
  POST_LIST_TAG: true, // Daftar menampilkan tag artikel

  POST_DETAIL_CATEGORY: true, // Artikel menampilkan kategori
  POST_DETAIL_TAG: true, // Artikel menampilkan tag

  // Menu
  MENU_CATEGORY: true, // Tampilkan kategori
  MENU_TAG: true, // Tampilkan tag
  MENU_ARCHIVE: true, // Tampilkan arsip
  MENU_SEARCH: true, // Tampilkan pencarian

  // Widget
  WIDGET_REVOLVER_MAPS: process.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS || 'false', // Widget peta revolusi
  WIDGET_TO_TOP: true // Kembali ke atas
}
export default CONFIG

