var input, input2, input3, input4, inpu5, input6, input7, input8, input9, input10, input11, input12, input13, input14, input15, button, button2, button3, button4, button5, button6, button7, button8, button9, button10, firsttext;


function setup() {
  createCanvas(710, 800);
  background(190, 200, 250);
  
//leftmost inputs  
  input = createInput();
  input.position(20,65);
  input2 = createInput();
  input2.position(20,100);
  input3 = createInput();
  input3.position(20,135);
  input4 = createInput();
  input4.position(20,170);
  input5 = createInput();
  input5.position(20,205);
  
//middle column inputs
  input6 = createInput();
  input6.position(180, 65);
  input7 = createInput();
  input7.position(180, 100);
  input8 = createInput();
  input8.position(180, 135);
  input9 = createInput();
  input9.position(180, 170);
  input10 = createInput();
  input10.position(180, 205);
  
//rightmost inputs
  input11 = createInput();
  input11.position(340, 65);
  input12 = createInput();
  input12.position(340, 100);
  input13 = createInput();
  input13.position(340, 135);
  input14 = createInput();
  input14.position(340, 170);
  input15 = createInput();
  input15.position(340, 205);

//Button
  button = createButton('submit');
  button.position(220, 240);
  button.mousePressed(makePoem1);

//automatic heading or greeting
  firsttext = createElement('h2', 'Mini Poetry Generator');
  firsttext.position(20,5);
  
  textAlign(CENTER);
  textSize(50);

}

//function mousePressed() {
//  if (value === 0) {
//    
//  }
//}


function makePoem1() {
  background(190, 200, 250);                            //Poem 1
  var line1 = input.value();
  textSize(12);
  textAlign(LEFT);
  text(line1, 40, 275);
  
  var line2 = input2.value();
  text(line2, 40, 295);
  
  var line3 = input3.value();
  text(line3, 40, 315);
  
  var line4 = input4.value();
  text(line4, 40, 335);
  
  //stanza break
  var line5 = input5.value();
  text(line5, 40, 375);
  
  var line6 = input6.value();
  text(line6, 40, 395);
  
  var line7 = input7.value();
  text(line7, 40, 415);
  
  var line8 = input8.value();
  text(line8, 40, 435);
  
  //stanza break
  var line9 = input9.value();
  text(line9, 40, 475);
  
  var line10 = input10.value();
  text(line10, 40, 495);
  
  var line11 = input11.value();
  text(line11, 40, 515);
  
  var line12 = input12.value();
  text(line12, 40, 535);
  
  //stanza break
  var line13 = input13.value();
  text(line13, 40, 575);
  
  var line14 = input14.value();
  text(line14, 40, 595);
  
  var line15 = input15.value();
  text(line15, 40, 615);
  
  button2 = createButton('New version?');
  button2.position(220, 645);
  button2.mousePressed(makePoem2);
}

function makePoem2() {
  //noStroke();
  //fill(250, 250, 250);
  //rect(30, 250, 300, 300);                      //Poem 2
  //erase();
  //rect(30, 260, 300, 300);
  //noErase();
  background(190, 200, 250);
  var line1 = input3.value();
  textSize(12);
  textAlign(LEFT);
  text(line1, 40, 275);
  
  var line2 = input4.value();
  text(line2, 40, 295);
  
  var line3 = input12.value();
  text(line3, 40, 315);
  
  var line4 = input14.value();
  text(line4, 40, 335);
  
  //stanza break
  var line5 = input5.value();
  text(line5, 40, 375);
  
  var line6 = input6.value();
  text(line6, 40, 395);
  
  var line7 = input12.value();
  text(line7, 40, 415);
  
  var line8 = input14.value();
  text(line8, 40, 435);
  
  //stanza break
  var line9 = input8.value();
  text(line9, 40, 475);
  
  var line10 = input11.value();
  text(line10, 40, 495);
  
  var line11 = input15.value();
  text(line11, 40, 515);
  
  var line12 = input14.value();
  text(line12, 40, 535);
  
  //stanza break
  var line13 = input7.value();
  text(line13, 40, 575);
  
  var line14 = input13.value();
  text(line14, 40, 595);
  
  var line15 = input14.value();
  text(line15, 40, 615);
  
  button3 = createButton('New version?');
  button3.position(220, 645);
  button3.mousePressed(makePoem3);

}


