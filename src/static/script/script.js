//HOME SECTION
let iHome = 0;
let images = [];
let slideTime = 3000;
let home =  document.querySelector(".home")

images[0] = '/static/media/images/Home_1.jpg';
images[1] = '/static/media/images/Home_2.jpg';
images[2] = '/static/media/images/Home_3.jpg';
images[3] = '/static/media/images/Home_4.jpg';

home.style.backgroundImage = "url(" + images[0] + ")" ;
// CHI SIAMO SECTION



// ATTIVITA SECTION


// GALLERY SECTION
function gallery() {
    for (let i = 0; i < 15; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "image";
        document.querySelector(".gallery .main .sez .sezImg").appendChild(newDiv);
        console.log(i);
    }

    let currentStatus;
    let sezGallery = document.querySelector(".gallery .main .sez");
    let buttonGallery = document.querySelector(".gallery .main .button");
    currentStatus = "close";

    buttonGallery.addEventListener("Click", () => {
        console.log("bella");

        switch(currentStatus){
            case "open":
                // switch to open
                sezGallery.style.height = "594px;"
                currentStatus = "close"
                break;
            case "close":
                // switch to close
                sezGallery.style.height = "0px;"
                currentStatus = "open"
                break;
        }
    }) 
}
gallery();
// NEWS SECTION
let newsNumber = 0;

class NewsDiv {

    constructor(title, description, imgPath){
        newsNumber++;

        this.title = title;
        this.description = description;
        this.imgPath = imgPath;
        this.newsDivMargin = 80;
        this.newsDivHeight = 240;
        this.newsDivWidth = 500;
        this.newsDivImgWidth = 200;
        this.newsDivTextTitleSize = 20;
        this.newsDivTextDescriptionSize = 16;
        this.newsDivTextGap = 14;
        this.centralDotHeight = 26;

        if(newsNumber == 1){
            this.marginTop = 0;
        } else if(newsNumber == 2){
            this.marginTop = this.newsDivMargin + this.newsDivMargin + 0;
        } else {
            this.marginTop = this.newsDivMargin;
        }
        this.marginTop += "px";
        
        if(newsNumber % 2 == 0){
            this.side = "sx";
        } else {
            this.side = "dx";
        }
        if(newsNumber == 4){
            this.lastShown = true;
        } else {
            this.lastShown = false;
        }

        this.newsDivMargin += "px";
        this.newsDivHeight += "px";
        this.newsDivWidth += "px";
        this.newsDivImgWidth += "px";
        this.newsDivTextTitleSize += "px";
        this.newsDivTextDescriptionSize += "px";
        this.newsDivTextGap += "px";
        // centralDotHeight needed as integer below (not as a string)
    }

