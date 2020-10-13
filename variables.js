

const Toon = {
  defaultStats: {
    STR: 8,
    DEX: 8,
    CON: 8, 
    INT: 8,
    WIS: 8,
    CHA: 8
  },

  ClassOne:{
    Level: 0,
    BAB: 0,
    FORT: 0,
    REFL: 0,
    WILL: 0,
  },

  ClassTwo:{
    Level: 0,
    BAB: 0,
    FORT: 0,
    REFL: 0,
    WILL: 0,
  },

  ClassThree:{
    Level: 0,
    BAB: 0,
    FORT: 0,
    REFL: 0,
    WILL: 0,
  },

  Final:{
    Level: 0,
    BAB: 0,
    FORT: 0,
    REFL: 0,
    WILL: 0,
  }
}

const Progression = {
  fastBAB:    [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20],
  medBAB:     [ 0, 0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9,10,11,12,12,13,14,15],
  slowBAB:    [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,10],
  fastSAVES:  [ 0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,10,10,11,11,12],
  slowSAVES:  [ 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
  Null:       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  epicBAB:    [ 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
  epicSAVES:  [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5]
}

const Classes = {
  Null: {
    BAB: Progression.Null,
    FORT: Progression.Null,
    REFL: Progression.Null,
    WILL: Progression.Null,
    NAME: 'Null',
    SKILLValues: {
      points: 0,
      preferred: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }
  },

  Barbarian: {
    BAB: Progression.fastBAB,
    FORT: Progression.fastSAVES,
    REFL: Progression.fastSAVES,
    WILL: Progression.slowSAVES,
    NAME: 'Barbarian',
    SKILLValues: {
      points: 4,
      preferred: [ 0, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 2, 1, 0, 2, 2, 1, 2, 2, 2, 2, 1, 2, 0],
    },
    EPICFEAT: 4,
  },
  
  Bard: {
    BAB: Progression.medBAB,
    FORT: Progression.slowSAVES,
    REFL: Progression.fastSAVES,
    WILL: Progression.fastSAVES,
    NAME: 'Bard',
    SKILLValues: {
      points: 4,
      preferred:  [0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1],
    },
    EPICFEAT: 3,
  },
  
  Cleric: {
    BAB: Progression.medBAB,
    FORT: Progression.fastSAVES,
    REFL: Progression.slowSAVES,
    WILL: Progression.fastSAVES,
    NAME: 'Cleric',
    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 0, 1, 2, 1, 2, 2, 1, 2, 2, 2, 0]
    },
    EPICFEAT: 3,
  },
  
  Druid: {
    BAB: Progression.medBAB,
    FORT: Progression.fastSAVES,
    REFL: Progression.slowSAVES,
    WILL: Progression.fastSAVES,
    NAME: 'Druid',
    SKILLValues: {
      points: 4,
      preferred: [ 1, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 0]
    }, 
    EPICFEAT: 4,
  },
  
  Fighter: {
    BAB: Progression.fastBAB,
    FORT: Progression.fastSAVES,
    REFL: Progression.slowSAVES,
    WILL: Progression.slowSAVES,
    NAME: 'Fighter',
    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 0, 2, 2, 1, 2, 2, 2, 2, 2, 2, 0]
    },
    EPICFEAT: 2,
  },
  
  Monk: {
    BAB: Progression.medBAB,
    FORT: Progression.fastSAVES,
    REFL: Progression.fastSAVES,
    WILL: Progression.fastSAVES,
    NAME: 'Monk',
    SKILLValues: {
      points: 4,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2, 2, 0]
    }, 
    EPICFEAT: 5,
  },
  
  Paladin: {
    BAB: Progression.fastBAB,
    FORT: Progression.fastSAVES,
    REFL: Progression.slowSAVES,
    WILL: Progression.slowSAVES,
    NAME: 'Paladin',
    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1, 2, 2, 1, 0, 1, 2, 1, 2, 2, 2, 1, 1, 2, 0]
    }, 
    EPICFEAT: 3,
  },
  
  Ranger: {
    BAB: Progression.fastBAB,
    FORT: Progression.fastSAVES,
    REFL: Progression.fastSAVES,
    WILL: Progression.slowSAVES,
    NAME: 'Ranger',
    SKILLValues: {
      points: 6,
      preferred: [ 1, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0, 2, 2, 1, 1, 1, 2, 1, 2, 2, 0]
    }, 
    EPICFEAT: 5,
    // EVERY 3 AND 5 LEVELS
  },
  
  Rogue: {
    BAB: Progression.medBAB,
    FORT: Progression.slowSAVES,
    REFL: Progression.fastSAVES,
    WILL: Progression.slowSAVES,
    NAME: 'Rogue',
    SKILLValues: {
      points: 8,
      preferred: [ 0, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1]
    }, 
    EPICFEAT: 4,
  },
  
  Sorcerer: {
    BAB: Progression.slowBAB,
    FORT: Progression.slowSAVES,
    REFL: Progression.slowSAVES,
    WILL: Progression.fastSAVES,
    NAME: 'Sorcerer',
    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 0]
    }, 
    EPICFEAT: 3,
  },
  
  Wizard: {
    BAB: Progression.slowBAB,
    FORT: Progression.slowSAVES,
    REFL: Progression.slowSAVES,
    WILL: Progression.fastSAVES,
    NAME: 'Wizard',
    SKILLValues: {
      points: 2,
      preferred: [ 0, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 2, 2, 0]
    },
    EPICFEAT: 3,
  },
}

