function sendDatas(formData, url){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url); 
    xhr.send(formData);
}