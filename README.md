# spotify-AdMuter-for-firefox

This is a simple extension for firefox. It was originally developed for Chrome, 
but Spotify continues to play adds despite muting in Chrome. This is for the Spotify Web Player.

It was "ported" to Firefox. 

## How it works

This extension checks the HTML DOM of the page and mutes the page if it finds that an Advertisement is playing. 
Spotify indicates that an advert is playing by changing the title of the song to "Advertisement", and this extension
simply checks if this is the case.

The extension forces a mute on the tab if it finds "Advertisement". *It forces unmute if an advert is not playing. 

## How to install

To install, download the project.
Then, go to about:debugging in your firefox url bar. 
Finally, load temporary add-on and select the manifest.json of the extension.
Voila!

