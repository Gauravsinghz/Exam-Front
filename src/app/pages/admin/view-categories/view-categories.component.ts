import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  constructor(private  _category:CategoryService) { }
catgegories=[
  {
    cid:9,
    title:'programming',
    description:'this is teast category'

  },
  {
    cid:9,
    title:'programming',
    description:'this is teast category'

  }
]
  ngOnInit(): void {

    this,this._category.categories().subscribe(
      (data:any)=>{
        this.catgegories=data;
        console.log(this._category);
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error!!","Error in loading data");
      });
  }

}
