
// please read before you being any coding. it is important you read this file first.
// read it carefully without attempting to code. focus on the concepts here and the steps that are being followd
// create a diagram of this work, say it to yourself in your own words. make notes if you need to.
// once you are confident that you know WHAT is being done in these instructions and in the steps that follow then attempt the project
// if you attempt the project before that- you will not understand much. 
// if you code along without understanding then you will most likely demonstrate that 
// i can write good instructions and code well enough that you can execute my commands and the code will work
// you have not demonstrated your own understanding. to demonstrate your understanding completely you will need
// to design a program like this of your own. therefore do not merely copy the code first. 


// the best way to use these instructions is to read them carefully. 
// understand what is happening, then understand how the commands are working together. 
// identify those are where you are not certain. look them up. try to understand what we are trying to achieve first
// once you are comfortable with the hypotheis you have for what is going on then follow these instructions. 
// at every step ask yourself, is this proof that your understanding is right or wrong. 
// if it is wrong then what other things could be happeneing? 
// if it is right then congratulate yourself, make a note of this and keep this in mind the next time you code. 
// make sure you remember when you are correct AND when you are wrong. 


// in the areas where you are correct, create standardization. you have already figured this problem out.
// you do not to be creative next time, just remember what you understand the code to mean and create 
// standardized ways for writing it.
// most code is NOT standardized, thus it is important to create a consistent style that will
// eventually, on consistent practice become trained habbits 
// this will enable you to code faster, follow your code and be able to troubleshoot consistently. 

// you will need to toubleshoot your own code. at first this is extremely frustrating and slow
// it is important to note that other coders may not follow this practice, coding is an unregulated and unstructured practice
// when you are following tutorials follow one step at a time, alter their code to your style and be careful
// while this method takes longer at the beginning it ensure your success because you are then able to create a better understanding
// of what you are doing on the computer and not what someone else is trying to make u do. 


// try to read and follow the code of others through these videos to see if you can read and follow it to diagnose your own
// technical issues. you will find consistencies in your challenges, the more careful you are and be able to continue to 
// standarize your own code so that you can code faster and more effectively. 
// do not use fancy frameworks at first. these are distrcting and take the focus away from creating links between what you
// are doing on the screen and how that is executing in your program. 

// frameworks are wonderful tools later on, when you are comfortable with how things are working. until then do not use frameworks if you
// do not have a consistent style. if you are making too many mistakes, constantly lost in why your code is not working
// these are all indications that you do not have the practice needed to find your mistakes consistenly. 
// do not focus on other peopes work. focus on your own. you are learning to code. other people are merely trying to 
// teach you. they are not yet experts in teaching. they only know how their code works. it takes years of practice to 
// find other peoples mistakes fast. for this one must be an excellect teacher.

// do not be alarmed if you have facing challenges, code wont work as others, different inputs on screens 
// these mistakes are normal and a part of the journey to learn to code. 
// when you are frustrated with these things take a step back.
// go back to what you were doing conceptually and not how you were doing it. 
// paraphrase in your mind what you were hoping to acheive in english. 
// think through the steps in the computer that needs to happen for you to be able to achieve this. 
// then look at your code and think about what you are stuck on. 
// each step individually, make sure it is working, learn how you know its working and then begin to add complexity to the code.
// do not rush this is a complex learning process. however once you understand the basics how how to connect things and create
// consistent habbits that you know are bringing you success. continued practice will enable anyone to excel if you dedicate your mind
// and practice. 

// ask as many question as possible. if people you expected are not answering or dismissing you ask others. ask as many times as needed until it makes sense
// asking questions is an important part of the learning process. it identifies what you do not understand. if others do not know the 
// answer or dismiss you. do not be alarmed. ppl dissmiss others when they do not know the answer themselves. but ur question is important
// keep asking questions, try to find them on line, especially on youtube. watch many videos on the same question to see the consistent 
// patterns. these steps were written to be general. they do not refrence extrenuous information like the version of the tools being
// installed. version compatibility is important but these instructions are meant to be evergreen. download the tools that are 
// current to your time and if there are instuctions that do not work then check if the version you downloaded has issues. 
// this informaion is online. if this is the case then find instructions for how to delete the versions you have and update with new
// programs.

// you will need the following to become proficinet in the following things to have the best outcome learning to code
// 1. articulate what you want to do in english first
// 2. create a chronology of the steps you will need to complete your task. keep this general at first as you see below
// 3. understand what you are asking the computer to do.
// 4. what tools do you know and have that will help you do the job?
// 5. what do you need to use these tools?
// 6. do you have the knowledge to use all these tools?
// 6.1 if you do not have the knowledge to use all these tools then only learn one tool at a time
// 6.1 it is incredibly difficult to learn multiple tools that are intended to work together. 



// some important review
// ubuntu-> you will use your native [is this racist?] terminal to do all these things
// windows-> if you are on windows then please note
// windows->your computers native terminal runs microsoft dos because it is a microsoft nt kernel
// windows->remember that when you connected mongod and monsogh commands into the enviornmental variables those path were to the executable files on your computer
// windows->this means that those files are present in the microsoft operating envrionment. 
// windows->therefore you use powershell, the native enviornment of your computer to access them
// windows->express is a server moduel/ package/ library (what ever the technical term is)
// windows->express creates a server or an open channel between your localhost browser that can link to other programs
// windows->servers are coded in unix because that language is speacialized in networking with other machines. better machine to machine enviornment
// windows->therefore you will need some way to simulate a unix envriornment on your windows machine that can run the code needed
// windows-> to execute your commands between the local files on the browser and the the database
// windows-> you are connecting one machine enviornment (the browser) through express to the database with code

the objective of this file is to be a guide to help you understand how to do the following:
For the database:

1. we have connected to the mongo database using a node file through the bash termianl
2. we have created a format for the database by using the Schema function in a folder for models
3. we have exported that structure into the networking node.js file
4. from the node.js file you created a connection to the database file where we will save the data
5. we then created a dummy variable to make sure that we could connect to the database and input the data
6. we used the node function in the bash terminal to load the node.js file
7. we then looked for the dummy variable we had created. 
8. we then went to the mongosh powershell terminal and checked to see if the database was created
9. we used this database to see if the data formats were created from our schema
10. we ensured that the collections of these formats were empty
11. we then went into the bash terminal where our node.js file was loaded
12. we used the save function to save our firstInput into the database from the node terminal
13. we confirmed that this information was saved in the database from the mongosh powershell terminal using the db.databaseinputs.find() command. 
14. we then created a second variable in the node.js file
15. we used the save function in the node file to ensure that the variable was saved.
16. we repeated step 13 to check if this was saved.

For the web browser file
1. we used express to start monitoring the activity on the web browser that is open at the address port 3000 of your local computer. by using the app.listen command
2. we then created a app.get request to test that this was working by going to localhost:3000/dbContents to print a message. 

