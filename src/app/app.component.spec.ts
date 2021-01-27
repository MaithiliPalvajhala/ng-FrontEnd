import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {CalcPremiumService} from './services/calc-premium.service'
import { Http,ConnectionBackend,RequestOptions } from '@angular/http'
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
        
      ],
      declarations: [
        AppComponent
      ],
      providers:[CalcPremiumService, Http,ConnectionBackend,RequestOptions]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Calculate premium with valid occupation',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const testSelect = fixture.debugElement.query(By.css('select'));
    const form = fixture.debugElement.query(By.css('form'))
    testSelect.triggerEventHandler('change',{testSelect,form});

    fixture.detectChanges();

    const app= fixture.componentInstance;
    //let result = app.calculateDeathPremium()

  });

  
  
});

