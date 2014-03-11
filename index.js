var KonamiKeyboard = require('konami-keyboard'),
    EventEmitter = require('events').EventEmitter,
    KonamiTouch = require('konami-touch');

function Konami(){
    var konami = this,
        success = function(){
            konami.emit('konami');
        };
        
    new KonamiKeyboard(success);
    new KonamiTouch(success);
}

Konami.prototype.constructor = Konami;
Konami.prototype = Object.create(EventEmitter.prototype);
module.exports = Konami;
