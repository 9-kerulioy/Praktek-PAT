// Kelas Hewan dengan properti dan konstruktor
class Hewan {
  constructor(nama, usia) {
    this.nama = nama;
    this.usia = usia;
    this.isMammal = true;
  }
}

// Kelas Rabbit turunan dari Hewan dengan metode eat
class Rabbit extends Hewan {
  eat() {
    return `${this.nama} sedang makan!`;
  }
}

// Kelas Eagle turunan dari Hewan dengan metode fly dan isMammal = false
class Eagle extends Hewan {
  constructor(nama, usia) {
    super(nama, usia);
    this.isMammal = false;
  }

  fly() {
    return `${this.nama} terbang!`;
  }
}

// Instance myRabbit dan myEagle dengan nilai yang diminta
const myRabbit = new Rabbit("Labi", 2);
const myEagle = new Eagle("Garuda", 4);

// Output sesuai permintaan
console.log(`${myRabbit.eat()} ${myEagle.fly()}`);
console.log(
  `Kelinci { nama: '${myRabbit.nama}', umur: ${myRabbit.usia}, isMamalia: ${myRabbit.isMammal} }`
);
console.log(
  `Elang { nama: '${myEagle.nama}', umur: ${myEagle.usia}, mamalia: ${myEagle.isMammal} }`
);
