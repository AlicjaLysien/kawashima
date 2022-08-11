export class Calculation {
    constructor(
        readonly numberOne: number,
        readonly numberTwo: number,
        readonly operation: string,
    ) {
        const checkResult = (result: number): boolean => {
            let trueResult: number
            switch(this.operation) {
                case 'add':
                    trueResult = this.numberOne + this.numberTwo
                  break;
                case 'minus':
                    trueResult = this.numberOne - this.numberTwo
                  break;
                case 'multi':
                    trueResult = this.numberOne * this.numberTwo
                break;
                default:
                  // code block
              }
            trueResult = this.numberOne + this.numberTwo
        return result === trueResult ? true : false
        }

    }
    

}