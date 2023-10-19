function lockedProfile() {
    let profiles = document.getElementsByClassName("profile");

    profiles = Array.from(profiles);

    profiles.forEach(element => {
        let button = element.getElementsByTagName("button")[0];
        button.addEventListener("click", () => {
            const checkBoxes =Array.from(element.querySelectorAll('input[type="radio"]'));
            let lockedOrNot = null;
        for (const radioButton of checkBoxes) {
            if (radioButton.checked) {
                lockedOrNot = radioButton.value;
                break;
            }
        }
        
        const divHidden = Array.from(element.getElementsByTagName("div"))[0];
        if(lockedOrNot === "unlock" && button.textContent === "Hide it"){
            divHidden.style.display = "none";
            button.textContent = "Show more";
        }
        else if(lockedOrNot === "unlock"){
            divHidden.style.display = "block";
            button.textContent = "Hide it";
            
        }
        else if(lockedOrNot === "lock"){
            void(0);
        }
        })
    });
}