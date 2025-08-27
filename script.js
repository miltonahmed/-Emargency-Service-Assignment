
  
  let coins = 100;

  const coinDisplay = document.querySelector("#coin-btn span");

  // কয়েন আপডেট করার ফাংশন
  function updateCoins() {
    coinDisplay.textContent = coins;
  }

  function copyNumber(number) {
    alert("Copied: " + number);
  }

  // কল করার ফাংশন
  function callNumber(number) {
    if (coins < 20) {
      alert("আপনার কাছে যথেষ্ট কয়েন নেই! (ন্যূনতম ২০ coin দরকার)");
      return;
    }

    // কয়েন কমাও
    coins -= 20;
    updateCoins();

    // ডায়লার ওপেন হবে (মোবাইলে)
    window.location.href = "tel:" + number;

    // হিস্ট্রি তে যোগ করো
    let historyBox = document.getElementById("call-history-list");
    let li = document.createElement("li");
    li.innerText = number + " - " + new Date().toLocaleTimeString();
    historyBox.appendChild(li);
  }

  // হিস্ট্রি ক্লিয়ার
  function clearHistory() {
    document.getElementById("call-history-list").innerHTML = "";
  }

  // লোড হলে কয়েন আপডেট হবে
  window.onload = updateCoins;

