function changeLanguage(lang) {
    // Oculta todos los elementos con clases que comienzan con "lang-"
    document.querySelectorAll('[class^="lang-"]').forEach(el => {
        el.style.display = 'none';  // Asegúrate de que todos se oculten
    });

    // Muestra solo los elementos con la clase correspondiente
    const elements = document.querySelectorAll('.lang-' + lang);
    if (elements.length === 0) {
        console.error(`No se encontraron elementos con la clase "lang-${lang}"`);
    }
    
    elements.forEach(el => {
        el.style.display = 'block';  // Puedes usar 'block' o 'inline', depende del tipo de diseño
    });
}

// Detecta idioma del navegador o asigna un valor por defecto (ES)
document.addEventListener("DOMContentLoaded", () => {
    // Detecta el idioma del navegador, considerando solo el código principal (ej. 'en', 'es')
    const userLang = navigator.language.slice(0, 2).toLowerCase() === 'en' ? 'en' : 'es';
    
    // Establece el valor del selector de idioma
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.value = userLang;
    } else {
        console.error('No se encontró el elemento con id "language-select"');
    }

    // Cambia el idioma según el valor detectado
    changeLanguage(userLang);
});