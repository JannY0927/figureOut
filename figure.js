let gamearea;
let start;
let locationOfShape;
let levelSpace;
let levelArea;
let shape1x1Square,shape1x1Square1,shape1x1Square2,shape1x1Square3,shape1x1Square4;
let shape1x2Square,shape1x2Square1,shape1x2Square2,shape1x2Square3,shape1x2Square4;
let shape2x1Square,shape2x1Square1,shape2x1Square2,shape2x1Square3,shape2x1Square4;
let shape2x2Square,shape2x2Square1;
let levelBoard;
let IsdragObject = false;
let actLevel ;
let DragObj;

$(document).ready(function () {


    start = $('#start');
    levelArea  = $('#game1');
    levelBoard  = $('#game1');
    levelSpace  = $('#game1');
    locationOfShape = $('#game2');
    gamearea = $('#div2');


    init();

    shape1x1Square  = $('<img src="1x1square.jpg" id="shape1x1Square">');
    shape1x1Square1 = $('<img src="1x1square.jpg" id="shape1x1Square">');
    shape1x1Square2 = $('<img src="1x1square.jpg" id="shape1x1Square">');
    shape1x1Square3 = $('<img src="1x1square.jpg" id="shape1x1Square">');
    shape1x1Square4 = $('<img src="1x1square.jpg" id="shape1x1Square">');
    shape1x2Square = $('<img src="1x2square.jpg" id="shape1x2Square">');
    shape1x2Square1 = $('<img src="1x2square.jpg" id="shape1x2Square">');
    shape1x2Square2 = $('<img src="1x2square.jpg" id="shape1x2Square">');
    shape1x2Square3 = $('<img src="1x2square.jpg" id="shape1x2Square">');
    shape1x2Square4 = $('<img src="1x2square.jpg" id="shape1x2Square">');
    shape2x1Square = $('<img src="2x1square.jpg" id="shape2x1Square">');
    shape2x1Square1 = $('<img src="2x1square.jpg" id="shape2x1Square">');
    shape2x1Square2 = $('<img src="2x1square.jpg" id="shape2x1Square">');
    shape2x1Square3 = $('<img src="2x1square.jpg" id="shape2x1Square">');
    shape2x1Square4 = $('<img src="2x1square.jpg" id="shape2x1Square">');
    shape2x2Square = $('<img src="2x2square.jpg" id="shape2x2Square">');
    shape2x2Square1 = $('<img src="2x2square.jpg" id="shape2x2Square">');


    locationOfShape.on('mousemove', mousemove);
    levelArea.on('mousemove', mousemove);
    locationOfShape.on('mousedown', mousedown);



    /*c.addEventListener('mousemove', mouseMove,false);
    c.addEventListener('mousedown', objmove);
    c.addEventListener('mouseup', objLet);
*/
});


function init() {

    $("#start").on("click", function (e) {
        e.preventDefault();
        actLevel = 1;
        actScore = 0;
        $('#ScoreValue').text(parseInt(actScore));
        levelDraw(actLevel);
    });

}


function levelDraw(level) {
    console.log('l2'+level);
    $("#start").hide();
    $(".toplisttitle").remove();
    $("#rankTable").remove();
    $(".endLevel").remove();
    $(".levelboard").remove();
    $(".level").remove();
    $(".Square").remove();
    if (level == 1) {
            level1();
        }
    else if (level == 2) {
            console.log('level2'+level);
            level2();
        }
    else if (level == 3) {
        console.log('level3'+level);
        level3();
    }
    else if (level == 4) {
        console.log('level5'+level);
        level4();
    }
    else if (level == 5) {
        console.log('level5'+level);
        level5();
    }
    else if (level == 6) {
        console.log('level5'+level);
        fillToplist();
    }

}

function level1() {
    let level1board = $('<div></div>');
    level1board.css({
        left: 168,
        top: 34,
        borderStyle: 'solid',
        width: 80,
        height: 300,
        position: 'absolute'
    });
    level1board.addClass('levelboard');
    levelSpace.append(level1board);
    levelBoard = level1board;


    let level1area = $('<div></div>');
    level1area.css({
        left: 176,
        top: 43,
        borderStyle: 'dotted',
        background: 'white',
        width: 62,
        height: 62,
        position: 'absolute'
    });
    level1area.addClass('level');
    levelSpace.append(level1area);
    levelArea = level1area;


    shape2x2Square.css({
        left: 50,
        top: 50,
        position: 'absolute'
    });
    shape2x2Square.addClass('Square');

    /* shape1x1Square.css({
         left: 50,
         top: 150,
         position: 'absolute'
     });*/
    shape2x2Square.addClass('Square');
    shape2x2Square.attr('id', 'shape2x2Square');
    locationOfShape.append(shape2x2Square);
    actLevel = 1;
}

