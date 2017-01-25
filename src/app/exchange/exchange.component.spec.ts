/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AmChartsDirective } from "amcharts3-angular2/amcharts.directive";
import { ExchangeComponent } from './exchange.component';
import { AssetValuePipe } from '../shared/asset-value.pipe';

describe('ExchangeComponent', () => {
  let component: ExchangeComponent;
  let fixture: ComponentFixture<ExchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
        ChartsModule
      ],
      declarations: [
        ExchangeComponent, 
        AmChartsDirective,
        AssetValuePipe
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
    fixture = TestBed.createComponent(ExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});