function makePoem3() {
  //noStroke();
  //fill(250, 250, 250);                  //Poem 3
  //rect(30, 250, 300, 300);
  //erase();
  //rect(30, 260, 300, 300);
  //noErase();
  background(190, 200, 250);
  var line1 = input7.value();
  textSize(12);
  textAlign(LEFT);
  text(line1, 40, 275);
  
  var line2 = input.value();
  text(line2, 40, 295);
  
  var line3 = input8.value();
  text(line3, 40, 315);
  
  var line4 = input9.value();
  text(line4, 40, 335);
  
  //stanza break
  var line5 = input2.value();
  text(line5, 40, 375);
  
  var line6 = input5.value();
  text(line6, 40, 395);
  
  var line7 = input11.value();
  text(line7, 40, 415);
  
  var line8 = input8.value();
  text(line8, 40, 435);
  
  //stanza break
  var line9 = input7.value();
  text(line9, 40, 475);
  
  var line10 = input10.value();
  text(line10, 40, 495);
  
  var line11 = input9.value();
  text(line11, 40, 515);
  
  var line12 = input3.value();
  text(line12, 40, 535);
  
  //stanza break
  var line13 = input2.value();
  text(line13, 40, 575);
  
  var line14 = input5.value();
  text(line14, 40, 595);
  
  var line15 = input10.value();
  text(line15, 40, 615);
  
  button4 = createButton('New version?');
  button4.position(220, 645);
  button4.mousePressed(makePoem4);

}

function makePoem4() {
  //noStroke();
  //fill(250, 250, 250);                  //Poem 4
  //rect(30, 250, 300, 300);
  //erase();
  //rect(30, 260, 300, 300);
  //noErase();
  background(190, 200, 250);
  var line1 = input15.value();
  textSize(12);
  textAlign(LEFT);
  text(line1, 40, 275);
  
  var line2 = input14.value();
  text(line2, 40, 295);
  
  var line3 = input9.value();
  text(line3, 40, 315);
  
  var line4 = input6.value();
  text(line4, 40, 335);
  
  //stanza break
  var line5 = input9.value();
  text(line5, 40, 375);
  
  var line6 = input12.value();
  text(line6, 40, 395);
  
  var line7 = input10.value();
  text(line7, 40, 415);
  
  var line8 = input14.value();
  text(line8, 40, 435);
  
  //stanza break
  var line9 = input12.value();
  text(line9, 40, 475);
  
  var line10 = input3.value();
  text(line10, 40, 495);
  
  var line11 = input7.value();
  text(line11, 40, 515);
  
  var line12 = input10.value();
  text(line12, 40, 535);
  
  //stanza break
  var line13 = input3.value();
  text(line13, 40, 575);
  
  var line14 = input15.value();
  text(line14, 40, 595);
  
  var line15 = input7.value();
  text(line15, 40, 615);
  
  button5 = createButton('New version?');
  button5.position(220, 645);
  button5.mousePressed(makePoem5);
  
}

function makePoem5() {
  //noStroke();
  //fill(250, 250, 250);                //Poem 5 with tercets
  //rect(30, 250, 300, 300);
  //erase();
  //rect(30, 260, 300, 300);
  //noErase();
  background(190, 200, 250);
  var line1 = input12.value();
  textSize(12);
  textAlign(LEFT);
  text(line1, 40, 275);
  
  var line2 = input13.value();
  text(line2, 40, 295);
  
  var line3 = input.value();
  text(line3, 40, 315);
  
  //stanza break
  var line4 = input3.value();
  text(line4, 40, 355);
  
  var line5 = input5.value();
  text(line5, 40, 375);
  
  var line6 = input12.value();
  text(line6, 40, 395);
  
   //stanza break
  var line7 = input4.value();
  text(line7, 40, 435);
  
  var line8 = input2.value();
  text(line8, 40, 455);
  
  var line9 = input10.value();
  text(line9, 40, 475);
  
    //stanza break
  var line10 = input9.value();
  text(line10, 40, 515);
  
  var line11 = input15.value();
  text(line11, 40, 535);
  
  var line12 = input8.value();
  text(line12, 40, 555);
  
  //stanza break
  var line13 = input8.value();
  text(line13, 40, 595);
  
  var line14 = input10.value();
  text(line14, 40, 615);
  
  var line15 = input13.value();
  text(line15, 40, 635);
  
  button6 = createButton('New version?');
  button6.position(220, 645);
  button6.mousePressed(makePoem6);
  
}

function makePoem6() {
  //noStroke();
  //fill(250, 250, 250);                    // Poem 6 with no stanzas or repetition
  //rect(30, 250, 300, 300);
  //erase();
  //rect(30, 260, 300, 300);
  //noErase();
  background(190, 200, 250);
  var line1 = input6.value();
  textSize(12);
  textAlign(LEFT);
  text(line1, 40, 275);
  
  var line2 = input10.value();
  text(line2, 40, 295);
  
  var line3 = input4.value();
  text(line3, 40, 315);
  
  var line4 = input13.value();
  text(line4, 40, 335);
  
  //stanza break
  var line5 = input12.value();
  text(line5, 40, 355);
  
  var line6 = input2.value();
  text(line6, 40, 375);
  
  var line7 = input5.value();
  text(line7, 40, 395);
  
  var line8 = input7.value();
  text(line8, 40, 415);
  
  //stanza break
  var line9 = input14.value();
  text(line9, 40, 435);
  
  var line10 = input11.value();
  text(line10, 40, 455);
  
  var line11 = input13.value();
  text(line11, 40, 475);
  
  var line12 = input8.value();
  text(line12, 40, 495);
  
  //stanza break
  var line13 = input9.value();
  text(line13, 40, 515);
  
  var line14 = input15.value();
  text(line14, 40, 535);
  
  var line15 = input.value();
  text(line15, 40, 555);
  
  button7 = createButton('New version?');
  button7.position(220, 645);
  button7.mousePressed(makePoem7);
  
}

