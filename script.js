document.addEventListener("DOMContentLoaded", () => {
const buttons = document.querySelectorAll("nav button");
const sections = document.querySelectorAll(".tab-content");

buttons.forEach(button => {
button.addEventListener("click", () => {
const target = button.getAttribute("data-tab");

```
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
```

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
});
// Impressum Modal öffnen/schließen
const impressumBtn = document.getElementById('impressumBtn');
const impressumModal = document.getElementById('impressumModal');
const closeImpressum = document.getElementById('closeImpressum');

impressumBtn.addEventListener('click', () => {
impressumModal.style.display = 'block';
});

closeImpressum.addEventListener('click', () => {
impressumModal.style.display = 'none';
});

window\.addEventListener('click', (event) => {
if (event.target === impressumModal) {
impressumModal.style.display = 'none';
}
});

hier ist das ganze script wenn du es auch direkt dort reinbauen willst
