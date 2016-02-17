function upperCaser(input) {
        var am = 'a'.charCodeAt(0);
        var A = 'A'.charCodeAt(0);
        var diff = am - A;
        var z = 'z'.charCodeAt(0);
      return input.split('').map(function(c, i, a){
        var cc = c.charCodeAt(0);
        return (cc >= am && cc <= z)?String.fromCharCode(cc - diff):c;
      }).join('');
}
    
module.exports = upperCaser