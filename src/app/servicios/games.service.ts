import { Injectable } from '@angular/core';
import { Games } from '../models/gamess.interfaz';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private gamess:Games[] = [
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaW_nSUwPhCKXY_u8vDrRYdqQpADsDFWbGw8ob7Qw9fHmdniNFFjm85z3-8TPmfKhpBMI1mYeu0hxf-yY3rHi5rsRR8S0q7qWZYmGloyJWCLo4bDyrWtR8MXMlRdGiRMi6Jnj3h5zZvYCLGgn7698dRg=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaVZl3ZyTM9w2UnqIzoaQj5DmpeAJOODxhf9GKMp0V7anWwqHHNdl6oQio-RowsdMYOmw8GpYXHGFJmU0tFNOEz7M5htxd6A5aws8FvXGrS0dG_UM-g9Gm5TG1emIySPz-4MJWWYuZpql-7vz0JLexOq=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaWU77ib1tPNQVNDeCGpWJJaqRMLninmM3qjDsQF8kxKIHruWP0oZz78UjEpULaDqZ3ltgBPshSgGUm98eMkvy5p2-7AsijF6w3kE8Wk0MLHuDbbUVNAMYEW3Hyc3L5LhESOMI3wNrmv-6Rmu1a_4L3a=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaWVtJkxFq8x4OUEPtUUmDAf5k7CjRi3xIqIoGnEBq0qCHf1RZvRib1vEoZPRpGTxiJagmQZOj6AeidLaKntFduDu8IPLA-0zRKA8ZgLJ_g_1B0an_8ANG53kEj0aHtwOEEv9mQ01TCIg9-oeldwiGkk=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaVCjB-dwcVwh1VwU8dqSZFqvrTSWnFvsgjGe_RQ8EQMmIVQu2Ie6jXxFzEvZQ61lzYaeD8-b-juD2ldbtIA4Yy6ko6Zd8vT0O_Ahbl4OWCNmJlTnobsvegZ6_NPYfTkFAQXgqxwrB7F5B87J8znGZe7=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXwi5BoWOzSZl57NSsuWmQoyBU5GVO6hDxsnwtpC1U7_YWj9iCEIx6DkXDecM3G7VqTpWuoZwP3uy2XZo_Hz1542K1pE8c96qGxVZW4ZW34e4L4mo1nfIruAhqxENSinAMyHyGDHiveRw1fKfe6ORMT=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaWA6Mrje5hzUPH5vLeLqoF0A0FNzIb8GokE01_nm8AwYN_YATO2w6sOiWlAKgzWk9_g4peF2hhWEBAQ1jKFenaOA1bH7Gx3E6FbgZjvd5KjoLVt29unGGM6M3R7vBnpJ47n-3iWvrgGxg8J_oT7iZOp=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXFaIQ7ImqKqlasIrMBzFQkBUvkOyZ4kFT9_f8PPj79MDfS3sn3jJg8NYpclSH8iuW9E7gSj_S4I-BfZlkZlUePDICHOAhhHET9db_TUhU0CNHi_W5JI_sglyQM6-hDumKBZUHu70Z_mdAFxJ93akOK=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXMNK_atcwxCE6RrJQdW5uyOcJ5hakYp1LCt40jJrnGeCC4PcuMA5c50NB3crIuSvYOao6eNSclRArMXXsTf8RxkvY56DKbegEhvd6gaBNkwYnQXD3YQCofw6u-C9YTCfFtFLM_MAiP4PCKQRzlhWjh=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXgsykXgyqPJbXFE6OTiKGokeFlXULMjE1pJNOA112jkOtbRJcsDbZXIU4EsRWgjcCAUe8q5JHO9vnHVhL9eXRMDVs6qA2x7H0XWhXISntOcmkuADn10hjQS4n75hVYLUCEIJ43kTElz6YuGcMd2WhV=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaUhrvIAI4YhfQg3VQqmWbT_2tElJkid6twK7NcP2Q8XsQUEc8-wCTFoUJZJniy7IDnN8tEoejY0JyNe4oZN21gib4MtdBGTMPq3cMk3FCCQxobp3lZ_mR5XGWe0YAil6BtL-txWKs4ROoRe_xpYjk77=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXKeOtrxprVuhQZIqPFeG9tT3j3210nO1duEBQVIuIJ8a9Z5MdNdH7N79lDQe1z5kbe6Fiuzlq2EVcZ9EDJy2lYmYV_Szx5e_TcdCnxo8Pbn6nvqMropWMpaXCLRXhe2TMmU5JWVV470h2y7XdtlGqG=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaUaOtjW1QKUopve8Jdnnh-c8F9rD6km9N4dTJVfK3M7nWCAFUFyAUSc9ckczsiywC6-LWYBHVNpkLLXHxpGBpBtPPGzA--FbWyz5QHkb6Nmb_VK7ohkgYP6xI3KtI0v72WLqYivN4PFE64ibPzE8uY9=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaVrby_jfszl6_n7YX8Cefkc85EOsuXwDQm70IWrTs1mFh_3LJnC1_omXFecZffls4UAZTlshVZ9JnmbMe5mR9EFvS7u0e9MT4uibey62hqHg0yC65ttcyy8gT_yNuREMLWiEQ2FRynihdxwP0eOPutV=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXQbb03ElHpyo0UKQEMVPeS55TcR8EHyS6bhYsNMaMm615FAomSnUzceDB81nEYyXcaJAGG1WW8EqLcemQlV1JiWPMCNkTnhdkx0yONCQm7Zd3ynh7Ekn7EcpMh44R6ULLk5ptxw-T_A8zFC5MqWfb5=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaUC8o5Vu0h-iLUJuPto-pZfquUlEgz4KYvFBJYrK7mMjG-Cl1dpSQfZHHTmCja6wrNGeH9eHp1JXQhCOeoD4h0b_IxP94o0jxpngVUm1CbQP86J0_STzwkDeha-pfonD-nHL1LGEzph41zTDOzIbz_A=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXuEBuRBmrGyeBkpfuQ9r5dlq4xW9Sz20VhTBV6MmfoztszRunf03jXzaa6o7ikYwQl6Dak5ErpONygfvYXHsyrrA10feuE538pUYfW9j0XbEWTble3AiGaPcLmV4TX9g2KyitGkPPbqmblOuw3R0ad=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXtgQxWpGkTArDa398LIRrAuooGlnITp-akiDoKkHQcdsYB_E_77oeNJrgpXgKWtBwQavFyl0VLoqg_0YdbaJeQdSkFv9lIEMKBFVJbgbkxHrARvGekLlACRNZqxG83gvzDRJOmG0ur4YPmwoqbcqQU=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXezJwHoesf1zjcVzC10ZeEDA_qAgvAtCO4MTlVfcowCg9_24JSXQPtCdRiXv6mcEisCJrEUynGzd2ycmtcN_ebyzHPdu9l6Kw_0Y6xDiWh7kCEBOtt8a4yKOaLjQI6_HjFSYDaEA4VnEU7XVrcaTp9=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaV3nWaRm8Rck1Vnnz1tj1I3XVQ1X9Xz5z7JtLS5cseYis0OtVxG6ofrSbU2uM2W1bpfEFN6pJocp3_PXAusHA2JRg5yU-0bul83WJOZ36-vnmk4E5ATr4px9XyTG3Rvoa0BkwAPT7FS0gG_LXjWRQfi=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaXGDtmQnWi4RV_LQK5fe20cx_7pOeo9XVOwHrDZjeAU4WXg39PYXZBu8VoakaiC_cVzepwNxjBvCh092YIeVVl9TKILyOCvTdMFAR44bBpKDKF9ch8P748jkEdFYLR_YYkLS4Do2DbXigz2_fjYHbHC=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaX_MF7c3D7CsThAUCnKKbo8_HTVKmM7CIR4LhZQoR7ZtCEKqrTefoFTALIlwD4rO0VuJ6LhkRe1LmJr1bMd4bi4aAqODRdgfnZaKpn4Mkm8Hzfge6g6mh3NS4_HNOP_C4PqLD9g85-pgdUiBZm1qtqJ=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaU7rJ_tNyAszakgF0a18cRa4upZmqZLsvjRKSKGeeF7tVFP1BWWC25PobwgZTz17RyUknao1w4Vpx6CYGZFlfzprAzzObl8qVbOIJdxQ8wgRLVYFl7tqR4xd2-Y5Vvy0cX2ixND-MRV7rzNBVW6z0-B=w426-h757-s-no?authuser=1",
    },
    {
      nombre: "Merlin",
      img: "https://lh3.googleusercontent.com/pw/AJFCJaX_dfMrs5zEKTP4OCj0FJMiVT4DdRS6Tv7VMoGWpSb-kOqhzUegPXqK4melezM913nZDr3agQBJF9yVJ07e23zG3Wn5tIHO_B-_rcvPU-SmOkB_Hjz6VehKXe4rcCX_rYJ4PX3uCdzm7NGL07cI9NiQ=w426-h757-s-no?authuser=1",
    }
  ]

  constructor() { 
    console.log('Servicio listo para usar');
  }
  getListarGames():Games[]{
    return this.gamess;
  }
}
