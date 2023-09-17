let font;
let state="start";
let width=950, height=650;
let menu, about;
let back, back2, back3, backcomplete;
let eating, quiz, environment;

//about
let img1, img2, img3;
let game1, game2, game3;


//my clean environment
let bg;
let waterimg, mosquitoimg, spoonimg, toyimg;
let water, mosquito, spoon, toy;
let mosquitoshow=true; 
let watershow=true; 
let spoonshow=true; 
let toyshow=true;

let box, box2, box3, box4;


//did you know
let score=0;
let go;
let op1,op2,op3,op4;
let op5,op6,op7,op8;
let op9,op10,op11,op12;
let op13,op14,op15,op16;
let op17,op18,op19,op20;
let op21,op22,op23,op24;

//this or that menu
let congratsRes=null;
let dairy, veg, grains, fruit, protein;
let apple, broccoli, fish, grainbread, milk;
let dairy2, veg2, grains2, fruit2, protein2;
//this or that images
let yogurtimg, gatoradeimg, pearimg, airheadsimg, whitericeimg, brownriceimg, pumpkinimg, frenchfriesimg, chickenimg, pepperoniimg;
let yogurt, gatorade, pear, airheads, whiterice, brownrice, pumpkin, frenchfries, chicken, pepperoni;


function preload(){
  font=loadFont("assets/Ubuntu.ttf");
  
  apple = loadImage("assets/apple.png");
  broccoli = loadImage("assets/broccoli.png");
  fish = loadImage("assets/fish.png");
  grainbread = loadImage("assets/grainbread.png");
  milk = loadImage("assets/milk.png");
  yogurtimg=loadImage("assets/yogurt.png");
  gatoradeimg=loadImage("assets/gatorade.png");
  airheadsimg=loadImage("assets/airheads.png");
  pearimg=loadImage("assets/pear.png");
  whitericeimg=loadImage("assets/whiterice.png");
  brownriceimg=loadImage("assets/brownrice.png");
  pumpkinimg=loadImage("assets/pumpkin.png");
  frenchfriesimg=loadImage("assets/frenchfries.png");
  chickenimg=loadImage("assets/chicken.png");
  pepperoniimg=loadImage("assets/pepperoni.png");
  
  bg=loadImage("assets/bg.jpeg");
  waterimg=loadImage("assets/water.png");
  mosquitoimg=loadImage("assets/mosquito.png");
  toyimg=loadImage("assets/toy.png");
  spoonimg=loadImage("assets/spoon.png");

  img1=loadImage("about/thisorthat.png");
  img2=loadImage("about/cleanenvironment.png");
  img3=loadImage("about/didyouknow.png");
}

