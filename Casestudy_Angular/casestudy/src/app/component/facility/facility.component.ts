import {Component, OnInit} from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityServiceService} from "../../service/facility-service.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilities: Facility[] = [];
  formSearch: FormGroup;
  page = 1;
  pageSize = 4;

  constructor(private facilitiesService: FacilityServiceService) {
  }

  ngOnInit(): void {
    this.buildForm();
    // waiting json server tra result => value va gan vao bien local facility
    this.facilitiesService.findAll('', '').subscribe(value => {
      this.facilities = value;
    });
  }

  facilitySelect: Facility = {};

  // bien phu de ghi nho doi tuong xoa hien thi
  checkItemDelete(item: Facility) {
    this.facilitySelect = item;
  }

  // bam de thuc hien hanh dong xoa
  deleteThis(id: number) {
    this.facilitiesService.deleteById(id).subscribe(value => {
      this.facilitySelect = {};
      // document.getElementById("deleteModal").click();
      // this.ngOnInit();
      confirm("delete thanh cong")
      // @ts-ignore
      window.location = "http://localhost:4200/list";
    })
  }

//form de search theo truong name va room
  buildForm() {
    this.formSearch = new FormGroup({
      name: new FormControl(""),
      room: new FormControl("")
    })
  }

  searchByNameAndRoom() {
    this.facilitiesService.findAll(this.formSearch.value.name, this.formSearch.value.room).subscribe(value => {
      this.facilities = value;
    })
  }

  RefeshPage() {
    this.facilitiesService.findAll("", "").subscribe(value => {
      this.facilities = value;
    })
  }
}
