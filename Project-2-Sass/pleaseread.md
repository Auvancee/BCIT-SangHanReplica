# Instructions

Everyone is assigned a section to do. Please do not mess with other people's section. When doing sass, do not commit anything or sync changes. when the time comes to finally putting the pieces together, then notify me and everyone else. Thank You :)


2024-12-05 <br>
(We have 4 days to submit so lets get cracking.)
<hr>

## Installing Sass
if you dont have sass installed, make sure you do, otherwise it will throw out errors. 

- do { sass --version }
-  if not installed, do 
 { choco install sass }


## Sass Setup
Everything has been setup, here are a few basics:

-> **Variables.scss:** 

Where you define variables (only simple css), use the $ to define 
a variable then the property (example: $color: black) 

You can then use those defined variables and use it in your scss file.

-> **global.scss:**

This is the base styling for the website including the main. Please do not mess with the main tag or add other css properties to it.

-> **styles.scss:** 

Never touch the styles.scss file. This file compiles all the other scss files into one file aka styles.scss.

from there, the compiler will then convert it to a normal styles.css file.

-> **styles.css** & **styles.css.map:**

Strictly, do not touch either of those files as it can cause issues with merge conflicts or the compiler being weird. 


## How to do sass
You normally follow the same syntax as you would when writing plain css. It's exactly the same. Now you can use the variables that are defined in the _variables, depending on what you're working on.

#### And before working on anything 
<hr>
do your terminal command so it can start watching the sass

Command: { sass --watch scss:styles }

#### Still unsure?
<hr>
- Read the presentations <br>
- Talk to chatgpt but make sure it doesnt target the sensitive files 
  previously mentioned. <br>
- You can look at my section2 code on how I called variables in my scss section.
