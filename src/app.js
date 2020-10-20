//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address,distanceFromTown,hasNeighbours)
{
    let str1=typeof(address);
    let str2=typeof(distanceFromTown);
    let str3=typeof(hasNeighbours);
    return str1+str2+str3;
}

//Progression 2:    
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
function moreAboutKaren(parents, noOfSiblings, isNuclearFamily)
{
    let str1=typeof(parents);
    let str2=typeof(noOfSiblings);
    let str3=typeof(isNuclearFamily);
    if(str1=='string'&&str2=='number'&&str3=='boolean')
    {
        return true;
    }
    else
    {
        return false;
    }
}   


//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
function doesFriendExist(ageInText, ageInNumber){
    let str1=typeof(ageInText);
    let str2=typeof(ageInNumber);
    
    if(isNaN(str1))
    {
        return NaN;
    }  
    if(isNaN(str2))
    {
        return NaN;
    }  
   }

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
function sweetTooth(totalNoOfSweets,sweetsConsumedByKaren,sweetsConsumedInNMeters,metersToTravel)
{
    let str1=typeof(totalNoOfSweets);
    let str2=typeof(sweetsConsumedByKaren);
    let str3=typeof(sweetsConsumedInNMeters);
    let str4=typeof(metersToTravel);
    let str5="No sweets for karen's friend";
    if(str1!='number'||str2!='number'||str3!='number'||str4!='number')
    {
        return str5;
    }
   if(totalNoOfSweets==0 && sweetsConsumedByKaren==0 && sweetsConsumedInNMeters==0 && metersToTravel==0 )
    {
      return 0;
  }
  if(str1=='undefined')
  {
      return str5;
  }
  if(str2=='undefined')
  {
      return str5;
  }
  if(str3=='undefined')
  {
      return str5;
  }
  if(str4=='undefined')
  {
      return str5;
  }
  if(sweetsConsumedByKaren==totalNoOfSweets)
  {
      return 0;
  }
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(fahrenheit)
{
    let str1=typeof(fahrenheit);
    let str2="Technical Error!";
    
    if(str1=='undefined')
    {
        return str2;
    }
    if(str1=='string')
    {
        return str2;
    }
    if(str1=='object')
    {
        return str2;
    }
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fToCel ;
    return message;

}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice)
{
   let str1=typeof(choice);
   if(str1=='undefined')
   {
    return "Wasn't able to decide";
   }
if(choice==1)
{
    return "Take her daughter to a doctor";
}
if(choice==-1)
{
    return "Break down and give up all hope";
}
if(str1=='string')
{
    return "Refused to do anything for karen";
}
}

//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
