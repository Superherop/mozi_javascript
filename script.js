// alert("hello!")

const filmek = [
    {cim:"Trópusi vihar",leiras:"lkdsjhaflksdjhflasdkjhf",kep:"./tropusi_vihar.jpg"},
    {cim:"Matrix",leiras:"Lorem ipsum valami",kep:"./matrix.jpg"},
    {cim:"Borat",leiras:"weqrw nbm,cyxnfza oiasur peo oewir",kep:"./borat.jpg" },
    {cim:"Diktátor",leiras:"lksjdsaz iuasdzroiuasz oiaerhekrjbnlk nabsdf",kep:"./diktator.jpg" }

]

szamlalo=0

function init(){
    const filmekDiv = document.getElementById("filmek")

    filmek.forEach(element => {
        //console.log("ciklus")
        filmekDiv.innerHTML+=`
    <div class="col">
    <div class="card h-100">
      <img src="${element.kep}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.cim}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <button onclick="filmetValaszt('${element.cim}')" class="btn btn-secondary">Kiválaszt</button>
        
      </div>
    </div>
  </div>
  `
    });


    const modernFilmek = document.getElementById("modernFilmek")
    modernFilmek.className="row"

    for(const e of filmek){
    const film = document.createElement("div")
    film.className="col"
    film.innerHTML = "Próba"


    modernFilmek.appendChild(film)
    }




    
}

function torles(){
    document.getElementById("kivalasztott").innerHTML = "Még nem választottál filmet"
    document.getElementById("szamlalo").innerHTML = "0"
    szamlalo = 0

}


function filmetValaszt(filmNev){
    console.log("Választás"+filmNev)

    const elem = document.getElementById("kivalasztott")
    console.log(elem)
    elem.innerHTML="Választás: "+filmNev

    //szamlalo++

    document.getElementById("szamlalo").innerHTML = ++szamlalo
}

const torol = document.getElementsByClassName("btn btn-danger")[0]
torol.onclick=torles



init()
