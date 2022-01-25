import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notizen',
  templateUrl: './notizen.page.html',
  styleUrls: ['./notizen.page.scss'],
})
export class NotizenPage implements OnInit {

  taskName: any = ""; // Entered Text
  taskList = []; // Array to store tasks
  newText: any="";

  constructor(public alertController: AlertController) {}

  ngOnInit() {
  }

  // addTask Function
  // First we check if the text is entered or not in input box by verifying if length > 0
  // If length is greater than 0, then only we add taskName to taskList array
  // After adding we reset the taskName
  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = "";
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
}