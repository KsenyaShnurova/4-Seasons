let x,y; //coordinates for the tree
let snow = [];
let dropSpeed = 5;
let flower = [];
let apple = [];
let rain = [];
let rainSpeed = 5;
let leaves = [];
let leafSpeed = 2;
let appleSound, snowSound, rainSound, springSound;
let sampleIsPLaying = false;

function preload() {
  snowSound = loadSound("Sounds/Snow.mp3");
  rainSound = loadSound("Sounds/rainsound.mp3");
  springSound = loadSound("Sounds/spring.mp3");
  appleSound = loadSound("Sounds/pop.mp3");
}

function setup() {
	createCanvas(800,800);

	for (let i = 0; i < 150; i++){
		snow.push(new Snow());
	}

	for (let i = 0; i < 100; i++){
		rain.push(new Rain());
	}

	for (let i = 0; i < 10; i++){
		leaves.push (new Leaf());
	}
}


function draw() {
	//------Winter------
	if (keyCode===78) {

		//winter night
		fill("#22176F");
		strokeWeight(5);
		stroke(0);
		rect(0,0,400,400);
		noStroke();
		fill(255);
		arc(200, 397, 395, 100, PI, TWO_PI);
		fill("#FFFEE5");
	  	ellipse(350,46,70);
	  	fill("#22176F");
	  	ellipse(325,46,70);

	  	//spring night
	  	fill("#552134");
	  	strokeWeight(5);
	  	stroke(0);
		rect(400,0,400,400);
		noStroke();
		fill("#7DC07B");
		arc(600, 397, 395, 100, PI, TWO_PI);
		fill("#FFFEE5");
	  	ellipse(750,46,70);
	  	fill("#552134");
	  	ellipse(725,46,70);

	  	//summer night
	  	fill("#254411");
		strokeWeight(5);
		stroke(0);
		rect(0,400,400,400);
		noStroke();
		fill("#3CAC38");
		arc(200, 797, 395, 100, PI, TWO_PI);
		fill("#FFFEE5");
	  	ellipse(350,446,70);
	  	fill("#254411");
	  	ellipse(325,446,70);

	  	//autumn night
	  	fill("#935000");
	 	strokeWeight(5);
	 	stroke(0);
		rect(400,400,400,400);
		noStroke();
		fill("#D67D17");
		arc(600, 797, 395, 100, PI, TWO_PI);
		fill("#FFFEE5");
	  	ellipse(750,446,70);
	  	fill("#935000");
	  	ellipse(725,446,70);

	  } if (keyCode===68) {

	  	//winter day
		fill("#ADCEF0");
		strokeWeight(5);
		stroke(0);
		rect(0,0,400,400);
		noStroke();
		fill(255);
		arc(200, 397, 395, 100, PI, TWO_PI);
		fill("#FFFEE5");
	  	ellipse(350,46,70);

	  	//spring day
	  	fill("#E7BCCC");
	  	strokeWeight(5);
	  	stroke(0);
		rect(400,0,400,400);
		noStroke();
		fill("#7DC07B");
		arc(600, 397, 395, 100, PI, TWO_PI);
		fill("#FAF8B5");
	  	ellipse(750,46,70);

	  	//summer day
	  	fill("#D6F1C4");
		strokeWeight(5);
		stroke(0);
		rect(0,400,400,400);
		noStroke();
		fill("#3CAC38");
		arc(200, 797, 395, 100, PI, TWO_PI);
		fill("#FFFA54");
	  	ellipse(350,446,70);

	  	//autumn day
	  	fill("#F6B96F");
	 	strokeWeight(5);
	 	stroke(0);
		rect(400,400,400,400);
		noStroke();
		fill("#D67D17");
		arc(600, 797, 395, 100, PI, TWO_PI);
		fill("#FFDC7F");
	  	ellipse(750,446,70);

	  }
	//------Spring------
  	stroke("#96C66A");
  	strokeWeight(3);
	fill("#BEEE93");
	beginShape()
  	vertex(600,318);
  	vertex(440,294);
  	vertex(403,209);
  	vertex(428,89);
  	vertex(540,42);
  	vertex(659,42);
  	vertex(763,103);
  	vertex(792,213);
  	vertex(783,300);
  	vertex(600,318);
	endShape();

	//------Summer------
  	stroke(53,124,27);
  	strokeWeight(3);
	fill(74,156,45);
	beginShape()
  	vertex(200,718);
  	vertex(40,694);
  	vertex(3,609);
  	vertex(28,489);
  	vertex(140,442);
  	vertex(259,442);
  	vertex(363,503);
  	vertex(392,613);
  	vertex(383,700);
  	vertex(200,718);
	endShape();

	//------Autumn------
 	stroke("#FBAC1F");
  	strokeWeight(3);
	fill("#FFDB4D");
	beginShape()
  	vertex(600,718);
  	vertex(440,694);
  	vertex(403,609);
  	vertex(428,489);
  	vertex(540,442);
  	vertex(659,442);
  	vertex(763,503);
  	vertex(792,613);
  	vertex(783,700);
  	vertex(600,718);
	endShape();

	//------4 Trees------
	x = 200;
	y = 400;
	tree(x,y);
	tree(x+400,y);
	tree(x,y+400);
	tree(x+400,y+400);	

	//winter falling snow
	if (mouseIsPressed && mouseX>0 && mouseX<400 && mouseY>0 && mouseY<400){
  		for (let i = 0; i < 150; i++){
		snow[i].snowing();
		}
	} 

	//spring flowers
	if (mouseX>400 && mouseX<800 && mouseY>0 && mouseY<400) {
		
  		flowers(748,281);
  		flowers(618,196);
  		flowers(567,105);
  		flowers(452,124);
  		flowers(414,190);
  		flowers(704,115);
  		flowers(645,100);
  		flowers(523,292);
  		flowers(593,61);
  		flowers(523,140);
  		flowers(455,282);
  		flowers(456,168);
  		flowers(739,215);
  		flowers(741,179);
  		flowers(695,141);
  		flowers(637,120);
  		flowers(546,148);
  		flowers(614,250);

  		if (!springSound.isPlaying()){
  			springSound.loop();
  		}
  		
	} else {
		springSound.stop();
	}

	//Summer apples & flowers
	if (mouseX>0 && mouseX<400 && mouseY>400 && mouseY<800) {
		
			for (let i = 0; i < flower.length; i++) {
				let currentFlower = flower[i];
				flowers(currentFlower.xpos,currentFlower.ypos);
			}
			for (let i = 0; i < apple.length; i++) {
				let currentApple = apple[i];
				apples(currentApple.xpos,currentApple.ypos,currentApple.r); 	
  			}

  	}

  	//Autumn rain & leaves
	if (mouseIsPressed && mouseX>400 && mouseX<800 && mouseY>400 && mouseY<800) {
  		for (let i = 0; i < 100; i++){
			rain[i].raining();
		}
	}

	if (mouseX>400 && mouseX<800 && mouseY>400 && mouseY<800) {
  		for (let i = 0; i < 10; i++){
			leaves[i].falling();
		}
	}


}	

