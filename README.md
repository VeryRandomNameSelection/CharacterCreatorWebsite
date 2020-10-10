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