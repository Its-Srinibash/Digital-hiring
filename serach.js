const search = () => {
  const searchBox = document.getElementById('serach-item').value.toUpperCase();
  const candidateList = document.getElementById('candidate-list');
  const candidates = candidateList.getElementsByClassName('candidate');
  const candidateNames = candidateList.getElementsByTagName('h4');

  for (let i = 0; i < candidateNames.length; i++) {
    let candidateName = candidateNames[i];

    if (candidateName) {
      let textValue = candidateName.textContent || candidateName.innerText;
      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        candidates[i].style.display = '';
      } else {
        candidates[i].style.display = 'none';
      }
    }
  }
}
