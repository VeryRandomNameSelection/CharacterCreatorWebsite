function onLevelUpdate(whichClass) {
  fromCL=whichClass
  liveAttrValues = document.getElementsByClassName('attrValues')
  SkillValues = document.getElementsByClassName('SkillValues')

  currentAttrValues = []
  AV = Array.from(liveAttrValues)
  AV.forEach((boop)=>{currentAttrValues.push(boop.textContent)})

  currentSkillValues = []
  SV = Array.from(SkillValues)
  SV.forEach((boop)=>{currentSkillValues.push(boop.textContent)})

  bonusPoints = document.getElementById('BonusAttributePoints')
  attributePoints = document.getElementById('InitialAttributePoints')

  currentAttributePoints = []
  AP = Array.from(attributePoints)
  AP.forEach((boop)=>{currentAttributePoints.push(boop.textContent)})

  currentBonusPoints = []
  BP = Array.from(bonusPoints)
  BP.forEach((boop)=>{currentBonusPoints.push(boop.textContent)})

  switch (displayedClass) {
    case selectedClassOne.NAME: 
    currentClass = selectedClassOne
    break;

    case selectedClassTwo.NAME:
      currentClass = selectedClassTwo

    break;

    case selectedClassThree.NAME:
      currentClass = selectedClassThree
    break;

    default:
    break;
  }
  classOneIndex = DropDownMenus.classONE.selectedIndex
  classTwoIndex = DropDownMenus.classTWO.selectedIndex
  classThreeIndex = DropDownMenus.classTHREE.selectedIndex
  currentLevel = TotalLevel.textContent
  totalAttrPts = attributePoints.textContent
  totalBonusPts = bonusPoints.textContent
  totalSkillPts = SkillPointDisplay.textContent
  thisAlignment = characterAlignment.selectedIndex
  thisRace = Race.selectedIndex
  thisPage = Printout.innerHTML

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
  //  lastLevel=currentLevel-1
//  console.log(lastLevel)
}

function delevel(fromCL) {
  CharacterBook.pop()

  //lastLevel = length(CharacterBook)
  TotalLevel.innerText = +TotalLevel.innerText
  displayedClass = CharacterBook[TotalLevel.innerText].displayedClass
  DropDownMenus.classONE.selectedIndex = CharacterBook[TotalLevel.innerText].class1
  DropDownMenus.classTWO.selectedIndex = CharacterBook[TotalLevel.innerText].class2
  DropDownMenus.classTHREE.selectedIndex = CharacterBook[TotalLevel.innerText].class3
  
  //have a switch be fired on the fromCL argument that determines which character level needs to go down
  switch(fromCL){
    case 1://CL1
    CL1.innerText = +CharacterBook[TotalLevel.innerText].ClassLevel1
    ClassLevel1 = CL1.innerText
    break;
    case 2://CL2
    CL2.innerText = +CharacterBook[TotalLevel.innerText].ClassLevel2
    ClassLevel2 = CL2.innerText
    break;
    case 3://CL3
    CL3.innerText = +CharacterBook[TotalLevel.innerText].ClassLevel3
    ClassLevel3 = CL3.innerText
    break;
    default:
    break;
  }

  attributePoints.innerText = CharacterBook[TotalLevel.innerText].attributePoints
  bonusPoints.innerText = CharacterBook[TotalLevel.innerText].bonusPoints
  SkillPointDisplay.innerText = CharacterBook[TotalLevel.innerText].skillPoints
  characterAlignment.selectedIndex = CharacterBook[TotalLevel.innerText].alignment
  Race.selectedIndex = CharacterBook[TotalLevel.innerText].race
  Printout.innerHTML = CharacterBook[TotalLevel.innerText].printout
  console.log(CharacterBook.length)
  console.log(CharacterBook)
  paintTheThing(CharacterBook[TotalLevel.innerText].attributeArray, liveAttrValues)
  paintTheThing(CharacterBook[TotalLevel.innerText].skillValuesArray, SkillValues)
//  lastLevel-=1
  attributeMods()
//  if (CharacterBook.length>=0) {
//
//  }
}

function paintTheThing(thisIsAnArray, thisIsANodeList) {
  for (let index = 0; index < thisIsAnArray.length; index++) {
    thisIsANodeList[index].innerText = +thisIsAnArray[index];
    
  }
}

//let page1 = new CharacterSheet(    0,
//  'null',
//  'null',
//  'null',
// 'null',
//  0,
//  0,
//  0,
//  0,
//  0,
// 0,
//  'null',
//  'null',
//  'null',
//  'null',
//  'null')
//let CharacterBook = [page1];
