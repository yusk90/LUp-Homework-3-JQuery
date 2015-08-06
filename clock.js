function Clock() {
    var $clockContainer = $('<div>'),
        $body = $(document.body),
        formatMode = 'time',
        privateMethods,
        clockID;

    $clockContainer.attr({
        id: 'clock',
        class: 'clock'
    });
    $body.append($clockContainer);

    privateMethods = {
        time: getTime,
        date: getDate
    };

    this.init = function () {
        clockID = setInterval(render, 1000);
    };

    this.destroy = function () {
        clearInterval(clockID);
        $clockContainer.remove();
    };

    function render() {
        $clockContainer.html(format(privateMethods[formatMode]()));
    }

    function getTime() {
        var currentTime = new Date();
        return [currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds()];
    }

    function getDate() {
        var currentDate = new Date();
        return [currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()];
    }

    function addLeadingZero(number) {
        return (number < 10) ? '0' + number : number;
    }

    function format(arr) {
        return arr.map(addLeadingZero).join(':');
    }

    $clockContainer.on('contextmenu', function (e) {
        e.preventDefault();

        if (formatMode === 'time') {
            $clockContainer.html(format(getDate()));
            formatMode = 'date';
        } else {
            $clockContainer.html(format(getTime()));
            formatMode = 'time';
        }
    });

    return this;
}
