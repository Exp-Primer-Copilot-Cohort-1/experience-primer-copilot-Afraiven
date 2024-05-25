function skillsMember() {
  var member = document.getElementById('member');
  var memberValue = member.options[member.selectedIndex].value;
  var memberText = member.options[member.selectedIndex].text;
  var memberSkills = document.getElementById('memberSkills');

  if (memberValue == '1') {
    memberSkills.innerHTML = '<div class="form-group"><label for="memberSkills">Skills</label><input type="text" class="form-control" id="memberSkills" name="memberSkills" placeholder="Skills"></div>';
  } else {
    memberSkills.innerHTML = '';
  }
}