{
//Conditional Typs
type a1= number
type b1 = undefined 
type x = a1 extends null ? true : false //conditional type

type y = a1 extends null ? true : b1 extends  undefined? undefined: any;

type Sheikh = {
    bike: string,
    car: string,
    ship: string,
    plane: string,
}
//keyof sheikh "bike" | "car" | "ship"


//Does he have a car or bike or a ship or a tractor? 
type CheckVehicle<T> = T extends keyof Sheikh? true : false 

type HasBike = CheckVehicle<"car">
type HasShip = CheckVehicle<"truck">
type HasPlane = CheckVehicle<"plane">





}