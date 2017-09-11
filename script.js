var colors = ['green', 'purple', 'blue', 'pink']

document.addEventListener('DOMContentLoaded', function () {
    //the document event listener is telling it to load a function right after the website is pulled up
    var btn = document.createElement('button');
    // here you are telling your function to create a button which you attached and id call btn or in this case variable 
    btn.innerText = "DO NOT CLICK!";
    //  as you can see we are naming the button "do not click " so be creative 
    btn.addEventListener('click', addSquare);
    // we are telling the function that it should wait for a command in this case click and addSqaure= remeber we have not defined addSqaure yet !!!!
    document.body.appendChild(btn);// read left to right<---- 
//  we are telling out document to place the btn in to the body of the document**Hint its easier to read left to right
    

var container = document.createElement('div');
//  here we have created a container in which it will create a "div" element 
    container.id = 'square-container';
    // we are creating an id that the container will be called sqaure container 
    document.body.appendChild(container);
// here we are putting the container we just created into the body of your document 
// by putting the sqaure into its own seprate container we eleinmate the chances of the interlock the button fucntion and the square button 

    function addSquare() {
       // here we are creating the function for the sqaure which if you recall we hadnt done that yet 
       
        var existingSquares = document.getElementsByClassName('square').length;
        var sq = document.createElement('div');
        sq.className = 'square';
        sq.id = existingSquares;

        sq.addEventListener('click', changeColor);
        sq.addEventListener('mouseenter', insertId);
        sq.addEventListener('mouseleave', removeId);
        sq.addEventListener('dblclick', removeNeighbor);

        container.appendChild(sq);
// ^ here we are telling the the fucntion that the sq propertied will be put into a container. 
    }


    function changeColor(event) {
        var index = Math.floor(Math.random() * colors.length);
        var newColor = colors[index];
        // We need to set newColor as the backgroundColor of the clicked div
        this.style.backgroundColor = newColor;
        // event.target.style.backgroundColor = newColor;
    }
    function insertId() {
        var id = this.id;
        this.innerText = id;
    }

    function removeId() {
        this.innerText = '';
    }

    function removeNeighbor() {
        var id = this.id;

        if (id % 2 === 0) {
            // if even, remove the square after
            if (this.nextSibling) {
                this.nextSibling.remove();
            } else {
                alert('There are no elements to the right to remove.');
            }
        } else {
            // if odd, remove the square before
            if (this.previousSibling) {
                this.previousSibling.remove();
            } else {
                alert('There are no elements to the left to remove.');
            }
        }
    }
    























});