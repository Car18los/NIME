import { Injectable } from '@angular/core';
import { category } from '../models/categorys.interfaz';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categorys: category[] = [
    {
      idx:"101",
      nombre: "Series",
      descripcion: "50 elementos compartidos",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaUndSOfpgMtHXNL_rnhnUj471IkjyIFLiHe_5s2Ns-2EN_UExN_6Al7aTnvHEPw4Xm7XrBd7EAUKD7VQJMKzrgSYY4535HhdMdCM2jrdmy5f_7FIcNMWczsqPHP13y3H-DMjJD2KUJjtahc4rObHqzy=w426-h757-s-no?authuser=1",
    },
    {
      idx:"102",
      nombre: "Chicos",
      descripcion: "99 elementos compartidos",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaV-2sa5Kk1afMDo5V6RTlKYDAJHZLcmMXbguKmwqLGulz_Y8t7ZSK-UlAeo9Q_kzOkivQR-U_Gex3QNZaReEC5f-lxbukDy1gMuXQwnWXfXw9oFW1ISExEbpvO8A-s61IdFFpqGvOQswwBWJEix48k-=w426-h757-s-no?authuser=1",
    },
    {
      idx:"103",
      nombre: "Chicas",
      descripcion: "162 elementos compartidos",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXY4HRdViaBy5aWpcWf95ozfJD8XHrbAX34cSMwFV4LX1XfYGauJOwDfcD5WAiTu9Eh41qbM0bi6Gil_Rb5X2BNUsDjkHzO9DnLpY2BvaCQ-QyT-bJebal7xAAc8cWSA5CITHMuudKESp6rCKcA6EJA=w426-h757-s-no?authuser=1",
    },
    {
      idx:"104",
      nombre: "Games",
      descripcion: "24 elementos compartidos",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaUhrvIAI4YhfQg3VQqmWbT_2tElJkid6twK7NcP2Q8XsQUEc8-wCTFoUJZJniy7IDnN8tEoejY0JyNe4oZN21gib4MtdBGTMPq3cMk3FCCQxobp3lZ_mR5XGWe0YAil6BtL-txWKs4ROoRe_xpYjk77=w426-h757-s-no?authuser=1",
    },
    {
      idx:"105",
      nombre: "Smartphone",
      descripcion: "58 elementos compartidos",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaWFHQUQP-g_FceW08kgIZDw3XpvgX18ZqSPyaufhTbBjmPHfHm4nVO8jjchuATFwmH4J1eYHN2_dRxSH2n6sT0vFDH1MU1rBWKZREjRb5ngDN-10s7J8Y7uZ-f4avnVRbnL_W6ClN4XIuoAjQt7ESph=w426-h757-s-no?authuser=1",
    },
    {
      idx:"106",
      nombre: "Vocaloid",
      descripcion: "54 elementos compartidos",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaVJoJEUtwdiekuXWNRGfwLFeJB6p-j3BsnNq0kDWjgS-DupBkEYBfGQeM8SpFNjKpsJwqAXE2_y9Db4R020Q4a8P6mFEmov69saaMhIEfsdWtulTO3aeVvHV3YmvJ_e2Iqa_HjsxW-PGgGrkfCWd2Uo=w426-h757-s-no?authuser=1",
    },
    {
      idx:"107",
      nombre: "Escritorio",
      descripcion: "38 elementos compartidos",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXGZ2dgmfRDHqhPX0pHZOQjTZsPbmNpkd0hhDmEn_wK2NXD3Dqx_vNUVmxlPEoGQi5VfwX--7r8dbPtHI_EEGuZZu--W5KNbl-j6yu4oLMdhZ_9YHVKckEc4pHD4mF7GgMsg6224MSbMkOolgd_OwkF=w1346-h757-s-no?authuser=1",
    },
    {
      idx:"108",
      nombre: "Anime",
      descripcion: "43 elementos compartidos",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaUzBxWpF0FGKwXcg75bZrP0FvwrZZ9tx5S2e2u8HAUFWJpZSh06671NxBPk7bsPz51MhNmJQmSjN8dIbCGG0b-ftTwAt25CCKI1AHd0s2OD-NDtUxSqoBibVOUn2aeQ9ouq1wfspbyLbDZO4rTDMyjy=w1346-h757-s-no?authuser=1",
    }
  ];


  constructor() { 
    console.log('Servicio listo para usar');
  }


  getListarCategory():category[]{
    return this.categorys;
  }
}
