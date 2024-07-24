const myArtefacts = document.querySelectorAll("#categories .item");
console.log(`Number of Categories: ${myArtefacts.length}`);
myArtefacts.forEach((artefact) => {
  let titleArtefact = artefact.children[0].textContent;
  console.log(`Category: ${titleArtefact}`);
  let widthArtefact = artefact.children[1].children.length;
  console.log(`Elements: ${widthArtefact}`);
});
