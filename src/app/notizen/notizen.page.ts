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
    // Check if taskName, taskDescription and taskTime are not empty
    if (this.taskName.length > 0 && this.taskDescription.length > 0 && this.taskTime.length > 0) {
      // Create a new task object with taskName, taskDescription and taskTime
      let task = {
        taskName: this.taskName,
        taskDescription: this.taskDescription,
        taskTime: this.taskTime
      };
      // Add the task to the taskList array
      this.taskList.push(task);
      // Reset taskName, taskDescription and taskTime to empty strings
      this.taskName = "";
      this.taskDescription = "";
      this.taskTime = "";
    } else {
      // Call the fieldIsEmpty function if taskName, taskDescription or taskTime is empty
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
      header: "Field can't be empty",
      buttons: ['OK']
    });

    await alert.present();
  }
  
  async changeTask(taskName: string, taskDescription: string, taskTime: string): Promise <any> {
    return new Promise(async (resolve: any) => {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Change your Task',
        inputs: [
          {
            name: 'name1',
            type: 'text',
            value: taskName
          },
          {
            name: 'name2',
            type: 'textarea',
            value: taskDescription
          },
          {
            name: 'name3',
            type: 'time',
            value: taskTime
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
            handler: (data) => {
              console.log('Confirm Ok', data);
              resolve(data);
            }
          }
        ]
      });
      alert.present();
    });
  }

  async editTask(task, index) {
    await this.changeTask(task.taskName, task.taskDescription, task.taskTime).then((data) => {
      this.taskList[index]={ taskName: data.name1, taskDescription: data.name2, taskTime: data.name3};
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