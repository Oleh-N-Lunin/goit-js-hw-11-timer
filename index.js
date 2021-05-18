class Timer {
    constructor(selector, targetDate) {
        this.selector = document.querySelector(selector);
        this.targetDate = new Date(targetDate);
    }

    startTimer() {
        this.countdownId = setInterval(() => {
            this.currentTime = new Date();
            this.remainingTime = this.targetDate - this.currentTime;
            this.configTime(),
            this.changeText();
            if (this.remainingTime < 0) {
                this.stopTimer();
              }
        }, 1000)
    }

    configTime() {
        this.days = Math.floor(this.remainingTime / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((this.remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.mins = Math.floor((this.remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        this.secs = Math.floor((this.remainingTime % (1000 * 60)) / 1000);
    }

    changeText() {
        this.refs = {
            days: document.querySelector("[data-value=days]"),
            hours: document.querySelector("[data-value=hours]"),
            minutes: document.querySelector("[data-value=mins]"),
            seconds: document.querySelector("[data-value=secs]"),
        };

        this.refs.days.textContent = this.pad(this.days);
        this.refs.hours.textContent = this.pad(this.hours);
        this.refs.minutes.textContent = this.pad(this.mins);
        this.refs.seconds.textContent = this.pad(this.secs);
    }

    stopTimer() {
        clearInterval(this.countdownId);
        this.remainingTime = 0;
        this.configTime(this.remainingTime);
        this.changeText(this.remainingTime);
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

}

const timer = new Timer('#timer-1', 'December 31, 2021, 23:59');

timer.startTimer();