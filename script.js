// alert("hello!")

function filmetValaszt(filmNev){
    console.log("Választás"+filmNev)

    const elem = document.getElementById("kivalasztott")
    console.log(elem)
    elem.innerHTML="Választás: "+filmNev
}

