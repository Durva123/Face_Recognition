Webcam.attach("#camera");
camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    image_format:"jpeg",
    jpeg_quality:90
});

function snapshot(){
Webcam.snap(function(data_uri)
{
 document.getElementById("zero").innerHTML='<img id="selfie" src="'+data_uri+'">';
});
}

console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VPmq4Itfb/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model is Loaded");
}

function identify(){
img=document.getElementById("selfie");
classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
}
else{
    console.log(results);
    document.getElementById("object").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence;
}

}