import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fb: FormBuilder) {}

  public form = this.fb.group({

    nombre: ['', Validators.required],
    activo: [false],

    menu1: this.fb.group({

      roles: [false],
      usuario: [false],
      tablero: [false]

    }),
    menu2: this.fb.group({

      soli_captura: [false],
      consulta_captura: [false]
    }),
    menu3: this.fb.group({

      asignar_codigo: [false],
      lista_codigo: [false],
      tablero: [false]
    })

  })
  

  clear() {
    this.form.reset();
  }

  Send(): void {
    console.log('send ->' + JSON.stringify(this.form.value))
  }


}