function setup() {
  textFont(font);
  createCanvas(width, height);
  background(255);
  //sprite button declarations
  //start
  //start
  textSize(30);
  menu = new Sprite(width/2, height/2+70, 300, 100, 'static');
  menu.text = "Start";
  menu.color = "lightgreen";
  about = new Sprite(width/2, height/2+220, 300, 100, 'static');
  about.text="About";
  about.color = "green";
  //back button
  back = new Sprite(850, height/2+220, 50, 50, 'static');
  back.x=-300; back.y=-200;
  back.text="Back"; back.textSize=17;
  back.color = "pink";
  //menu 2
  eating = new Sprite(width/2, height/2-50, 450, 90, 'static');
  eating.text = "This or That";
  eating.color = "lightgreen";
  eating.x=-600; eating.y=-500;
  
  environment = new Sprite(width/2, height/2+80, 450, 90, 'static');
  environment.text="My Clean Environment";
  environment.color = "lightblue";
  environment.x=-600; environment.y=-500;
  
  quiz = new Sprite(width/2, height/2+210, 450, 90, 'static');
  quiz.text="Did You Know?";
  quiz.color = "pink";
  quiz.x=-600; quiz.y=-500;

  //this or that
  //images
  dairy = new Sprite(width/2+230, height/2-50);
  dairy.collider="static";
  milk.resize(180,0);
  dairy.img=milk;
  dairy.x=-200; dairy.y=-800;

  veg = new Sprite(width/2-100, height/2+100);
  veg.collider="static";
  broccoli.resize(160,0);
  veg.img=broccoli;
  veg.x=-1000; veg.y=-800;

  fruit = new Sprite(width/2-100, height/2);
  fruit.collider="static";
  apple.resize(140,0);
  fruit.img=apple;
  fruit.x=-500; fruit.y=-800;

  protein = new Sprite(width/2+100, height/2+100);
  protein.collider="static";
  fish.resize(250,0);
  protein.img=fish;
  protein.x=2000; protein.y=-800;

  grains = new Sprite(width/2+100, height/2);
  grains.collider="static";
  grainbread.resize(215,0);
  grains.img=grainbread;
  grains.x=2700; grains.y=-800;

  //image buttons
  dairy2 = new Sprite(width/2+230, height/2-50, 60, 50, 'static');
  dairy2.textSize=15;
  dairy2.text="Dairy";
  dairy2.color = "lightgreen";
  dairy2.x=-1200; dairy2.y=-500;

  fruit2 = new Sprite(width/2-160, height/2-20, 60, 50, 'static');
  fruit2.textSize=15;
  fruit2.text="Fruits";
  fruit2.color = "lightgreen";
  fruit2.x=-1400; fruit2.y=-500;

  grains2 = new Sprite(width/2+25, height/2-35, 60, 50, 'static');
  grains2.textSize=15;
  grains2.text="Grains";
  grains2.color = "lightgreen";
  grains2.x=-1600; grains2.y=-500;

  veg2 = new Sprite(width/2-160, height/2+150, 85, 50, 'static');
  veg2.textSize=15;
  veg2.text="Vegetables";
  veg2.color = "lightgreen";
  veg2.x=-1500; veg2.y=-500;

  protein2 = new Sprite(width/2+40, height/2+150, 65, 50, 'static');
  protein2.textSize=15;
  protein2.text="Protein";
  protein2.color = "lightgreen";
  protein2.x=-1300; protein2.y=-500;
  //back button 2
  back2 = new Sprite(850, height/2+220, 100, 50, 'static');
  back2.x=-500; back2.y=-200;
  back2.text="Back"; back2.textSize=17;
  back2.color = "pink";
  
  //back 3
  back3 = new Sprite(850, height/2+220, 100, 50, 'static');
  back3.x=-500; back3.y=-200;
  back3.text="Back"; back2.textSize=17;
  back3.color = "teal";

  yogurt = new Sprite(width/2+100, height/2);
  yogurt.collider="static";
  yogurtimg.resize(270,0);
  yogurt.img=yogurtimg;
  yogurt.x=2700; yogurt.y=-600;

  gatorade = new Sprite(width/2+100, height/2);
  gatorade.collider="static";
  gatoradeimg.resize(290,0);
  gatorade.img=gatoradeimg;
  gatorade.x=2500; gatorade.y=-600;

  pear = new Sprite(width/2+100, height/2);
  pear.collider="static";
  pearimg.resize(200,0);
  pear.img=pearimg;
  pear.x=2700; pear.y=-600;

  airheads = new Sprite(width/2+100, height/2);
  airheads.collider="static";
  airheadsimg.resize(355,0);
  airheads.img=airheadsimg;
  airheads.x=2500; airheads.y=-600;

  whiterice = new Sprite(width/2+100, height/2);
  whiterice.collider="static";
  whitericeimg.resize(270,0);
  whiterice.img=whitericeimg;
  whiterice.x=2000; whiterice.y=-600;

  brownrice = new Sprite(width/2+100, height/2);
  brownrice.collider="static";
  brownriceimg.resize(280,0);
  brownrice.img=brownriceimg;
  brownrice.x=2200; brownrice.y=-600;

  pumpkin = new Sprite(width/2+100, height/2);
  pumpkin.collider="static";
  pumpkinimg.resize(270,0);
  pumpkin.img=pumpkinimg;
  pumpkin.x=2700; pumpkin.y=-600;

  frenchfries = new Sprite(width/2+100, height/2);
  frenchfries.collider="static";
  frenchfriesimg.resize(280,0);
  frenchfries.img=frenchfriesimg;
  frenchfries.x=2900; frenchfries.y=-600;

  pepperoni = new Sprite(width/2+100, height/2);
  pepperoni.collider="static";
  pepperoniimg.resize(315,0);
  pepperoni.img=pepperoniimg;
  pepperoni.x=1700; pepperoni.y=-600;

  chicken = new Sprite(width/2+100, height/2);
  chicken.collider="static";
  chickenimg.resize(300,0);
  chicken.img=chickenimg;
  chicken.x=1900; chicken.y=-600;

  //back complete
  backcomplete = new Sprite(width/2, height/2+80, 450, 90, 'static');
  backcomplete.text="Back";
  backcomplete.color = "lightblue";
  backcomplete.x=-600; backcomplete.y=-500;

  //did you know?
  //go button
  go = new Sprite(width/2, height/2+80, 450, 90, 'static');
  go.text="Start";
  go.color = "lightblue";
  go.x=-700; go.y=-500;
  //options
//1
  op1 = new Sprite(width/2, height/2-50, 450, 70, 'static');
  op1.text = "A: ";
  op1.color = "lightgreen";
  op1.x=-600; op1.y=-500;
  
  op2 = new Sprite(width/2, height/2+80, 450, 70, 'static');
  op2.text="B:";
  op2.color = "lightblue";
  op2.x=-600; op2.y=-500;
  
  op3 = new Sprite(width/2, height/2+210, 450, 70, 'static');
  op3.text="C:";
  op3.color = "pink";
  op3.x=-600; op3.y=-500;

  op4 = new Sprite(width/2, height/2+250, 450, 70, 'static');
  op4.text="D:";
  op4.color = "yellow";
  op4.x=-600; op4.y=-500;
  //2
  op5 = new Sprite(width/2, height/2-50, 450, 70, 'static');
  op5.text = "A: ";
  op5.color = "lightgreen";
  op5.x=-600; op5.y=-500;
  
  op6 = new Sprite(width/2, height/2+80, 450, 70, 'static');
  op6.text="B:";
  op6.color = "lightblue";
  op6.x=-600; op6.y=-500;
  
  op7 = new Sprite(width/2, height/2+210, 450, 70, 'static');
  op7.text="C:";
  op7.color = "pink";
  op7.x=-600; op7.y=-500;

  op8 = new Sprite(width/2, height/2+250, 450, 70, 'static');
  op8.text="D:";
  op8.color = "yellow";
  op8.x=-600; op8.y=-500;
  //3
  op9 = new Sprite(width/2, height/2-50, 450, 70, 'static');
  op9.text = "A: ";
  op9.color = "lightgreen";
  op9.x=-600; op9.y=-500;
  
  op10 = new Sprite(width/2, height/2+80, 450, 70, 'static');
  op10.text="B:";
  op10.color = "lightblue";
  op10.x=-600; op10.y=-500;
  
  op11 = new Sprite(width/2, height/2+210, 450, 70, 'static');
  op11.text="C:";
  op11.color = "pink";
  op11.x=-600; op11.y=-500;

  op12 = new Sprite(width/2, height/2+250, 450, 70, 'static');
  op12.text="D:";
  op12.color = "yellow";
  op12.x=-600; op12.y=-500;
  //4
  op13 = new Sprite(width/2, height/2-50, 450, 70, 'static');
  op13.text = "A: ";
  op13.color = "lightgreen";
  op13.x=-600; op13.y=-500;
  
  op14 = new Sprite(width/2, height/2+80, 450, 70, 'static');
  op14.text="B:";
  op14.color = "lightblue";
  op14.x=-600; op14.y=-500;
  
  op15 = new Sprite(width/2, height/2+210, 450, 70, 'static');
  op15.text="C:";
  op15.color = "pink";
  op15.x=-600; op15.y=-500;

  op16 = new Sprite(width/2, height/2+250, 450, 70, 'static');
  op16.text="D:";
  op16.color = "yellow";
  op16.x=-600; op16.y=-500;
  //5
  op17 = new Sprite(width/2, height/2-50, 450, 70, 'static');
  op17.text = "A: ";
  op17.color = "lightgreen";
  op17.x=-600; op17.y=-500;
  
  op18 = new Sprite(width/2, height/2+80, 450, 70, 'static');
  op18.text="B:";
  op18.color = "lightblue";
  op18.x=-600; op18.y=-500;
  
  op19 = new Sprite(width/2, height/2+210, 450, 70, 'static');
  op19.text="C:";
  op19.color = "pink";
  op19.x=-600; op19.y=-500;

  op20 = new Sprite(width/2, height/2+250, 450, 70, 'static');
  op20.text="D:";
  op20.color = "yellow";
  op20.x=-600; op20.y=-500;
  //6
  op21 = new Sprite(width/2, height/2-50, 450, 70, 'static');
  op21.text = "A: ";
  op21.color = "lightgreen";
  op21.x=-600; op21.y=-500;
  
  op22 = new Sprite(width/2, height/2+80, 450, 70, 'static');
  op22.text="B:";
  op22.color = "lightblue";
  op22.x=-600; op22.y=-500;
  
  op23 = new Sprite(width/2, height/2+210, 450, 70, 'static');
  op23.text="C:";
  op23.color = "pink";
  op23.x=-600; op23.y=-500;

  op24 = new Sprite(width/2, height/2+250, 450, 70, 'static');
  op24.text="D:";
  op24.color = "yellow";
  op24.x=-600; op24.y=-500;

  //my environment
  spoon = new Sprite(width/2+100, height/2);
  spoon.collider="static";
  spoonimg.resize(170,0);
  spoon.img=spoonimg;
  spoon.x=2700; spoon.y=-600;

  water = new Sprite(width/2+100, height/2);
  water.collider="static";
  waterimg.resize(80,0);
  water.img=waterimg;
  water.x=2900; water.y=-600;

  toy = new Sprite(width/2+100, height/2);
  toy.collider="static";
  toyimg.resize(230,0);
  toy.img=toyimg;
  toy.x=1700; toy.y=-600;

  mosquito = new Sprite(width/2+100, height/2);
  mosquito.collider="static";
  mosquitoimg.resize(180,0);
  mosquito.img=mosquitoimg;
  mosquito.x=1900; mosquito.y=-600;

  //boxes
  box = new Sprite(width/2+230, height/2-50, 175, 140, 'static');
  box.textSize=15;
  box.text="Pest control: Getting rid \nof insects can help \nstop diseases like \nmalaria and Zika virus\n\n[Close]";
  box.color = "white";
  box.x=-1200; box.y=-500;

  box2 = new Sprite(width/2+230, height/2-50, 175, 140, 'static');
  box2.textSize=15;
  box2.text="Dirty water should \nnot be drunk\nto prevent cholera\n and dysentry\n\n[Close]";
  box2.color = "white";
  box2.x=-1200; box2.y=-500;

  box3 = new Sprite(width/2+230, height/2-50, 175, 140, 'static');
  box3.textSize=15;
  box3.text="Picking up your\ntoys helps prevent\ntripping and falling\n\n[Close]";
  box3.color = "white";
  box3.x=-1200; box3.y=-500;

  box4 = new Sprite(width/2+230, height/2-50, 175, 140, 'static');
  box4.textSize=15;
  box4.text="Cleaning your utensils\nreduces the chances\nof food contamination\n\n[Close]";
  box4.color = "white";
  box4.x=-1200; box4.y=-500;

  //about
  game1 = new Sprite(width/2+100, height/2);
  game1.collider="static";
  img1.resize(180,0);
  game1.img=img1;
  game1.x=-1700; game1.y=-600;

  game2 = new Sprite(width/2+100, height/2);
  game2.collider="static";
  img2.resize(180,0);
  game2.img=img2;
  game2.x=-1700; game2.y=-600;

  game3 = new Sprite(width/2+100, height/2);
  game3.collider="static";
  img3.resize(180,0);
  game3.img=img3;
  game3.x=-1700; game3.y=-600;
}

