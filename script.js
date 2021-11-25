let comments = [
    {
        fullName: "Hamidou SOW",
        job: "Junior Fron-end Developer",
        profilPicture: "./src",
        comment: " I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. "
    },
    {
        fullName: "Tanya Sinclair",
        job: "UX Engineer",
        profilPicture: "./src",
        comment: " I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. "
    },
    {
        fullName: "John Tarkpor",
        job: "Junior Front-end Developer",
        profilPicture: "./src",
        comment: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident aboutstarting up as a professional developer."
    }    
]

// slide continue

let comment = 0;

let slidePrev = () => {
    comment -= 1;
    if(comment < 0) {
        comment = comments.length - 1
    }
    console.log(comments[comment])
}

let slideNext = () => {
    comment += 1;
    if(comment > comments.length - 1) {
        comment = 0
    }
    console.log(comments[comment]) 
}


let previousBtn = document.getElementById("btnPrevious");
let nextBtn = document.getElementById("btnNext");

previousBtn.addEventListener('click', slidePrev);
nextBtn.addEventListener('click', slideNext);

class Comment {
    constructor(fullName, job, comment, image) {
        this.fullName = fullName,
        this.job = job,
        this.comment = comment,
        this.image = image
    }
}

// class for cards 
let innerComment = document.getElementsByClassName('comment');
let authorJob = document.querySelector('#author-job');  
let authorFullName = document.querySelector('.author-full-name');


// document.addEventListener('onload', () => {    
//     authorJob.innerHtml = "un métier";
// })

for(let item of comments) {
    let commentCard = new Comment(
        item.fullName,         
        item.job,          
        item.comment         
    )

    // console.log(commentCard.fullName);    
    newCard();
}

function newCard() {
    let carouselItem = document.createElement("div");
    carouselItem.setAttribute( "class", "carousel-item");
    document.querySelector(".carousel-inner").appendChild(carouselItem);

    /* creeate the childrens inside new carousel-item-content, from origin .carousel-item-content */
    let carouselItemContent = document.querySelector(".carousel-item-content");

    
    let newChildrens = carouselItemContent.cloneNode(true);
    carouselItem.append(newChildrens);    
}





















function newFunction() {
    next();
}

