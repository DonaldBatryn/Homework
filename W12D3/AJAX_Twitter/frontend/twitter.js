const FollowToggle = require("./follow_toggle.js")

$(() => {
// callback
$("button.follow-toggle").each(function(index,domElement){
    new FollowToggle(domElement);
    
  })
})  