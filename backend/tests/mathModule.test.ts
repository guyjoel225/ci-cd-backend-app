import {describe, expect, it} from 'vitest';

import {Operation} from'../src/mathModule.js'


describe('Foonction Mathematique de calcule',()=>{
   const mathOpera = new Operation();
  
   it.each([
    {nbre1: 20, nbre2: 10, result: 30},
    {nbre1: 30, nbre2: 30, result: 15},
    {nbre1: 18, nbre2: 25, result: 43},
   ] satisfies {nbre1:number, nbre2: number, result: number} [])("somme: $nbre1 + $nbre2 = $result", ({nbre1, nbre2, result})=>{

     expect(mathOpera.addition(nbre1, nbre2)).toBe(result);
   });

   it.each([
    {nbre1: 30, nbre2: 40, result: -10},
    {nbre1: 50, nbre2: 10, result: 40},
    {nbre1: 40, nbre2: 16, result: 24}
   ] satisfies {nbre1: number, nbre2: number, result: number} [])("soustration: $nbre1 - $nbre2 = $result", ({nbre1, nbre2, result})=>{

    expect(mathOpera.soustration(nbre1, nbre2)).toBe(result)
   });

   it.each([
    {nbre1:10, nbre2:15, result: 150},
    {nbre1:8, nbre2: 5, result: 40},
    {nbre1: 9, nbre2: 50, result: 450}
   ] satisfies {nbre1: number, nbre2: number, result: number} [])('multiplication: $nbre1 X $nbre2 = $result', ({nbre1, nbre2, result})=>{
        expect(mathOpera.produit(nbre1, nbre2)).toBe(result);
   });
})