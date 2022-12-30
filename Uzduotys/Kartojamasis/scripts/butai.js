/*Pateikiamas 9 aukštų daugiabučio parduodamų butų sąrašas.
Kiekviename laiptinės aukšte yra po 3 butus.
Daugiabučio laiptinių skaičius yra mažesnis, nei 20.

Duomenys tokie: buto numeris, bendras plotas, kambarių skaičius, pardavimo kaina, telefono numeris. Duomenys talpinami faile 'duomenys.json'. (reiktų bent 10 butų)

Suraskite butus, kurie turi nurodytą kambarių skaičių, yra nurodytame aukšte ir kurių kaina neviršija nurodytos kainos, ir juos išveskite į ekraną/konsolę/failą 'atsakymas.json'.

Aukšto numeris nurodomas intervalu [nuo, iki]. Aukšto numeris išskaičiuojamas iš buto numerio. Butų numeriai yra iš aibės [1, laiptinių skaičius daugintas iš 27].

Pvz.:
  Duomenys:
    butoNumeris:5, bendrasPlotas:54.2, kambariuSkaicius:3, pardavimoKaina:67000, telefonoNumeris:866666666
    butoNumeris:21, bendrasPlotas:46, kambariuSkaicius:2, pardavimoKaina:54000, telefonoNumeris:867776666
    butoNumeris:50, bendrasPlotas:78.9, kambariuSkaicius:4, pardavimoKaina:98500, telefonoNumeris:866667777
  Nurodymai:
    kambariuSkaicius:2, aukstoNumerisNuo:5, aukstoNumerisIki:7, kainaIki:99999
  Atsakymas:
    butoNumeris:21, bendrasPlotas:46, kambariuSkaicius:2, pardavimoKaina:54000, telefonoNumeris:867776666
    */