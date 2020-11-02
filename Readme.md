# UKK Pembayaran Listrik
Tugas akhir backend (nodeJS)

Youtube: [Explanation](https://youtu.be/wX33If-gdWc)

## Level
```
sequelize model:create --name level --attributes nama_level:string
```

## Admin
```
sequelize model:create --name admin --attributes username:string,password:string,nama_admin:string,id_level:integer
```

## Tarif
```
sequelize model:create --name tarif --attributes daya:string,tarifperkwh:float
```

## Pelanggan
```
sequelize model:create --name pelanggan --attributes username:string,password:string,nomor_kwh:string,nama_pelanggan:string,alamat:text,id_tarif:integer
```

## Penggunaan
```
sequelize model:create --name penggunaan --attributes id_pelanggan:integer,bulan:string,tahun:string,meter_awal:float,meter_akhir:float
```

## Tagihan
```
sequelize model:create --name tagihan --attributes id_penggunaan:integer,bulan:string,tahun:string,jumlah_meter:float,status:boolean
```

## Pembayaran
```
sequelize model:create --name pembayaran --attributes id_tagihan:integer,tanggal_pembayaran:date,bulan_bayar:string,biaya_admin:integer,total_bayar:integer,status:boolean,bukti:string,id_admin:integer
```