// ASSIGNMENT GUIDELINES-> CREATE A SIMPLE PROGRAM TO DEMONSTRATE HOW TO USE A WEB-BROWSER FILE TO 
// ASK FOR USER INPUT, STORE THAT INPUT FOR LATER USE. DISPLAY THE INFORMATION ON A WEB-BROWSER SCREEN
// REMOVE THE INFORMATION FROM THE SCREEN
// CREATE THE CAPABILITY TO REMOVE THE INFORMATION FROM THE SCREEN
// UPDATE THE INFORMATION IN THE DATABASE AND ON THE SCREEN
// DELETE THE INFORMATION FROM THE SCREEN ENTIRELY. 
// KNOWN TOGETHER THESE OPERATIONS ARE CALLED CRUD.

// BEFORE YOU BRING THE ASSIGNMENT PLEASE DESCRIBE THE STEPS YOU WOULD TAKE TO COMPLETE IT
// CRUD= create, remove, update, delete
// create a database to put data into
// need a model for the data so the database knows how to store it
// make sure the model is working by testing some dummy data
// once we know this working then you can start to manipulate the data from a web browser
// form to create data
// show data on a screen and create a button to delete it
// some kind of way to select the data we put in, maybe button and update it
// and finally remove the data from the databse entirely
// get and post requests will be used to manipulate data in the database by using express and contolling the commands on the browser window

// TOOLS BEING USED-> if you use any additional tools describe when and how they are being used
// an ejs file to input the data
// use a nodejs file to connect the server and the database
// a model file to make sure the database knows what format to save the data in (how many columns/ objects)
// use node in the bash terminal to make sure that things are connected well
// use mongod to open a connection to the database. we connected this to a data folder and db folder. that is where the files are being created and saved
// use mongosh to make sure that things are being loaded into the database right

// DESCRIBE YOUR PROJECT
// this project will create a very simple program that will print a message on the screen.
// this message will be able to be added to the database message every time a user gives a word as an input
// the program will also allow this message to be edited by someone using the browser window, as if it were online
// the user will be able to delete a message, edit it or remove from the database

// estimated time 3 hrs-> 1815 start time
// DESCRIBE EACH STEP OF YOUR WORK
// DO NOT SKIP ANY. PLEASE ALSO EXPLAIN HOW YOU KNOW THESE ARE WORKING AND 
// DESCRIBE IN YOUR OWN WORDS WHAT YOU ARE SEEING ON THE SCREEN
// PLEASE INDICATE "EVIDENCE FOR PART MARKS" WHEN YOU HAVE COMPLETED A STEP, THIS WILL ALLOW US TO GRADE THE 
// ASSGINEMENT INCASE YOU DO NOT COMPLETE IT.

// opening the bash terminal from the file manager//
// for extra points if you were in ubuntu or any other unix enviornment this terminal would be the local terminal of the machine
// if you have not downloaded gitbash then you cannot continue beyond this point if you are on a windows maching
// download bash terminal before continuin. 
// this machine has bash terminal. therefore continuing
// EVIDENCE FOR PART MARKS-> npm init complete. As evidence the package.json file has been added to the file manager. indicating that npm init was successful
// EVIDENCE FOR PART MARKS->in addition on the bash terminal a series of commands are requested. most of these were accepted as defauls
// EVIDENCE FOR PART MARKS->some were changed to highlight that the work was done for this assignment

// running npm install mongoose
// why-> mongoose consists of a series of ways in which we can use node to be able to use commands intended for the mongo databse
// there are other ways to connect to the mongo database. in this case we are using node
// this is because we can contol the server through node by using the programming language hs
// this allows us the flexibility to only use one language in most our code. 
// the choice of language is relative to each coder, however it is imporant to note that if you choose
// to use any other langauge than js, then you are not likely to use node. therefore how you use the database may be some other
// package than mongoose. At this state i am not certain in my knowledge at the extend ot mongoose's ability. 
// however how widely mongoose is used is not important to be able to use it in this project
// in this project we are focusing on mongoose's ability to help us use the mongo databse through node
// it is important to note that mongoose has other capabilities. but those are not important for this assignement. you may study them at your leisure
// EVIDENCE FOR PART MARKS->we know that mongoose ran because a series of comments are visible on the bash terminal
// EVIDENCE FOR PART MARKS->in addition a package-lock.json file appeared in the project window in the same folder as package.json.

// running npm install express
// why-> npm install downloads all of the relevant files into the project folder to allow us to initialize the server
// this includes the ability to use get and post commands to be able to add information or manipulate it through the 
// code display on the browser. 
// EVIDENCE FOR PART MARKS-> a series of commands was executed on the bash terminal.
// no further changes were noted on the file manager window as they were in the previous step
// this is important to note because we should confirm that the files will be able to let us connect to the server
// we will complete this step by writing code and initializing the server. 

// so far all we have done is downloaded the tools that will enable us to complete the assignment. 
// now let us check if the database can be created and how to ensure that the database is working.

// to complete this step first we will need to require the mongoose commands
// the node.js file is the primary file that will be providing the instruction to the server for what is happening on the web-browser
// and how information is being collected into the mongo database.
// by using the require function in we are telling the computer than when it runs this command
// the capability of running all the mongo server related commands are being brought into the networking file
// we often save this capability into a varialble. this is important for us as it makes it 
// easier to use the mongo commands but following the proper notation. 
// there are also other ways to use the mongo commands
// it is important at the beginning to follow a process and stick with it
// this is because it allows you to concentrate on the programming without having to deal with the inconsistencies of 
// non standardized code.

// create a file in which you will write the networking code to provide instructions for the server and the database
// in this program i have called this file node.js
// for me this distinguishes this file as a file that is intended to be run with the program node
// you may change the name of this file. however note that most coders will have a standard way to express this file
// you should develop a standard yourself
// ensure that whatever you call this file helps you remember what it is used for. 
// by calling it node i have ensure i remember that this file is to run in the bash terminal and be run with the command 
// node node.js. where the first node tells the terminal that the file being executed is intended to be run 
// with the capability of node. this will allow us to interpret commands written in js in the bash terminal 

// please note that if you deploy a normal file written in javascript with node in the bash terminal
// then you will get errors because node is a tool specialized to only allow specific javascipt commands to run
// specialized for the server

const mongoose = require("mongoose");

in  this command we are bringing the cability of using mongoose into the networking file
we are saving this into a variable we are calling "mongoose"
note that the word mongoose appears twice. once in quotes on the left hand side and once in quotes in the right hand
on the left we are creating a variable in the networking file what will be able to store the funcationality of 
the mongoose package when we execute this command.

create the ability to connect to the database.

when you are attempting to connect to files or run programs it is common for standard errors to occur. error 404 is a common example of this that occurs on the web. These errors help us understand where we are making mistakes and how to improve our code. try to anticipate how the code for a set of instructions will fail. do it step by step and leave yourself messages in the console to debug. 

