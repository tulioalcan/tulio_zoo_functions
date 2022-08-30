const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('confirmar se o argumento count retorna 04 elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('confirmar se o argumento names retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('confirmar se o argumento averageAge retorna a idade média dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('confirmar se o argumento location retornar a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('confirmar se o argumento popularity retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('confirmar se o argumento availability retornar um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('verifica se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('confirmar se para nenhum argumento passado a função ela retorna udefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
});
