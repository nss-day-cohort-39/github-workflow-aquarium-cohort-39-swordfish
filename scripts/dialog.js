const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )
// Show Lucy's details when the button is clicked
    document.querySelector("#button--Lucy").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Lucy")
            theDialog.showModal()
        }
    )
    // Show Betty's details when the button is clicked
    document.querySelector("#button--betty").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--betty")
            theDialog.showModal()
        }
    )

    // Show Nemo's details when the button is clicked
    document.querySelector("#button--nemo").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--nemo")
            theDialog.showModal()
        }
    )

    // Show Dory's details when the button is clicked
    document.querySelector("#button--dory").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--dory")
            theDialog.showModal()
        }
    )
     // Show Jeff's details when the button is clicked
     document.querySelector("#button--jeff").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--jeff")
        }
     )
     // Show Keke's details when the button is clicked
     document.querySelector("#button--Keke").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Keke")
            theDialog.showModal()
        }
    )
}

export default initializeDetailButtonEvents