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
let clickVoice;

$(document).ready(function () {


    start = $('#start');
    levelArea  = $('#game1');
    levelBoard  = $('#game1');
    levelSpace  = $('#game1');
    locationOfShape = $('#game2');
    gamearea = $('#div2');


    init();

    clickVoice  = $('#clickVoice');
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
        position: 'absolute',
        background: '#e6ecff'
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
        height: 253,
        position: 'absolute',
        background: '#e6ecff'
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
        height: 253,
        position: 'absolute',
        background: '#e6ecff'
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
        height: 253,
        position: 'absolute',
        background: '#e6ecff'
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
        position: 'absolute',
        background: '#e6ecff'
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
                alert('Az alakzatok ne érjenek egymáshoz!')
                levelDraw(actLevel);
            }
        } else {
            IsdragObject = false;
            alert('A kék felületen mozoghatsz!')
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
                document.getElementById("clickVoice").play();
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