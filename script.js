const container = document.getElementById("screenContainer");
const addBtn = document.getElementById("addScreen");
const clearBtn = document.getElementById("clearAll");

let count = 0;
const max = 50;


function addScreen(){

    if(count >= max){
        alert("Maximum 50 screens allowed");
        return;
    }

    count++;

    let card = document.createElement("div");
    card.className = "screen-card";

    card.innerHTML = `
        <div class="screen-header">
            <h3>Screen #${count}</h3>
            <button class="remove-btn">❌</button>
        </div>

        <div class="url-box">
            <input class="video-url" placeholder="Paste URL here">
            <button class="load-btn">▶ Load</button>
        </div>

        <div class="player-box">
            <iframe class="video-frame"></iframe>
        </div>

        <button class="fullscreen-btn">
            ⛶ Fullscreen
        </button>
    `;


    container.appendChild(card);


    let input = card.querySelector(".video-url");
    let load = card.querySelector(".load-btn");
    let frame = card.querySelector(".video-frame");


    load.onclick = function(){

        let url = input.value.trim();

        if(url){
            frame.src = url;
        }

    };


    card.querySelector(".fullscreen-btn").onclick=function(){

        frame.requestFullscreen();

    };


    card.querySelector(".remove-btn").onclick=function(){

        card.remove();

    };

}



addBtn.onclick=function(){

    addScreen();

};



clearBtn.onclick=function(){

    container.innerHTML="";
    count=0;

};


addScreen();
