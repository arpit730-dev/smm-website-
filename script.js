const container = document.getElementById("screenContainer");
const addBtn = document.getElementById("addScreen");
const clearBtn = document.getElementById("clearAll");

let screenCount = 0;
const maxScreens = 50;


// Add Screen Function

function addScreen(savedURL = "") {

    if(screenCount >= maxScreens){
        alert("Maximum 50 screens allowed");
        return;
    }


    screenCount++;


    const card = document.createElement("div");
    card.className = "screen-card";


    card.innerHTML = `

    <div class="screen-header">

        <h3>Screen #${screenCount}</h3>

        <button class="lock-btn">
        🔓
        </button>

    </div>


    <div class="url-box">

        <input 
        class="video-url"
        placeholder="Paste URL here..."
        value="${savedURL}"
        >

        <button class="load-btn">
        ▶ Load
        </button>

    </div>


    <div class="player-box">

        <iframe 
        class="video-frame"
        allowfullscreen>
        </iframe>

    </div>


    <div class="screen-actions">

        <button class="fullscreen-btn">
        ⛶ Fullscreen
        </button>


        <button class="remove-btn">
        ❌ Remove
        </button>

    </div>

    `;


    container.appendChild(card);



    // Load Button

    const loadBtn = card.querySelector(".load-btn");
    const input = card.querySelector(".video-url");
    const frame = card.querySelector(".video-frame");


    loadBtn.onclick = ()=>{

        frame.src = input.value;

        saveData();

    };



    // Fullscreen

    card.querySelector(".fullscreen-btn").onclick = ()=>{

        frame.requestFullscreen();

    };



    // Remove

    card.querySelector(".remove-btn").onclick = ()=>{

        card.remove();

        saveData();

    };


}



// Add button

addBtn.onclick = ()=>{

    addScreen();

};



// Clear All

clearBtn.onclick = ()=>{

    container.innerHTML="";
    screenCount=0;

    localStorage.removeItem("screens");

};




// Save URLs

function saveData(){

    let data=[];

    document.querySelectorAll(".video-url")
    .forEach(input=>{

        data.push(input.value);

    });


    localStorage.setItem(
        "screens",
        JSON.stringify(data)
    );

}



// Load Saved Screens

window.onload = ()=>{


    let saved =
    JSON.parse(localStorage.getItem("screens"));


    if(saved && saved.length){

        saved.forEach(url=>{

            addScreen(url);

        });

    }
    else{

        addScreen();

    }


};
