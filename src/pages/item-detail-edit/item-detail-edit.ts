import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Items } from '../../providers/providers';
import { Item } from '../../models/item';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


@IonicPage()
@Component({
  selector: 'page-item-detail-edit',
  templateUrl: 'item-detail-edit.html',
})
export class ItemDetailEditPage {
  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, navParams: NavParams, public formBuilder: FormBuilder, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }


  ionViewDidLoad() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [{
          label: 'Percentage done',
          data: [100, 90, 30, 80, 50],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
    	     display: false
         },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true,
              min: 0,
              max: 100,
              callback: function(value) {return value + "%"}
            },
            scaleLabel: {
              display: true,
              labelString: "Percentage"
       }
          }]
        }
      }

    });
  }
  closeEditPage(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }


}
