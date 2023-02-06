import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerServiceService} from '../../service/customer-service.service';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[];
  formSearch: FormGroup;
  constructor(private customerService: CustomerServiceService) { }

  ngOnInit(): void {
    this.buildForm();
    this.customerService.findAll('','').subscribe(value => {
      this.customers = value;
  };

  private buildForm() {
      this.formSearch = new FormGroup({
          name: new FormControl(""),
          room: new FormControl("")
        }
      )
    }

}

  private buildForm() {

  }