function level2() {
    let levelboard = $('<div></div>');
    levelboard.css({
        left: 168,
        top: 34,
        borderStyle: 'solid',
        width: 80,
        height: 300,
        position: 'absolute'
    });
    levelboard.addClass('levelboard');
    levelSpace.append(levelboard);
    levelBoard = levelboard;


    let lvlarea = $('<div></div>');
    lvlarea.css({
        left: 176,
        top: 43,
        borderStyle: 'dotted',
        background: 'white',
        width: 62,
        height: 92,
        position: 'absolute'
    });
    lvlarea.addClass('level');
    levelSpace.append(lvlarea);
    levelArea = lvlarea;


    shape2x2Square.css({
        left: 50,
        top: 50,
        position: 'absolute'
    });
    shape2x2Square.addClass('Square');

    shape1x2Square.css({
         left: 50,
         top: 150,
         position: 'absolute'
     });
    shape2x2Square.addClass('Square');
    locationOfShape.append(shape2x2Square);
    shape1x2Square.addClass('Square');
    shape1x2Square.attr('id', 'shape1x2Square');
    locationOfShape.append(shape1x2Square);
    actLevel = 2;
}

function level3() {
    let levelboard = $('<div></div>');
    levelboard.css({
        left: 168,
        top: 34,
        borderStyle: 'solid',
        width: 110,
        height: 300,
        position: 'absolute'
    });
    levelboard.addClass('levelboard');
    levelSpace.append(levelboard);
    levelBoard = levelboard;


    let lvlarea = $('<div></div>');
    lvlarea.css({
        left: 176,
        top: 43,
        borderStyle: 'dotted',
        background: 'white',
        width: 96,
        height: 92,
        position: 'absolute'
    });
    lvlarea.addClass('level');
    levelSpace.append(lvlarea);
    levelArea = lvlarea;


    shape2x2Square.css({
        left: 50,
        top: 50,
        position: 'absolute'
    });
    shape2x2Square.addClass('Square');

    shape1x2Square.css({
        left: 50,
        top: 150,
        position: 'absolute'
    });

    shape2x1Square.css({
        left: 150,
        top: 50,
        position: 'absolute'
    });

    shape1x1Square.css({
        left: 150,
        top: 150,
        position: 'absolute'
    });

    shape2x2Square.addClass('Square');
    locationOfShape.append(shape2x2Square);
    shape2x2Square.attr('id', 'shape2x2Square');
    shape1x2Square.addClass('Square');
    shape1x2Square.attr('id', 'shape1x2Square');
    locationOfShape.append(shape1x2Square);
    shape2x1Square.addClass('Square');
    shape2x1Square.attr('id', 'shape2x1Square');
    locationOfShape.append(shape2x1Square);
    shape1x1Square.addClass('Square');
    shape1x1Square.attr('id', 'shape1x1Square');
    locationOfShape.append(shape1x1Square);
    actLevel = 3;
}

