

function Play() { 
    var vid = document.getElementById("myvideo"); 
    if (vid.paused) {
        vid.play();
        
    }
     else {
     vid.pause();
   }
   
} 


export default Play;