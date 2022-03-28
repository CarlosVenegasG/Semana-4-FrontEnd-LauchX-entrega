//
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        //console.log(res);
        if(res.status != "200"){
            console.log(res);
            pokeImage("./exclamacion.png");
            
            const poketemp0 = document.getElementById("pokeType");
            poketemp0.innerHTML = 'Informacion No encontrada';

            const poketemp = document.getElementById("pokeId");
            poketemp.innerHTML = 'Error';
            const poketemp2 = document.getElementById("Nombre");
            poketemp2.innerHTML = 'La ';

            const poketemp3 = document.getElementById("hp");
            poketemp3.innerHTML = 'Informacion';

            const poketemp4 = document.getElementById("attack");
            poketemp4.innerHTML = 'Ingresada';

            const poketemp5 = document.getElementById("defense");
            poketemp5.innerHTML = 'es';

            const poketemp6 = document.getElementById("special-attack");
            poketemp6.innerHTML = 'incorrecta';

            const poketemp7 = document.getElementById("special-defense");
            poketemp7.innerHTML = 'por favor';

            const poketemp8 = document.getElementById("speed");
            poketemp8.innerHTML = 'Ingresa otro dato';
        }
        else{
            return res.json();
        }
        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
        //Datos extras
        let pokeId = data.id;
        console.log(pokeId);
        imprimirId(pokeId);
        //nombre
        let nombre = data.name;
        imprimirNombre(nombre);
        //estadisticas
        let estadisticas = data.stats;
        console.log(estadisticas);
        //tipo de pokemon
        let tipo = data.types[0].type.name;
        imprimirType(tipo);

        
        for (let index = 0; index < estadisticas.length; index++) {
            const element = estadisticas[index];
            //console.log(element.stat.name+' '+element.base_stat);
            imprimirStat(element.stat.name, element.base_stat);
            
        }


    })
}

const imprimirStat =(nombreStat, Stat) =>{
    

    switch (nombreStat) {
        case "hp":
            console.log("Estoy en hp");
            const pokehp = document.getElementById("hp");
            pokehp.innerHTML = '|'+nombreStat+' '+Stat+'|';
            break;

        case "attack":
            console.log("Estoy en attack");
            const pokeattack = document.getElementById("attack");
            pokeattack.innerHTML = '|'+nombreStat+' '+Stat+'|';
            break;
        
        case "defense":
            console.log("Estoy en defense");
            const pokedef = document.getElementById("defense");
            pokedef.innerHTML = '|'+nombreStat+' '+Stat+'|';
            break;

        case "special-attack":
            console.log("Estoy en sa");
            const pokesa = document.getElementById("special-attack");
            pokesa.innerHTML = '|'+nombreStat+' '+Stat+'|';
            break;

        case "special-defense":
            console.log("Estoy en sd");
            const pokesd = document.getElementById("special-defense");
            pokesd.innerHTML = '|'+nombreStat+' '+Stat+'|';
            break;

        case "speed":
            console.log("Estoy en speed");
            const pokespeed = document.getElementById("speed");
            pokespeed.innerHTML = '|'+nombreStat+' '+Stat+'|';
            break;

        default:
            console.log("El valor es desconocido");
            break;
    }

}

const imprimirType = (type) =>{//Funcion que imprime el tipo de pokemon
    console.log(type);
    const pokeValor = document.getElementById("pokeType");
    pokeValor.innerHTML = 'Tipo '+type;


    //var objetivo = document.getElementById('texto_nav1');
    //objetivo.innerHTML = fechacompleta;
    
    
}

const imprimirId = (pokeId) =>{//Funcion que imprime el numero de pokemon
    console.log(pokeId);
    const pokeValor = document.getElementById("pokeId");
    pokeValor.innerHTML = 'N° '+pokeId;


    //var objetivo = document.getElementById('texto_nav1');
    //objetivo.innerHTML = fechacompleta;
    
    
}

const imprimirNombre = (nombre) =>{//Funcion que imprime el nombre del pokemon
    console.log(nombre);
    const pokeName = document.getElementById("Nombre");
    pokeName.innerHTML = nombre;
    //var objetivo = document.getElementById('texto_nav1');
    //objetivo.innerHTML = fechacompleta;
}

const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src=url;
}
//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");

//fetchPokemon();

const imprimir = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("Hola "+ pokeInput);
}