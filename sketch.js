var myImage;
var myLine;
var myRect;
var currentMonth;

function preload(){
    myImage = loadImage("images/flamingo.jpg");
    myLine = loadImage("images/line.png");
    myRect = loadImage("images/transparentRect.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
    backgroundImage(myImage);
    backgroundImage(myRect);  
   // back rect
    /*noStroke();

    fill(255,255,255,70)
    rect(width/8,height/16, width/5, width/5, 20);
    rect(width/4*2-100,height/2-160, 200, 200, 20);
    rect(width/4*3-100,height/2-160, 200, 200, 20);
    */
    
    
    // hour, minute, second
    //translate(0, -1*(height/20));
    fill(255);
    textSize(width/8);
    textAlign(CENTER); 
    textFont('Oswald');
    text(hour(),width/4,height/2);//height/3*1
    text(minute(),width/4*2,height/2);//height/3*2
    text(second(),width/4*3,height/2);//height/3*3
    
    //year month day
    /* Why this doesn't work???????
    if（month()==1)｛currentMonth="January"}
    if（month()==2）｛currentMonth="February"}
    if（month()==3）｛currentMonth="March"}
    if（month()==4）｛currentMonth="April"}
    if（month()==5）｛currentMonth="May"}
    if（month()==6）｛currentMonth="June"}
    if（month()==7）｛currentMonth="July"}
    if（month()==8）｛currentMonth="August"};
    if（month()==9）｛currentMonth="September"};
    if（month()==10）｛currentMonth="October"};
    if（month()==11）｛currentMonth="November"};
    if（month()==12) {currentMonth="December"};
    */
    currentMonth="December"
    fill(255);
    textSize(width/30);
    textAlign(CENTER); 
    textFont('Titillium Web');
    text(year()+"    " +currentMonth+"    "+day()  ,width/2,height/4*3);
    
    //my name
    textSize(width/100);
    textAlign(CENTER); 
    textFont('Raleway');
    text("Li Yanfei © Copyright",width/2,height-height/32);
    
    // line 
    backgroundImage(myLine);
    
    
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    //image(myImage,width/2,height/2,windowWidth,windowHeight);
     
}
function backgroundImage(img) {
    
    var x = 0;
    var y = 0;
    var w = width;
    var h = height;
    // default offset is center
    var offsetX = 0.5;
    var offsetY = 0.5;

    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;

    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;

    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    // fill image in dest. rectangle
    image(img, cx, cy, cw, ch,  x, y, w, h);
}












