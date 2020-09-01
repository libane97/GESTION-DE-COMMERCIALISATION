import {Component, OnInit} from '@angular/core';
import {FactureService} from '../service/facture.service';
import {CommandData} from '../model/CommandData';
import {DetailsCommandData} from '../model/DetailsCommandData';
import {CommandService} from '../service/command.service';
import {LoginService} from '../service/login.service';
import * as jspdf from  'jspdf';
import html2canvas from  'html2canvas';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  numero:any;
  data:DetailsCommandData;
  command:CommandData[];
  test:CommandData;
  total: any;
  constructor(public factureService:FactureService,public commandService:CommandService,
            public loginService:LoginService
              ) { }

  ngOnInit(): void {
      this.commandService.getCommand()
        .subscribe(
          res => {
            this.command = res;
            console.log(this.data);
          },
          err => console.log(err)
        );

  }

  factureByCommand(){
    this.factureService.getFactureByCommand(this.numero)
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
        },
        err => console.log(err)
      );
  }

  getTotal(){

  }

  genereBYCommand() {
    const element = document.getElementById('generecommand');
    html2canvas(element).then((
      canvas)=>{
         const imgdata = canvas.toDataURL('image/png');
         const doc = new jsPDF();
         const imageheigt = canvas.height * 208 / canvas.width;
         doc.addImage(imgdata,0,0,208,imageheigt);
         doc.output('dataurlnewwindow');
         doc.save('FACTURE DE COMMANDE DE Mr'+this.data.commandes.user.username);
    });
  }
}
