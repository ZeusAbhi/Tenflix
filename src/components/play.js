

function Play() { 
    var vid = document.getElementById("myvideo"); 
    if (vid.paused) {
        vid.play();
        
    }
     else {
     vid.pause();
   }
   
} 


function PlayCard() { 
    var vid = document.getElementById("vis"); 
    if (vid.paused) {
        vid.play();
        
    }
   
}
function PlayCardPause() { 
     
    var vid = document.getElementById("vis"); 
    if (vid.play) {
        vid.pause();
        
    }
   
}
export {Play,PlayCard,PlayCardPause};


