let istatus = document.querySelector("h5");

let addFriends = document.querySelector("#add");

let check = 0;

addFriends.addEventListener("click", function(){
    if (check == 0){
        addFriends.textContent = "Remove";
        addFriends.style.color = "#111";
        addFriends.style.backgroundColor = "#dadada";
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        check = 1;
    }else{
        addFriends.textContent = "Add Freinds!";
        addFriends.style.color = "#fff";
        addFriends.style.backgroundColor = "cadetblue";
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        check = 0;
    }
})