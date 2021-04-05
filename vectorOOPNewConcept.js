class Vector{

    #i = 0;
    #j = 0;
    #k = 0;
    constructor(i, j, k){
        this.#i = i;
        this.#j = j;
        this.#k = k;
    }

    add(b){
        let c = new Vector();
        c.i = this.#i + b.#i;
        c.j = this.#j + b.#j;
        c.k = this.#k + b.#k;
        return c; 
    }

    toString(){
        return c.i + " " + c.j + " " + c.k;
        // return "(" + c.i +", "+ c.j + ", " + c.k +")";
    }
}

a = new Vector(4, 2, 1);
b = new Vector(1, 3, 1);
c = a.add(b);
console.log(c+ " ");