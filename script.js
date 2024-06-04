var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-container")
var flag = true;
function addEnter(event){
    if(event.keyCode == 13){
        if(inputBox.value == ""){
            alert("Please make sure that you have enter some task to do..!")
        }
        else{
            document.getElementById("hide").style.display = "block";
            listContainer.innerHTML += `<li class="lizt"><img onclick="check(event)" class="cross" src="images/radio-button.png">
            <span id="spy">${inputBox.value}</span>
            <img class="cross" onclick="toDelete(event)" src="https://static.vecteezy.com/system/resources/thumbnails/017/350/109/small_2x/red-cross-button-in-round-shape-png.png"></li>`;
            inputBox.value = ""; 
        }
    }
}
function addTask(){
    if(inputBox.value == ""){
        alert("Please make sure that you have enter some task to do..!")
    }
    else{
        document.getElementById("hide").style.display = "block";
        listContainer.innerHTML += `<li class="lizt"><img onclick="check(event)" class="cross" src="images/radio-button.png">
        <span id="spy">${inputBox.value}</span>
        <img class="cross" onclick="toDelete(event)" src="https://static.vecteezy.com/system/resources/thumbnails/017/350/109/small_2x/red-cross-button-in-round-shape-png.png"></li>`;
        inputBox.value = ""; 
    }
}
function check(event){
    var store = event.target.parentNode.querySelectorAll("#spy")
if(flag){
    event.target.src = "images/checked.png"
    store[0].style.textDecoration = "line-through"
    flag = false;
}
else{
    event.target.src = "images/radio-button.png"
    store[0].style.textDecoration = "none"
    flag = true;
}
}
function toDelete(event){
   event.target.parentNode.remove() 

}
function deleteAll(){
    listContainer.innerHTML = "";
}