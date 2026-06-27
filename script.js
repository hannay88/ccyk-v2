const content = document.getElementById("content");

function showPage(page){

  if(page==="home"){
    content.innerHTML=`
      <h2>❤️ Welcome to ချစ်ခြင်း ရင်ခုန်</h2>

      <div style="background:#f7f7ff;padding:15px;border-radius:15px;margin-top:15px;">
        <h3>Today's Best Match 💕</h3>

        <p><b>မောင်အောင်</b></p>

        <p>📍 Yangon, Myanmar</p>

        <p>💖 Match Score : <b>94%</b></p>

        <button onclick="contact()">
        Contact Request
        </button>
      </div>

      <br>

      <h3>❤️ Love Quote</h3>

      <p>
      "Respect is more attractive than beauty."
      </p>
    `;
  }

  if(page==="search"){
    content.innerHTML=`
      <h2>🔍 Search</h2>

      <input placeholder="Country">

      <input placeholder="City">

      <select>
      <option>Looking For</option>
      <option>Male</option>
      <option>Female</option>
      <option>LGBTQ+</option>
      </select>

      <br><br>

      <button onclick="alert('AI Match Coming Soon')">
      Search
      </button>
    `;
  }

  if(page==="post"){
    content.innerHTML=`
      <h2>➕ Create Profile</h2>

      <input placeholder="Name">

      <input placeholder="Age">

      <textarea
      placeholder="About Me">
      </textarea>

      <br>

      <button onclick="generateProfile()">
      AI Generate
      </button>
    `;
  }

  if(page==="games"){
    content.innerHTML=`
      <h2>🎮 Mini Games</h2>

      <button onclick="loveQuiz()">
      ❤️ Love Quiz
      </button>

      <br><br>

      <button onclick="heartTap()">
      💓 Heart Tap
      </button>
    `;
  }

}

function contact(){

alert(
"Wave Pay / AYA Pay\n\n+959750005038\nHan Nay Oo\n\n10,000 MMK"
);

}

function generateProfile(){

alert(
"AI Profile Generated Successfully ❤️"
);

}

function loveQuiz(){

alert(
"💕 Love Score : 92%"
);

}

function heartTap(){

alert(
"❤️ +1 Heart"
);

}

showPage("home");
