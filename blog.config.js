// Catatan: process.env.XX adalah variabel lingkungan Vercel, cara konfigurasi bisa dilihat di: https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a
const BLOG = {
  // Penting! page_id！！！Duplikasi Template dari https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
        process.env.NOTION_PAGE_ID || 'ecb8c5de1cf240d0b541cb3b54671869',
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // Jalur semu, saat diaktifkan, semua URL artikel akan berakhir dengan .html.
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // Selang waktu pembaruan konten (detik); dengan kata lain, setiap halaman memiliki periode statis murni selama 5 detik, selama periode ini tidak ada pengambilan data notion, meningkatkan efisiensi sumber daya Vercel dan percepatan akses, tetapi juga akan menyebabkan penundaan pembaruan artikel.
  THEME: process.env.NEXT_PUBLIC_THEME || 'hexo', // Tema saat ini, Anda dapat menemukan semua tema yang didukung di folder themes; Nama tema adalah nama folder, misalnya example, fukasawa, gitbook, heo, hexo, landing, matery, medium, next, nobelium, plog, simple
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || true, // Apakah menampilkan tombol beralih tema
  LANG: process.env.NEXT_PUBLIC_LANG || 'en-US', // misalnya 'zh-CN', 'en-US', lihat /lib/lang.js untuk informasi lebih lanjut.
  SINCE: 2023, // misalnya, jika dibiarkan kosong, tahun saat ini akan digunakan.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'auto', // ['light', 'dark', 'auto'], // mode siang, mode malam, mode auto berdasarkan waktu dan tema
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // Waktu mulai mode malam, jika salah, mode malam yang otomatis bergantung pada waktu akan dinonaktifkan.

  // Mulai dari versi 3.14.1, salam pembuka dapat dikonfigurasi di sini, dipisahkan oleh koma dalam bahasa Inggris, sehingga Anda dapat mendukung beberapa salam pembuka yang berbeda.
  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || "Welcome, Students, Teachers, Readers, Reseachers, Good visitors, let's share with each other 🎉",

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || false, // Mendukung tipe Menu, mulai dari versi 3.12.0, semua tema akan secara bertahap mendukung konfigurasi menu tingkat kedua yang fleksibel, menggantikan jenis Halaman sebelumnya, konfigurasi ini adalah fitur eksperimental, secara default dinonaktifkan.

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Zadisia', // Nama panggilan Anda, misalnya tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || 'A Student', // Biografi penulis
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://zadisia.com', // Alamat situs web
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, blog', // Kata kunci situs web, dipisahkan oleh koma

  // Tautan sosial, biarkan kosong jika tidak perlu, misalnya CONTACT_WEIBO:''
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'king@zadisia.com', // Alamat email, misalnya mail@tangly1024.com
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // Halaman pribadi Weibo Anda
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || '', // Halaman pribadi Twitter Anda
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || 'https://github.com/', // Halaman pribadi GitHub Anda, misalnya https://github.com/tangly1024
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || 'https://t.me/', // Alamat Telegram Anda, misalnya https://t.me/tangly_1024
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // Halaman LinkedIn Anda
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // Alamat Instagram Anda
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || '', // Halaman Bilibili Anda
  CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || '', // Halaman YouTube Anda

  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', // Domain Notion, Anda dapat memilih untuk menggunakan domain Anda sendiri untuk proxy terbalik. Jika Anda tidak tahu apa itu proxy terbalik, jangan ubah pengaturan ini.

  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // Konfigurasi favicon blog, secara default menggunakan /public/favicon.ico, mendukung gambar online seperti https://img.imesong.com/favicon.png

  // MULAI ******* Font Situs *******

  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans', // ['font-serif', 'font-sans'], dua pilihan, yaitu berhuruf dan tanpa huruf: lihat https://www.jianshu.com/p/55e410bd2115
  // CSS font, misalnya https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
  FONT_URL: [
    //'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css',
    //'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    //'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    //'https://fonts.googleapis.com/css2?family:Noto+Serif+SC:wght@300&display=swap',
    //'https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,regular,italic,600,600italic,700,700italic,800,800italic|Roboto+Slab:100,300,regular,700',
    'https://fonts.googleapis.com/css?family=Rubik:400,500,700,900&cache=clear'
  ],
  // Font tanpa huruf, misalnya '"LXGW WenKai"'

  FONT_SANS: [
    'AmazonEmber',
    //"ui-sans-serif",
    //'"Source Sans Pro"',
    //'"Open Sans"',
    //'"PingFang SC"',
    //'-apple-system',
    //'BlinkMacSystemFont',
    //'"Hiragino Sans GB"',
    //'"Microsoft YaHei"',
    //'"Segoe UI Emoji"',
    //'"Segoe UI Symbol"',
    //'"Segoe UI"',
    //'"Noto Sans SC"',
    //'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    //'"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  // Font Serif'"LXGW WenKai"'
  FONT_SERIF: [
    '"Open Sans"',
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME: process.env.NEXT_PUBLIC_FONT_AWESOME_PATH || 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', // Alamat font ikon Font Awesome; pilihan: /css/all.min.css, https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

  // AKHIR ******* Font Situs *******

  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // Apakah mengizinkan penyalinan konten halaman, secara default diizinkan. Jika diatur sebagai false, maka penyalinan konten akan dilarang sepenuhnya.

  CUSTOM_RIGHT_CLICK_CONTEXT_MENU: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || false, // Menu konteks klik kanan kustom, menggantikan menu sistem.

  // Skrip eksternal dan gaya eksternal kustom
  CUSTOM_EXTERNAL_JS: [''], // Misalnya, ['http://xx.com/script.js', 'http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // Misalnya, ['http://xx.com/style.css', 'http://xx.com/style.css']

  // Tampilan sidebar apakah direversi (kiri menjadi kanan, kanan menjadi kiri), sudah didukung oleh tema: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE: false,

  // Sebuah plugin kecil untuk menampilkan halaman penggemar Facebook Anda~
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // Judul widget Halaman Facebook di sidebar, isi dengan '' jika tidak ada judul, misalnya FACEBOOK Fanpage
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Tautan Halaman Facebook, misalnya https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // ID Halaman Facebook untuk mengaktifkan fitur obrolan Messenger
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // ID Aplikasi Facebook untuk mengaktifkan fitur obrolan Messenger, dapat diperoleh di: https://developers.facebook.com/


  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // Nomor catatan registrasi, seperti 闽ICP备XXXXXXX

  // MULAI ******* Kode Terkait *******
  // Kode PrismJs Terkait
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_JS_AUTO_LOADER: 'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',

  // Tema Kode @lihat https://github.com/PrismJS/prism-themes
  PRISM_THEME_PREFIX_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_PREFIX_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.css', // Tema default blok kode
  PRISM_THEME_SWITCH: process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH || true, // Aktifkan mode perubahan tema kode cahaya/gelap; jika diaktifkan, akan menampilkan dua tema berikut
  PRISM_THEME_LIGHT_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_LIGHT_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.css', // Tema mode cahaya
  PRISM_THEME_DARK_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_DARK_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css', // Tema mode gelap

  CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || true, // Tampilkan ikon merah, kuning, hijau macOS di sudut kiri atas kode
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || false, // Tampilkan nomor baris
  CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || true, // Tampilkan kode yang dapat dilipat
  // AKHIR ******* Kode Terkait *******

  // CDN untuk diagram Mermaid
  MERMAID_CDN: process.env.NEXT_PUBLIC_MERMAID_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js', // CDN
  // QRCode CDN
  QR_CODE_CDN: process.env.NEXT_PUBLIC_QR_CODE_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',

  BACKGROUND_LIGHT: '#eeeeee', // gunakan nilai heksadesimal, jangan lupa '#' contohnya #fffefc
  BACKGROUND_DARK: '#000000', // gunakan nilai heksadesimal, jangan lupa '#'
  SUB_PATH: '', // biarkan ini kosong kecuali Anda ingin mendeploy di dalam folder

  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // Fungsi berbagi artikel, akan menampilkan bilah berbagi di bagian bawah
  POSTS_SHARE_SERVICES: process.env.NEXT_PUBLIC_POST_SHARE_SERVICES || 'link,wechat,qq,weibo,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin', // Layanan berbagi, ditampilkan dalam urutan, dipisahkan oleh koma
  // Semua layanan berbagi yang didukung: link (Salin tautan), wechat (WeChat), qq, weibo (Weibo), email (Email), facebook, twitter, telegram, messenger, line, reddit, whatsapp, linkedin, vkshare, okshare, tumblr, livejournal, mailru, viber, workplace, pocket, instapaper, hatena

  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX || '',
  // Awalan URL untuk jenis POST, misalnya, awalan URL default untuk jenis POS adalah /article/[slug]
  // Jika pengaturan ini adalah '' (kosong), maka artikel tidak akan memiliki awalan URL, contohnya jika Anda ingin mengatur awalan URL artikel menjadi /post, ini mendukung beberapa tingkatan
  // Mendukung fitur serupa WordPress untuk menyesuaikan format tautan artikel: https://wordpress.org/documentation/article/customize-permalinks/, saat ini hanya mendukung %year%/%month%/%day%
  // Contoh: Jika Anda ingin mengganti awalan URL menjadi 'article' + timestamp, Anda dapat mengubahnya menjadi: 'article/%year%/%month%/%day%'


  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // Gaya daftar artikel: paging halaman atau gulir tunggal
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', // Apakah memuat pratinjau artikel dalam daftar
  POST_PREVIEW_LINES: 12, // Jumlah baris pratinjau artikel
  POST_RECOMMEND_COUNT: 6, // Jumlah artikel yang direkomendasikan
  POSTS_PER_PAGE: 12, // Jumlah posting per halaman
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // Cara pengurutan: 'date' (berdasarkan tanggal) atau 'notion' (dikontrol oleh Notion)

  ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || null, // Lihat di sini https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_ADMIN_APP_KEY: process.env.ALGOLIA_ADMIN_APP_KEY || null, // Kunci administrasi, jangan tampilkan dalam kode, lihat di sini https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_SEARCH_ONLY_APP_KEY: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || null, // Kunci aplikasi untuk pencarian klien
  ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || null, // Buat indeks dalam Algolia sebagai database
  // ALGOLIA_RECREATE_DATA: process.env.ALGOLIA_RECREATE_DATA || process.env.npm_lifecycle_event === 'build', // Saat true, data indeks akan dibangun ulang; secara default akan dibangun saat 'build'

  PREVIEW_CATEGORY_COUNT: 16, // Jumlah kategori yang paling banyak ditampilkan di halaman utama, 0 berarti tidak ada batasan
  PREVIEW_TAG_COUNT: 16, // Jumlah tag yang paling banyak ditampilkan di halaman utama, 0 berarti tidak ada batasan

  POST_DISABLE_GALLERY_CLICK: process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, // Matikan klik pada tampilan galeri, berguna saat menyisipkan tautan ke dalam galeri di halaman tautan teman

  // ********Efek Dinamis Terkait********
  // Efek kembang api saat klik mouse
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || false, // Aktifkan atau nonaktifkan
  // Warna kembang api, terima kasih kepada https://github.com/Vixcity atas kontribusinya
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],


  // Efek Bunga Sakura yang Terbang
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || false, // Aktifkan atau nonaktifkan
  // Efek Garis Mengambang
  NEST: process.env.NEXT_PUBLIC_NEST || false, // Aktifkan atau nonaktifkan
  // Efek Pita Dinamis
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false, // Aktifkan atau nonaktifkan
  // Efek Pita Statis
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false, // Aktifkan atau nonaktifkan
  // Efek Hujan Bintang
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || false, // Aktifkan atau nonaktifkan

  // Komponen Gantungan
  // Chatbase Apakah menampilkan robot chatbase https://www.chatbase.co/
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  // Robot WebwhizAI @lihat https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // Apakah menampilkan
  WEB_WHIZ_BASE_URL: process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // Anda dapat meng-host sendiri
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // Dapatkan ID di backend

  // Gantungan Mengapung
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || false, // Apakah menampilkan gantungan hewan peliharaan
  WIDGET_PET_LINK:
        process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
        'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // Alamat model gantungan @lihat https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME: process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || false, // Klik gantungan hewan peliharaan untuk mengganti tema blog


  // Plugin Pemutar Musik
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || false, // Apakah menggunakan plugin pemutar musik
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // Apakah menampilkan pemutar dan tombol pemutaran dan pergantian di sudut kiri bawah, jika menggunakan pemutar, aktifkan pemutaran otomatis dan sembunyikan, maka akan memutar musik seperti latar belakang tanpa kemampuan untuk dihentikan atau dijeda
  MUSIC_PLAYER_AUTO_PLAY: process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // Apakah pemutaran otomatis diaktifkan, meskipun pemutaran otomatis sering kali tidak berfungsi (perangkat seluler tidak mendukung pemutaran otomatis)
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // Jenis tampilan lirik, nilai yang dapat dipilih: 3 | 1 | 0 (0: nonaktifkan lirik lrc, 1: string format lirik lrc, 3: URL file lirik lrc) (asalkan ada konfigurasi jalur lirik, tidak berlaku untuk meting)
  MUSIC_PLAYER_CDN_URL: process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL || 'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // Mode pemutaran default, urutan list atau acak random
  MUSIC_PLAYER_AUDIO_LIST: [
    // Contoh daftar musik. Selain konfigurasi berikut, Anda juga dapat mengkonfigurasi lirik, lihat detailnya di sini https://aplayer.js.org/#/zh-Hans/
    {
      name: '风を共に舞う気持ち',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731419.mp3',
      cover: 'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '王都グランセル',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731355.mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    }
  ],

  // PLUGIN PEMUTAR MUSIK DENGAN METINGJS
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // Apakah ingin mengaktifkan MetingJS untuk mendapatkan daftar putar dari platform. Akan menimpa konfigurasi CUSTOM_AUDIO_LIST, informasi konfigurasi lebih lanjut: https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // Platform musik, [netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // ID dari daftar putar yang sesuai
  MUSIC_PLAYER_METING_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // Nilai yang dapat dipilih: 3 | 1 | 0 (0: nonaktifkan lirik lrc, 1: format lirik lrc dalam bentuk string, 3: URL file lirik lrc)

  // KOMPONEN GANTUNGAN TERKAIT
  // ----> Interaksi komentar Dapat diaktifkan secara bersamaan untuk beberapa komponen yang mendukung WALINE, VALINE, GISCUS, CUSDIS, UTTERRANCES, GITALK

  // PLUGIN KOMENTAR CUSDIS data-app-id 36 karakter, lihat https://cusdis.com/
  COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || 'f1ab4720-e02d-4161-bb2e-d3fb26a44042', // data-app-id 36 karakter, lihat https://cusdis.com/
  COMMENT_CUSDIS_HOST: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', // data-host, ubah jika Anda menggunakan versi self-hosted
  COMMENT_CUSDIS_SCRIPT_SRC: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC || '/js/cusdis.es.js', // ubah jika Anda menggunakan versi self-hosted

  
  // PLUGIN KOMENTAR ARTALK
  COMMENT_ARTALK_SERVER: process.env.NEXT_PUBLIC_COMMENT_ARTALK_SERVER || '', // Alamat backend ArtalkServer https://artalk.js.org/guide/deploy.html
  COMMENT_ARTALK_JS: process.env.NEXT_PUBLIC_COMMENT_ARTALK_JS || 'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.js', // CDN ArtalkServer js
  COMMENT_ARTALK_CSS: process.env.NEXT_PUBLIC_COMMENT_ARTALK_CSS || 'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.css', // CDN ArtalkServer css

  // PLUGIN KOMENTAR TWIKOO
  COMMENT_TWIKOO_ENV_ID: process.env.NEXT_PUBLIC_COMMENT_ENV_ID || '', // Alamat backend TWIKOO, isi dengan envId jika menggunakan layanan Tencent Cloud, atau isi dengan nama domain jika menggunakan Vercel, panduan: https://tangly1024.com/article/notionnext-twikoo
  COMMENT_TWIKOO_COUNT_ENABLE: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || false, // Apakah menampilkan jumlah komentar pada daftar blog
  COMMENT_TWIKOO_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL || 'https://cdn.staticfile.org/twikoo/1.6.16/twikoo.min.js', // CDN klien TWIKOO

  // PLUGIN KOMENTAR UTTERANCE
  COMMENT_UTTERRANCES_REPO: process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '', // Nama repositori kode Anda, contohnya 'tangly1024/NotionNext'; lihat lebih banyak dokumentasi di https://utteranc.es/


  // PLUGIN KOMENTAR GISCUS @see https://giscus.app/
  COMMENT_GISCUS_REPO: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '', // Nama repositori Github Anda, contoh: 'tangly1024/NotionNext'
  COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '', // ID repositori Github Anda (dapat ditemukan setelah mengkonfigurasi Giscus)
  COMMENT_GISCUS_CATEGORY_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '', // ID Kategori dalam Diskusi Github Anda (dapat ditemukan setelah mengkonfigurasi Giscus)
  COMMENT_GISCUS_MAPPING: process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', // Cara Anda ingin mencocokkan artikel dalam Diskusi Github Anda, default 'pathname'
  COMMENT_GISCUS_REACTIONS_ENABLED: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', // Apakah Anda ingin mengaktifkan emoji reaksi pada Giscus Anda, '1' aktifkan, '0' nonaktifkan, default aktif
  COMMENT_GISCUS_EMIT_METADATA: process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0', // Apakah Anda ingin mengekstrak Metadata pada Giscus Anda, '1' aktifkan, '0' nonaktifkan, default nonaktif
  COMMENT_GISCUS_INPUT_POSITION: process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', // Di mana Anda ingin meletakkan form komentar Giscus Anda, 'bottom' bawah, 'top' atas, default bawah
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'en', // Bahasa yang ingin digunakan dalam Giscus Anda, misal: 'en', 'zh-TW', 'zh-CN', default 'en'
  COMMENT_GISCUS_LOADING: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy', // Apakah Anda ingin memuat Giscus secara progresif, default 'lazy'
  COMMENT_GISCUS_CROSSORIGIN: process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous', // Apakah Giscus Anda dapat melewati kebijakan lintasan lintas asal (CORS), default 'anonymous'

  // PLUGIN KOMENTAR GITALK @see https://gitalk.github.io/
  COMMENT_GITALK_REPO: process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '', // Nama Repositori Github Anda, contoh: 'NotionNext'
  COMMENT_GITALK_OWNER: process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '', // Nama pengguna Github Anda, misal: 'tangly1024'
  COMMENT_GITALK_ADMIN: process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '', // Nama pengguna Administrator, biasanya Anda sendiri, misal: 'tangly1024'
  COMMENT_GITALK_CLIENT_ID: process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_ID || '', // ID klien Gitalk Anda (dapat ditemukan di pengaturan Gitalk)
  COMMENT_GITALK_CLIENT_SECRET: process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_SECRET || '', // ID rahasia klien Gitalk Anda (dapat ditemukan di pengaturan Gitalk)
  COMMENT_GITALK_DISTRACTION_FREE_MODE: false, // Mode bebas gangguan mirip dengan Facebook
  COMMENT_GITALK_JS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_JS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js', // CDN JavaScript klien Gitalk
  COMMENT_GITALK_CSS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_CSS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css', // CDN CSS klien Gitalk

  COMMENT_GITTER_ROOM: process.env.NEXT_PUBLIC_COMMENT_GITTER_ROOM || '', // Ruang obrolan Gitter, lihat https://gitter.im/ Jika tidak diperlukan, biarkan kosong
  COMMENT_DAO_VOICE_ID: process.env.NEXT_PUBLIC_COMMENT_DAO_VOICE_ID || '', // DaoVoice http://dashboard.daovoice.io/get-started
  COMMENT_TIDIO_ID: process.env.NEXT_PUBLIC_COMMENT_TIDIO_ID || '', // [tidio_id] -> //code.tidio.co/[tidio_id].js

  COMMENT_VALINE_CDN: process.env.NEXT_PUBLIC_VALINE_CDN || 'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
  COMMENT_VALINE_APP_ID: process.env.NEXT_PUBLIC_VALINE_ID || '', // Valine @see https://valine.js.org/quickstart.html atau https://github.com/stonehank/react-valine#%E8%8E%B7%E5%8F%96app-id-%E5%92%8C-app-key
  COMMENT_VALINE_APP_KEY: process.env.NEXT_PUBLIC_VALINE_KEY || '',
  COMMENT_VALINE_SERVER_URLS: process.env.NEXT_PUBLIC_VALINE_SERVER_URLS || '', // Konfigurasi ini berlaku untuk pengguna yang menggunakan domain kustom di Cina, versi luar negeri akan mendeteksi secara otomatis (tidak perlu mengisi secara manual) @see https://valine.js.org/configuration.html#serverURLs
  COMMENT_VALINE_PLACEHOLDER: process.env.NEXT_PUBLIC_VALINE_PLACEHOLDER || 'Tinggalkan komentar~', // Bisa digunakan bersamaan dengan manajemen komentar backend https://github.com/DesertsP/Valine-Admin untuk melihat komentar, pemberitahuan email, dan fungsi penggunaan sampah lainnya.

  COMMENT_WALINE_SERVER_URL: process.env.NEXT_PUBLIC_WALINE_SERVER_URL || '', // Harap konfigurasi URL komentar Waline yang lengkap, contoh: https://preview-waline.tangly1024.com @see https://waline.js.org/guide/get-started.html
  COMMENT_WALINE_RECENT: process.env.NEXT_PUBLIC_WALINE_RECENT || false, // Komentar terbaru


  // Sistem komentar ini didasarkan pada WebMention, rincian dapat dilihat di https://webmention.io
  // Ini adalah sistem komentar terbuka berdasarkan prinsip IndieWeb, properti yang terkandung dalam COMMENT_WEBMENTION di bawah ini harus dikonfigurasi:
  // ENABLE: Apakah diaktifkan
  // AUTH: IndieLogin yang digunakan oleh Webmention, dapat menghubungkan halaman Twitter atau Github pribadi
  // HOSTNAME: Domain yang terikat dengan Webmention, biasanya adalah alamat situs ini
  // TWITTER_USERNAME: Informasi yang diperlukan untuk area tampilan komentar
  // TOKEN: Token API Webmention
  COMMENT_WEBMENTION: {
    ENABLE: process.env.NEXT_PUBLIC_WEBMENTION_ENABLE || false,
    AUTH: process.env.NEXT_PUBLIC_WEBMENTION_AUTH || '',
    HOSTNAME: process.env.NEXT_PUBLIC_WEBMENTION_HOSTNAME || '',
    TWITTER_USERNAME: process.env.NEXT_PUBLIC_TWITTER_USERNAME || '',
    TOKEN: process.env.NEXT_PUBLIC_WEBMENTION_TOKEN || ''
  },

  // <---- Plugin komentar


  // ----> Statistik Situs
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, // Statistik bawaan Vercel https://vercel.com/docs/concepts/analytics/quickstart https://github.com/tangly1024/NotionNext/issues/897
  ANALYTICS_BUSUANZI_ENABLE: process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, // Menampilkan jumlah pembaca dan kunjungan situs web, lihat http://busuanzi.ibruce.info/
  ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // Contoh: Hanya perlu mengisi ID statistik Baidu, [baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]
  ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // Hanya perlu mengisi ID statistik CNZZ, [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '', // ID Google Analytics, contoh: G-XXXXXXXXXX

  // Alat Statistik Pengunjung Situs Ackee
  ANALYTICS_ACKEE_TRACKER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // Contoh: 'https://ackee.tangly1024.com/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // Contoh: https://ackee.tangly1024.com, jangan diakhiri dengan garis miring
  ANALYTICS_ACKEE_DOMAIN_ID: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // Contoh: '82e51db6-dec2-423a-b7c9-b4ff7ebb3302'

  SEO_GOOGLE_SITE_VERIFICATION:
        process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', // Hapus nilai ini atau gantilah dengan kode verifikasi situs Google Anda sendiri

  SEO_BAIDU_SITE_VERIFICATION:
        process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', // Hapus nilai ini atau gantilah dengan kode verifikasi situs Baidu Anda sendiri

  // <---- Statistik Situs

  // START----> Berkaitan dengan Pendapatan


  // Iklan Google AdSense
  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', // ID Google AdSense, contoh: ca-pub-xxxxxxxxxxxxxxxx
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // Mode uji ID Google AdSense, mode ini akan memberikan iklan uji palsu untuk pengembangan https://www.tangly1024.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '3806269138', // Google AdScene> Iklan> Buat iklan tertanam dalam artikel. Tempelkan nilai data-ad-slot dari kode HTML di sini.
  ADSENSE_GOOGLE_SLOT_FLOW: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '1510444138', // Google AdScene> Iklan> Buat iklan aliran informasi.
  ADSENSE_GOOGLE_SLOT_NATIVE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '4980048999', // Google AdScene> Iklan> Buat iklan alamiah.
  ADSENSE_GOOGLE_SLOT_AUTO: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '8807314373', // Google AdScene> Iklan> Buat iklan tampilan otomatis.

  // Iklan WWADS
  AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null, // Buat ID unit iklan WWADS Anda di https://wwads.cn/
  AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false, // Aktifkan deteksi plugin pemblokir iklan WWADS. Jika diaktifkan, akan menampilkan pesan teks pada area iklan. Lihat https://github.com/bytegravity/whitelist-wwads

  // END<---- Berkaitan dengan Pendapatan


  // Nama Properti Notion yang Dikustomisasi
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'password',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // Jenis Artikel
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // Saat jenis artikel sama dengan nilai ini, itu adalah postingan.
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // Saat jenis artikel sama dengan nilai ini, itu adalah halaman tunggal.
    type_notice: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // Saat jenis artikel sama dengan nilai ini, itu adalah pengumuman.
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // Saat jenis artikel sama dengan nilai ini, itu adalah menu.
    type_sub_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // Saat jenis artikel sama dengan nilai ini, itu adalah submenu.
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // Judul Artikel
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
    status_publish: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // Saat status sama dengan nilai ini, itu telah diterbitkan.
    status_invisible: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // Saat status sama dengan nilai ini, itu tidak akan ditampilkan di blog, bisa dalam bahasa Indonesia. Selain itu, status halaman lainnya tidak akan ditampilkan di blog.
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary', // Ringkasan Artikel
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug', // Slug Artikel
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category', // Kategori Artikel
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date', // Tanggal Artikel
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags', // Tag Artikel
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon'
  },


  // RSS Subscription (Berlangganan RSS)
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // Aktifkan fitur berlangganan RSS
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // Aktifkan berlangganan email Mailchimp, ID daftar pelanggan, lihat dokumentasi untuk cara penggunaannya
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null, // Aktifkan berlangganan email Mailchimp, API key

  // Konfigurasi yang Tidak Digunakan
  AVATAR: process.env.NEXT_PUBLIC_AVATAR || '/avatar.svg', // Gambar profil penulis, digantikan oleh ICON dalam Notion. Jika tidak ada ICON, maka gambar avatar.svg di direktori public akan digunakan.
  TITLE: process.env.NEXT_PUBLIC_TITLE || 'NotionNext BLOG', // Judul situs, digantikan oleh judul halaman Notion; harap jangan biarkan kosong, jika tidak, server tidak dapat mengompilasi.
  HOME_BANNER_IMAGE: process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // Gambar latar belakang beranda, digantikan oleh gambar sampul dalam Notion. Jika tidak ada gambar sampul, maka gambar bg_image.jpg dalam direktori /public akan digunakan.
  DESCRIPTION: process.env.NEXT_PUBLIC_DESCRIPTION || 'Ini adalah situs yang dibuat dengan NotionNext', // Deskripsi situs, digantikan oleh deskripsi halaman dalam Notion.

  // Gambar Situs
  IMG_LAZY_LOAD_PLACEHOLDER: process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER || 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', // Alamat gambar gantian untuk pemuatan malas, mendukung base64 atau URL
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // Konfigurasi ini sudah tidak digunakan, jangan gunakan; Solusi Amazon tidak lagi didukung, hanya mendukung solusi Notion. ['Notion','AMAZON'] Prefiks gambar situs default Notion: (https://notion.so/images/xx), AMAZON (https://s3.us-west-2.amazonaws.com/xxx)
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, // Apakah gambar dalam artikel akan otomatis memiliki bayangan

  // Pengembangan Terkait
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Berguna jika Anda tidak ingin membuat database Anda publik
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // Apakah akan menampilkan tombol debug
  ENABLE_CACHE: process.env.ENABLE_CACHE || process.env.npm_lifecycle_event === 'build', // Cache diaktifkan saat debugging dan proses pembuatan, tapi sebaiknya tidak digunakan saat berdeploy secara resmi.
  isProd: process.env.VERCEL_ENV === 'production', // Membedakan antara lingkungan pengembangan dan produksi (lihat: https://vercel.com/docs/environment-variables#system-environment-variables)
  VERSION: process.env.NEXT_PUBLIC_VERSION // Nomor versi
}

module.exports = BLOG
