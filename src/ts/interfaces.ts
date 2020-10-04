interface IDetails {
  readonly cost: number,
  readonly costOfSale: number,
  quantity: number,
  readonly need: number,
}
interface IFlags{
  biomechanism: Array<boolean>
  processor: Array<boolean>
  soul: Array<boolean>
}
interface IRoboType{
  stabilizer: string
  type: string
}
export {IDetails, IFlags, IRoboType};