class Monster extends Fighter {
     constructor(name, strength, dexterity, image, x, y, range, experience =500 ) {
      super(name, strength, dexterity, image, x, y, range, experience)
      this.experience = experience
}
}