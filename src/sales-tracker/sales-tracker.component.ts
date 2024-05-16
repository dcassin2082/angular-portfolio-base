import { SalesHistory } from './../interfaces/sales-history';
import { Component, OnInit } from '@angular/core';
import { SalesTrackerService } from '../services/sales-tracker.service';
import { EmployeeDetail } from '../interfaces/employee-detail';
import Chart from 'chart.js/auto';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-sales-tracker',
  templateUrl: './sales-tracker.component.html',
  styleUrls: ['./sales-tracker.component.scss'],
})
export class SalesTrackerComponent implements OnInit {
  p: number = 1;
  key: string = 'FirstName';
  reverse: boolean = false;
  filter: string;
  selectedRow: Number;
  setClickedRow: Function;
  checked: boolean = false;
  detailChecked: boolean = true;
  aggregateChecked: boolean = true;
  summaryChecked: boolean = false;
  switchChartType: string = 'Column';
  switchDetailChartType: string = 'Column';
  switchAggregateChartType: string = 'Column';
  switchSummaryChartType: string = 'Multi-Column';
  employee: EmployeeDetail;
  salesHistory: SalesHistory[];
  total: number;
  fillColor: string = null;
  loaded: boolean = false;
  // area chart
  public primaryXAxis: Object;
  public chartData: Object[];
  public title: string;
  public subTitle: string;
  public subTitleStyle: Object;
  public primaryYAxis: Object;
  public titleStyle: Object;
  public tooltip: Object;
  public marker: Object;
  public dataSource: Object[];

  //trackball chart
  public crosshair: Object;
  public trackballXAxis: Object;
  public trackballData: Object[] = [];
  public trackballTitle: string;
  public trackballSubTitle: string;
  public trackballYAxis: Object;
  public trackballTitleStyle: Object;
  public trackballSubTitleStyle: Object;
  public trackballTooltip: Object;
  public trackballMarker: Object;

  // column chart
  public legendSettings: Object;
  public multiColumnXAxis: Object;
  public multiColumnTitle: string;
  public multiColumnSubTitle: string;
  public multiColumnYAxis: Object;
  public multiColumnTitleStyle: Object;
  public multiColumnSubTitleStyle: Object;
  public multiColumnTooltip: Object;
  public multiColumnMarker: Object;

  public employeeColumn: any;
  public aggregateColumn: any;
  public aggregateColumn2: any;

  mySubscription: any;

  employeeSalesData: any[];
  currentYear: number;
  aggregateTotal: number;

