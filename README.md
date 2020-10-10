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
