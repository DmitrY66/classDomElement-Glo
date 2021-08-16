'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.createElem = function () {
  if (this.selector === '.elem') {
    let createDiv = document.createElement('div');
    createDiv.className = 'elem';
    createDiv.textContent = "Это созданный блок";
    createDiv.style.cssText = 
    `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}`;
    
    document.body.appendChild(createDiv);
  } else if (this.selector === '#elem') {
    let createPar = document.createElement('p');
    createPar.id = 'elem';
    createPar.textContent = "Это созданный параграф";
    createPar.style.cssText = 
    `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}`;
    document.body.appendChild(createPar);
  }

};

let domElement1 = new DomElement('.elem', '50px', '800px', 'LightCoral', '40px');
let domElement2 = new DomElement('#elem', '80px', '800px', 'LightSeaGreen', '44px');

domElement1.createElem();
domElement2.createElem();