in this step we anticipate two errors. the first is in our instructions. we may not have the right commands. 
the second is that we have the right commands but another problem occured. if this is the case we can find out what the issue was by using some code and printing it in the console. this will help us diagnose the issue and move into the next step.

where do the variables go when we create the code and we run the code. note that the mongo database, any database is a place in the memory of the computer where our data is stored. for us to be able to store data and use it, it must be stored in a permanent place on your computer. when you installed mongo on your computer you created this place. you either created it by following a view where you created a folder called data and then a subfolder called db, refrences above. this means that we are going to store all data we get from our program in this file on our computer. 

however, when we "run" programmes they also require memory so we can interact with them. Until now you have likely only seen this memory when a program in windows has not worked and you typed crtl+alt+delete. this brings up the tast manager which is showing us all the computers running in the available computer processor memory. this memory can be called volatile memory, temoporary memory or its most common term in programmins is RAM> Random Access Memory. Memory that is available for the user run programs at some random time that the user choses. Unpredictable by the computers operating system. 

if you keep your task manager open, you can see how the opening and closing of programs allocates memory to certain programs. Each time you open one program you are creating something similar to an opening event. this creates memory for the program in the ram. as you interact with the program it can grow in memory based on the work you are doing. some word files are a few kilobytes while some thesis can be megabytes big. the actual file you are creating is likely stored in a similar way to our database. in a computer file. when we forget to save our work in these documents it goes away because all the work was only temporarily saved while we were using the program in RAM. once we close the program and forget to save that work often is deleted. 

in a similar fashion when we run our code in node in the bash terminal we are creating a similar event for us to run our networking file and the program. the creation of this event uses memory and structures it. the computer is designed to talk between different programs through the operating system. as we are taking to different files through the use of the bash terminal in windows. if something goes wrong in how we run our file errors are generated. as a user you often see these erros as requests by software companies whose software you have installed in windows to "send a report" to the vendor. these errors can be captured and used to understand how programs should be improved. 

we can use this element of how programs run to make sure that when we run our program in the bash terminal, if there is an error then we will take it from the temporary memory created when we tried to run the program and print it into the bash console where we can see it and use it to debug. this is done by writing the following command:

main().catch(err => console.log(err));

each time we try to run the program in node memory is allocated to main(). code that is created to provide information to he computer about what is running. we then use the ability to be able to use a funcation that is called "catch" and print what happened on the screen. we call this information we are getting from the computer a variable called err, short for error. you can change this name. the reason we are calling it err is that it logically lets us know what this is. this will only produce infomration for to print if the code does not continue and the file cannot run. else no information will be captured for us to see on the console

if we do not see an error in our bash console then our node.js file is running. now let us try to establish a link to be mongo database from our file. 

this function was copied and modified from another tutorial. you may see this function appear in other ways. it was standardized to be able to give the most relevant information to the user of the node.bash file, the programmer. note you may not be the user of the file. thus ensure you can provide as much information to the user to be able to understand what is going on. 

i am going to run a function that opens a conenction to the mongo database. our translator mongoose will change our instructions from javascript into strandard machine language codes that will connect us to the database. creating a connection implies that we can send and recieve information on this link. similar to how a phone call connects two users to each other using a network or phone wires. we dial a phonenumber to establish a link. 

in the case of opening a database, that "phone number" or address to create a link is creating a link on your computer to somewhere we want to input data. we should get some infomration if the link is created to this location and if the link fails to be created we should know that the connection has failed. this is not unlike earlier forms of dialup however in this instance we are creating a connection between node and the database where we want to store information. 

if a conenction is successful a message should confirm it. 
if the connection is unsuccessful then we should find out what error occured and print it to the bash terminal. the code for this function is:

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/helloWorld')//wanted the actual address localhost didnt work
    //database name is crudApp for future refrence
    .then(()=> {
      console.log("Mongo->Connection from node.js open")
    })
    .catch(err=> {
      console.log(" Mongo-> the following error occured from the node.js file.")
      console.log(err)
      console.log("Mongo-> check if your running the mongod in the powershell")
    })
  }

there are many elements of this code that you may be unfamiliar with. this type of function is called an asynchronous function. note that we want to create a link in our code. it will take some time for the computer to execute this function. we want to wait for this link to be established before we move to the next block of code. you will note the effects of this on the console when it takes a bit of time to see the messages. if the link is not established we want to know what the error is and print it to our screen. what code should you be careful when trying to user this code from file to file.

the only thing you need to do if this code works is be careful of what address name you give for where the link is created to. 
this code appears on line 241 in the brackets: 'mongodb://127.0.0.1:27017/helloWorld'
note the last word of the sting in the quotes. this word is the name of the database you are either creating or opening a link to
if the database already exists then a link will be created 
if the databse does not exist then it will be created and a lnk will be established to it. 

that link will be established with your local computers network on your local host. the code mongodb://127.0.0.1:27017/ specifies where the link is being created and the last word, the name of the database what the link is connected to. we know this is a mongo database link as the mongodb commands were invoked in creating this link.

note the different console logs in the code block. the first log lets us know that the link was created successfully by letting the user know that the message is coming from the mongo link function and it is informaing us that we created the link from the node.js networking file. if you copy this code to another file, be sure to update where the error is coming from. this will help with troubleshooting. 

in the event of an erro, we know that the error occured in establishing the link from the mongo file. this if followed by the print out of the actual error. the third console.log is an error added to prevernt common progammer errors. this programmer often forgets to open the mongod and mongosh in the microsoft terminal powershell. this this hint allows the programmer to confirm that this easy to catch error is not the cause of any mistakes. leaving clues to common mistakes can help reduce time and frustration when debugging code. make these messages extremely clear for the user. or use a standard code protocol that can be referred to. 

if you have a link established to the mongo database and you are getting the bash terminal to work as anticipated then move on to the next section. if not then consider where your code deviated from this file. at this stage the file structure should be simple
you should only have your node modules, package-lock.json files, package.json files and a node.js file in your folder. these should be in the same folder. refer to the video for this code if there is a discrepency. the author is dyslexic so be sure to follow the visual file structure as well. 

if your code does not work then this is a good time to go back to the beginning where we began to code. feel free to erase all your files and start new. or delete the folder you are in and redo it all. repetition often helps make steps more logical because you begin to anticipate their impacts to the code. do not be frustrated if you cannot get the code to work. coding is abstract and it is natrural that something new you are learning will be difficult at first. congratulate yourself on trying. just try again. there is no substitute for how to learn to code than to continue to try and struggle through the process. find online resources with similar errors to yours. copy the code into the browser and look for other users with similar issues. go on youtube and see if there are videos of similar projects and watch them note the differences. 

