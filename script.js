let qrcode = new QRCode(document.querySelector('#qrcode'), {
    text: 'test',
    width: 100,
    height: 100,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

let word = ['무럭무럭','꼬옥','하루종일', '씰룩', '근질근질', '와그르르', '대굴대굴'];

let rand = Math.floor(Math.random() * word.length);

qrcode.makeCode(word[rand]);

let controls = document.querySelector('.menu-controls');
let menuOpen = document.querySelector('.open_btn');
let menuClose = document.querySelector('.close_btn');
let navigation = document.querySelector('.nav');

function toggleMenu() {
    controls.addEventListener('click', () => {
        menuOpen.classList.toggle('hide');
        menuClose.classList.toggle('show');

        if (menuClose.classList.contains('show')) {
            navigation.classList.remove('close');
            navigation.classList.add('open');
        } else {
            navigation.classList.add('close');
            setTimeout(function () {
                document.getElementById('test').style.transform = `translateY( ` + -1 * standHeight + `px)`;
                navigation.classList.remove('open');
            }, 7900);

        }
    });
}

toggleMenu();


const css = document.styleSheets[0];
let index = css.cssRules.length;
let selctor = `@keyframes myAnimation`;

let test = document.querySelectorAll('.info');
let standHeight = document.querySelector('.info-container').offsetHeight;
console.log(standHeight);

document.getElementById('test').style.transform = `translateY( ` + -1 * standHeight + `px)`;
let sumHeight = 0;
let compStyles;
let proper = '';

for (let i = 0; i < test.length; i++) {

    compStyles = window.getComputedStyle(test[test.length - i - 1]);

    sumHeight += parseInt(compStyles.getPropertyValue('height').slice(0, compStyles.getPropertyValue('height').length - 2));
    console.log(sumHeight);
    proper += sumHeight / standHeight * 100 + `% { transform: translateY( calc(` + -1 * standHeight + `px + -1rem + ` + sumHeight + `px)); }`;

    sumHeight += parseInt(compStyles.getPropertyValue('padding-top').slice(0, compStyles.getPropertyValue('padding-top').length - 2));
    console.log(sumHeight);
    proper += sumHeight / standHeight * 100 + `% { transform: translateY( calc(` + -1 * standHeight + `px + -1rem + ` + sumHeight + `px)); }`;


}
proper += `100% {transform: translateY(0%);}`
console.log(proper);

css.insertRule(selctor + `{` + proper + `}`, css.cssRules.length);
let selctorClose = `@keyframes myCloseAnimation`;
proper = '';
sumHeight = 0;
proper += `0% {transform: translateY(0%);}`
for (let i = 0; i < test.length; i++) {

    compStyles = window.getComputedStyle(test[i]);


    sumHeight += parseInt(compStyles.getPropertyValue('padding-top').slice(0, compStyles.getPropertyValue('padding-top').length - 2));
    console.log(sumHeight);
    proper += sumHeight / standHeight * 100 + `% { transform: translateY( calc(-1.5rem + ` + -1 * sumHeight + `px)); }`;

    if (parseInt(compStyles.getPropertyValue('height').slice(0, compStyles.getPropertyValue('height').length - 2)) === 0) continue;
    sumHeight += parseInt(compStyles.getPropertyValue('height').slice(0, compStyles.getPropertyValue('height').length - 2));
    console.log(sumHeight);
    proper += sumHeight / standHeight * 100 + `% { transform: translateY( calc(-1.5rem + ` + -1 * sumHeight + `px)); }`;


}
// proper += `100% {transform: translateY(calc(-2rem` + -1 * sumHeight + `px));}`
console.log(proper);

css.insertRule(selctorClose + `{` + proper + `}`, css.cssRules.length);