import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiProvinceVietNamService } from 'src/app/services/proviceVietNam/api-province-viet-nam.service';
import { TaskService } from 'src/app/services/task/task.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-edit-form-task',
  templateUrl: './add-edit-form-task.component.html',
  styleUrls: ['./add-edit-form-task.component.scss']
})
export class AddEditFormTaskComponent {
  fetchDataProvince: string[] = [
    "Ha Noi",
    "Ho Chi Minh"
  ];
  fetchDataDistrict: string[] = [
    "Dong Da",
    "Ba Dinh"
  ];
  fetchDataWards: string[] = [
    "Bla bla",
    "Blo Blo"
  ]
  favoriteTopic: string[] = [
    "AI & Machine Learning",
    "Web Development",
    "Data Science",
    "Blockchain & Cryptocurrencies",
    "Internet of Things (IoT)",
    "Mobile App Development",
    "DevOps",
    "Cybersecurity",
    "Artificial Intelligence in Healthcare",
    "Augmented Reality (AR) and Virtual Reality (VR)"
  ];

  taskForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private taskService: TaskService,
    private provinceApiService: ApiProvinceVietNamService, private dialogRef: MatDialogRef<AddEditFormTaskComponent>) {
    this.taskForm = this.formBuilder.group({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      province: "",
      district: "",
      wards: "",
      gender: "",
      dob: "",
      favoriteTopic: [],
      task: ""
    })
  }

  handleSubmitFormTask(): void {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value).subscribe({
        next: (val: object) => {
          Swal.fire({
            icon: 'success',
            title: 'Create task successful!',
            showConfirmButton: false,
            timer: 1500
          })

          this.dialogRef.close(true)
        },
        error: (err: object) => {
          Swal.fire({
            icon: 'error',
            title: "Create task error!",
            showConfirmButton: false,
            timer: 1500
          })
        }

      })
    }

  }

}
