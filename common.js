



// T-SCORING ===========================================================================

function displayRadioValue() {
    var el = document.getElementsByName('scoreA');
      
    for(i = 0; i < el.length; i++) {
        console.log(el[i].id, el[i].checked, el[i].value);
        if(el[i].checked) {
        // document.getElementById("result").innerHTML = "Gender: "+ele[i].value;
        console.log(el[i].value);
        // let score = document.getElementById("score").innerHTML
        // document.getElementById("score").innerHTML = score + el[i].value;
        document.getElementById("s1a").value = el[i].value;
        }
    }
}


// Tried using the parent, but it always logs the previous one as well 
// document.getElementById("radios-score").addEventListener("click", displayRadioValue);
document.getElementsByName("scoreA").forEach(radio => {
    radio.addEventListener("click", displayRadioValue);
});