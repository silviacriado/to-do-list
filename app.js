class ToDoList {
   
    database;

    constructor() {
        this.database = {
            "items": [
                {
                    "title": "hacer la compra", 
                    "done": true,
                    "date": "2020/12/08"
                },
                {
                    "title": "sacar al perro", 
                    "done": false,
                    "date": "2020/12/15"
                }
            ]
        };
        document.getElementById('form-insert').addEventListener('submit', this.insertItem.bind(this));
    }
    

    printItems() {
        const htmlListElements = this.database.items.map(
            (element) => {
                return `<li>${element.date} - ${element.title}</li>`;
            }
        )
        const list = document.getElementById('to-dos');
        list.innerHTML = htmlListElements.join('');
    }

    insertItem(event) {
        event.preventDefault();
        const newItem = {
            title: event.srcElement[0].value,
            done: false,
            date: this.getTodayDate()
        };
        const request = this.insertItemServer(newItem);

        request.then(
            (res) => {
                this.database.items.push(newItem);
                this.printItems();
            },
            (err) => {
                alert(err);
            }
        );
    }

    insertItemServer(newItem) {
        return new Promise((resolve, reject) => {
            const url = "http://localhost:8080/to-do-list/insert.php";
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify(newItem));

            xhr.onreadystatechange = (e) => {
                if (xhr.status === 200) {
                    resolve();
                } 
                else {
                    reject('Server error: please try again later. Sorry ;(');
                }
            }
        })
    }

    getTodayDate() {
        const todayDate = new Date();
        const day = todayDate.getDate();
        const month = todayDate.getMonth() +1;
        const year = todayDate.getFullYear();

        return `${year}-${month}-${day}`;
    }

}

const toDoList = new ToDoList();
toDoList.printItems();
