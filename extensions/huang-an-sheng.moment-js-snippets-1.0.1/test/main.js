const a = '2012-02-22'

const list = [
    moment('2012/02/22', 'YYYY/MM/DD').format('Do MMM YYYY dddd')
]

const target = document.getElementById('target');

list.forEach(item => {
    target.innerHTML += `<h4>${item}</h4>`;
});