let ClassLevel1 = 0
let ClassLevel2 = 0
let ClassLevel3 = 0

let selectedClassOne=Classes.Null
let selectedClassTwo=Classes.Null
let selectedClassThree=Classes.Null

//clarify difference between displayedClass and currentClass
let displayedClass=Classes.Null.NAME
let currentClass = Classes.Null
// explain what the indexes do
let classOneIndex
let classTwoIndex
let classThreeIndex
// explain what boop does
var boop

const currentStats ={
  STR: 8,
  DEX: 8,
  CON: 8, 
  INT: 8,
  WIS: 8,
  CHA: 8,
}

const score    = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
const addsub   = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]
const modtable = [-5,-5,-4,-4,-3,-3,-2,-2,-1,-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10]

let currentLevel = 0
let displayedClass = Classes.Null
classOneIndex = 0
classTwoIndex = 0
classThreeIndex = 0
ClassLevel1 = 0
ClassLevel2 = 0
ClassLevel3 = 0
totalAttrPts = 0
totalBonusPts = 0
totalSkillPts = 0
thisAlignment = 0
thisRace = 0
currentAttrValues = 0
currentSkillValues = 0
let thisPage = Printout.textContent
let CharacterBook = [];
let lastLevel 
let fromCL
class CharacterSheet {
  constructor(
    totalLevel,
    displayedClass,
    class1,
    class2,
    class3,
    classLevel1,
    classLevel2,
    classLevel3,
    attributePoints,
    bonusPoints,
    skillPoints,
    alignment,
    race,
    attributeArray,
    skillValuesArray,
    printout
    ) 
    {
    this.totalLevel = totalLevel
    this.displayedClass = displayedClass
    this.class1 = class1
    this.class2 = class2
    this.class3 = class3
    this.classLevel1 = classLevel1
    this.classLevel2 = classLevel2
    this.classLevel3 = classLevel3
    this.attributePoints = attributePoints
    this.bonusPoints = bonusPoints
    this.skillPoints = skillPoints
    this.alignment = alignment
    this.race = race
    this.attributeArray = attributeArray
    this.skillValuesArray = skillValuesArray
    this.printout = printout
  }
}

boop = new CharacterSheet(
  currentLevel,
  displayedClass,
  classOneIndex,
  classTwoIndex,
  classThreeIndex,
  ClassLevel1,
  ClassLevel2,
  ClassLevel3,
  totalAttrPts,
  totalBonusPts,
  totalSkillPts,
  thisAlignment,
  thisRace,
  currentAttrValues,
  currentSkillValues,
  thisPage
)
CharacterBook.push(boop)