// // js Stuffs

let glossaryClick = Array.from(document.querySelectorAll('.glossary-link'));

const handleClick = (e) => {
  glossaryClick.forEach(node => {
    node.classList.remove('active');
  });
  e.currentTarget.classList.add('active');
  
}

glossaryClick.forEach(node => {
  node.addEventListener('click', handleClick)
});