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
      //phan trang---------------------------------
      this.config = {
        itemsPerPage: 3,
        currentPage: 1,
        totalItems: this.facilities.length
      };
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
      document.getElementById("deleteModal").click();
      // this.ngOnInit();
      confirm("delete thanh cong")
      this.ngOnInit();
      // @ts-ignore
      //   window.location = "http://localhost:4200/list";
    })
  }

//form de search theo truong name va room
  config: any;
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
//re-fresh page
//   RefeshPage() {
//     console.log('refresh')
//     this.facilitiesService.findAll("", "").subscribe(value => {
//       this.facilities = value;
//     })
//   }
  //ham phan trang-------------------------
  pageChanged(event: number) {
    this.config.currentPage = event;
  }
}
