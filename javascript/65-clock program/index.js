const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update() {
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours = formatTime(hours);
        minutes = formatTime(minutes);
        seconds = formatTime(seconds);
        
        return `${hours}:${minutes}:${seconds}`
    }
    function formatZeros(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}