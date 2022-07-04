import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notizen',
  templateUrl: './notizen.page.html',
  styleUrls: ['./notizen.page.scss'],
})
export class NotizenPage implements OnInit {

  taskName: any = ""; // Entered Text
  taskDescription: any ="";
  taskTime: any="";
  newText: any="";

  taskList=[];

  constructor(public alertController: AlertController) {}

  ngOnInit() {
  }

  // addTask Function
  // First we check if the text is entered or not in input box by verifying if length > 0
  // If length is greater than 0, then only we add taskName to taskList array
  // After adding we reset the taskName
  addTask() {
    if (this.taskName.length > 0 && this.taskDescription.length > 0 && this.taskTime.length > 0) {
      this.taskList.push(this.taskName, this.taskDescription, this.taskTime);
      this.taskName = "";
      this.taskDescription ="";
      this.taskTime="";
    }else {
      this.fieldIsEmpty();
    }
  }
  // deleteTask Function
  // When user clicks the delete task button, this function is called with index i as parameter
  // Since tasks are added to taskList, we delete the task at index i using splice() array method
  // This deletes only that task at index i
  deleteTask(index) {
    this.taskList.splice(index, 1);
  }

  async fieldIsEmpty() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Field can not be empty',
      buttons: ['OK']
    });

    await alert.present();
  }
  async changeTask(value: string): Promise <string> {
    return new Promise(async (resolve: any) => {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Change your Task',
        inputs: [
          {
            name: 'name1',
            type: 'text',
            value: value
          },
          {
            name: 'name2',
            type: 'textarea',
            value: value
          },
          {
            name: 'name3',
            type: 'time',
            value: value
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: (name1) => {
              console.log('Confirm Ok', name1.name1);
              resolve(name1.name1);
              resolve(name1.name2);
              resolve(name1.name3);
              const newNote:Note = {taskName: name1.name1, taskDescription: name1.name2, taskTime: name1.name3}
            }
          }
        ]
      });
      alert.present();
    });
  }

  async editTask(Todo, Index) {
    await this.changeTask(Todo).then((res) => {
      console.log(Todo, res);
      this.taskList[Index]=res;
    });
  }

  viewToDo(todo) {
    console.log("Hallo");
  }
}

interface Note {
  taskName: string;
  taskDescription: string;
  taskTime: Time;
}