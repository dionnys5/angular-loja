import { AcessoPublicoModule } from './acesso-publico.module';

describe('AcessoPublicoModule', () => {
  let acessoPublicoModule: AcessoPublicoModule;

  beforeEach(() => {
    acessoPublicoModule = new AcessoPublicoModule();
  });

  it('should create an instance', () => {
    expect(acessoPublicoModule).toBeTruthy();
  });
});