function leaf(x,y) { 
	stroke("#F97C0A ");
	strokeWeight(2);
	fill("#FFB65E");
	beginShape();
	vertex(x,y);
	vertex(x,y-13);
	vertex(x-8,y-8);
	vertex(x-7,y-12);
	vertex(x-11,y-11);
	vertex(x-6,y-20);
	vertex(x-18,y-23);
	vertex(x-13,y-24);
	vertex(x-14,y-28);
	vertex(x-3,y-26);
	vertex(x-3,y-37);
	vertex(x,y-33);
	vertex(x+2,y-37);
	vertex(x+2,y-26);
	vertex(x+13,y-28);
	vertex(x+12,y-24);
	vertex(x+17,y-23);
	vertex(x+5,y-20);
	vertex(x+11,y-11);
	vertex(x+6,y-12);
	vertex(x+7,y-8);
	vertex(x,y-13);
	endShape();
}

function flowers(x,y){
  	noStroke();
  	fill("#FFEBFB");
  	let r = 8;
  	ellipse(x,y,r);
  	ellipse(x+r,y,r);
  	ellipse(x,y+r,r);
  	ellipse(x+r,y+r,r);
  	fill("#FDFFBA");
  	ellipse(x+(r/2),y+(r/2),r);
}

function apples(x,y,r) {
	stroke("#BB433D");
	fill("#FB2A1F");
	ellipse(x,y,r);
}

function mousePressed() {

	if (mouseX>20 && mouseX<390 && mouseY> 755 && mouseY<790) {
		let newFlower = {
			xpos: mouseX,
			ypos: mouseY
		};
		flower.push(newFlower);
		appleSound.play();
	}
	if (mouseX>25 && mouseX<352 && mouseY> 462 && mouseY<705) {
		let newApple = {
			xpos: mouseX,
			ypos: mouseY,
			r: random(10,25)
		};
		apple.push(newApple);
		appleSound.play();
	}
	//snow sound
	if (mouseX>0 && mouseX<400 && mouseY>0 && mouseY<400){
		snowSound.loop();
	}

	//rain sound
	if (mouseX>400 && mouseX<800 && mouseY>400 && mouseY<800) {
		rainSound.loop();
	}

}
function mouseReleased(){
	snowSound.stop();
	rainSound.stop();
}


