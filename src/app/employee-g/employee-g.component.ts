/**import { Component, OnInit } from '@angular/core';
import { chart } from './employee-g.component.spec';
import { LegendPosition } from '@swimlane/ngx-charts';
import { singleDataOption } from '../_data/singleData';
import { multiDataOptions } from '../_data/multiData'

@Component({
selector: 'app-employee-g',
templateUrl: './employee-g.component.html',
styleUrls: ['./employee-g.component.css']
})
export class EmployeeGComponent implements OnInit {

  constructor() { }

  export class BarChartComponent implements OnInit {

    singleDataOption: any[] = [];
    multiDataOptions: any[] = [];
  
    // options
    legendTitleMulti: string = '';
    legend: boolean = true;
    legendlocation = LegendPosition.Below;
    xAxis: boolean = true;
    yAxis: boolean = true;
    yAxisLabel: string = 'Percentage';
    xAxisLabel: string = 'Device Type';
    showXAxisLabel: boolean = true;
    showYAxisLabel: boolean = true;
    maxXAxisTickLength: number = 30;
    maxYAxisTickLength: number = 30;
    trimXAxisTicks: boolean = false;
    trimYAxisTicks: boolean = false;
    rotateXAxisTicks: boolean = false;
  
    xAxisTicks: any[] = ['Laptop', 'Monitor', 'Keyboard', 'Mouse', 'USB Flash', 'DVD-ROM']
    yAxisTicks: any[] = [100, 500, 1000, 2000, 3000]
  
    animations: boolean = true; 
  
    showGridLines: boolean = true; 
  
    showDataLabel: boolean = true; 
  
    gradient: boolean = true;
    colorScheme = {
      domain: ['red', 'blue', 'purple', 'lime', 'gray', 'maroon']
    };
  
    activeEntries: any[] = []
    barPadding: number = 5
    tooltipDisabled: boolean = false;
  
    yScaleMax: number = 4000;
  
    roundEdges: boolean = false;
  
    constructor() { Object.assign(this, { singleDataOption, multiDataOptions }); }
  
    ngOnInit(): void {
    }
  
    onSelect(event: any) {
      console.log(event);
    }
  
    onActivate(data: any): void {
      console.log('Activate', JSON.parse(JSON.stringify(data)));
    }
  
    onDeactivate(data: any): void {
      console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }
  
    formatString(input: string): string {
      return input.toUpperCase()
    }
  
    formatNumber(input: number): number {
      return input
    }
  }**/