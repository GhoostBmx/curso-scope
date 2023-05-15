const myGlobal = 0;

function uno(){
    const myNumer = 1;
    console.log(myGlobal);

    function dos (){  // funcion interna
        const padre = 2;
        console.log(myNumer,myGlobal);

        function tres (){
            console.log(padre, myNumer, myGlobal)
        }
        return tres();
    }
    return dos();
}

uno()