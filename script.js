let comments = [
    {
        fullName: "Hamidou SOW",
        job: "Junior Fron-end Developer",
        imageSrc: "images/image-john.jpg",
        comment: " Comment from Hamidou "
    },
    {
        fullName: "Tanya Sinclair",
        job: "UX Engineer",
        imageSrc: "images/image-tanya.jpg",
        comment: " I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. "
    },
    {
        fullName: "John Tarkpor",
        job: "Junior Front-end Developer",
        imageSrc: "images/image-john.jpg",
        comment: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident aboutstarting up as a professional developer."
    }    
]

// slide and buttons 

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

// class for cards
class Comment {
    constructor(fullName, job, comment, image) {
        this.fullName = fullName,
        this.job = job,
        this.comment = comment,
        this.image = image
    }
}

//change content 
function changeComment() {
    return innerComment = document.querySelector('.comment');    
}

function changeImage() {    
    return imageSrc = document.querySelector('.right-content img') 
}

function changeName() {
    return fullName = document.querySelector(".author-fullname")
}

function changeAuthorJob() {
    return authorJob = document.querySelector('.author-job')
}

for(let item of comments) {
    let commentCard = new Comment(
        item.fullName,         
        item.job,          
        item.comment,
        item.imageSrc        
    )

    // console.log(commentCard);    
    newCard(commentCard);  
    changeComment().innerHTML = commentCard.comment;
    changeImage().src = commentCard.image; 
    changeAuthorJob().innerHTML = commentCard.job;  
         
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

