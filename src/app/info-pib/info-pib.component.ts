import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  consumo: number;
  year: number;
  inversion: number;
  gasto: number;
  exportacion: number;
  importacion: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {year: 2005, consumo: 419077, inversion: 444943, gasto: 472591, exportacion: 492507, importacion: 503416},
  {year: 2006, consumo: 529002, inversion: 558993, gasto: 589694, exportacion: 621266, importacion: 648134},
  {year: 2007, consumo: 670201, inversion: 681101, gasto: 696973, exportacion: 722941, importacion: 755975},
  {year: 2008, consumo: 86720, inversion: 101405, gasto: 117424, exportacion: 128090, importacion: 120026},
  {year: 2009, consumo: 131503, inversion: 155852, gasto: 160351, exportacion: 172869, importacion: 193533},
  {year: 2010, consumo: 191305, inversion: 190994, gasto: 184828, exportacion: 188643, importacion: 196673},
  {year: 2011, consumo: 88125, inversion: 96513, gasto: 102516, exportacion: 104604, importacion: 99158},
  {year: 2012, consumo: 101203, inversion: 113608, gasto: 118690, exportacion: 124241, importacion: 123882},
  {year: 2013, consumo: 125936, inversion: 125673, gasto: 128902, exportacion: 129998, importacion: 134072},
  {year: 2014, consumo: 78708, inversion: 92625, gasto: 105461, exportacion: 118656, importacion: 108395},
  {year: 2015, consumo: 120134, inversion: 144436, gasto: 157977, exportacion: 171443, importacion: 184747},
  {year: 2016, consumo: 182750, inversion: 176279, gasto: 178075, exportacion: 188389, importacion: 205677},
  {year: 2017, consumo: 514853, inversion: 549435, gasto: 586457, exportacion: 605713, importacion: 612616},
  {year: 2018, consumo: 640151, inversion: 684628, gasto: 711415, exportacion: 747939, importacion: 781589},
  {year: 2019, consumo: 804692, inversion: 821489, gasto: 832656, exportacion: 853600, importacion: 881958},
];

@Component({
  selector: 'app-info-pib',
  templateUrl: './info-pib.component.html',
  styleUrls: ['./info-pib.component.css']
})

export class InfoPibComponent implements OnInit {
  displayedColumns: string[] = ['year', 'consumo', 'inversion', 'gasto', 'exportacion', 'importacion'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
