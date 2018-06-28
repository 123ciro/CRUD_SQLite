import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the AddDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-data',
  templateUrl: 'add-data.html',
})

export class AddDataPage {

  data ={ fechatransaccion:"",tipo:"",descripcion:"",cantidad:0,nombre:"",apellido:"",email:"",telefono:"",lugartrabajo:""  };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private sqlite: SQLite,
        private toast: Toast ) {

        }

        ionViewDidLoad() {
          console.log('ionViewDidLoad AddDataPage');
          }




          
        saveData(){
          this.sqlite.create({
            name: 'ciro_prueba.db',
            location: 'default'
        }).then((db: SQLiteObject ) => {
          db.executeSql('INSERT INTO personas values(NULL,?,?,?,?,?,?,?,?,?)',[this.data.nombre,this.data.apellido,
          this.data.lugartrabajo,this.data.fechatransaccion,this.data.email,this.data.telefono,this.data.cantidad,
        this.data.tipo,this.data.descripcion])
        .then(res =>{
          console.log(res);
          this.toast.show('Datos Guardados','5000','center').subscribe(

            toast => {
              this.navCtrl.popToRoot();
            }

          );
        })
        .catch(e=> {
          console.log(e);
          this.toast.show(e,'5000','center').subscribe(
            toast =>{
              console.log(toast);
            }
          );
        })

        }).catch( e=> {
          console.log(e);
          this.toast.show(e,'5000','center').subscribe(
            toast =>{
              console.log(toast);
            }
          );
        }); 

 }

}