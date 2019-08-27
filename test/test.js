window.onload = function() {
  // select tag option population
  load_options();
  // console.log(Object.keys(class_rates));
  // Object.keys(class_rates).forEach(countarr);
  // function countarr(item, index){
  //   // console.log(item);
  //   if(class_rates[item].length != 3){
  //     console.log(Object.keys(class_rates)[index]);
  //   }
  // }
};

function load_options() {
  var units = document.getElementById('unit_name');
  var classes = document.getElementById('class');
  var unit_keys = Object.keys(base_stats);
  var class_keys = Object.keys(class_rates);
  var opt_head = Object.keys(houses);
  var class_head = Object.keys(class_groups);

  console.log("1", units);

  // better character options...i hope
  opt_head.forEach(function(key){
    var house_arr =  houses[key];
    var optgroup = document.createElement('OPTGROUP');
    optgroup.label = key;
    house_arr.forEach(function(element){
      var option = document.createElement('OPTION');
      option.innerHTML = element;
      option.value = element;
      optgroup.appendChild(option);
    });
    units.appendChild(optgroup);
  });

  console.log("2",classes);

  //
  // // character options
  // for(var i = 0; i<unit_keys.length; i++){
  //   var option = document.createElement('OPTION');
  //   option.innerHTML = unit_keys[i];
  //   option.value = unit_keys[i];
  //   units.appendChild(option);
  // }
  //

  //class options with headers
  class_head.forEach(function(key){
    var class_arr = class_groups[key];
    var optgroup = document.createElement('OPTGROUP');
    optgroup.label = key;
    class_arr.forEach(function(element){
      var option = document.createElement('OPTION');
      option.innerHTML = element;
      option.value = element;
      optgroup.appendChild(option);
    });
    classes.appendChild(optgroup);
  });
    

  // class options
  //for(var i = 0; i<class_keys.length; i++){
  //  var option = document.createElement('OPTION');
  // option.innerHTML = class_keys[i];
  //  option.value = class_keys[i];
  //  classes.appendChild(option);
  //}
}

function recalculate_growthrate(){
  var unit = document.getElementById('unit_name').value;
  var classes = document.getElementById('class').value;
  // console.log(classes);
  // console.log
  var base_growthrate = base_stats[unit][0];
  var class_growthrate = class_rates[classes][0];
  console.log(base_growthrate);

  var stat_td = document.getElementsByName('stat');
  var breakdown = document.getElementsByName('breakdown');
  for(var i = 0; i<base_growthrate.length; i++){
    stat_td[i].innerHTML = 0;
    stat_td[i].innerHTML = parseInt(stat_td[i].innerHTML)+parseInt(base_growthrate[i]);
  }

  for(var i = 0; i<class_growthrate.length; i++){
    // stat_td[i].innerHTML = 0;
    stat_td[i].innerHTML = parseInt(stat_td[i].innerHTML)+parseInt(class_growthrate[i]);
    breakdown[i].innerHTML = base_growthrate[i] +" + "+ class_growthrate[i] + " = ";
  }
  display_class_masteries();
  display_character_items(unit);
}

function display_class_masteries(){
  var class_name  = document.getElementById('class').value;
  var table = document.getElementById('class_masteries');
  // while(table.firstChild){
  //   table.removeChild(table.firstChild);
  // }
  table = removeAllChildren(table);
  for(var i = 0; i<class_rates[class_name][1].length; i++){
    var row = document.createElement("TR");
    var td_mastery = document.createElement("TD");
    var td_description = document.createElement("TD");

    td_mastery.innerHTML = class_rates[class_name][1][i][0]+":";
    td_description.innerHTML = class_rates[class_name][1][i][1];
    row.appendChild(td_mastery);
    row.appendChild(td_description);
    table.appendChild(row);
  }

  display_class_requirements(class_name);

}



function display_character_items(unit){
  console.log('displaychars');
  var item_table = document.getElementById('character_items');
  // while(item_table.firstChild){
  //   item_table.removeChild(item_table.firstChild);
  // }
  item_table = removeAllChildren(item_table);
  lost_items = base_stats[unit][1];
  liked_items = base_stats[unit][2];

  row = document.createElement("TR");
  lost = document.createElement("TD");
  liked = document.createElement("TD");
  lost.innerHTML = "Lost Items";
  liked.innerHTML = "Liked Gifts";

  ul = document.createElement("UL");

  row.appendChild(lost);
  lost_items.forEach(function(element){
    var li = document.createElement('LI');
    li.innerHTML = element;
    ul.appendChild(li);
  })
  lost.appendChild(ul);
  row.appendChild(lost);
  ul = document.createElement("UL");

  liked_items.forEach(function(element){
    var li = document.createElement('LI');
    li.innerHTML = element;
    ul.appendChild(li);
  })
  liked.appendChild(ul);
  row.appendChild(liked);
  item_table.appendChild(row);
}

function display_class_requirements(cn){
  var class_requirements = document.getElementById('class_requirements');
  class_requirements = removeAllChildren(class_requirements);

  requirements = class_rates[cn][2];
  requirements.forEach(function(element){
    var req = document.createElement("LI");
    req.innerHTML = element;
    class_requirements.appendChild(req);
  })
}

function removeAllChildren(element){
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
  return element;
}