when you are able to establish a successful link with the mongo database you created then move on to being able to connect with express to your local browser address. recall, we are trying to get information from our browser through some input we will get from the user of the browser. then we want to take this information and pass it into the database through node by using express. express allows for a channel to be created from the browser using express that can connect with node in the bash terminal and pass this information between them. what you are doing through the bash terminal, is creating a simple server similar to any other server. 

if you send an email, your internet connection creates a channel with with you connec to the other email service where you want to put the information. the links being created are very similar to the port addresses we ahve provided in both functions. your email will be stored on a server somewhere. in a database similar to a mongo database. most likely called something else but similar in design. you will store an email, similar to the data we will extract from the browser. the instance of sending an email is when you have been a user of how this information is being sent across networks. by creating the server through the bash terminal, you are becoming the controler of how information is travelling. 

to create this think we must now bring express into the networking file we created called node.js. you may have called this something else. it should be the file where the logic is for opening and connecting to your mongo database. 


const express = require("express");
we are bringing the functionality available to us by using express into the networking file.

now that  this functionality is available to us, we want to be able to easily use it. 

const app = express();

the above code makes it possible for us to use the functionality of express by running those relevant functions everytime the variable app is used. 

create ability to kow when something has changed on the web browser you are going to be collecting data from. consider how we would know when a form has been submitted if there was information that we were trying to collect. we would need some way to monitor what is happening on the web brower. this is important so everytime something changes we know if this is a data entry and we can save our data. 

for this we execute the following code: 

app.listen(3000, ()=>{
    console.log("app listening on port 3000")
})

this code may appear complex at first. let us understand it first.

app.listen creates the functionality of express available to us because we had stored the execusion fo this into a variable called app. we are not using this variable.

the number 3000 repreesnts the address of the web browser channel that you are using to connect to the bash terminal. it is amusing to note that "i love you 3000" in endgame could be a reference to this. tony start will be monitoring this frequency to make sure that everything is ok with this daughter. (tear drop)

the inner syntax of this function can be copied as such. it is a standard expression of how to run a function. it is not important at this stage that you understand the exact syntax. you should not need to alter the syntax. you may want to change the console message and personalize it if you are using a different port. 

when we see this message in the bash terminal when we run the networking file we have confirmation that the node terminal is able to connect to both the database and the browser window.

it is important that the app.listen code is always at the bottom of your networking file. this is because the we want to constantly monitor the browser while our code is being executed. if the command is at the begining then only the code above it will be monitored on the browser. so if your manipulating the browser after this code, it will not work because the networking file is not listening to any code after this line. 

now that we are confident we can connect. we want to create the ability to collect information from port 3000 where we have created the express link and we want to send this information into he database through node. 

before creating the ability to pass information from the form. we can ensure that we can send information into the database from the networking file itself. this additional check will create confirmation that the networking file and the database are working as expected. once this check is done, if we do not get anticipated results when we collect the input. it will help us in troubleshooting the problem. is we can put information into the database from the networking file that reduces the likelyhood that the challenge will be with the database. 

reduce as much uncertainty in where a problem can arise from. rarely is code written that does not have some error. but making the process of troubleshooting simple by creating simple checks will enable you to be more organized and systematic with your coding.


to put information into the database we need to create the outline of how we expect the code to be stored. to achieve this create a folder in which to store the structure for the data. in this code the folder is called models in this case.

create a file called mongooseModel.js that will store the structure for the data we want in the database
a mongo database is similar to an excel type of structure. 
let is take for instance how data is stored in an excel file. we have columns and rows. 
let us imagine that rows are an indication of a number of entires and columns indicate the information we store for each entry

row     name    city    day

now let us put a few possible entries here

row     name    city    day
1       Jim     NY      sunday
2       Jim     cali    sunday
3       Jim     LA      sunday

in excel information is stored so it is graphically available to the user and easy to understand and manipulate
a database allows us to store information more efficently while storing the analysis in a other program files we use to manipulate 
this ensure that the original data is not altered unexpectedly
information can be shared over the internet 
and the information can be accessed only when needed. making our analysis easy.

now in the mongooseModel.js file create the ability to use the database by running the following command

const mongoose = require("mongoose");

to reduce error, consider treating one file where code is written, and copy all code from this file when it repeats
this helps reduce error 

for example if the node.js file is treated as the main file where code is written, then coppy the above command from this file
when troubleshooing, if you find that there is an error in the names or spelling in the command in the node file, 
the same error will exist in the mongooseModel.js file. if we consistenly copy code then all we need to do is fix the code
in the node.js file and then copy and paste the correction.

consider however if you rewrite the code each time. now you are introducing the probability that your code has a spelling error
unless you are an extremely good at spelling and grammer consider eliminating this possibility from your coding practice
whereever possible type code in one file you have designated as the file you write the code in. put this informatin in the comments
so you do not rely on your memory to remember this. always treat coding as a set of instructions not just to the computer
but also to another human being. who lacks the ability to understand and interpret infomration that has not been written down as instuctions for them. 

it is the task of both reader and writer of code to be participants in the process. the instructions that are written in code
are for the machine to interpret strandardized operations. these do not translate with ease into english. for a starting point on how to structure your code and write instructions find inspirations in how manuals are written. ikea furniture. labeling and communication is a vital part of engineering. it is important that there is no confusion between users of the code to limit efficeny. engineering manuals are written in a sequence. consider this as having a bibliography of work. if you do not work in a company that has a standarized system (such as boeing or an equivalent software example i am ignorant of) keep a consistent one for yourself. you will then remember it, and it will become easier for you to follow your work. 

these small details take time at the beginning until they become second nature. but this will create extremely efficent work in the long term. you will be able to reduce the areas of error and focus more and more on the actual skill of the code. explain the system in each project you work on. this is similar to creating a file of programs and instructions that allows us to tell each computer what dependencies a program has. in humans these dependencies should not be assumed understood because the computer can execute them. every person looks at code differently. just because it is obvious to you now does not mean it is obvious to someone else, nor does it mean it will be obvious to you later. assume u get amnesia and totaly do not remember ever creating this code. write your comments for that individual. 

in the mongooseModel.js file create the structure for how you want the information to be stored in the mongo database
we will only have two strings. a message and a name

this are the steps we are going to complete in the next set of commands
1. create a strucutre for the mongo database. we will name this strucutre dataStructure 
2. ensure that the code can give the instructions to create this structure as a new schema, organizational unit, that is 
designed for mongoose. 
3. create two string variables, name and message. 

in english a schema is an outline of something. a paper you write, a story, anything
in programming a schema is a representation of a data structure

const dataStructure = new mongoose.Schema({
    name:String,
    message:String,
})

note this block of code was copied from another project. in there it was written as such:

const crudModelSchema = new mongoose.Schema ({
    name: {
        type: String,
        required:true
       
    },

    price:{
        type: Number,
        required: true,
        min:0
        //same as above. i just wanted two inputs
    }
})

note the simmilarities in the code and the differences. you will often see code that you may want to use. consider these are
guides. similar to complex functions in excel. while the formals are consistent you control many of the variables. 

