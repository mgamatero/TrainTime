// JavaScript function that wraps everything
$(document).ready(function () {

    $("#timeNow").html(moment().format('H:mm'))
    var config = {
        apiKey: "AIzaSyCres6p22Ba-jYtF1zbLhnhWpyPGedLVUo",
        authDomain: "trains-2c6c0.firebaseapp.com",
        databaseURL: "https://trains-2c6c0.firebaseio.com",
        projectId: "trains-2c6c0",
        storageBucket: "trains-2c6c0.appspot.com",
        messagingSenderId: "447028009526"
    }
    firebase.initializeApp(config)

    var DB = firebase.database()

    //populates table onload - also reruns after click event below
    DB.ref().on('child_added', function (snapshot) {
        getTrainName = snapshot.val().fbTrainName
        getDestination = snapshot.val().fbDestination
        getFirstTrainTime = snapshot.val().fbFirstTrainTime
        getFrequency = snapshot.val().fbFrequency
        var getNextArrival  //calculated fields
        var getMinutesAway  //calculated fields

        var currentTime = moment()
        getFirstTrainTime = moment(getFirstTrainTime, 'H:mm')

        // alert("current: " + moment(currentTime).format('H:mm'))
        alert("firstTrainTime: " + moment(getFirstTrainTime).format('H:mm'))


        //if the First Train time is past the current time, set next available train to First Train time
        if (getFirstTrainTime > currentTime) {
            getNextArrival = getFirstTrainTime
            getMinutesAway = moment(getNextArrival).diff(moment(currentTime))
        }
        //else if First train time is less than current time, run these
        else {
            getNextArrival = getFirstTrainTime
            //add frequency to the next Arrival time until it is greater than current time.  last result is the next arrival        
            while (getNextArrival < currentTime) {
                getNextArrival.add(getFrequency, 'm')
            }
            getMinutesAway = moment(getNextArrival).diff(moment(currentTime, 'H:mm'))
        }

        //update time in html
        $("#timeNow").html(moment().format('H:mm'))

        //update values on html table
        var dynamicRowAdd = "<tr><td>" + getTrainName + "</td><td>" + getDestination + "</td><td>" + getFrequency + "</td><td>" + moment(getNextArrival).format("H:mm") + "</td><td>" + moment(getMinutesAway).format("mm") + "</td></tr>"
        $("tbody").append(dynamicRowAdd)

    })

    //click function on submit button that gets user input, stores to Firebase    
    $("#submitBTN").on("click", function (event) {
        event.preventDefault()

        var trainName = $("#trainName").val().trim()
        var destination = $("#destination").val().trim()
        var frequency = $("#frequency").val().trim()
        var firstTrainTime = $("#firstTrainTime").val().trim()

        //clears input boxes
        $("#trainName").val("")
        $("#destination").val("")
        $("#frequency").val("")
        $("#firstTrainTime").val("")

        //push to Firebase
        DB.ref().push({
            fbTrainName: trainName,
            fbDestination: destination,
            fbFrequency: frequency,
            fbFirstTrainTime: firstTrainTime
        })
    })
});  //close document.ready



















