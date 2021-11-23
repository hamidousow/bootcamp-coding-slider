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

class Comment {
    constructor(fullName, job, comment, image) {
        this.fullName = fullName,
        this.job = job,
        this.comment = comment,
        this.image = image
    }
}

let innerComment = document.getElementsByClassName('comment');
let authorJob = document.querySelector('#author-job');  
let authorFullName = document.querySelector('.author-full-name');


document.addEventListener('onload', () => {    
    authorJob.innerHtml = "un métier";
})

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

    // let carouselContent = document.createElement("div");
    // carouselContent.setAttribute("class", "carousel-item-content");
    // carouselItem.appendChild(carouselContent);

    let carouselItemContent = document.querySelector(".carousel-item-content");
    // console.log(carouselItemContent.childNodes);

    // let newChildrens = carouselItemContent.childNodes;      
    // console.log(newChildrens);
    
    // carouselItem.append(newChildrens);

    let newChildrens = carouselItemContent.cloneNode(true);
    carouselItem.append(newChildrens);

    // carouselItem.append()
        
    // carouselItem.appendChild(carouselContent);

    
    // const arrCarouselItem = [carouselItemParent]
    

    // let leftContent = document.createElement("div");
    // let rightContent = document.createElement("div");
    // leftContent.setAttribute("class", "left-content");
    // rightContent.setAttribute("class", "right-content");
    // carouselContent.append(leftContent, rightContent);
}












