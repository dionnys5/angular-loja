import { AcessoAdminModule } from './acesso-admin.module';

describe('AcessoAdminModule', () => {
  let acessoAdminModule: AcessoAdminModule;

  beforeEach(() => {
    acessoAdminModule = new AcessoAdminModule();
  });

  it('should create an instance', () => {
    expect(acessoAdminModule).toBeTruthy();
  });
});
