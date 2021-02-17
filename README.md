# Teliacrawler
I created this program because i wanted to check if Telia had any GPU's in their stock. With this tool you can listen availability of products in Telia shop. When bot detects that product is available you simply get notification to your Discord.

## **How to setup**

Programs you need to install:
- Node.JS (https://nodejs.org/en/download/)

You need to create Discord bot and add it to Discord server you are on. Only privilege you need to give this bot is "Send messages"
https://discordpy.readthedocs.io/en/latest/discord.html

After creating the bot you need to fetch API key. Go to "Bot" section of your application and under "Token" click "Copy". After this open "conf_empty.json" and set it like this:

**EXAMPLE**

    {
        "discord_key": "pasteyourkeyhere",
        "discord_uid": ""
    }


Now you have properly set your bots API key. Now we are going to show you how to get your Discord UID. 

1. Join to voicechannel
2. Right click yourself
3. Click "Copy ID"
4. Set it to discord_uid like this:

**EXAMPLE**

    {
        "discord_key": "pasteyourkeyhere",
        "discord_uid": "yourdiscordidhere"
    }


Now you have configured your bot. Rename "conf_empty.json" to "conf.json".

### **How to add products to the program?**

You can add products to "/tuotteet" -folder. There is "sample.json" file that user can copy and paste with different information.

**JSON FILE STRUCTURE**

- Name - Set product name here. Do not use whitespaces. This name should equal to JSON file name. If you have file called "gpu.json" you need to set this name to "gpu".
- Link - Product link. Set products link here!
- ro_name - Set this same as name. No need to explain this to users as for users standpoint it is not important to understand what this does.
- msgfound - Message you want to set when product is found. Message is sent to console and to Discord.
- msgnotfound - Message you want to set when product is not available. Note that this program does not message you on Discord when product is not available. 


###

### **How to start the program**

1. Download program from Github
2. Create folder to somewhere. Desktop is good location to create new folder.
3. Open newly created folder with CMD or with some other commandline tool.
4. Write "npm i" (this step needs to be done only once)
5. Write "node index.js"
