function getValueByElement(element) {
    const Element = document.getElementById(element);

    const ElementString = Element.value;
    if (!ElementString) {
        return alert('You should type properly');
    } else if (ElementString < 0) {
        return alert('Negative value not allow!!!');
    } else if (isNaN(ElementString)) {
        return alert('String not allow!!!');
    }
    const NewValue = parseFloat(ElementString);

    Element.value = '';
    return NewValue;
}

function setElementValueById(element, value) {
    const Element = document.getElementById(element);
    Element.innerText = value;
}
// >>>>>>>>>>>>>>>>>This is triangle Section<<<<<<<<<<<
document.getElementById('triangle-btn').addEventListener('click', function() {
    const bField = getValueByElement('triangle-b');
    setElementValueById('show-triangle-b', bField);
    const hField = getValueByElement('triangle-h');
    setElementValueById('show-triangle-h', hField);
    const total = 0.5 * bField * hField;
    setElementValueById('triangle-total', total.toFixed(2));
});

// >>>>>>>>>>>>>>>>>This is Rectangle Section<<<<<<<<<<<
document.getElementById('rectangle-btn').addEventListener('click', function() {
    const wField = getValueByElement('rectangle-w');
    setElementValueById('show-rectangle-w', wField);
    const lField = getValueByElement('rectangle-l');
    setElementValueById('show-rectangle-l', lField);
    const total = wField * lField;
    setElementValueById('rectangle-total', total);
});

// >>>>>>>>>>>>>>>>>This is Parallelogram Section<<<<<<<<<<<
document.getElementById('parallelogram-btn').addEventListener('click', function() {
    const bField = getValueByElement('parallelogram-b');
    setElementValueById('show-parallelogram-b', bField);
    const hField = getValueByElement('parallelogram-h');
    setElementValueById('show-parallelogram-h', hField);
    const total = bField * hField;
    setElementValueById('parallelogram-total', total);
});

// >>>>>>>>>>>>>>>>>This is Rhombus Section<<<<<<<<<<<
document.getElementById('rhombus-btn').addEventListener('click', function() {
    const d1Field = getValueByElement('rhombus-d1');
    setElementValueById('show-rhombus-d1', d1Field);
    const d2Field = getValueByElement('rhombus-d2');
    setElementValueById('show-rhombus-d2', d2Field);
    const total = 0.5 * d1Field * d2Field;
    setElementValueById('rhombus-total', total.toFixed(2));
});

// >>>>>>>>>>>>>>>>>This is Pentagon Section<<<<<<<<<<<
document.getElementById('pentagon-btn').addEventListener('click', function() {
    const pField = getValueByElement('pentagon-p');
    setElementValueById('show-pentagon-p', pField);
    const bField = getValueByElement('pentagon-b');
    setElementValueById('show-pentagon-b', bField);
    const total = 0.5 * pField * bField;
    setElementValueById('pentagon-total', total);
});

// >>>>>>>>>>>>>>>>>This is ellipse Section<<<<<<<<<<<
document.getElementById('ellipse-btn').addEventListener('click', function() {
    const aField = getValueByElement('ellipse-a');
    setElementValueById('show-ellipse-a', aField);
    const bField = getValueByElement('ellipse-b');
    setElementValueById('show-ellipse-b', bField);
    const total = 3.14 * aField * bField;
    setElementValueById('ellipse-total', total.toFixed(2));
});