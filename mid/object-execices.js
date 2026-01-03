let object1 = {
  name: "socio",
  lenguage: "rust",
  thing: () => console.log("do,nothing"),
  getName() {
    console.log(`my name is ${this.name}`);
  },
  setLenguage(lenguage) {
    this.lenguage = lenguage;
  },
};

object1.bye = () => {
  console.log("broooo");
};

object1.thing();

let object2 = Object.create(object1);

let objet3 = Object.assign(object2, object1);

class Empire {
  constructor(name, poblation) {
    if (new.target == Empire) {
      throw new Error("no se puede insatanciar un imperio");
    }
    this.name = name;
    this.poblation = poblation;
  }

  crecer() {
    throw new Error("el metodo crecer debe ser implementado");
  }
}

class Humankind extends Empire {
  constructor(name, poblation, type, war) {
    super(name, poblation);
    this.type = type;
    this.war = war;
  }

  crecer(number) {
    this.poblation += number;
  }
}

const obliteratorMixin = {
  obliterar() {
    console.log("paila menor");
  },
};

let Humankind1 = new Humankind("tau", 900, "guerrera", false);
Object.assign(Humankind1, obliteratorMixin);

Humankind1.obliterar();



class Necontrir extends Empire {
  constructor(name, poblation, type, war) {
    if (Necontrir.instance) {
      return Necontrir.instance;
    }

    super(name, poblation);
    this.type = type;
    this.war = war;
    this.protocolosActivos = false;

    Necontrir.instance = this;
  }

  despertar() {
    this.protocolosActivos = true;
  }

  crecer(number) {
    this.poblation += number;
  }
}

let necron1 = new Necontrir("paila", 234320, "inmortal", true);
let necron2 = new Necontrir("otro", 1, "x", false);

const necronProxyHandler = {
  get(target, prop) {
    return target[prop];
  },

  set(target, prop, value) {
    if (prop === "name") {
      return false;
    }

    target[prop] = value;
    return true;
  }
};

let necronProxy = new Proxy(necron1, necronProxyHandler);

necronProxy.despertar();
necronProxy.poblation += 1000;
necronProxy.name = "chorizo";

console.log(necron1);
console.log(necron2);