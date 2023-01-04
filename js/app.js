let colors = document.getElementsByClassName("colors");
console.log(colors[0]);

let lights = ["light_green", "light_red", "light_yellow", "light_blue"];
let darks = ["dark_green", "dark_red", "dark_yellow", "dark_blue"];

let register = [];

let time = setInterval(() => {
    let color_random = Math.floor(Math.random() * (4 - 0) + 0);
    colors[color_random].id = lights[color_random];

    for (let i = 0; i < colors.length; i++) {
        if (colors[i] != colors[color_random]) {
            colors[i].id = darks[i];
        } else {
            register.push(colors[i]);
        }
    }
}, 1000);

setTimeout(() => {
    clearInterval(time);
    for (let i = 0; i < colors.length; i++) {
            colors[i].id = darks[i];
    }
    console.log(register);
}, 2*1000);