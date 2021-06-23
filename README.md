# Radio Paradise Bot
A Discord bot for playing [Radio Paradise](https://radioparadise.com/) in a voice channel.

## Details
This bot can run the following commands (and more like `help`):
* `play`: The bot starts the music playback. You can choose one of the channels 'main, mellow, rock, world-etc' and a 
  playback quality '320k, 128k, 64k, 32k'. Default are main and 128k
* `pause`: The bot is pausing the music playback
* `resume`: The bot resumes music playback.
* `join`: The bot joins in the voice channel you are currently in.
* `leave`: The bot leaves the voice channel.

## Preparations
* You need [node.js](https://nodejs.org/en/) installed.
* You need a [Discord API Bot](https://discord.com/developers/applications) with its token.
* You need a [Discord server](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server) on which you can set permissions, so you can invite the bot and give it the following permissions:
    * View Channels
    * Send Messages
    * Read Message History
    * Connect
    * Speak

## Configuration
1. Rename the configuration file *(/config/config-template.json)* from ```config-template.json``` to ```config.json```
2. Open the configuration file (now ```config.json```) and set:
    * your bots ``prefix``
    * your bots ``token``
    * your ``admin id's``: Enter a discord user id in quotation marks and separate several with a comma ```[ "<id>", "<id>", ..., "<id>"]```.\
      These are the only users who have the permission to execute the commands of this bot.
    * **OPTIONAL**: Change `lang` from `en` to `de` for german instead of english language.
    * **OPTIONAL**: change default channel or quality
3. Run ```npm install```.
4. Run `npm install ffmpeg-static`

## Run
Run ```index.js``` with ```npm start``` or ```node index.js```.
   
