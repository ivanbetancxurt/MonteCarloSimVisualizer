document.getElementById('+').addEventListener('click', () => {
    document.getElementById('integrand-input').value += '+';
});

document.getElementById('-').addEventListener('click', () => {
    document.getElementById('integrand-input').value += '-';
});

document.getElementById('×').addEventListener('click', () => {
    document.getElementById('integrand-input').value += '*';
});

document.getElementById('÷').addEventListener('click', () => {
    document.getElementById('integrand-input').value += '/';
});

document.getElementById('^').addEventListener('click', () => {
    document.getElementById('integrand-input').value += '^';
});

document.getElementById('√').addEventListener('click', () => {
    document.getElementById('integrand-input').value += '√';
});

document.getElementById('π').addEventListener('click', () => {
    document.getElementById('integrand-input').value += 'π';
});

document.getElementById('e').addEventListener('click', () => {
    document.getElementById('integrand-input').value += 'e';
});

document.getElementById('(').addEventListener('click', () => {
    document.getElementById('integrand-input').value += '(';
});

document.getElementById(')').addEventListener('click', () => {
    document.getElementById('integrand-input').value += ')';
});

document.getElementById('integrand-input').addEventListener('input', () => {
    var integrandInput = document.getElementById('integrand-input').value;
    document.getElementById('integral').innerText = '\\[∫' + integrandInput + ' dx\\]';
    MathJax.typesetPromise();
})