let newsNumber = 0;

class NewsDiv {

    constructor(title, description, imgPath){
        newsNumber++;
        
        this.title = title;
        this.description = description;
        this.imgPath = imgPath;
        this.newsDivMargin = 70;
        this.newsDivHeight = 200;
        this.newsDivWidth = 420;
        this.newsDivImgWidth = 160;
        this.newsDivTextTitleSize = 18;
        this.newsDivTextDescriptionSize = 14;

        if(newsNumber == 1){
            this.marginTop = 0;
        } else if(newsNumber == 2){
            this.marginTop = this.newsDivMargin + this.newsDivMargin + 0;
        } else {
            this.marginTop = this.newsDivMargin;
        }
        this.marginTop += "px";
        
        if(newsNumber % 2 == 0){
            this.side = "dx";
        } else {
            this.side = "sx";
        }

        this.newsDivMargin += "px";
        this.newsDivHeight += "px";
        this.newsDivWidth += "px";
        this.newsDivImgWidth += "px";
        this.newsDivTextTitleSize += "px";
        this.newsDivTextDescriptionSize += "px";
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
            newsDivDXTextDescription.style.paddingTop = "10px";
            newsDivDXText.appendChild(newsDivDXTextDescription);
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
            newsDivSXTextDescription.style.paddingTop = "10px";
            newsDivSXText.appendChild(newsDivSXTextDescription);
        }
    }
}

let lastNews1 = new NewsDiv("Corsi di sci jr 2022/2023", "Ciao bambini,<br>siete pronti a ritornare in pista:<br>i maestri vi stanno aspettando!<br><br>Vai alla pagina Corsi promozionali,<br>e scarica il volantino con le informazioni per i corsi di sci junior 2022/2023", "/static/media/images/Promozionali_3.jpg");
let lastNews2 = new NewsDiv("Lorem ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", "/static/media/images/IMG_1157.jpg");
let lastNews3 = new NewsDiv("ciao", "kebab", "/static/media/images/Promozionali_3.jpg");
let lastNews4 = new NewsDiv("aigdf", "lfUHAOLIDGBAGSHBAOLGUA", "/static/media/images/Promozionali_3.jpg");

lastNews1.insertInHTML();
lastNews2.insertInHTML();
lastNews3.insertInHTML();
lastNews4.insertInHTML();
