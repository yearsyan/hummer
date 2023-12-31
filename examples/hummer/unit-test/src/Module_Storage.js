class RootView extends View {
    constructor() {
        super();

        this.style = {
            width: '100%',
            height: '100%',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
        }

        this.testStorage();
    }

    testStorage() {
        let titleView = new Text();
        titleView.text = 'Storage';
        titleView.style = {
            color: '#333333',
            fontSize: 16,
        };

        let layout = new View();
        layout.style = {
            padding: 10,
            borderWidth: 1,
            borderColor: '#22222222',
        };

        let subLayout1 = new View();
        subLayout1.style = {
            flexDirection: 'row',
        };

        let inputKey = new Input();
        inputKey.placeholder = '输入key';
        inputKey.style = {
            padding: 10,
            fontSize: 14,
        };

        let inputValue = new Input();
        inputValue.placeholder = '输入Value';
        inputValue.style = {
            padding: 10,
            fontSize: 14,
        };

        let subLayout2 = new View();
        subLayout2.style = {
            flexDirection: 'row',
        };

        this.infoMap = {};
        this.infoText = new Text();

        let btn1 = new Button();
        btn1.text = 'set';
        btn1.style = {
            width: 70,
            height: 40,
        };
        btn1.addEventListener('tap', (event) => {
            let key = inputKey.text;
            let value = inputValue.text;
            Storage.set(key, value);
            this.infoMap[key] = value;
            this.printInfo();
        });

        let btn2 = new Button();
        btn2.text = 'get';
        btn2.style = {
            width: 70,
            height: 40,
        };
        btn2.addEventListener('tap', (event) => {
            let key = inputKey.text;
            let value = Storage.get(key);
            console.log(key + ": " + value);
            inputValue.text = value;
            this.printInfo();
        });

        let btn3 = new Button();
        btn3.text = 'remove';
        btn3.style = {
            width: 70,
            height: 40,
        };
        btn3.addEventListener('tap', (event) => {
            let key = inputKey.text;
            Storage.remove(key);
            delete this.infoMap[key];
            this.printInfo();
        });

        let btn4 = new Button();
        btn4.text = 'exist';
        btn4.style = {
            width: 70,
            height: 40,
        };
        btn4.addEventListener('tap', (event) => {
            let key = inputKey.text;
            let isExist = Storage.exist(key);
            this.infoText.text = 'isExist: ' + isExist;
        });

        subLayout1.appendChild(inputKey);
        subLayout1.appendChild(inputValue);
        subLayout2.appendChild(btn1);
        subLayout2.appendChild(btn2);
        subLayout2.appendChild(btn3);
        subLayout2.appendChild(btn4);
        layout.appendChild(subLayout1);
        layout.appendChild(subLayout2);
        layout.appendChild(this.infoText);
        this.appendChild(titleView);
        this.appendChild(layout);
    }

    printInfo() {
        let info = '';
        for (var key in this.infoMap) {
            info += key + " = " + this.infoMap[key] + "\n";
        }
        this.infoText.text = info;
    }
}

Hummer.render(new RootView('rootid'));