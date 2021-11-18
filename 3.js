function Constr(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt('Skolko nyjno dobavit?', 0);
  };
}
let constr = new Constr(0);
constr.read();
constr.read();
alert(constr.value);