  public annualSales = [
    {
      year: 2023,
      id: 1,
      bikes: 295500,
      components: 78800,
      clothing: 11820,
      accessories: 7880,
      total: 394000,
    },
    {
      year: 2022,
      id: 1,
      bikes: 517500,
      components: 138000,
      clothing: 20700,
      accessories: 13800,
      total: 690000,
    },
    {
      year: 2021,
      id: 1,
      bikes: 475500,
      components: 126800,
      clothing: 19020,
      accessories: 12680,
      total: 634000,
    },
    {
      year: 2020,
      id: 1,
      bikes: 404250,
      components: 107800,
      clothing: 16170,
      accessories: 10780,
      total: 539000,
    },
    {
      year: 2023,
      id: 3,
      bikes: 308250,
      components: 82200,
      clothing: 12330,
      accessories: 8220,
      total: 411000,
    },
    {
      year: 2022,
      id: 3,
      bikes: 556500,
      components: 148400,
      clothing: 22260,
      accessories: 14840,
      total: 742000,
    },
    {
      year: 2021,
      id: 3,
      bikes: 525750,
      components: 140200,
      clothing: 21030,
      accessories: 14020,
      total: 701000,
    },
    {
      year: 2020,
      id: 3,
      bikes: 515250,
      components: 137400,
      clothing: 20610,
      accessories: 13740,
      total: 687000,
    },
    {
      year: 2023,
      id: 11,
      bikes: 366000,
      components: 97600,
      clothing: 14640,
      accessories: 9760,
      total: 488000,
    },
    {
      year: 2022,
      id: 11,
      bikes: 569250,
      components: 151800,
      clothing: 22770,
      accessories: 15180,
      total: 759000,
    },
    {
      year: 2021,
      id: 11,
      bikes: 544500,
      components: 145200,
      clothing: 21780,
      accessories: 14520,
      total: 726000,
    },
    {
      year: 2020,
      id: 11,
      bikes: 504750,
      components: 134600,
      clothing: 20190,
      accessories: 13460,
      total: 673000,
    },
    {
      year: 2023,
      id: 24,
      bikes: 345000,
      components: 92000,
      clothing: 13800,
      accessories: 9200,
      total: 460000,
    },
    {
      year: 2023,
      id: 24,
      bikes: 534750,
      components: 142600,
      clothing: 21390,
      accessories: 14260,
      total: 713000,
    },
    {
      year: 2021,
      id: 24,
      bikes: 507750,
      components: 135400,
      clothing: 20310,
      accessories: 13540,
      total: 677000,
    },
    {
      year: 2020,
      id: 24,
      bikes: 469500,
      components: 125200,
      clothing: 18780,
      accessories: 12520,
      total: 626000,
    },
    {
      year: 2023,
      id: 50,
      bikes: 331500,
      components: 88400,
      clothing: 13260,
      accessories: 8840,
      total: 442000,
    },
    {
      year: 2022,
      id: 50,
      bikes: 533250,
      components: 142200,
      clothing: 21330,
      accessories: 14220,
      total: 711000,
    },
    {
      year: 2021,
      id: 50,
      bikes: 475500,
      components: 126800,
      clothing: 19020,
      accessories: 12680,
      total: 634000,
    },
    {
      year: 2020,
      id: 50,
      bikes: 440250,
      components: 117400,
      clothing: 17610,
      accessories: 11740,
      total: 587000,
    },
    {
      year: 2023,
      id: 92,
      bikes: 344250,
      components: 91800,
      clothing: 13770,
      accessories: 9180,
      total: 459000,
    },
    {
      year: 2022,
      id: 92,
      bikes: 573000,
      components: 152800,
      clothing: 22920,
      accessories: 15280,
      total: 764000,
    },
    {
      year: 2021,
      id: 92,
      bikes: 489000,
      components: 130400,
      clothing: 19560,
      accessories: 13040,
      total: 652000,
    },
    {
      year: 2020,
      id: 92,
      bikes: 452250,
      components: 120600,
      clothing: 18090,
      accessories: 12060,
      total: 603000,
    },
    {
      year: 2023,
      id: 97,
      bikes: 328500,
      components: 87600,
      clothing: 13140,
      accessories: 8760,
      total: 438000,
    },
    {
      year: 2022,
      id: 97,
      bikes: 545250,
      components: 145400,
      clothing: 21810,
      accessories: 14540,
      total: 727000,
    },
    {
      year: 2021,
      id: 97,
      bikes: 477750,
      components: 127400,
      clothing: 19110,
      accessories: 12740,
      total: 637000,
    },
    {
      year: 2020,
      id: 97,
      bikes: 405750,
      components: 108200,
      clothing: 16230,
      accessories: 10820,
      total: 541000,
    },
  ];

  constructor(public salesTrackerService: SalesTrackerService) {}

  ngOnInit(): void {
    // this.loadTrackballChart();
    this.loadMultiColumnChart();
    this.salesTrackerService.employeeId = -1;
    // this.salesTrackerService.employee = {
    //   EmployeeId: -1,
    //   JobTitle: '',
    //   FirstName: '',
    //   LastName: '',
    //   MiddleName: '',
    //   Rate: null,
    //   AddressLine1: '',
    //   AddressLine2: '',
    //   City: '',
    //   State: '',
    //   PostalCode: '',
    //   PhoneNumber: '',
    //   EmailAddress: '',
    //   Department: '',
    //   PayrollStatus: ''

    // };
    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 1200);
    if (this.salesTrackerService.employees == null) {
      this.salesTrackerService.getEmployees();
    }
    if (this.salesTrackerService.salesHistories == null) {
      this.salesTrackerService.getSalesHistory();
    }

