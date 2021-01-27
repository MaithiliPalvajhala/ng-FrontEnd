import { TestBed } from '@angular/core/testing';
import {Http} from '@angular/http';
import { ConnectionBackend,RequestOptions } from '@angular/http'

import { CalcPremiumService } from './calc-premium.service';

describe('CalcPremiumService', () => {
  let service: CalcPremiumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcPremiumService,Http,ConnectionBackend,RequestOptions] 
    });
    service = TestBed.inject(CalcPremiumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of occupations',()=>{
    var actualList=['Cleaner','Doctor','Author','Farmer','Mechanic','Florist'];
    var listofOccupations = service.GetOccupations();
    expect(listofOccupations.toString()).toContain(actualList.toString());
  })

  it('should get occupation factor when an occupation is sent',()=>{
    var occu = 'Mechanic';
    var factor = 1.75;
    var factorFromService = service.GetOccupationFactor(occu);
    expect(factorFromService).toEqual(factor);

  })


});
