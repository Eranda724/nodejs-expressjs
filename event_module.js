const EventEmitter = require("events")
const eventEmitter = new EventEmitter()

eventEmitter.on("tutorial1", () => {
    console.log('tut has occer');
})

eventEmitter.emit("tutorial1")

eventEmitter.on("tutorial2", (n1, n2) => {
    console.log(n1 + n2);
})

eventEmitter.emit("tutorial2", 1, 2)

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let pedro = new Person("Pedro");
let eranda = new Person("Eranda");

pedro.on("name", () => {
    console.log("my name is " + pedro.name);
})

eranda.on("name", () => {
    console.log("my name is " + eranda.name);
})


pedro.emit("name")
eranda.emit("name")