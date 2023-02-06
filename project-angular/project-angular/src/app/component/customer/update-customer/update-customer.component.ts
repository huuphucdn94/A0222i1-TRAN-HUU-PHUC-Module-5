import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../../model/customer";
import {CustomerServiceService} from "../../../service/customer-service.service";


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  formUpdate: FormGroup

  customerEdit: Customer = {};
  constructor(private customerService: CustomerServiceService,
              private router : Router,
              private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.buildThisForm();
    if(this.router.url.includes("create")) return;
    this.activatedRouter.paramMap.subscribe(value => {
      let id = +value.get("id");
      this.customerService.findById(id).subscribe(value => {
        this.customerEdit = value;
        this.buildThisForm();
      })
    })

  }
  buildThisForm() {
    this.formUpdate = new FormGroup({
      "id": new FormControl(this.customerEdit.id),
      "name": new FormControl(this.customerEdit.name,[Validators.required,Validators.pattern("^[A-Za-z ]+$")]),
      "ma_khach_hang": new FormControl(this.customerEdit.ma_khach_hang,[Validators.min(1)]),
      "ngay_mo_so": new FormControl(this.customerEdit.ngay_mo_so,[Validators.min(1)]),
      "Thoi_gian_bat_dau": new FormControl(this.customerEdit.Thoi_gian_bat_dau,[Validators.min(1)]),
      "ky_han": new FormControl(this.customerEdit.ky_han),
      "so_tien_gui": new FormControl(this.customerEdit.so_tien_gui),
      "lai_suat": new FormControl(this.customerEdit.lai_suat),
      "uu_dai": new FormControl(this.customerEdit.uu_dai),
    })
  }
  saveUpdateForm() {
    this.customerService.save(this.formUpdate.value).subscribe(value => {
      this.router.navigateByUrl("list").then(result => {
        this.formUpdate.reset();
      })
    })
  }
}
