Webcam.set({
    width:310,
    height: 300,
    image_format: 'png',
    png_quality: 90,
    constraints:{
        facingMode: 'environment'
    } 
});
Webcam.attach(camera)
function take_image(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = "<img id='captured_image' src="+data_uri+">";
    })
}
console.log('ML5 Version: '+ml5.version)
classifire = ml5.imageClassifier('MobileNet', modelLoaded);
function modelLoaded(){
    console.log('Successfully loaded MobileNet')
}
function identify_image(){
    img = document.getElementById('captured_image');
    classifire.classify(img, gotResult);
}
function gotResult(error, result){
    if(error){
        console.error(error);
    }else{
        console.log('Got the result');
        console.log(result);
        document.getElementById('object_name').innerHTML = result[0].label;
    }
    
}
var i = 0;
var txt = 'Click on Identify button to identify image';
var speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("object_name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
// MobileNet