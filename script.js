let hearts = 0;
let copy = 0;
let coins = 100;

// Select all heart count display elements
const heartDisplays = document.querySelectorAll('#heart-btn .heart_count');

// Loop through all heart icons
document.querySelectorAll('.card_heart_icon').forEach(function (icon) {
  icon.addEventListener('click', function () {
    hearts++;

    // Update all heart count displays
    heartDisplays.forEach(function (display) {
      display.textContent = hearts;
    });
  });
});

const copyDisplays = document.querySelectorAll('#copy_btn .copy_count');

document.querySelectorAll('.copy_button_card').forEach(function (btn) {
  btn.addEventListener('click', function () {
    copy++;

    // Update all copy count displays
    copyDisplays.forEach(function (display) {
      display.textContent = copy;
    });

    // Found Number 
    let card = btn.closest('.card');
    let number = card.querySelector('.number').textContent;

    // Clipboard-এ কপি করা + alert দেখানো
    navigator.clipboard
      .writeText(number)
      .then(function () {
        alert(`✅ Copied: ${number}`);
      })
      
  });
});




