import { Injectable } from '@angular/core';
import { Series } from '../models/seriess.interfaz';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
private seriess:Series[] = [
  {
    nombre: "Merlin",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaX2PP9BTUTzYv2Lz2ubKfh9hOKS7ESv3XA8pGEL3Xek7PMfI8X6kIs442YBYyOboBSTV3jIqdZviMcUAvoudjBl01V1vc6aeiRHadL5_OwuFtY07-jb8MMWHTuvauED5817tEkwA9E6w0uGn_DKVnhu=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaV5BCE9JEpWnrIWkX9D8-DwD2GEHyj1bMWwsxKEE5PDRqSis3pUkICdtLWCQj_OB_rslDm6gPzVSCtNu4S1F3jFkdLWVfbyKZ8PhNAGZpPqdZx8HmmHYFwaXXca5wn30sZhLEeBoR3VU_yPcjLBJ5TT=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Ani",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUOXz4fe7HCYwIELlU3iqG2G2ItSFruaae0co22DeV8HWmhnNR1IXOgh0WqLkPOBnMs8hFAVIB8PRJMRn4cUY2FLR1kA50awpj8absLPxj5ou0hasfaGKMQbW97gq4d0AgunpbtHi9FaYvBAWtLvBVz=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Tom",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVbTNM6MYmh8Y4Bi3gXyS3bIfI3_VNuhn-OAExSOonLdbJerjHMCR105fMH92pJwTaUZwQAEwWk06Y7dOCm19Q_sNe6tpGBPfMqQ0Rs-j_qMAR9dlmrrvr72sSpIk5ErNZzgWWk0AWyjYiF4sYskomM=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fin",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUqXXboEZr1LyZFyojlrOMeSFOFEyHUy6BcZGzWlm9GuqOVuRwybXFUOS-tgdPEWZQL1jX0g-vfjgZ3A_PdmsbIIEhBGSpd5pSAroNRv4uu-NdYAjgXX7CFlOfXs3l-9V2wlpRG8XAivqLze2nVsI4K=w426-h757-s-no?authuser=1",
  }
  ];

  constructor() {
    console.log('Servicio listo para usar');
   }
   getListarSeries():Series[]{
    return this.seriess;
  }
}
