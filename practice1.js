function convertTo24Hours(time){
    const [timeStr,period] = time.split(' ');
    const [hours,minutes] = timeStr.split(':');
    // const period = hours >= 12 ? 'PM' : 'AM'
    let  clock
    if(period === 'PM' ){
        clock =  hours === "12" ? hours : parseInt(hours) + 12  
    }
    else if(period === 'AM'){
        clock = hours === "12" ? "00" : hours;
    }
    // else if(period === 'AM' && hours == 12){
    //     clock =0
    // }
    var name =  `${clock.toString().padStart(2,"0")} : ${minutes} ${period}`
    console.log(name)
}

convertTo24Hours("1:01 PM")