    insertInHTML(){
        if(this.side == "dx"){
            // dx
            let newsDivDX = document.createElement("div");
            newsDivDX.style.width = "calc(" + this.newsDivWidth + " + 34px)";
            newsDivDX.style.height = this.newsDivHeight;
            newsDivDX.style.display = "flex";
            newsDivDX.style.flexDirection = "row-reverse";
            newsDivDX.style.marginTop = this.marginTop;
            document.querySelector(".news .main .rightSection").appendChild(newsDivDX);

            let newsDivDXBody = document.createElement("div");
            newsDivDXBody.style.display = "flex";
            newsDivDXBody.style.flexDirection = "row-reverse";
            newsDivDXBody.style.background = "#165976";
            newsDivDXBody.style.borderRadius = "30px";
            newsDivDXBody.style.height = "100%";
            newsDivDXBody.style.width = this.newsDivWidth;
            newsDivDX.appendChild(newsDivDXBody);

            let newsDivDXArrow = document.createElement("img");
            newsDivDXArrow.src = "/static/media/svgComponent/newsArrow.svg";
            newsDivDXArrow.style.width = "34px";
            newsDivDXArrow.style.position = "relative";
            newsDivDXArrow.style.left = "11px";
            newsDivDX.appendChild(newsDivDXArrow);

            let newsDivDXImg = document.createElement("div");
            newsDivDXImg.style.backgroundImage = "url('" + this.imgPath +"')";
            newsDivDXImg.style.backgroundSize = "cover";
            newsDivDXImg.style.backgroundRepeat = "no-repeat";
            newsDivDXImg.style.borderTopRightRadius = "28px";
            newsDivDXImg.style.borderBottomRightRadius = "28px";
            newsDivDXImg.style.height = "100%";
            newsDivDXImg.style.width = this.newsDivImgWidth;
            newsDivDXBody.appendChild(newsDivDXImg);

            let newsDivDXText = document.createElement("div");
            newsDivDXText.style.display = "flex";
            newsDivDXText.style.flexDirection = "column";
            newsDivDXText.style.height = "100%";
            newsDivDXText.style.width = "calc(100% - " + this.newsDivImgWidth + " - 36px)";
            newsDivDXText.style.padding = "18px";
            newsDivDXBody.appendChild(newsDivDXText);

            let newsDivDXTextTitle = document.createElement("a");
            newsDivDXTextTitle.innerHTML = this.title;
            newsDivDXTextTitle.style.color = "white";
            newsDivDXTextTitle.style.fontFamily = "'Roboto', sans-serif";
            newsDivDXTextTitle.style.fontSize = this.newsDivTextTitleSize;
            newsDivDXText.appendChild(newsDivDXTextTitle);

            let newsDivDXTextDescription = document.createElement("a");
            newsDivDXTextDescription.innerHTML = this.description;
            newsDivDXTextDescription.style.color = "#B7B7B7";
            newsDivDXTextDescription.style.fontFamily = "'Roboto', sans-serif";
            newsDivDXTextDescription.style.fontSize = this.newsDivTextDescriptionSize;
            newsDivDXTextDescription.style.paddingTop = this.newsDivTextGap;
            newsDivDXText.appendChild(newsDivDXTextDescription);
        
            this.#generateCentralLine(newsDivDXImg.offsetTop, newsDivDXImg.clientHeight);
        } else if(this.side == "sx"){
            // sx
            let newsDivSX = document.createElement("div");
            newsDivSX.style.width = "calc(" + this.newsDivWidth + " + 34px)";
            newsDivSX.style.height = this.newsDivHeight;
            newsDivSX.style.display = "flex";
            newsDivSX.style.flexDirection = "row";
            newsDivSX.style.marginTop = this.marginTop;
            document.querySelector(".news .main .leftSection").appendChild(newsDivSX);

            let newsDivSXBody = document.createElement("div");
            newsDivSXBody.style.display = "flex";
            newsDivSXBody.style.flexDirection = "row";
            newsDivSXBody.style.background = "#165976";
            newsDivSXBody.style.borderRadius = "30px";
            newsDivSXBody.style.height = "100%";
            newsDivSXBody.style.width = this.newsDivWidth;
            newsDivSX.appendChild(newsDivSXBody);

            let newsDivSXArrow = document.createElement("img");
            newsDivSXArrow.src = "/static/media/svgComponent/newsArrow.svg";
            newsDivSXArrow.style.width = "34px";
            newsDivSXArrow.style.transform = "rotate(180deg)";
            newsDivSXArrow.style.position = "relative";
            newsDivSXArrow.style.left = "-11px";
            newsDivSX.appendChild(newsDivSXArrow);

            let newsDivSXImg = document.createElement("div");
            newsDivSXImg.style.backgroundImage = "url('" + this.imgPath +"')";
            newsDivSXImg.style.backgroundSize = "cover";
            newsDivSXImg.style.backgroundRepeat = "no-repeat";
            newsDivSXImg.style.borderTopLeftRadius = "28px";
            newsDivSXImg.style.borderBottomLeftRadius = "28px";
            newsDivSXImg.style.height = "100%";
            newsDivSXImg.style.width = this.newsDivImgWidth;
            newsDivSXBody.appendChild(newsDivSXImg);

            let newsDivSXText = document.createElement("div");
            newsDivSXText.style.display = "flex";
            newsDivSXText.style.flexDirection = "column";
            newsDivSXText.style.height = "100%";
            newsDivSXText.style.width = "calc(100% - " + this.newsDivImgWidth + " - 36px)";
            newsDivSXText.style.padding = "18px";
            newsDivSXBody.appendChild(newsDivSXText);

            let newsDivSXTextTitle = document.createElement("a");
            newsDivSXTextTitle.innerHTML = this.title;
            newsDivSXTextTitle.style.color = "white";
            newsDivSXTextTitle.style.fontFamily = "'Roboto', sans-serif";
            newsDivSXTextTitle.style.fontSize = this.newsDivTextTitleSize;
            newsDivSXText.appendChild(newsDivSXTextTitle);

            let newsDivSXTextDescription = document.createElement("a");
            newsDivSXTextDescription.innerHTML = this.description;
            newsDivSXTextDescription.style.color = "#B7B7B7";
            newsDivSXTextDescription.style.fontFamily = "'Roboto', sans-serif";
            newsDivSXTextDescription.style.fontSize = this.newsDivTextDescriptionSize;
            newsDivSXTextDescription.style.paddingTop = this.newsDivTextGap;
            newsDivSXText.appendChild(newsDivSXTextDescription);
        
            this.#generateCentralLine(newsDivSXImg.offsetTop, newsDivSXImg.clientHeight);
        }
    }

