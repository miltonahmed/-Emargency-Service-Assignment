
let hearts = 0;

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
