
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(handleTimeUpdate, 1000));

function handleTimeUpdate(data) {
    console.log(data)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const playbackTime = localStorage.getItem(STORAGE_KEY);
const currentTime = JSON.parse(playbackTime);

player.setCurrentTime(currentTime.seconds);