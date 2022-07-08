(function() {

    /*I didn't consider some of the organizing and naming principles because it was just a challenge, to see if I could make this game*/

    function keyDownHandler(e)
    {
        const key = e.key;
        const code = e.keyCode;

        if (code === 37) {
            player1()
        }

        if (code === 39) {
            player2()
        } 
    }

    $('body').on('keydown', keyDownHandler);

    var p1 = 1
    var p2 = 1

    var p1Pontos = 0
    var p2Pontos = 0

    function player1()
    {
        p1++;
        p2--

        $('.player-1-points').html(p1)
        $('.player-2-points').html(p2)

        var largura = window.innerWidth;

        if($('.player-1').width() >= largura)
        {
            console.log('Player 1 venceu');
            
        }else
        {
            $('.player-1').width(100+p1+'%');
            $('.player-2').width(100-p1+'%');
        }


        if(p1 === 100)
        {
            p1Pontos++

            $('.winner').css('display', 'flex')
            $('.winner #winner').html('Jogador 1')

            $('#p1').html(p1Pontos)

            $('body').off('keydown', keyDownHandler);
        }
    }

    function player2()
    {
        p2++;
        p1--

        $('.player-1-points').html(p1)
        $('.player-2-points').html(p2)

        var largura = window.innerWidth;

        if($('.player-2').width() >= largura)
        {
            console.log('Player 2 venceu');

        }else
        {
            $('.player-2').width(100 + p2 + '%');
            $('.player-1').width(100 - p2 + '%');
        }

        if(p2 === 100)
        {
            p2Pontos++

            $('.winner').css('display', 'flex')
            $('.winner #winner').html('Jogador 2')

            $('#p2').html(p2Pontos)

            $('body').off('keydown', keyDownHandler);
        }
    }

    $('#resetgame').click(function (e) { 
        e.preventDefault();
        resetGame()
    });

    function resetGame()
    {
        p1 = 1
        p2 = 1

        p1Pontos = 0
        p2Pontos = 0

        $('.player-2').width(50 + '%');
        $('.player-1').width(50 + '%');

        $('.player-1-points').html(0)
        $('.player-2-points').html(0)

        $('.winner').css('display', 'none')

        $('#p1').html(0)
        $('#p2').html(0)

        $('body').on('keydown', keyDownHandler);
    }

    $('#newgame').click(function (e) { 
        e.preventDefault();
        newGame()
    });

    function newGame()
    {
        p1 = 1
        p2 = 1

        $('.player-2').width(50 + '%');
        $('.player-1').width(50 + '%');

        $('.player-1-points').html(0)
        $('.player-2-points').html(0)

        $('.winner').css('display', 'none')

        $('body').on('keydown', keyDownHandler);

    }

    $('#resize').click(function (e) { 
        e.preventDefault();
        resize()
    });


    var toggle = 0

    function resize(){
        if(toggle == 0){
            $('.container').width('600px');
            $('.container').height('600px');
            $('.container').css('border-radius', '20px');
            $('.container').css('overflow', 'hidden');
            $('.container').css('margin', '15px auto');
            return toggle = 1
        }else{
            $('.container').width('100%');
            $('.container').height('100vh');
            $('.container').css('border-radius', '0px');
            $('.container').css('overflow', 'auto');
            $('.container').css('margin', '0');
            return toggle = 0
        }
    }


    //Mouse click event to move the div element left and right

    /*$('.player-1').click(function (e) {
        e.preventDefault();
        player1()
    });

    $('.player-2').click(function (e) { 
        e.preventDefault();
        player2()
    });*/

})();