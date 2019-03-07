import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<any> = [
     {
      'id': "1",
      'name': "Alex",
      'father_name': "baum",
      'city': "baum",
      'phone': "123",
      'email': "bilal@gmail.com",
      'description': "this is description 1 for a complaint registered by user  1",
      'image': "test",
      'state': "Solved",
      'remarks': "no remarks",
      'engineer_id': "baum",
      'user_id': "1",
      'datetime': "25-Nov-2018 11:00:00 AM"
    },
    {
      'id': "2",
      'name': "Alex",
      'father_name': "baum",
      'city': "baum",
      'phone': "123",
      'email': "bilal@gmail.com",
      'description': "description 2",
      'image': "test",
      'state': "Solved",
      'remarks': "no remarks",
      'engineer_id': "baum",
      'user_id': "1",
      'datetime': "25-Nov-2018 11:00:00 AM"
    },
    {
      'id': "3",
      'name': "Alex",
      'father_name': "baum",
      'city': "baum",
      'phone': "123",
      'email': "bilal@gmail.com",
      'description': "description 3",
      'image': "test",
      'state': "Solved",
      'remarks': "no remarks",
      'engineer_id': "baum",
      'user_id': "1",
      'datetime': "25-Nov-2018 11:00:00 AM"
    }
  ]

  constructor() { }

  
  createItem(name, father_name, city, phone, email, description, image,user_id){
    let randomId = Math.random().toString(36).substr(2, 5);
    this.items.push({
      'id': "0",
      'name': name,
      'father_name': father_name,
      'city': city ,
      'phone': phone,
      'email': email,
      'description': description,
      'image': image,
      'state': "New",
      'remarks': "",
      'engineer_id': "",
      'user_id': user_id,
      'datetime': "25-Nov-2018 11:00:00 AM"
    });
  }

  getItems(){
    return this.items;
  }

  updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id);
    this.items[itemIndex] = newValues;
  }


}
