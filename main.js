//https://teachablemachine.withgoogle.com/models/oxfhuUiet/
Webcam.set({
    width:480,
    heigh:400,
    image_format:'png',
    png_quality: 90
});
camera= document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="cap_img" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/oxfhuUiet/model.json',modelLoaded);
function modelLoaded()
{
    console.log("Model Loaded!");
}