function level4() {
    let levelboard = $('<div></div>');
    levelboard.css({
        left: 168,
        top: 34,
        borderStyle: 'solid',
        width: 110,
        height: 300,
        position: 'absolute'
    });
    levelboard.addClass('levelboard');
    levelSpace.append(levelboard);
    levelBoard = levelboard;


    let lvlarea = $('<div></div>');
    lvlarea.css({
        left: 176,
        top: 43,
        borderStyle: 'dotted',
        background: 'white',
        width: 96,
        height: 122,
        position: 'absolute'
    });
    lvlarea.addClass('level');
    levelSpace.append(lvlarea);
    levelArea = lvlarea;

    shape1x2Square.addClass('Square');
    shape1x2Square.attr('id', 'shape1x2Square');
    shape1x2Square.css({
        left: 30,
        top: 30,
        position: 'absolute'
    });
    locationOfShape.append(shape1x2Square);

    shape1x2Square1.addClass('Square');
    shape1x2Square1.attr('id', 'shape1x2Square1');
    shape1x2Square1.css({
        left: 100,
        top: 30,
        position: 'absolute'
    });
    locationOfShape.append(shape1x2Square1);

    shape2x1Square.addClass('Square');
    shape2x1Square.attr('id', 'shape2x1Square');
    shape2x1Square.css({
        left: 170,
        top: 30,
        position: 'absolute'
    });
    locationOfShape.append(shape2x1Square);

    shape2x1Square1.addClass('Square');
    shape2x1Square1.attr('id', 'shape2x1Square1');
    shape2x1Square1.css({
        left: 250,
        top: 30,
        position: 'absolute'
    });
    locationOfShape.append(shape2x1Square1);

    shape2x1Square2.addClass('Square');
    shape2x1Square2.attr('id', 'shape2x1Square2');
    shape2x1Square2.css({
        left: 30,
        top: 100,
        position: 'absolute'
    });
    locationOfShape.append(shape2x1Square2);

    shape1x1Square.addClass('Square');
    shape1x1Square.attr('id', 'shape1x1Square');
    shape1x1Square.css({
        left: 100,
        top: 100,
        position: 'absolute'
    });
    locationOfShape.append(shape1x1Square);


    shape1x1Square1.addClass('Square');
    shape1x1Square1.attr('id', 'shape1x1Square1');
    shape1x1Square1.css({
        left: 170,
        top: 100,
        position: 'absolute'
    });
    locationOfShape.append(shape1x1Square1);
    actLevel = 4;
}

function level5() {
    let levelboard = $('<div></div>');
    levelboard.css({
        left: 105,
        top: 34,
        borderStyle: 'solid',
        width: 172,
        height: 253,
        position: 'absolute'
    });
    levelboard.addClass('levelboard');
    levelSpace.append(levelboard);
    levelBoard = levelboard;


    let lvlarea = $('<div></div>');
    lvlarea.css({
        left: 113,
        top: 43,
        borderStyle: 'dotted',
        background: 'white',
        width: 160,
        height: 124,
        position: 'absolute'
    });
    lvlarea.addClass('level');
    levelSpace.append(lvlarea);
    levelArea = lvlarea;

    shape1x2Square.addClass('Square');
    shape1x2Square.attr('id', 'shape1x2Square');
    shape1x2Square.css({
        left: 30,
        top: 50,
        position: 'absolute'
    });
    locationOfShape.append(shape1x2Square);

    shape1x2Square1.addClass('Square');
    shape1x2Square1.attr('id', 'shape1x2Square1');
    shape1x2Square1.css({
        left: 100,
        top: 50,
        position: 'absolute'
    });
    locationOfShape.append(shape1x2Square1);

    shape2x1Square.addClass('Square');
    shape2x1Square.attr('id', 'shape2x1Square');
    shape2x1Square.css({
        left: 170,
        top: 50,
        position: 'absolute'
    });
    locationOfShape.append(shape2x1Square);

    shape2x1Square1.addClass('Square');
    shape2x1Square1.attr('id', 'shape2x1Square1');
    shape2x1Square1.css({
        left: 230,
        top: 50,
        position: 'absolute'
    });
    locationOfShape.append(shape2x1Square1);

    shape2x1Square2.addClass('Square');
    shape2x1Square2.attr('id', 'shape2x1Square2');
    shape2x1Square2.css({
        left: 50,
        top: 150,
        position: 'absolute'
    });
    locationOfShape.append(shape2x1Square2);

    shape1x1Square.addClass('Square');
    shape1x1Square.attr('id', 'shape1x1Square');
    shape1x1Square.css({
        left: 100,
        top: 150,
        position: 'absolute'
    });
    locationOfShape.append(shape1x1Square);

    shape1x1Square1.addClass('Square');
    shape1x1Square1.attr('id', 'shape1x1Square1');
    shape1x1Square1.css({
        left: 170,
        top: 150,
        position: 'absolute'
    });
    locationOfShape.append(shape1x1Square1);

    shape2x2Square.addClass('Square');
    shape2x2Square.attr('id', 'shape2x2Square');
    shape2x2Square.css({
        left: 240,
        top: 150,
        position: 'absolute'
    });
    locationOfShape.append(shape2x2Square);

    shape2x2Square1.addClass('Square');
    shape2x2Square1.attr('id', 'shape2x2Square1');
    shape2x2Square1.css({
        left: 280,
        top: 50,
        position: 'absolute'
    });
    locationOfShape.append(shape2x2Square1);
    actLevel = 5;
}