    #generateCentralLine(arrowOffsetTop, arrowHeight){
        let newsDivCentralPoint = arrowOffsetTop + arrowHeight / 2;
        let relativePointOffsetTopValue = (newsDivCentralPoint - document.querySelector(".news .main .centralSection").offsetTop) - this.centralDotHeight / 2;
        let relativePointOffsetTop = relativePointOffsetTopValue + "px";
        let relativeBarOffsetTopValue = relativePointOffsetTopValue + this.centralDotHeight / 2;
        let relativeBarOffsetTop = relativeBarOffsetTopValue + "px";

        let newsCentralDot = document.createElement("div");
        newsCentralDot.style.height = this.centralDotHeight + "px";
        newsCentralDot.style.width = this.centralDotHeight + "px";
        newsCentralDot.style.background = "#165976";
        newsCentralDot.style.borderRadius = "50%";
        newsCentralDot.style.position = "absolute";
        newsCentralDot.style.marginTop = relativePointOffsetTop;
        document.querySelector(".news .main .centralSection").appendChild(newsCentralDot);

        let line1Height = 30;
        let line2Height = 20;

        if(!this.lastShown){
            let newsCentralLine = document.createElement("div");
            newsCentralLine.style.height = "calc(" + this.newsDivMargin + "*2)";
            newsCentralLine.style.width = "10px";
            newsCentralLine.style.marginTop = relativeBarOffsetTop;
            newsCentralLine.style.background = "#165976";
            newsCentralLine.style.position = "absolute";
            document.querySelector(".news .main .centralSection").appendChild(newsCentralLine);
        } else {
            let newsCentralFinalLine1 = document.createElement("div");
            newsCentralFinalLine1.style.height = line1Height + "px";
            newsCentralFinalLine1.style.width = "10px";
            newsCentralFinalLine1.style.marginTop = relativeBarOffsetTop;
            newsCentralFinalLine1.style.background = "#165976";
            newsCentralFinalLine1.style.position = "absolute";
            document.querySelector(".news .main .centralSection").appendChild(newsCentralFinalLine1);

            let offset = line1Height;
            for(let a = 0; a <= 3; a++){
                let marginTop = relativeBarOffsetTopValue + offset;
                if(a % 2 != 0){
                    offset += line2Height;
                    let newsCentralFinalLine2 = document.createElement("div");
                    newsCentralFinalLine2.style.height = line2Height + "px";
                    newsCentralFinalLine2.style.width = "10px";
                    newsCentralFinalLine2.style.marginTop = marginTop + "px";
                    newsCentralFinalLine2.style.background = "#165976";
                    newsCentralFinalLine2.style.position = "absolute";
                    document.querySelector(".news .main .centralSection").appendChild(newsCentralFinalLine2);
                } else {
                    offset += line2Height - 8;
                }
            }
        }
    }
}


// FOOTER SECTION
let messageDiv = document.querySelector(".footer .mainDiv .message");
let footerButton = document.querySelector(".footer .mainDiv .message .button");
let footerButtonText = footerButton.querySelector("a");
let currentStatus;

// default settings
currentStatus = "map"
footerButton.style.background = "#4C7384";
footerButtonText.innerHTML = "Messaggi";
messageDiv.style.transform = "translateX(calc(100% - 51px))";

footerButton.addEventListener("click", () => {
    console.log("ciao");
    switch(currentStatus){
        case "map":
            // switch to message
            currentStatus = "message"
            footerButton.style.background = "#73C880";
            footerButtonText.innerHTML = "Mappa";
            messageDiv.style.transform = "translateX(0)";
            break;
        case "message":
            // switch to map
            currentStatus = "map"
            footerButton.style.background = "#4C7384";
            footerButtonText.innerHTML = "Messaggi";
            messageDiv.style.transform = "translateX(calc(100% - 51px))";
            break;
    }
})
