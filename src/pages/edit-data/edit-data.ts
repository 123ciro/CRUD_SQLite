import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the EditDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-data',
  templateUrl: 'edit-data.html',
})
export class EditDataPage {


  data ={ idpersona:0,fechatransaccion:"",tipo:"",descripcion:"",cantidad:0,nombre:"",apellido:"",email:"",telefono:"",lugartrabajo:""  };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private sqlite: SQLite,
        private toast: Toast ) {
          this.getCurrenData(navParams.get("idpersona"));
        }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditDataPage');
  }


  getCurrenData(idpersona){
    this.sqlite.create({
      name: 'ciro_prueba.db',
      location: 'default'

  }).then((db:SQLiteObject) =>{
    db.executeSql('SELECT * FROM personas where idpersona= ?',[idpersona])
    .then(res => {
      if(res.rows.length > 0) {
        this.data.idpersona = res.rows.item(0).idpersona;
        this.data.nombre = res.rows.item(0).nombre;
        this.data.apellido = res.rows.item(0).apellido;
        this.data.lugartrabajo = res.rows.item(0).lugartrabajo;
        this.data.tipo = res.rows.item(0).tipo;
        this.data.email = res.rows.item(0).email;
        this.data.telefono = res.rows.item(0).telefono;
        this.data.fechatransaccion = res.rows.item(0).fechatransaccion;
        this.data.cantidad = res.rows.item(0).cantidad;
      }

  })
  .catch(e => {

    console.log(e);
    this.toast.show(e,'5000','center').subscribe(
      toast =>{
        console.log(toast);
      }
    );
  });  
  }).catch( e=> {
    console.log(e);
    this.toast.show(e,'5000','center').subscribe(
      toast =>{
        console.log(toast);
      }
    );

  });

}

updateData() {
  this.sqlite.create({
    name: 'ciro_prueba.db',
    location: 'default'
  }).then((db: SQLiteObject) => {
    db.executeSql('UPDATE personas SET nombre=?,apellido=?,lugartrabajo=?,fechatransaccion=? ,tipo=? ,cantidad=? ,descripcion=? ,telefono=? WHERE idpersona=?',[this.data.nombre,this.data.apellido,this.data.lugartrabajo,this.data.fechatransaccion,this.data.tipo,this.data.cantidad,this.data.descripcion,this.data.telefono,this.data.idpersona])
      .then(res => {
        console.log(res);
        this.toast.show('Data actualizado', '5000', 'center').subscribe(
          toast => {
            this.navCtrl.popToRoot();
          }
        );
      })
      .catch(e => {
        console.log(e);
        this.toast.show(e, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      });
  }).catch(e => {
    console.log(e);
    this.toast.show(e, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  });
}


}