function mousemove(event) {

    if (IsdragObject) {
        let locShapePos = locationOfShape.offset();
        let levelposition = levelBoard.offset();
        let mouse_pos_x_shapeArea = Math.ceil(event.clientX - locShapePos.left - DragObj.width() / 2);
        let mouse_pos_y_shapeArea = Math.ceil(event.clientY - locShapePos.top - DragObj.height() / 2);
        let mouse_pos_x_levelArea = Math.ceil(event.clientX - levelposition.left - DragObj.width() / 2);
        let mouse_pos_y_levelArea = Math.ceil(event.clientY - levelposition.top - DragObj.height() / 2);
        let corrNu = 3;
        let corrNu2 = 5;
        let isCrash = false;

        if ((mouse_pos_x_shapeArea + corrNu > 0 && mouse_pos_x_shapeArea - corrNu < locationOfShape.width() - DragObj.width() && mouse_pos_y_shapeArea + corrNu > 0 && mouse_pos_y_shapeArea - corrNu < locationOfShape.height() - DragObj.height()) ||
            (mouse_pos_x_levelArea + corrNu2 > 0 && mouse_pos_x_levelArea - corrNu2 < levelBoard.width() - DragObj.width() && mouse_pos_y_levelArea + corrNu2 > 0 && mouse_pos_y_levelArea - corrNu2 < levelBoard.height())){
             if (IsdragObject) {
                 $('.Square').each(function () {
                    // console.log('DragObj.id: '+DragObj.attr('id') );
                    // console.log('$(this).id: '+$(this).attr('id') );
                     if ($(this).attr('id')  != DragObj.attr('id') ) {
                    //     console.log('egyik adat left' + DragObj.offset().left + 'top' + DragObj.offset().top);
                    //     console.log('egyik adat2 left' + DragObj.width() + 'top' + DragObj.height());
                    //     console.log('Másik adat left' + $(this).offset().left + 'top' + $(this).offset().top);
                    //     console.log('Másik adat2 left' + $(this).width() + 'top' + $(this).height());
                          if (DragObj.offset().left + DragObj.width() > $(this).offset().left && DragObj.offset().left < $(this).offset().left+ $(this).width()
                           && DragObj.offset().top + DragObj.height() > $(this).offset().top  && DragObj.offset().top < $(this).offset().top+ $(this).height()){
                              isCrash = true;
                              console.log('crash');
                              IsdragObject = false;
                          }
                     }
                 });

             }
         //   console.log(DragObj)
            DragObj.css({
                left: mouse_pos_x_shapeArea,
                top: mouse_pos_y_shapeArea,
                position: 'absolute'
            });

            if (isCrash) {
                levelDraw(actLevel);
            }
        } else {
            IsdragObject = false;
            levelDraw(actLevel);
        }
    }
}



function mousedown(evMd) {
    if (IsdragObject) {
        IsdragObject = false;
        endLevel();
    } else {
        console.log(evMd.clientX, evMd.clientY);
        $('.Square').each(function () {
            console.log('This ', $(this).offset().left, $(this).offset().top);
            console.log('evmd ', evMd.clientX, evMd.clientY);
            console.log('Thisdata ', $(this).width(), $(this).height());

            if (evMd.clientX > $(this).offset().left && evMd.clientX < $(this).offset().left + $(this).width() &&
                evMd.clientY > $(this).offset().top && evMd.clientY < $(this).offset().top + $(this).height()) {
                console.log('Yeeee');
                IsdragObject = true;
                console.log('Átadandó');
                console.log($(this))
                DragObj = $(this);
            }
        });
    }
}

function endLevel() {
    let squares = new Map;
    let isEnd = true;

    $('.Square').each(function () {
        squares.set($(this).attr('id'),false);
        console.log('Mikor fut le és hányszor' + isEnd);
        console.log($(this).attr('id'));
        console.log('If1 ' , $(this).offset().left ,' ' , levelArea.offset().left , ' ' , $(this).offset().left > levelArea.offset().left);
        console.log('If2 ' , $(this).offset().left+$(this).width() ,' ' , levelArea.offset().left + levelArea.width() , ' ' , $(this).offset().left+$(this).width() < levelArea.offset().left + levelArea.width()+10);
        console.log('If22 ' , $(this).offset().left ,' ' , levelArea.offset().left  , ' ' , $(this).offset().left+$(this).width() < levelArea.offset().left + levelArea.width()+10);
        console.log('If23 ' ,$(this).width() ,' ' ,levelArea.width() , ' ' , $(this).offset().left+$(this).width() < levelArea.offset().left + levelArea.width()+10);

        //If22  494.63067626953125   490.6249694824219   false

        //  console.log('Area ', levelArea.offset().left, levelArea.offset().top);
        console.log()
        if (($(this).offset().left > levelArea.offset().left && $(this).offset().left+$(this).width() < levelArea.offset().left + levelArea.width()+10) &&
            ($(this).offset().top > levelArea.offset().top && $(this).offset().top+$(this).height() < levelArea.offset().top + + levelArea.height())+10) {
            squares.set($(this).attr('id'),true);
        }
        console.log('Ittvége0?' + isEnd);
    });
    for (let [key, value] of squares) {
        console.log('key', key , 'value ', value  );
        if (!value) {
            isEnd = false;
        }
    }

    if (isEnd) {
        modifyScore(actLevel);
        drawEndLevel(actLevel);
        //  levelDraw(levelNr+1);
    }
}

