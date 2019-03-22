(function() {
    'use strict';

    setTimeout(() => {
        let songTitle = document.getElementsByClassName('Marquee__wrapper__content')[0].innerText.replace(/ *\([^)]*\) */g, '');
        let stationName = document.getElementsByClassName('NowPlayingTopInfoStationName')[0];
        let songArtist = document.getElementsByClassName('nowPlayingTopInfo__current__artistName')[0].innerText;
        let buttonStyle = 'font-size: 1.8rem; padding: 3px; margin: 5px; border:2px solid white; border-radius: 10px;';
        let bassTabButton = `<a target='_blank' href='https://www.ultimate-guitar.com/search.php?title=${encodeURI(songTitle.replace(/'/g, ''))}+${encodeURI(songArtist.replace(/'/g, ''))}&type=400' style='${buttonStyle}'>"${songTitle}" Bass Tabs</a>`;
        let guitarTabButton = `<a target='_blank' href='https://www.ultimate-guitar.com/search.php?title=${encodeURI(songTitle.replace(/'/g, ''))}+${encodeURI(songArtist.replace(/'/g, ''))}&type=200' style='${buttonStyle}'>"${songTitle}" Guitar Tabs</a>`;
        stationName.innerHTML += `<br />${bassTabButton}`
        stationName.innerHTML += `<br />${guitarTabButton}`;

        function triggerUpdate() {
            stationName.removeChild(stationName.lastChild);
            stationName.removeChild(stationName.lastChild);
            stationName.removeChild(stationName.lastChild);
            stationName.removeChild(stationName.lastChild);
            songTitle = document.getElementsByClassName('Marquee__wrapper__content')[0].innerText.replace(/ *\([^)]*\) */g, '');
            songArtist = document.getElementsByClassName('nowPlayingTopInfo__current__artistName')[0].innerText;
            bassTabButton = `<a target='_blank' href='https://www.ultimate-guitar.com/search.php?title=${encodeURI(songTitle.replace(/'/g, ''))}+${encodeURI(songArtist.replace(/'/g, ''))}&type=400' style='${buttonStyle}'>"${songTitle}" Bass Tabs</a>`;
            guitarTabButton = `<a target='_blank' href='https://www.ultimate-guitar.com/search.php?title=${encodeURI(songTitle.replace(/'/g, ''))}+${encodeURI(songArtist.replace(/'/g, ''))}&type=200' style='${buttonStyle}'>"${songTitle}" Bass Tabs</a>`;
            stationName.innerHTML += `<br />${bassTabButton}`
            stationName.innerHTML += `<br />${guitarTabButton}`;
        }

        setInterval(() => {
            if (songTitle != document.getElementsByClassName('Marquee__wrapper__content')[0].innerText.replace(/ *\([^)]*\) */g, '')) {
                triggerUpdate()
            }
        }, 1000);
    }, 5000);
})();