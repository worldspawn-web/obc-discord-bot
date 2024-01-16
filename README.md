<div align="center">
    <img src="public/logo.png"></img>
    <h4>Developed specifically for OBC Discord!</h4>
    <hr>
</div>

### Planned Functionality:

- Provides user with basic information about the server/users.
- Collects every 5-th message and then randomly sends It back in a custom interval.
- Simple spam-protection.
- Purge tool.
- Roles management.
- Music playback from Yandex/Soundcloud.
- Connection to [OBC Mod Manager](https://github.com/worldspawn-web/obc-ets2-storage)

### To install:

1. Clone the repository and install dependencies:

```
git clone git@github.com:worldspawn-web/obc-discord.bot.git
cd obc-discord-bot
npm ci
```

2. Create `config.json` in `/src` folder:

```json
{
  "token": "Insert Your Bot Token Here",
  "prefix": "Insert Desired Bot Prefix Here",
  "clientId": "Insert Your Bot App Id Here",
  "guildId": "Insert Your Server Id Here"
}
```

3. Run the bot:

```
    npm run start
```
