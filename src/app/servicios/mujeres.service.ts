import { Injectable } from '@angular/core';
import { Mujeres } from '../models/mujeress.interfaz';


@Injectable({
  providedIn: 'root'
})
export class MujeresService {
  private mujeress:Mujeres[] = [
    {
      nombre: "Alice",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaUMkzyO_bGcE_SzbYvTsC4849RFYDG4I8dLkbXWzy57jgMXVCjSuSKwlMt-Zlt61YmpdRLBu75657szQK8ig_fic9wYHjdMI2SRUYs8KfOXorQRJO15b7c4Oq8eyalT07gchl6TYk5m-e1kkddRLkk0=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXEHZvf4cYV5pPF27pRWFhuMiRiqLnvKIuujb35N60hzLHdvDOOENZLcm_3Nf8Z3VEL2Kuacdk9yVigeM6wfAqU2ITwGSHLvU5YVkmSg2jej6euAgxHZlR0RbBB3TjTx_ZxW6KreBPVWhxEgftSHRu2=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Akane",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaX3iT79Se5Pwv3S3U2b0VKMAQzbM7tbD13PPme769aax-XHH9N2bnqlkme-RRNzJRdCaYY19fKSGfVkRRGrrrQ6ZouDQYSgyxP17Y6-OFxMspib6XAQExF9oN7wpL1JqG8w-stIMpGveBkN36ZAcBib=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Akane",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaUEYf8nrgEpjFEYArlSxa1Nhout4wtIdka1B6r5kdADvm4DydtgA8FqmINFPuld-NL9QSOStERCQtBmsHnG-5BHqQZQ_mRBHx28ojzF1_W7DTaRHBgGHsQBRo5D5ecs-mWcXzXik0jFZyMdDMm6yVY7=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Aka",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaVgPxozgo1xTonbODvax77irHKIU4wvVzxu6f2ctUgYWLOu0hl0HG_KTlR91A29-2jMR-rG6ntSa_5wuI2vMpJhozrr1kGzOLRu0vbVipHShci2lHiBqX43AnwEfat6xbgXvuRpdj2YwUsUaFXd5t7R=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Alfa",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXPfOLPSQFf_N2WTUWLkFAaGkvLrKvhC4ffZwOWpEqKfwGGdAn5nmEEIH6Bw5J1wgp5QqA6m4Mk3N7so6itTxA6iw_NfHN8AZLgnkwb1pH7j9AOkZzhdGN3U4R0_1Ie0ZwiUyjzLvY4actd1Y--PfxY=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "18",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaVoXR7DzfUQpYnVILHqh2wuWSJUh5jvyAp8ycIK5TG9yvhSyq1uEBNxN7S6z2vk9Bwa00rWswF9rbC7uHZS2ApANoPmQ9vrOlHRs7WFoAAMNkZKQbLhCc0zsrsx1BUuoruCGe54swfvsuIigQ5fjKXO=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Ali",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaULQ1Y7q_cdbZ-_MRhbdvekf6wYn6VkE5_9KGL8EGWhMYaooTzrSrF7sm8-g1kAbpLfO9kKTbbm5DUDxTLtE-EVGV3xlxPb1cD9zWZat7GhmgSj1XuotnfotBVvapwDMGuaO7sV9RrfH90BWTU4xHFB=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Ani",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaUTD2RKw7PMHDuK3mnqQGV3oq7H-2AUfNO2O99AmHXXDO4ZFjKcRtcvrtrt46qigRH58onMrlUrBklTaplZ6F8szBTqyCcNdAUJ7NL0F5elRxisk6vFGkbe69dKGQY_j8OonjIYahJ0EiKj-f2UXLL_=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Arnol",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaVKdYG5VQ0fm3Yu2oDfcKA2BzvkI-kV2Q6tsAjFUgyVr0SBodHTafYbC2mUXZaSbpnh6sW-bQBceKX_2_gcFTKwh7MfuzItBvxHr1x32-cr_7bsZfSdoH6_2OnYcpXI3RbWOQq_gnOFGXj7QpOUP0rr=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Meri",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXUuC68RLpa1v2FGWcrPYYSo1VCvweUeDPNes6IbrTcsD4mVM9kV9uCVdAhKp9y427GRYHsF6hzcc9hFDmp-ht4a3ONJK4Mn5iaOvhsdH-p7E_tDQ_NM_lu3xllwR_NavL0B0qBvVSCVK9h1O2nw42_=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "A",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaVRLzlU3DrP3P2aKOcMZU_000vMCd-cOYT2mctv8EPOvudXKH9SiGMdno7y4WipVjAshSuxgAzrv4jvaPCSd9EkI-5QfQaWMql7YfZ9UhiwXmBFepN0gNBG1TeJB4rKn9UnIXyy_adIQUyfOIcb_H4c=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Alice",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaV8bRPNLCfCEEg23hLTw2QV3QO82Bmh11LW11QHjX6GJ3q_dGuua9CjHdTw2JWdoKsSo4clpo8j4x2ecPxYGGdMwovGZWcNd9oz7oo28yAqgHWdKWqea1buGNOK7dZ8r57OqEtG1QVxBeHyKjTIUuf8=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Charlott",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXE7vWCwe4jXmnv3ipGQD_6b53oVZuwNoAkPPUCYcH2wl62Jif7Ro4Ekringq96ufPJwKG4YA956LMmAh2DDuqE_ApxWQOmp9ISx44ECAbwQ10WvKsVn1ottb3xPgZ5nTURh78gQa3L3hV29tvZsmq4=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Ali",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaVCG2kZmD163fjd3AiM_N7mMEqzVPqz2H6AqCN_KcmJl1HFzfvLN18mtAThiX6Mq-w9g86eRjcR07WpfcSpW4eFFx0g0UVuX1hty_aYmJTg5d-Pizfh5IG_b0HoiE_ikynNaIeyXruezrs3unONaOHA=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Chobit",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaVY-avnnSOtgKKxmE0cXWeJVkN5P4vdcn0kCyb4o-mFyNbWqJpMYO_2IoJoG1VsPnc1__trXRJAvbEyfO6-rD0LfVNA1AGj0iSuzNnTVUjyY2gP1_Cd7qTNxn3zesq4lEjnVgR2b9rC6_LeYs3FJWfD=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "ani",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaWkIk1ddKUgSW0jCeUAnmQ9_5nfXpvIwl68r_bl8LsAEblnzGlSk1dy7aX27Rioix-yoohH5fE-UOrQoPlYekG6LO0ioZQhTJhswdDmyJZpCONoQsjh010jhVrSm6Ah3ttyWbf30GW3McuKuP1Na2Zt=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaUGygdGtsEtNz7f8Hk4ggxqZZZIw9oML9Xup3a7yX7otJoGozEvirlnQpEJMYiVhHzJy-duZ3plQnQHiaTYq6dZL9OoOzw0XBXkUIMW349J1JlMgL4rkumUPbotEH6TwBsCcPxN9Y32Wr9jdeI0F_XL=w420-h747-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaU4j1MizguytraPS9mq3iArzTLp0cRT3gH1-VktuxfHuXbiXXfN_5u9QjmOd8kRO7wxGSoDY0lQEL_EwvrC0T3IM2TLvaXwjQ6XDZCBd2oaCF80AWIMzgqfq0TH_fuYlqXpp_Sq5RPHjhrYsaEIkqJ7=w420-h747-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaW4Wtp5R_WgY7hpZpUrnoWs6MgS6YZNGmrUa5fCTUM8H-aFLG84mOAWcpFAJ5MdtfWr7Tf_pK93fu7VVxdrXRfUNRqn4h7DW67_Il6pTvko3s-A6NyMlJGLz0QnfUH9a9WPWgD3h_lW__id8QLmFhBj=w420-h747-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaWgw6vFFkB8YZoYGcAno1PMQ4fH_nyd_q29pIONifJVLxUDlymSL7d33ECZoyU89AWILKeDRLXE_0vrn3W1BC5byY60mamEUCV3Q_MFlJElF50UIP5vLZqylHUk0C4Yp1rDnXFnV5fgskLdOJ2VB92I=w420-h747-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaX3RxCDGweAhWX46auvhp6NTnCYZYTyWZ_sK5NdUAbNSvImGvaJpIc_A7kKXkut0cd3lHfM-3NaVKS4eVXk03NCPUxutbSYkawkK5gskbFaAf7qwd2rwTr5yK2qMx3wwXsjB6RSY-RjEH9pry7HiJ1z=w420-h747-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaUPrJm_30LR4wRU0CO_oGd8whU2DXShYvmCKnmpse9eCw5G7m9BnWjorSJnHcgLz0w0tcT4dXB9FdUtQ89jBZBGmkTZ8KJNwkUnBAdY5CsunLeK7D2m32cqR23-EJ8YOjJH548hEFwXLQrGc0xt_wYm=w420-h747-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaVlVXy0EQF8WeUrpLuvBgFyHlUjtVsFgQ0ugdDv5CM9rA5K9mvD3PKTIDBiQJmzQ6mzdBS53Wsy93QaTok1-Q3DnEHir1e81Xf-yZyb8gtzEe6JgGoFbD5wyyF7-bj3Yf3mM9xdu4HyBCvyZYuqJ_5o=w420-h747-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaVTtEE8o0zPpfqWxNQjUNdiwiced0Q-oHjwfIc6C6pyPYNafRmr7j4cm09SYYjIql8h7Ed6jaLm0AIFMcaiR6DIDaF_aO1P7MNuIs25aGlkSmHqcjKmBJ21aDmOftIuojOotmfMKwC2kHpmmtYOpIiy=w420-h747-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaUcHiKnnylSLuiGuoorfFdbHKRxZHGJyX0nhKD66YbbG7gmB3UI1sbadpztEROTyD28Yks-yRHyjGwsLdfndib6UPVMHITcK9TWjrjqvBmu4ShgRGsdL7ZTA1v0NmXgf-Kavwd_KpBAkjptI57YcrjW=w420-h747-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaX4TEBui4Wi4oZSuyQ0xEOp7lDUG-GZpo3vvvFD6B5f34fj1rQ6yQ8ePpaPIgNh00IJO2GC2aMK3jT0qJRdiHPxduBMortxQ-5EvwsaiNDk6ayxqIZ3ibXeNSzdmgeKvlQT3NDMHnp5lhSlyYWHVHXQ=w420-h747-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaWtV7VS_8QI6yuGO7sFP7MXVOBoNcwl5-iASHuAVqJ5Pyus7OXlSXj3jx-_giy2sdFUqtrt6BWfp0kojpIdGtICYtTtWW9ViJNVU3q6RidFBYqOdK2YxPE_uX1mI9CMA3Zl66dg6mjUwJIvl0jwYaNd=w420-h747-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXL4lLs5T0QUe30LXbc-RtKF3vhV6YKBFh6i3jTjCRoPOV3R8uVg_aHKNUVnXO2emzXiQWSLs2ja_bgv4eyhxy74Jsh0rvH7JsJHowzhRwnBovP-UaueOAT-vMF-0Vp6Rle4jwGph-FfMpeeXrMIx44=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaWo3ddeqgsnIB3kFVyjQRaxoqUpm2TaiwsQNy1EncRmJnSm2LPFXTmbCzKKPBWbXQFHINZhUwopntxpOscKCl1DmEDB-GXZR7YJ_Yh-tybDuDb-stdvxIzVeLQN9kMjEMc558TRFFDkOJXX1dOdccn8=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXrmzVn0Zgstgjzfwe4m8a9Z_FJoEzdx-r112UnJpqCJIQcvtM6FxQr3AE7_cS2g4cBvyD1caN87tQ3BAexz7vCGfepcqA7yE1MlPsCVt8fE2kUeUSyIvJrXfu8G0fG4J0gaT8bu3YoNT-cYZ81smmY=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXH82AF4Vj-ECZXGO_RoMTn8beEW4_34SpJgmlilWuxNNcAmE4bPIe-baVXfVIQ6_nr6ZIZFr_9hGzJWIXVi9yZerTgO380cU2IUvZ2WjDX6sVNBNxKjNdfdqrZXV1qguqdRW3RGUQiWguHTRKOeTpY=w426-h757-s-no?authuser=1",
    }

  ]
  constructor() {
    console.log('Servicio listo para usar');
   }
   getListarMujeres():Mujeres[]{
    return this.mujeress;
  }
}
