import bootstrap from 'bootstrap'; // Ensure bootstrap styles are applied (this is dimmed in VSCode but still needed)
import './styles/main.scss';
import videojs from 'video.js';
import tram from './media/tram.mp4';

videojs(document.querySelector('#tramVideo'), {
	controls: true,
}).ready(function () {
	const vPlayer = this;
	vPlayer.src(tram);
});
