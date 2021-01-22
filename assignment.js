//1. kilometerToMeter
function kilometerToMeter(kil){
    var meter = kil*1000;
    return meter;
}



//2. budgetCalculator
    function budgetCalculator(watch, phone, laptop){
        var totalCost = (watch * 50) + (phone * 100) + (laptop * 500);
        return totalCost;
    }


//3. hotelCost (1st 10 days 100tk, 2nd 10 days 80tk, remaining days 50tk)

    function hotelCost(day){
        var cost = 0;
        if(day <= 10){
        cost = day * 100;
    }
    else if(day <= 20) {
        var firstTenDay = 10 * 100;
        var remainingDay = day - 10;
        var secondTenDay = remainingDay * 80;
        cost = firstTenDay + secondTenDay;
    }
    else{
        var firstTenDay = 10 * 100;
        var secondTenDay = 10 * 80;
        var remainingDay = day - 20;
        var unlimitedDays = remainingDay * 50;
        cost = firstTenDay + secondTenDay + unlimitedDays;
    }   
        return cost;
    }

    
//4. megaFriend
    function megaFriend(names){
    var result = ' ';
    for (i = 0; i < names.length; i++){
      if (result.length < names[i].length){
        result = names[i];
      }
    }
        return result;
    }