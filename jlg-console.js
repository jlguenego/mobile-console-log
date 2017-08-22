(function () {





    function JLGConsole() {

        var self = this;

        this.url = 'http://' + window.location.host + '/jlg-console';

        this.buildStr = function() {
            let str= '';
            for (var i = 0; i < arguments.length; i++) {
                var sep = (i === 0) ? '': ' ';
                str += sep + arguments[i];
            }
            return str;
        };

        this.log = function () {
            const str = this.buildStr.apply(this, arguments);
            this.post(str, function () {});
        };

        this.post = function (str, cb) {
            console.log('url', self.url);
            const data = new FormData();
            data.append('str', str);

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
    }

    window.jlgConsole = new JLGConsole();
})();