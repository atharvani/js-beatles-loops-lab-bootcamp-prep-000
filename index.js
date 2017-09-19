function theBeatlesPlay(musicians, instruments)
{
  var newArray = new Array
    for( var i=0; i < instruments.length; i++)
    {
      newArray = [...newArray, musicians[i] + " plays " + instruments[i]];

    }
    return newArray;
}

function johnLennonFacts(array)
{
  for (var i =0 ; i< array.length; i++)
  {
    array[i] = array[i] + "!!!";
  }
  return array;
}
function iLoveTheBeatles(number)
{
  var array1 = new Array;
  var i =0;
  if(number === 7)
  {
  do{
      array1 = [...array1, 'I love the Beatles!'];
      i++;
  }while(i<=number);
}
else if (number === 17)
{
  var array2 = new Array;

      array2.push("I love the Beatles!");

  }
  return array1, array2;
}
