import { Injectable } from '@angular/core';
import { Hombres } from '../models/hombress.interfaz';



@Injectable({
  providedIn: 'root'
})
export class HombresService {
private hombress:Hombres[] = [
  {
    nombre: "Merlin",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUMOMSlGh47EsSv-l9YHv_Y0gHENn0H9r43jdtmLuRwD21e1IQqlM_rFoCAeCWjLz_ylmF3VhPoi5VYIQWHVyX83RxB6QA_X26bO8CXSRy6GtJDDDp_jSwOxnAJEvUz0h01YIow6-O8Als6k6AS8pJO=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWqwarZq6t22F4Bp0jZkAcyUq82GcKOt5fImwxvvVH0u9LpQgfH-bQ4vvjj6r_bh2CXpUD97S9gvdTj832ocz6TOnhSztJIEZrIs2mtqemvxTiG75uq9at21dNXmwqZgYnZiVv3zcz9N95AVEzI993n=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUMz2ZweLVIyUV73GjqzHGnenmWda3aN_uCDF7YDFhiPQ969i3tW1V95nBgL6_XuNyWyfyH6OiP85pbmztj1ttO0gf_M9vQjUQlsovgtO41ekrDoEpEkrgMylJGItEOEKUjTJ6t_WyTqJBLuSdiUM0G=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaW79i7Q_Gez4ZolCVp8ecHxCpzf5nbNYJc7aPUYli5nwSWazVLNwT5cBt_Lk97Sr_s7-Jhdqb1ur1cS-JMwY_Jgb7ACE8sjjX0GxVWQA9S5RAJRjeDsn3mh0YK62EZPlatlXoVNxyuNUb4v3bmRkkD5=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWmUVqofDP4tR3wQ8CYL_eRluNewIzBU44P1NVmz9iKrrfmmBJtHCqNk4y2ErTS-B6k16HytbA2NnR_BkwfPt06fwLNabIcJs7SnoilA7VsgC18u9rZLkDbkD54wwz3mFcRGeUYkhL0U7YKlPbOfPws=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWY86AfQCsfSgpPOQKILH-RqlBLU5-3Ru-30tcdZdyA65Clut2zjRHcQDQrc8edMi16mfUQmkVhIsY7lPDpSv8fqSCIeeEiDJ2-WOXEzMoSkVd_2W6fra8OTlSlHfECjnG80bkMzBvohjeFR4EBGBcl=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUoyZOgmazVl_jRfQzrdfnnrcKvCdCe3gUIjtC_e8eyos2Q7eguOvmDY6RLZqBQT385eCyJHJl7dqSWcrVLke68Kyt_SSCxKtcTKTtwdafPdsi1t4UnG-xOmU4pwUxPNvdxfH9FBfxoEvNuAipGhBiY=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXRQgNheQW8c0fVfUQP7Pydbu4oFzYOrMFaVKQFpTWWVo6ldm5BvZdNtx35lsQibw_73KHVIZUnLsN9N3EUBTjyYaCQxAgG5_HARFEurQu-jOKAEoSYX_RvYkFtbkL9WxK8IK8xfox_-cgfwCN7YJ-B=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWAaHFtvoWIAMfpGtgcIhLwzcyICkxpgBjSLgbcDkoDwgMSoGKSPKsrHH2_aDEfrXoJGoO8r2k_9J7PCk7BKgegWPcteg-WozheJsSgj4gsl0nMyAIAU9Rb5T15aVU9Nlxzjszopz-U20EKS1EAsPQ6=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVJZmxPnO2yqzjPR9grw9IbY8pE_YbizPK2Y2YcwRL0ZIP-ZfWktGVtOmjXNfDZWO-FKHDqv76pMAYeIFqtndCvmRjtDWyaHO8buXPfsiM5zZKkF594AEFdHSyLLvQ7zI8mxbrVm-QS7GplQo3A05_5=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaV7pGaQ_trUy33eFAc4QNRXruFdF8BVdXmiC9OFfTkvaScQ_qoLvmycid99fIheRE6f2o184r6b_qsJbhpSIleDPcuyqVssvu7oakuMOQa4fIm2MmRtdfR5Vywsa5Yh6qYrxBdasynhR0ZR0aaLeoTb=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXvJ8Iv-ySmR4l9vSH-uBKFc1pxY-MjPbAeVsnWsoizQqAMGIlGZoLCKBc0_s4YyQDeRwnanbhp0yuB27xaS_jQMBH7RGCS9I_G78s3IhrfzO5RrxH1CqEI4dTuDM8cSfh2WZTQMH9PZ8TUSwHUdt61=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUDP7-cV1b6UiOF-gsfpNHgRzl4S1V2ZsIdMhpAjDQb2WLO-5RN2jl_a0ATYhWfekpGaIwu62pP-BO0RKCYpUcvZ_38sC_H6VGT3DVNuuCixdM0Bx-qe4BOI8a5AbViIZDngmXaOmoYRezfSbalZv5l=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaV87KoX9CXA7b2WKbzSO9VMc5tpmH3pVX5KIpB5CdCvWDZu_FM6OM3Ppd5Tb1M5K-JxWW5nKLKym4fpSdb_UwALQZOkmfEspryEJBHnmR1VahMNf4MAswHmYnO_8DF5C7Di11fpGUzA65dxcEQEIot9=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXvZs8GyKLf_HW7_511gwCj_VMus2C3yrJEJi9jdXg5ZON_-AAJjY62Z9kWnxPZ2D_0y1X9gu4dY1oxX2ljbGIQZ6FqeTSXo3Em-WQSA7imMxQMYCNgx-DUbVq1z94K4alwjUXX8Q9QSf17YzzfOrx-=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWQ3BZQdNA5JoV4zxweLMi-_VymxKuCzipmt5VbFodaDYkK5lAkVeSiheZ3H2DduSwCBfiQ9FlrcXTvmbzr4TQKo0nmx-WElT5MSmZH0j6Ll31WWfENQs8JK6HItavkNoFG0LeBnTAojyCN2DhAaHaV=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUt9UI1ejtvXim1OI4GwakrWR3Re9SChxgYknRkvmWtZV5UAdlm2lh_ERfwjvirMZmt-u3QoZW5H_M7FQr7118DwP0nXK6NfSse_dTILleTA1T7yQnwgpjKOBi_2SeGaPxv07PoPq17HyedgyRnOdLw=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaX-N2RSd1Hm0uPmjyv2hGcjXiVIWh6twSe3eLjhdAdS-Gt9clWXG9eNJN9ZNSwN_qGski_xlC6RMNDJc18ytH9bSyF4hAHeFllL-Fo0HS4Yr8zJaIDNpSzVK2cMFq5wp3bRVb_7m1eRidufI-7Xt2uO=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXlW2u3k23xALX7jnVVWQjqqkaZzP-OU82pXMRjvEqMIOMBLTIXP7PDVPwUawIo8qX_5arlIRWBGcA0cMnjZTxR4-sPEiKCxaAulf28xYbrvBw6Y1ew65z2ZbJ6WPNGNqynU2Q-nb9Azzs0LD-29xj8=w425-h756-s-no?authuser=1",
  },
  {
    nombre: "Fire",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWSFR_A-ZasS0_7tWRqp_9W9FbzcgAULbOu9kFtJWW8ndulVv75MxffseZroXl0GlBGJ8PriFODcBsHYEaPkM0b-mNNTGAmL4wX7nYfKlm-11KyGdVcTypTD9eIns91WAzMu-DDiANIlCvuEeqzlaRa=w425-h756-s-no?authuser=1",
  },
  {
    nombre: "Merlin",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUv_KB82hJtl24Sv3VD8UPzbcBxxCb5mgRjSZR9Kj0uICfhror7vOmlLfCuGhLyA3Zs40AlZSq1WKZbvKCkct4YDzaX4kXmnm80fHbhMBEpS81vq5EHdFGrYIhVTkldzerkpgTOeoVYKAE5Kv4P6h6S=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Merlin",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWZknpt9NBzCvr_Ccsuz8NQxyciPFwnn7FIL1MkebUwb-a3EYvwFuqc31WFVkYtmeiDJRIywqAbI6OogGt3lXG8dl89yTdVReS2YXrnIgRgachyoYMFOlj_Fh7ad7bQdpO8TViEqgvKjzVvkdLrG11l=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Merlin",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVJ_eE_7gJ-AXLdokzsuKVT7QB63dQVsUX0oY82foU-QbrIdddNFJsWJ7pjr3AG-5PjhwsTPtqAD3OUPDvtgRsV8oeiTCSgPPEFdGHU3XTCY5xtVwIMzBShOBp3uA__HmLlKhBB85vKTjk6PfpXo2Y5=w426-h757-s-no?authuser=1",
  },
  {
    nombre: "Merlin",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWSkXqq-a3_WL1S4stVYD-bFxJDRo3E4b6Vontz2VF1bn57VCjCkmVmr6kYLZxiCjCtOXg6tnpHCdNNZacHQ8nOrwdVBlzVfwGTypV7A-2WqRzsJiDQ_IUf9xuT_wE36L2PnQS-YQUMovnkfymGXjmI=w426-h757-s-no?authuser=1",
  }
  ]
  constructor() { 
    console.log('Servicio listo para usar');
  }
  getListarSeries():Hombres[]{
    return this.hombress;
  }


}
