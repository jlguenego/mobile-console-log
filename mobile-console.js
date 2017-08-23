(function () {

    var oldConsole = window.console;

    function JLGConsole() {

        var self = this;

        this.url = 'http://' + window.location.host + '/mobile-console';

        this.buildData = function () {
            var data = new FormData();

            var str = CircularJSON.stringify(arguments);
            data.append('str', str);
            data.append('length', arguments.length);
            return data;
        };

        var methods = ['debug', 'trace', 'log', 'info', 'warn', 'error'];

        for (var i = 0; i < methods.length; i++) {
            (function (i) {
                self[methods[i]] = function () {
                    oldConsole[methods[i]].apply(self, arguments);
                    var data = self.buildData.apply(self, arguments);
                    data.append('type', methods[i])
                    self.post(data, function () {});
                };
            })(i);

        }

        this.post = function (data, cb) {
            oldConsole.log('url', self.url);

            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status < 400) {
                        cb(null, xhr.responseText);
                    } else {
                        cb(this, xhr.responseText);
                    }
                }
            };
            xhr.open('POST', self.url, true);
            xhr.send(data);
        }

        for (var p in oldConsole) {
            if (!(p in this)) {
                this[p] = oldConsole[p];
            }
        }
    }

    window.console = new JLGConsole();
})();