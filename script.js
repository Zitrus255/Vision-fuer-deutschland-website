document.addEventListener("DOMContentLoaded", () => {
  // Tab Navigation
  const buttons = document.querySelectorAll("nav button");
  const sections = document.querySelectorAll(".tab-content");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab");

      // Alle Tabs & Sections deaktivieren
      sections.forEach(section => section.classList.remove("active"));
      buttons.forEach(btn => btn.classList.remove("active"));

      // Angeclickte Tabs & Section aktivieren
      const activeSection = document.getElementById(target);
      if(activeSection) {
        activeSection.classList.add("active");
        button.classList.add("active");
      }
    });
  });

  // Dark Mode Schalter
  const darkModeSwitch = document.getElementById('darkModeSwitch');
  if(darkModeSwitch) {
    darkModeSwitch.addEventListener('change', () => {
      if(darkModeSwitch.checked){
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  }

  // Sprachumschaltung
  const languageSelect = document.getElementById("languageSelect");
  if(languageSelect){
    // Übersetzungen hier als Objekt (kannst du auch extern auslagern)
    const translations = {
      de: {
        headerTitle: "Willkommen bei VFD",
        // ... weitere Übersetzungen
      },
      en: {
        headerTitle: "Welcome to VFD",
        // ... weitere Übersetzungen
      }
    };

    // Funktion zum Umschalten der Sprache
    function switchLanguage(lang) {
      const t = translations[lang];
      if(!t) return;

      document.getElementById("header-title").textContent = t.headerTitle;
      // ... hier alle anderen Texte aktualisieren wie im vorherigen Beispiel
    }

    // Eventlistener
    languageSelect.addEventListener("change", (e) => {
      switchLanguage(e.target.value);
    });

    // Initiale Sprache setzen
    switchLanguage(languageSelect.value);
  }
});

// Impressum Modal öffnen/schließen
const impressumBtn = document.getElementById('impressumBtn');
const impressumModal = document.getElementById('impressumModal');
const closeImpressum = document.getElementById('closeImpressum');

if(impressumBtn && impressumModal && closeImpressum){
  impressumBtn.addEventListener('click', () => {
    impressumModal.style.display = 'block';
  });

  closeImpressum.addEventListener('click', () => {
    impressumModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === impressumModal) {
      impressumModal.style.display = 'none';
    }
  });
}
