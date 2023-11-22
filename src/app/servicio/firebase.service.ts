import { Injectable } from '@angular/core';
import { Database, ref, get, set } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: Database) { }
}

