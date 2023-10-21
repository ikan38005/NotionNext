const CONFIG = {
  HOME_BANNER_ENABLE: false,

  SITE_CREATE_TIME: '2021-09-21', // Tanggal pembuatan situs, digunakan untuk menghitung hari berapa situs berjalan

  // Notifikasi gulir di bagian atas halaman utama, kosongkan jika tidak diperlukan []
  NOTICE_BAR: [
    { title: 'Selamat datang di blog saya', url: 'https://zadisia.com' },
    { title: 'Kami bersama Palestina', url: 'https://zadisia.com' }
  ],

  // Area Hero (Gambar besar di halaman depan)
  HERO_TITLE_1: 'Berbagi Pemrograman',
  HERO_TITLE_2: 'dan Pengetahuan',
  HERO_TITLE_3: 'TANGLY1024.COM',
  HERO_TITLE_4: 'Versi Terbaru',
  HERO_TITLE_5: 'Tema yang Mudah Dikustomisasi NotionNext 4.0',
  HERO_TITLE_LINK: 'https://tangly1024.com',

  // Tampilkan tiga kategori unggulan di area Hero
  HERO_CATEGORY_1: { title: 'Artikel Pilihan', url: '/tag/Artikel-Pilihan' },
  HERO_CATEGORY_2: { title: 'Artikel Populer', url: '/tag/Artikel-Populer' },
  HERO_CATEGORY_3: { title: 'Panduan Praktis', url: '/tag/Panduan-Praktis' },

  // Label artikel yang direkomendasikan di sebelah kanan area Hero, contoh: [Rekomendasi], maksimal enam artikel; kosongkan '' untuk merekomendasikan artikel yang telah diperbarui terbaru
  HERO_RECOMMEND_POST_TAG: 'Rekomendasi',
  HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // Urutkan artikel yang direkomendasikan berdasarkan waktu pembaruan, jika 'true' akan diurutkan secara terbalik

  // Salam selamat datang di kartu profil sisi kanan, klik untuk menggantinya secara otomatis
  INFOCARD_GREETINGS: [
    'Ahlan wa Sahlan!',
    '🔍 Berbagi dan Membantu',
    '🤝 Fokus pada Interaksi dan Desain',
    '🏃 Pekerja Keras',
    '🏠 Ahli Peralatan Pintar Rumah',
    '🤖 Penggemar Teknologi Digital',
    '🧱 Tim Penggerak Kelompok Kecil'
  ],
  INFO_CARD_URL: 'https://github.com/tangly1024/NotionNext', // Tautan di bagian bawah kartu profil

  // Ikon kemampuan pengguna
  GROUP_ICONS: [
    {
      title_1: 'After Effect',
      img_1: '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp',
      color_1: '#989bf8',
      title_2: 'Sketch',
      img_2: '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'Final Cut Pro',
      img_1: '/images/heo/20233e777652412247dd57fd9b48cf997c01070702.webp',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp',
      color_1: '#eb6840',
      title_2: 'Principle',
      img_2: '/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp',
      color_2: '#8f55ba'
    },
    {
      title_1: 'Illustrator',
      img_1: '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp',
      color_2: '#1f1f1f'
    }
  ],

  SOCIAL_CARD: true, // Tampilkan tombol untuk bergabung dengan komunitas di sebelah kanan
  SOCIAL_CARD_TITLE_1: 'Kanal Komunikasi',
  SOCIAL_CARD_TITLE_2: 'Bergabung dalam diskusi dan berbagi di komunitas kami',
  SOCIAL_CARD_TITLE_3: 'Klik untuk bergabung dalam komunitas',
  SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // ***** Konfigurasi berikut tidak berlaku, hanya disediakan untuk pengembangan ****
  // Konfigurasi Menu
  MENU_INDEX: true, // Tampilkan Halaman Utama
  MENU_CATEGORY: true, // Tampilkan Kategori
  MENU_TAG: true, // Tampilkan Tag
  MENU_ARCHIVE: true, // Tampilkan Arsip
  MENU_SEARCH: true, // Tampilkan Pencarian

  POST_LIST_COVER: true, // Tampilkan Sampul Artikel dalam Daftar
  POST_LIST_COVER_HOVER_ENLARGE: false, // Perbesar saat mengarahkan mouse

  POST_LIST_COVER_DEFAULT: true, // Saat sampul kosong, gunakan latar belakang situs sebagai sampul default
  POST_LIST_SUMMARY: true, // Ringkasan Artikel
  POST_LIST_PREVIEW: false, // Baca Pratinjau Artikel
  POST_LIST_IMG_CROSSOVER: true, // Gambar dalam daftar blog berpindah dari kiri ke kanan

  ARTICLE_ADJACENT: true, // Tampilkan rekomendasi artikel sebelumnya dan berikutnya
  ARTICLE_COPYRIGHT: true, // Tampilkan pernyataan hak cipta artikel
  ARTICLE_RECOMMEND: true, // Artikel Terkait

  WIDGET_LATEST_POSTS: true, // Tampilkan Kartu Artikel Terbaru
  WIDGET_ANALYTICS: false, // Tampilkan Kartu Statistik
  WIDGET_TO_TOP: true, // Kembali ke Atas
  WIDGET_TO_COMMENT: true, // Loncat ke Area Komentar
  WIDGET_DARK_MODE: true, // Mode Gelap
  WIDGET_TOC: true // Daftar Isi Mengambang untuk Perangkat Bergerak
}
export default CONFIG
