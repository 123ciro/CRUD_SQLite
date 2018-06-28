import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { AddDataPage } from '../add-data/add-data';
import { EditDataPage } from '../edit-data/edit-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personas: any = [];
  totalingreso= 0;
  totalgastos= 0;
  balance= 0;


  constructor(public navCtrl: NavController,
    private sqlite: SQLite
  ) {

  }


  ionViewDidLOad() {
    this.getData();
  }

  ionViewWillEnter() {
    this.getData();
  }

  getData() {
    this.sqlite.create({
      name: 'ciro_prueba.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      //codigo para crear la tabla personas
      db.executeSql('CREATE TABLE IF NOT EXISTS personas(idpersona INTEGER PRIMARY KEY,nombre TEXT, apellido TEXT, lugartrabajo TEXT, fechatransaccion TEXT, email TEXT, telefono TEXT, cantidad INT,tipo TEXT, descripcion TEXT     )'
      ,{}).then(res => console.log('EXECUCION SQL')).catch(e => console.log(e));

      db.executeSql('select * from personas ORDER BY idpersona DESC',{}).then(res => {
        this.personas = [];
        for (var i=0 ;i<res.rows.lengt; i++){
          this.personas.push({
            idpersona:res.rows.item(i).idpersona,
            nombre:res.rows.item(i).nombre,
            apellido:res.rows.item(i).apellido,
            lugartrabajo:res.rows.item(i).lugartrabajo,
            fechatransaccion:res.rows.item(i).fechatransaccion,
            email:res.rows.item(i).email,
            telefono:res.rows.item(i).telefono,
            cantidad:res.rows.item(i).cantidad,
            tipo:res.rows.item(i).tipo,
            descripcion:res.rows.item(i).descripcion
            


          })
        }
      }).catch(e => console.log(e));
      db.executeSql('select sum(cantidad) as totalingreso from personas where tipo="Ingreso"',{})
      .then(res => {
        if(res.rows.length>0){
          this.totalingreso= parseInt(res.rows.item(0).totalingreso);
          this.balance=this.totalingreso-this.totalgastos;
        }
      })

    } ).catch(e=> console.log(e));
}

addData(){
  this.navCtrl.push(AddDataPage);
}

editData(idpersona){
  this.navCtrl.push(EditDataPage,{
    idpersona:idpersona
  });
}

deletaData(idpersona){
  this.sqlite.create({
    name:'ciro_prueba.db',
    location:'default'
  }).then((db:SQLiteObject) => {
    db.executeSql('DELETE FROM personas where idpersona =? ',[idpersona])
    .then(res => {
      console.log(res);
      this.getData();
    })
    .catch(e => console.log(e));
  }).catch(e=> console.log(e));
}


}
