import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoadImagesPage } from './load-images.page';

describe('LoadImagesPage', () => {
  let component: LoadImagesPage;
  let fixture: ComponentFixture<LoadImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadImagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
