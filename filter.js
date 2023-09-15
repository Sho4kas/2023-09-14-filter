// let originalNums = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// console.log(originalNums);

// originalNums.filter(function(element, index, array) {
//   console.log(element)
//   console.log(index)
//   console.log(array)
// })

// let filteredNums = originalNums.filter(function(num) {
//   return num > 5
// })
// console.log(filteredNums)

// let filteredNums2 = originalNums.filter(function(num) {
//   return num > 4 && num <= 8
// })
// console.log(filteredNums2)

// let filteredNums3 = originalNums.filter(function(num) {
//   return num > 4 && num <= 8 && num % 2 === 0
// })
// console.log(filteredNums3)

// let filteredNums4 = originalNums.filter(function(num) {
//   if (num > 4 && num <= 8 && num % 2 === 0) {
//     return true
//   } else {
//     return false
//   }
// })
// console.log(filteredNums4)


// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:
let originalNums = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

// 3.1. Gauti tik teigiamus skaičius.  
  let filteredNums1 = originalNums.filter(function(num) {
    return num > 0 
  })
  console.log(filteredNums1)
  
// 3.2. Gauti tik neigiamus skaičius.
let filteredNums2 = originalNums.filter(function(num) {
    return num < 0 
  })
  console.log(filteredNums2)

// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
let filteredNums3 = originalNums.filter(function(num) {
    return num % 2=== 0 
  })
  console.log(filteredNums3)

// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
let filteredNums4 = originalNums.filter(function(num) {
    return num % 3=== 0 
  })
  console.log(filteredNums4)

// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
let filteredNums5 = originalNums.filter(function(num) {
    return num % 5=== 0 
  })
  console.log(filteredNums5)

// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
let filteredNums6 = originalNums.filter(function(num) {
    return num % 11 === 0 
  })
  console.log(filteredNums6)

// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
let filteredNums7 = originalNums.filter(function(num) {
    return num % 31 === 0 
  })
  console.log(filteredNums7)

// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
let filteredNums8 = originalNums.filter(function(num) {
    return num % 2 === 0 && num % 3 === 0
  })
  console.log(filteredNums8)

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
let filteredNums9 = originalNums.filter(function(num) {
    return num % 3 === 0 && num % 7 === 0
  })
  console.log(filteredNums9)

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
let filteredNums10 = originalNums.filter(function(num) {
    return num % 5 === 0 && num % 9 === 0
  })
  console.log(filteredNums10)

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
let filteredNums11 = originalNums.filter(function(num) {
    return num % 5 === 0 && num % 11 === 0
  })
  console.log(filteredNums11)

// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
let filteredNums12 = originalNums.filter(function(num) {
    return num % 2 === 0 && num % 8 === 0 && num % 12 === 0
  })
  console.log(filteredNums12)

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
let filteredNums13 = originalNums.filter(function(num) {
    return num % 2 === 0 || num % 3 === 0
  })
  console.log(filteredNums13)

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
let filteredNums14 = originalNums.filter(function(num) {
    return num % 3 === 0 || num % 5 === 0
  })
  console.log(filteredNums14)

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
let filteredNums15 = originalNums.filter(function(num) {
    return num % 5 === 0 || num % 6 === 0
  })
  console.log(filteredNums15)

// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
let filteredNums16 = originalNums.filter(function(num) {
    return num % 7 === 0 || num % 8 === 0
  })
  console.log(filteredNums16)

// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
let filteredNums17 = originalNums.filter(function(num) {
    return num % 9 === 0 || num % 13 === 0
  })
  console.log(filteredNums17)

// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
let filteredNums18 = originalNums.filter(function(num) {
    return num % 2 === 0 || num % 3 === 0 || num % 5 === 0
  })
  console.log(filteredNums18)

// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
let filteredNums19 = originalNums.filter(function(num) {
    return num % 5 === 0 || num % 7 === 0 || num % 9 === 0
  })
  console.log(filteredNums19)

// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
let filteredNums20 = originalNums.filter(function(num) {
    return num % 7 === 0 || num % 8 === 0 || num % 11 === 0
  })
  console.log(filteredNums20)

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
let filteredNums21 = originalNums.filter(function(num) {
    return num % 9 === 0 || num % 12 === 0 || num % 13 === 0
  })
  console.log(filteredNums21)

// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
let filteredNums22 = originalNums.filter(function(num) {
    return num > 100
  })
  console.log(filteredNums22)

// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
let filteredNums23 = originalNums.filter(function(num) {
    return num > 555
  })
  console.log(filteredNums23)

// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
let filteredNums24 = originalNums.filter(function(num) {
    return num >= 888
  })
  console.log(filteredNums24)

// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
let filteredNums25 = originalNums.filter(function(num) {
    return num >= 6789
  })
  console.log(filteredNums25)

// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
let filteredNums26 = originalNums.filter(function(num) {
    return num < 50
  })
  console.log(filteredNums26)

// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
let filteredNums27 = originalNums.filter(function(num) {
    return num < 1000
  })
  console.log(filteredNums27)

// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
let filteredNums28 = originalNums.filter(function(num) {
    return num <= - 1
  })
  console.log(filteredNums28)

// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
let filteredNums29 = originalNums.filter(function(num) {
    return num <= -5564
  })
  console.log(filteredNums29)

// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
let filteredNums30 = originalNums.filter(function(num) {
    return num < 1000 && num > 500
  })
  console.log(filteredNums30)

// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
let filteredNums31 = originalNums.filter(function(num) {
    return num < 100 && num > 0
  })
  console.log(filteredNums31)

// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
let filteredNums32 = originalNums.filter(function(num) {
    return num < 0 && num > -50
  })
  console.log(filteredNums32)

// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
let filteredNums33 = originalNums.filter(function(num) {
    return num <= 0 && num > -100
  })
  console.log(filteredNums33)

// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
let filteredNums34 = originalNums.filter(function(num) {
    return num >= 0 && num < 55
  })
  console.log(filteredNums34)

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
let filteredNums35 = originalNums.filter(function(num) {
    return num >= 444 && num <= 654
  })
  console.log(filteredNums35)

// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
let filteredNums36 = originalNums.filter(function(num) {
    return num % 2 === 0 && num > 0
  })
  console.log(filteredNums36)

// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
let filteredNums37 = originalNums.filter(function(num) {
    return num % 3 === 0 && num > 0
  })
  console.log(filteredNums37)

// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
let filteredNums38 = originalNums.filter(function(num) {
    return num % 4 === 0 && num > 0
  })
  console.log(filteredNums38)

// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
let filteredNums39 = originalNums.filter(function(num) {
    return num % 111 === 0 && num < 0
  })
  console.log(filteredNums39)

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
let filteredNums40 = originalNums.filter(function(num) {
    return num % 2 === 0 && num > 500
  })
  console.log(filteredNums40)

// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
let filteredNums41 = originalNums.filter(function(num) {
    return num % 3 === 0 && num > 1000
  })
  console.log(filteredNums41)

// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
let filteredNums42 = originalNums.filter(function(num) {
    return num % 9 === 0 && num < 1000
  })
  console.log(filteredNums42)

// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
let filteredNums43 = originalNums.filter(function(num) {
    return num % 2 === 0 && num < 500
  })
  console.log(filteredNums43)

// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
let filteredNums44 = originalNums.filter(function(num) {
    return num % 3 === 0 && num >= 33
  })
  console.log(filteredNums44)

// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
let filteredNums45 = originalNums.filter(function(num) {
    return  num >= 444 && num % 12 === 0
  })
  console.log(filteredNums45)

// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
let filteredNums46 = originalNums.filter(function(num) {
    return  num <= 155 && num % 5 === 0
  })
  console.log(filteredNums46)

// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
let filteredNums47 = originalNums.filter(function(num) {
    return  num <= -333 && num % 9 === 0
  })
  console.log(filteredNums47)

// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
let filteredNums48 = originalNums.filter(function(num) {
    return  num > 100 && num < 500 && num % 5 === 0
  })
  console.log(filteredNums48)

// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
let filteredNums49 = originalNums.filter(function(num) {
    return  num >= 888 && num < 1000 && num % 2 === 0
  })
  console.log(filteredNums49)

// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
let filteredNums50 = originalNums.filter(function(num) {
    return  num <= 888 && num >= -333 && num % 3 === 0  && num !== 0
  })
  console.log(filteredNums50)

// 3.51. Gauti tik skaičius.
let filteredNums51 = originalNums.filter(function(num) {
    return !isNaN(num)
  })
  console.log(filteredNums51)

// 3.52. Gauti tik tekstus (string).
let filteredNums52 = originalNums.filter(function(num) {
    return isNaN(num)
  })
  console.log(filteredNums52)

// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
let filteredNums53 = originalNums.filter(function(num) {
    return isNaN(num) && num.length > 5
  })
  console.log(filteredNums53)

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
let filteredNums54 = originalNums.filter(function(num) {
    return isNaN(num) && num.length <= 5
  })
  console.log(filteredNums54)

// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
let filteredNums55 = originalNums.filter(function(num) {
    return isNaN(num) && num.length < 7
  })
  console.log(filteredNums55)

// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
let filteredNums56 = originalNums.filter(function(num) {
    return isNaN(num) && num.includes('t')
  })
  console.log(filteredNums56)

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
let filteredNums57 = originalNums.filter(function(num) {
    return isNaN(num) && num.includes('y')
  })
  console.log(filteredNums57)

// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
let filteredNums58 = originalNums.filter(function(num) {
    return isNaN(num) && num.includes('a') || isNaN(num) && num.includes('e') 
  })
  console.log(filteredNums58)

// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
let filteredNums59 = originalNums.filter(function(num) {
    return isNaN(num) && num.includes('t') && isNaN(num) && num.includes('i') 
  })
  console.log(filteredNums59)

// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
let filteredNums60 = originalNums.filter(function(num) {
    return isNaN(num) && num.includes('t') && isNaN(num) && !num.includes('k') 
  })
  console.log(filteredNums60)

// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
let filteredNums61 = originalNums.filter(function(num) {
    return isNaN(num) && num.includes('a') && isNaN(num) && !num.includes('s') 
  })
  console.log(filteredNums61)

// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
let filteredNums62 = originalNums.filter(function(num) {
    return isNaN(num) && num.includes('t>1')
  })
  console.log(filteredNums62)

// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
let filteredNums63 = originalNums.filter(function(num) {
    return isNaN(num) && num.includes('st') 
  })
  console.log(filteredNums63)

// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
let filteredNums64 = originalNums.filter(function(num) {
    return isNaN(num) && num.includes('nd') 
  })
  console.log(filteredNums64)

// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
let filteredNums65 = originalNums.filter(function(num) {
    return isNaN(num) && !num.includes('s') 
  })
  console.log(filteredNums65)

// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
let filteredNums66 = originalNums.filter(function(num) {
    return isNaN(num) && !num.includes('t') 
  })
  console.log(filteredNums66)

// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
let filteredNums67 = originalNums.filter(function(num) {
    return isNaN(num) && !num.includes('r') && isNaN(num) && !num.includes('l') 
  })
  console.log(filteredNums67)

// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
let filteredNums68 = originalNums.filter(function(num) {
    return isNaN(num) && num.startsWith('!isNaN')  
  })
  console.log(filteredNums68)

// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
let filteredNums69 = originalNums.filter(function(num) {
    return isNaN(num) && num.startsWith('s')  
  })
  console.log(filteredNums69)

// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
let filteredNums70 = originalNums.filter(function(num) {
    return isNaN(num) && num.startsWith('o')  
  })
  console.log(filteredNums70)

// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
let filteredNums71 = originalNums.filter(function(num) {
    return isNaN(num) && num.endsWith('d')  
  })
  console.log(filteredNums71)

// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
let filteredNums711 = originalNums.filter(function(num) {
    return isNaN(num) && num.endsWith('s')  
  })
  console.log(filteredNums711)

// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
let filteredNums72 = originalNums.filter(function(num) {
    return isNaN(num) && num.includes('o') && num.length > 4 
  })
  console.log(filteredNums72)

// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let filteredNums73 = originalNums.filter(function(num) {
    return isNaN(num) && num.includes('a') && num.length >= 5
  })
  console.log(filteredNums73)

// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let filteredNums74 = originalNums.filter(function(num) {
    return isNaN(num) && num.includes('a') && num.length >= 5
  })
  console.log(filteredNums74)

// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
// let filteredNums75 = originalNums.filter(function(num) {
//     return isNaN(num) && num.length % 2 == 0
//   })
//   console.log(filteredNums75)

// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
let filteredNums76 = originalNums.filter(function(num) {
    return isNaN(num) && num.length % 2 !== 0 && num.includes('s')
  })
  console.log(filteredNums76)

// 3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.
let filteredNums77 = originalNums.filter(function(num) {
    return isNaN(num) && num.charAt(3) === 'a'
  })
    console.log(filteredNums77);


// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
let filteredNums78 = originalNums.filter(function(num) {
    return typeof num === "string" && num.charAt(4) === "l"
  })
    console.log(filteredNums78);

// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
let filteredNums79 = originalNums.filter(function(num) {
    return typeof num === "string" && num.length >= 4 && num.charAt(5) == "t"
  })
    console.log(filteredNums79);

// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.