/**
 * Function check if the current time is within the
 * configured limit respect to previous time
 *
 * @param  {number} previousTimeInSec
 * @param  {number} limitInSec
 */
export const isWithinCurrentTimeLimit = (previousTimeInSec: number, limitInSec: number): boolean =>
  Math.round(new Date().getTime() / 1000) - previousTimeInSec <= limitInSec;


type LooseObject = {
    [key: string]: any
}

/**
 * Function will filter data list which match searchParam list to the text.
 *
 * @param  {LooseObject[]} data
 * @param  {string} searchParam
 * @param  {string[]} text
 */
export const searchFilter = (data: LooseObject[], searchParam: string[], text: string): LooseObject[] => {

   return data.filter((item: LooseObject) => {
    return searchParam.some((searchProp : string)=>{
      return item[searchProp].toString().toLowerCase().indexOf(text.toLowerCase()) > -1
    })
  })

};