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

    $("#submitBTN").on("click", function (event) {
        event.preventDefault()

        var trainName = $("#trainName").val().trim()
        var destination = $("#destination").val().trim()
        var frequency = $("#frequency").val().trim()
        var firstTrainTime = $("#firstTrainTime").val().trim()
        var nextArrival = ""
        var minutesAway = ""

        $("#trainName").val("")
        $("#destination").val("")
        $("#frequency").val("")
        $("#firstTrainTime").val("")

        var currentTime = moment()
        var firstTrainTime = moment(firstTrainTime, "H:mm")

        // console.log("firstTrainTime: ", firstTrainTime.format('H:mm'))
        // console.log("Plus "+ frequency +" mins = "  + firstTrainTime.add(frequency, 'm').format('H:mm'))
        // console.log("current Time: " + currentTime.format('H:mm'))
        // console.log("Plus 1 hr 30 min: " + currentTime.add(1, 'h').add(30, 'm').format('H:mm'))

        if (firstTrainTime > currentTime) {
            nextArrival = "No more trains today"
            minutesAway = "No more trains today"
        }
        else {
            while (firstTrainTime < currentTime) {
                firstTrainTime.add(frequency, 'm')
                nextArrival = firstTrainTime.format('H:mm')
            }
            minutesAway = moment(firstTrainTime).diff(moment(currentTime, 'H:mm'))
        }

        DB.ref().set({
            fbTrainName: trainName,
            fbDestination: destination,
            fbFrequency: frequency,
            fbNextArrival: nextArrival,
            fbMinutesAway: moment(minutesAway).format('mm')
        })

        DB.ref().on("value", function (snapshot) {
            var getTrainName = snapshot.val().fbTrainName
            var getDestination = snapshot.val().fbDestination
            var getFrequency = snapshot.val().fbFrequency
            var getNextArrival = snapshot.val().fbNextArrival
            var getMinutesAway = snapshot.val().fbMinutesAway

            var dynamicRowAdd = "<tr><td>" + getTrainName + "</td><td>" + getDestination + "</td><td>" + getFrequency + "</td><td>" + getNextArrival + "</td><td>" + getMinutesAway + "</td></tr>"

            $("table tbody").append(dynamicRowAdd)
        })
    })
});  //close document.ready



















