function animalSoundClassifier(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, result){
    if (error) {
        console.log("got result")
    }
}  