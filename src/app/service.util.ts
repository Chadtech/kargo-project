import { AdDay } from './types/ad-day';


const oneDay: number = 1000 * 60 * 60 * 24;


export function formatAdDays (adDays: AdDay[]): AdDay[] {
  return insertMissingDays((sortDays(adDays)));
}


function sortDays (adDays: AdDay[]): AdDay[] {
  return adDays.sort((a0, a1) => {
    const d0 = (new Date(a0.date)).getTime();
    const d1 = (new Date(a1.date)).getTime();

    return d0 - d1;
  })
}


function insertMissingDays (adDays: AdDay[]): AdDay[] {

  const outputAdDays: AdDay[] = [ adDays[0] ]


  function insertDay (referenceDay: AdDay, daysFrom: number): void {
    
    const newDate = new Date(referenceDay.date);

    newDate.setDate(newDate.getDate() + daysFrom);

    outputAdDays.push({
      id: referenceDay.id + daysFrom,
      date: newDate.toISOString().slice(0, 10),
      hits: 0
    });
  }


  var index = 1;
  while (index < adDays.length) {

    const first = adDays[ index - 1 ];
    const second = adDays[ index ];

    const firstMS = new Date(first.date).getTime();
    const secondMS = new Date(second.date).getTime();

    const difference = secondMS - firstMS;
  
    if (difference > oneDay) {
      var fillerIndex = 0;
      while ((difference / oneDay) > fillerIndex) {
        insertDay(first, fillerIndex);
        fillerIndex++;
      }
    }

    outputAdDays.push(second);
    index++;
  }

  return outputAdDays;
}




