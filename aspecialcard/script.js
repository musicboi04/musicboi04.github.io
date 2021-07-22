const text = document.querySelector('.text');
const heart = document.querySelector('.heart');
const hide = document.querySelector('.hide');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
var hr1 = document.getElementById('hr1');
var hr2 = null;
var hr3 = null;
var hr4 = null;
var hr5 = null;
var hr6 = null;
var hr7 = null;
var rst = null;

hr1.addEventListener('click', () => {
    one.classList.remove('hide');
    text.classList.remove('hide');
    hr1.id = "hr2"; 
    hr2 = document.getElementById('hr2');
    hr2.addEventListener('click', () =>{
        two.classList.remove('hide');
        hr2.id = "hr3";
        hr3 = document.getElementById('hr3');
        hr3.addEventListener('click', () =>{
            three.classList.remove('hide')
            hr3.id = "hr4";
            hr4 = document.getElementById('hr4');
            hr4.addEventListener('click', () =>{
                four.classList.remove('hide');
                hr4.id = "hr5";
                hr5 = document.getElementById('hr5');
                hr5.addEventListener('click', () =>{
                    five.classList.remove('hide');
                    hr5.id = "hr6";
                    hr6 = document.getElementById('hr6');
                    hr6.addEventListener('click', () =>{
                        six.classList.remove('hide');
                        hr6.id = "hr7";
                        hr7 = document.getElementById('hr7');
                        hr7.addEventListener('click', () =>{
                            seven.classList.remove('hide');
                            hr7.id = "rst";
                            rst = document.getElementById('rst');
                            rst.addEventListener('click', () =>{
                                text.classList.add('hide'); 
                                one.classList.add('hide');
                                two.classList.add('hide');
                                three.classList.add('hide');
                                four.classList.add('hide');
                                five.classList.add('hide');
                                six.classList.add('hide');
                                seven.classList.add('hide');  
                                window.location.reload();                 
                            })
                        })
                    })
                })
            })
        })
    })
})

const cover = document.querySelector('.cover');
var day1 = new Date();
var day2 = new Date("08/16/2021");

day1.setHours(0, 0, 0, 0);

if (day1 >= day2) {
    cover.classList.add('hide');
} else {
    var difference= Math.abs(day2-day1);
    days = difference/(1000 * 3600 * 24)
    document.getElementById("days").innerHTML = days+" days left";
}