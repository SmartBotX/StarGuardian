<p align="center"><img src="https://i.imgur.com/mwOFCBO.png" width="260" height="220"></p>

### <p align="center">StarGuardian - v3</p>
------------------------------------------------------
StarGuardian is a versatile bot that can be used for a variety of purposes, including fun, security, music, and utilities.

- Fun: StarGuardian can provide you with animal facts, your daily horoscope, and memes from Reddit. Simply type /animalfact, /horoscope, or /memes to learn more.
- Security: StarGuardian can check links for scams and help you stay safe online. Simply type /scamcheck followed by the link you want to check to learn more.
- Music: StarGuardian can check the current playing music from Spotify through Discord status. Simply type /playcheck to see what's playing.
- Utilities: StarGuardian can provide you with information about servers, users, and more. Simply type /info, /invite, /ping, /serverinfo, or /userinfo to learn more.

StarGuardian also has a unique feature called the ILoveYou command, which is designed to reject user confessions in a lighthearted and humorous way. Simply type /iloveyou to use this command.

Overall, StarGuardian is a powerful and versatile bot that can be used for a variety of purposes. If you're looking for a bot that can help you have fun, stay safe, and get things done, then StarGuardian is a great option.

# Get Started

The following things are required:
- [Node.js](https://nodejs.org/en)
- [VSCode](https://code.visualstudio.com/) or any editor you want
- [Discord Developer Portal](https://discord.com/developers/)

Now Let's get into the real deal, Go to [Discord Developer Portal](https://discord.com/developers/) and create a new application.

![image](https://user-images.githubusercontent.com/51787264/232237205-36f868bb-df87-4dda-94ee-99502595ac70.png)

once you created your application make sure to get the following things [Bot's Token, Application ID, and Invite Link] your can create your invite link in the OAuth panel> URL Generator

![image](https://user-images.githubusercontent.com/51787264/232237406-0ab32b23-810e-4fab-9078-fd2032f2e6cb.png)

make sure to select Bot as you are using the application for a "BOT". Next Select the permission you want to use, NEVER USE ADMINISTRATORR!

![image](https://user-images.githubusercontent.com/51787264/232237482-dc5f915f-fb93-44fc-8c7b-e25d03a13c21.png)

![image](https://user-images.githubusercontent.com/51787264/232237523-297c2848-fb60-453c-8865-4e00bcdee781.png)

My default choice are these since it doesn't join a call nor does it have any moderator tools. Okay, once everything is selected you should be able to see a link underneath that selections. Make sure to copy that link and paste it in the ```INVLINK``` That is found in ```./handlers/config.json/```.

**Moving Forward!**

Next step is to create a file called ```.env``` this is where we store our important keys (Bot's Token, Application ID, ChannelID, GuildID). Once created head over to your developer portal and create a bot.

![image](https://user-images.githubusercontent.com/51787264/232237797-1370b4aa-bbfd-49d1-a256-c4bb9b9cd57b.png)

just click on the "add bot" to then name it whatever you want below that you should be able to copy your ```Token```. Paste that token to your ENV file

sample code:
```
TOKEN=IOPAJDSFOAGDFOUGHNLBVILUH1235634OIUJDFG
chid=1234537685697585
appid=23145264578458613
guid=234534637316345
```
For AppID you should be able to get that from ```General Information> ApplicationID``` from Discord Developer Portal

For Channel ID ```chid``` you'll be able to get that by enabling Developer Mode which is found in ```Discord App User Settings> Advanced> Developer Mode``` afterwards exit from settings and right click on a specific channel you wan't to use. Then press CopyID and that should copy your ```chid```

for GuildID ```guid``` right click on your server icon the one on the left side selector then click CopyID and that should copy your ```guid```

all of these are needed to be able to make the bot run.

**Final Steps**

You are almost at the end! all you need to do is run the ```npm install``` (one time command) command first to install all the necessary node_modules then run ```comdep.js``` (bot / command only works on selected GUILD) or ```comdepGlobal.js``` (Global Command) once you managed to run it just run index.js and your bot should start!

```
Command Fist Time Install (if newley downloaded)
npm install
node comdep.js or comdepGlobal.js
node index.js
```

```
Command (bot / command only works on selected GUILD)
node comdep.js 
node index.js
```
```
Command (bot / command works Global)
node comdepGlobal.js 
node index.js
```

--------------------------------------------------------------------------------
You Have Reached the end! Thank you for reading.
