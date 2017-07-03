# How to Use Git
 
## What is Git?
Git is what we use to manage all of our code for VEX Robotics. Git is what is called version control software, which allows us to have all of our code backed up online, have multiple people contribute at the same time, and allow us to rollback to a past version if we change something and it doesn’t work. 
 
## Getting Started
All of our code is stored on Github, which is an online hoster of git repositories (think folders of code). 
- If you haven’t already, create a Github account.
- Ask to be added to the organization “PARobotics”. 
- Once added, you now have access to all of our past and current code. 
 
## Viewing Code
If you are added to the organization, you will be able to view all of our code through the Github website.
- All old code is stored in Archive
- All current code will be stored in a folder with the current competition’s name.

## Installing Git
To make changes and download the code, you will need to have git installed on your computer. Follow [these instructions for mac](https://www.atlassian.com/git/tutorials/install-git) and [these instructions for windows](https://www.atlassian.com/git/tutorials/install-git#windows).
 
### Downloading Code onto your Computer
You will need to have git installed. In an empty folder:
> git clone [Repository URL]  

The repository url should look something like: "https://github.com/PARobotics/VEX-Utilities.git"
 
### To update to the latest version of code: 
> git pull origin master

(You need to be in the correct folder)  
 
## Making changes to code
If you need to make a change to the code, you won’t be able to directly change it. Instead, you need to submit a pull request, which basically asks for your code to be merged with the master code. After you’ve made your changes: 
> git add .  
> git commit -m “Message telling what you did”  
> git checkout -b “new-pull-request (name of your branch)”  
> git push origin new-pull-request (whatever you just named your branch)  
 
Now in Github, click new pull request.
 
In compare, click your branch name. 
 
