function dataHandling2(input)
let dataArray = input
dataArray.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung","21/05/1990","Pria","SMA Internatioal Metro")
let hasilsplit = dataArray[3].split("/")
let tanggal = 0
let bulan = 'Tidak Diketahui'
let bulan2 = 'Tidak Diketahui'
let tahun = 0

for (let i =1; i <= 31 i++){
    
    switch (true) {
        case hasilsplit[0] == i;
             tanggal = i
             break;

             default:
                 tanggal
                 break;

        case hasilsplit[1] == 01;
             bulan = 'januari';
             bulan2 = '01';
             break;
        
        case hasilsplit[1] == 02;
             bulan = 'februari';
             bulan2 = '02';
             break;