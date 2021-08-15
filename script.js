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
    createDiv.style.cssText = 'height: 40px; width: 400px; background: green; font-size: 38px; color: white';
    document.body.appendChild(createDiv);
  } else if (this.selector === '#elem') {
    let createPar = document.createElement('p');
    createPar.id = 'elem';
    createPar.textContent = "Это созданный параграф";
    createPar.style.cssText = 'height: 40px; width: 400px; background: blue; font-size: 33px; color: white';
    document.body.appendChild(createPar);
  }
};

let domElement1 = new DomElement('.elem');
let domElement2 = new DomElement('#elem');

domElement1.createElem();
domElement2.createElem();
