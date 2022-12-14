import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FotosService } from '../../services/fotos.service';


@Component({
  selector: 'app-escanearQR',
  templateUrl: './escanearQR.page.html',
  styleUrls: ['./escanearQR.page.scss'],
})
export class escanearQRPage implements OnInit {

  code: any;

  constructor(private fotosService:FotosService,
    private menuController:MenuController) { }

ngOnInit() {
}

addPhotoToGallery() {
  this.fotosService.addNewToGallery();
}
mostrarMenu(){
  this.menuController.enable(true,'alumno')
  this.menuController.open('alumno');
}

}

