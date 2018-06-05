var warningValues = [];
var healthValues = [];
var copingValues = [];
var outputHelp = []

$(function(){
  $("#stress-survey").submit(function(event){
    event.preventDefault();
    $("#guidance").show();
    warningValues = [];
    healthValues = [];
    copingValues = [];
    outputHelp = [];
    $("input:checkbox[name=signs-warning]:checked").each(function(){
      warningValues.push($(this).val());
    });
    $("input:checkbox[name=signs-health]:checked").each(function(){
      healthValues.push($(this).val());
    });
    $("input:checkbox[name=coping-methods]:checked").each(function(){
      copingValues.push($(this).val());
    });
    console.log(warningValues);
    console.log(warningValues.length);
    console.log(healthValues);
    console.log(healthValues.length);
    console.log(copingValues);
    console.log(copingValues.length);
    $("#help-list").text("");

    var warningLength = warningValues.length;
    var healthLength = healthValues.length;
    var stressCombined = warningLength+healthLength;
    var copingLength = copingValues.length;

    //Branching for Stress Test Starts Here
    if((!warningLength) && (!healthLength) && (!compareTo(copingLength,5)))
    {
      outputHelp = ["You are Healthy!"];
    }
    else if(compareTo(warningLength+healthLength,10) && (!compareTo(copingLength,5)))
    {
      outputHelp = ["Life is too stressing!","Try petting an animal","Go for a walk"];
    }
    else if(compareTo(copingLength,5))
    {
      outputHelp = ["Health Overwhelming!"];
    }
    else if((!copingLength))
    {
      outputHelp = ["Pet an animal","Yoga","Meditation"];
    }
    else if(stressCombined > copingLength)
    {
      outputHelp = ["Pet an animal","Yoga","Meditation"];
    }
    else if(copingLength >= stressCombined)
    {
      outputHelp = ["You are health!","Keep working on your stressfree routine"];
      outputHelp = outputHelp.concat(copingValues);
    }
    else {
      outputHelp = [""];
    }
    //Branching for Stress Test Ends Here
    arrayWrapper(outputHelp);
    $("#help-list").html(outputHelp);
  });
});

function listWrapper(stringWrap)
{
  return ("<li>"+stringWrap+"</li>");
}

//Passing the pointer to an array and then running a for loop to wrap each string in the array with the function listWrapper.
function arrayWrapper(arrayTemp)
{
  for(var index = 0; index < arrayTemp.length; index++)
  {
    arrayTemp[index] = listWrapper(arrayTemp[index]);
  }
}

function compareTo(first,second)
{
  return (first === second);
}
