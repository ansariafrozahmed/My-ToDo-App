const addbtn = document.getElementById('btn')
const dummy = document.getElementById('dummy')
const input = document.getElementById('inpt')
const textbox = document.getElementById('textbox')
const mylist = document.getElementById('mylist')

function addlist() {
    if(input.value == "") {
        alert("please Add Some task")
    }
    else {
        dummy.remove()
        const newp = document.createElement('p')
        newp.innerHTML = `${input.value} <i class="fa-solid fa-trash-can"></i>`
        textbox.appendChild(newp)
        input.value= ""
        mylist.style.display= "block"
        newp.querySelector('i').addEventListener('click', removelist)
        function removelist() {
            newp.remove()
        }
    }
}