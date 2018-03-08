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


        if (getFirstTrainTime > currentTime) {
            alert("if")
            alert("if firstTrainTime: " + moment(getFirstTrainTime).format('H:mm'))
            getNextArrival = getFirstTrainTime
            getMinutesAway = moment(getNextArrival).diff(moment(currentTime))
            alert("getNextArrival: " + moment(getNextArrival, 'H:mm').format('H:mm'))
            alert("getMinutesAway: " + moment(getMinutesAway).format('H:mm'))
        }
        else {
            alert("else")
            
            getNextArrival = getFirstTrainTime
            
            while (getNextArrival < currentTime) {
                getNextArrival.add(getFrequency, 'm')
            }
            getMinutesAway = moment(getNextArrival).diff(moment(currentTime, 'H:mm'))
            alert("else firstTrainTime: " + moment(getFirstTrainTime).format('H:mm'))

        }

        $("#timeNow").html(moment().format('H:mm'))
        var dynamicRowAdd = "<tr><td>" + getTrainName + "</td><td>" + getDestination + "</td><td>" + moment(getFirstTrainTime).format('H:mm') + "</td><td>" + getFrequency + "</td><td>" + moment(getNextArrival).format("H:mm") + "</td><td>" + moment(getMinutesAway).format("mm") + "</td></tr>"
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



















