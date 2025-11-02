document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const themeToggleBtn = document.querySelector('#theme-toggle');
    const langToggleBtn = document.querySelector('#lang-toggle');
    const body = document.body;
    const scrollTopBtn = document.querySelector('#scrollTopBtn');
    const networkStatusEl = document.getElementById('networkStatus');

    const translations = {
        "id": {
            "headerTitle": "Galeri Game Keren",
            "headerSubtitle": "Pilih dan mainkan game favoritmu langsung dari browser!",
            "navBrand": "Galeri Game",
            "navHome": "Home",
            "navDonate": "Donate",
            "navAbout": "About",
            "navFAQ": "FAQ",
            "navNews": "News",
            "navPrivacy": "Privacy",
            "ariaLang": "Ganti bahasa",
            "ariaTheme": "Toggle theme",
            "ariaNav": "Toggle navigation",
            "footerText": "&copy; 2025 Portal Game Anda. Semua Hak Cipta Dilindungi.",
            "footerLink": "Kebijakan Privasi",
            "scrollTop": "Kembali ke atas",
            "searchPlaceholder": "Cari game...",
            "filterAll": "Semua",
            "filterAdventure": "Petualangan",
            "filterPuzzle": "Puzzle",
            "filterAction": "Aksi",
            "game1Title": "Space Adventure",
            "game1Desc": "Jelajahi galaksi tak terbatas dan kalahkan musuh alien dalam petualangan luar angkasa yang epik.",
            "game2Title": "Jungle Run",
            "game2Desc": "Berlarilah secepat mungkin, hindari rintangan, dan kumpulkan harta karun di hutan belantara.",
            "game3Title": "Puzzle Master",
            "game3Desc": "Uji kemampuan logikamu dengan ratusan teka-teki menantang yang akan mengasah otakmu.",
            "playNow": "Mainkan Sekarang",
            "donateTitle": "Dukung Kami",
            "donateP1": "Jika Anda menikmati game di sini, pertimbangkan untuk memberikan donasi. Setiap dukungan Anda sangat berarti untuk membantu kami tetap online dan menambahkan game-game baru yang seru!",
            "donateP2": "Anda bisa berdonasi melalui platform di bawah ini (silakan ganti dengan info Anda):",
            "donateLi1": "Bank Transfer: 123-456-7890 (Bank ABC)",
            "donateLi2": "E-Wallet: 0812-3456-7890 (OVO/Gopay)",
            "donateP3": "Terima kasih atas dukungan Anda!",
            "aboutTitle": "Tentang Kami",
            "aboutP1": "Selamat datang di Galeri Game Keren! Kami adalah portal yang didedikasikan untuk menyediakan game-game browser yang ringan, seru, dan bisa diakses kapan saja, di mana saja, baik dari desktop maupun handphone Anda.",
            "aboutP2": "Misi kami adalah menciptakan tempat hiburan yang sederhana dan bebas repot. Tidak perlu download, tidak perlu instalasi berat. Cukup klik dan mainkan.",
            "aboutP3": "Kami selalu berusaha memperbarui koleksi game kami secara berkala. Terima kasih telah berkunjung!",
            "faqTitle": "Frequently Asked Questions (FAQ)",
            "faq1Title": "Apakah semua game di sini gratis?",
            "faq1Desc": "Ya, semua game yang ada di Galeri Game Keren 100% gratis untuk dimainkan langsung di browser Anda.",
            "faq2Title": "Perlukah saya mendaftar untuk bermain?",
            "faq2Desc": "Tidak perlu. Kami tidak memerlukan pendaftaran atau login. Anda bisa langsung klik dan mainkan game favorit Anda.",
            "faq3Title": "Apakah game ini aman untuk dimainkan?",
            "faq3Desc": "Tentu saja. Kami hanya menyediakan game berbasis browser (HTML5) yang aman dan tidak memerlukan unduhan atau instalasi apa pun, sehingga bebas dari risiko virus atau malware.",
            "faq4Title": "Kenapa ada halaman donasi?",
            "faq4Desc": "Halaman donasi disediakan bagi Anda yang ingin mendukung biaya operasional server dan pengembangan website ini agar kami bisa terus menambahkan game-game baru. Donasi bersifat sukarela dan tidak wajib.",
            "newsTitle": "Berita & Pembaruan Terbaru",
            "news1Title": "3 Game Baru Ditambahkan!",
            "news1Date": "1 November 2025",
            "news1Desc": "Kami sangat senang mengumumkan bahwa tiga game baru telah ditambahkan ke galeri! Mainkan 'Space Adventure', 'Jungle Run', dan 'Puzzle Master' sekarang juga. Kami telah menguji ketiganya dan dijamin seru!",
            "news1Link": "Mainkan Sekarang",
            "news2Title": "Perbaikan Fitur Pencarian & Filter",
            "news2Date": "30 Oktober 2025",
            "news2Desc": "Terima kasih atas masukan Anda! Kami telah memperbaiki bug pada fitur pencarian di perangkat mobile dan mengoptimalkan kecepatan filter kategori. Mencari game favorit Anda sekarang lebih cepat dari sebelumnya.",
            "news3Title": "Selamat Datang di Galeri Game Keren!",
            "news3Date": "28 Oktober 2025",
            "news3Desc": "Selamat datang di peluncuran resmi website kami! Kami mendedikasikan platform ini untuk menyediakan game browser HTML5 terbaik yang ringan, cepat, dan gratis. Nantikan pembaruan game secara berkala.",
            "privacyTitle": "Kebijakan Privasi",
            "privacyDate": "Efektif per 1 November 2025.",
            "privacyP1": "Website ini (\"kami\") menghargai privasi Anda. Kebijakan Privasi ini menjelaskan informasi apa yang kami kumpulkan dan bagaimana kami menggunakannya.",
            "privacyH3Info": "Informasi yang Kami Kumpulkan",
            "privacyPInfo": "Kami hanya mengumpulkan informasi non-pribadi yang disimpan secara lokal di browser Anda untuk meningkatkan pengalaman pengguna. Ini termasuk:",
            "privacyLiTheme": "<strong>Preferensi Tema:</strong> Kami menyimpan pilihan mode gelap atau terang Anda di `localStorage` browser Anda agar preferensi Anda tetap sama saat Anda berkunjung kembali.",
            "privacyLiNav": "<strong>Data Navigasi (Non-Pribadi):</strong> Kami mungkin menggunakan alat analisis standar untuk memahami bagaimana pengguna berinteraksi dengan situs (misalnya, halaman mana yang populer), namun data ini bersifat anonim.",
            "privacyH3Use": "Bagaimana Kami Menggunakan Informasi",
            "privacyPUse": "Informasi yang kami simpan di `localStorage` Anda hanya digunakan untuk fungsionalitas situs. Kami tidak menjual, menyewakan, atau membagikan informasi pribadi apa pun kepada pihak ketiga karena kami tidak mengumpulkannya.",
            "privacyH3Third": "Pihak Ketiga",
            "privacyPThird": "Game yang disematkan di situs ini mungkin di-hosting oleh pihak ketiga. Pihak ketiga tersebut mungkin memiliki kebijakan privasi mereka sendiri. Kami tidak bertanggung jawab atas praktik privasi dari layanan pihak ketiga tersebut.",
            "privacyH3Changes": "Perubahan pada Kebijakan Ini",
            "privacyPChanges": "Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memposting kebijakan baru di halaman ini.",
            "detailPageTitle": "Mainkan Game - Galeri Game",
            "detailBack": "Kembali ke Galeri",
            "detailLoading": "Memuat game...",
            "detailDescLoading": "Deskripsi akan muncul di sini.",
            "errorPageTitle": "404 - Halaman Tidak Ditemukan",
            "error404": "404",
            "errorTitle": "Halaman Tidak Ditemukan",
            "errorDesc": "Maaf, halaman yang Anda cari mungkin telah dihapus, dipindahkan, atau tidak pernah ada.",
            "errorHome": "Kembali ke Home",
            "networkOnline": "Jaringan kembali terhubung.",
            "networkOffline": "Jaringan terputus. Anda sedang offline.",
            "loadGameErrorHome": "Gagal memuat daftar game. Periksa koneksi Anda.",
            "loadGameErrorDetail": "Error: Gagal Memuat Data Game",
            "gameNotFoundTitle": "Game Tidak Ditemukan",
            "gameNotFoundDesc": "Maaf, game yang Anda cari tidak ada di database kami atau URL tidak valid.",
            "gameDetailPageTitle": "Mainkan ${title} - Galeri Game"
        },
        "en": {
            "headerTitle": "Cool Game Gallery",
            "headerSubtitle": "Choose and play your favorite games right from your browser!",
            "navBrand": "Game Gallery",
            "navHome": "Home",
            "navDonate": "Donate",
            "navAbout": "About",
            "navFAQ": "FAQ",
            "navNews": "News",
            "navPrivacy": "Privacy",
            "ariaLang": "Change language",
            "ariaTheme": "Toggle theme",
            "ariaNav": "Toggle navigation",
            "footerText": "&copy; 2025 Your Game Portal. All Rights Reserved.",
            "footerLink": "Privacy Policy",
            "scrollTop": "Back to top",
            "searchPlaceholder": "Search for games...",
            "filterAll": "All",
            "filterAdventure": "Adventure",
            "filterPuzzle": "Puzzle",
            "filterAction": "Action",
            "game1Title": "Space Adventure",
            "game1Desc": "Explore the infinite galaxy and defeat alien enemies in an epic space adventure.",
            "game2Title": "Jungle Run",
            "game2Desc": "Run as fast as you can, avoid obstacles, and collect treasures in the wild jungle.",
            "game3Title": "Puzzle Master",
            "game3Desc": "Test your logic skills with hundreds of challenging puzzles that will sharpen your brain.",
            "playNow": "Play Now",
            "donateTitle": "Support Us",
            "donateP1": "If you enjoy the games here, please consider making a donation. Your support means a lot to help us stay online and add new exciting games!",
            "donateP2": "You can donate via the platforms below (please replace with your info):",
            "donateLi1": "Bank Transfer: 123-456-7890 (ABC Bank)",
            "donateLi2": "E-Wallet: 0812-3456-7890 (OVO/Gopay)",
            "donateP3": "Thank you for your support!",
            "aboutTitle": "About Us",
            "aboutP1": "Welcome to Cool Game Gallery! We are a portal dedicated to providing light, fun, and accessible browser games anytime, anywhere, from your desktop or mobile phone.",
            "aboutP2": "Our mission is to create a simple and hassle-free entertainment spot. No downloads, no heavy installations. Just click and play.",
            "aboutP3": "We always try to update our game collection regularly. Thanks for visiting!",
            "faqTitle": "Frequently Asked Questions (FAQ)",
            "faq1Title": "Are all games here free?",
            "faq1Desc": "Yes, all games at Cool Game Gallery are 100% free to play directly in your browser.",
            "faq2Title": "Do I need to register to play?",
            "faq2Desc": "Not at all. We do not require registration or login. You can just click and play your favorite game.",
            "faq3Title": "Are these games safe to play?",
            "faq3Desc": "Absolutely. We only provide safe, browser-based (HTML5) games that require no downloads or installations, making them free from the risk of viruses or malware.",
            "faq4Title": "Why is there a donation page?",
            "faq4Desc": "The donation page is for those who wish to support the server and development costs of this website so we can keep adding new games. Donations are voluntary and not mandatory.",
            "newsTitle": "Latest News & Updates",
            "news1Title": "3 New Games Added!",
            "news1Date": "November 1, 2025",
            "news1Desc": "We are excited to announce that three new games have been added to the gallery! Play 'Space Adventure', 'Jungle Run', and 'Puzzle Master' right now. We've tested all three, and they are guaranteed to be fun!",
            "news1Link": "Play Now",
            "news2Title": "Search & Filter Feature Improvements",
            "news2Date": "October 30, 2025",
            "news2Desc": "Thanks for your feedback! We have fixed a bug in the search feature on mobile devices and optimized the speed of the category filters. Finding your favorite game is now faster than ever.",
            "news3Title": "Welcome to Cool Game Gallery!",
            "news3Date": "October 28, 2025",
            "news3Desc": "Welcome to the official launch of our website! We dedicate this platform to providing the best light, fast, and free HTML5 browser games. Stay tuned for regular game updates.",
            "privacyTitle": "Privacy Policy",
            "privacyDate": "Effective as of November 1, 2025.",
            "privacyP1": "This website (\"we\", \"us\") respects your privacy. This Privacy Policy explains what information we collect and how we use it.",
            "privacyH3Info": "Information We Collect",
            "privacyPInfo": "We only collect non-personal information stored locally in your browser to enhance user experience. This includes:",
            "privacyLiTheme": "<strong>Theme Preference:</strong> We store your choice of dark or light mode in your browser's `localStorage` so your preference remains when you return.",
            "privacyLiNav": "<strong>Navigation Data (Non-Personal):</strong> We may use standard analytics tools to understand how users interact with the site (e.g., which pages are popular), but this data is anonymous.",
            "privacyH3Use": "How We Use Information",
            "privacyPUse": "The information we store in your `localStorage` is used only for site functionality. We do not sell, rent, or share any personal information with third parties because we do not collect it.",
            "privacyH3Third": "Third Parties",
            "privacyPThird": "Games embedded on this site may be hosted by third parties. Those third parties may have their own privacy policies. We are not responsible for the privacy practices of such third-party services.",
            "privacyH3Changes": "Changes to This Policy",
            "privacyPChanges": "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.",
            "detailPageTitle": "Play Game - Game Gallery",
            "detailBack": "Back to Gallery",
            "detailLoading": "Loading game...",
            "detailDescLoading": "Description will appear here.",
            "errorPageTitle": "404 - Page Not Found",
            "error404": "404",
            "errorTitle": "Page Not Found",
            "errorDesc": "Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
            "errorHome": "Back to Home",
            "networkOnline": "Connection restored.",
            "networkOffline": "Connection lost. You are offline.",
            "loadGameErrorHome": "Failed to load game list. Check your connection.",
            "loadGameErrorDetail": "Error: Failed to Load Game Data",
            "gameNotFoundTitle": "Game Not Found",
            "gameNotFoundDesc": "Sorry, the game you are looking for is not in our database or the URL is invalid.",
            "gameDetailPageTitle": "Play ${title} - Game Gallery"
        }
    };

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    const applyTheme = (theme) => {
        body.setAttribute('data-theme', theme);
        if (themeToggleBtn) {
            const themeIcon = themeToggleBtn.querySelector('i');
            themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    };

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const newTheme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('show', window.scrollY > 300);
        });
        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const applyLanguage = (lang) => {
        const tr = translations[lang];
        document.documentElement.lang = lang;
        if (langToggleBtn) {
            langToggleBtn.textContent = lang.toUpperCase();
        }

        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            if (tr[key]) {
                if (el.tagName === 'INPUT' && el.type === 'search') {
                    el.placeholder = tr[key];
                } else if (el.hasAttribute('aria-label')) {
                    el.setAttribute('aria-label', tr[key]);
                } else if (key.includes("footerText") || key.startsWith("privacyLi")) {
                    el.innerHTML = tr[key];
                } else {
                    el.textContent = tr[key];
                }
            }
        });

        const pageTitleEl = document.querySelector('title');
        if (pageTitleEl) {
            const key = pageTitleEl.getAttribute('data-i18n-key');
            if (tr[key]) {
                pageTitleEl.textContent = tr[key];
            }
        }
    };

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = document.documentElement.lang === 'id' ? 'en' : 'id';
            localStorage.setItem('language', newLang);
            applyLanguage(newLang);
        });
    }

    const savedLang = localStorage.getItem('language') || 'id';
    applyLanguage(savedLang);

    if (networkStatusEl) {
        const showNetworkStatus = (isOnline) => {
            const lang = document.documentElement.lang;
            networkStatusEl.textContent = isOnline ? translations[lang].networkOnline : translations[lang].networkOffline;
            networkStatusEl.className = isOnline ? 'network-status online show' : 'network-status offline show';
            if (isOnline) {
                setTimeout(() => {
                    networkStatusEl.classList.remove('show');
                }, 3000);
            }
        };
        window.addEventListener('online', () => showNetworkStatus(true));
        window.addEventListener('offline', () => showNetworkStatus(false));
        if (!navigator.onLine) {
            showNetworkStatus(false);
        }
    }

    const loadGameData = async () => {
        try {
            const response = await fetch('games.json');
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('Gagal memuat database game:', error);
            return null;
        }
    };

    const initializePage = async () => {
        const isHomePage = document.getElementById('gameList');
        const isDetailPage = document.getElementById('gameFrame');
        const lang = document.documentElement.lang;

        if (isHomePage || isDetailPage) {
            const gameData = await loadGameData();
            if (!gameData) {
                if (isHomePage) document.getElementById('gameList').innerHTML = `<p style="color: #dc3545; text-align: center;">${translations[lang].loadGameErrorHome}</p>`;
                if (isDetailPage) document.getElementById('gameTitle').textContent = translations[lang].loadGameErrorDetail;
                return;
            }

            if (isHomePage) initializeFilter(gameData);
            if (isDetailPage) initializeGameDetail(gameData);
        }
    };

    const initializeFilter = (gameData) => {
        const searchInput = document.getElementById('searchInput');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const gameCards = document.querySelectorAll('.game-card');
        
        const filterGames = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

            gameCards.forEach(card => {
                const title = card.dataset.title.toLowerCase();
                const category = card.dataset.category.toLowerCase();
                const matchesSearch = title.includes(searchTerm);
                const matchesFilter = (activeFilter === 'all' || category === activeFilter);
                card.style.display = (matchesSearch && matchesFilter) ? 'flex' : 'none';
            });
        };

        searchInput.addEventListener('input', filterGames);
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                document.querySelector('.filter-btn.active').classList.remove('active');
                button.classList.add('active');
                filterGames();
            });
        });
    };

    const initializeGameDetail = (gameData) => {
        const params = new URLSearchParams(window.location.search);
        const gameId = params.get('game');
        const data = gameData[gameId];
        const lang = document.documentElement.lang;
        
        const gameFrame = document.getElementById('gameFrame');
        const titleEl = document.getElementById('gameTitle');
        const descEl = document.getElementById('gameDescription');
        const pageTitleEl = document.querySelector('title');

        if (data) {
            gameFrame.src = data.iframeUrl;
            titleEl.textContent = data.title;
            descEl.textContent = data.description;
            pageTitleEl.textContent = translations[lang].gameDetailPageTitle.replace('${title}', data.title);
        } else {
            titleEl.textContent = translations[lang].gameNotFoundTitle;
            descEl.textContent = translations[lang].gameNotFoundDesc;
        }
    };

    initializePage();
});