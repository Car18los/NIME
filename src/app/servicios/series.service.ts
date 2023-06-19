import { Injectable } from '@angular/core';
import { Series } from '../models/seriess.interfaz';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
private seriess:Series[] = [
  {
    idx:"00001",
    nombre: "Merlin",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaX2PP9BTUTzYv2Lz2ubKfh9hOKS7ESv3XA8pGEL3Xek7PMfI8X6kIs442YBYyOboBSTV3jIqdZviMcUAvoudjBl01V1vc6aeiRHadL5_OwuFtY07-jb8MMWHTuvauED5817tEkwA9E6w0uGn_DKVnhu=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00002",
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaV5BCE9JEpWnrIWkX9D8-DwD2GEHyj1bMWwsxKEE5PDRqSis3pUkICdtLWCQj_OB_rslDm6gPzVSCtNu4S1F3jFkdLWVfbyKZ8PhNAGZpPqdZx8HmmHYFwaXXca5wn30sZhLEeBoR3VU_yPcjLBJ5TT=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00003",
    nombre: "Ani",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUOXz4fe7HCYwIELlU3iqG2G2ItSFruaae0co22DeV8HWmhnNR1IXOgh0WqLkPOBnMs8hFAVIB8PRJMRn4cUY2FLR1kA50awpj8absLPxj5ou0hasfaGKMQbW97gq4d0AgunpbtHi9FaYvBAWtLvBVz=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00004",
    nombre: "Tom",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVbTNM6MYmh8Y4Bi3gXyS3bIfI3_VNuhn-OAExSOonLdbJerjHMCR105fMH92pJwTaUZwQAEwWk06Y7dOCm19Q_sNe6tpGBPfMqQ0Rs-j_qMAR9dlmrrvr72sSpIk5ErNZzgWWk0AWyjYiF4sYskomM=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00005",
    nombre: "Fin",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUqXXboEZr1LyZFyojlrOMeSFOFEyHUy6BcZGzWlm9GuqOVuRwybXFUOS-tgdPEWZQL1jX0g-vfjgZ3A_PdmsbIIEhBGSpd5pSAroNRv4uu-NdYAjgXX7CFlOfXs3l-9V2wlpRG8XAivqLze2nVsI4K=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00006",
    nombre: "Dulse Princesa",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaU80wdVeP3lviSQi8L88mg-beaZwA-iRnDCemUo_45Btp0BDkk1qUJuHGyrNtZOAHLuqwXydMvuTXXVbbmXHejzee4cbVw_DByCX3SR2k6Xl8wUWzWNGwKknwHF_-6P1WaKMD4Egs_TEhaLSh5eQLgK=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00007",
    nombre: "perro",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXl1pxdLcJ2A4z5JJqBWY54jlsNFata6uplFcn5iV6OzfCaL93Vk1idIa3WyIwBXadlXRXRBFEpGrc0jvChb5UnANIGhbeHSjb8d1jvHJNVxxlXMLehND_tugVP6fDEZY5IFxJtY8u1ViJ1jA3jgXFx=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00008",
    nombre: "imposible",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWyKSJjkM2OcoRcdVYkQ7pzX_1-jiKaEw9R6UumrFEw5QNx2Bgy-RBDX_ETd95q2wcK9nBtVOSULJCD3ZRjy3Lf-pGnFlA_Fa4oTXO-5JnX68RFE-voQdKG4npFG93Tp1qe-YcJGrLecvarVJBSVsU9=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00009",
    nombre: "rick",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWjjK9P3rePHxWUKloNYR2ptnvZr1NpxHgDK1bWnUuUVvpUU20KvEyEkgWqcVDCXG93IKn23p72XF93hSD9u_duBde7mzBacvjB0M9EN4rPMZ55vlfVVXx1GapVvqtMMsO_jt9N-oy_8hMmGUSlqG44=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00010",
    nombre: "mordecay",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWwtJ-90EczECSvtxH1RojnhqAcX3hbJzLy9gfaVjJQh2KWnaE-obgc8ubnxL7ik1BA8XBU8tOzRp8FtirGEowOR-eiizd_nfXISpmkovqcOfiP7xq_TlHBknWvQZ_O0b1LPABKKXVVmeL2-4ignqfI=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00011",
    nombre: "danny",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWoKtcz-EPoVIGMCyJYFb0tBuR8n0LXStIWFMc6kXVbAFiwO3bSOJCvfp5mnKxMVf-nBLnW1Wss4pdUeFDQxgmvAdvtKy7bVlZPe4Lb6EjlEPLCguhPNO_Fiv_dC9bE70V2BGGOv2kl8us-pxHagG8D=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00012",
    nombre: "dester",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXxC5snqAkXpXW4JN4ZZRvDLP5FZqYBx1nc9iG1BQpm4f1knKbtAWhJTIHvMLa4hkOATT5sO8r3VA_9qDxSkBNZdJsG5yZIV5Q7_hwmFGo3G8OGW5YSJxhEP_nWODEVHvTCpkC56VDWg2cJBtfJOo0p=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00013",
    nombre: "bily",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVBaJ5t5AAhrAHxvAUCjGXmv6XvYNalFqfvBmn_Jk4h67tHPP4OsRyLP53qdEOACQ0LcJ8MW_g-ppnvQd_4yGNFLvuo1ERp0Yh91rq50-ICQqIHkplCzr5zWBK0gnIV7Yl0QF4epV93cB750uiCRbKA=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00014",
    nombre: "mandy",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWi6ce5cKg7nYX4cTq5KuNPjBLENWw6k4KfX1PBTg0jLZ-KeBbO_8Lcboejjth7vspEXEnREMFvfNoIboWkONv4x6szAb8irHACmEApI1bYKNQIs9GXLOPrkimyUQatPvSFh9yGbH0UYkrAEuSPSn-t=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00015",
    nombre: "puro hueso",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUUT-ygIXDTcQqnCtVNiTb-ZR4-aEKabs48HFQdQqt3Y62ro_HzKSquZOr3NNoyzYbHnw8A1wSf1NHKSc5O6dEXjtfNOYdmnoaS3sAIZrJnIMjB20izb9tVYqJRH4bZO6EHedAVCyCDBSQP4wJVrjIJ=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00016",
    nombre: "gambu",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVTeKCTVogpiDu9LgJuTMxTKLBj62dqAr0ZlMalo93P1yhdOn6sThXjfyjKKY3FEj_YsWjp5N7qZGWvo7eCjb0zaMTIPdCpO93Qf2zlijgqKuOApr7f5q2CmgCAoUkQpd8n1YtgLdPcwxD4-RayoJ3M=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00017",
    nombre: "bao",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaU4bQXj4JAw4DsAk8FTtGG2sQ6Y6Ryd0Y-NIu6eNqz8BYFYye386ZtRUcNlEuUzr5IGAEC0snkVfVMKIqkbD10LD0O1Hd-7sLOZS0ZmbXFFsnU4hQQmCON-jaJ_dM3bHh3cOTaD4OitnSmbwLgklBWy=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00018",
    nombre: "abuelo",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVZKqEtXqxOpImkwQ_Xfo1kMrGtP6erMzmVe2hpKhr29giZ1DPrRm7fPLHazclSbyzPToQHaSjIMhNQWKJKl6umrT9YcJPMRb_QlNKUg03eCOGwqk4xPV3TfcaB5b2SU6CCEoYsPpAMhkcXzouTxcSD=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00019",
    nombre: "jogi",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUzYqm0r4T7CohE4JhQHEJ2oPzICpx6v1TS8ZggvmDiuvd5Fv35H26dCbKiqhui_Gu8BIvPNnhPJBv2zAYuw5-so4xabQrq9YmtYv5EchTVayb0pYSTr2Cg6bYFaXi-IhrSw4orS6HbnaM_Fp4og8ww=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00020",
    nombre: "cobarde",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUQDpmUXCxq_UnrU1dFcuO2eEfcHip-m3XwSllqS0GRNSNW9OaxJArXEpOscjmPG6QIMII9eISQPkowMjPxZAMLD75Q5RKi2iyOrjkbujuGc1PWAjEMUGh4MQDhG4wmbby2Q8ebw1USiZrJ0XwDCIfy=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00021",
    nombre: "roobtboy",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaX5pd0bc4TLGxdcDgs4gqMX0lujZfrht3SfbpgUYDJG3Um1688X07GzXazKri3qbB0HhARpUpBEAntj8VD3rCd66lHrmnWxvJfpPYXTXzH9-_st7s5OeaOP04jSRSa1DPJR_qFIf1qjdc_q3nCLgj-T=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00022",
    nombre: "kuro",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVHSf-zoDHkhuQ9-1LEm6U6JTtSjOq2XfVttLcoCckz7WoLNHLRaTdxPRDPExy42vhz42izDdh2cFgFYKFmRKMbudr3HItlvMZ54XqTY9EZbN9yjKDK6htvjgGMlp2b5ktKMhUz4m3AWh22oiQrlBkm=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00023",
    nombre: "Kitcat",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVBbjaxrQRD1GsxXmQv99gMXOkdXmlxrdW7n54cy0SG7Tko7l3Y22SEyRvNvtZma1q3_Qs25nYa85b0OiXV9vgNB6nqkDGWacRxqa7pmuum4W0adwD7nxhb2fVb9hCx5W2CtjibwaBh5fWvS88fH7G_=w426-h757-s-no?authuser=1",
  },
  {
    idx:"00024",
    nombre: "lilo",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUppc3UjlrSZqxNwJ1v6zd9Y5Nu7IxJ7L2hjMqlj7hEVK0gVoiCRN0VFuFSj4joW1gXdfWsbF4RbXBKRk5Lk5wnHDC_671eFfmyc-huh-GBGysgB2Hmhhtzq9PogiVUN_8rRxFI89WHRiTVIYsOwv46=w426-h757-s-no?authuser=1",
  }
  ];

  constructor() {
    console.log('Servicio listo para usar'); 
    
  }
   
   getListarSeries():Series[]{
    return this.seriess;
    }

  getFondo(id:string){
    return id;
  }
}
