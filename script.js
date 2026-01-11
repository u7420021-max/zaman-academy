const kursData = [
    {
        id: 1,
        title: 'Профессионалдык Python Бэкенд иштеп чыгуучу',
        price: '5000 сом/ай',
        img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500',
        desc: 'Профессионалдуу деңгээлде сервердик бөлүктү иштеп чыгууну үйрөнүңүз.',
        fullDesc: 'Бул курста сиз Python программалоо тилинин негиздеринен баштап, эң популярдуу Django жана FastAPI фреймворкторун терең үйрөнөсүз. Биз маалыматтар базасы (PostgreSQL), API түзүү жана серверди жөндөө боюнча практикалык иштерди жасайбыз. Курстун аягында сиз татаал веб-системаларды өз алдынча кура аласыз.',
        modules: ['Python тереңдетилген курс', 'Django Framework & ORM', 'FastAPI жана Микросервистер', 'PostgreSQL жана Маалыматтар архитектурасы', 'Docker жана Деплой (Серверге чыгаруу)']
    },
    {
        id: 2,
        title: 'Frontend Mastery (React)',
        price: '4500 сом/ай',
        img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500',
        desc: 'Заманбап жана интерактивдүү веб-сайттарды түзүүнүн чебери болуңуз.',
        fullDesc: 'Веб-сайттын визуалдык бөлүгүн түзүүнү үйрөнүңүз. Биз HTML/CSSтен баштап, заманбап JavaScript ES6+ жана эң жогорку суроо-талапка ээ болгон React.js китепканасын үйрөтөбүз. Курста реалдуу долбоорлорду: интернет-дүкөндөрдү жана административдик панелдерди иштеп чыгабыз.',
        modules: ['HTML5 & CSS3 (Flexbox/Grid)', 'JavaScript (DOM, Async, API)', 'React.js (Hooks, Context)', 'Redux Toolkit', 'Next.js жана SEO']
    },
    {
        id: 3,
        title: 'UI/UX Про-Дизайн',
        price: '4000 сом/ай',
        img: 'https://i.pinimg.com/736x/60/f1/bf/60f1bf4eba8a6a42a2f6bbe47ac92256.jpg',
        desc: 'Колдонуучуларга ыңгайлуу интерфейстерди Figma аркылуу түзүңүз.',
        fullDesc: 'Дизайн — бул жөн гана кооздук эмес, бул логика. Сиз Figma программасында профессионалдуу иштөөнү, колдонуучунун психологиясын изилдөөнү (UX research) жана визуалдык стилди (UI) түзүүнү үйрөнөсүз. Курстун сонунда сизде мобилдик жана веб-тиркемелердин даяр портфолиосу болот.',
        modules: ['UX-изилдөө жана анализ', 'Figma: Компоненттер жана Варианттар', 'Веб жана Мобилдик дизайн', 'Интерактивдүү Прототиптөө', 'Портфолио түзүү (Behance)']
    },
    {
        id: 4,
        title: 'Android телефондоруна тиркеме жасоо',
        price: '5500 сом/ай',
        img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500',
        desc: 'Kotlin тили менен дүйнөлүк деңгээлдеги тиркемелерди жасоо.',
        fullDesc: 'Дүйнөдөгү эң көп колдонулган платформа үчүн тиркеме жазууну үйрөнүңүз. Биз Kotlin тилин жана Android Studio чөйрөсүн колдонобуз. Сиз тиркеменин архитектурасын (MVVM), маалыматтарды сактоону жана Google Play Store-го чыгарууну толугу менен өздөштүрөсүз.',
        modules: ['Kotlin негиздери', 'Android SDK жана Компоненттер', 'Retrofit (Network)', 'Jetpack Compose (Modern UI)', 'Firebase жана Пуш-билдирүүлөр']
    },
    {
        id: 5,
        title: 'Java Spring Enterprise',
        price: '5000 сом/ай',
        img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500',
        desc: 'Ири банктык жана корпоративдик системаларды түзүү.',
        fullDesc: 'Java — бул эң туруктуу программалоо тили. Биз Spring Boot фреймворкун колдонуп, микросервистик архитектураны үйрөтөбүз. Бул багыт банк, мамлекеттик сектор жана ири эл аралык IT компанияларда абдан популярдуу.',
        modules: ['Java Core & OOP', 'Spring Boot & Security', 'Hibernate (JPA)', 'Microservices Architecture', 'JUnit Тестирлөө']
    },
    {
        id: 6,
        title: 'iPhone/iPad үчүн тиркеме жасоо',
        price: '6000 сом/ай',
        img: 'https://i.pinimg.com/1200x/36/a1/49/36a1495b4283c0ef18dde9cac51cccd9.jpg',
        desc: 'iPhone жана iPad үчүн премиум тиркемелерди жаратуу.',
        fullDesc: 'Apple экосистемасына кирүү. Сиз Swift тилин жана заманбап SwiftUI фреймворкун үйрөнөсүз. Тиркемелердин дизайнын Apple стандарттарына (Human Interface Guidelines) ылайык иштеп чыгууну жана App Store-го жарыялоону үйрөтөбүз.',
        modules: ['Swift Language', 'SwiftUI жана UIKit', 'Core Data', 'Combine Framework', 'App Store Publishing']
    },
    {
        id: 7,
        title: 'QA Автоматташтыруу',
        price: '4000 сом/ай',
        img: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=500',
        desc: 'Программалардын сапатын текшерип, каталарды табуучу адис болуңуз.',
        fullDesc: 'Тестирлөөчү — программанын сапатын көзөмөлдөөчү маанилүү адис. Сиз кол менен тестирлөөнү (Manual) жана Java же Python аркылуу авто-тесттерди жазууну үйрөнөсүз. Продукцияны катасыз чыгаруунун сырларын өздөштүрөсүз.',
        modules: ['Тестирлөө негиздери', 'Selenium & Appium', 'API Тестирлөө (Postman)', 'SQL негиздери', 'Jira жана Bug Tracking']
    },
    {
        id: 8,
        title: 'Графикалык дизайн',
        price: '3500 сом/ай',
        img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500',
        desc: 'Логотип жана бренд түзүү өнөрүн үйрөнүңүз.',
        fullDesc: 'Бул курста сиз Photoshop жана Illustrator программаларын профессионалдуу колдонууну үйрөнөсүз. Логотиптерди түзүү, брендбук иштеп чыгуу жана басма материалдарын даярдоо боюнча практикалык билим аласыз.',
        modules: ['Adobe Illustrator', 'Adobe Photoshop', 'Типографика жана Түстөр', 'Брендинг жана Логотип', 'Принт-дизайн']
    },
    {
        id: 9,
        title: 'Маалыматтар базасы (SQL)',
        price: '3500 сом/ай',
        img: 'https://i.pinimg.com/736x/e9/56/a0/e956a08618dd691c53c9404feba70f99.jpg',
        desc: 'Чоң маалыматтарды башкаруу жана оптималдаштыруу.',
        fullDesc: 'Ар бир чоң системанын артында маалымат базасы турат. Сиз SQL тилин, маалыматтардын архитектурасын түзүүнү жана сурамдарды оптималдаштырууну үйрөнөсүз. Бул билим бардык программисттер үчүн зарыл.',
        modules: ['SQL Syntax', 'PostgreSQL & MySQL', 'Database Design', 'Optimization & Indexes', 'NoSQL (MongoDB)']
    },
    {
        id: 10,
        title: 'Киберкоопсуздук',
        price: '5500 сом/ай',
        img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500',
        desc: 'Системаларды хакердик чабуулдардан коргоону үйрөнүңүз.',
        fullDesc: 'Коопсуздук — бүгүнкү күндүн эң башкы приоритети. Сиз системадагы тешиктерди табууну, тармактык коопсуздукту жана этикалык хакерликтин негиздерин үйрөнөсүз. Ири корпорациялардын маалыматын коргоочу адис болуңуз.',
        modules: ['Network Security', 'Linux Admin', 'Ethical Hacking basics', 'Cryptography', 'Pentesting']
    },
    {
        id: 11,
        title: 'Game Dev (Unity)',
        price: '5000 сом/ай',
        img: 'https://i.pinimg.com/1200x/35/70/00/357000b7ab22719ce6acf718e75b7991.jpg',
        desc: 'C# жана Unity аркылуу өз оюнуңузду жаратыңыз.',
        fullDesc: 'Оюн дүйнөсүнө кадам шилтеңиз. Сиз Unity моторунда 2D жана 3D оюндарды иштеп чыгууну, физиканы, анимацияны жана C# тилинде скрипт жазууну үйрөнөсүз.',
        modules: ['C# Language basics', 'Unity Interface & Physics', '3D Modeling basics', 'Game Logic', 'Mobile Game Optimization']
    },
    {
        id: 12,
        title: 'DevOps Инженер',
        price: '6500 сом/ай',
        img: 'https://i.pinimg.com/1200x/94/be/c7/94bec7eb4b94ea3479b7329c93170f2c.jpg',
        desc: 'Инфраструктураны автоматташтыруу жана башкаруу.',
        fullDesc: 'Иштеп чыгуу жана эксплуатациялоонун ортосундагы көпүрө. Сиз серверлерди автоматтык түрдө жайгаштырууну, булут технологияларын (AWS, Google Cloud) жана Docker/Kubernetes инструменттерин үйрөнөсүз.',
        modules: ['Linux Server Admin', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Cloud Computing', 'Monitoring tools']
    },
    {
        id: 13,
        title: 'Маалыматтарды талдоо жана Жасалма интеллект',
        price: '6000 сом/ай',
        img: 'https://i.pinimg.com/736x/c5/2b/c3/c52bc3618212a635f86a4e57f7bc2921.jpg',
        desc: 'Маалыматтарды анализдөө жана Жасалма Интеллект.',
        fullDesc: 'Келечектин кесиби. Маалыматтардан баалуу жыйынтыктарды чыгарууну, машиналык үйрөтүүнү (Machine Learning) жана нейрондук тармактарды түзүүнү үйрөнүңүз.',
        modules: ['Python for Data Analysis', 'Pandas & NumPy', 'Machine Learning models', 'Deep Learning', 'Data Visualization']
    },
    {
        id: 14,
        title: 'Кыймылдуу графика жана анимация түзүү',
        price: '4500 сом/ай',
        img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500',
        desc: 'Анимацияланган видеолорду жана эффекттерди түзүү.',
        fullDesc: 'After Effects программасында сыйкыр жаратыңыз. Жарнамалык роликтер, анимацияланган логотиптер жана 2D/3D эффекттерди түзүүнү үйрөнөсүз.',
        modules: ['After Effects basics', 'Motion Graphics', 'Character Animation', 'Video Editing (Premiere Pro)', 'Visual Effects (VFX)']
    },
    {
        id: 15,
        title: 'Project Management (IT)',
        price: '4000 сом/ай',
        img: 'https://i.pinimg.com/1200x/cf/4c/11/cf4c112c5575dba37e8ee54255d602a0.jpg',
        desc: 'IT командаларды жана долбоорлорду туура башкаруу.',
        fullDesc: 'Команданы кантип башкаруу керек? Agile, Scrum жана Kanban методологияларын үйрөнүңүз. Кардар менен программисттин ортосунда тил табышып, долбоорду ийгиликтүү бүтүрүүнүн жолдорун үйрөтөбүз.',
        modules: ['Agile & Scrum', 'Jira & Trello', 'Team Communication', 'Risk Management', 'Business Analysis basics']
    }
];

function render() {
    const container = document.getElementById('course-container');
    container.innerHTML = kursData.map(c => `
        <div class="course-card">
            <img src="${c.img}" alt="${c.title}">
            <p class="price">${c.price}</p>
            <h3>${c.title}</h3>
            <p style="font-size:14px; color:#64748b; margin-bottom:15px">${c.desc}</p>
            <button class="btn-more" onclick="openDrawer(${c.id})">Толук маалымат</button>
        </div>
    `).join('');

    const select = document.getElementById('course-select');
    select.innerHTML = '<option value="">Курсту тандаңыз</option>' + 
                      kursData.map(c => `<option value="${c.title}">${c.title}</option>`).join('');
}

function openDrawer(id) {
    const c = kursData.find(i => i.id === id);
    const content = document.getElementById('drawer-data');
    content.innerHTML = `
        <img src="${c.img}" alt="${c.title}">
        <h2>${c.title}</h2>
        <div class="full-desc">${c.fullDesc}</div>
        <h3 style="margin-bottom:15px">Курстун программасы:</h3>
        <ul>
            ${c.modules.map(m => `<li><i class="fas fa-check-circle"></i> ${m}</li>`).join('')}
        </ul>
        <button class="btn-primary" style="width:100%; margin-top:30px" onclick="scrollToForm('${c.title}')">Азыр катталуу</button>
    `;
    document.getElementById('side-drawer').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function scrollToForm(title) {
    closeDrawer();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('course-select').value = title;
}

function closeDrawer() {
    document.getElementById('side-drawer').classList.remove('open');
    document.body.style.overflow = 'auto';
}

window.onload = render;


// Форманы иштетүү жана билдирүү чыгаруу
document.querySelector('.simple-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Баракчанын жаңыланып кетишин токтотот
    
    // Билдирүү чыгаруу
    alert("Рахмат! Сиздин байланышыңыз кабыл алынды. Жакын арада менеджер сизге чалат.");
    
    // Форманы тазалоо
    this.reset();
});

// Эгер сиз баскычка onclick="thanks()" деп жазгыңыз келсе, бул функцияны да кошуп коюңуз:
function thanks() {
    alert("Рахмат! Сиздин байланышыңыз кабыл алынды. Жакын арада менеджер сизге чалат.");
}