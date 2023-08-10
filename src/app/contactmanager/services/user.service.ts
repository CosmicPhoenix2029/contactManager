import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[];
  }

  constructor(private http: HttpClient) { 
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  loadAll() {
    const url = 'https://angular-material-api.azurewebsites.net/users';  
    
    return this.http.get<User[]>(url).subscribe({
      next: data => { 
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users); 
      },
      error: err => { 
        console.log('Failed to fetch users'); 
      }
    });
  }

  getUserById(id: number): User | undefined {
    return this.dataStore.users.find(user => user.id == id);
  }
}
