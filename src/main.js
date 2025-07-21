import $ from 'jquery';
import bootstrap from 'bootstrap'; // Ensure bootstrap styles are applied (this is dimmed in VSCode but still needed)
import './styles/main.scss';

$('#title').html('Hello, Webpack!');
$('.message').html(
	'This is a simple Webpack setup, created with npx, ver 26, test: subdir, config, dev',
);
$('.midsection').html('<img src="images/person-icon.png"/>');
