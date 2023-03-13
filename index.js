const refreshBtn = document.querySelector(".refresh-btn") ;
const container = document.querySelector(".container")

const maxPaletteBox = 14;

const generatePalette = ()=>{
    container.innerHTML = "";
    for (let i = 0; i < maxPaletteBox ; i++) {
        // Generating a randm hex color code:
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`; //padStart will apend 0 after # to ensure that the randomHex string is always 6 character long.


        // creating a new "li" element and inserting it into the container
        const color = document.createElement("li");
        color.classList.add("colors");
        color.innerHTML = `<div class="rec-box" style="background: ${randomHex}" ></div>
        <span class="hex-no">${randomHex}</span>`;

        container.appendChild(color);    
        color.addEventListener('click', ()=>copyColor(color, randomHex))
    }
}
generatePalette();

const copyColor = (elem, hexVal) =>{
    const colorElement = elem.querySelector(".hex-no");
    //coping the hex value and updating the hex-no as copied.
    // and changing text to orginal hex-no after 1 sec.
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerText ="copied";
        setTimeout(()=> colorElement.innerText = hexVal,1000);
    }).catch(()=> alert("Fail to copy the color code")); // showing alert if code is not copied.
}

refreshBtn.addEventListener('click',generatePalette);