function updateTime() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const current_time = new Date();
    const dayOfWeek = daysOfWeek[current_time.getDay()];

    current_time.setHours(current_time.getHours() + 1);
    currentTimeElement.textContent = current_time.toUTCString().split(' ')[4];
    currentDayElement.textContent = dayOfWeek;
}

setInterval(updateTime, 1000);
