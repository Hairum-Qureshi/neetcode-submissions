class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    arr:number[];
    capacity:number;
    size:number;

    constructor(capacity: number) {
        this.arr = new Array<number>(capacity);
        this.capacity = capacity;
        this.size = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if(this.size === this.capacity) this.resize();

        this.arr[this.size] = n;
        this.size += 1;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        this.size --;
        return this.arr[this.size];
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2;
        const resizedArr = new Array<number>(this.capacity);
        for(let i = 0; i < this.capacity; i++) {
            resizedArr[i] = this.arr[i];
        }
        this.arr = resizedArr;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}