in the code for this product we called the structure dataStructure, in the code that was originally copied it was called crudModelSchema

the second advantage of the original code was that it already had the parameters we needed to have a variable called name that was intended to be a string. i copied the block of code that declared this variable and its parameters and changed it to message for the schema to be ready. further reducing our sources of error. if one declaration is correct then the other is also. if one is wrong then they are both wrong. by creating similar habbits when you begin, when you are slow, you ensure both you are learning more effectively while also coding more predictably. eliminating frustrations in the future.

This file is only intended as a file that enables us to create the structure for the database. it represents only one step. by creating this file seperately we are creating a structure we learn to anticipate. if this is the only place the structure is ever created then any alterations to the structurue or what the variables are called will all be in this file. learning to do this early will help seperate these files into different parts of the code. each file representing something unique you want to achieve. when the code comes together and you develop greater fluency this helps you quickly navigate from function to function being executed rather than file to file and you are prone to think at the beginning. 

now the function of this file is to create the structure. but we have no data in this file. the data we want to store will come from the browser. so we we have to be able to use this structure somewhere else where we put the code for having some data brought int. 

in order for information or code that is created in one file to be shared in another it must first be exported out of the file where it is created. when you export data you do not usually specify which file you are exporting it into. by exporting this part from your code you allow it to be used elsewhere in your program. it is important to pay attention to your folder strucutre when you are doing this. often if the code you are exporting is not in the right folder then it may not be able to be used in a file you expected. pay attention to the file strucute here. this is a common source of error that will teach you how to refer to variables between files. in the beginning it will create many errors

to export a new data structure (schema) out of this file i need to save it into a variable and then export that variable. 

const structureExported = mongoose.model("structureExported",dataStructure);

the above code creates a new mongoose model using the structure (schema) that we created called dataStructure and makes it ready to be exported out of this file. Now we can use the variable structureExported and prepare it for blastoff

module.exports= structureExported;

module.exports is a standard command that you use to achieve this ability.  

now that we know what our structure for the data will be, we should try to use this and see if we can put some data into the database. 

we can create our web-page where we will get the input from browser and input data from here. however at this early stage we do not even know if the data will be successfully entered from the actual bash terminal. so we should first ensure that we are able to connect into the database and put some information there. 

to to this we are going to need a dummy variable, we will call this dummyVariable for ease. we will need to make sure that when we put this variable into the database it has the strucutre we wanted. so we will need to bring the strucutre from the mongooseModel.js file into the networking node.js file. 

since we have exported the model from our mongooseModel.js file we can bring it into our networking node.js file. 

const structureImported =require("./models/mongooseModel")

note the syntax in this command. we have already used the require function to bring the functionality of mongoose and express into the node.js networking file. in the case of express and mongoose we ran npm install to bring this functionality into the project folder. however in our case now we created the model that we are going to use in the node.js networking file. 

when we ran npm install previously it brought those functions into the file. we used require to bring them into our node.js file. now we need to pass in the address where we created the information we need. I have created a variable called structureImported. i will save the information i was able to bring in into the node file into this variable. remember we created the model and called this in the previous step and called this variable structureExported in the model file. create variable names that leave you some clues in the code as to what you are doing. 

often this variable is called the same thing as the variable being exported from the file where it was created. however in the likely case of an error, the coder would be expected to not only recall the name of the variable, where it was imported but also where it was exported and created. using out nomenclature, we can tell that this variable was brought into the file and what this variable is. 

create the dummyVariable as follows:

const dummyVariable = {
    name: "Dummy",
    message:"checking if database works"
}

now let us pass this variable into the database. to do this recall that we have given the database a name when we created the link for it earlier using the following code:
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/helloWorld')//wanted the actual address localhost didnt work
    //database name is crudApp for future refrence
    .then(()=> {
      console.log("Mongo->Connection from node.js open")
    })
    .catch(err=> {
      console.log(" Mongo-> the following error occured from the node.js file.")
      console.log(err)
      console.log("Mongo-> check if your running the mongod in the powershell")
    })
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
  }

we are required to tell the connect function not only how to create the link using mongodb://127.0.0.1:27017/ but also where to connect the link to. The database we are connecting to is called helloWorld. when we run our commands we anticipate that the data will be stored in a file called helloWorld. while we cannot see this using the file manager, we will need to verify this using the powershell terminal.  

let us create a dummy variable to make sure that we can put information into the database. to do this we need to make sure that anything we input in javascript in the node file to create something that is used in the database has the right structure before it goes into the database. so let us make sure we first create a variable that can beomce database input. 

const databaseInput=mongoose.model("Input",importedStructure)

in this code we have created a variable called databaseInput. this variable creates a model or a strucutre for the database for every Input we create, each entry we want to go into the database, and this entry will conform to the importedStructre we brought into the node.js file from the mongooseModel file. 

so far we have only prepared how the data will look. now let us create a dummy variable to test this one. 

to create a dummy variable we just have to enter the information we specified in the model as we would any other data object. 

const firstInput= new databaseInput({name:"dummyVariable",message:"check if working"})

notice the syntax here. we created the first input into the database with the name "dummyVariable" and a small message. this variable is a new input that will go into the database. therefore we need to apply the structure we created to it by specifing that while this is a variable it is a variable that will behave as a new data entry for the database by conforming to the databaseInput structure we have already defined. then add the name and a message to see. so far we only have the dummyVariable without this formatting. my using the new databaseInput({}) command we add the required formatting to our input variable


we can confirm if this variable will be created when we run the file. to this we will use a new functionality of node in the bash terminal. 

first type node in the bash terminal. this will create a node js envrionement in which you can see what is happening to the code. now load this file. note you are not running this file as you would by using the node node.js command. loading a file implies that the file code will execute and you can see what the code did, all of the variables being created. this will be done by typing

.load node.js

now look at the print out of data in the bash terminal. there is a great deal of information here. coding allows us the functionality of using any of this information. however for our case we do not need to go in depth to complete our tast. just know there is information that the computer creates in order to execute code. this is not unlike a DOM being created when you are on a browser window. 

for our purpose we want to see if the dummy variable is created. when you see the cursor promp, type:
fistVariable

this variable should show up here. note that when you begin typing the bash terminal with node running and with the file loaded it should autocomplete your request. you can also find if other elements of your node.js file are working properly by using this. try typing databaseInput. note what you see. this functionality can be used to debug code and make sure things are working well. for this project we wanted to see if the information we wanted was created and the code executed well. 

so far we have not saved this information into the database. you can check this by going to the powershell terminal where mongosh is running. first type

show dbs

here in the list you should see the name of the database that you created when we opened the link to the mongo database. this can be found here:

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/helloWorld')//wanted the actual address localhost didnt work
    //database name is crudApp for future refrence
    .then(()=> {
      console.log("Mongo->Connection from node.js open")
    })
    .catch(err=> {
      console.log(" Mongo-> the following error occured from the node.js file.")
      console.log(err)
      console.log("Mongo-> check if your running the mongod in the powershell")
    })
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
  }

