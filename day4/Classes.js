/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
function Polygon (sides) {

    this.perimeter = () => {
        peri = 0;
        for(let index = 0;index < sides.length;index++){
            peri += sides[index];
        }
        return peri;
    }
}
/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
function Polygon (sides) {

    this.perimeter = () => {
        peri = 0;
        for(let index = 0;index < sides.length;index++){
            peri += sides[index];
        }
        return peri;
    }
}
