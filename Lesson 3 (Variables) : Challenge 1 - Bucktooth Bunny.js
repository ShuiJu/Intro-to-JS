//colouring in the bunny
fill(135, 133, 131);

//declaring eye diameter and length of teeth
var eyeSize = 18;
var length = 8;

ellipse(150, 70, 60, 120);  // left ear
ellipse(240, 70, 60, 120);  // right ear

ellipse(200, 170, 150, 150);    // face

fill(0, 0, 0);
ellipse(170, 150, eyeSize, eyeSize);  // left eye
ellipse(230, 150, eyeSize, eyeSize);  // right eye

line(150, 200, 250, 200);   // mouth

noFill();
rect(185, 200, 15, length); // left tooth
rect(200, 200, 15, length); // right tooth