it is the last word in the mongoose.connect command. for this project the database "helloWorld" should appear when you run the show dbs comman in the powershell terminal where mongosh is running

we want to go into this database and see what we have. in programming terminology we want to now use this database. so lets see what is in it

use helloWorld

if the command executed properly then you will see the cursor prompt change. you should see a message near the cursor prompt saying
"switched to db helloWorld" 

now we are looking for our data. so far if our code has worked on the mongo database side. we should have something to confirm that with. we know this because when we typed the following code:

const databaseInput=mongoose.model("databaseInput",structureExported)

we have created the structure for how the data will be stored. this is for each singlular entry of data into the file. for each variable. the database recognizes this code and creates for us the functionality to be able to save many variables that will follow this same format. it now recognizes this as how the data will be entered. in mongo this is called a collection. to see this type 

show collections

note the change in the name of the collection. we created databaseInput. if your commands executed you should see now 

databaseinputs

note the change in what you see. when we create the singlular variable databaseInput, mongo recognizes this, pluralizes it and does not save the uppcase. our singular variable as become a collection of variable structures ready for use. let us now see if any data is in this collection by typing 

db.databaseinputs.find()

recall that when you installed mongo, if you this as most users do then you created a folder on your c drive called data, and a subfolder in the data folder called db. in the above command we have gone into that db folder. we are looking there into the databaseinputs collection and trying to see if there is anything in it. 

you should not see anything populate here. that is because so far we ahve not saved our dummy variable. we have only created it in the temporary memory of the computer. try to save this through the bash terminal where you ahve loaded the node.js file by typing

firstInput.save()

as you are typing this, ensure that firstInput begins to be autocompleted by the terminal. this means this variable has been created in the temoporary memeory and is available to us to manipulate. when these variables are created, they are give some properties by the code. these properties include the ability to save. you will see this kind of dot notation in many parts of coding. familiarize yourself with what this means. you do not need to remember all the commands. if you now what they mean then you will be able to find the appropriate commands for what you are trying to achieve. for our case we want to save the first input into the mongo database. 

now return to powershell terminal where you are running monsogh. 
type again 

db.databaseinputs.find()

you should see the first entry variable here. note that a distinct id was also created by the code when it ran and saved with the data. as was a _v:0 file. this allows the database to function effectivelly and seperate every unique entry. imagine if we enter the same information in the first variable again. we do not know all the reasons for why data entered may be the same. however each entry must be identified as unique by the computer to save it. this unique id helps organize the computer memory better. 

now let us try to see if we can achieve this by creating a second input and applying the save command in the node.js file. by doing this check we will eliminate a potential source of error when we begin to use the browser file to provide this input to the database. create a second input variable:

const secondInput= new databaseInput({name:"save",message:"trying to save from node.js"})

notice the message and the name. it is important when you are doing these types of checks that you help make the process easy by giving yourself the most amount of information. by replicating the first input, when we go to check if the data has been added, we will not know which entry we are looking at. you may be coding in one file but you will be using multiple terminal windows to execute these commands. make it easy for yourself by leaving messages that you will understand. this will make it easier and more efficent for you to code. standardize the process and reduce error. 

now type the command:

secondInput.save()

exit the node enviornment in the bash terminal by presing crtl+c. you will be prompted to do this by the terminal twice. run the node file

node node.js

now go into mongosh and repeat the command:

db.databaseinputs.find()

you should now see two entries here. for your own learning, go into the bash terminal and go back into the node enviornment. this time load your node.js file and see how the variables are stored there. when you begin to understand a concept then it is important that you start to repeat doing it. this is the only way to create long term learning. otherwise knowledge is only stored in the temporary memory in your head. to save it into your own permanent memory you must repeat the process again and again. change small things and make sure you can adapt to those changes with how you understand the changing code.

if your code has executed to this point. then let us review what we have learned and done so far
For the database:

1. we have connected to the mongo database using a node file through the bash termianl
2. we have created a format for the database by using the Schema function in a folder for models
3. we have exported that structure into the networking node.js file
4. from the node.js file you created a connection to the database file where we will save the data
5. we then created a dummy variable to make sure that we could connect to the database and input the data
6. we used the node function in the bash terminal to load the node.js file
7. we then looked for the dummy variable we had created. 
8. we then went to the mongosh powershell terminal and checked to see if the database was created
9. we used this database to see if the data formats were created from our schema
10. we ensured that the collections of these formats were empty
11. we then went into the bash terminal where our node.js file was loaded
12. we used the save function to save our firstInput into the database from the node terminal
13. we confirmed that this information was saved in the database from the mongosh powershell terminal using the db.databaseinputs.find() command. 
14. we then created a second variable in the node.js file
15. we used the save function in the node file to ensure that the variable was saved.
16. we repeated step 13 to check if this was saved.

For the web browser file
1. we used express to start monitoring the activity on the web browser that is open at the address port 3000 of your local computer. by using the app.listen command
2. we then created a app.get request to test that this was working by going to localhost:3000/dbContents to print a message. 

Now let us begin the work on the web browser file from where we are going to begin manipulating the database. 

until now you have used only html files to make the web browser files. if you do not have experience with this format of files, you should atleast familiarize yourself with this file format as we will be using a similar format. the type of broweser file format we will use is called ejs. for Embedded javascript. 

an ejs or embedded javascript file gives us the flexibility of writing javascript functions in an html file. html files were not created to have programs running in them. they were merely used to display information. the use of some javascript in html makes it easier for us to execute functions. this capability was added to html files through the development of ejs. 

let us first make this functionality available to us. Go to the bash terminal, ensure you are in the proper project folder and execute the following commands 

npm install ejs

note that on the bash terminal you will get confirmation that your commands ran. this should look something like the following:

$ npm install ejs

added 16 packages, and audited 181 packages in 2s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

if your console output is different then ensure that you have a message that tells you if packages were added, and if there were any problems. you will likely either get an error if the commands are not executed. trouble shoot the error by first looking at the spelling. then making sure you are in the right bash terminal in the proper folder. from here you may need to bring outside resources on the web to help. copy and paste the error in a search engine like google and try to understand why your command failed to execute and how to fix it. 

if you have confimed that you now have the capability to use ejs let us bring this functionality into the node.js file as we have done previously with express and mongoose

const path = require("path")

note that this looks different than how we brought the functionality of mongoose and express into the node file. why does it look different? in the case of express and mongoose we want to use the functions and commands in the node.js networking file. however browser files like html are traditionally written in another file with a .html format. 

rather than the functions we want to connect to this a web browser file we are going to create and then add functionality to it. to acheive this we are creating a path and ensuring that our code knows that when we are calling the specilized html files called ejs that enable us to use javascript, we want our node.js code to be able to use this specialized functionality. 

