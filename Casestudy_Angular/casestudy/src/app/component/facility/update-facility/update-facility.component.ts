import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityServiceService} from "../../../service/facility-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Facility} from "../../../model/facility";

@Component({
  selector: 'app-update-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {
  formUpdate: FormGroup;

  facilityEdit: Facility = {};
  constructor(private facilityService: FacilityServiceService,
              private router : Router,
              private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.buildThisForm();
    if(this.router.url.includes("create")) return;
    this.activatedRouter.paramMap.subscribe(value => {
      let id = +value.get("id");
      this.facilityService.findById(id).subscribe(value => {
        this.facilityEdit = value;
        this.buildThisForm();
      })
    })

  }

  buildThisForm() {
    this.formUpdate = new FormGroup({
      "id": new FormControl(this.facilityEdit.id),
      "name": new FormControl(this.facilityEdit.name,[Validators.required,Validators.pattern("^[A-Za-z ]+$")]),
      "area": new FormControl(this.facilityEdit.area,[Validators.min(1)]),
      "cost": new FormControl(this.facilityEdit.cost,[Validators.min(1)]),
      "max_people": new FormControl(this.facilityEdit.max_people,[Validators.min(1)]),
      "standard_room": new FormControl(this.facilityEdit.standard_room),
      "description": new FormControl(this.facilityEdit.description),
      "pool_area": new FormControl(this.facilityEdit.pool_area),
      "number_of_floors": new FormControl(this.facilityEdit.number_of_floors),
      "rent_type": new FormControl(this.facilityEdit.rent_type),
      "facility_type": new FormControl(this.facilityEdit.facility_type)
    })
  }

  saveUpdateForm() {
    this.facilityService.save(this.formUpdate.value).subscribe(value => {
      this.router.navigateByUrl("list").then(result => {
        this.formUpdate.reset();
      })
    })
  }
}
