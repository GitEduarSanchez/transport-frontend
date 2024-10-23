import { Producto } from "./models/Producto-model";
import { ProductoService } from "./service/producto.service";

@Component({
  selector: 'app-Producto',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './Prodcuto.component.html',
  styleUrls: ['./Producto.component.css'],
  providers: [ProductoService],
})
export class ProductoComponent {
  conductors: Producto[] = [];

  Producto(private userService: ProductoService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.Producto = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
}
function Component(arg0: { selector: string; standalone: boolean; imports: any[]; templateUrl: string; styleUrls: string[]; providers: (typeof ProductoService)[]; }): (target: typeof ConductorComponent) => void | typeof ConductorComponent {
  throw new Error("Function not implemented.");
}

