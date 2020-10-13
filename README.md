# CharacterCreatorWebsite
A website, written in Javascript that allows the user to quickly cycle through the character creation process according to DnD 3.5 rules.

This code is separated into several modules. 

These modules deal with the following:

DOM objects
Feat availability and display
Feat selection
Website layout
Base rules governing race/class/skills and the various stats associated with those changes.

# variables.js

Toon: The master copy of the character's base stat progressions based upon their class selections

Classes: The base stat progressions of each class

Class levels are tracked in order to calculate base stat progressions

A baseline for character statistics is set. Racial modifiers and attribute point selections will start from here.

score is the range of numbers that the attribute points can fall into

addsub controls the cost of raising or lowering attribute points

modtable controls the attribute modifier

# Rulebook.js

A collection of functions that control the display of information on the DOM.

attributeMods controls the behavior of the STR/DEX/CON etc modifiers as base attribute points are changed.

Each attribute has it's own functions for adding or taking away points and these functions are associated with buttons on the DOM.

advancement has several layers.
It is called when a level in a new class is selected.
It takes in the next class level of the class being advanced as an argument.
It then calls a function that calculates skill point costs.
It then uses the sum of all the class levels put together to make sure the level cap has not been reached.
It then checks to see if the total level is divisible by 4. If so, a function is ran to add another attribute point to spend. If not, nothing.
It then checks to see if the character is pre or post epic.
If pre-epic, the stat progression of the current class level is summed with the master copy of the base stats.
It then runs a check to see which class has been selected and then runs another check using that class and level to determine if a feat is available.
If post-epic, the same actions as pre-epic are taken, but using epic stat progressions and feat lists.

skillPointCalculation takes in an argument (points), which is really the selectedClass.SKILLValues.points.  It is the base amount of skill points a selected class earns upon advancing in it.
It then checks for the condition of this being the first level. If so, it sets the DOM object SkillPointDisplay to the sum of two variables.
The first variable is the remaining skill points displayed on the page, which defaults to 0 upon initialization or reset. The second variable is the sum of the class's base skill points and the intelligence modifier which is multiplied by 4. These two variables come together to define the amount of skill points to be given to the user to spend.
If the total level is anything other than 1, it defaults to repeating the formula for skill points, making sure that at least one skill point is added every level.
It then checks the condition of the racial selection drop down menu. If human, an extra skill point is granted.

The CLXUP() functions trigger when the + buttons under the class selection menus are triggered.
They take in no argument. The first check is to make sure a class has actually been selected from the menu. If not, it takes no action. 
If so takes in the class level shown in the text on the DOM and advances it by 1 to define the variable ClassLevel#. This is the class advancing a level and this new number will determine the changes in base stats and skill point allocations.
This number is passed into the master copy of the character's statistics as Toon.ClassOne.Level
Next the variable displayedClass is set to be equal to the variable selectedClassOne. selectedClassOne is the variable that connects the value of the dropdown menu of classes to their base definitions. The program then tracks the progression of that class as the character advances in levels. This is all done in the classOneSelection() function.

It checks to make sure the maximum level (30) hasn't been reached.
If not, it sets the DOM object associated with the class level to the new number and then passes that new number into the advancement function, described above.
Then the skillPointCalculation() function runs.

Once the If loop has been exited, the onLevelUpdate() function runs.

The statAnchor() function retains the current value of the various attribute scores.

The function racialTraits() is a switch/case function that determines initial attribute distribution associated with racial selections.

The classesFromAlignment() function hasn't been built yet. It would restrict class selection based upon alignment selection. 

The skillPointCost() function runs through a for loop.
Each skill that exists is checked against an array contained within the base class definition. This array contains only 0's 1's and 2's. An if loop reads the value in that array and from it determines the cost of skill advancement or if it is even allowed with this class.

The classXxxSelection() functions update the selectedClassXxx variables and the displayedClass variable to the base class definition.

The gifXXX() functions are switches that define the base value of whatever attribute they're associated with. Any change is then followed by a script that updates the modifier based upon that current value.

The skillPointAllocation(pointer) function controls the distribution of skill points from the available pool. The argument is a numerical value associated with the button on the DOM that is used to add skill points to a certain skill.  The cost of advancing these skills with points from the pool is determined on a class by class basis.
It first checks to see if the available skill points have run out.
It then runs a switch/case that checks the skill point cost as determined by the class and takes from the pool and adds to the skill.

The reset() function runs a for loop that logs output to the console.
It then reloads the page.

# featBook.js

The featTest(classLevel) function contains logic for translating class level and total level into printouts and drop down menus on the DOM. 
For the messages it calls the featText(classLevel) function and for the drop down menus it calls the featButtons(why) function.
featText(classLevel) displays a line of html on the DOM.
featButtons(why) creates a drop down menu in a selected portion of the DOM using html and sets the text in the selected value to the value of (why)

# domObjects.js

This is a collection of variables that allow the code to manipulate the objects on the DOM.

Of note, the var resetable cooresponds to most values on the screen and allows the reset command to change them all back to their default values.

# downButton.js

This is an attempt to allow the user to go back to a previous level and make different choices. 

It is still under development. The delevel function sometimes stops working when trying to relevel.

The class CharacterSheet{} is created. It takes the following input:
totalLevel        The total character level
DisplayedClass    The most recent class selection and all it's attributes
class1            The first class selection and all it's attributes
class2            The second class selection and all it's attributes
class3            The third class selection and all it's attributes
classLevel1       The first class level
classLevel2       The second class level
classLevel3       The third class level
attributePoints   The remaining pool of attribute points
bonusPoints       The remaining pool of bonus attribute points
skillPoints       The remaining pool of skill points
alignment         The alignment selection
race              The race selection
attributeArray    Snapshot of the values assigned to the attributes from the attribute pool
skillValuesArray  Snapshot of the values assigned to the various skills from the skill pool
printout          A collection of html that is printed to the screen after advancing a level

The onLevelUpdate() function first takes a snapshot of the document elements attrValues and SkillValues and assigns those objects to the variables liveAttrValues and SkillValues.
These DOM objects are then run through an Array.from() to produce an array of text values for the skill point and attribute point spending selections.
The same procedure is done on the attribute and bonus attribute point pools.
Next a switch/case controls the value of the currentClass variable, which tracks the most recent class that has been requested to advance. This currentClass variable is going to be one of the three selectedClassXxx variables or the loop will just exit.
ClassXxxIndex variables are a way of tying the drop down menu selections to a variable, as are the rest of the following variables until boop.
boop is a dummy variable that creates an instance of the class CharacterSheet and takes in all of the required arguments.

## This part needs debugged

It then pushes this instance onto an array called CharacterBook.
The last step is to set the lastLevel variable to the currentLevel variable -1. This is meant to be a way of keeping track of what instance of CharacterBook the delevel command will point to.

The delevel() function is mean to revert the screen back to the last level taken as if you just advanced to it. 

## known bug

The connection between the CharacterBook instance and the level the user is trying to advance to become uncoupled due to faulty logic in the stacking and unstacking of the CharacterBook array.

When the delevel() function is called it first checks to see if the lastLevel variable is > 0. It is checking so see if the level has been advanced to at least one.
It then removes the last object in the CharacterBook array.
It then displays to the console the lastLevel variable.
It then pushes to the DOM all of the values in the CharacterBook instance pointed to by the lastLevel variable.

// why would I not just skip the lastLevel variable and use [-1]
