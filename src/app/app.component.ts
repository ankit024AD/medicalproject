import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { AuthService } from './auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ButtonRenderer } from './cellrender/buttonrenderer';
import { style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  patientslist: any 
  id= ""
  frameworkComponents: any 
  constructor(private auth : AuthService ){
    this.frameworkComponents = {
      buttonRenderer: ButtonRenderer,
    }
  }

  ngOnInit(){
   this.fetchData(this.id)

  }

  fetchData(id: any){
    return this.auth.getpatients(id).subscribe((response: any) => {
    this.patientslist = response
    }
  );
  }
  
  title = 'medicalproject';
  public defaultColDef ={
    sortable: true,
    filter: true,
    floatingFilter: true,}
  public searchvalue: string= ""
  columnDefs: ColDef[] = [
    { field: 'patientId' },
    { headerName:'Name', field: 'fullname', valueGetter(params) {
      return params.data.firstName + ' ' + params.data.lastName;
  } },
    { field: 'status'},
    { field: 'isActive'},
    {
      headerName: '',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'View',
      }
    },

];

onBtnClick1(e: any){
this.id = e.rowData.patientId
this.fetchData(this.id)

}

private gridColumnApi: any;
private gridApi: any;
onGridReady(params:any) {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
}

filteruser(){
  this.gridApi.setQuickFilter(this.searchvalue);
}

}
