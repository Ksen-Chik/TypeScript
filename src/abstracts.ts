export abstract class MyGraphicsPrimitive2D {
    x0!: number
    x1!: number
    y0!: number
    y1!: number

    getMoove(dx: number, dy: number) {
        this.x0 += dx;
        this.x1 += dx;
        this.y0 += dy;
        this.y1 += dy;
    }
}
export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
    square: number = this.getSquare()

    public abstract getSquare(): number
}
export class MyCircle extends MyAreaPrimitive2D {
    radius: number
    centerx: number
    centery: number

    constructor(
        radius: number,
        centerx: number,
        centery: number,
    ) {
        super();

        this.radius = radius;
        this.centerx = centerx;
        this.centery = centery;

        this.x0 = centerx - radius;
        this.x1 = centerx + radius;
        this.y0 = centery - radius;
        this.y1 = centery + radius;
    }

    getSquare() {
        return 3.1428 * this.radius * this.radius;
    }
}

export abstract class MyRectangle extends MyAreaPrimitive2D {
    width: number
    height: number
    leftX: number
    bottomY: number
    constructor(
        width: number,
        height: number,
        leftX: number,
        bottomY: number
    ) {
        super();

        this.width = width;
        this.height = height;
        this.leftX = leftX;
        this.bottomY = bottomY;

        this.x0 = leftX;
        this.x1 = leftX + width;
        this.y0 = bottomY - height;
        this.y1 = bottomY;
    }
    getSquare() {
        return this.width * this.height;
    }
}