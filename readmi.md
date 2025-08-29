2. How do you **create and insert a new element into the DOM**? => const
   heartDisplays = document.querySelectorAll('#heart-btn .heart_count');

   // 1. Create a new element const newDiv = document.createElement("div");
   // 3. Insert into DOM const

   container = document.getElementById("container");
   container.appendChild(newDiv);
