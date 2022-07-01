$(document).ready(function() {
    $('#showWeek1').click(function() {
        $('#hideWeek1').animate( {
            width: 'toggle'
        })
        $('#hideWeek1').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center'
        })
    })
    $('#showWeek2').click(function() {
        $('#hideWeek2').animate( {
            width: 'toggle'
        })
        $('#hideWeek2').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center'
        })
    })
    $('#showWeek3').click(function() {
        $('#hideWeek3').animate( {
            width: 'toggle'
        })
        $('#hideWeek3').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center'
        })
    })
    $('#showWeek4').click(function() {
        $('#hideWeek4').animate( {
            width: 'toggle'
        })
        $('#hideWeek4').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center'
        })
        // $('#showWeek4').css({
        //     'background-color': 'pink'
        // })
    })
})