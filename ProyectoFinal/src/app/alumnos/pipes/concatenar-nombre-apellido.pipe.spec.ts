import { ConcatenarNombreApellidoPipe } from './concatenar-nombre-apellido.pipe';

describe('ConcatenarNombreApellidoPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatenarNombreApellidoPipe();
    expect(pipe).toBeTruthy();
  });
});
