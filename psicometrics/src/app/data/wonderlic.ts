const data = [{
    question:{id:1, text:'1. El último mes del año es:'}, answers: [{id:1, name:'Enero'}, {id:2, name:'Octubre'}, {id:3, name:'Agosto'}, {id:4, name:'Diciembre'}, {id:5, name:'Noviembre'}], image:'0'
}, {
    question: { id:2, text:'2. CAPTURAR es lo contrario de:'}, answers: [{id:1, name:'Colocar'}, {id:2, name:'Libertad'}, {id:3, name:'Arriesgar'}, {id:4, name:'Aventurar'}, {id:5, name:'Desagradar'}], image:'0'
}, {
    question: { id:3, text:'3. Todas las palabras abajo citadas se parecen entre sí. ¿Cuál es la que menos parecido tiene con la otra?'}, answers: [{id:1, name:'Enero'}, {id:2, name:'Agosto'}, {id:3, name:'Miércoles'}, {id:4, name:'Noviembre'}, {id:5, name:'Diciembre'}], image:'0'
},{
    question: { id:4, text:'4. Conteste Sí o No: R.P.I significa “ruegue a Dios por el”'}, answers: [{id:1, name:'Si'}, {id:2, name:'No'}], image:'0'
},
{
    question: { id:5, text:'5. En las siguientes palabras: ¿Cuál es diferente de las otras?'}, answers: [{id:1, name:'Tropa'}, {id:2, name:'Grupo'}, {id:3, name:'Participar'}, {id:4, name:'Jauría'}, {id:5, name:'Cuadrilla'}], image:'0'
}, {
    question: { id:6, text:'6. USUAL es lo contrario de:'}, answers: [{id:1, name:'Raro'}, {id:2, name:'Regular'}, {id:3, name:'Constante'}, {id:4, name:'Habitual'}, {id:5, name:'Siempre'}], image:'0'
}, {
        question: { id:7, text:'7. ¿Con cuál figura puede hacerse dos triángulos equiláteros ?'}, answers: [{id:1, name:'1'}, {id:2, name:'2'}, {id:3, name:'3'},{id:4, name:'4'}, {id:5, name:'5'}], image:'../../assets/img/equi.JPG'   
}, {
    question: { id:8, text:'8. Ve la fila de números abajo indicados. ¿Cuál número debe venir después? '}, answers: [{id:1, name:'1/2'}, {id:2, name:'1/4'}, {id:3, name:'1/8'}], image:'../../assets/img/numeros.JPG'   
}, {
    question: { id:9, text:'9. Cliente – Consumidor, estas palabras tienen:'}, answers: [{id:1, name:'Significado Igual'}, {id:2, name:'Significado Contradictorio'}, {id:3, name:'No son iguales ni contradictorios'}], image:'0' 
}, {
    question: { id:10, text:'10. ¿Cuál de las palabras citadas abajo está relacionada con oler, como masticar está condientes?'}, answers: [{id:1, name:'Dulce'}, {id:2, name:'Pestilencia'}, {id:3, name:'Olor'}, {id:4, name:'Nariz'}, {id:5, name:'Limpio'}], image:'0' 
}, {
    question: { id:11, text:'11. VERANO es lo contrario de:'}, answers: [{id:1, name:'Vacaciones'}, {id:2, name:'Otoño'}, {id:3, name:'Invierno'}, {id:4, name:'Primavera'}, {id:5, name:'Nieve'}], image:'0' 
}, {
    question: { id:12, text:'12. Un avión vuela 300 metros en ½ segundo. A esta misma velocidad, ¿Cuántos metros recorrerá en 10 segundos?'}, answers: [{id:1, name:'number'}], image:'0' 
}, {
    question: { id:13, text:'13. Estos niños son normales. Todos los niños normales son activos. Estos niños son activos. Suponga que las dos primeras afirmaciones son ciertas. La última es:'}, answers: [{id:1, name:'Cierta'}, {id:2, name:'Falsa'}, {id:3, name:'No muy cierta'}], image:'0' 
}, {
    question: { id:14, text:'14. REMOTO es lo contrario de:'}, answers: [{id:1, name:'Aislado'}, {id:2, name:'Cercano'}, {id:3, name:'Lejano'}, {id:4, name:'Precipitado'}, {id:5, name:'Exacto'}], image:'0' 
}, {
    question: { id:15, text:'15. Se venden limones a 3 por 10 centavos. ¿Cuánto costara una docena y media?'}, answers: [{id:1, name:'number'}], image:'0' 
}, {
    question: { id:16, text:'16. ¿Cuántas de las 5 cantidades abajo indicadas son identicas una a la otra?'}, answers: [{id:1, name:'number'}], image:'../../assets/img/16.JPG' 
}, {
    question: { id:17, text:'17. Imagine usted que acomoda las siguientes palabras de modo que hagan una afirmación cierta, luego escriba la última letra de la última palabra como respuesta a este problema. Siempre un verbo oración una tiene.'}, answers: [{id:1, name:'string'}], image:'0' 
},{
    question: { id:18, text:'18. Un niño de 5 años tiene una hermana que es de doble edad que él. Cuando el niño tenga 8 años, ¿Cuál será la edad de su hermana?.'}, answers: [{id:1, name:'number'}], image:'0' 
}, {
    question: { id:19, text:'19. BAZO - VASO, estas palabras tienen:'}, answers: [{id:1, name:'Significado Igual'}, {id:2, name:'Significado Contradictorio'}, {id:3, name:'No son iguales ni contradictorias'}], image:'0' 
}, {
    question: { id:20, text:'20. Juan tiene la misma edad que María. María es menos que Guillermo. Juan es más joven que Guillermo. Suponga que las dos primeras afirmaciones son verdaderas, la última es:'}, answers: [{id:1, name:'Verdadera'}, {id:2, name:'Falsa'}, {id:3, name:'No muy cierta'}], image:'0' 
},{
    question: { id:21, text:'21. Un negociante compro varios coches por $4000°°, los vendió en $500°°, ganando $50°° en cada coche. ¿Cuántos coches compro?.'}, answers: [{id:1, name:'number'}], image:'0' 
}, {
    question: { id:22, text:'22. Suponga que arregla las siguientes palabras de manera que haga una oración completa, seleccione si el razonamiento es verdadero o falso: Huevos ponen todos los pollos'}, answers: [{id:1, name:'Verdadero'}, {id:2, name:'Falso'}], image:'0' 
},  {
    question: { id:23, text:'23. Dos de los siguientes proverbios tienen igual significado. Seleccione cuales son.'}, answers: [{id:1, name:'1 y 4'}, {id:2, name:'2 y 5'}, {id:3, name:'1 y 3'}, {id:4, name:'2 y 4'}], image:'../../assets/img/23.JPG' 
}, {
    question: { id:24, text:'24. Un reloj se atrasa 1 minuto 18 segundos en 39 días. ¿Cuántos segundos se atrasa por día?.'}, answers: [{id:1, name:'number'}], image:'0' 
}, {
    question: { id:25, text:'25. HASTA - ASTA, estas palabras tienen:'}, answers: [{id:1, name:'Significado Igual'}, {id:2, name:'Significado Contradictorio'}, {id:3, name:'No son iguales ni contradictorias'}], image:'0' 
}, {
    question: { id:26, text:'26. Todos los Cuáqueros son pacifistas. Algunas personas en este cuarto son cuáqueros. Algunas personas en este cuarto son pacifistas. Suponga que las dos primeras afirmaciones son correctas, la última es:'}, answers: [{id:1, name:'Verdadera'}, {id:2, name:'Falsa'}, {id:3, name:'No muy cierta'}], image:'0' 
}, {
    question: { id:27, text:'27. EN 30 días un niño ahorró $1.°° ¿Cuál fue su promedio de ahorro diario?'}, answers: [{id:1, name:'3 1/4'}, {id:2, name:'2/3'}, {id:3, name:'4'}], image:'0' 
}, {
    question: { id:28, text:'28. INGENIOSO - INGENUO, estas palabras tienen:'}, answers: [{id:1, name:'Significado Igual'}, {id:2, name:'Significado Contradictorio'}, {id:3, name:'No son iguales ni contradictorias'}], image:'0' 
}, {
    question: { id:29, text:'29. 2 hombres pescaron 26 pescados: "X" pesco 5 veces lo que "Y". ¿Cuántos pesco "Y"?.'}, answers: [{id:1, name:'number'}], image:'0' 
}, {
    question: { id:30, text:'30. Un depósito rectangular, completamente lleno, contiene 800 metros cúbicos de granos. Si el depósito tiene 8 metros de ancho y 10 metros de largo. ¿Cuántos metros de profundidad tiene?'}, answers: [{id:1, name:'number'}], image:'0' 
}, {
    question: { id:31, text:'31. Uno de los siguientes números de la siguiente serie no encaja en la serie. ¿Cuál debe de estar en su lugar?'}, answers: [{id:1, name:'1/4'}, {id:2, name:'1/10'}, {id:3, name:'1/9'}], image:'../../assets/img/31.JPG' 
}, {
    question: { id:32, text:'32. A.C significa: "Antes de Cristo"'}, answers: [{id:1, name:'Si'}, {id:2, name:'No'}], image:'0' 
}, {
    question: { id:33, text:'33. CREYENTE - CREDÚLO, estas palabras tienen:'}, answers: [{id:1, name:'Significado Igual'}, {id:2, name:'Significado Contradictorio'}, {id:3, name:'No son iguales ni contradictorias'}], image:'0' 
}, {
    question: { id:34, text:'34. Una falda necesita 2 ¼ metros de tela. ¿Cuántas faldas pueden hacerse de 45 metros?'}, answers: [{id:1, name:'number'}], image:'0' 
}, {
    question: { id:35, text:'35. Un reloj estaba exacto al medio día del lunes. A las 2 p.m del Miércoles, tenía un retraso de 25 segundos. A la misma velocidad ¿Cuánto se retrasó en media hora?'}, answers: [{id:1, name:'1/4 de segundo'}, {id:2, name:'30 segundos'}, {id:3, name:'1/2 de segundo'}, {id:4, name:'1 segundo'}], image:'0' 
}, {
    question: { id:36, text:'36. Nuestro equipo de béisbol perdió 9 juegos en esta temporada. Esto fue 3/8 de lo que jugaron. ¿Cuántos juegos jugaron en esta temporada?'}, answers: [{id:1, name:'number'}], image:'0' 
}, {
    question: { id:37, text:'37. ¿Cuál es el número que le sigue a los siguientes? 1 0.5 0.25 0.125'}, answers: [{id:1, name:'number'}], image:'0' 
}, {
    question: { id:38, text:'38. Esta es una figura geométrica puede ser dividida en dos partes por una línea recta, y estas pueden unirse de manera que formen un cuadrado perfecto. Trace mentalmente la línea uniendo los números y luego escriba esos números.'}, answers: [{id:1, name:'5 y 4'}, {id:2, name:'1 y 4'}, {id:3, name:'2 y 5'}, {id:4, name:'6 y 9'}], image:'../../assets/img/38.JPG' 
}, {
    question: { id:39, text:'39. Escoba nueva barre mejor. Los zapatos viejos son más comodos. Los significados de las oraciones anteriores son:'}, answers: [{id:1, name:'Significado Igual'}, {id:2, name:'Significado Contradictorio'}, {id:3, name:'No son iguales ni contradictorias'}], image:'0' 
}, {
    question: { id:40, text:'40. De los 5 nombres citados, 2 tienen el mismo significado, ¿En que línea se encuentran?'}, answers: [{id:1, name:'number'}], image:'../../assets/img/40.JPG' 
}, {
    question: { id:41, text:'41. Dos de los Proverbios abajo citados tienen igual significado, ¿Cuáles son?.'}, answers: [{id:1, name:'5 y 4'}, {id:2, name:'1 y 4'}, {id:3, name:'2 y 5'}, {id:4, name:'3 y 7'}], image:'../../assets/img/41.JPG' 
}, {
    question: { id:42, text:'42. Esta figura geométrica puede dividirse en dos partes, de tal manera que al unirla de cierto modo hace un cuadro perfecto. Dibuje dicha línea mentalmente juntando dos de los números, después seleccione los números que den el resultado correcto.'}, answers: [{id:1, name:'9 y 1'}, {id:2, name:'1 y 4'}, {id:3, name:'3 y 22'}, {id:4, name:'8 y 3'}], image:'../../assets/img/42.JPG' 
}, {
    question: { id:43, text:'43. ¿Cuál de los numeros de este grupo representa la cantidad más pequeña? 10 1 0.99 0.33 11'}, answers: [{id:1, name:'number'}], image:'0' 
}, {
    question: { id:44, text:'44. Nadie se arrepintió jamás de su honestidad. La honestidad se elogia pero no se apaga. Los significados de las siguientes oraciones son:'}, answers: [{id:1, name:'Significado Igual'}, {id:2, name:'Significado Contradictorio'}, {id:3, name:'No son iguales ni contradictorias'}], image:'0' 
}, {
    question: { id:45, text:'45. Un vendedor compra un cajón que contiene 12 docenas de Manzanas a $1.80 sabe que dos docenas se pudrirán antes que las venda ¿A que precio por docena deberá vender las buenas para ganar un tercio del costo total? '}, answers: [{id:1, name:'50 centavos'}, {id:2, name:'24 centavos'}, {id:3, name:'30 centavos'}], image:'0' 
}, {
    question: { id:46, text:'46. En las siguientes palabras, ¿Cuál es diferente a las demás?.'}, answers: [{id:1, name:'Colonia'}, {id:2, name:'Compañero'}, {id:3, name:'Bandada'}, {id:4, name:'Manojo'}, {id:5, name:'Constelación'}], image:'0' 
}, {
    question: { id:47, text:'47. Algunos grandes hombres son ridiculizados. Yo he sido ridiculizado. Yo soy un gran hombre. Suponga que dos de las primeras afirmaciones son ciertas, La última es:'}, answers: [{id:1, name:'Verdadera'}, {id:2, name:'Falsa'}, {id:3, name:'Dudoso'}], image:'0' 
}, {
    question: { id:48, text:'48. Tres hombres forman una sociedad y acuerdan dividir las ganancias por igual. “X” invierte $4500.ºº, “Y” invierte $3500.ºº y “Z” invierte $2000.ºº. Si las ganancias son de $1500.ºº ¿Cuánto menos recibe “X” de lo que debería haber recibido, si las ganancias hubieran sido proporcionales a los que invirtió cada uno?'}, answers: [{id:1, name:'number'}], image:'0' 
}, {
    question: { id:49, text:'49. Cuatro de las siguientes 5 partes pueden colocarse juntas de tal manera que formen un triangulo ¿Cuáles cuatro son?'}, answers: [{id:1, name:'1,2,4,5'}, {id:2, name:'1,3,4,5'}, {id:3, name:'1,2,3,4'}], image:'../../assets/img/49.JPG' 
}, {
    question: { id:50, text:'50. Al imprimir un artículo de 30000 palabras, el impresor decide usar dos tamaños de tipos, usando el tipo más grande, una página contiene 1,200 palabras. Usando el tipo chico, unapágina contiene 1,500 palabras. El artículo deberá repartirse en 22 hojas de una revista. ¿Cuántas páginas deberán usarse para el tipo chico??'}, answers: [{id:1, name:'number'}], image:'0' 
}]

export default data;