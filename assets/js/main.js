const cutMe = () => {
    const eingabe = document.querySelector("#eingabe").value;
    const trennBei = document.querySelector("#trennBei").value;

    const davor = document.querySelector("#davor").checked;
    const danach = document.querySelector("#danach").checked;

    const vordererTeil = document.querySelector(".vorne");
    const hintererTeil = document.querySelector(".hinten");

    const cutIndex = eingabe.indexOf(trennBei);

    
    if (davor) {
        ergebnisVordererTeil = eingabe.slice(0, cutIndex);
        ergebnisHintererTeil = eingabe.slice(cutIndex);
        vordererTeil.innerHTML = ergebnisVordererTeil;
        hintererTeil.innerHTML = ergebnisHintererTeil;
    }
    else if (danach) {
        ergebnisVordererTeil = eingabe.slice(0, cutIndex + trennBei.length);
        ergebnisHintererTeil = eingabe.slice(cutIndex + trennBei.length);
        vordererTeil.innerHTML = ergebnisVordererTeil;
        hintererTeil.innerHTML = ergebnisHintererTeil;
    }
}