
const translations = {
    ru: {
        "home": "Главная страница",
        "tariffs": "Тарифы",
        "cinerama": "Cinerama",
        "connect": "Подключить",
        "already_connected": "Уже подключили",
        "price": "Стоимость",
        "day_speed": "Дневная скорость",
        "night_speed": "Ночная скорость",
        "devices": "устройств",
        "apply": "Оставить заявку",
        "offer_conditions": "Не упусти возможность подключить тариф по выгодным условиям",
        "call": "Позвонить",
        "telegram": "Telegram",
        "subscription": "Подписка",
        "cinerama_description": "Cinerama.uz — это онлайн-платформа для просмотра фильмов, сериалов и мультфильмов в хорошем качестве, с доступом через TAS-IX.",
        "subscribe_now": "Подпишитесь сейчас",
        "channels": "ТВ каналов",
        "movies_series": "Фильмов и сериалов",
        "cartoons": "Мультфильмов",
        "uz_videos": "Уз видео",
        "langCode": "Uz",
        "router": "Роутер",
        "number": "Номер",
        "fromTillDevice": "до 11-12 устройств",
        "fio": "Ф.И.О.",
        "siteOffer": "Сайт предлагает подписку для удобного просмотра контента без рекламы, а также онлайн-телевидение.",
        "100mbit": "100 МБит/с",
        "40mbit": "40 Мбит/с",
        "80mbit": "80 Мбит/с",
        "145DollarToMonth": "За 145 000 сум в месяц вы получаете",
        "fill_form": "Заполняя форму заявки на сайте, вы соглашаетесь с условиями публичной оферты и даете согласие на обработку ваших персональных данных в соответствии с действующим законодательством. Ваши данные будут использоваться исключительно в целях, связанных с оказанием услуг, и не будут переданы третьим лицам без вашего согласия."
    },
    uz: {
        "home": "Bosh sahifa",
        "tariffs": "Tariflar",
        "cinerama": "Cinerama",
        "connect": "Ulanish",
        "already_connected": "Allaqachon ulangan",
        "price": "Narxi",
        "day_speed": "Kunduzgi tezlik",
        "night_speed": "Tungi tezlik",
        "devices": "gacha qurilmalar",
        "apply": "Ariza qoldirish",
        "offer_conditions": "Qulay shartlar asosida tarifni ulash imkoniyatini boy bermang",
        "call": "Qo'ng'iroq qiling",
        "telegram": "Telegram",
        "subscription": "Obuna",
        "cinerama_description": "Cinerama.uz - yuqori sifatli filmlar, seriallar va multfilmlarni TAS-IX orqali tomosha qilish uchun onlayn platforma.",
        "subscribe_now": "Obuna bo'ling",
        "channels": "TV kanallar",
        "movies_series": "Filmlar va seriallar",
        "cartoons": "Multfilmlar",
        "uz_videos": "O'z videolar",
        "langCode": "Ру",
        "router": "Router",
        "number": "Nomer",
        "fromTillDevice": "11-12 ta qurilmagacha",
        "fio": "F.I.Sh",
        "siteOffer": "Sayt kontentni reklamasiz, shuningdek, onlayn televideniyeni qulay ko'rish uchun obunani taklif qiladi.",
        "100mbit": "100 MBit/s",
        "40mbit": "40 MBit/s",
        "80mbit": "80 MBit/s",
        "145DollarToMonth": "Oyiga 145 000 so'm evaziga siz quyidagilarga ega bo'lasiz",
        "fill_form": "Saytda ariza formasini to'ldirish orqali siz jamoatchilik taklifining shartlari bilan tanishganligingizni tasdiqlaysiz va shaxsiy ma'lumotlaringizni amaldagi qonunchilikka muvofiq qayta ishlashga rozilik bildirasiz. Sizning ma'lumotlaringiz faqat xizmatlar ko'rsatish bilan bog'liq maqsadlarda ishlatiladi va uchinchi shaxslarga sizning roziligingizsiz uzatilmaydi."


    }
};

// Load translations from JSON files (use fetch or hard-coded JSON)
async function loadTranslations(lang) {
    return translations?.[lang];
}

async function changeLanguage(lang) {
    // Get the current language from localStorage or default to 'uz'
    let currentLang = localStorage.getItem('language132465') || 'uz';

    // Determine the opposite language
    const newLang = currentLang === 'uz' ? 'ru' : 'uz';

    // Load the translations for the new language
    const dictionary = await loadTranslations(newLang);

    // Apply the translations to the page
    applyTranslations(dictionary);

    // Update the lang attribute in the <html> element
    document.documentElement.setAttribute("lang", newLang);

    // Save the new language in localStorage
    localStorage.setItem('language132465', newLang);
}

function applyTranslations(dictionary) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = dictionary[key] || element.textContent;
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    // Check if language is already stored in localStorage, otherwise default to 'uz'
    const currentLang = localStorage.getItem('language132465') || 'uz';

    // Load the translations for the current language
    const dictionary = await loadTranslations(currentLang);

    // Apply the translations to the page
    applyTranslations(dictionary);

    // Set the lang attribute in the <html> element to the current language
    document.documentElement.setAttribute("lang", currentLang);
});

// Set default language
