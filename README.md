# Teliacrawler
I created this program because i wanted to check if Telia had any GPU's in their stock. With this tool you can listen availability of products in Telia shop. When bot detects that product is available you simply get notification to your Discord.

##**How to setup**

Programs you need to install:
- Node.JS (https://nodejs.org/en/download/)

### **How to add products to the program?**

You can add products to "/tuotteet" -folder. There is "sample.json" file that user can copy and paste with different information.

JSON FILE STRUCTURE

Name - Set product name here. Do not use whitespaces. This name should equal to JSON file name. If you have file called "gpu.json" you need to set this name to "gpu".
Link - Product link. Set products link here!
ro_name - Set this same as name. No need to explain this to users as for users standpoint it is not important to understand what this does.
msgfound - Message you want to set when product is found. Message is sent to console and to Discord.
msgnotfound - Message you want to set when product is not available. Note that this program does not message you on Discord when product is not available. 


###

### **How to start the program**

1. Create folder for bot
2. Extract files to folder that was just created
3. Open newly created folder with CMD or with some other commandline tool.
4. Start program by typing "node index.js"
