const form = document.querySelector('#CharacterSheet');
const TotalLevel  = document.getElementById('TotalLevel')
let characterAlignment = document.getElementById('Alignment')
let bonusPoints = document.getElementById('BonusAttributePoints')
let attributePoints = document.getElementById('InitialAttributePoints')
const Race = document.getElementById('Race')
const STR = document.getElementById('STR')
const STRmod = document.getElementById('STRmod')
const STRgift = document.getElementById('STRgift')
const SkillButtons = document.getElementsByName('test')
const SkillPointDisplay = document.getElementById('SkillPoints')
let liveAttrValues = document.getElementsByClassName('attrValues')
let SkillValues = document.getElementsByClassName('SkillValues')
const SkillMods = document.getElementsByClassName('SkillMods')
const Printout = document.getElementById('Printout')
const CL1 = document.getElementById('CL1')
const CL1BTN = document.getElementById('CL1BTN').addEventListener('click', CL1UP)
const CL2 = document.getElementById('CL2')
const CL2BTN = document.getElementById('CL2BTN').addEventListener('click', CL2UP)
const CL3 = document.getElementById('CL3')
const CL3BTN = document.getElementById('CL3BTN').addEventListener('click', CL3UP)
var resetable = document.getElementsByClassName('resetable')
const DropDownMenus = {
  alignmentMenu: document.querySelector('#Alignment'),
  raceMenu: document.querySelector('#Race'),
  classONE: document.querySelector('#classONE'),
  classTWO: document.querySelector('#classTWO'),
  classTHREE: document.querySelector('#classTHREE'),
}
let currentAttributePoints = []
let AP = Array.from(attributePoints)
AP.forEach((boop)=>{currentAttributePoints.push(boop.textContent)})

currentBonusPoints = []
let BP = Array.from(bonusPoints)
BP.forEach((boop)=>{currentBonusPoints.push(boop.textContent)})

currentAttrValues = []
let AV = Array.from(liveAttrValues)
AV.forEach((boop)=>{currentAttrValues.push(boop.textContent)})

currentSkillValues = []
let SV = Array.from(SkillValues)
SV.forEach((boop)=>{currentSkillValues.push(boop.textContent)})