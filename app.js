class ToDoList {
   
    database;

    constructor() {
        this.database = {
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
        document.getElementById('form-insert').addEventListener('submit', this.insertItem.bind(this));
    }
    

    printItems() {
        const htmlListElements = this.database.items.map(
            (element) => {
                return `<li>${element.title}</li>`;
            }
        )
        const list = document.getElementById('to-dos');
        list.innerHTML = htmlListElements;
    }

    insertItem(event) {
        event.preventDefault();
        debugger;
        const newItem = {
            title: event.srcElement[0].value,
            done: false,
            date: this.getTodayDate()
        };
        this.database.items.push(newItem);
        this.printItems();
    }

    getTodayDate() {
        const todayDate = new Date();
        const day = todayDate.getDay();
        const month = todayDate.getMonth() +1;
        const year = todayDate.getFullYear();

        return `${day}/${month}/${year}`;
    }
}

const toDoList = new ToDoList();
toDoList.printItems();
