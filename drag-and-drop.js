function DragAndDrop(selector) {
    var $element = $(selector),
        $document = $(document);

    function moveElement(e) {
        var elementOffsetX = e.offsetX,
            elementOffsetY = e.offsetY;

        function changeCoordinates(e) {
            $element.css({
                top: e.clientY - elementOffsetY,
                left: e.clientX - elementOffsetX
            });
        }

        $document.on('mousemove', changeCoordinates);
        $document.on('mouseup', function (e) {
            $document.off('mousemove', changeCoordinates);
        });
    }

    this.init = function() {
        $element.addClass('draggable-element');
        $element.on('mousedown', moveElement);
    };

    this.destroy = function() {
        $element.removeClass('draggable-element');
        $element.off('mousedown', moveElement);
    };

    return this;
}