function draw() {
  if (state=="start"){
    background("pink");
    eating.x=width/2; eating.y=-540;
    environment.x=width/2; environment.y=-890;
    quiz.x=width/2; quiz.y=-220;
    
    textAlign(CENTER)
    menu.x=width/2; menu.y=height/2+70;
    about.x=width/2; about.y=height/2+220;
    textSize(40);
    text("Welcome to",width/2, height/2-170);
    textSize(100);;
    text("HealthMasters", width/2, height/2-60);
      if (about.mouse.presses()){
        state="about";
      }
      else if (menu.mouse.presses()){
        state="menu";
      }
  }
  if (state=="about"){
    background("yellow");
    menu.x=-200; menu.y=-200;
    about.x=-200; about.y=-200;

    textAlign(CENTER);
    textSize(62);
    text("Why was this game made?", width/2, height/2-230);
    rect(90, height/2-210, 770, 500);
    textSize(30);
    text("To educate youth in an engaging way about \ngood healthcare choices and basic knowledge.", width/2, height/2-160);
    line(275, 230, 675, 230);
    textSize(25);
    text("In this game, you have the ability to play 3 fun activities \nabout different aspects of healthcare:", width/2, height/2-50);
    textSize(15);
    textAlign(LEFT);
    text("This or That explores healthy eating choices, helping users \nbuild a balanced meal from the choices given.", 410, height/2+30);
    text("My Clean Environment encourages users to maintain a tidy \nliving space and shows why it corresponds to your health.", 410, height/2+120);
    text("Did You Know? is a quiz on common health questions, \nencouraging young kids to follow good habits.", 410, height/2+210);


    game1.x=250; game1.y=height/2+40;
    game2.x=250; game2.y=height/2+130;
    game3.x=250; game3.y=height/2+216;
    //back button
    back.x=905; back.y=height/2+280;
    if (back.mouse.presses()){
        state="start";
        back.x=-300; back.y=-200;
      game1.x=-250; game1.y=-540;
    game2.x=-250; game2.y=-1130;
    game3.x=-250; game3.y=-220;
      }
  }
  if (state=="menu"){
    background("aliceblue");
    back.x=905; back.y=height/2+280;
    if (back.mouse.presses()){
        state="start";
        back.x=-300; back.y=-200;
      eating.x=width/2; eating.y=-540;
    environment.x=width/2; environment.y=-890;
    quiz.x=width/2; quiz.y=-220;
    }
    //weird bug
    go.x=-1600; go.y=-1000;
    water.x=-760; water.y=height/2+95;
      toy.x=-width/2+50; toy.y=-500;
      spoon.x=-120; spoon.y=-500;
      mosquito.x=-600; mosquito.y=height/2-70;
    //
    
      watershow=true;
      spoonshow=true;
      toyshow=true;
      mosquitoshow=true;
    //
    //
    dairy2.collider="static";
      dairy2.color="lightgreen";
      fruit2.collider="static";
      fruit2.color="lightgreen";
      grains2.collider="static";
      grains2.color="lightgreen";
      veg2.collider="static";
      veg2.color="lightgreen";
      protein2.collider="static";
      protein2.color="lightgreen";
    //
    menu.x=-200; menu.y=-200;
    about.x=-200; about.y=-200;
    
    textSize(62);
    text("Activities", width/2, height/2-230);
    eating.x=width/2; eating.y=height/2-40;
    environment.x=width/2; environment.y=height/2+90;
    quiz.x=width/2; quiz.y=height/2+220;
    
    rect(200, 120, 550, 90);
    textSize(20);
    if (eating.mouse.hovering()==false&&quiz.mouse.hovering()==false&&environment.mouse.hovering()==false){
    text("Click on an activity to get started! \nYou can also hover over one to learn more about it.", width/2, height/2-165);
    }
    
    if (eating.mouse.hovering()){
      text("This game will help you learn about different \ncategories each meal should include by having you \npick between two options.", width/2, height/2-175);
    }
    if (quiz.mouse.hovering()){
      text("This game will quiz you on common health \nquestions to help build better habits in your life.", width/2, height/2-170);
    }
    if (environment.mouse.hovering()){
      text("This game will have you pick up household \nitems to show the importance of cleanliness \nto prevent disease.", width/2, height/2-175);
    }
    
    if (eating.mouse.presses()){
        state="healthy eating";
      }
    else if (quiz.mouse.presses()){
        state="health quiz";
      }
    else if (environment.mouse.presses()){
        state="clean environment";
    }
  }

  if (state!="start"&&state!="about"&&state!="menu"){
    back.x=-905; back.y=height/2+280;
    environment.x=-600; environment.y=-500;
    eating.x=-600; eating.y=-500;
    quiz.x=-600; quiz.y=-500;
  if (state=="healthy eating"){//something about healthy eating choices, potentially a this or that game (2 options) building a nutritous plate
      background("pink");
    textSize(60);
      text("This or That", width/2, 100);
      circle(width/2-70, height/2+60, 450);
  //images
  dairy.x=width/2+230; dairy.y= height/2-50
  veg.x=width/2-150; veg.y=height/2+150;
  fruit.x=width/2-160; fruit.y=height/2-40;
  protein.x=width/2+40; protein.y=height/2+150;
  grains.x=width/2+25; grains.y=height/2-40;
//buttons
    dairy2.x=width/2+230; dairy2.y= height/2-50;
    fruit2.x=width/2-160; fruit2.y=height/2-20;
    grains2.x=width/2+25; grains2.y=height/2-35;
    veg2.x=width/2-160; veg2.y=height/2+150;
    protein2.x=width/2+40; protein2.y=height/2+150;
  
    
      back3.x=850; back3.y=607;
    }
    
    if (dairy2.mouse.presses()||fruit2.mouse.presses()||grains2.mouse.presses()||veg2.mouse.presses()||protein2.mouse.presses()||back3.mouse.presses()){
      //images
  dairy.x=-500; dairy.y=-1000;
  veg.x=-800; veg.y=-1000;
  fruit.x=-1000; fruit.y=-1000;
  protein.x=-300; protein.y=-1000;
  grains.x=-1300; grains.y=-1000;
//buttons
    dairy2.x=2000; dairy2.y=-1000;
    fruit2.x=2100; fruit2.y=-1000;
    grains2.x=2200; grains2.y=-1000;
    veg2.x=2300; veg2.y=-1000;
    protein2.x=2400; protein2.y=-1000;
      
    if (dairy2.mouse.presses()){
        state="dairy";
    }
    if (fruit2.mouse.presses()){
        state="fruit";
      }
    if (grains2.mouse.presses()){
        state="grains";
      }
    if (veg2.mouse.presses()){
        state="veg";
      
      }
    if (protein2.mouse.presses()){
        state="protein";
        
      }
    if (back3.mouse.presses()){
      state="menu";
      back3.x=-850; back3.y=-607;
    }
      if (dairy2.mouse.presses()||fruit2.mouse.presses()||grains2.mouse.presses()||veg2.mouse.presses()||protein2.mouse.presses()){
        
      back3.x=-850; back3.y=-607;
      }
    }

    if (state=="dairy"){
    background("aliceblue");
        textSize(80);
      textAlign(CENTER);
      text("Dairy", 200, 100);
      rect(width/2-50, 20, 450, 100);
      textAlign(LEFT);
      textSize(20);
      text("What is dairy? Dairy can be things like yogurt, \nmilk, ice cream, etc. In general, we want \nto pick choices that have low sugar values.", width/2-25, 50);
      textAlign(CENTER);
      rect(50, 160, 400, 400);
      rect(500, 160, 400, 400);
      textSize(30);
      text("Yogurt shake", 250, 530);
      text("Gatorade", 700, 530);
      textSize(35);
      back2.x=850; back2.y=607;
      
      gatorade.x=700; gatorade.y=340;
      yogurt.x=250; yogurt.y=340;
      //on click
      if (yogurt.mouse.presses()){
        congratsRes=true;
        dairy2.collider="none";
        dairy2.color="grey";
      }
      else if (gatorade.mouse.presses()){
        congratsRes=false;
      }

      if (congratsRes){
        text("Good job!", width/2, 620);
      }
      if (congratsRes==false){
        text("Try again!", width/2, 620);
      }
      if (back2.mouse.presses()){
        state="healthy eating";
        back2.x=-850; back2.y=-607;
        gatorade.x=-700; gatorade.y=-340;
        yogurt.x=-250; yogurt.y=-340;
        congratsRes=null;
      }
      }
    if (state=="fruit"){
      background("plum");
      textSize(80);
      textAlign(CENTER);
      text("Fruits", 200, 100);
      rect(width/2-50, 20, 450, 100);
      textAlign(LEFT);
      textSize(20);
      text("What are fruits? Fruits can be apples, \nbananas, grapes, etc. All fruits are good for \nyou, but fruit flavored food might not be!", width/2-25, 50);
      textAlign(CENTER);
      rect(50, 160, 400, 400);
      rect(500, 160, 400, 400);
      textSize(30);
      text("Watermelon Airheads", 250, 530);
      text("Pear", 700, 530);
      textSize(35);
      back2.x=850; back2.y=607;
      
      pear.x=700; pear.y=340;
      airheads.x=250; airheads.y=340;
      //on click
      if (pear.mouse.presses()){
        congratsRes=true;
        fruit2.collider="none";
        fruit2.color="grey";
      }
      else if (airheads.mouse.presses()){
        congratsRes=false;
      }

      if (congratsRes){
        text("Good job!", width/2, 620);
      }
      if (congratsRes==false){
        text("Try again!", width/2, 620);
      }
      if (back2.mouse.presses()){
        state="healthy eating";
        back2.x=-850; back2.y=-607;
        pear.x=-700; pear.y=-340;
        airheads.x=-250; airheads.y=-340;
        congratsRes=null;
      }
    }
    if (state=="grains"){
      background("tan");
      textSize(80);
      textAlign(CENTER);
      text("Grains", 200, 100);
      rect(width/2-50, 20, 450, 100);
      textAlign(LEFT);
      textSize(18);
      text("What are grains? Grains are things like bread, \npasta, rice, etc. We want to eat whole grains, like \nwhole-wheat bread, instead of refined grains, like \nwhite bread.", width/2-25, 46);
      textAlign(CENTER);
      rect(50, 160, 400, 400);
      rect(500, 160, 400, 400);
      textSize(30);
      text("White rice", 250, 530);
      text("Brown rice", 700, 530);
      textSize(35);
      back2.x=850; back2.y=607;
      
      brownrice.x=700; brownrice.y=340;
      whiterice.x=250; whiterice.y=340;
      //on click
      if (brownrice.mouse.presses()){
        congratsRes=true;
        grains2.collider="none";
        grains2.color="grey";
      }
      else if (whiterice.mouse.presses()){
        congratsRes=false;
      }

      if (congratsRes){
        text("Good job!", width/2, 620);
      }
      if (congratsRes==false){
        text("Try again!", width/2, 620);
      }
      if (back2.mouse.presses()){
        state="healthy eating";
        back2.x=-850; back2.y=-607;
        brownrice.x=-700; brownrice.y=-340;
        whiterice.x=-250; whiterice.y=-340;
        congratsRes=null;
      }
    }
    if (state=="veg"){
      background("lightgreen");
      textSize(80);
      textAlign(CENTER);
      text("Vegetables", 250, 100);
      rect(width/2+50, 20, 355, 100);
      textAlign(LEFT);
      textSize(17);
      text("What are vegetables? Vegetables can be \ncabbage, corn, asparagus, etc. However, \nfrying vegetables can lessen the benefits of \neating them.", width/2+60, 48);
      textAlign(CENTER);
      rect(50, 160, 400, 400);
      rect(500, 160, 400, 400);
      textSize(30);
      text("Pumpkin", 250, 530);
      text("French fries", 700, 530);
      textSize(35);
      back2.x=850; back2.y=607;
      
      frenchfries.x=700; frenchfries.y=340;
      pumpkin.x=250; pumpkin.y=340;
      //on click
      if (pumpkin.mouse.presses()){
        congratsRes=true;
        veg2.collider="none";
        veg2.color="grey";
      }
      else if (frenchfries.mouse.presses()){
        congratsRes=false;
      }

      if (congratsRes){
        text("Good job!", width/2, 620);
      }
      if (congratsRes==false){
        text("Try again!", width/2, 620);
      }
      if (back2.mouse.presses()){
        state="healthy eating";
        back2.x=-850; back2.y=-607;
        frenchfries.x=-700; frenchfries.y=-340;
        pumpkin.x=-250; pumpkin.y=-340;
        congratsRes=null;
      }
    }
    if (state=="protein"){
      background("grey");
      textSize(80);
      textAlign(CENTER);
      text("Protein", 200, 100);
      rect(width/2-50, 20, 450, 100);
      textAlign(LEFT);
      textSize(19);
      text("What is protein? Protein can be things like beans, \nfish, nuts, etc. Try not to eat processed meats like \nbacon or hot dogs.", width/2-28, 50);
      textAlign(CENTER);
      rect(50, 160, 400, 400);
      rect(500, 160, 400, 400);
      textSize(30);
      text("Chicken", 250, 530);
      text("Pepperoni", 700, 530);
      textSize(35);
      back2.x=850; back2.y=607;
      
      pepperoni.x=700; pepperoni.y=340;
      chicken.x=250; chicken.y=340;
      //on click
      if (chicken.mouse.presses()){
        congratsRes=true;
        protein2.collider="none";
        protein2.color="grey";
      }
      else if (pepperoni.mouse.presses()){
        congratsRes=false;
      }

      if (congratsRes){
        text("Good job!", width/2, 620);
      }
      if (congratsRes==false){
        text("Try again!", width/2, 620);
      }
      if (back2.mouse.presses()){
        state="healthy eating";
        back2.x=-850; back2.y=-607;
        pepperoni.x=-700; pepperoni.y=-340;
        chicken.x=-250; chicken.y=-340;
        congratsRes=null;
      }
    }
    if (dairy2.collider=="none"&&fruit2.collider=="none"&&grains2.collider=="none"&&veg2.collider=="none"&&protein2.collider=="none"&&state=="healthy eating"){
      print("test");
      state="complete";
    }
    if (state=="complete"){
      background("lime");
      
    textSize(60);
      text("You won!", width/2, 200);
      textSize(30);
      text("Congratulations on forming a healthy meal! \nBe sure to keep these categories in \nmind when deciding what to eat in the future.", width/2, height/2-50);
      
      
    backcomplete.x=width/2; 
    backcomplete.y=height/2+130;
      
    }
    if (backcomplete.mouse.presses()){
      backcomplete.x=1500; 
      backcomplete.y=-300;
      state="menu";
    }


    
    if (state=="health quiz"){//quiz on facts about basic health knowledge (emergency actions for choking, strokes, etc) - (4 options) 
      background("yellow");
      textSize(60);
      text("Did you know?", width/2, 170);
      textSize(30);
      text("You will be answering a series of questions about health.\n Only one of the four options for answers will be right.", width/2, height/2-80);
      go.x=width/2; go.y=height/2+50;
      score=0;
      back3.x=850; back3.y=607;
      if (go.mouse.presses()){
      state="1";
      go.x=1600; go.y=height/2;
        
      back3.x=-850; back3.y=-607;
    }
      if (back3.mouse.presses()){
        
      go.x=-1600; go.y=-1000;
      state="menu";
      back3.x=-850; back3.y=-607;
        
    }
    }
    if (state=="1"){
      op1.x=width/2; op1.y=height/2-60;
      op2.x=width/2; op2.y=height/2+40;
      op3.x=width/2; op3.y=height/2+140;
      op4.x=width/2; op4.y=height/2+240;
      
      background("tan")
      textSize(25);
      text("1.",40, 40);
      text("Score: "+score, width-100, 40);
      textSize(45);
      text("How much water should \nwe drink in a day?", width/2, 140);

      op1.text="a. 1 cup";
      op2.text="b. 8-12 cups";
      op3.text="c. 4-6 cups";
      op4.text="d. 2-3 cups";

      if(op1.mouse.presses()||op2.mouse.presses()||op3.mouse.presses()||op4.mouse.presses()){
        state="2";
        if (op2.mouse.presses()){
          score+=1;
        }
        op1.x=-width/2; op1.y=height/2-60;
      op2.x=-width/2; op2.y=height/2+40;
      op3.x=-width/2; op3.y=height/2+140;
      op4.x=-width/2; op4.y=-240;
      }
      
    }
    if (state=="2"){
      op5.x=width/2; op5.y=height/2-60;
      op6.x=width/2; op6.y=height/2+40;
      op7.x=width/2; op7.y=height/2+140;
      op8.x=width/2; op8.y=height/2+240;
      
      background("tan")
      textSize(25);
      text("2.",40, 40);
      text("Score: "+score, width-100, 40);
      textSize(45);
      text("How can I get exercise?", width/2, 140);

      op5.text="a. Running";
      op6.text="b. Swimming";
      op7.text="c. Biking";
      op8.text="d. All of the above";

      if(op5.mouse.presses()||op6.mouse.presses()||op7.mouse.presses()||op8.mouse.presses()){
        if (op8.mouse.presses()){
          score+=1;
        }
        state="3";
        op5.x=-width/2; op5.y=height/2-60;
      op6.x=-width/2; op6.y=height/2+40;
      op7.x=-width/2; op7.y=height/2+140;
      op8.x=-width/2; op8.y=height/2+240;
      }
      
    }
    if (state=="3"){
      op9.x=width/2; op9.y=height/2-60;
      op10.x=width/2; op10.y=height/2+40;
      op11.x=width/2; op11.y=height/2+140;
      op12.x=width/2; op12.y=height/2+240;
      
      background("tan")
      textSize(25);
      text("3.",40, 40);
      text("Score: "+score, width-100, 40);
      textSize(45);
      text("How can you avoid getting sick?", width/2, 140);

      op9.text="a. Skipping breakfast";
      op10.text="b. Stay up late";
      op11.text="c. Washing my hands";
      op12.text="d. All of the above";

      if(op9.mouse.presses()||op10.mouse.presses()||op11.mouse.presses()||op12.mouse.presses()){
        if (op11.mouse.presses()){
          score+=1;
        }
        state="4";
        op9.x=-width/2; op9.y=height/2-60;
      op10.x=-width/2; op10.y=height/2+40;
      op11.x=-width/2; op11.y=height/2+140;
      op12.x=-width/2; op12.y=height/2+240;
      }
      
    }
    if (state=="4"){
      op13.x=width/2; op13.y=height/2-60;
      op14.x=width/2; op14.y=height/2+40;
      op15.x=width/2; op15.y=height/2+140;
      op16.x=width/2; op16.y=height/2+240;
      
      background("tan")
      textSize(25);
      text("4.",40, 40);
      text("Score: "+score, width-100, 40);
      textSize(45);
      text("How much sleep should \nyou get a night?", width/2, 140);

      op13.text="a. 8-10 hours";
      op14.text="b. 1-3 hours";
      op15.text="c. 5-7 hours";
      op16.text="d. 3-4 hours";

      if(op13.mouse.presses()||op14.mouse.presses()||op15.mouse.presses()||op16.mouse.presses()){
        if (op13.mouse.presses()){
          score+=1;
        }
        state="5";
        op13.x=-width/2; op13.y=height/2-60;
      op14.x=-width/2; op14.y=height/2+40;
      op15.x=-width/2; op15.y=height/2+140;
      op16.x=-width/2; op16.y=height/2+240;
      }
      
    }
    if (state=="5"){
      op17.x=width/2; op17.y=height/2-60;
      op18.x=width/2; op18.y=height/2+40;
      op19.x=width/2; op19.y=height/2+140;
      op20.x=width/2; op20.y=height/2+240;
      
      background("tan")
      textSize(25);
      text("5.",40, 40);
      text("Score: "+score, width-100, 40);
      textSize(45);
      text("How do we keep our teeth healthy?", width/2, 140);

      op17.text="a. Brush our teeth 1x a day";
      op18.text="b. Brush our teeth 2x a day";
      op19.text="c. Floss";
      op20.text="d. B and C";

      if(op17.mouse.presses()||op18.mouse.presses()||op19.mouse.presses()||op20.mouse.presses()){
        if (op20.mouse.presses()){
          score+=1;
        }
        state="6";
        op17.x=-width/2; op17.y=height/2-60;
      op18.x=-width/2; op18.y=height/2+40;
      op19.x=-width/2; op19.y=height/2+140;
      op20.x=-width/2; op20.y=height/2+240;
      }
      
    }
    if (state=="6"){
      op21.x=width/2; op21.y=height/2-60;
      op22.x=width/2; op22.y=height/2+40;
      op23.x=width/2; op23.y=height/2+140;
      op24.x=width/2; op24.y=height/2+240;
      
      background("tan")
      textSize(25);
      text("6.",40, 40);
      text("Score: "+score, width-100, 40);
      textSize(45);
      text("How long should you \nwash your hands for?", width/2, 140);

      op21.text="a. 5 seconds";
      op22.text="b. 20 seconds";
      op23.text="c. 10 seconds";
      op24.text="d. 15 seconds";

      if(op21.mouse.presses()||op22.mouse.presses()||op23.mouse.presses()||op24.mouse.presses()){
        if (op22.mouse.presses()){
          score+=1;
        }
        state="complete2";
        op21.x=-width/2; op21.y=height/2-60;
      op22.x=-1000; op22.y=-500;
      op23.x=-width/2; op23.y=height/2+140;
      op24.x=-width/2; op24.y=height/2+240;
      }
      
    }
    if (state=="complete2"){
      background("lime");
      
    textSize(50);
      text("You got "+score+" questions correct! ", width/2, 200);
      textSize(30);
      text("Congratulations on completing \nthe quiz! Keep up these habits in \nyour life to stay healthy and strong.", width/2, height/2-50);
      
    backcomplete.x=width/2; 
    backcomplete.y=height/2+130;
      
    }
    if (backcomplete.mouse.presses()){
      backcomplete.x=1500; 
      backcomplete.y=-300;
      state="menu";
    }


    
    if (state=="clean environment"){//how environment is connected to health, game where trash is picked up 
      background(bg);
      textSize(50);

      
      
      back3.x=850; back3.y=607;
      
      rect(150, 0, 650, 150);
      text("My Clean Environment", width/2, 70);
      textSize(30);
      text("Clean up different objects around the room!", width/2, 120);
      
      if (watershow==true){water.x=760; water.y=height/2+95;}
      if (toyshow==true){toy.x=width/2+50; toy.y=500;}
      if (spoonshow==true){spoon.x=120; spoon.y=500;}
      if (mosquitoshow==true){mosquito.x=width-150; mosquito.y=height/2-70;}

      //ifs
      if (back3.mouse.presses()){
        water.x=-760; water.y=height/2+95;
      toy.x=-width/2+50; toy.y=-500;
      spoon.x=-120; spoon.y=-500;
      mosquito.x=-600; mosquito.y=height/2-70;
      state="menu";
      back3.x=-850; back3.y=-607;
        
      
    }
      
      if (mosquito.mouse.presses()){
        box.x=width-320; box.y=250;
      }
      if (water.mouse.presses()){
        box2.x=width-320; box2.y=400;
      }
if (toy.mouse.presses()){
        box3.x=width/2+50; box3.y=360;
      }
      if (spoon.mouse.presses()){
        box4.x=120; box4.y=360;
      }
      
      if (box.mouse.presses()){
          mosquitoshow=false;
        mosquito.x=-1050; mosquito.y=-670;
          box.x=-320; box.y=-250;
      }
      if (box2.mouse.presses()){
          watershow=false;
        water.x=-1050; water.y=-670;
          box2.x=-320; box2.y=-250;
      }
      if (box3.mouse.presses()){
         toyshow=false;
        toy.x=-1050; toy.y=-670;
          box3.x=-320; box3.y=-250;
      }
      if (box4.mouse.presses()){
          spoonshow=false;
        spoon.x=-1050; spoon.y=-670;
          box4.x=-320; box4.y=-250;
      }
    }
    if (watershow==false&&toyshow==false&&spoonshow==false&&mosquitoshow==false){
      state="complete3";
    }
    if (state=="complete3"){
      background("lime");
      
    textSize(50);
      text("You finished!", width/2, 200);
      textSize(30);
      text("Congratulations on cleaning up \nthe whole room! Remember, staying\ntidy will help you stay healthy.", width/2, height/2-50);
      
    backcomplete.x=width/2; 
    backcomplete.y=height/2+120;
      
      back3.x=-850; back3.y=-607;
      
    }
    if (backcomplete.mouse.presses()){
      backcomplete.x=1500; 
      backcomplete.y=-300;
      state="menu";
    }
    
  }
  
}
