(function () {

    function JLGConsole() {

        var self = this;

        this.url = 'http://' + window.location.host + '/jlg-console';

        this.buildData = function() {
            var data = new FormData();
            
            var str = JSON.stringify(arguments);
            data.append('str', str);
            data.append('length', arguments.length);
            return data;
        };

        this.log = function () {
            console.log.apply(console, arguments);
            var data = this.buildData.apply(this, arguments);
            this.post(data, function () {});
        };

        this.post = function (data, cb) {
            console.log('url', self.url);
            
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