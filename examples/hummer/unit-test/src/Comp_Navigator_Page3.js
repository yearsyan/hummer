class RootView extends View {
    constructor() {
        super();

        this.style = {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        }

        let text = new Text();
        text.text = "Page 3";

        let btn1 = new Button();
        btn1.text = "go to root"
        btn1.style = {
            marginTop: 50,
        };
        btn1.addEventListener('tap', (event) => {
            // Navigator.popToPage({id: "222"});
            Navigator.popToRootPage();
        });

        let btn2 = new Button();
        btn2.text = "popPage"
        btn2.addEventListener('tap', (event) => {
            Navigator.popPage();
        });

        this.appendChild(text);
        this.appendChild(btn1);
        this.appendChild(btn2);

        console.log('Page info: ' + JSON.stringify(Hummer.pageInfo));

        Hummer.pageResult = {
            key1: 333.3,
            key2: "444"
        };
    }
}

Hummer.render(new RootView());