    if (this.salesTrackerService.employee != null) {
      this.getEmployee(this.salesTrackerService.employeeId);
    }
    // this.setRowColors();
    // this.export();
  }
  export() {
    const readyToExport = [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
    ];

    const workBook = XLSX.utils.book_new(); // create a new blank book
    const workSheet = XLSX.utils.json_to_sheet(this.chartData);
    XLSX.utils.book_append_sheet(workBook, workSheet, 'Sales Aggregate'); // add the worksheet to the book
    XLSX.writeFile(workBook, 'salesData.xlsx'); // initiate a file download in browser
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  clearSearch() {
    this.filter = null;
  }

  getEmployee(id: number) {
    debugger;
    if (id != -1) {
      this.total = 0;
      this.aggregateTotal = 0;
      this.employee = this.salesTrackerService.employees.find(
        (x) => x.EmployeeId == id
      );
      this.salesHistory = this.salesTrackerService.salesHistories.filter(
        (x) => x.EmployeeId == id
      );
      this.salesTrackerService.salesHistory = this.salesHistory;
      this.salesHistory.forEach((x) => {
        this.total += x.Amount;
      });
      // this.loadColumnChart(this.salesHistory);
      if (this.detailChecked) {
        this.subTitle = '2021 Sales';
        this.loadColumnChart(this.salesHistory);
      } else {
        this.loadLineChart(this.salesHistory);
        this.subTitle = '2021 Sales';
      }
    }
    this.fillColor = this.getFillColor();
    this.employeeSalesData = this.annualSales.filter((x) => x.id == id);
    this.currentYear = this.employeeSalesData[0].total;
    for (var i = 0; i < this.employeeSalesData.length; i++) {
      this.aggregateTotal += this.employeeSalesData[i].total;
    }
  }

  loadAreaChart(salesHistory: SalesHistory[]) {
    this.dataSource = salesHistory?.map((o) => {
      return { month: o.Month, sales: o.Amount };
    });
    this.primaryXAxis = {
      title: 'Month',
      valueType: 'Category',
      edgeLabelPlacement: 'Shift',
    };
    this.primaryYAxis = {
      minimum: 0,
      maximum: 150,
      interval: 25,
      title: 'Sales Amount',
      labelFormat: '${value}K',
    };
    this.title = this.employee.FirstName + ' ' + this.employee.LastName;
    this.titleStyle = {
      fontFamily: 'Arial',
      fontWeight: 'regular',
      color: this.fillColor,
      size: '24px',
    };
    this.subTitle = '(2021 Sales)';
    this.subTitleStyle = {
      fontFamily: 'Arial',
      fontWeight: 'regular',
      color: this.fillColor,
      size: '14px',
    };
    this.tooltip = {
      enable: true,
    };
    this.marker = {
      dataLabel: {
        visible: true,
      },
    };
    this.fillColor = this.getFillColor();
    // document.getElementById('lblEmployeeDetails').style.color = this.fillColor;
    // document.getElementById('lblSalesHistory').style.color = this.fillColor;
  }
  // setRowColors() {
  //   document.getElementById('tr-0').style.background = '#DD8ABD';
  //   document.getElementById('tr-1').style.background = '#357CD2';
  //   document.getElementById('tr-2').style.background = '#404041';
  //   document.getElementById('tr-3').style.background = '#00BDAE';

  // }
  getFillColor() {
    switch (this.employee.FirstName) {
      case 'Buffy':
        return '#40E0D0';
      case 'Medge':
        return '#6495ED';
      case 'Callie':
        return '#51738a';
      case 'Ira':
        return '#264278';
      case 'Ray':
        return '#9FE2BF';
      case 'Joelle':
        return '#4e545f';
      case 'Teagan':
        return '#3b8b6a';
      default:
        return '#FF7F50';
      /*
          backgroundColor: '#eca511',

          },
          {
            label: 'Ira',
            data: ira,
            backgroundColor: '#264278',*/
      // case 'Buffy':
      //   return '#00BDAE';
      // case 'Medge':
      //   return '#264278';
      // case 'Callie':
      //   return '#357CD2';
      // case 'Ira':
      //   return '#E56590';
      // case 'Ray':
      //   return '#F8B883';
      // case 'Joelle':
      //   return '#70AD47';
      // case 'Teagan':
      //   return '#DD8ABD';
      // default:
      //   return '#eca511';
    }
  }

  // loadTrackballChart() {
  //   this.trackballData = [
  //     {
  //       X: '2020-12-31T00:00:00',
  //       Y: 113,
  //       Y1: 84,
  //       Y2: 61,
  //       Y3: 61,
  //       Y4: 85,
  //       Y5: 77,
  //       Y6: 94,
  //     },
  //     {
  //       X: '2021-01-31T00:00:00',
  //       Y: 54,
  //       Y1: 56,
  //       Y2: 60,
  //       Y3: 64,
  //       Y4: 56,
  //       Y5: 87,
  //       Y6: 41,
  //     },
  //     {
  //       X: '2021-02-28T00:00:00',
  //       Y: 67,
  //       Y1: 44,
  //       Y2: 106,
  //       Y3: 110,
  //       Y4: 88,
  //       Y5: 66,
  //       Y6: 63,
  //     },
  //     {
  //       X: '2021-03-31T00:00:00',
  //       Y: 55,
  //       Y1: 101,
  //       Y2: 60,
  //       Y3: 44,
  //       Y4: 98,
  //       Y5: 118,
  //       Y6: 119,
  //     },
  //     {
  //       X: '2021-04-30T00:00:00',
  //       Y: 84,
  //       Y1: 45,
  //       Y2: 112,
  //       Y3: 95,
  //       Y4: 36,
  //       Y5: 56,
  //       Y6: 72,
  //     },
  //     {
  //       X: '2021-05-31T00:00:00',
  //       Y: 67,
  //       Y1: 64,
  //       Y2: 52,
  //       Y3: 48,
  //       Y4: 110,
  //       Y5: 88,
  //       Y6: 88,
  //     },
  //     {
  //       X: '2021-06-30T00:00:00',
  //       Y: 67,
  //       Y1: 101,
  //       Y2: 98,
  //       Y3: 99,
  //       Y4: 54,
  //       Y5: 44,
  //       Y6: 55,
  //     },
  //   ];
  //   this.trackballXAxis = {
  //     title: 'Sales Rep',
  //     minimum: new Date(2020, 12, 15),
  //     maximum: new Date(2021, 6, 30),
  //     intervalType: 'Months',
  //     valueType: 'DateTime',
  //   };

  //   this.trackballYAxis = {
  //     labelFormat: '${value}K',
  //     title: 'Sales',
  //   };

  //   this.trackballTooltip = {
  //     enable: true,
  //     shared: true,
  //     format: '${series.name} : ${point.x} : ${point.y}',
  //   };
  //   this.crosshair = { enable: true, lineType: 'Vertical' };
  //   this.trackballMarker = { visible: true };
  //   this.trackballTitle = '2021 Sales Line';
  //   this.trackballTitleStyle = {
  //     fontFamily: 'Arial',
  //     fontWeight: 'regular',
  //     color: 'sandybrown',
  //     size: '24px',
  //   };
  //   this.trackballSubTitle = '(thousands)';
  //   this.trackballSubTitleStyle = {
  //     fontFamily: 'Arial',
  //     fontWeight: 'regular',
  //     color: 'rgb(142,137,137)',
  //     size: '12px',
  //   };
  // }

  // setSummaryChartType() {
  //   // this.loadTrackballChart();
  //   this.summaryChecked = !this.summaryChecked;
  //   if (this.summaryChecked) {
  //     this.switchSummaryChartType = 'Trackball';
  //     this.loadTrackballChart();
  //   } else {
  //     this.switchSummaryChartType = 'Multi-Column';
  //     this.loadMultiColumnChart();
  //   }
  // }

  // setDetailChartType() {
  //   // this.loadTrackballChart();
  //   this.detailChecked = !this.detailChecked;
  //   if (this.detailChecked) {
  //     this.switchDetailChartType = 'Column';
  //     this.loadColumnChart(this.salesHistory);
  //   } else {
  //     this.switchDetailChartType = 'Area';
  //     this.loadAreaChart(this.salesHistory);
  //   }
  // }

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  setDetailChartType() {
    debugger;
    // this.loadTrackballChart();
    this.detailChecked = !this.detailChecked;
    if (this.detailChecked) {
      this.switchDetailChartType = 'Column';
      this.loadColumnChart(this.salesHistory);
    } else {
      this.switchDetailChartType = 'Line';
      this.loadLineChart(this.salesHistory);
    }
  }

  setAggregateChartType() {
    // this.loadTrackballChart();
    this.aggregateChecked = !this.aggregateChecked;
    if (this.aggregateChecked) {
      this.switchAggregateChartType = 'Column';
      this.loadMultiColumnChart();
    } else {
      this.switchAggregateChartType = 'Line';
      this.loadMultiLineChart();
    }
  }

  loadLineChart(salesHistory: SalesHistory[]) {
    this.dataSource = salesHistory?.map((o) => {
      return { month: o.Month, sales: o.Amount };
    });
    this.fillColor = this.getFillColor();
    let values = [];
    let months = [];
    this.dataSource.forEach((x) => {
      months.push(x['month']);
      values.push(x['sales']);
    });

    if (this.employeeColumn) {
      this.employeeColumn.destroy();
    }
    this.employeeColumn = new Chart('employee-column', {
      type: 'line',
      data: {
        // values on X-Axis
        labels: months,
        datasets: [
          {
            label: '2023 Sales',
            data: values,
            backgroundColor: this.fillColor,
          },
        ],
      },
      options: {
        // aspectRatio: 2.5,
        responsive: true,
        // maintainAspectRatio: false,
        scales: {
          y: {
            title: { display: true, text: '$(thousands)' },
          },
        },
      },
    });
    // document.getElementById('lblEmployeeDetails').style.color = this.fillColor;
    // document.getElementById('lblSalesHistory').style.color = this.fillColor;
  }

  loadColumnChart(salesHistory: SalesHistory[]) {
    this.dataSource = salesHistory?.map((o) => {
      return { month: o.Month, sales: o.Amount };
    });
    // this.primaryXAxis = {
    //   rangePadding: 'Additional',
    //   valueType: 'Category',
    //   title: 'Month',
    //   labelRotation: -45,
    // };
    // this.primaryYAxis = {
    //   title: 'Sales',
    //   minimum: 0,
    //   maximum: 150,
    //   interval: 25,
    //   labelFormat: '${value}K',
    // };
    // this.legendSettings = {
    //   visible: true,
    // };

    // this.title = this.employee.FirstName + ' ' + this.employee.LastName;
    // this.subTitle = '(2021 Sales)';
    // this.subTitleStyle = {
    //   fontFamily: 'Arial',
    //   fontWeight: 'regular',
    //   color: this.fillColor,
    //   size: '14px',
    // };
    // this.titleStyle = {
    //   fontFamily: 'Arial',
    //   fontWeight: 'regular',
    //   color: this.fillColor,
    //   size: '24px',
    // };
    // this.tooltip = {
    //   enable: true,
    // };
    // this.marker = {
    //   dataLabel: {
    //     visible: true,
    //   },
    // };

    this.fillColor = this.getFillColor();
    // this.primaryYAxis = {
    //   title: 'Sales',
    //   minimum: 0,
    //   maximum: 150,
    //   interval: 25,
    //   labelFormat: '${value}K',
    // };
    // this.primaryXAxis = {
    //   rangePadding: 'Additional',
    //   valueType: 'Category',
    //   title: 'Month',
    //   labelRotation: -45,
    // };

    let values = [];
    let months = [];

    this.dataSource.forEach((x) => {
      months.push(x['month']);
      values.push(x['sales']);
    });

    if (this.employeeColumn) {
      this.employeeColumn.destroy();
    }
    this.employeeColumn = new Chart('employee-column', {
      type: 'bar',
      data: {
        // values on X-Axis
        labels: months,
        datasets: [
          {
            label: '2023 Sales',
            data: values,
            backgroundColor: this.fillColor,
          },
          // {
          //   label: 'Profit',
          //   data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
          //   backgroundColor: 'limegreen',
          // },
        ],
      },
      options: {
        // aspectRatio: 2.5,
        responsive: true,
        // maintainAspectRatio: false,
        scales: {
          y: {
            title: { display: true, text: '$(thousands)' },
          },
        },
      },
    });
    // document.getElementById('lblEmployeeDetails').style.color = this.fillColor;
    // document.getElementById('lblSalesHistory').style.color = this.fillColor;
  }

  loadMultiColumnChart() {
    this.chartData = [
      {
        month: 'Jan',
        Buffy: 54,
        Medge: 56,
        Callie: 60,
        Ira: 64,
        Ray: 56,
        Joelle: 87,
        Teagan: 41,
      },
      {
        month: 'Feb',
        Buffy: 67,
        Medge: 44,
        Callie: 106,
        Ira: 110,
        Ray: 88,
        Joelle: 66,
        Teagan: 63,
      },
      {
        month: 'Mar',
        Buffy: 55,
        Medge: 101,
        Callie: 60,
        Ira: 44,
        Ray: 98,
        Joelle: 118,
        Teagan: 119,
      },
      {
        month: 'Apr',
        Buffy: 84,
        Medge: 45,
        Callie: 112,
        Ira: 95,
        Ray: 36,
        Joelle: 56,
        Teagan: 72,
      },
      {
        month: 'May',
        Buffy: 67,
        Medge: 64,
        Callie: 52,
        Ira: 48,
        Ray: 110,
        Joelle: 88,
        Teagan: 88,
      },
      {
        month: 'Jun',
        Buffy: 67,
        Medge: 101,
        Callie: 98,
        Ira: 99,
        Ray: 54,
        Joelle: 44,
        Teagan: 55,
      },
    ];
    let values = [];
    let months = [];
    let buffy = [];
    let medge = [];
    let callie = [];
    let ira = [];
    let ray = [];
    let joelle = [];
    let teagan = [];
    this.chartData.forEach((x) => {
      months.push(x['month']);
      buffy.push(x['Buffy']);
      medge.push(x['Medge']);
      callie.push(x['Callie']);
      ira.push(x['Ira']);
      ray.push(x['Ray']);
      joelle.push(x['Joelle']);
      teagan.push(x['Teagan']);
    });

    if (this.aggregateColumn) {
      this.aggregateColumn.destroy();
    }
    this.aggregateColumn = new Chart('aggregate-column', {
      type: 'bar',
      data: {
        // values on X-Axis
        labels: months,
        datasets: [
          // {
          {
            label: 'Buffy',
            data: buffy,
            backgroundColor: '#40E0D0',
            borderColor: '#40E0D0',
          },
          {
            label: 'Medge',
            data: medge,
            backgroundColor: '#6495ED',
          },
          {
            label: 'Callie',
            data: callie,
            backgroundColor: '#51738a',
          },
          {
            label: 'Ira',
            data: ira,
            backgroundColor: '#264278',
          },
          {
            label: 'Ray',
            data: ray,
            backgroundColor: '#9FE2BF',
          },
          {
            label: 'Joelle',
            data: joelle,
            backgroundColor: '#4e545f',
          },
          {
            label: 'Teagan',
            data: teagan,
            backgroundColor: '#3b8b6a',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            title: { display: true, text: '$(thousands)' },
          },
        },
      },
    });

    if (this.aggregateColumn2) {
      this.aggregateColumn2.destroy();
    }
    this.aggregateColumn2 = new Chart('aggregate-column2', {
      type: 'bar',
      data: {
        // values on X-Axis
        labels: months,
        datasets: [
          // {
          {
            label: 'Buffy',
            data: buffy,
            backgroundColor: '#40E0D0',
            borderColor: '#40E0D0',
          },
          {
            label: 'Medge',
            data: medge,
            backgroundColor: '#6495ED',
          },
          {
            label: 'Callie',
            data: callie,
            backgroundColor: '#51738a',
          },
          {
            label: 'Ira',
            data: ira,
            backgroundColor: '#264278',
          },
          {
            label: 'Ray',
            data: ray,
            backgroundColor: '#9FE2BF',
          },
          {
            label: 'Joelle',
            data: joelle,
            backgroundColor: '#4e545f',
          },
          {
            label: 'Teagan',
            data: teagan,
            backgroundColor: '#3b8b6a',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            title: { display: true, text: '$(thousands)' },
          },
        },
      },
    });
  }

  loadMultiLineChart() {
    this.chartData = [
      {
        month: 'Jan',
        Buffy: 54,
        Medge: 56,
        Callie: 60,
        Ira: 64,
        Ray: 56,
        Joelle: 87,
        Teagan: 41,
      },
      {
        month: 'Feb',
        Buffy: 67,
        Medge: 44,
        Callie: 106,
        Ira: 110,
        Ray: 88,
        Joelle: 66,
        Teagan: 63,
      },
      {
        month: 'Mar',
        Buffy: 55,
        Medge: 101,
        Callie: 60,
        Ira: 44,
        Ray: 98,
        Joelle: 118,
        Teagan: 119,
      },
      {
        month: 'Apr',
        Buffy: 84,
        Medge: 45,
        Callie: 112,
        Ira: 95,
        Ray: 36,
        Joelle: 56,
        Teagan: 72,
      },
      {
        month: 'May',
        Buffy: 67,
        Medge: 64,
        Callie: 52,
        Ira: 48,
        Ray: 110,
        Joelle: 88,
        Teagan: 88,
      },
      {
        month: 'Jun',
        Buffy: 67,
        Medge: 101,
        Callie: 98,
        Ira: 99,
        Ray: 54,
        Joelle: 44,
        Teagan: 55,
      },
    ];
    let values = [];
    let months = [];
    let buffy = [];
    let medge = [];
    let callie = [];
    let ira = [];
    let ray = [];
    let joelle = [];
    let teagan = [];
    this.chartData.forEach((x) => {
      months.push(x['month']);
      buffy.push(x['Buffy']);
      medge.push(x['Medge']);
      callie.push(x['Callie']);
      ira.push(x['Ira']);
      ray.push(x['Ray']);
      joelle.push(x['Joelle']);
      teagan.push(x['Teagan']);
    });

    if (this.aggregateColumn) {
      this.aggregateColumn.destroy();
    }
    this.aggregateColumn = new Chart('aggregate-column', {
      type: 'line',
      data: {
        // values on X-Axis
        labels: months,
        datasets: [
          // {
          {
            label: 'Buffy',
            data: buffy,
            backgroundColor: '#40E0D0',
            borderColor: '#40E0D0',
          },
          {
            label: 'Medge',
            data: medge,
            backgroundColor: '#6495ED',
            borderColor: '#6495ED',
          },
          {
            label: 'Callie',
            data: callie,
            backgroundColor: '#51738a',
            borderColor: '#51738a',
          },
          {
            label: 'Ira',
            data: ira,
            backgroundColor: '#264278',
            borderColor: '#264278',
          },
          {
            label: 'Ray',
            data: ray,
            backgroundColor: '#9FE2BF',
            borderColor: '#9FE2BF',
          },
          {
            label: 'Joelle',
            data: joelle,
            backgroundColor: '#4e545f',
            borderColor: '#4e545f',
          },
          {
            label: 'Teagan',
            data: teagan,
            backgroundColor: '#3b8b6a',
            borderColor: '#3b8b6a',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            title: { display: true, text: '$(thousands)' },
          },
        },
      },
    });
  }
}
