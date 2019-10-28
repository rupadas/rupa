import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { PageEvent, MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-number-table',
  templateUrl: './number-table.component.html',
  styleUrls: ['./number-table.component.css']
})

export class NumberTableComponent implements OnInit {
  // MatPaginator Inputs
  length = 100;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  displayedColumns:any;;
  dataSource:any;
  @Input() columns:string[];
  @Input() data:any[];
  @Input() pageSize;
  @ViewChild('ref') ref;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator; 

  constructor() { }

  ngOnInit() {
    this.displayedColumns = this.columns;
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit(): void {   
    this.dataSource.paginator = this.paginator;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  
  matCheckChange(event:any) {
    for(let i=0; i<this.dataSource.filteredData.length; i++) {
      this.dataSource.filteredData[i].checked = this.ref._checked;
    }
  }
}