function makePoem7() {
  //noStroke();
  //fill(250, 250, 250);                    // Poem 7 with no stanzas or repetition
  //rect(30, 250, 300, 300);
  //erase();
  //rect(30, 260, 300, 300);
  //noErase();
  background(190, 200, 250);
  var line1 = input12.value();
  textSize(12);
  textAlign(LEFT);
  text(line1, 60, 275);
  
  var line2 = input11.value();
  text(line2, 40, 295);
  
  var line3 = input.value();
  text(line3, 80, 315);
  
  var line4 = input3.value();
  text(line4, 100, 335);
  
  //stanza break
  var line5 = input2.value();
  text(line5, 40, 355);
  
  var line6 = input5.value();
  text(line6, 100, 375);
  
  var line7 = input15.value();
  text(line7, 40, 395);
  
  var line8 = input7.value();
  text(line8, 80, 415);
  
  //stanza break
  var line9 = input4.value();
  text(line9, 100, 435);
  
  var line10 = input6.value();
  text(line10, 40, 455);
  
  var line11 = input13.value();
  text(line11, 60, 475);
  
  var line12 = input8.value();
  text(line12, 40, 495);
  
  //stanza break
  var line13 = input9.value();
  text(line13, 80, 515);
  
  var line14 = input14.value();
  text(line14, 40, 535);
  
  var line15 = input10.value();
  text(line15, 60, 555);
  
  button8 = createButton('New version?');
  button8.position(220, 645);
  button8.mousePressed(makePoem8);
  
}

function makePoem8() {
  //noStroke();
  //fill(250, 250, 250);                    // Poem 8 with no stanzas or repetition
  //rect(30, 250, 300, 300);
  //erase();
  //rect(30, 260, 300, 300);
  //noErase();
  background(190, 200, 250);
  var line1 = input10.value();
  textSize(12);
  textAlign(LEFT);
  text(line1, 60, 275);
  
  var line2 = input9.value();
  text(line2, 40, 295);
  
  var line3 = input2.value();
  text(line3, 80, 315);
  
  var line4 = input4.value();
  text(line4, 100, 335);
  
  //stanza break
  var line5 = input2.value();
  text(line5, 40, 355);
  
  var line6 = input5.value();
  text(line6, 100, 375);
  
  var line7 = input10.value();
  text(line7, 40, 395);
  
  var line8 = input15.value();
  text(line8, 80, 415);
  
  //stanza break
  var line9 = input5.value();
  text(line9, 100, 435);
  
  var line10 = input6.value();
  text(line10, 40, 455);
  
  var line11 = input15.value();
  text(line11, 60, 475);
  
  var line12 = input8.value();
  text(line12, 40, 495);
  
  //stanza break
  var line13 = input6.value();
  text(line13, 80, 515);
  
  var line14 = input8.value();
  text(line14, 40, 535);
  
  var line15 = input10.value();
  text(line15, 60, 555);
  
  button9 = createButton('New version?');
  button9.position(220, 645);
  button9.mousePressed(makePoem9);
  
}

function makePoem9() {
  //noStroke();
  //fill(250, 250, 250);                    // Poem 9 with no stanzas or repetition
  //rect(30, 250, 300, 300);
  //erase();
  //rect(30, 260, 300, 300);
  //noErase();
  background(190, 200, 250);
  var line1 = input5.value();
  textSize(12);
  textAlign(LEFT);
  text(line1, 40, 275);
  
  var line2 = input11.value();
  text(line2, 40, 295);
  
  var line3 = input7.value();
  text(line3, 40, 315);
  
  var line4 = input12.value();
  text(line4, 40, 335);
  
  //stanza break
  var line5 = input10.value();
  text(line5, 40, 355);
  
  var line6 = input15.value();
  text(line6, 40, 375);
  
  var line7 = input3.value();
  text(line7, 40, 395);
  
  var line8 = input2.value();
  text(line8, 40, 415);
  
  //stanza break
  var line9 = input.value();
  text(line9, 40, 435);
  
  var line10 = input9.value();
  text(line10, 40, 455);
  
  var line11 = input13.value();
  text(line11, 40, 475);
  
  var line12 = input8.value();
  text(line12, 40, 495);
  
  //stanza break
  var line13 = input6.value();
  text(line13, 40, 515);
  
  var line14 = input11.value();
  text(line14, 40, 535);
  
  var line15 = input4.value();
  text(line15, 40, 555);
  
  button10 = createButton('New version?');
  button10.position(220, 645);
  button10.mousePressed(makePoem1);
  
}

function draw() {
  
}
