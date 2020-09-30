interface IDetails {
  readonly cost: number,
  readonly costOfSale: number,
  quantity: number,
  readonly need: number,
}
interface IFlags{
  biomechanism: Array<Boolean>
  processor: Array<Boolean>
  soul: Array<Boolean>
}

export {IDetails, IFlags};