import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerServiceService} from "../../service/customer-service.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  formSearch: FormGroup;

  constructor(private customerService: CustomerServiceService) { }

  ngOnInit(): void {
    this.buildForm();
    this.customerService.findAll('', '').subscribe(value => {
      this.customers = value;
    })
  }

  private buildForm() {
    this.formSearch = new FormGroup({
        name: new FormControl(""),
        room: new FormControl("")
      }
    )
  }

  customerSelect: Customer = {};
  checkItemDelete(item: Customer){
    this.customerSelect = item;
  }
  deleteThis(id:number){
    this.customerService.deleteById(id).subscribe(value => {
      this.customerSelect = {};
      document.getElementById("deleteModal").click();
      confirm("delete thanh cong");
      this.ngOnInit();
    })
  }

  searchByIdAndName(){
    this.customerService.findAll(this.formSearch.value.id, this.formSearch.value.name).subscribe(value => {
      this.customers = value;
    })
  }
  private config: any;

  pageChanged(event: number) {
    this.config.currentPage = event;
  }
}
