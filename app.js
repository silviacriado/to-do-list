class ToDoList {
    db = {
        "items": [
            {
                "title": "hacer la compra", 
                "done": true,
                "date": "19/12/2021"
            },
            {
                "title": "sacar al perro", 
                "done": false,
                "date": "21/12/2021"
            }
        ]
    };

    printItems() {
        const htmlListElements = this.db.items.map(
            (element) => {
                return `<li>${element.title}</li>`;
            }
        )
        const list = document.getElementById('to-dos');
        list.innerHTML = htmlListElements;
    }
}

const toDoList = new ToDoList();
toDoList.printItems();
