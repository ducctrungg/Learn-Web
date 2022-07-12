const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

setInterval(() => {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = currentDate.getMinutes() / 60;
    const hourRatio = currentDate.getHours() / 12;
    setRotation(secondHand, secondRatio)
    setRotation(secondHand, minuteRatio)
    setRotation(secondHand, hourRatio)
}, 1000);

function setRotation(element, rotationRatio)
{
    element.style.setProperty('--rotation', rotationRatio * 360)
}