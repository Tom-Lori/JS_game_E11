class Spikes{
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
}

class Trap{
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
	this.width = width
        this.height = height
    }
}

class Laser{
    constructor(start_x, start_y, end_x, end_y) {
        this.start_x = start_x
	this.start_y = start_y
        this.end_x = end_x
        this.end_y = end_y
    }
}

class Teleporter{
    constructor(x, y, width) {
	this.x = x
        this.y = y
	this.width = width
    }
}

class MovingSaw{
    constructor(start_x, start_y, end_x, end_y, radius) {
        this.start_x = start_x
	this.start_y = start_y
        this.end_x = end_x
        this.end_y = end_y
	this.x = start_x
        this.y = start_y
	this.radius = radius
        this.dir_x = "right"
	this.dir_y = "down"
    }
}

class Glue{
    constructor(x, y, width, height) {
        this.x = x
	this.y = y
        this.width = width
	this.height = height
    }
}

let i = 0
let j = 0
let death = 0
let div = document.querySelector("div")

function check_impaled(player, Spikes) {
    if (((player.x >= Spikes.x) && (player.x <= (Spikes.x + Spikes.width))) && ((player.y >= Spikes.y) && (player.y <= (Spikes.y + Spikes.height)))) {
        player.x = 115;
        player.y = 185;
	death = death + 1
	div.innerHTML = "Death: " + death
    }
}

function check_trap(player, Trap) {
    if (((player.x >= Trap.x) && (player.x <= (Trap.x + Trap.width))) && (((player.y + player.height) >= Trap.y) && ((player.y + player.height) <= (Trap.y + Trap.height))))
	player.y = player.y + player.height
    }

function check_fried(player, Laser) {
    if ((player.x >= Laser.start_x && player.x <= Laser.end_x) && (player.y >= Laser.start_y && player.y <= Laser.end_y)) {
        player.x = 115;
        player.y = 185;
	death = death + 1
	div.innerHTML = "Death: " + death
    }
}

function check_teleported(player, Teleporter) {
    if ((player.x >= Teleporter.x && player.x <= Teleporter.x + Teleporter.width) && player.y + player.height == Teleporter.y) {
        player.x = Math.floor(Math.random() * Math.floor(1000))
        player.y = Math.floor(Math.random() * Math.floor(500))
    }
}

function check_sawed(player, MovingSaw) {
    if ((player.x >= MovingSaw.x && player.x <= (MovingSaw.x + MovingSaw.radius)) && (player.y >= MovingSaw.y && player.y <= (MovingSaw.y + MovingSaw.radius))) {
        player.x = 115;
        player.y = 185;
	death = death + 1
	div.innerHTML = "Death: " + death
    }
    if (MovingSaw.dir_x == "right") {
        if (MovingSaw.x == MovingSaw.end_x)
            MovingSaw.dir_x = "left"
        else
            MovingSaw.x = MovingSaw.x + 1
    } else if (MovingSaw.dir_x == "left") {
        if (MovingSaw.x == MovingSaw.start_x)
            MovingSaw.dir_x = "right"
        else
            MovingSaw.x = MovingSaw.x - 1
    }
    if (MovingSaw.dir_y == "down") {
        if (MovingSaw.y == MovingSaw.end_y)
            MovingSaw.dir_y = "up"
        else
            MovingSaw.y = MovingSaw.y + 1
    } else if (MovingSaw.dir_y == "up") {
        if (MovingSaw.y == MovingSaw.start_y)
            MovingSaw.dir_y = "down"
        else
            MovingSaw.y = MovingSaw.y - 1
    }
}

function check_glue(player, Glue) {
    while (((player.x >= Trap.x) && (player.x <= (Trap.x + Trap.width))) && (((player.y + player.height) >= Trap.y) && ((player.y + player.height) <= (Trap.y + Trap.height))))
        player.y = player.y + 1
    console.log(player.x , player.y + player.height)
}
