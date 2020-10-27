const zones = ['peninsula','canaries','ue','resta'];
const tarifes = ['normal','urgent','certificat','urgentcertificat'];
const preusMenys20gr = [//  p,     c,   ue,  resto
                new Array(0.45,0.45,1.15,1.30), // normal
                new Array(3.21,2.65,4.36,3.75), // urg.
                new Array(2.95,2.95,4.00,4.15), // certificat
                new Array(6.23,5.15,7.80,6.60) // urgent i cert.
                    ];
const preusMenys50gr = [
                new Array(0.57,0.57,1.55,1.85), // normal
                new Array(3.35,2.77,4.84,4.30), // urg.
                new Array(3.07,3.07,4.40,4.70), // certificat
                new Array(6.38,5.27,8.29,7.15) // urgent i cert.
                ];
const preusMenys100gr = [
                new Array(0.95,0.95,2.25,3.10), // normal
                new Array(3.81,3.15,5.69,5.55), // urg.
                new Array(3.45,3.45,5.10,5.95), // certificat
                new Array(6.84,5.65,9.14,8.40) // urgent i cert.
                ];
const preusMenys500gr = [
                new Array(2.10,2.10,6.30,9.85), // normal
                new Array(5.20,4.30,10.59,12.30), // urg.
                new Array(4.60,4.60,9.15,12.70), // certificat
                new Array(8.23,6.80,14.04,15.15) // urgent i cert.
                ];
const preusMenys1000gr = [
                new Array(4.67,4.67,12.60,20.95), // normal
                new Array(8.50,8.50,18.21,23.40), // urg.
                new Array(7.17,7.17,15.45,23.80), // certificat
                new Array(11.34,9.37,21.66,26.25) // urgent i cert.
                ];
const preusMenys2000gr = [
                new Array(5.20,5.20,20.20,36.90), // normal
                new Array(8.50,7.50,27.41,39.35), // urg.
                new Array(7.70,7.70,23.05,39.75), // certificat
                new Array(11.98,9.90,30.85,42.20) // urgent i cert.
                ];
