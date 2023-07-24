let music=new Audio('audio/11.mp3');



const songs=[
    {
        id:1,
        songName:`Naina Ashq Na Ho <br>
        <div class="subtitle">Republic Day</div>`,
        poster:"arjit_img/1.jpg",
    },
    {
        id:2,
        songName:`Khairiyat <br>
        <div class="subtitle">Chhichore</div>`,
        poster:"arjit_img/2.jpg"
    },
    {
        id:3,
        songName:`Desh Mera<br>
        <div class="subtitle">Bhuj The Pride</div>`,
        poster:"arjit_img/3.jpg"
    },
    {
        id:4,
        songName:`Dhokha <br>
        <div class="subtitle">Dhokha</div>`,
        poster:"arjit_img/4.jpg"
    },
    {
        id:5,
        songName:`Tere Yaar Hoon<br>
        <div class="subtitle">Sonu ki Titu Ki Sweety</div>`,
        poster:"arjit_img/5.jpg"
    },
    {
        id:6,
        songName:`Chunar <br>
        <div class="subtitle">ABCD 2</div>`,
        poster:"arjit_img/6.jpg"
    },
    {
        id:7,
        songName:`Galti se Mistake<br>
        <div class="subtitle">Jagga Jasoos</div>`,
        poster:"arjit_img/7.jpg"
    },
    {
        id:8,
        songName:`Hamari Adhuri Kahani<br>
        <div class="subtitle">Hamari Adhuri Kahani</div>`,
        poster:"arjit_img/8.jpg"
    },
    {
        id:9,
        songName:`Neki ki Raah <br>
        <div class="subtitle">Traffic</div>`,
        poster:"arjit_img/9.jpg"
    },
    {
        id:10,
        songName:`Humdrad <br>
        <div class="subtitle">Ek Villian</div>`,
        poster:"arjit_img/10.jpg"
    },
    {
        id:11,
        songName:`Mere Yaara <br>
        <div class="subtitle">Sooryavanshi</div>`,
        poster:"arjit_img/11.jpg"
    },
    {
        id:12,
        songName:`Nashe si Chad gye<br>
        <div class="subtitle">Befikre</div>`,
        poster:"arjit_img/12.jpg"
    },
    {
        id:13,
        songName:`Ae Watan<br>
        <div class="subtitle">Raazi</div>`,
        poster:"arjit_img/13.jpg"
    },
    {
        id:14,
        songName:`Agar Tum Saath ho <br>
        <div class="subtitle">Tamashar</div>`,
        poster:"arjit_img/14.jpg"
    },
    {
        id:15,
        songName:`pachtaoge<br>
        <div class="subtitle">Jaani ve</div>`,
        poster:"arjit_img/15.jpg"
    },
    {
        id:16,
        songName:`Apna Bna le <br>
        <div class="subtitle">Bhediya</div>`,
        poster:"arjit_img/16.jpg"
    },
    {
        id:17,
        songName:`Hamdrad<br>
        <div class="subtitle">Ek villian</div>`,
        poster:"arjit_img/17.jpg"
    },
    {
        id:18,
        songName:`Kesariya<br>
        <div class="subtitle">Brahmastra</div>`,
        poster:"arjit_img/18.jpg"
    },
    {
        id:19,
        songName:`Phir aur kya chahiye <br>
        <div class="subtitle">Zara Hatke Zara Bachke</div>`,
        poster:"arjit_img/19.jpg"
    },
    {
        id:20,
        songName:`O Bedardiya<br>
        <div class="subtitle">Tu jhooti mai makkar</div>`,
        poster:"arjit_img/20.jpg"
    },


]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

let searchresult=document.getElementsByClassName('searchresult')[0] ;
songs.forEach(element =>{
      const{id,songName,poster}=element;
      let card=document.createElement('a');
      card.classList.add('card');
      card.href="#" + id;

      card.innerHTML=`
      
      <img src="${poster}" alt="">
      <div class="content">
      ${songName}
      </div>
 `;

 searchresult.appendChild(card);
});

