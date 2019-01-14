var imgs = [];
var currentIndex = 0; 
var imgList = document.querySelectorAll(".img-item"); // feh 6 swar
var close = document.getElementById("close"); // deh 3shan a2fel el swra
var item = document.querySelector(".lightbox-item"); // deh part bta3 background-imag 3shan kol ma ados 3la swra ttle3
var lightBoxContainer = document.querySelector(".lightbox-container") // deh 3shan swra block or none

var next = document.getElementById("next"); // b3mel next swra
var prev = document.getElementById("prev") // b3mel previous swra
for(var i=0;i<imgList.length ; i++) // ha3di sora sora
    {
        imgs.push(imgList[i])
        imgList[i].addEventListener("click" , function(event){
            var targetSrc = event.target.src; // target : btshel element el tam 3liha event bs a7na 3ayzeen msar el swra
            
         currentIndex =   imgs.indexOf(event.target);
          lightBoxContainer.classList.add("show"); 
            
        item.style.backgroundImage ="url("+targetSrc+")" ;
        })
    }

close.addEventListener("click", function(){
          lightBoxContainer.classList.remove("show");  
    
})


next.addEventListener("click" , function(){
    
    currentIndex++;
    if(currentIndex == imgList.length)
        {
            currentIndex = 0;
        }
    
item.style.backgroundImage ="url("+imgList[currentIndex].src+")" ;
    
    
})

document.addEventListener("keydown" , function(eventInfo){
    
    if(eventInfo.keyCode == 39)
        {
            
            
            
                currentIndex++;
    if(currentIndex == imgList.length)
        {
            currentIndex = 0;
        }
    
item.style.backgroundImage ="url("+imgList[currentIndex].src+")" ;
    
        }
    else if(eventInfo.keyCode == 37)
        {
            currentIndex--;
    if(currentIndex < 0)
        {
            currentIndex = imgList.length -1;
        }
item.style.backgroundImage ="url("+imgList[currentIndex].src+")" ;
      
        }
    else if (eventInfo.keyCode == 27)
        {
              lightBoxContainer.classList.remove("show");  
        
        }
})



prev.addEventListener("click" , function(){
    
    currentIndex--;
    if(currentIndex < 0)
        {
            currentIndex = imgList.length -1;
        }
item.style.backgroundImage ="url("+imgList[currentIndex].src+")" ;
   



})

document.addEventListener("keydown" ,function(e){ // dah event gabo mn el (e) a3mel console.log (e) hygeb keycode dah lma a3mel swra w click 3la escape t3mel al8a2

    if (e.keyCode == 27) {

        lightBoxContainer.style.display == "none";
    }
})