not this is the 3rd connection or link we have created so far. we have created and formatted one for the mongo database using mongoose. we ensured that rather than giving it an address or file folder inside our program files we used the computer communication ports to establish that link. this helped us open a link to our database. we also created a link to the local browser window on our commuter using the port 3000 local address with express. now we are creating the ability to pass information back and forth from the browser files are are going to create to the networking node.js file of our program/ project. 

let us now create a folder in which we will put the browser files. ensure you pay attension to the structure of the program/ project files and folders. we will call our folder "views" to adhere to industry norms and standardize to what others have done. this will allow us to debug easier by leveraging other answers online where the nomenclature is the same.

your file structure should now look like this
>models
>node_models
>views
node.js
package-lock.js
package.json

let us now format the link from the node.js file using express to be able to understand these files. 

app.set('views', path.join(__dirname, 'views'));

this code is allowing us to understand that the computer will be using the location of the directory where are node.js file is placed as the starting point. from there it will look for a folder called views and connect us to that folder. 

now we need to be able to ensure that express does not try to read these files as html files. we intend to write some functions in here so we need to make sure the added functionality of the ejs formats are understood by the browser and the computer. to do this we need to give it the instructions that explain that while the code we will use and what we will see on the browser will look like html, it is actually ejs. use the following commands to achieve this:

app.set('view engine', 'ejs');

now we have used our express module to ensure that any browser related files we look at are to be interpreted to have an ejs view using the standard nomenclature "view engine" which is expected by express. you could set this engine to a variety of differnt formats. we will be using ejs

in the views folder create an ejs file that will be used so we can actually see more than an empty browser file when we go to port 3000. you can create this file from the bash terminal, the powershell terminal or by going into the folder and right clicking in it in the editor program you are using. whichever method is comfortable for you will work. in this project this file is called 

input.js

bring your standard html framework into this. 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ejs input file</title>
</head>
<body>
    <p>this appearance of this code along with the change of title on the browser indicates out path was successfully created and we can see this on the browser</p>
</body>
</html>

note between the title tags change the title to something other than the default. add some text so you can ensure that the file is connected and working. 

now rather than opening the browser file by using a live link, which you may have done before. we are going to begin to use express and start to open this file from there. to do this we will need to create our first get request. 

a get request tells the express server to so something we want to do on the browser. in our case we want to open the input file to make sure we can see what we ahve done so far. 

app.get("/input", (req, res)=>{
    res.render("input")
    console.log("did you hit enter in the address bar? the server was refresed at localhost:3000/input")
})

through these commans we have now created an location on the web browser where we can see this file. not the notation in quotes: "/input"

this notation creates a location at 

http://localhost:3000/input

if we input this into the web browser after running this file we will be able to see what we have programmed the computer to show. 

our instructions are for it to send this request (req) to the express server. when the server is able to recieve the request then it will respond (res) with the instructions we give it. we want the express sever to respond by showing us the ejs file. this is added by the following command:

res.render("input")

note that input is what we called the first ejs file we created.

these commands look complex at first, but you should not memorize them. you should understand them. you will likely copy and paste these commands into your code for sometime. when coping this code ensure the following steps:

1. take note of the name of the extension you gave this code. in this case the extension is /input
2. if this code is intended to just show is an ejs file then make sure you have the right file name. 

test this code now by using the bash terminal:

node node.js

now go to the browser and in the address bar type

http://localhost:3000/input

do you see the ejs file? if you do not see the ejs file then this has not executed. do not move on to the next step. you will not be able to do the rest of the exersice if you continue. troubleshoot the code:

1. did you install ejs?
2. has the path variable been brought in?
3. have you created the folder for the ejs files?
4. was the input.ejs file created?
5. did you use the app.set function to create the path to the views folder
6. did you define the viewer express needs to use to see the ejs file?
7. are you running the bash terminal from the write location

if these do not help then go online to see what other issues other have encountered. 

if you see the ejs file then continue. if not then stop and ask for help

for those for whom the file is running. continue on. 

lets create something we can use to get information. something where we can get a message and a name. two very simple things. lets do this in the input.ejs file

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ejs input file</title>
</head>
<body>
    <p>this appearance of this code along with the change of title on the browser indicates out path was successfully created and we can see this on the browser</p>
    <form action="/input" method="POST">
        <label for="name">Hello- what is your name</label>
        <input type="text" name="name" placeholder="putsomethinghere">
        <label for="message">What would you like to say</label>
        <input type="text" name="message" placeholder="message">
    </form>
    <button>Submit</button>
</body>
</html>

if you have just copied and pasted this file. then go back to the last input tag. where it says name delete the message and the quotes. delete this term:

"message" 

now try to re-enter this term. On some vieweditors, like vscode the term message should begin to autocomplete. consider for a moment what is going on. these are not variables in any coding language we have learned so far. how does vscode know this variable should go here? this is a text string. anything that goes into this string is not a function, it is not some kind of command it is just something we are coming up with. 

in fact, we created a variable message. this variable was available to us after we can the schema where we initialized it. why is this self populating when we go to name. name is a variable html takes in. as a command. it knows what to do with anything next to name. it is expecting this to be important. the user sees the placeholder message, anything can be in this string. the code will just keep this static link here. but the variable name here is being passed into some function html is going to use for executing your instructions. so how does vscode know that message is now variable we have created, it is the code that was creating in this program locally. this is a variable now. 

be aware of what you are doing not how you are doing it. if you know the what then the how is easy, that is a matter of skill. but knowing the what is how you will be able to understand that if i am expecting to do something with this variable bring passed into name then i may not understand the value of this variable. nor would i know the kinds of errors this could cause. therefore when you do not know what you are doing you are more prone to error. which is very frustrating as you start to learn this. 

vscode code is now recognizing variables, functions and commands that we have programmed into the project. these are being treated similar to html commands or js commands that are also autocorrected. use this functionality more often. it is designed to be a visual cue for the coder. this helps me understand that at the project level my code is executing properly. my own variables are being passed through the files i have created. never rewrite a word from scrath- this is the equivalent of choosing to write without spellcheck. 

how many spelling errors have you found so far in this text? there is no spell check in this editor. the author is dyslexic. if i can code anything and have it executed. you can learn this too. use all the functionality of the tools you have to become more proficent. only idiots make an easy job hard to do to prove how good they are. experts make hard jobs easy to do so we dont do them wrong. spelling is a hard job for me. learn my lesson without choosing the harder path. 

let us run this code now and see how it executes. In the bash terminal rerun this code with the changes. 

now go back to the browser window and go to your local machines address at:

http://localhost:3000/input

do you see an input file? 

two fields and a submit button? 

if you do not see this the previous step did not work. go back and redo it. 