function tree(x,y) {
	stroke(0);
	strokeWeight(3);
	line(x,y,x,y-82);
	line(x,y-82,x+54,y-187);
	line(x+54,y-187,x+83,y-209);
	line(x+83,y-209,x+95,y-234);
	line(x+95,y-234,x+95,y-259);
	line(x+95,y-234,x+118,y-248);

	line(x+83,y-209,x+115,y-224);
	line(x+115,y-224,x+131,y-244);
	line(x+115,y-224,x+140,y-221);
	line(x+54,y-187,x+47,y-237);
	line(x+47,y-237,x+37,y-255);

	line(x+49,y-221,x+62,y-244);
	line(x+62,y-244,x+55,y-285);
	line(x+55,y-285,x+47,y-295);
	line(x+55,y-285,x+62,y-301);
	line(x+62,y-244,x+82,y-258);
	line(x+82,y-258,x+91,y-275);
	line(x+91,y-275,x+91,y-290);
	line(x+91,y-275,x+104,y-285);

	line(x+37,y-255,x+37,y-280);
	line(x+37,y-255,x+14,y-268);
	line(x+38,y-158,x+33,y-184);
	line(x+33,y-184,x+41,y-207);
	line(x+33,y-184,x+18,y-204);
	line(x+14,y-109,x+10,y-130);
	line(x+10,y-130,x+14,y-146);
	line(x+10,y-130,x,y-142);

	line(x,y-82,x-54,y-187);
	line(x-54,y-187,x-87,y-212);
	line(x-87,y-212,x-104,y-237);
	line(x-104,y-237,x-126,y-251);
	line(x-126,y-251,x-134,y-268);
	line(x-134,y-268,x-148,y-276);
	line(x-134,y-268,x-134,y-285);

	line(x-104,y-237,x-104,y-262);
	line(x-104,y-262,x-96,y-276);
	line(x-96,y-276,x-94,y-295);
	line(x-96,y-276,x-80,y-287);
	line(x-80,y-207,x-74,y-235);
	line(x-74,y-235,x-77,y-260);
	line(x-74,y-235,x-54,y-252);
	line(x-87,y-212,x-111,y-215);
	line(x-111,y-215,x-133,y-242);
	line(x-140,y-232,x-122,y-229);

	line(x-30,y-140,x-88,y-153);
	line(x-88,y-153,x-153,y-132);
	line(x-141,y-136,x-145,y-124);
	line(x-130,y-140,x-153,y-158);
	line(x-153,y-158,x-165,y-185);
	line(x-165,y-185,x-178,y-195);
	line(x-178,y-195,x-195,y-197);
	line(x-178,y-195,x-185,y-210);
	line(x-165,y-185,x-165,y-204);
	line(x-165,y-204,x-172,y-215);
	line(x-165,y-204,x-155,y-217);

	line(x-30,y-140,x-9,y-191);
	line(x-9,y-191,x-20,y-240);
	line(x-20,y-240,x-32,y-268);
	line(x-32,y-268,x-56,y-282);
	line(x-32,y-268,x-33,y-295);
	

	line(x-20,y-240,x-3,y-266);
	line(x-3,y-266,x+20,y-285);
	line(x+20,y-285,x+30,y-304);
	line(x+30,y-304,x+27,y-325);
	line(x+30,y-304,x+47,y-318);
	line(x-3,y-266,x-7,y-297);
	line(x-7,y-297,x,y-320);
	line(x,y-320,x-3,y-339);
	line(x,y-320,x+14,y-336);
	line(x-7,y-297,x-23,y-315);
	line(x-23,y-315,x-42,y-320);
	line(x-23,y-315,x-28,y-336);
	line(x-9,y-191,x+28,y-223);
	line(x+28,y-223,x+26,y-242);
	line(x+28,y-223,x+38,y-230);

	line(x+18,y-116,x+66,y-146);
	line(x+66,y-146,x+110,y-148);
	line(x+110,y-148,x+131,y-167);
	line(x+131,y-167,x+139,y-179);
	line(x+131,y-167,x+155,y-170);
	line(x+110,y-148,x+134,y-137);
	line(x+134,y-137,x+158,y-142);
	line(x+134,y-137,x+148,y-119);

	line(x-21,y-122,x-54,y-122);
	line(x-54,y-122,x-77,y-134);
	line(x-54,y-122,x-77,y-108);
}

class Snow {
	constructor (){
		this.len = random(5);
  		this.x = random(10,390);
  		this.y = random(0,350);
	}
  	
  	snowing(){
  		stroke(216,252,255);
   		line(this.x, this.y, this.x, this.y + this.len);
    	if (this.y < 350) this.y += dropSpeed;
    	else {
      		this.x = random(10,390);
  			this.y = random(0,350);
    }
  }
}

class Rain {
	constructor (){
  		this.len = random(12);
  		this.x = random(410,790);
  		this.y = random(400,750);
  	}

  	raining() {
  		stroke("#E9E3E3");
    	line(this.x, this.y, this.x, this.y + this.len);
    	if (this.y < 750) this.y += rainSpeed;
    	else {
      		this.x = random(410,790);
  			this.y = random(400,750);
    }
  }
}

class Leaf {
	constructor (){
  		this.x = random(430,750);
  		this.y = random(500,765);
  	}

  	falling() {
  		leaf(this.x,this.y);
    	if (this.y < 765) this.y += leafSpeed;
    	else {
      		this.x = random(430,750);
  			this.y = random(500,765);
    }
  }
}

