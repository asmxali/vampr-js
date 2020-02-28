class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    // climb "up" the tree (using iteration), counting nodes, until no creator is found
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }

    return numberOfVampires;
  }
  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let numberOfVampires = 0;
    let currentVampire = this;
    // climb "up" the tree (using iteration), counting nodes, until no creator is found
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }

    let currentVampire1 = vampire;
    let numberOfVampires1 = 0;
    while (currentVampire1.creator) {
      currentVampire1 = currentVampire1.creator;
      numberOfVampires1++;
    }

    return numberOfVampires1 > numberOfVampires;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let numberOfVampires = [];
    let currentVampire = this;
    let name ;
    let name1;
    // climb "up" the tree (using iteration), counting nodes, until no creator is found
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      name = currentVampire.name;
      numberOfVampires.push(name);
    }

    let currentVampire1 = vampire;
    let numberOfVampires1 = [];
    while (currentVampire1.creator) {
      currentVampire1 = currentVampire1.creator;
      name1 = currentVampire1.name;
      numberOfVampires1.push(name1);
    }

    let answer = numberOfVampires1.forEach( (vampire) => {
      if (
        vampire ===
        numberOfVampires.forEach( (vampire1) => {
          return vampire1;
        })
      )
        return vampire;
    });

    return answer;
  }
}

module.exports = Vampire;