if your browser had these input fields this means that the we have the ability now to do the following:
1. We can collect the user input from this browser page
2. we can also submit it with a button
3. In the ejs code we have given these variables the characterization of type  and name. see below:
        <label for="name">Hello- what is your name</label>
        <input type="text" name="name" placeholder="putsomethinghere">
        <label for="message">What would you like to say</label>
        <input type="text" name="message" placeholder="message">

3.1 there is a label and an input field. name is associated to a for value. it is also classified as a label. we deduce from this that There is no input field in the label. however there is a variable we created. that variable is "name". What is the variable "name" in the code we have written so far. We created this in the mongooseModel.js file in the models folder. Go and observe this file now. 
3.2 What other links can you see now? between the codes? In addition to your observations i deduce that some how the variable for and the name filed will be used to connect the label field to the data in the node.js file.
3.3 what can you infer from the input field? you may not know how to execute these commands at this point. but what do you see as a patten? this knowledge and observation should be confirmed through this coding exercive. when we are done ensure you make a note of this. this should be used to create pseudocode that will be used to help guide you or another programmer in how to understand your code. do not assume that other coders have proficency with this. do not also assume that you will remember it next time. create a formula sheet of these steps to take. 

now let us go back into the node.js networking file and begin to connect these two, the inputs from the web browser and post them into the mongo database.

we will need to use get and put requests to achieve this. a get request allows us to do something on browser. a post request is going to allow us to take some information from the browser and save it into some other file somewhere. in our case we will be saving this information into a mongo databse we created. the only input we will be saving is a name and a message. we will make sure that the information we get from the browser is stored properly as we defined in the moongooseModel.js file. for this project properly means as two string inputs. one called name and one called message. 

we will use post to take information from the browser and send it to the mongo database and get to show us what we are going. this is the first time we will be using the server to put information somewhwere so we much bring this function into our program. Use the following code to acheive this. 

app.use( ( req , res, next ) => {
  console.log('the server can now be used to send information at localhost:3000/input');
})

ensure that the palcement of app.use is before any get or post requests are made. app.use is a unique function. it allows the capability of taking information from the server represernted visually by the browser file. this capability exists on all types of requestes, get and post. therefore it is important that the app.use function is linerealy read into the computer before any get or post requests are made. the browser will either have this capability or it will not. you cannot selectively apply it. therefore if this code comes after any get or post requestes it will not be applied. since the server is open and running before you invoke this command it will be ignored, no error will be produced because you have missed your chance for when to do this. 

an easy way to check this is by using the above code. the above code tells us merely that the browser now has the capability of being used. a static website where no input is taken from the user will not needs this. run the above code to make sure that the server can now be used to pass information. 

now that we know we can use the server with both get and post functionality, let us ensure that the data we get back conforms to some standard formats. we need to ensure that the information will be a string that can be accepted by our database. note we created a schema for this. a data structure. the database, as we designed it can only accept two strings as inputs. it cannot accept anything else. moreover the information we get from the web browser must be able to be sent to a server. 

the computer cannot anticipate the types of input or the kinds of information we are passing in this assignment. therefore we must ensure that we have confidence in the type of information we are getting. if we want an email address and we get a series of numbers. we should get an error. if you are expecting a pdf file in this field and someone tries to attach a word document it would helpful to both the user and reciever of the information if we ensure that what they are getting is what they were expecting. let us use the following command now to be able to control the type of input. 

app.use(express.urlencoded({ extended: true }),(req,res)=>{
    console.log("only information that can be passed through the browser will be used")
});

you do not need to memorise the function. this function is using the express app variable we created to allow us the ability to ensure that all data passing in from this function is urlencoded. this means all information passed to us from the browser is information that can be passed through a browser file. now run this file in the bash terminal again

node node.js

now go to the browser and hit enter at the expected address. for this project thus far that address is: 

http://localhost:3000/input

put your cursor in the address bar and hit enter. note the console.log directions. we should be able to now read the directions:

only information that can be passed through the browser will be used

the app.use function will now ensure this feature and we can confirm its application by sending the console a message so we can read it. 

HOWEVER. the get message is not misssing. the message from the following code:


app.get("/input", (req, res)=>{
    res.render("input")
    console.log("did you hit enter in the address bar? the server was refresed at localhost:3000/input")
})

no longer appears. the cause for this is unclear at this time. therefore once you have made sure that the the app.use function does work with the aide of the console.log message. comment it out and put the following:

app.use(express.urlencoded({ extended: true }))

I encourage you never to erase your work when you are working and you do not understand something. the "visual clutter" of your code will guide you into becoming a better coder. at first you will attempt many things by troubleshooting. leave your troubleshooting steps in the code. comment them. it is easier to know what you need to learn when you are aware of what you do not understand. The author does know the answer and therefore you will see the code until the author can explain it. at that time this document will be revised and revision note will be made at the top to ensure any users of this file will understand that this file has been superceeded and new information has been added. 

url encoded is a standardized way in which the server will understand data from a form. you do not need to memorize this just follow the code, know what function this represents and create a file for where the codeblocks you understand are. explain them to your self in both the code and in writing and jsut use these functions. everytime you use a new function write down what it does.


let us now work on the post request. 

app.post("/input", (req, res)=>{
    console.log("the input from the input file is being posted");
    res.send(201);
})

we are again using our express functions, recall that app is a variable that invokes express functions. this is called app in our code so far. we need to make sure this funtionality was started so we will send oursevles a message to see this happened on the console. 
passing an exam is not a demonstration of knowledge. because failing a test only demonstrates the first attempt. when you fail it should make you frustrated if you want to learn. if this is you then go slowly. you will be more advantaged by understanding this now. then later practicing. this is quite literally how EVERYTHING else in the world is taught with the exeption of coding. I do not know any other subject in the world that is not taught like this. other than code. 

if you copy and paste this code and see that it works and then move on. if you complete the full exercise and it works because you copied it in. i will then congratulate NOT YOU but myself. because that demonstrates that i know how to code so well i can explain it- in code with no other communication involved. only someone exceptionally skilled can teach like that. 

Only people who know what THEY are doing extremely well, can explain it to a barmaid. Albert Einstien

These extra rants are here so you get a slight mental break from coding. to understand that frustration is a demonstration of the learning process. not marks. appretiate you are frustrated, slow down. speed is not the goal. knowledge is. this is one machine. just one. it is actually a simple machine but you do not know it well enough yet. a nuclear powerlant is a complex system. this is one computer, recognize the patterns. the same patterns exist in the networking of the servers and the same patterns exist on your personal device. learn the patterns first. become an engineer before you become a macheinst if you want to do it fast. skilled technicians know not only how but also why. they will agree as i do that it takes time to become proficent. 

data science and coding are merely using your knowledge and your brain and mapping it to how the computer works. understand what YOU are trying to get IT to do. You are in control of it. It is not doing anything. You are its god. this thing does not have a brain. you are the only brain here- right now. 



st 1830 end 1209- nov 9/ 2022
st 1049- nov 10/ 2022








# Project2
# proj2
