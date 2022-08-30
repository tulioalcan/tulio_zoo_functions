const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('confirmar se para nenhum argumento passado a função ela retorna array de dias e horários', () => {
    expect(getOpeningHours()).toEqual(
      {
        Tuesday: { open: 8, close: 6 },
        Wednesday: { open: 8, close: 6 },
        Thursday: { open: 10, close: 8 },
        Friday: { open: 10, close: 8 },
        Saturday: { open: 8, close: 10 },
        Sunday: { open: 8, close: 8 },
        Monday: { open: 0, close: 0 },
      },
    );
  });
  it('deve retornar "The zoo is closed" para os argumentos Monday e 09:00 AM', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('deve retornar "The zoo is open" para os argumentos Tuesday e 09:00 PM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('deve retornar "The zoo is closed" para os argumentos Wednesday e 09:00 AM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Testa se mensagem de erro de dia inválido aparece ao lançar parâmentro inválido', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Testa se mensagem de erro de abreviação é lançada ao escrever abreviação errada', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testa se mensagem de erro para hora escrita errada', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('Testa se mensagem de erro para mituto escrito errado', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  it('Testa se mensagem de erro é enviada se número das horas não está entre 00 e 12', () => {
    expect(() => getOpeningHours('Tuesday', '18:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Testa se mensagem de erro é enviada se número dos minutos não está entre 00 e 59', () => {
    expect(() => getOpeningHours('Tuesday', '09:89-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