function modifyScore(levelNr) {
    actScore = $('#ScoreValue').text();
    $('#ScoreValue').text(parseInt(actScore) + parseInt(levelNr));
}

function drawEndLevel(levelNr) {

    let endLevel = $('<div>' + '<p id="endlevelP">Level Comleted</p>' +
        '<button id="nextbutton"><label class="next">Next Level</label></button>' +
        '<button id="endbutton"><label class="end">End Game</label></button>' +
        '</div>');
    endLevel.addClass('endLevel');
    $(".levelboard").remove();
    $(".level").remove();
    $(".Square").remove();
    gamearea.append(endLevel);
    endLevel.css({
        left: 100,
        top: 165,
        width: 300,
        height: 200,
        borderStyle: 'solid',
        position: 'relative',
        borderRadius: 50
    });
    $("#endbutton").on("click", function (e) {
        e.preventDefault();
        fillToplist();
    });
    $("#nextbutton").on("click", function (e) {
        e.preventDefault();
        levelDraw(levelNr + 1);
    });
}


function fillToplist() {
    var player = prompt("Játékos neve", "Nincs");
    localStorage.setItem(player, $('#ScoreValue').text());
    $(".endLevel").remove();
    var data = [];
    for (var i = 0; i < localStorage.length; i++) {
        data[i] = [localStorage.key(i), parseInt(localStorage.getItem(localStorage.key(i)))];
    }
    data.sort(function (a, b) {
        return b[1] - a[1];
    });
    let htmlCode = '<p class=toplisttitle>Rank</p><table id="rankTable" align="center"><tr><th class="toplist">GamerName</th><th class="toplist">Score</th></tr>';
    for (let act_data of data.keys()) {
        if (act_data < 5) {
            htmlCode = htmlCode + '<tr><td class="toplist">' + data[act_data][0] + '</td><td class="toplist">' + data[act_data][1] + '</td></tr>';
        }
    }
    htmlCode = htmlCode + '</table>';
    locationOfShape.append(htmlCode);
    $("#start").show();
}

