/*
* 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
* elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
* parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
* -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
* que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
* “Delta é negativo”.
*/

const inverterSinal = ( n ) => -1 * n
const raizQuadradaDe = ( n ) => Math.sqrt( n )
const elevarAoQuadrado = ( n ) => n * n

const delta = ( a, b, c ) => 
  elevarAoQuadrado( b ) - ( 4 * a * c )

const raizDe = ( delta ) => 
  ( delta >= 0 )
    ? raizQuadradaDe( delta )
    : false

const retornaRaizes = ( a, b, c ) => 
  [ ( inverterSinal( b ) + raizDe( delta( a, b, c ) ) ) / 2 * a,
    ( inverterSinal( b ) - raizDe( delta( a, b, c ) ) ) / 2 * a, ]

const calcularBhaskara = ( a, b, c ) => 
  ( delta( a, b, c ) >= 0 )
      ? retornaRaizes( a, b, c )
      : "Delta é negativo"

const resultado = calcularBhaskara( 3, -5, 12 )

console.log('resultado', resultado)

//Utilizado o modelo: https://gist.github.com/suissa/78d8a9ed5edf18b60ef5f12ba0a4d15c