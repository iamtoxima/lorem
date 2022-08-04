document.addEventListener("DOMContentLoaded", function(){
  addWavyUnderline(findAllUnorderedListElements());
});

function addWavyUnderline(elements) {
  // takes element as an argument
  elements.forEach(element=>
    element.style.textDecoration = 'wavy underline')
}


function displayProjects() {
}

function findAllUnorderedListElements() {
  return document.querySelectorAll('.social-media-links');
}
function prepareProjects(firstProject,secondProject,thirdProject) {
  let projects = [firstProject,secondProject,thirdProject];
  let projectTitle = " ";
  for(let index = 0; index < projects.length; index++){
    const element = projects[index];
    if(element.trim().length > 20){
      projectTitle += `<p>${element}</p><br>`
    }else{
      projectTitle  += `<span>${element}</span><br>`
    }
  }
  return projectTitle;
}

exports.findAllUnorderedListElements = findAllUnorderedListElements;
exports.prepareProjects = prepareProjects;









