$(function() {
    var clock = new Clock(),
        movingClock = new DragAndDrop('#clock');
    clock.init();
    movingClock.init();
});
