
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  if (htmlElement.hasChildNodes()) {
    Array.from(htmlElement.children).forEach((child) => 
    htmlElement.removeChild(child));
  }
  let pTag = document.createElement("p");
  pTag.innerHTML = string;
  htmlElement.appendChild(pTag);
};

// htmlGenerator('Party Time.', partyHeader);