let input=document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value=input.value.toUpperCase();
    let items=searchresult.getElementsByTagName('a');
    for(let index=0; index<items.length; index++){
        let as=items[index].getElementsByClassName('content')[0];
        let text_value=as.textContent || as.innerHTML;

        if(text_value.toUpperCase().indexOf(input_value)> -1){
            items[index].style.display="flex";
        }
        else{
            items[index].style.display="none";
        }
     if(input.value==0){
        searchresult.style.display="none";

     }
     else{
        searchresult.style.display="";
     }
    }
})
 
let mplay=document.getElementById('mplay');
let wave=document.getElementById('wave');
let gif=document.getElementById('gif');

mplay.addEventListener('click',()=>{
    if(music.paused || music.currrentTime<=0)
    {
        music.play();
        wave.classList.add('active1');
        mplay.classList.remove('bi-play-fill');
        mplay.classList.add('bi-pause-fill');
        gif.style.opacity=1;


    }
    else{
        music.pause();
        wave.classList.remove('active1');
        mplay.classList.add('bi-play-fill');
        mplay.classList.remove('bi-pause-fill');
        gif.style.opacity=0;
    }
});



let leftpop=document.getElementById('leftpop');
let rightpop=document.getElementById('rightpop');
let popsong=document.getElementsByClassName('popsong')[0];


rightpop.addEventListener('click',()=>{
    popsong.scrollLeft+=330;
});
leftpop.addEventListener('click',()=>{
    popsong.scrollLeft-=330;
});


let popartleft=document.getElementById('popartleft');
let popartright=document.getElementById('popartright');
let shri=document.getElementsByClassName('shri')[0];


popartright.addEventListener('click',()=>{
    shri.scrollLeft+=330;
});
popartleft.addEventListener('click',()=>{
    shri.scrollLeft-=330;
});

const make=()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((e)=>{
        e.style.background='rgb(105,105,105,.0)';
    })
}
const makeplay=()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
        e.classList.add('bi-play-circle-fill');
        e.classList.remove('bi-pause-circle-fill');
    })
}
let index=0;
let poster=document.getElementById('poster');
let download=document.getElementById('download');
let title=document.getElementById('title');
 Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
    index=el.target.id;
    music.src=`arjit/${index}.mp3`;
    poster.src=`arjit_img/${index}.jpg`;
    music.play();
    mplay.classList.remove('bi-play-fill');
     mplay.classList.add('bi-pause-fill');
     download.href= `arjit/${index}.mp3`;
     let songTitles=songs.filter((els)=>{
        return els.id==index;
     });
     songTitles.forEach((elss)=>{
        let{songName}=elss;
        title.innerHTML=songName;
        download.setAttribute('download',songName);
     });
     make();
     Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105, .1)";
     makeplay();
     el.target.classList.remove('bi-play-circle-fill');
     el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    })
 })
 

let currentstart =document.getElementById('currentstart');
let currentend=document.getElementById('currentend');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let musiccurr=music.currentTime;
    let dur=music.duration;
    let mini=Math.floor(dur/60);
    let sec1=Math.floor(dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentend.innerText=`${mini}:${sec1}`;
    let mini2 =Math.floor(musiccurr/60);
    let sec2=Math.floor(musiccurr%60);
    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentstart.innerText=`${mini2}:${sec2}`;

   let progress=parseInt((musiccurr/dur)*100);
   seek.value=progress;
   let seekbar=seek.value;
   bar2.style.width=`${seekbar}%`;
   dot.style.left=`${seekbar}%`;
});
seek.addEventListener('change',()=>{
    music.currentTime=seek.value * music.duration/100;
});
let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let volbar=document.getElementsByClassName('volbar')[0];
let voldot=document.getElementById('voldot');

vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a=vol.value;
    volbar.style.width=`${vol_a}%`;
    voldot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
    
});
let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    index-=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`arjit/${index}.mp3`;
    poster.src=`arjit_img/${index}.jpg`;
    music.play();
    mplay.classList.remove('bi-play-fill');
     mplay.classList.add('bi-pause-fill');
  
     let songTitles=songs.filter((els)=>{
        return els.id==index;
     });
     songTitles.forEach((elss)=>{
        let{songName}=elss;
        title.innerHTML=songName;
     });
     make();
     Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105, .1)";
     makeplay();
     el.target.classList.remove('bi-play-circle-fill');
     el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    })
 next.addEventListener('click',()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    }
    music.src=`arjit/${index}.mp3`;
    poster.src=`arjit_img/${index}.jpg`;
    music.play();
    mplay.classList.remove('bi-play-fill');
     mplay.classList.add('bi-pause-fill');
  
     let songTitles=songs.filter((els)=>{
        return els.id==index;
     });
     songTitles.forEach((elss)=>{
        let{songName}=elss;
        title.innerHTML=songName;
        download.setAttribute('download',songName);
     });
     make();
     Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105, .1)";
     makeplay();
     el.target.classList.remove('bi-play-circle-fill');
     el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    })
 



let shuffle=document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click',()=>{
  let a=shuffle.innerHTML;
  switch(a){
    case "next":
        shuffle.classList.add('bi-arrow-repeat');
        shuffle.classList.remove('bi-music-note-beamed');
        shuffle.classList.remove('bi-shuffle');
        shuffle.innerHTML='repeat';
        break;
    case "repeat":
        shuffle.classList.remove('bi-arrow-repeat');
        shuffle.classList.remove('bi-music-note-beamed');
        shuffle.classList.add('bi-shuffle');
        shuffle.innerHTML='random';
        break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML='next';
            break;

  }
});

const nextmusic=()=>{
    if(index==songs.length)
    {
        index=1;
    }
    else{
        index++;
    }

    music.src=`arjit/${index}.mp3`;
    poster.src=`arjit_img/${index}.jpg`;
    music.play();
    mplay.classList.remove('bi-play-fill');
    mplay.classList.add('bi-pause-fill');
    download.href=`arjit/${index}.mp3`;
    let songtitles=songs.filter((els)=>{
         return els.id==index;
    });
    songtitles.forEach(elss=>{
          let {songName}=elss;
          title.innerHTML=songName;
          download.setAttribute('download',songName);
    });
        make();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";
        makeplay();
        e.target.classList.remove('bi-play-circle-fill');
        e1.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}
const repeatmusic=()=>{
        index;
    
    

    music.src=`arjit/${index}.mp3`;
    poster.src=`arjit_img/${index}.jpg`;
    music.play();
    mplay.classList.remove('bi-play-fill');
    mplay.classList.add('bi-pause-fill');
    download.href=`arjit/${index}.mp3`;
    let songtitles=songs.filter((els)=>{
         return els.id==index;
    });
    songtitles.forEach(elss=>{
          let {songName}=elss;
          title.innerHTML=songName;
          download.setAttribute('download',songName);
    });
        make();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";
        makeplay();
        e.target.classList.remove('bi-play-circle-fill');
        e1.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}
const randommusic=()=>{
    if(index==songs.length)
    {
        index=1;
    }
    else{
        index=Math.floor((Math.random()*songs,length)+1);
    }


music.src=`arjit/${index}.mp3`;
poster.src=`arjit_img/${index}.jpg`;
music.play();
mplay.classList.remove('bi-play-fill');
mplay.classList.add('bi-pause-fill');
download.href=`arjit/${index}.mp3`;
let songtitles=songs.filter((els)=>{
     return els.id==index;
});
songtitles.forEach(elss=>{
      let {songName}=elss;
      title.innerHTML=songName;
      download.setAttribute('download',songName);
});
    make();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";
    makeplay();
    e.target.classList.remove('bi-play-circle-fill');
    e1.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}
music.addEventListener('ended',()=>{
   let b=shuffle.innerHTML;
   switch(b){
    case 'repeat':
        repeatmusic();
        break;
   
   case 'next':
        nextmusic();
        break;
    
   case 'random':
        randommusic();
        break;
   } 


});