/*
function mousemove_defender(e) {
    // a div offset lekerese a pontos egerpozicio megadashoz a div-en belul
    let div_pos = locationOfShape.offset();
    // az x egerpozicio meghatarozasa a defender kozepere
    // annak vizsgalata, hogy meg a jatekteruleten belul vagyunk-e
    if (mouse_pos_x > 0 && mouse_pos_x < div_pos.width - shape2x2Square.width/2 &&
        mouse_pos_ > 0 && mouse_pos_x < div_pos.width - shape2x2Square.width/2) {
        defender.css({
            left: mouse_pos_x,
            top: mouse_pos_y,
        });
    }



function main() {
    c =  document.getElementById("canv1");
    var ctx = c.getContext("2d");
    c.addEventListener('mousemove', mouseMove,false);
    c.addEventListener('mousedown', objmove);
    c.addEventListener('mouseup', objLet);
    console.log(c);
    var titleImg = new Image();
    titleImg.src = 'title.png';
    var squar11 = new Image();
    squar11.src = '1x1square.jpg';
    var squar12 = new Image();
    var squar21 = new Image();
    var squar22 = new Image();
    var squar11L = new Image();
    var holdObject = false;
    var dx1x1 = 70;
    var dy1x1 = 480;
    var isStartGame = false


    animate()




    function animate() {
        window.requestAnimationFrame(draw);
        setTimeout(animate,4000);
     //   console.log(animate)
    }

    function draw() {
        drawBackground();
        drawTitle();
        drawBoard();
        if (!isStartGame)
            drawStart();

    }


    function mouseMove(){
        var rect = c.getBoundingClientRect();
        var mouseX = ev.clientX - rect.left;
        var mouseY = ev.clientY - rect.top;
      //  console.log('X: ' +mouseX + ' X: ' + mouseY + 'width ' + c.width);

        if (   (mouseX >= 50 && mouseX <= 450-30 && mouseY >= 460 && mouseY <= 750-30 && holdObject)||
               (mouseX >= 220 && mouseX <= 300-30 && mouseY >= 410 && mouseY <= 470-30 && holdObject)){
            dx1x1 = mouseX;
            dy1x1 = mouseY;
            drawSquar1x1(dx1x1,dy1x1);
        }
    }

    //ctx.fillRect(220, 410, 80, 60);

    function objmove(evc){
        console.log("klikkelésX "+evc.clientX + "klikkelésY " + evc.clientY);
        var rect = c.getBoundingClientRect();
        if (evc.clientX >= 150+rect.left && evc.clientX <= 350+rect.left
            && evc.clientY+rect.top >= 235 && evc.clientY<=285+rect.top) {
            isStartGame = true;
            drawBoard();
            drawSquar1x1(dx1x1,dy1x1);
        };
        if (evc.clientX >= dx1x1+rect.left && evc.clientX <= dx1x1+30+rect.left
            && evc.clientY+rect.top >= dy1x1 && evc.clientY<=dy1x1+30+rect.top) {
            console.log('objektum1jee');
            holdObject = true;
            console.log('holdObject'+ holdObject);
        };
    }

    function objLet(evd) {
        holdObject = false;
    }

   //var canvasWeight = c.getAttribute('width');
   // console.log(canvasWeight);

    function drawBackground() {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 500, 800);
    }

    function drawStart() {
        ctx.fillStyle = '#000000';
        ctx.font = '40px serif';
        ctx.fillText('StartGame',170,270) ;
        ctx.fillStyle = '#000000';
        ctx.rect(150,235,200,50);
        ctx.stroke();
    }


    function drawBoard() {
        ctx.fillStyle = '#ffffcc';
        ctx.fillRect(50, 120, 400, 290);
        ctx.fillStyle = '#e6ecff';
        ctx.fillRect(220, 410, 80, 60);
        ctx.fillStyle = '#e6ecff';
        ctx.fillRect(50, 460, 400, 290);
      //  drawlevel();
    }



    function drawTitle() {
            drawBackground()
            ctx.drawImage(titleImg, 75, 37);
    }

    function drawSquar1x1(x,y) {
            ctx.drawImage(squar11,x,y);
        }

    function drawSquar1x2() {
        squar12.onload = function () {
            ctx.drawImage(squar12, 120, 480);
        }

        squar12.src = '1x2square.jpg';
    }

    function drawSquar2x1() {
        squar21.onload = function () {
            ctx.drawImage(squar21, 200, 480);
        }
        squar21.src = '2x1square.jpg';
    }

    function drawSquar2x2() {
        squar22.onload = function () {
            ctx.drawImage(squar22, 250, 480);
        }
        squar22.src = '2x2square.jpg';
    }

    function drawSquar1x1L() {
        squar11L.onload = function () {
            ctx.drawImage(squar11L, 330, 480);
            ctx.drawImage(squar11L, 330, 510);
            ctx.drawImage(squar11L, 360, 480);
        }
        squar11L.src = '1x1Lsquare.jpg';
    }
/*
        for (var i=0;i<10;i++) {
          if (70+i*50<=canvasWeight-50) {
               console.log("Rajz01");
               squar11L.onload = function () {
                   console.log("Rajz1");
                   ctx.drawImage(squar11, 70 + i * 50, 530);
               }
           }
           else
            console.log('ide'+i);
            squar11L.onload (
                ctx.drawImage(squar11,70+i*50-(canvasWeight),590));

    }


        ctx.moveTo(50,30);
        ctx.lineTo(200,100);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(300,300,50,45/180*Math.PI,Math.PI);

        ctx.beginPath();
        ctx.font = "40px Arial"
        ctx.fillText("Hello",100,100)
        ctx.strokeText("Hello2",250,250);

        ctx.fillStyle = grad;
        ctx.fillRect(100,100,200,200);

        var img = new  Image();
        img.onload = function () {
        ctx.drawImage(img,200,200);
    }
        img.src = 'icon.webp';*/
