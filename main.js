// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function () {
//         console.log('draw')
//     }
// }
// const circle2 = {
//     radius: 1,
//     location: {    ///this is hecticccc!!!
//         x: 2,
//         y: 2
//     },
//     isVisible: true,
//     draw: function () {
//         console.log('draw')
//     }
// }

///Factory functions produce objects
///Factory functions in modern javascript

function createCircle(radius) {
    const circle = {
        radius,
        draw() {
            console.log('draw')
        }

    }
    return circle
}

///instantiating kind of
const circle1 = createCircle(1)
const circle2 = createCircle(5)
const circle3 = createCircle(3)



console.log(circle1)
circle1.draw()