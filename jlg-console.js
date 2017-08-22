(function () {





    function JLGConsole() {

        var self = this;

        this.url = 'http://' + window.location.host + '/jlg-console';

        this.log = function (str) {
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