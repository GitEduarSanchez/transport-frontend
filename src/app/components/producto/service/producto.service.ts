import { Producto } from "../models/Producto-model";


@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private apiUrl = 'https://localhost:5000/api/Producto';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}

