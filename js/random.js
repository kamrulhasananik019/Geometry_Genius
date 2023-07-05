function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var div = document.getElementById('bg-content-1');
div.onmouseover = function() {
    this.style.backgroundColor = getRandomColor();
    var h2s = this.getElementsByTagName('div');
    var text = document.getElementById('text');
};
div.onmouseout = function() {
    this.style.backgroundColor = 'transparent';
    var h2s = this.getElementsByTagName('h2');
};
var div = document.getElementById('bg-content-2');
div.onmouseover = function() {
    this.style.backgroundColor = getRandomColor();
    var h2s = this.getElementsByTagName('div');
    var text = document.getElementById('text');
};
div.onmouseout = function() {
    this.style.backgroundColor = 'transparent';
    var h2s = this.getElementsByTagName('h2');
};
var div = document.getElementById('bg-content-3');
div.onmouseover = function() {
    this.style.backgroundColor = getRandomColor();
    var h2s = this.getElementsByTagName('div');
    var text = document.getElementById('text');
};
div.onmouseout = function() {
    this.style.backgroundColor = 'transparent';
    var h2s = this.getElementsByTagName('h2');
};
var div = document.getElementById('bg-content-4');
div.onmouseover = function() {
    this.style.backgroundColor = getRandomColor();
    var h2s = this.getElementsByTagName('div');
    var text = document.getElementById('text');
};
div.onmouseout = function() {
    this.style.backgroundColor = 'transparent';
    var h2s = this.getElementsByTagName('h2');
};
var div = document.getElementById('bg-content-5');
div.onmouseover = function() {
    this.style.backgroundColor = getRandomColor();
    var h2s = this.getElementsByTagName('div');
    var text = document.getElementById('text');
};
div.onmouseout = function() {
    this.style.backgroundColor = 'transparent';
    var h2s = this.getElementsByTagName('h2');
};
var div = document.getElementById('bg-content-6');
div.onmouseover = function() {
    this.style.backgroundColor = getRandomColor();
    var h2s = this.getElementsByTagName('div');
    var text = document.getElementById('text');
};
div.onmouseout = function() {
    this.style.backgroundColor = 'transparent';
    var h2s = this.getElementsByTagName('h2');
};