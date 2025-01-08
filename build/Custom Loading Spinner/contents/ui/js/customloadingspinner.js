/*
Project - Custom Spinner
Version - 1.0
Author - Shandeep - https://www.linkedin.com/in/shandeepsrinivas/
*/

const targetNode = document.body;
const observer = new MutationObserver((mutationsList) => {
  let cssClassName = 'customLoadingSpinnerCustom';
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE && node.matches('i.fa-spinner')) {
          //console.log('Spinner element added:', node);
		  $('i.fa-spinner').removeClass('fa-spinner').addClass(cssClassName)
        }
        if (node.nodeType === Node.ELEMENT_NODE) {
          const spinners = node.querySelectorAll('i.fa-spinner');
          spinners.forEach((spinner) => 
			//console.log('Spinner element added:', spinner), 
		  	$('i.fa-spinner').removeClass('fa-spinner').addClass(cssClassName)
		  );
        }
      });
    }
  }
});
const config = { childList: true, subtree: true };
observer.observe(targetNode, config);