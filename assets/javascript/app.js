// JavaScript function that wraps everything
$(document).ready(function () {


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
        getFrequency = snapshot.val().fbFrequency
        getNextArrival = snapshot.val().fbNextArrival
        getMinutesAway = snapshot.val().fbMinutesAway

        var dynamicRowAdd = "<tr><td>" + getTrainName + "</td><td>" + getDestination + "</td><td>" + getFrequency + "</td><td>" + getNextArrival + "</td><td>" + getMinutesAway + "</td></tr>"

        $("tbody").append(dynamicRowAdd)
    })

    //click function on submit button that gets user input, stores to Firebase    
    $("#submitBTN").on("click", function (event) {
        event.preventDefault()

        var trainName = $("#trainName").val().trim()
        var destination = $("#destination").val().trim()
        var frequency = $("#frequency").val().trim()
        var firstTrainTime = $("#firstTrainTime").val().trim()
        var nextArrival = ""  //calculated fields
        var minutesAway = ""  //calculated fields

        //clears input boxes
        $("#trainName").val("")
        $("#destination").val("")
        $("#frequency").val("")
        $("#firstTrainTime").val("")

        var currentTime = moment()
        var firstTrainTime = moment(firstTrainTime, 'H:mm')

        console.log("current: " + moment(currentTime).format('H:mm'))
        console.log("firstTrainTime: " + moment(firstTrainTime).format('H:mm'))


        if (firstTrainTime > currentTime) {
            nextArrival = firstTrainTime.format('H:mm')
            minutesAway = moment(firstTrainTime).diff(moment(currentTime, 'H:mm'))
        }
        else {
            while (firstTrainTime < currentTime) {
                firstTrainTime.add(frequency, 'm')
                nextArrival = firstTrainTime.format('H:mm')
            }
                minutesAway = moment(firstTrainTime).diff(moment(currentTime, 'H:mm'))
            
        }

        //push to Firebase
        DB.ref().push({
            fbTrainName: trainName,
            fbDestination: destination,
            fbFrequency: frequency,
            fbNextArrival: nextArrival,
            fbMinutesAway: moment(minutesAway).format('H:mm')
        })
    })
});  //close document.ready



















