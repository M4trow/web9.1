function Calculator(){

  this.read = function() {
    this.a = +prompt('Vvedite a');
    this.b = +prompt('Vvedite b');
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
}
let calculator = new Calculator();
calculator.read();
alert( "Suma: " + calculator.sum() );
alert( "Mnojenya: " + calculator.mul() );
