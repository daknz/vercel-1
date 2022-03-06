



// T-SCORING ===========================================================================

function displayRadioValue() {
    var el = document.getElementsByName('scoreA');
      
    for(i = 0; i < el.length; i++) {
        if(el[i].checked) {
        // document.getElementById("result").innerHTML = "Gender: "+ele[i].value;
        // let score = document.getElementById("score").innerHTML
        // document.getElementById("score").innerHTML = score + el[i].value;
        // document.getElementById("s1a").value = el[i].value;
        // document.getElementsByClassName('score-active')[0].value = el[i].value;
        document.getElementsByClassName('score-active')[0].innerHTML = el[i].value;
        el[i].checked = false;
        }
    }

    if(document.getElementsByClassName('score-active')[0].id === 's1a') {
        document.getElementById('s1a').classList.remove('score-active');
        document.getElementById('s1b').classList.add('score-active');
    }
    else if(document.getElementsByClassName('score-active')[0].id === 's1b') {
        document.getElementById('s1b').classList.remove('score-active');
        document.getElementById('s2a').classList.add('score-active');
    }
    else if(document.getElementsByClassName('score-active')[0].id === 's2a') {
        document.getElementById('s2a').classList.remove('score-active');
        document.getElementById('s2b').classList.add('score-active');
    }
    else if(document.getElementsByClassName('score-active')[0].id === 's2b') {
        document.getElementById('s2b').classList.remove('score-active');
        document.getElementById('s3a').classList.add('score-active');
    }
    else if(document.getElementsByClassName('score-active')[0].id === 's3a') {
        document.getElementById('s3a').classList.remove('score-active');
        document.getElementById('s3b').classList.add('score-active');
    }
    else if(document.getElementsByClassName('score-active')[0].id === 's3b') {
        document.getElementById('s3b').classList.remove('score-active');
        console.log('done');
    }
}


// Tried using the parent, but it always logs the previous one as well 
// document.getElementById("radios-score").addEventListener("click", displayRadioValue);
document.getElementsByName("scoreA").forEach(radio => {
    radio.addEventListener("click", displayRadioValue);
});