const container = document.querySelector(".grid");

const play = document.getElementsByTagName("button")[0];

play.addEventListener("click", function() {

    

        container.innerHTML = "";

        for (let i = 1; i <= 100; i++) {
    
            let field = document.createElement("div");
            field.classList.add("campofacile");
            container.appendChild(field);
    
            field.addEventListener("click", function() {
                this.classList.add("active");
                }
            )

            field.innerHTML = field.innerHTML + i;
        
        }
    
    } 



)
