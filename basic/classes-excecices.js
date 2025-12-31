class empire {
  constructor(amount, primarch) {
    this.amount = amount;
    this.primarch = primarch;
  }

  count(amount) {
    console.log(`somos ${amount} humanos`);
  }

  obliterar() {
    return "te obliteramos";
  }
}

let tau = new empire(400, "mon'ka");
console.log(tau.amount);
console.log(tau.primarch);

class humankind extends empire {
  #ships;
  #worlds;
  constructor(amount, primarch, worlds, ships) {
    super(amount, primarch);
    this.#ships = ships;
    this.#worlds = worlds;
  }

  get ships() {
    return this.#ships;
  }

  set worlds(newWorld) {
    this.#worlds = newWorld;
  }
  obliterar() {
    return "exterminatus";
  }
}

let humankind1 = new humankind(500, "gulliman", 200, 500);

console.log(humankind1.ships);
console.log(humankind1.obliterar())
