export function isValid(date: string): boolean {
  
  const correctLength : boolean = date.length === 10;

  if (!correctLength) {
    return false;
  }

  const dateParts: string[] = date.split('-');

  if (!(dateParts.length === 3)) {
    return false;
  }

  const allNumeric: boolean = dateParts.reduce(
    function(sum, part){
      return sum && (!isNaN(Number(part)))
    }, true)

  return allNumeric;

}

