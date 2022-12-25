import {Shape} from "./shape";

export class Rectangle extends Shape implements IArea{
    constructor(x: number, y: number, private _width: number, private _height: number) {
        super(x, y);
    }

    area(): number {
        return this._width*this._height;
    }

    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }

    set width(w:number) {
        this._width = w;
    }
    set height(h:number){
        this._height = h;
    }

}