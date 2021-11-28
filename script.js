let comments = [
    {
        fullName: "Hamidou SOW",
        job: "Junior Fron-end Developer",
        imageSrc: "images/image-john.jpg",
        comment: " I'm very happy because now i'm able to do back-end developement, this bootcamp helps me a lot and now I'm working as developer full stack",
        classList: "carousel-item"
    },    
    {
        fullName: "John Tarkpor",
        job: "Junior Front-end Developer",
        imageSrc: "images/image-john.jpg",
        comment: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident aboutstarting up as a professional developer.",
        classList: "carousel-item"
    }    
]

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
    changeImage().src = commentCard.image;  
    changeComment().innerHTML = commentCard.comment;    
    changeName().innerHTML = commentCard.fullName;  
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

// slide and buttons

let count = 0;
let carouselItems = document.querySelectorAll(".carousel-item");
let nmbrItem = carouselItems.length
console.log(nmbrItem);

let slideNext = () => {
    carouselItems[count].classList.remove("active");

    if(count < nmbrItem - 1) {
        count++
    }
    else {
        count = 0;
    }

    carouselItems[count].classList.add("active"); 
    // console.log(count)    
}


let slidePrev = () => {
    carouselItems[count].classList.remove("active");

    if(count > 0) {
        count--
    }
    else {
        count = nmbrItem - 1;
    }

    carouselItems[count].classList.add("active");
    

    // console.log(carouselItems[length].classList)    
}

function keyPress(e) {
    console.log(e)
    if(e.keyCode === 39) {
        slideNext();
    } else if(e.keyCode === 37) {
        slidePrev()
    }
}

let previousBtn = document.getElementById("btnPrevious");
let nextBtn = document.getElementById("btnNext");

previousBtn.addEventListener('click', slidePrev);
nextBtn.addEventListener('click', slideNext);



document.addEventListener('keydown', keyPress)





























function newFunction() {
    next();
}

