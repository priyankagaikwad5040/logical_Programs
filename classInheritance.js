class ViewData{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    show(){
        console.log(`${this.name} is of ${this.id}`);
    }
    }

    let obj=new ViewData("Priyanka",62);
    obj.show();

    class Admin extends ViewData{
        constructor(name,id){
            super(name,id);

        }
        edit(){
            super.show();
            console.log(`new data available`);
        }
    }

let obj1=new Admin("Shweta",53);
obj1.edit();