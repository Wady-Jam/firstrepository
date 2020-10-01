import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IniciosPage } from './inicios.page';

describe('IniciosPage', () => {
  let component: IniciosPage;
  let fixture: ComponentFixture<IniciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IniciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
