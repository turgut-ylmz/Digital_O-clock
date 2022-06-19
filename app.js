function clock () {
            let date = new Date();
            let saat = date.getHours();
            let dakika = date.getMinutes();
            let saniye = date.getSeconds();
            // let gun = date.getDlsate();
            // let ay = date.getMonth();
            // let yil = date.getFullYear();
            // let tarih = gun + "/" + ay + "/" + yil
            let ap = 'AM';
            if (saniye < 10) {
                saniye = '0'+saniye;
            }
            if (saat < 10) {
                saat = '0'+ saat;
            }
            if (dakika<10) {
                dakika = '0'+ dakika;
            }
            if (saat >= 12) {
                ap = 'PM';
            }
            if (saat == 0) {
                saat = 12;
            }
            if (saat>12) {
                saat = saat - 12 ;
            }
        document.querySelector('p').innerText = saat + ':' + dakika + ':' + saniye + ' ' + ap ;
        // + " "+ tarih;
        setInterval(clock,1000);
        }
        clock();
