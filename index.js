function start()
{
    Webcam.attach(camera);
}
camera=document.getElementById("camera");
Webcam.set({
 width:375,height:350,image_format:"png",png_quality:110
 });
 function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });

    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
 }
 function c(){
    image.save();
 }