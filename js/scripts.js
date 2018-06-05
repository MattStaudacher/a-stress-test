var warningValues = [];
var healthValues = [];
var copingValues = [];

$(function(){
  $("#stress-survey").submit(function(event){
    event.preventDefault();
    $("#guidance").show();
    warningValues = [];
    healthValues = [];
    copingValues = [];
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
    var outputHelp = ["Nothing"];
    if(warningValues.length === 0 && healthValues.length===0)
    {
      outputHelp = ["You are Healthy!"];
    }
    else if(copingValues.length === 0)
    {
      outputHelp = ["Pet a Cat or Dog","Yoga","Meditate"];
    }

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
