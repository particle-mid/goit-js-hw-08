
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time"

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(handleTimeUpdate, 1000));

function handleTimeUpdate(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
}

const currentTime = localStorage.getItem(STORAGE_KEY);
if (currentTime) {
    player.setCurrentTime(currentTime);
}
