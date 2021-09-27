const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1984'
    }
}

user.getBirthdayDay = function() {
  
    const date = new Date();
    const month = date.getMonth() + 1;  //mam nadzieję, że o to chodziło bo bardzo mało stron znalazłem
    const day = date.getDate(); // wyjaśniających działanie obiektu Date. Chciałbym to jutro omówić :)

    // console.log(date);
    // console.log(month);
    // console.log(day);
    
    const userDay = parseInt(this['born']['day']);
    const userMonth = parseInt(this['born']['month'])
    // console.log(typeof userDay);
    // console.log(typeof userMonth);

    if (userDay === day && userMonth === month) {
        console.log("Today is the birthday of " + this['firstName'] + ' ' + this['lastName']);
    }
    else {
        console.log('Today is no birthdays');   
    }

}

user.getBirthdayDay();