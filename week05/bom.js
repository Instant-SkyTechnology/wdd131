const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    event.preventDefault();

    const myItem = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌'; //listBtn.textContent = "delete";
    list.appendChild(listItem);

    listBtn.addEventListener("click", () => {
        list.removeChild(listItem);
    });

    input.focus();
});



// const input = document.querySelector('#favchap');
// const button = document.querySelector('button');
// const list = document.querySelector('#list'); // you need to fill in the blank to reference the HTML element that is a unordered list element.

// let chaptersArray = getChapterList() || [];

// chaptersArray.forEach(chapter => {
//     displayList(chapter);
// });

// button.addEventListener('click', () => {
//     if (input.value != '') {  // make sure the input is not empty
//         displayList(input.value); // call the function that outputs the submitted chapter
//         chaptersArray.push(input.value);  // add the chapter to the array
//         setChapterList(); // update the localStorage with the new array
//         input.value = ''; // clear the input
//         input.focus(); // set the focus back to the input
//     }
// });

// function displayList(item) {
//     let li = document.createElement('li');
//     let deletebutton = document.createElement('button');
//     li.textContent = item; // note the use of the displayList parameter 'item'
//     deletebutton.textContent = '❌';
//     deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
//     li.append(deletebutton);
//     list.append(li);
//     deletebutton.addEventListener('click', function () {
//         list.removeChild(li);
//         deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
//         input.focus(); // set the focus back to the input
//     });
//     console.log('I like to copy code instead of typing it out myself and trying to understand it.');
// }

// function setChapterList() {
//     localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
// }

// function getChapterList() {
//     return JSON.parse(localStorage.getItem('myFavBOMList'));
// }

// function deleteChapter(chapter) {
//     chapter = chapter.slice(0, chapter.length - 1);
//     chaptersArray = chaptersArray.filter(item => item !== chapter);
//     setChapterList();
// }



