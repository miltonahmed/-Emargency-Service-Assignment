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




const coinDisplay = document.querySelector('#coin_btn .coins_count');
function updateCoins() {
  coinDisplay.textContent = coins;
}

document.querySelectorAll('.call_button').forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (coins < 20) {
      alert('❌ Not enough coins! Minimum 20 coins required to call.');

      return;
    }

    coins -= 20;
    updateCoins();

    let card = btn.closest('.card');
    let subtitle = card.querySelector('.sub_title').textContent;
    let number = card.querySelector('.number').textContent;
    alert(`📞 Calling ${subtitle} (${number})`);

    // ADD History
    let historyList = document.getElementById('call-history-list');
    let li = document.createElement('li');
    li.className = 'p-4 mb-2 bg-white rounded-lg shadow flex flex-col'; // card style

    li.innerHTML = `
         <div class="font-semibold text-lg text-[#111}">${subtitle}</div>
         <div class="flex justify-between items-center text-lg text-[#5c5c5c] mt-1">
          <span>📞 ${number}</span>
          <span class="text-lg font-normal text-[#111] ">${new Date().toLocaleTimeString()}</span>
         </div>
  `;
    historyList.appendChild(li);
  });
});

